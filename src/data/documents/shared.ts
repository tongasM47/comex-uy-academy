import type { DocField } from '../types'

// Datos compartidos de las operaciones ficticias que alimentan los documentos ilustrados.
// Todo es inventado: empresas, números de RUT, bancos, buques, matrículas y códigos.
// Mantenerlos en un solo lugar garantiza que los valores coincidan entre documentos.

/**
 * Arma un campo de documento. Si se pasan distractores, el valor correcto se inserta
 * en la posición `pos`, así la opción correcta siempre coincide con `value`.
 */
export function fld(
  n: number | string,
  label: string,
  value: string,
  explanation: string,
  span = 6,
  distractors?: string[],
  pos = 0,
): DocField {
  const field: DocField = { n, label, value, explanation, span }
  if (distractors && distractors.length > 0) {
    const at = Math.min(Math.max(pos, 0), distractors.length)
    const options = [...distractors]
    options.splice(at, 0, value)
    field.practice = { options, answer: at }
  }
  return field
}

// ── Importador uruguayo (común a las tres operaciones) ──────────────────────
export const IMP = {
  name: "Distribuidora Ejemplo S.A.",
  address: "Av. Ficticia 1234, Montevideo, Uruguay",
  rut: "21 000000 0001",
  rut12: "210000000001",
}

export const IMP_BANK = {
  name: "Banco Ejemplo del Uruguay S.A.",
  swift: "EJMPUYMM (ficticio)",
}

// ── Operación (a): importación marítima desde China ─────────────────────────
export const CN = {
  exporter: "Ejemplo Glassware Manufacturing Co., Ltd.",
  address: "No. 88 Example Road, Ningbo, Zhejiang, China",
  bank: "Bank of Example, Ningbo Branch",
  bankSwift: "EXMPCNSH (ficticio)",
  account: "0000-1111-2222-3333 (ficticia)",
  proforma: "PI-2026-0147",
  proformaDate: "22/06/2026",
  invoice: "CI-2026-0398",
  invoiceDate: "05/08/2026",
  packingList: "PL-2026-0398",
  lc: "DC-EJ-26-00045",
  lcIssue: "08/07/2026",
  lcExpiry: "15/09/2026",
  latestShipment: "31/08/2026",
  incoterm: "FCA Terminal de contenedores, Puerto de Ningbo, China, Incoterms® 2020",
  incotermShort: "FCA Puerto de Ningbo, Incoterms® 2020",
  // Ítem 1: vaso 300 ml
  i1: { model: "TG-300", desc: "Vaso de vidrio templado 300 ml, modelo TG-300", qty: 15000, unit: 0.7, total: 10500, perCtn: 50, ctns: 300, netCtn: 15, grossCtn: 16.2, dims: "40 × 30 × 30 cm", m3Ctn: 0.036 },
  // Ítem 2: vaso 450 ml
  i2: { model: "TG-450", desc: "Vaso de vidrio templado 450 ml, modelo TG-450", qty: 10000, unit: 0.95, total: 9500, perCtn: 40, ctns: 250, netCtn: 16, grossCtn: 17.2, dims: "40 × 30 × 35 cm", m3Ctn: 0.042 },
  totalQty: "25.000 unidades",
  totalUsd: "USD 20.000,00",
  cartons: "550 cajas de cartón",
  net: "8.500,000 kg",
  gross: "9.160,000 kg",
  volume: "21,300 m³",
  marks: "DE / MVD / 1-550",
  container: "EJMU 000123-4 (20' DV)",
  seal: "EJ-000451",
  vessel: "EJEMPLO STAR / viaje 026E",
  carrier: "Línea Naviera Ejemplo",
  bl: "LNEJ-NGB-2600871",
  booking: "BK-77120",
  onBoard: "10/08/2026",
  freight: "USD 2.500,00",
  insurance: "USD 200,00",
  arrival: "18/09/2026",
  dua: "001-2026-123456",
  duaDate: "21/09/2026",
}

// ── Operación (b): importación terrestre desde Brasil ───────────────────────
export const BR = {
  exporter: "Vidraria Exemplo Ltda.",
  address: "Rua Fictícia 500, São Paulo (SP), Brasil",
  cnpj: "00.000.000/0001-00 (ficticio)",
  bank: "Banco Exemplo do Brasil S.A. (ficticio)",
  invoice: "000.123",
  invoiceDate: "02/09/2026",
  incoterm: "CPT Montevideo, Uruguay, Incoterms® 2020",
  goods: "Juegos de 6 platos de vidrio templado",
  qty: "1.000 juegos",
  valueGoods: "USD 10.000,00",
  freight: "USD 800,00",
  insurance: "USD 60,00",
  invoiceTotal: "USD 10.800,00",
  packages: "10 pallets (100 cajas de cartón)",
  net: "3.600 kg",
  gross: "4.100 kg",
  volume: "18,0 m³",
  marks: "DE-MVD 1/10",
  carrier: "Transportes Ejemplo Ltda.",
  carrierAddress: "Av. Imaginária 77, Porto Alegre (RS), Brasil",
  permit: "Permiso internacional 0000/00 (ficticio)",
  crt: "BR.0000.00123 (ficticio)",
  crtDate: "03/09/2026",
  mic: "26BR0000000123 (ficticio)",
  truckPlate: "EXE0A00 (ficticia)",
  trailerPlate: "EXE0B00 (ficticia)",
  seals: "EX 000781 y EX 000782",
  delivery: "08/09/2026",
  coNumber: "COD-BR-2026-000123 (ficticio)",
  ncm: "7013.49.00 (ilustrativa)",
  dueDate: "01/11/2026",
}

// ── Operación (c): envío aéreo desde Alemania ───────────────────────────────
export const AIR = {
  shipper: "Ejemplo Maschinenbau GmbH",
  shipperAddress: "Musterstraße 1, Frankfurt am Main, Alemania",
  awb: "000-1234 5675",
  agent: "Ejemplo Cargo GmbH, Frankfurt (código IATA ficticio 00-0 0000/0000)",
  goods: "Repuestos para máquina decoradora de vasos (rodillos y resistencias)",
  pieces: "3",
  grossKg: "90,0",
  dims: "3 cajas de 80 × 60 × 50 cm (0,72 m³)",
  chargeable: "120,0",
  rate: "4,20",
  weightCharge: "504,00",
  value: "USD 3.800,00",
  incoterm: "FCA Aeropuerto de Frankfurt, Incoterms® 2020",
  date: "14/09/2026",
}

export const STUDY_NOTE = "MODELO DE ESTUDIO — datos ficticios"
