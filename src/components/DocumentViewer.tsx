import { useMemo, useState } from 'react'
import type { DocField, DocSpecimen } from '../data/types'
import { STUDY_NOTE } from '../data/documents'
import { RichText } from './RichText'
import { Icon } from './Icon'

type Mode = 'explore' | 'practice'

/** Modelo ilustrado de un documento: cada casilla se puede tocar para ver qué va y cómo se completa.
 *  En modo práctica, las casillas clave quedan en blanco y hay que elegir el valor correcto. */
export function DocumentViewer({ doc, compact = false }: { doc: DocSpecimen; compact?: boolean }) {
  const [mode, setMode] = useState<Mode>('explore')
  const [activeKey, setActiveKey] = useState<string | null>(null)
  const [answers, setAnswers] = useState<Record<string, number>>({})

  const allFields = useMemo(
    () => doc.sections.flatMap((s, si) => s.fields.map((f, fi) => ({ f, key: `${si}-${fi}` }))),
    [doc],
  )
  const practiceFields = allFields.filter((x) => x.f.practice)
  const answered = practiceFields.filter((x) => answers[x.key] !== undefined)
  const correctCount = answered.filter((x) => answers[x.key] === x.f.practice!.answer).length
  const active = allFields.find((x) => x.key === activeKey) ?? null

  const switchMode = (m: Mode) => {
    setMode(m)
    setAnswers({})
    setActiveKey(m === 'practice' ? (practiceFields[0]?.key ?? null) : null)
  }

  const cellState = (key: string, f: DocField) => {
    if (mode !== 'practice' || !f.practice) return ''
    const a = answers[key]
    if (a === undefined) return ''
    return a === f.practice.answer ? 'ok' : 'ko'
  }

  const panel = (
    <div className={compact ? 'sheet pad' : 'sheet pad doc-side'} aria-live="polite">
      {active ? (
        <FieldPanel
          field={active.f}
          mode={mode}
          chosen={answers[active.key]}
          onChoose={(i) => {
            setAnswers((a) => ({ ...a, [active.key]: i }))
          }}
          onNext={() => {
            const next = practiceFields.find((x) => answers[x.key] === undefined && x.key !== active.key)
            setActiveKey(next?.key ?? null)
          }}
        />
      ) : mode === 'practice' && answered.length === practiceFields.length && practiceFields.length > 0 ? (
        <div className="stack">
          <span className={`stamp big stamp-in ${correctCount === practiceFields.length ? 'verde' : correctCount >= practiceFields.length * 0.6 ? 'naranja' : 'rojo'}`}>
            {correctCount}/{practiceFields.length}
            <small>{correctCount === practiceFields.length ? 'LIBRADO' : 'A REVISAR'}</small>
          </span>
          <p>
            {correctCount === practiceFields.length
              ? 'Completaste todas las casillas clave sin errores.'
              : 'Tocá las casillas en rojo para ver por qué no correspondía ese valor.'}
          </p>
          <button className="btn" onClick={() => switchMode('practice')}>
            <Icon name="refresh" size={16} /> Volver a intentar
          </button>
        </div>
      ) : (
        <div>
          <h3>{mode === 'explore' ? 'Tocá una casilla' : 'Elegí una casilla en blanco'}</h3>
          <p className="muted small" style={{ marginTop: 6 }}>
            {mode === 'explore'
              ? 'Cada número corresponde a una casilla del documento. Al tocarla ves qué va, quién la completa y los errores frecuentes.'
              : 'Las casillas en blanco son las clave. Elegí el valor que corresponde según el escenario de la operación.'}
          </p>
        </div>
      )}
    </div>
  )

  return (
    <div className="stack">
      <div className="row">
        <div className="row" role="group" aria-label="Modo de uso del documento">
          <button className="chip" aria-pressed={mode === 'explore'} onClick={() => switchMode('explore')}>
            <Icon name="search" size={15} /> Explorar
          </button>
          {practiceFields.length > 0 && (
            <button className="chip" aria-pressed={mode === 'practice'} onClick={() => switchMode('practice')}>
              <Icon name="quiz" size={15} /> Completalo vos ({practiceFields.length} casillas)
            </button>
          )}
        </div>
        {mode === 'practice' && (
          <span className="muted small">
            {answered.length}/{practiceFields.length} respondidas · {correctCount} bien
          </span>
        )}
      </div>

      {mode === 'practice' && (
        <div className="callout info">
          <div className="callout-title"><Icon name="info" size={18} />Escenario</div>
          <p><RichText text={doc.scenario} /></p>
        </div>
      )}

      <div className={compact ? 'stack' : 'doc-layout'}>
        <div className="doc-paper">
          <div className="doc-watermark" aria-hidden="true"><span>{STUDY_NOTE}</span></div>
          <div className="doc-title">
            <div>
              <h3>{doc.title}</h3>
              <div style={{ fontSize: '0.78rem', color: '#5b6878' }}>{doc.subtitle}</div>
            </div>
            <span className="stamp" style={{ color: '#5a3e9e', fontSize: '0.62rem' }}>
              MODELO<small>DE ESTUDIO</small>
            </span>
          </div>
          {doc.sections.map((s, si) => (
            <div key={si}>
              {s.title && <div className="doc-section-title">{s.title}</div>}
              <div className="doc-grid">
                {s.fields.map((f, fi) => {
                  const key = `${si}-${fi}`
                  const hidden = mode === 'practice' && f.practice && answers[key] === undefined
                  const shownValue =
                    mode === 'practice' && f.practice && answers[key] !== undefined
                      ? f.practice.options[answers[key]]
                      : f.value
                  return (
                    <button
                      key={key}
                      type="button"
                      className={`doc-cell ${activeKey === key ? 'active' : ''} ${cellState(key, f)}`}
                      style={{ gridColumn: `span ${Math.min(12, Math.max(1, f.span ?? 6))}` }}
                      onClick={() => setActiveKey(key)}
                      aria-label={`Casilla ${f.n}: ${f.label}`}
                    >
                      <span className="doc-cell-label">
                        <span className="doc-cell-n">{f.n}</span>
                        {f.label}
                      </span>
                      <span className={`doc-cell-value ${hidden ? 'blank' : ''}`}>
                        {hidden ? 'Completá esta casilla' : shownValue}
                      </span>
                    </button>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
        {panel}
      </div>

      {!compact && (
        <div className="grid-2">
          <div>
            <h3 style={{ marginBottom: 8 }}>Para qué sirve</h3>
            <p><RichText text={doc.description} /></p>
            <h3 style={{ margin: '16px 0 8px' }}>La operación del ejemplo</h3>
            <p><RichText text={doc.scenario} /></p>
          </div>
          <div>
            <h3 style={{ marginBottom: 8 }}>Consejos de oficina</h3>
            <ul className="keypoints">
              {doc.notes.map((n, i) => (
                <li key={i}><Icon name="check" size={16} /><span><RichText text={n} /></span></li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  )
}

function FieldPanel({
  field,
  mode,
  chosen,
  onChoose,
  onNext,
}: {
  field: DocField
  mode: Mode
  chosen: number | undefined
  onChoose: (i: number) => void
  onNext: () => void
}) {
  const practicing = mode === 'practice' && field.practice
  return (
    <div className="stack" style={{ gap: 10 }}>
      <div className="row" style={{ gap: 8 }}>
        <span className="doc-cell-n" style={{ fontSize: '0.85rem', padding: '1px 7px' }}>{field.n}</span>
        <h3 style={{ fontSize: '1.1rem' }}>{field.label}</h3>
      </div>
      {practicing ? (
        <>
          <div className="options">
            {field.practice!.options.map((o, i) => {
              const done = chosen !== undefined
              const cls = !done ? '' : i === field.practice!.answer ? 'correct' : i === chosen ? 'wrong' : ''
              return (
                <button key={i} className={`option ${cls}`} disabled={done} onClick={() => onChoose(i)}>
                  <span className="opt-letter">{'ABCD'[i]}</span>
                  <span style={{ overflowWrap: 'anywhere' }}>{o}</span>
                  <span />
                </button>
              )
            })}
          </div>
          {chosen !== undefined && (
            <>
              <div className={`feedback ${chosen === field.practice!.answer ? 'ok' : 'ko'}`}>
                <div className="feedback-title">
                  <Icon name={chosen === field.practice!.answer ? 'checkCircle' : 'xCircle'} size={18} />
                  {chosen === field.practice!.answer ? 'Correcto' : 'No corresponde'}
                </div>
                <RichText text={field.explanation} />
              </div>
              <button className="btn btn-primary" onClick={onNext}>Siguiente casilla</button>
            </>
          )}
        </>
      ) : (
        <>
          <div className="small muted">Valor de ejemplo</div>
          <div className="doc-cell-value" style={{ fontSize: '0.92rem' }}>{field.value}</div>
          <p style={{ margin: 0 }}><RichText text={field.explanation} /></p>
        </>
      )}
    </div>
  )
}
