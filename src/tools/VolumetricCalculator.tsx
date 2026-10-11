import { useState } from 'react'

// Peso volumétrico y cubicaje. Aéreo: divisor 6000 (cm³/kg), equivalente a 1 m³ = 166,67 kg.
// Fuente: docs/research/05 §2 (logística). El peso tasable es el mayor entre real y volumétrico.

const fmt = (n: number, d = 2) => n.toLocaleString('es-UY', { minimumFractionDigits: d, maximumFractionDigits: d })

// Capacidades internas habituales; varían según la naviera.
const containers = [
  { name: "20' estándar", m3: 33 },
  { name: "40' estándar", m3: 67 },
  { name: "40' High Cube", m3: 76 },
]

export function VolumetricCalculator() {
  const [l, setL] = useState(120)
  const [w, setW] = useState(80)
  const [h, setH] = useState(100)
  const [qty, setQty] = useState(3)
  const [kg, setKg] = useState(60)

  const m3Each = (l * w * h) / 1_000_000
  const m3 = m3Each * qty
  const realTotal = kg * qty
  const volKg = (l * w * h * qty) / 6000
  const chargeable = Math.max(realTotal, volKg)
  const byVolume = volKg > realTotal

  return (
    <div className="tool">
      <h3>Peso volumétrico y cubicaje</h3>
      <p className="muted small">Medidas de un bulto en centímetros y peso real por bulto en kilos.</p>
      <div className="grid-3" style={{ margin: '12px 0' }}>
        {([
          ['Largo (cm)', l, setL],
          ['Ancho (cm)', w, setW],
          ['Alto (cm)', h, setH],
          ['Cantidad de bultos', qty, setQty],
          ['Peso real por bulto (kg)', kg, setKg],
        ] as const).map(([label, v, set]) => (
          <label key={label} className="field">
            {label}
            <input type="number" inputMode="decimal" min={0} value={v} onChange={(e) => set(Number(e.target.value) || 0)} />
          </label>
        ))}
      </div>
      <div className="table-wrap">
        <table className="calc-table">
          <tbody>
            <tr><td>Volumen total</td><td className="num">{fmt(m3, 3)} m³</td><td className="small muted">largo × ancho × alto ÷ 1.000.000 × bultos</td></tr>
            <tr><td>Peso real total</td><td className="num">{fmt(realTotal, 1)} kg</td><td /></tr>
            <tr><td>Peso volumétrico aéreo</td><td className="num">{fmt(volKg, 1)} kg</td><td className="small muted">cm³ ÷ 6000</td></tr>
            <tr className="total"><td>Peso tasable aéreo</td><td className="num">{fmt(chargeable, 1)} kg</td><td className="small">{byVolume ? 'Manda el volumen: la carga es liviana para lo que ocupa.' : 'Manda el peso real: la carga es densa.'}</td></tr>
          </tbody>
        </table>
      </div>
      <h3 style={{ fontSize: '1.05rem', margin: '14px 0 8px' }}>¿Cuánto ocupa en un contenedor?</h3>
      <div className="stack" style={{ gap: 8 }}>
        {containers.map((c) => {
          const pct = Math.min(100, (m3 / c.m3) * 100)
          return (
            <div key={c.name}>
              <div className="row small" style={{ justifyContent: 'space-between' }}>
                <span>{c.name} (≈ {c.m3} m³ internos)</span>
                <span>{fmt((m3 / c.m3) * 100, 1)}%</span>
              </div>
              <div className="bar"><span style={{ width: `${pct}%`, background: pct >= 100 ? 'var(--rojo)' : undefined }} /></div>
            </div>
          )
        })}
      </div>
      <p className="small muted" style={{ marginTop: 10 }}>
        Las capacidades son orientativas y cambian según la naviera. En la práctica no se llena el 100%: siempre quedan huecos por la forma de los bultos.
      </p>
    </div>
  )
}
