import { useState } from 'react'
import { Icon } from '../components/Icon'

// Reparto de costos y punto de traspaso del riesgo según Incoterms 2020 (ICC).
// Fuente: docs/research/01 §1 (tabla de obligaciones). Para las reglas D se toma como
// lugar convenido la terminal de destino, para poder mostrar la cadena en orden.

type Party = 'V' | 'C' | 'v' | 'c' // minúscula: nadie está obligado, lo asume por interés propio
interface Rule {
  code: string
  name: string
  group: 'any' | 'sea'
  /** Índice del paso después del cual pasa el riesgo al comprador */
  riskAfter: number
  cells: Party[]
  note: string
}

const steps = [
  'Embalaje y marcado',
  'Carga en el local del vendedor',
  'Transporte interno en origen',
  'Despacho de exportación',
  'Carga en el transporte principal',
  'Flete principal',
  'Seguro de la carga',
  'Descarga en destino',
  'Despacho de importación y tributos',
  'Transporte hasta el depósito del comprador',
]

const rules: Rule[] = [
  { code: 'EXW', name: 'En fábrica', group: 'any', riskAfter: 0, cells: ['V', 'C', 'C', 'C', 'C', 'C', 'c', 'C', 'C', 'C'], note: 'El vendedor pone la mercadería a disposición en su local, sin cargar. El comprador hace todo, incluso el despacho de exportación, algo que en la práctica un comprador extranjero no puede hacer en Uruguay.' },
  { code: 'FCA', name: 'Franco transportista', group: 'any', riskAfter: 3, cells: ['V', 'V', 'V', 'V', 'C', 'C', 'c', 'C', 'C', 'C'], note: 'El vendedor entrega al transportista designado por el comprador, despachado de exportación. Es la regla recomendada para contenedores. Acá se muestra con entrega en la terminal de origen.' },
  { code: 'CPT', name: 'Transporte pagado hasta', group: 'any', riskAfter: 3, cells: ['V', 'V', 'V', 'V', 'V', 'V', 'c', 'C', 'C', 'C'], note: 'El vendedor paga el flete hasta destino, pero el riesgo pasa al comprador cuando entrega al primer transportista en origen. Costo y riesgo se separan.' },
  { code: 'CIP', name: 'Transporte y seguro pagados hasta', group: 'any', riskAfter: 3, cells: ['V', 'V', 'V', 'V', 'V', 'V', 'V', 'C', 'C', 'C'], note: 'Como CPT, pero el vendedor contrata seguro con cobertura amplia, cláusulas ICC (A), por al menos el 110% del valor del contrato.' },
  { code: 'DAP', name: 'Entregada en lugar', group: 'any', riskAfter: 6, cells: ['V', 'V', 'V', 'V', 'V', 'V', 'v', 'C', 'C', 'C'], note: 'El vendedor lleva la mercadería hasta el lugar convenido y la deja lista para descargar. El comprador descarga y despacha la importación.' },
  { code: 'DPU', name: 'Entregada en lugar descargada', group: 'any', riskAfter: 7, cells: ['V', 'V', 'V', 'V', 'V', 'V', 'v', 'V', 'C', 'C'], note: 'La única regla en la que el vendedor descarga en destino. Reemplazó a DAT en la edición 2020.' },
  { code: 'DDP', name: 'Entregada con derechos pagados', group: 'any', riskAfter: 8, cells: ['V', 'V', 'V', 'V', 'V', 'V', 'v', 'V', 'V', 'C'], note: 'Máxima obligación del vendedor: también despacha la importación y paga aranceles e IVA en destino. Acá se muestra con entrega en la terminal de destino.' },
  { code: 'FAS', name: 'Franco al costado del buque', group: 'sea', riskAfter: 3, cells: ['V', 'V', 'V', 'V', 'C', 'C', 'c', 'C', 'C', 'C'], note: 'El vendedor deja la mercadería al costado del buque, en el muelle o en una barcaza. Uso típico: granel y carga suelta.' },
  { code: 'FOB', name: 'Franco a bordo', group: 'sea', riskAfter: 4, cells: ['V', 'V', 'V', 'V', 'V', 'C', 'c', 'C', 'C', 'C'], note: 'El riesgo pasa cuando la mercadería está a bordo del buque. Para contenedores conviene FCA, porque el contenedor se entrega en la terminal días antes de cargarse.' },
  { code: 'CFR', name: 'Costo y flete', group: 'sea', riskAfter: 4, cells: ['V', 'V', 'V', 'V', 'V', 'V', 'c', 'C', 'C', 'C'], note: 'El vendedor paga el flete hasta el puerto de destino, pero el riesgo pasa a bordo en origen.' },
  { code: 'CIF', name: 'Costo, seguro y flete', group: 'sea', riskAfter: 4, cells: ['V', 'V', 'V', 'V', 'V', 'V', 'V', 'C', 'C', 'C'], note: 'Como CFR, más el seguro que contrata el vendedor con cobertura mínima ICC (C) por el 110%. El valor en aduana uruguayo es CIF, por eso este Incoterm aparece tanto en los cálculos.' },
]

