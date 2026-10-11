import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState, type ReactNode } from 'react'
import {
  onAuthStateChanged,
  signInWithPopup,
  signInWithRedirect,
  signOut as fbSignOut,
  type User,
} from 'firebase/auth'
import { doc, onSnapshot, serverTimestamp, setDoc } from 'firebase/firestore'
import { auth, db, googleProvider } from './firebase'
import {
  dayKey,
  emptyProgress,
  mergeProgress,
  parseProgress,
  reviewCard,
  type Grade,
  type Progress,
} from './progress'

export type SyncState = 'local' | 'syncing' | 'synced' | 'offline' | 'error'

interface Ctx {
  user: User | null
  authReady: boolean
  progress: Progress
  sync: SyncState
  signIn: () => Promise<void>
  signOut: () => Promise<void>
  markLesson: (id: string, done: boolean) => void
  answerQuestion: (id: string, correct: boolean) => void
  gradeCard: (id: string, grade: Grade) => void
  saveExam: (id: string, rec: Progress['exams'][string]) => void
  saveCase: (id: string, score: number, total: number) => void
  rateInterview: (id: string, rating: 1 | 2 | 3) => void
  markPodcast: (id: string, listened: boolean) => void
  importProgress: (raw: unknown) => void
  resetProgress: () => void
}

const ProgressCtx = createContext<Ctx | null>(null)

const GUEST_KEY = 'comex:progress:guest'
const userKey = (uid: string) => `comex:progress:${uid}`

function readLocal(key: string): Progress {
  try {
    const raw = localStorage.getItem(key)
    return raw ? parseProgress(JSON.parse(raw)) : emptyProgress()
  } catch {
    return emptyProgress()
  }
}

function writeLocal(key: string, p: Progress) {
  try {
    localStorage.setItem(key, JSON.stringify(p))
  } catch {
    /* almacenamiento lleno o bloqueado: el progreso sigue en memoria y en la nube */
  }
}

