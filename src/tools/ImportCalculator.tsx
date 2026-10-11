import { useMemo, useState } from 'react'
import { computeImport, DEFAULT_UI_USD, type ImportInput } from '../data/calc'
import { Icon } from '../components/Icon'

export const usd = (n: number) =>
  'US$ ' + n.toLocaleString('es-UY', { minimumFractionDigits: 2, maximumFractionDigits: 2 })

const presets: { label: string; input: ImportInput }[] = [
  {
    label: 'Brasil con certificado ACE 18',
    input: { fob: 10000, freight: 800, insurance: 60, arancelPct: 0, origin: 'mercosur', ivaRate: 22, contribuyente: true, imesiPct: 0, latu: false, irraeAnticipo: true, uiUsd: DEFAULT_UI_USD },
  },
  {
    label: 'China, arancel 18%',
    input: { fob: 20000, freight: 2500, insurance: 200, arancelPct: 18, origin: 'extrazona', ivaRate: 22, contribuyente: true, imesiPct: 0, latu: false, irraeAnticipo: true, uiUsd: DEFAULT_UI_USD },
  },
  {
    label: 'Persona sin RUT (no contribuyente)',
    input: { fob: 3000, freight: 400, insurance: null, arancelPct: 16, origin: 'extrazona', ivaRate: 22, contribuyente: false, imesiPct: 0, latu: false, irraeAnticipo: false, uiUsd: DEFAULT_UI_USD },
  },
]

function Num({ label, value, onChange, step = 1, suffix }: { label: string; value: number; onChange: (n: number) => void; step?: number; suffix?: string }) {
  return (
    <label className="field">
      {label}
      <div className="row" style={{ gap: 6, flexWrap: 'nowrap' }}>
        <input
          type="number"
          inputMode="decimal"
          min={0}
          step={step}
          value={Number.isFinite(value) ? value : 0}
          onChange={(e) => onChange(e.target.value === '' ? 0 : Number(e.target.value))}
        />
        {suffix && <span className="muted small">{suffix}</span>}
      </div>
    </label>
  )
}