const partyLabel = (p: Party) =>
  p === 'V' ? 'Vendedor' : p === 'C' ? 'Comprador' : p === 'v' ? 'Vendedor*' : 'Comprador*'

export function IncotermsVisualizer() {
  const [code, setCode] = useState('FOB')
  const [mode, setMode] = useState<'all' | 'sea' | 'air' | 'land'>('all')
  const rule = rules.find((r) => r.code === code)!
  const visible = rules.filter((r) => mode === 'all' || mode === 'sea' || r.group === 'any')

  return (
    <div className="tool">
      <h3>¿Quién paga qué y dónde pasa el riesgo?</h3>
      <p className="muted small">Elegí un Incoterm y seguí la mercadería desde la fábrica hasta el depósito del comprador.</p>

      <div className="row" role="group" aria-label="Medio de transporte" style={{ margin: '10px 0' }}>
        {([
          ['all', 'Todos'],
          ['sea', 'Marítimo'],
          ['air', 'Aéreo'],
          ['land', 'Terrestre'],
        ] as const).map(([m, label]) => (
          <button
            key={m}
            className="chip"
            aria-pressed={mode === m}
            onClick={() => {
              setMode(m)
              if ((m === 'air' || m === 'land') && rules.find((r) => r.code === code)?.group === 'sea') setCode('FCA')
            }}
          >
            {label}
          </button>
        ))}
      </div>
      {(mode === 'air' || mode === 'land') && (
        <p className="small muted">FAS, FOB, CFR y CIF son solo para transporte marítimo y fluvial: nunca en un envío aéreo o por camión.</p>
      )}

      <div className="row" role="group" aria-label="Incoterm" style={{ gap: 6, marginBottom: 14 }}>
        {visible.map((r) => (
          <button key={r.code} className="chip" aria-pressed={code === r.code} onClick={() => setCode(r.code)} style={{ fontWeight: 700 }}>
            {r.code}
          </button>
        ))}
      </div>

      <div className="row" style={{ alignItems: 'baseline', marginBottom: 6 }}>
        <h3 style={{ fontSize: '1.4rem' }}>{rule.code}</h3>
        <span className="muted">{rule.name}</span>
        <span className="badge">{rule.group === 'sea' ? 'Solo marítimo y fluvial' : 'Cualquier modo de transporte'}</span>
      </div>
      <p className="small">{rule.note}</p>

      <div className="inc-chain" aria-label={`Cadena de costos para ${rule.code}`}>
        <div className="inc-step" style={{ border: 0, padding: '0 10px', fontSize: '0.78rem', color: 'var(--ink-3)' }}>
          <span />
          <span>Etapa</span>
          <span style={{ textAlign: 'center' }}>Paga</span>
          <span style={{ textAlign: 'center' }}>Riesgo</span>
        </div>
        {steps.map((s, i) => {
          const p = rule.cells[i]
          const payer = p.toUpperCase() === 'V' ? 'seller' : 'buyer'
          const riskOnSeller = i <= rule.riskAfter
          return (
            <div key={s}>
              <div className="inc-step" style={{ background: riskOnSeller ? 'var(--harbor-soft)' : 'var(--naranja-soft)' }}>
                <span className="muted" style={{ fontWeight: 700 }}>{i + 1}</span>
                <span>{s}</span>
                <span className={`who ${payer}`}>{partyLabel(p)}</span>
                <span className={`who ${riskOnSeller ? 'seller' : 'buyer'}`}>{riskOnSeller ? 'Vendedor' : 'Comprador'}</span>
              </div>
              {i === rule.riskAfter && i < steps.length - 1 && (
                <div className="risk-line" role="note">El riesgo pasa al comprador</div>
              )}
            </div>
          )
        })}
      </div>
      <p className="small muted" style={{ marginTop: 10 }}>
        <Icon name="info" size={14} /> * Nadie está obligado a contratar seguro: lo hace por su cuenta quien corre el riesgo durante el transporte principal.
        En CIF y CIP el vendedor sí está obligado.
      </p>
    </div>
  )
}
