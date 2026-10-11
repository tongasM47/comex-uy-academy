import { useEffect, useMemo, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { flashcards, modules, moduleById } from '../data'
import type { Flashcard, ModuleId } from '../data/types'
import { useProgress } from '../lib/ProgressContext'
import { cardLevel, previewInterval, type Grade } from '../lib/progress'
import { shuffle } from '../lib/stats'
import { RichText } from '../components/RichText'
import { Icon } from '../components/Icon'

const NEW_PER_SESSION = 15

export function Flashcards() {
  const [params, setParams] = useSearchParams()
  const mod = (params.get('modulo') ?? 'all') as ModuleId | 'all'
  const { progress, gradeCard } = useProgress()
  const [queue, setQueue] = useState<Flashcard[] | null>(null)
  const [flipped, setFlipped] = useState(false)
  const [reviewed, setReviewed] = useState(0)

  const deck = useMemo(() => (mod === 'all' ? flashcards : flashcards.filter((c) => c.moduleId === mod)), [mod])
  const now = Date.now()
  const due = deck.filter((c) => progress.cards[c.id] && progress.cards[c.id].due <= now)
  const fresh = deck.filter((c) => !progress.cards[c.id])
  const levels = [0, 1, 2].map((lv) => deck.filter((c) => cardLevel(progress.cards[c.id]) === lv).length)

  const start = () => {
    setQueue([...shuffle(due), ...shuffle(fresh).slice(0, NEW_PER_SESSION)])
    setFlipped(false)
    setReviewed(0)
  }

  const card = queue?.[0]

  const grade = (g: Grade) => {
    if (!card || !queue) return
    gradeCard(card.id, g)
    setReviewed((r) => r + 1)
    setFlipped(false)
    // "Otra vez": vuelve al final de la cola de esta sesión
    setQueue(g === 'again' ? [...queue.slice(1), card] : queue.slice(1))
  }

  useEffect(() => {
    if (!card) return
    const onKey = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement || e.target instanceof HTMLSelectElement) return
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault()
        setFlipped((f) => !f)
      } else if (flipped && ['1', '2', '3', '4'].includes(e.key)) {
        grade((['again', 'hard', 'good', 'easy'] as const)[Number(e.key) - 1])
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  })

  if (queue && card) {
    const prev = progress.cards[card.id]
    return (
      <div className="page-narrow">
        <div className="row" style={{ marginBottom: 14 }}>
          <button className="btn btn-ghost btn-sm" onClick={() => setQueue(null)}><Icon name="chevronLeft" size={16} /> Terminar</button>
          <span className="spacer" />
          <span className="small muted">{reviewed} repasadas · quedan {queue.length}</span>
        </div>
        <div className="small muted" style={{ marginBottom: 8 }}>
          Módulo {moduleById[card.moduleId].number}: {moduleById[card.moduleId].short}
          {!prev && <span className="badge badge-stamp" style={{ marginLeft: 8 }}>Nueva</span>}
        </div>
        <div
          className={`flash ${flipped ? 'flipped' : ''}`}
          onClick={() => setFlipped((f) => !f)}
          role="button"
          tabIndex={0}
          aria-label={flipped ? 'Respuesta. Tocá para ver la pregunta' : 'Pregunta. Tocá para ver la respuesta'}
          onKeyDown={(e) => {
            if (e.key === 'Enter') setFlipped((f) => !f)
          }}
        >
          <div className="flash-inner">
            <div className="flash-face sheet" aria-hidden={flipped}>
              <div><RichText text={card.front} /></div>
              <span className="flash-hint">Tocá o apretá espacio para dar vuelta</span>
            </div>
            <div className="flash-face sheet back" aria-hidden={!flipped}>
              <div><RichText text={card.back} /></div>
            </div>
          </div>
        </div>
        {flipped ? (
          <>
            <div className="grade-row" role="group" aria-label="¿Qué tan bien la sabías?">
              {([
                ['again', 'Otra vez'],
                ['hard', 'Difícil'],
                ['good', 'Bien'],
                ['easy', 'Fácil'],
              ] as const).map(([g, label], k) => (
                <button key={g} className={`btn ${g === 'good' ? 'btn-primary' : ''}`} onClick={() => grade(g)}>
                  {label}
                  <small style={g === 'good' ? { color: 'inherit', opacity: 0.85 } : undefined}>{previewInterval(prev, g)} · {k + 1}</small>
                </button>
              ))}
            </div>
            <p className="small muted" style={{ marginTop: 8 }}>
              <Link to={`/leccion/${card.subtopicId}`}>Ver la lección de esta tarjeta</Link>
            </p>
          </>
        ) : (
          <button className="btn btn-primary" style={{ width: '100%', marginTop: 14 }} onClick={() => setFlipped(true)}>
            Mostrar respuesta
          </button>
        )}
      </div>
    )
  }

  return (
    <div className="page-narrow">
      <h1>Flashcards</h1>
      <p className="lede" style={{ marginTop: 8 }}>
        Repaso espaciado: las tarjetas que sabés vuelven cada vez más espaciadas y las que te cuestan vuelven pronto.
        Unos minutos por día alcanzan.
      </p>
      {queue && !card && (
        <div className="sheet pad row" style={{ margin: '18px 0' }}>
          <span className="stamp verde stamp-in">AL DÍA</span>
          <span>Repasaste {reviewed} tarjetas. Volvé mañana para el próximo repaso.</span>
        </div>
      )}
      <div className="sheet pad stack" style={{ marginTop: 18, gap: 16 }}>
        <label className="field">
          Mazo
          <select
            value={mod}
            onChange={(e) => {
              const p = new URLSearchParams(params)
              if (e.target.value === 'all') p.delete('modulo')
              else p.set('modulo', e.target.value)
              setParams(p, { replace: true })
              setQueue(null)
            }}
          >
            <option value="all">Todos los módulos ({flashcards.length} tarjetas)</option>
            {modules.map((m) => (
              <option key={m.id} value={m.id}>{m.number}. {m.title}</option>
            ))}
          </select>
        </label>
        <div className="stat-row">
          <div className="stat"><b>{due.length}</b><span>Para repasar hoy</span></div>
          <div className="stat"><b>{Math.min(fresh.length, NEW_PER_SESSION)}</b><span>Nuevas en esta sesión</span></div>
          <div className="stat"><b>{levels[2]}</b><span>Consolidadas</span></div>
        </div>
        <div className="bar" aria-label="Dominio del mazo" style={{ display: 'flex', height: 10 }}>
          <span style={{ width: `${(levels[2] / deck.length) * 100}%`, background: 'var(--verde)', borderRadius: 0 }} />
          <span style={{ width: `${(levels[1] / deck.length) * 100}%`, background: 'var(--naranja)', borderRadius: 0 }} />
        </div>
        <div className="small muted">
          <span style={{ color: 'var(--verde)' }}>■</span> consolidadas {levels[2]} · <span style={{ color: 'var(--naranja)' }}>■</span> aprendiendo {levels[1]} · sin ver {levels[0]}
        </div>
        <button className="btn btn-primary" style={{ alignSelf: 'flex-start' }} disabled={due.length + fresh.length === 0} onClick={start}>
          <Icon name="play" size={16} /> Empezar repaso
        </button>
      </div>
    </div>
  )
}
