import { useState } from 'react'
import { exportSequence, importSequence } from './sequenceData'
import { Icon } from '../components/Icon'

export function SequenceTimeline({ kind }: { kind: 'import' | 'export' }) {
  const steps = kind === 'import' ? importSequence : exportSequence
  const [cur, setCur] = useState(0)
  const s = steps[cur]

  return (
    <div className="tool">
      <h3>{kind === 'import' ? 'La importación, paso a paso' : 'La exportación, del pedido al cobro'}</h3>
      <p className="muted small">Avanzá por las etapas o tocá cualquiera para ver quién la hace y con qué documento.</p>
      <div className="grid-2" style={{ marginTop: 12, alignItems: 'start' }}>
        <ol className="timeline" style={{ maxHeight: 460, overflowY: 'auto', paddingRight: 6 }}>
          {steps.map((st, i) => (
            <li key={st.title}>
              <button
                className={`tl-item ${i < cur ? 'done' : ''} ${i === cur ? 'current' : ''}`}
                onClick={() => setCur(i)}
                aria-current={i === cur ? 'step' : undefined}
              >
                <span className="tl-dot">{i < cur ? <Icon name="check" size={14} /> : i + 1}</span>
                <span className="tl-body">
                  <span className="tl-title">{st.title}</span>
                  <br />
                  <span className="tl-who">{st.who}</span>
                </span>
              </button>
            </li>
          ))}
        </ol>
        <div className="sheet pad stack" aria-live="polite" style={{ position: 'sticky', top: 12 }}>
          <span className="badge badge-stamp">Etapa {cur + 1} de {steps.length}</span>
          <h3 style={{ fontSize: '1.3rem' }}>{s.title}</h3>
          <div className="small"><strong>Quién:</strong> {s.who}</div>
          <div className="small"><strong>Documentos y sistemas:</strong> {s.docs}</div>
          <p style={{ margin: 0 }}>{s.text}</p>
          {s.tip && <div className="callout uy" style={{ margin: 0 }}><p>{s.tip}</p></div>}
          <div className="row">
            <button className="btn" disabled={cur === 0} onClick={() => setCur(cur - 1)}>
              <Icon name="chevronLeft" size={16} /> Anterior
            </button>
            <button className="btn btn-primary" disabled={cur === steps.length - 1} onClick={() => setCur(cur + 1)}>
              Siguiente <Icon name="chevronRight" size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
