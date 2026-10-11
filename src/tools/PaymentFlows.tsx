import { useState } from 'react'
import { Icon } from '../components/Icon'

// Flujos de pago internacional. Fuente: docs/research/04 §7 (flujos para diagrama).

interface Flow {
  key: string
  label: string
  risk: string
  actors: string[]
  steps: { text: string; actors: number[] }[]
}

const flows: Flow[] = [
  {
    key: 'transfer',
    label: 'Transferencia (pago anticipado)',
    risk: 'Todo el riesgo lo corre el importador: paga antes de recibir.',
    actors: ['Importador', 'Banco del importador', 'Banco corresponsal', 'Banco del exportador', 'Exportador'],
    steps: [
      { text: 'Importador y exportador acuerdan precio, Incoterm y pago anticipado en la pro-forma.', actors: [0, 4] },
      { text: 'El importador le ordena la transferencia a su banco, con la pro-forma como respaldo.', actors: [0, 1] },
      { text: 'El banco debita la cuenta y envía el mensaje SWIFT (pacs.008, antes MT103). En dólares suele pasar por un corresponsal en Nueva York.', actors: [1, 2] },
      { text: 'El banco del exportador recibe, hace sus controles de cumplimiento y acredita los fondos.', actors: [2, 3] },
      { text: 'El exportador ve el dinero, embarca y le manda los documentos directamente al importador.', actors: [3, 4, 0] },
    ],
  },
  {
    key: 'collection',
    label: 'Cobranza documentaria (URC 522)',
    risk: 'Riesgo intermedio: el exportador embarca sin garantía de pago, pero los documentos no se entregan sin pago (D/P) o aceptación de la letra (D/A).',
    actors: ['Exportador', 'Banco remitente', 'Banco cobrador', 'Importador (girado)'],
    steps: [
      { text: 'El contrato fija el pago "D/P a la vista vía cobranza documentaria" (o D/A a plazo).', actors: [0, 3] },
      { text: 'El exportador embarca y obtiene el conocimiento de embarque y demás documentos.', actors: [0] },
      { text: 'Entrega los documentos a su banco con una instrucción de cobranza sujeta a URC 522.', actors: [0, 1] },
      { text: 'El banco remitente envía los documentos al banco cobrador en el país del importador.', actors: [1, 2] },
      { text: 'El banco cobrador (presentador) le avisa al importador.', actors: [2, 3] },
      { text: 'D/P: el importador paga y recibe los documentos. D/A: acepta la letra, recibe los documentos y paga al vencimiento.', actors: [3, 2] },
      { text: 'Con el B/L original, el importador retira la mercadería y despacha en aduana.', actors: [3] },
      { text: 'El banco cobrador transfiere los fondos al remitente, que acredita al exportador.', actors: [2, 1, 0] },
    ],
  },
  {
    key: 'lc',
    label: 'Carta de crédito confirmada (UCP 600)',
    risk: 'El más seguro para el exportador: un banco se compromete a pagar si presenta documentos conformes. Es el más caro y el más exigente en papeles.',
    actors: ['Importador (ordenante)', 'Banco emisor', 'Banco confirmador', 'Exportador (beneficiario)'],
    steps: [
      { text: 'El contrato fija pago por carta de crédito irrevocable, confirmada, a la vista, sujeta a UCP 600.', actors: [0, 3] },
      { text: 'El importador pide la apertura a su banco, que evalúa su crédito y garantías.', actors: [0, 1] },
      { text: 'El banco emisor emite el crédito (MT700) y lo envía al banco del exportador.', actors: [1, 2] },
      { text: 'El banco avisador verifica autenticidad, agrega su confirmación y avisa al exportador.', actors: [2, 3] },
      { text: 'El exportador revisa los términos. Si no puede cumplir algo, pide una enmienda antes de embarcar.', actors: [3] },
      { text: 'Embarca antes de la fecha límite de embarque y reúne los documentos.', actors: [3] },
      { text: 'Presenta los documentos al banco confirmador: como máximo 21 días después del embarque y siempre antes del vencimiento.', actors: [3, 2] },
      { text: 'El banco tiene hasta 5 días hábiles bancarios para examinar. Si están conformes paga; si no, avisa todas las discrepancias juntas.', actors: [2, 3] },
      { text: 'El emisor examina, reembolsa al confirmador y debita al importador.', actors: [2, 1, 0] },
      { text: 'El importador recibe el B/L original, retira la mercadería y despacha.', actors: [0] },
    ],
  },
]

export function PaymentFlows() {
  const [fk, setFk] = useState('lc')
  const [i, setI] = useState(0)
  const f = flows.find((x) => x.key === fk)!
  const step = f.steps[i]

  return (
    <div className="tool">
      <h3>Cómo viaja el dinero y cómo viajan los documentos</h3>
      <div className="row" role="group" aria-label="Forma de pago" style={{ margin: '10px 0 14px', gap: 6 }}>
        {flows.map((x) => (
          <button key={x.key} className="chip" aria-pressed={fk === x.key} onClick={() => { setFk(x.key); setI(0) }}>
            {x.label}
          </button>
        ))}
      </div>
      <p className="small"><strong>Riesgo:</strong> {f.risk}</p>
      <div className="flow-actors" style={{ ['--n' as string]: f.actors.length }}>
        {f.actors.map((a, k) => (
          <div key={a} className={`flow-actor ${step.actors.includes(k) ? 'on' : ''}`}>{a}</div>
        ))}
      </div>
      <div className="sheet pad" style={{ marginTop: 12 }} aria-live="polite">
        <span className="badge badge-stamp">Paso {i + 1} de {f.steps.length}</span>
        <p style={{ margin: '8px 0 0', fontSize: '1.05rem' }}>{step.text}</p>
      </div>
      <div className="row" style={{ marginTop: 10 }}>
        <button className="btn" disabled={i === 0} onClick={() => setI(i - 1)}>
          <Icon name="chevronLeft" size={16} /> Anterior
        </button>
        <div className="bar" style={{ flex: 1, minWidth: 80 }}>
          <span style={{ width: `${((i + 1) / f.steps.length) * 100}%` }} />
        </div>
        <button className="btn btn-primary" disabled={i === f.steps.length - 1} onClick={() => setI(i + 1)}>
          Siguiente <Icon name="chevronRight" size={16} />
        </button>
      </div>
    </div>
  )
}
