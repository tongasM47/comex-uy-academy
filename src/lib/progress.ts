// Modelo de progreso del alumno, fusión entre dispositivos y repaso espaciado.
// Es puro (sin React ni Firebase) para poder probarlo aislado.

export interface LessonRec { done: boolean; t: number }
export interface QuestionRec { seen: number; correct: number; last: boolean; t: number }
export interface CardRec { ef: number; interval: number; reps: number; due: number; lapses: number; t: number }
export interface ExamRec {
  at: number
  score: number
  total: number
  durationSec: number
  /** moduleId -> [aciertos, total] */
  byModule: Record<string, [number, number]>
}
export interface CaseRec { score: number; total: number; t: number }
export interface InterviewRec { rating: 1 | 2 | 3; t: number }
export interface PodcastRec { listened: boolean; t: number }

export interface Progress {
  v: 1
  lessons: Record<string, LessonRec>
  questions: Record<string, QuestionRec>
  cards: Record<string, CardRec>
  exams: Record<string, ExamRec>
  cases: Record<string, CaseRec>
  interview: Record<string, InterviewRec>
  podcasts: Record<string, PodcastRec>
  /** yyyy-mm-dd -> cantidad de acciones de estudio ese día */
  activity: Record<string, number>
  updatedAt: number
}

export function emptyProgress(): Progress {
  return {
    v: 1,
    lessons: {},
    questions: {},
    cards: {},
    exams: {},
    cases: {},
    interview: {},
    podcasts: {},
    activity: {},
    updatedAt: 0,
  }
}

type Timed = { t: number }

function mergeTimed<T extends Timed>(a: Record<string, T>, b: Record<string, T>): Record<string, T> {
  const out: Record<string, T> = { ...a }
  for (const [k, v] of Object.entries(b)) {
    if (!out[k] || v.t > out[k].t) out[k] = v
  }
  return out
}

/** Fusiona dos estados: por cada registro gana el más reciente; los exámenes se unen. */
export function mergeProgress(a: Progress, b: Progress): Progress {
  const activity: Record<string, number> = { ...a.activity }
  for (const [d, n] of Object.entries(b.activity)) activity[d] = Math.max(activity[d] ?? 0, n)
  return {
    v: 1,
    lessons: mergeTimed(a.lessons, b.lessons),
    questions: mergeTimed(a.questions, b.questions),
    cards: mergeTimed(a.cards, b.cards),
    exams: { ...a.exams, ...b.exams },
    cases: mergeTimed(a.cases, b.cases),
    interview: mergeTimed(a.interview, b.interview),
    podcasts: mergeTimed(a.podcasts, b.podcasts),
    activity,
    updatedAt: Math.max(a.updatedAt, b.updatedAt),
  }
}

/** Valida y normaliza un objeto desconocido (backup importado, documento remoto). */
export function parseProgress(raw: unknown): Progress {
  const base = emptyProgress()
  if (!raw || typeof raw !== 'object') return base
  const r = raw as Partial<Progress>
  const pick = <K extends keyof Progress>(k: K) =>
    r[k] && typeof r[k] === 'object' ? (r[k] as Progress[K]) : base[k]
  return {
    v: 1,
    lessons: pick('lessons'),
    questions: pick('questions'),
    cards: pick('cards'),
    exams: pick('exams'),
    cases: pick('cases'),
    interview: pick('interview'),
    podcasts: pick('podcasts'),
    activity: pick('activity'),
    updatedAt: typeof r.updatedAt === 'number' ? r.updatedAt : 0,
  }
}

export function dayKey(d = new Date()): string {
  const y = d.getFullYear()
  const m = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  return `${y}-${m}-${day}`
}

/** Días seguidos con actividad, contando hoy o ayer como último día. */
export function streak(activity: Record<string, number>): number {
  const d = new Date()
  if (!activity[dayKey(d)]) d.setDate(d.getDate() - 1)
  let n = 0
  while (activity[dayKey(d)]) {
    n++
    d.setDate(d.getDate() - 1)
  }
  return n
}

// ---------------------------------------------------------------------------
// Repaso espaciado (variante de SM-2)
// ---------------------------------------------------------------------------

export type Grade = 'again' | 'hard' | 'good' | 'easy'

const DAY = 24 * 60 * 60 * 1000

export function newCard(now: number): CardRec {
  return { ef: 2.5, interval: 0, reps: 0, due: now, lapses: 0, t: now }
}

export function reviewCard(prev: CardRec | undefined, grade: Grade, now = Date.now()): CardRec {
  const c = prev ?? newCard(now)
  const q = { again: 1, hard: 3, good: 4, easy: 5 }[grade]
  let { ef, interval, reps, lapses } = c
  ef = Math.max(1.3, ef + (0.1 - (5 - q) * (0.08 + (5 - q) * 0.02)))
  if (grade === 'again') {
    reps = 0
    lapses += 1
    interval = 0
    // Vuelve a aparecer en 10 minutos dentro de la misma sesión
    return { ef, interval, reps, lapses, due: now + 10 * 60 * 1000, t: now }
  }
  reps += 1
  if (reps === 1) interval = grade === 'easy' ? 3 : 1
  else if (reps === 2) interval = grade === 'hard' ? 3 : 6
  else interval = Math.round(interval * (grade === 'hard' ? 1.2 : ef) * (grade === 'easy' ? 1.3 : 1))
  return { ef, interval, reps, lapses, due: now + interval * DAY, t: now }
}

/** Texto corto del próximo repaso para mostrar en los botones */
export function previewInterval(prev: CardRec | undefined, grade: Grade): string {
  const now = Date.now()
  const next = reviewCard(prev, grade, now)
  const ms = next.due - now
  if (ms < 60 * 60 * 1000) return `${Math.round(ms / 60000)} min`
  const days = Math.round(ms / DAY)
  if (days < 30) return `${days} d`
  if (days < 365) return `${Math.round(days / 30)} m`
  return `${(days / 365).toFixed(1)} a`
}

/** Dominio de una tarjeta: 0 nueva, 1 aprendiendo, 2 consolidada */
export function cardLevel(c: CardRec | undefined): 0 | 1 | 2 {
  if (!c || c.reps === 0) return 0
  return c.interval >= 21 ? 2 : 1
}