export function ImportCalculator() {
  const [inp, setInp] = useState<ImportInput>(presets[1].input)
  const set = <K extends keyof ImportInput>(k: K, v: ImportInput[K]) => setInp((p) => ({ ...p, [k]: v }))
  const r = useMemo(() => computeImport(inp), [inp])
  const ficto = inp.insurance === null

  return (
    <div className="tool">
      <h3>Calculadora de costo de importación</h3>
      <p className="muted small">
        Cambiá los datos y mirá cómo se arma la liquidación del DUA línea por línea, en el orden en que se calcula.
      </p>
      <div className="row" style={{ margin: '10px 0 14px', gap: 6 }}>
        <span className="small muted">Ejemplos:</span>
        {presets.map((p) => (
          <button key={p.label} className="chip" onClick={() => setInp(p.input)}>{p.label}</button>
        ))}
      </div>

      <div className="grid-3" style={{ marginBottom: 14 }}>
        <Num label="Valor FOB" value={inp.fob} onChange={(n) => set('fob', n)} suffix="US$" step={100} />
        <Num label="Flete internacional" value={inp.freight} onChange={(n) => set('freight', n)} suffix="US$" step={50} />
        <div className="stack" style={{ gap: 4 }}>
          {ficto ? (
            <label className="field">
              Seguro
              <input type="text" value="Ficto: 1% del FOB" readOnly />
            </label>
          ) : (
            <Num label="Seguro (póliza)" value={inp.insurance ?? 0} onChange={(n) => set('insurance', n)} suffix="US$" step={10} />
          )}
          <label className="small row" style={{ gap: 6 }}>
            <input type="checkbox" checked={ficto} onChange={(e) => set('insurance', e.target.checked ? null : 0)} />
            No hay póliza (seguro ficto)
          </label>
        </div>
        <label className="field">
          Origen
          <select value={inp.origin} onChange={(e) => set('origin', e.target.value as ImportInput['origin'])}>
            <option value="mercosur">MERCOSUR con prueba de origen</option>
            <option value="extrazona">Extrazona (resto del mundo)</option>
            <option value="chile">Chile</option>
            <option value="mexico">México</option>
          </select>
        </label>
        <Num label={inp.origin === 'mercosur' ? 'Arancel (0% por ACE 18)' : 'Arancel (TGA) de la NCM'} value={inp.origin === 'mercosur' ? 0 : inp.arancelPct} onChange={(n) => set('arancelPct', n)} suffix="%" />
        <label className="field">
          IVA de la mercadería
          <select value={inp.ivaRate} onChange={(e) => set('ivaRate', Number(e.target.value) as 22 | 10 | 0)}>
            <option value={22}>Tasa básica 22%</option>
            <option value={10}>Tasa mínima 10%</option>
            <option value={0}>Exento</option>
          </select>
        </label>
        <Num label="IMESI (si corresponde)" value={inp.imesiPct} onChange={(n) => set('imesiPct', n)} suffix="%" />
        <div className="stack" style={{ gap: 6, justifyContent: 'center' }}>
          <label className="small row" style={{ gap: 6 }}>
            <input type="checkbox" checked={inp.contribuyente} onChange={(e) => set('contribuyente', e.target.checked)} />
            Importador contribuyente de IVA
          </label>
          <label className="small row" style={{ gap: 6 }}>
            <input type="checkbox" checked={inp.irraeAnticipo} disabled={!inp.contribuyente} onChange={(e) => set('irraeAnticipo', e.target.checked)} />
            Bien con anticipo de IRAE
          </label>
          <label className="small row" style={{ gap: 6 }}>
            <input type="checkbox" checked={inp.latu} onChange={(e) => set('latu', e.target.checked)} />
            Alimento con control LATU
          </label>
        </div>
      </div>

      <div className="table-wrap">
        <table className="calc-table">
          <thead>
            <tr>
              <th>Concepto</th>
              <th className="num">Base</th>
              <th>Alícuota</th>
              <th className="num">Importe</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Valor en aduana (CIF)</strong><div className="small muted">FOB + flete + seguro{ficto ? ' ficto' : ''}</div></td>
              <td className="num" />
              <td />
              <td className="num"><strong>{usd(r.valorAduana)}</strong></td>
            </tr>
            {r.lines.map((l) => (
              <tr key={l.key}>
                <td>
                  {l.label}{' '}
                  {l.recoverable && <span className="badge badge-verde" title="Es crédito fiscal o anticipo: se recupera">Recuperable</span>}
                  <div className="small muted">{l.note}</div>
                </td>
                <td className="num">{l.key === 'escaner' ? '85 UI' : usd(l.base)}</td>
                <td>{l.rate}</td>
                <td className="num">{usd(l.amount)}</td>
              </tr>
            ))}
            <tr className="total">
              <td>Total a pagar en el DUA</td>
              <td />
              <td />
              <td className="num">{usd(r.totalTributos)}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="stat-row">
        <div className="sheet stat">
          <b>{usd(r.totalTributos)}</b>
          <span>Desembolso en aduana</span>
        </div>
        <div className="sheet stat">
          <b>{usd(r.totalRecuperable)}</b>
          <span>Se recupera (IVA, anticipos)</span>
        </div>
        <div className="sheet stat">
          <b>{usd(r.costoReal)}</b>
          <span>Costo real: CIF + lo no recuperable</span>
        </div>
      </div>
      <p className="small muted" style={{ marginTop: 10 }}>
        <Icon name="warn" size={14} /> Tasas relevadas a octubre de 2026 con un tipo de cambio ilustrativo de US$ 1 = $ 40 para la tasa de escáner.
        No incluye honorarios del despachante, gastos de terminal ni otras tasas menores. Algunos montos (TSE, Tasa Consular) conviene confirmarlos en una liquidación real de LUCIA.
      </p>
    </div>
  )
}
