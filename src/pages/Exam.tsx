import { useEffect, useMemo, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { modules, moduleById, questions } from '../data'
import type { ModuleId, Question } from '../data/types'
import { useProgress } from '../lib/ProgressContext'
import { shuffle, pct } from '../lib/stats'
import { QuestionCard } from '../components/QuestionCard'
import { RichText } from '../components/RichText'
import { Icon } from '../components/Icon'

interface Config {
  scope: ModuleId | 'all'
  n: number
  minutes: number
}

/** Selección equilibrada: reparte las preguntas entre módulos y mezcla dificultades */
function buildExam(cfg: Config): Question[] {
  if (cfg.scope !== 'all') return shuffle(questions.filter((q) => q.moduleId === cfg.scope)).slice(0, cfg.n)
  const per = Math.floor(cfg.n / modules.length)
  let picked: Question[] = []
  for (const m of modules) picked.push(...shuffle(questions.filter((q) => q.moduleId === m.id)).slice(0, per))
  const rest = shuffle(questions.filter((q) => !picked.includes(q))).slice(0, cfg.n - picked.length)
  picked = shuffle([...picked, ...rest])
  return picked
}

const fmtTime = (s: number) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`

export function Exam() {
  const { progress, answerQuestion, saveExam } = useProgress()
  const [cfg, setCfg] = useState<Config>({ scope: 'all', n: 40, minutes: 60 })
  const [qs, setQs] = useState<Question[] | null>(null)
  const [answers, setAnswers] = useState<Record<string, number>>({})
  const [cur, setCur] = useState(0)
  const [left, setLeft] = useState(0)
  const [finished, setFinished] = useState(false)
  const [confirming, setConfirming] = useState(false)
  const startedAt = useRef(0)
  const [seed] = useState(() => Math.floor(Math.random() * 1000))

  const finish = () => {
    if (!qs || finished) return
    setFinished(true)
    const byModule: Record<string, [number, number]> = {}
    let score = 0
    for (const q of qs) {
      const ok = answers[q.id] === q.answer
      if (ok) score++
      const b = byModule[q.moduleId] ?? [0, 0]
      byModule[q.moduleId] = [b[0] + (ok ? 1 : 0), b[1] + 1]
      if (answers[q.id] !== undefined) answerQuestion(q.id, ok)
    }
    saveExam(`exam-${Date.now()}`, {
      at: Date.now(),
      score,
      total: qs.length,
      durationSec: Math.round((Date.now() - startedAt.current) / 1000),
      byModule,
    })
  }
  const finishRef = useRef(finish)
  finishRef.current = finish

  useEffect(() => {
    if (!qs || finished) return
    const t = window.setInterval(() => {
      setLeft((l) => {
        if (l <= 1) {
          window.clearInterval(t)
          finishRef.current()
          return 0
        }
        return l - 1
      })
    }, 1000)
    return () => window.clearInterval(t)
  }, [qs, finished])

  const history = useMemo(() => Object.values(progress.exams).sort((a, b) => b.at - a.at).slice(0, 8), [progress.exams])

  if (!qs) {
    return (
      <div className="page-narrow">
        <h1>Examen</h1>
        <p className="lede" style={{ marginTop: 8 }}>
          Como una evaluación real: con tiempo, sin ver las respuestas hasta el final. Al terminar ves la nota por módulo y la corrección de cada pregunta.
        </p>
        <div className="sheet pad stack" style={{ marginTop: 18, gap: 18 }}>
          <div className="row" role="group" aria-label="Tipo de examen">
            <button className="chip" aria-pressed={cfg.scope === 'all' && cfg.n === 40} onClick={() => setCfg({ scope: 'all', n: 40, minutes: 60 })}>
              Final integrador: 40 preguntas, 60 min
            </button>
            <button className="chip" aria-pressed={cfg.scope === 'all' && cfg.n === 20} onClick={() => setCfg({ scope: 'all', n: 20, minutes: 30 })}>
              Parcial: 20 preguntas, 30 min
            </button>
          </div>
          <label className="field">
            O un módulo en particular (20 preguntas, 30 min)
            <select
              value={cfg.scope}
              onChange={(e) => {
                const v = e.target.value as ModuleId | 'all'
                setCfg(v === 'all' ? { scope: 'all', n: 40, minutes: 60 } : { scope: v, n: 20, minutes: 30 })
              }}
            >
              <option value="all">Todos los módulos</option>
              {modules.map((m) => <option key={m.id} value={m.id}>{m.number}. {m.title}</option>)}
            </select>
          </label>
          <button
            className="btn btn-primary"
            style={{ alignSelf: 'flex-start' }}
            onClick={() => {
              setQs(buildExam(cfg))
              setAnswers({})
              setCur(0)
              setFinished(false)
              setLeft(cfg.minutes * 60)
              startedAt.current = Date.now()
            }}
          >
            <Icon name="timer" size={16} /> Empezar examen
          </button>
        </div>

        {history.length > 0 && (
          <>
            <div className="section-head"><h2>Exámenes anteriores</h2></div>
            <div className="table-wrap">
              <table className="calc-table">
                <thead><tr><th>Fecha</th><th className="num">Nota</th><th className="num">Tiempo</th></tr></thead>
                <tbody>
                  {history.map((h) => (
                    <tr key={h.at}>
                      <td>{new Date(h.at).toLocaleString('es-UY', { dateStyle: 'medium', timeStyle: 'short' })}</td>
                      <td className="num">{h.score}/{h.total} ({pct(h.score / h.total)})</td>
                      <td className="num">{fmtTime(h.durationSec)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>
    )
  }

  if (finished) {
    const score = qs.filter((q) => answers[q.id] === q.answer).length
    const ratio = score / qs.length
    const byModule = modules
      .map((m) => {
        const mq = qs.filter((q) => q.moduleId === m.id)
        return { m, ok: mq.filter((q) => answers[q.id] === q.answer).length, total: mq.length }
      })
      .filter((x) => x.total > 0)
    return (
      <div className="page-narrow stack" style={{ gap: 18 }}>
        <div className="row" style={{ alignItems: 'center' }}>
          <span className={`stamp big stamp-in ${ratio >= 0.7 ? 'verde' : ratio >= 0.5 ? 'naranja' : 'rojo'}`}>
            {Math.round(ratio * 100)}%<small>{ratio >= 0.7 ? 'APROBADO' : ratio >= 0.5 ? 'A REVISAR' : 'NO APROBADO'}</small>
          </span>
          <div>
            <h1>{score} de {qs.length} correctas</h1>
            <p className="muted" style={{ margin: 0 }}>Se toma 70% como referencia de aprobación.</p>
          </div>
        </div>
        <div className="table-wrap">
          <table className="calc-table">
            <thead><tr><th>Módulo</th><th className="num">Aciertos</th><th>Repaso</th></tr></thead>
            <tbody>
              {byModule.map(({ m, ok, total }) => (
                <tr key={m.id}>
                  <td>{m.number}. {m.short}</td>
                  <td className="num">{ok}/{total}</td>
                  <td>{ok / total < 0.7 ? <Link to={`/modulo/${m.id}`}>Repasar el módulo</Link> : <span className="badge badge-verde">Bien</span>}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <h2>Corrección</h2>
        {qs.map((q, k) => {
          const a = answers[q.id]
          const ok = a === q.answer
          return (
            <details key={q.id} className="sheet pad" open={!ok}>
              <summary style={{ cursor: 'pointer', fontWeight: 600, display: 'flex', gap: 8 }}>
                <Icon name={ok ? 'checkCircle' : 'xCircle'} size={18} />
                {k + 1}. <RichText text={q.prompt} />
              </summary>
              <div className="small" style={{ marginTop: 8 }}>
                <div>Tu respuesta: {a === undefined ? 'sin responder' : q.options[a]}</div>
                {!ok && <div><strong>Correcta:</strong> {q.options[q.answer]}</div>}
                <p style={{ marginTop: 6 }}><RichText text={q.explanation} /></p>
                <Link to={`/leccion/${q.subtopicId}`}>Ir a la lección</Link>
              </div>
            </details>
          )
        })}
        <button className="btn btn-primary" style={{ alignSelf: 'flex-start' }} onClick={() => setQs(null)}>Volver</button>
      </div>
    )
  }

  const q = qs[cur]
  const nAnswered = Object.keys(answers).length
  return (
    <div className="page-narrow">
      <div className="exam-head">
        <span className={`timer ${left < 300 ? 'low' : ''}`} aria-label="Tiempo restante"><Icon name="timer" size={16} /> {fmtTime(left)}</span>
        <span className="small muted">{nAnswered}/{qs.length} respondidas</span>
        <span className="spacer" />
        {confirming && nAnswered < qs.length ? (
          <>
            <span className="small">Te quedan {qs.length - nAnswered} sin responder.</span>
            <button className="btn btn-stamp btn-sm" onClick={finish}>Entregar igual</button>
            <button className="btn btn-sm" onClick={() => setConfirming(false)}>Seguir</button>
          </>
        ) : (
          <button
            className="btn btn-stamp btn-sm"
            onClick={() => (nAnswered < qs.length ? setConfirming(true) : finish())}
          >
            Entregar
          </button>
        )}
      </div>
      <div className="qnav" aria-label="Ir a la pregunta">
        {qs.map((x, k) => (
          <button
            key={x.id}
            className={`${answers[x.id] !== undefined ? 'answered' : ''} ${k === cur ? 'current' : ''}`}
            onClick={() => setCur(k)}
            aria-label={`Pregunta ${k + 1}`}
          >
            {k + 1}
          </button>
        ))}
      </div>
      <div className="small muted" style={{ margin: '16px 0 8px' }}>
        Pregunta {cur + 1} · Módulo {moduleById[q.moduleId].number}
      </div>
      <div className="sheet pad">
        <QuestionCard
          key={q.id}
          q={q}
          examMode
          seed={seed}
          selected={answers[q.id] ?? null}
          onAnswer={(oi) => setAnswers((a) => ({ ...a, [q.id]: oi }))}
        />
      </div>
      <div className="row" style={{ marginTop: 14 }}>
        <button className="btn" disabled={cur === 0} onClick={() => setCur(cur - 1)}><Icon name="chevronLeft" size={16} /> Anterior</button>
        <span className="spacer" />
        <button className="btn btn-primary" disabled={cur === qs.length - 1} onClick={() => setCur(cur + 1)}>Siguiente <Icon name="chevronRight" size={16} /></button>
      </div>
    </div>
  )
}
