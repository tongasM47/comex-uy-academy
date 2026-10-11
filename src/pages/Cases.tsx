import { useState } from 'react'
import { Link, useParams, useSearchParams } from 'react-router-dom'
import { cases, modules, moduleById } from '../data'
import type { CaseStep, ModuleId } from '../data/types'
import { useProgress } from '../lib/ProgressContext'
import { RichText } from '../components/RichText'
import { Icon } from '../components/Icon'
import { NotFound } from './Study'

export function CasesList() {
  const [params, setParams] = useSearchParams()
  const mod = (params.get('modulo') ?? 'all') as ModuleId | 'all'
  const { progress } = useProgress()
  const list = mod === 'all' ? cases : cases.filter((c) => c.moduleId === mod)

  return (
    <div className="page">
      <h1>Casos prácticos</h1>
      <p className="lede" style={{ marginTop: 8 }}>
        Situaciones como las que llegan a una oficina de comex: hay que calcular, decidir y explicar. Se resuelven paso a paso, con la solución comentada.
      </p>
      <div className="row" style={{ margin: '16px 0' }}>
        <button className="chip" aria-pressed={mod === 'all'} onClick={() => setParams({}, { replace: true })}>Todos ({cases.length})</button>
        {modules.filter((m) => cases.some((c) => c.moduleId === m.id)).map((m) => (
          <button key={m.id} className="chip" aria-pressed={mod === m.id} onClick={() => setParams({ modulo: m.id }, { replace: true })}>
            {m.number}. {m.short}
          </button>
        ))}
      </div>
      <div className="grid-2">
        {list.map((c) => {
          const rec = progress.cases[c.id]
          return (
            <Link key={c.id} to={`/casos/${c.id}`} className="sheet pad stack" style={{ color: 'inherit', textDecoration: 'none', gap: 6, position: 'relative' }}>
              <div className="small muted">
                Módulo {moduleById[c.moduleId].number} · {c.steps.length} pasos · {'●'.repeat(c.difficulty)}{'○'.repeat(3 - c.difficulty)}
              </div>
              <h3>{c.title}</h3>
              <span className="small muted" style={{ display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                {c.scenario.replace(/\*\*/g, '')}
              </span>
              {rec && (
                <span className={`stamp ${rec.score === rec.total ? 'verde' : 'naranja'}`} style={{ position: 'absolute', right: 14, top: 14, fontSize: '0.7rem' }}>
                  {rec.score}/{rec.total}
                </span>
              )}
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export function CasePage() {
  const { id } = useParams()
  const c = cases.find((x) => x.id === id)
  const { saveCase } = useProgress()
  const [step, setStep] = useState(0)
  const [results, setResults] = useState<boolean[]>([])
  if (!c) return <NotFound />

  const done = step >= c.steps.length
  const score = results.filter(Boolean).length

  return (
    <div className="page-narrow">
      <div className="crumbs"><Link to="/casos">Casos prácticos</Link> / <span>Módulo {moduleById[c.moduleId].number}</span></div>
      <h1>{c.title}</h1>
      <div className="sheet pad" style={{ margin: '16px 0' }}>
        <p style={{ margin: 0 }}><RichText text={c.scenario} /></p>
        {c.data && c.data.length > 0 && (
          <div className="table-wrap" style={{ marginTop: 12, marginBottom: 0 }}>
            <table className="calc-table">
              <tbody>
                {c.data.map((d, i) => (
                  <tr key={i}><td>{d.label}</td><td className="num"><RichText text={d.value} /></td></tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {c.steps.slice(0, step + 1).map((s, i) =>
        i < c.steps.length ? (
          <StepView
            key={i}
            n={i + 1}
            total={c.steps.length}
            step={s}
            active={i === step}
            onDone={(ok) => {
              const r = [...results, ok]
              setResults(r)
              setStep(i + 1)
              if (i + 1 === c.steps.length) saveCase(c.id, r.filter(Boolean).length, c.steps.length)
            }}
          />
        ) : null,
      )}

      {done && (
        <div className="sheet pad row" style={{ marginTop: 18 }}>
          <span className={`stamp big stamp-in ${score === c.steps.length ? 'verde' : score >= c.steps.length / 2 ? 'naranja' : 'rojo'}`}>
            {score}/{c.steps.length}
          </span>
          <div style={{ flex: 1, minWidth: 200 }}>
            <h3>{score === c.steps.length ? 'Caso resuelto sin errores' : 'Caso terminado'}</h3>
            <p className="small muted" style={{ margin: 0 }}>Repasá las soluciones de los pasos que no te salieron.</p>
          </div>
          <button className="btn" onClick={() => { setStep(0); setResults([]) }}><Icon name="refresh" size={16} /> Repetir</button>
          <Link to="/casos" className="btn btn-primary">Otro caso</Link>
        </div>
      )}
    </div>
  )
}

function StepView({ n, total, step, active, onDone }: { n: number; total: number; step: CaseStep; active: boolean; onDone: (ok: boolean) => void }) {
  const [choice, setChoice] = useState<number | null>(null)
  const [num, setNum] = useState('')
  const [text, setText] = useState('')
  const [revealed, setRevealed] = useState(false)
  const [ok, setOk] = useState<boolean | null>(null)

  const check = () => {
    if (step.kind === 'mcq') {
      if (choice === null) return
      setOk(choice === step.answer)
    } else if (step.kind === 'numeric') {
      // Acepta "1.234,56", "1234,56" y "1234.56"
      const raw = num.trim().replace(/\s|US\$|\$|%/g, '')
      const norm = raw.includes(',') ? raw.replace(/\./g, '').replace(',', '.') : (raw.match(/\./g) ?? []).length > 1 ? raw.replace(/\./g, '') : raw
      const v = Number(norm)
      setOk(Number.isFinite(v) && Math.abs(v - step.answer) <= step.tolerance)
    }
    setRevealed(true)
  }

  return (
    <section className="sheet pad" style={{ marginBottom: 14, opacity: active || revealed ? 1 : 0.6 }}>
      <div className="small muted">Paso {n} de {total}</div>
      <div className="q-prompt" style={{ marginTop: 4 }}><RichText text={step.prompt} /></div>

      {step.kind === 'mcq' && (
        <div className="options">
          {step.options.map((o, i) => {
            let cls = choice === i ? 'selected' : ''
            if (revealed) cls = i === step.answer ? 'correct' : i === choice ? 'wrong' : ''
            return (
              <button key={i} className={`option ${cls}`} disabled={revealed} onClick={() => setChoice(i)}>
                <span className="opt-letter">{'ABCD'[i]}</span>
                <span><RichText text={o} /></span>
                <span />
              </button>
            )
          })}
        </div>
      )}
      {step.kind === 'numeric' && (
        <label className="field" style={{ maxWidth: 320 }}>
          Tu resultado{step.unit ? ` (${step.unit})` : ''}
          <input
            type="text"
            inputMode="decimal"
            value={num}
            disabled={revealed}
            placeholder="Ej.: 1234,56"
            onChange={(e) => setNum(e.target.value)}
            onKeyDown={(e) => { if (e.key === 'Enter' && num) check() }}
          />
        </label>
      )}
      {step.kind === 'open' && !revealed && (
        <label className="field">
          Escribí tu respuesta (es para vos: después la comparás con la solución)
          <textarea value={text} onChange={(e) => setText(e.target.value)} />
        </label>
      )}
      {step.kind === 'open' && revealed && text && (
        <div className="small" style={{ whiteSpace: 'pre-wrap', borderLeft: '3px solid var(--rule-strong)', paddingLeft: 10, margin: '8px 0' }}>{text}</div>
      )}

      {!revealed && active && (
        <div className="row" style={{ marginTop: 12 }}>
          {step.kind === 'open' ? (
            <button className="btn btn-primary" onClick={() => setRevealed(true)}>Ver la solución</button>
          ) : (
            <button className="btn btn-primary" disabled={step.kind === 'mcq' ? choice === null : !num} onClick={check}>Comprobar</button>
          )}
        </div>
      )}

      {revealed && (
        <div className={`feedback ${ok === null ? '' : ok ? 'ok' : 'ko'}`} style={ok === null ? { background: 'var(--sheet-2)' } : undefined}>
          {ok !== null && (
            <div className="feedback-title">
              <Icon name={ok ? 'checkCircle' : 'xCircle'} size={18} />
              {ok ? 'Correcto' : step.kind === 'numeric' ? `No coincide: el resultado es ${step.answer.toLocaleString('es-UY')}${step.unit ? ' ' + step.unit : ''}` : 'Incorrecto'}
            </div>
          )}
          <div className="feedback-title" style={ok !== null ? { display: 'none' } : undefined}>Solución</div>
          <div style={{ whiteSpace: 'pre-line' }}><RichText text={step.solution} /></div>
        </div>
      )}

      {revealed && active && (
        <div className="row" style={{ marginTop: 12 }}>
          {step.kind === 'open' ? (
            <>
              <span className="small">¿Tu respuesta iba en esa línea?</span>
              <button className="btn btn-sm" onClick={() => onDone(true)}>Sí</button>
              <button className="btn btn-sm" onClick={() => onDone(false)}>No del todo</button>
            </>
          ) : (
            <button className="btn btn-primary" onClick={() => onDone(!!ok)}>
              {n === total ? 'Terminar' : 'Siguiente paso'} <Icon name="chevronRight" size={16} />
            </button>
          )}
        </div>
      )}
    </section>
  )
}
