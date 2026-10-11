import type { DocId, DocSpecimen } from '../types'
import { proforma } from './proforma'
import { facturaComercial } from './factura-comercial'
import { packingList } from './packing-list'
import { bl } from './bl'
import { awb } from './awb'
import { crt } from './crt'
import { micDta } from './mic-dta'
import { certificadoOrigen } from './certificado-origen'
import { dua } from './dua'
import { cartaCredito } from './carta-credito'
import { letraCambio } from './letra-cambio'

export { STUDY_NOTE } from './shared'

// Documentos ilustrados. Tres operaciones ficticias y coherentes entre sí:
// (a) importación marítima desde China: pro-forma, factura, packing list, B/L, carta de crédito, DUA;
// (b) importación por camión desde Brasil: CRT, MIC/DTA, certificado de origen ACE 18, letra de cambio;
// (c) envío aéreo desde Alemania: AWB.
export const documents: Record<DocId, DocSpecimen> = {
  proforma,
  'factura-comercial': facturaComercial,
  'packing-list': packingList,
  bl,
  awb,
  crt,
  'mic-dta': micDta,
  'certificado-origen': certificadoOrigen,
  dua,
  'carta-credito': cartaCredito,
  'letra-cambio': letraCambio,
}
