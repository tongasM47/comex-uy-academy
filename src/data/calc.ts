// Cálculo del costo de una importación definitiva en Uruguay (régimen 10).
//
// Función pura que usa la calculadora de la app (`import-calculator`) y que
// reproduce los ejemplos resueltos de docs/research/02_importacion_calculo_dua.md
// (secciones 3.3 a 3.6 y ejercicios E1 a E8). El orden de cálculo es el del
// punto 3.3 de esa investigación:
//
//   1. CIF = FOB + flete + seguro (sin póliza: seguro ficto 1% del FOB) → valor en aduana
//   2. TGA = VA × %TGA (0% si origen MERCOSUR con prueba de origen, ACE 18)
//   3. Tasa Consular = VA × 5% (3% ACE 18 y Chile; 0% México)
//   4. TSA = min(CIF × 0,2%; US$ 50)
//   5. TSE = escala por tramo de valor
//   6. Inspección no intrusiva (escáner) = 85 UI
//   7. LATU 0,5% del CIF (solo alimentos con control)
//   8. Base interna = VA + TGA (× 1,5 si el importador no es contribuyente)
//   9. IMESI (anticipo si es contribuyente) = base × %IMESI
//  10. IVA = base × 22% o 10%
//  11. Anticipo de IVA = base × 10% (tasa básica) o 3% (tasa mínima), solo contribuyentes
//  12. Anticipo de IRAE = base × 4%, solo contribuyentes con bienes del Anexo
//
// Todos los importes en US$. Cada línea se redondea a centavos y los totales se
// suman sobre las líneas ya redondeadas, igual que en una liquidación.
// Vigencia de las tasas: relevadas al 10/10/2026.

export interface ImportInput {
  fob: number
  freight: number
  /** null => seguro ficto del 1% del FOB */
  insurance: number | null
  arancelPct: number
  origin: 'mercosur' | 'chile' | 'mexico' | 'extrazona'
  ivaRate: 22 | 10 | 0
  contribuyente: boolean
  imesiPct: number
  latu: boolean
  irraeAnticipo: boolean
  /** Valor de 1 UI en US$, para la tasa de escáner */
  uiUsd: number
}

export interface ImportLine {
  key: string
  label: string
  base: number
  rate: string
  amount: number
  recoverable: boolean
  note: string
}

export interface ImportResult {
  valorAduana: number
  lines: ImportLine[]
  totalTributos: number
  totalRecuperable: number
  /** CIF + tributos no recuperables */
  costoReal: number
}

// ---------------------------------------------------------------------------
// Constantes vigentes (octubre de 2026)
// ---------------------------------------------------------------------------

/** Seguro ficto: 1% del FOB cuando no se declara póliza (procedimiento de operaciones de entrada de la DNA). */
export const SEGURO_FICTO_PCT = 1

/**
 * Tasa Consular: 5% general y 3% para el ACE 18 (MERCOSUR).
 * Ley 19.535, art. 265, vigente desde el 01/01/2018 (antes 2% para todo).
 * Chile 3% (Ley 19.812, 2019). México 0% (salvo autos).
 * [VERIFICAR] posible reducción por decreto en 2025-2026 y tratamiento del origen UE desde el 01/05/2026.
 */
export const TASA_CONSULAR_PCT = { mercosur: 3, chile: 3, mexico: 0, extrazona: 5 } as const

/** Tasa de servicios aduaneros ("tasa por servicios preferenciales"): 0,2% del CIF. Ley 16.320 art. 170; Dec. 667/992 (mod. Dec. 540/994). */
export const TSA_PCT = 0.2
/** Tope de la TSA por DUA, en US$ (Dec. 667/992). */
export const TSA_TOPE_USD = 50

/**
 * Tasa de servicios extraordinarios (TSE), escala fija por tramo de valor.
 * Dec. 305/986 con montos actualizados; cifras reportadas por la Embajada argentina (2018).
 * [VERIFICAR montos vigentes 2026 en una liquidación real de LUCIA].
 * El tramo por debajo de US$ 500 no figura en la investigación: se toma 0.
 */
export const TSE_TRAMOS: { hasta: number; usd: number }[] = [
  { hasta: 500, usd: 0 },
  { hasta: 1000, usd: 12 },
  { hasta: 2000, usd: 30 },
  { hasta: 8000, usd: 48 },
  { hasta: 29999.99, usd: 108 }, // 8.001 – 30.000 (en el ejercicio E4, CIF 30.000 cae en el tramo siguiente)
  { hasta: 100000, usd: 240 },
  { hasta: Infinity, usd: 600 },
]

