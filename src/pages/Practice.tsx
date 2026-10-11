import { useMemo, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { modules, moduleById, questions } from '../data'
import type { ModuleId, Question } from '../data/types'
import { useProgress } from '../lib/ProgressContext'
import { shuffle } from '../lib/stats'
import { QuestionCard } from '../components/QuestionCard'
import { Icon } from '../components/Icon'

type Filter = 'todas' | 'nuevas' | 'errores'

export function Practice() {
  const [params, setParams] = useSearchParams()
  const { progress, answerQuestion } = useProgress()
  const mod = (params.get('modulo') ?? 'all') as ModuleId | 'all'
  const filter = (params.get('solo') ?? 'todas') as Filter
  const [count, setCount] = useState(10)
  const [session, setSession] = useState<Question[] | null>(null)
  const [i, setI] = useState(0)
  const [results, setResults] = useState<Record<string, boolean>>({})
  const [seed] = useState(() => Math.floor(Math.random() * 1000))

  const pool = useMemo(() => {
    let qs = mod === 'all' ? questions : questions.filter((q) => q.moduleId === mod)
    if (filter === 'nuevas') qs = qs.filter((q) => !progress.questions[q.id])
    if (filter === 'errores') qs = qs.filter((q) => progress.questions[q.id] && !progress.questions[q.id].last)
    return qs
  }, [mod, filter, progress.questions])

  const setParam = (k: string, v: string) => {
    const p = new URLSearchParams(params)
    if (v === 'all' || v === 'todas') p.delete(k)
    else p.set(k, v)
    setParams(p, { replace: true })
  }

  const start = () => {
    setSession(shuffle(pool).slice(0, count))
    setI(0)
    setResults({})
  }

  if (session) {
    const q = session[i]
    const done = i >= session.length
    const ok = Object.values(results).filter(Boolean).length
    if (done) {
      const ratio = ok / session.length
      return (
        <div className="page-narrow stack" style={{ alignItems: 'flex-start', gap: 16 }}>
          <span className={`stamp big stamp-in ${ratio >= 0.8 ? 'verde' : ratio >= 0.6 ? 'naranja' : 'rojo'}`}>
            {ok}/{session.length}
            <small>{ratio >= 0.8 ? 'LIBRADO' : ratio >= 0.6 ? 'A REVISAR' : 'OBSERVADO'}</small>
          </span>
          <h1>{ratio >= 0.8 ? 'Muy bien.' : ratio >= 0.6 ? 'Vas bien, pero hay que repasar.' : 'Conviene volver a la lección.'}</h1>
          <p className="lede">Respondiste bien {ok} de {session.length}. Las que erraste quedan guardadas para que las repases con el filtro "Mis errores".</p>
          <div className="stack" style={{ width: '100%' }}>
            {session.filter((s) => !results[s.id]).map((s) => (
              <div key={s.id} className="sheet pad small">
                <strong>{s.prompt}</strong>
                <div style={{ marginTop: 4 }}>Respuesta: {s.options[s.answer]}</div>
                <Link to={`/leccion/${s.subtopicId}`} className="small">Ir a la lección</Link>
              </div>
            ))}
          </div>
          <div className="row">
            <button className="btn btn-primary" onClick={start}><Icon name="refresh" size={16} /> Otra tanda</button>
            <button className="btn" onClick={() => setSession(null)}>Cambiar filtros</button>
          </div>
        </div>
      )
    }
    const answered = results[q.id] !== undefined
    return (
      <div className="page-narrow">
        <div className="row" style={{ marginBottom: 14 }}>
          <button className="btn btn-ghost btn-sm" onClick={() => setSession(null)}><Icon name="chevronLeft" size={16} /> Salir</button>
          <div className="bar" style={{ flex: 1 }}><span style={{ width: `${(i / session.length) * 100}%` }} /></div>
          <span className="small muted">{i + 1}/{session.length}</span>
        </div>
        <div className="small muted" style={{ marginBottom: 8 }}>
          Módulo {moduleById[q.moduleId].number}: {moduleById[q.moduleId].short} · {'●'.repeat(q.difficulty)}{'○'.repeat(3 - q.difficulty)}
        </div>
        <div className="sheet pad">
          <QuestionCard
            key={q.id}
            q={q}
            seed={seed}
            onAnswer={(_, correct) => {
              answerQuestion(q.id, correct)
              setResults((r) => ({ ...r, [q.id]: correct }))
            }}
          />
        </div>
        {answered && (
          <div className="row" style={{ marginTop: 14 }}>
            <Link to={`/leccion/${q.subtopicId}`} className="small">Repasar la lección</Link>
            <span className="spacer" />
            <button className="btn btn-primary" onClick={() => setI(i + 1)} autoFocus>
              {i === session.length - 1 ? 'Ver resultado' : 'Siguiente'} <Icon name="chevronRight" size={16} />
            </button>
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="page-narrow">
      <h1>Tests por tema</h1>
      <p className="lede" style={{ marginTop: 8 }}>
        Tandas cortas con corrección inmediata y explicación. Hay {questions.length} preguntas en total.
      </p>

      <div className="sheet pad stack" style={{ marginTop: 18, gap: 18 }}>
        <label className="field">
          Módulo
          <select value={mod} onChange={(e) => setParam('modulo', e.target.value)}>
            <option value="all">Todos los módulos</option>
            {modules.map((m) => (
              <option key={m.id} value={m.id}>{m.number}. {m.title}</option>
            ))}
          </select>
        </label>
        <div>
          <div className="small muted" style={{ marginBottom: 6 }}>Preguntas</div>
          <div className="row" role="group" aria-label="Qué preguntas">
            {([
              ['todas', 'Todas'],
              ['nuevas', 'Las que no respondí'],
              ['errores', 'Mis errores'],
            ] as const).map(([v, label]) => (
              <button key={v} className="chip" aria-pressed={filter === v} onClick={() => setParam('solo', v)}>{label}</button>
            ))}
          </div>
        </div>
        <div>
          <div className="small muted" style={{ marginBottom: 6 }}>Cantidad</div>
          <div className="row" role="group" aria-label="Cantidad">
            {[5, 10, 20, 40].map((n) => (
              <button key={n} className="chip" aria-pressed={count === n} onClick={() => setCount(n)}>{n}</button>
            ))}
          </div>
        </div>
        <div className="row">
          <button className="btn btn-primary" disabled={pool.length === 0} onClick={start}>
            Empezar ({Math.min(count, pool.length)} preguntas)
          </button>
          {pool.length === 0 && (
            <span className="small muted">
              {filter === 'errores' ? 'No tenés errores pendientes en esta selección.' : 'No quedan preguntas sin responder en esta selección.'}
            </span>
          )}
        </div>
      </div>
    </div>
  )
}