export function ProgressProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [authReady, setAuthReady] = useState(false)
  const [progress, setProgress] = useState<Progress>(() => readLocal(GUEST_KEY))
  const [sync, setSync] = useState<SyncState>('local')

  // Claves y referencias para el guardado diferido
  const storageKey = user ? userKey(user.uid) : GUEST_KEY
  const progressRef = useRef(progress)
  progressRef.current = progress
  const dirty = useRef(false)
  const saveTimer = useRef<number | undefined>(undefined)

  useEffect(() => onAuthStateChanged(auth, (u) => {
    setUser(u)
    setAuthReady(true)
  }), [])

  // Al cambiar de usuario: cargar su copia local y, la primera vez, sumar el progreso de invitado
  useEffect(() => {
    if (!authReady) return
    if (!user) {
      setProgress(readLocal(GUEST_KEY))
      setSync('local')
      return
    }
    const guest = readLocal(GUEST_KEY)
    const mine = readLocal(userKey(user.uid))
    const merged = mergeProgress(mine, guest)
    setProgress(merged)
    writeLocal(userKey(user.uid), merged)
    // El progreso de invitado ya quedó en la cuenta
    try {
      localStorage.removeItem(GUEST_KEY)
    } catch {
      /* sin acceso a localStorage */
    }
    if (guest.updatedAt > 0) dirty.current = true
  }, [user, authReady])

  // Escuchar el documento remoto: trae cambios hechos en otros dispositivos
  useEffect(() => {
    if (!user) return
    setSync('syncing')
    const ref = doc(db, 'users', user.uid)
    return onSnapshot(
      ref,
      { includeMetadataChanges: true },
      (snap) => {
        const meta = snap.metadata
        if (snap.exists()) {
          const data = snap.data()
          let remote = emptyProgress()
          try {
            remote = parseProgress(JSON.parse(String(data.progress ?? '{}')))
          } catch {
            /* documento remoto dañado: se reemplaza con la próxima escritura */
          }
          setProgress((cur) => {
            // Un reinicio reciente (updatedAt mayor y sin registros) gana sobre la copia remota
            if (cur.updatedAt > remote.updatedAt && Object.keys(cur.lessons).length === 0 && Object.keys(cur.questions).length === 0 && Object.keys(cur.cards).length === 0) {
              dirty.current = true
              return cur
            }
            const merged = mergeProgress(cur, remote)
            writeLocal(userKey(user.uid), merged)
            if (merged.updatedAt > remote.updatedAt) dirty.current = true
            return merged
          })
        } else {
          dirty.current = true
        }
        setSync(meta.fromCache ? (navigator.onLine ? 'syncing' : 'offline') : meta.hasPendingWrites ? 'syncing' : 'synced')
      },
      () => setSync('error'),
    )
  }, [user])

  const flush = useCallback(async () => {
    if (!user || !dirty.current) return
    dirty.current = false
    const p = progressRef.current
    try {
      await setDoc(doc(db, 'users', user.uid), {
        progress: JSON.stringify(p),
        updatedAt: p.updatedAt,
        savedAt: serverTimestamp(),
        displayName: user.displayName ?? '',
      })
    } catch {
      dirty.current = true
      setSync('error')
    }
  }, [user])

  // Si quedaron cambios pendientes (por ejemplo, el progreso de invitado), guardarlos
  useEffect(() => {
    if (user && dirty.current) void flush()
  }, [user, progress, flush])

  // Guardar al ocultar la pestaña, para no perder lo último
  useEffect(() => {
    const onHide = () => {
      if (document.visibilityState === 'hidden') void flush()
    }
    document.addEventListener('visibilitychange', onHide)
    return () => document.removeEventListener('visibilitychange', onHide)
  }, [flush])

  const update = useCallback(
    (fn: (p: Progress, now: number) => Progress) => {
      setProgress((cur) => {
        const now = Date.now()
        const next = fn(cur, now)
        const day = dayKey()
        next.activity = { ...next.activity, [day]: (next.activity[day] ?? 0) + 1 }
        next.updatedAt = now
        writeLocal(storageKey, next)
        return next
      })
      dirty.current = true
      window.clearTimeout(saveTimer.current)
      saveTimer.current = window.setTimeout(() => void flush(), 1500)
    },
    [storageKey, flush],
  )

  const value = useMemo<Ctx>(
    () => ({
      user,
      authReady,
      progress,
      sync,
      signIn: async () => {
        try {
          await signInWithPopup(auth, googleProvider)
        } catch (e) {
          const code = (e as { code?: string }).code ?? ''
          if (code === 'auth/popup-blocked' || code === 'auth/operation-not-supported-in-this-environment') {
            await signInWithRedirect(auth, googleProvider)
          } else if (code !== 'auth/popup-closed-by-user' && code !== 'auth/cancelled-popup-request') {
            throw e
          }
        }
      },
      signOut: async () => {
        await flush()
        await fbSignOut(auth)
      },
      markLesson: (id, done) =>
        update((p, t) => ({ ...p, lessons: { ...p.lessons, [id]: { done, t } } })),
      answerQuestion: (id, correct) =>
        update((p, t) => {
          const prev = p.questions[id]
          return {
            ...p,
            questions: {
              ...p.questions,
              [id]: {
                seen: (prev?.seen ?? 0) + 1,
                correct: (prev?.correct ?? 0) + (correct ? 1 : 0),
                last: correct,
                t,
              },
            },
          }
        }),
      gradeCard: (id, grade) =>
        update((p, t) => ({ ...p, cards: { ...p.cards, [id]: reviewCard(p.cards[id], grade, t) } })),
      saveExam: (id, rec) => update((p) => ({ ...p, exams: { ...p.exams, [id]: rec } })),
      saveCase: (id, score, total) =>
        update((p, t) => ({ ...p, cases: { ...p.cases, [id]: { score, total, t } } })),
      rateInterview: (id, rating) =>
        update((p, t) => ({ ...p, interview: { ...p.interview, [id]: { rating, t } } })),
      markPodcast: (id, listened) =>
        update((p, t) => ({ ...p, podcasts: { ...p.podcasts, [id]: { listened, t } } })),
      importProgress: (raw) => update((p) => mergeProgress(p, parseProgress(raw))),
      resetProgress: () => {
        const fresh = { ...emptyProgress(), updatedAt: Date.now() }
        setProgress(fresh)
        progressRef.current = fresh
        writeLocal(storageKey, fresh)
        dirty.current = true
        void flush()
      },
    }),
    [user, authReady, progress, sync, update, flush, storageKey],
  )

  return <ProgressCtx.Provider value={value}>{children}</ProgressCtx.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components
export function useProgress(): Ctx {
  const ctx = useContext(ProgressCtx)
  if (!ctx) throw new Error('useProgress debe usarse dentro de ProgressProvider')
  return ctx
}