/** Tasa de inspección no intrusiva (escáner): 85 UI por DUA. Ley 20.075 art. 161; Dec. 235/024; RG DNA 57/2024. */
export const ESCANER_UI = 85

/** Valor ilustrativo de la UI en octubre de 2026: $ 6,65. */
export const UI_PESOS_OCT_2026 = 6.65
/** Tipo de cambio ilustrativo de los ejemplos: US$ 1 = $ 40. */
export const TIPO_CAMBIO_ILUSTRATIVO = 40
/** 1 UI en US$ con los supuestos de los ejemplos (6,65 / 40 = 0,16625): 85 UI ≈ US$ 14,13. */
export const DEFAULT_UI_USD: number = UI_PESOS_OCT_2026 / TIPO_CAMBIO_ILUSTRATIVO

/** Precio LATU: 0,5% del CIF, solo alimentos sujetos a control. Dec. 194/022 (antes 1,5%). */
export const LATU_PCT = 0.5

/** Recargo de la base interna para no contribuyentes: +50% (TO DGI 2023, Título 10, art. 13 lit. B; IMESI: Dec. 96/990 art. 11). */
export const FACTOR_NO_CONTRIBUYENTE = 1.5

/** Anticipo de IVA: 10% (bienes a tasa básica) / 3% (tasa mínima). Dec. 220/998 art. 115. */
export const ANTICIPO_IVA_PCT = { 22: 10, 10: 3, 0: 0 } as const

/** Anticipo de IRAE: 4% desde el 01/01/2026 (Dec. 788/008 art. 2, texto del Dec. 335/025). Antes 15% Anexo 1 / 4% Anexo 2. */
export const ANTICIPO_IRAE_PCT = 4

// ---------------------------------------------------------------------------

/** Redondeo a centavos (evita errores de coma flotante del tipo 0,1 + 0,2). */
export function round2(n: number): number {
  return Math.round((n + Number.EPSILON) * 100) / 100
}

export function tseFor(cif: number): number {
  for (const t of TSE_TRAMOS) if (cif <= t.hasta) return t.usd
  return 600
}

function pct(n: number): string {
  return `${String(n).replace('.', ',')}%`
}

export function computeImport(i: ImportInput): ImportResult {
  const lines: ImportLine[] = []
  const fob = Math.max(0, i.fob || 0)
  const freight = Math.max(0, i.freight || 0)
  const fictoUsed = i.insurance === null
  const insurance = fictoUsed ? round2((fob * SEGURO_FICTO_PCT) / 100) : Math.max(0, i.insurance ?? 0)

  // 1. Valor en aduana (base CIF)
  const va = round2(fob + freight + insurance)

  // 2. TGA
  const tgaPct = i.origin === 'mercosur' ? 0 : Math.max(0, i.arancelPct || 0)
  const tga = round2((va * tgaPct) / 100)
  lines.push({
    key: 'tga',
    label: 'Tasa Global Arancelaria (TGA)',
    base: va,
    rate: pct(tgaPct),
    amount: tga,
    recoverable: false,
    note:
      i.origin === 'mercosur'
        ? 'Origen MERCOSUR con certificado o declaración de origen (ACE 18, código 310): preferencia del 100%, TGA 0%. Sin prueba de origen válida, calculá como extrazona.'
        : i.origin === 'extrazona'
          ? 'Arancel de la NCM sobre el valor en aduana. Para la extrazona suele coincidir con el AEC.'
          : 'Ingresá la TGA que resulta de la preferencia del acuerdo para esa NCM (consultá el arancel integrado).',
  })

  // 3. Tasa Consular
  const tcPct = TASA_CONSULAR_PCT[i.origin]
  lines.push({
    key: 'tc',
    label: 'Tasa Consular',
    base: va,
    rate: pct(tcPct),
    amount: round2((va * tcPct) / 100),
    recoverable: false,
    note: 'Ley 19.535 art. 265 (desde 01/01/2018): 5% general, 3% ACE 18 y Chile, 0% México. Exonerados: admisión temporaria, ciertos bienes de capital y combustibles. No integra la base del IVA.',
  })

  // 4. TSA
  const tsaRaw = round2((va * TSA_PCT) / 100)
  const tsa = Math.min(tsaRaw, TSA_TOPE_USD)
  lines.push({
    key: 'tsa',
    label: 'Tasa de servicios aduaneros (TSA)',
    base: va,
    rate: '0,2% (tope US$ 50)',
    amount: tsa,
    recoverable: false,
    note: tsaRaw > TSA_TOPE_USD ? `El 0,2% daría US$ ${tsaRaw}; se aplica el tope de US$ 50.` : 'Dec. 667/992. Se paga aunque la mercadería esté exonerada.',
  })

  // 5. TSE
  lines.push({
    key: 'tse',
    label: 'Servicios extraordinarios (TSE)',
    base: va,
    rate: 'escala por tramo',
    amount: tseFor(va),
    recoverable: false,
    note: 'Escala del Dec. 305/986 con montos reportados en 2018. Monto vigente a confirmar en una liquidación real de LUCIA.',
  })

  // 6. Escáner
  const ui = i.uiUsd > 0 ? i.uiUsd : DEFAULT_UI_USD
  lines.push({
    key: 'escaner',
    label: 'Tasa de inspección no intrusiva (escáner)',
    base: ESCANER_UI,
    rate: '85 UI por DUA',
    amount: round2(ESCANER_UI * ui),
    recoverable: false,
    note: 'Ley 20.075 art. 161; Dec. 235/024; RG DNA 57/2024. Monto fijo por DUA, sin importar el valor.',
  })

  // 7. LATU
  if (i.latu) {
    lines.push({
      key: 'latu',
      label: 'Precio LATU',
      base: va,
      rate: pct(LATU_PCT),
      amount: round2((va * LATU_PCT) / 100),
      recoverable: false,
      note: 'Solo alimentos sujetos a control del LATU (Dec. 194/022; antes 1,5%).',
    })
  }

  // 8. Base interna
  const factor = i.contribuyente ? 1 : FACTOR_NO_CONTRIBUYENTE
  const baseInterna = round2((va + tga) * factor)

  // 9. IMESI
  if (i.imesiPct > 0) {
    lines.push({
      key: 'imesi',
      label: i.contribuyente ? 'Anticipo de IMESI' : 'IMESI',
      base: baseInterna,
      rate: pct(i.imesiPct),
      amount: round2((baseInterna * i.imesiPct) / 100),
      recoverable: i.contribuyente,
      note: i.contribuyente
        ? 'Contribuyente de IMESI: anticipo sobre VA + arancel (Dec. 335/996 art. 4); se descuenta del IMESI de las ventas.'
        : 'No contribuyente: IMESI definitivo sobre (VA + arancel) × 1,5 (Dec. 96/990 art. 11). Es costo.',
    })
  }

  // 10. IVA
  if (i.ivaRate > 0) {
    lines.push({
      key: 'iva',
      label: 'IVA importación',
      base: baseInterna,
      rate: pct(i.ivaRate),
      amount: round2((baseInterna * i.ivaRate) / 100),
      recoverable: i.contribuyente,
      note: i.contribuyente
        ? 'Base: valor en aduana + arancel (TO 2023, Tít. 10, art. 13 lit. B). Es crédito fiscal para el contribuyente.'
        : 'No contribuyente: base incrementada 50%. Es costo definitivo y no hay anticipos.',
    })
  }

  // 11. Anticipo de IVA
  const antIvaPct = ANTICIPO_IVA_PCT[i.ivaRate]
  if (i.contribuyente && antIvaPct > 0) {
    lines.push({
      key: 'anticipo-iva',
      label: 'Anticipo de IVA',
      base: baseInterna,
      rate: pct(antIvaPct),
      amount: round2((baseInterna * antIvaPct) / 100),
      recoverable: true,
      note: 'Dec. 220/998 art. 115: 10% si el bien va a tasa básica, 3% si va a tasa mínima. Se descuenta del IVA del mes (art. 117).',
    })
  }

  // 12. Anticipo de IRAE
  if (i.contribuyente && i.irraeAnticipo) {
    lines.push({
      key: 'anticipo-irae',
      label: 'Anticipo de IRAE',
      base: baseInterna,
      rate: pct(ANTICIPO_IRAE_PCT),
      amount: round2((baseInterna * ANTICIPO_IRAE_PCT) / 100),
      recoverable: true,
      note: '4% desde el 01/01/2026 (Dec. 335/025), solo bienes de consumo del Anexo. Se descuenta de los anticipos mensuales de IRAE.',
    })
  }

  const totalTributos = round2(lines.reduce((s, l) => s + l.amount, 0))
  const totalRecuperable = round2(lines.filter((l) => l.recoverable).reduce((s, l) => s + l.amount, 0))
  const noRecuperable = round2(totalTributos - totalRecuperable)

  if (fictoUsed) {
    lines[0] = {
      ...lines[0],
      note: `${lines[0].note} El valor en aduana incluye un seguro ficto de US$ ${insurance} (1% del FOB).`,
    }
  }

  return {
    valorAduana: va,
    lines,
    totalTributos,
    totalRecuperable,
    costoReal: round2(va + noRecuperable),
  }
}
