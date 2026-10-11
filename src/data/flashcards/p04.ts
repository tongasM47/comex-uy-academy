import type { Flashcard } from '../types'

export const p04Flashcards: Flashcard[] = [
  {
    "id": "f-p04-001",
    "moduleId": "p04",
    "subtopicId": "p04-s1",
    "front": "Funciones del B/L",
    "back": "Recibo de la mercadería, prueba del contrato de transporte y título representativo de la mercadería."
  },
  {
    "id": "f-p04-002",
    "moduleId": "p04",
    "subtopicId": "p04-s1",
    "front": "B/L nominativo (straight)",
    "back": "Consignado a una persona determinada; se transmite por cesión, no por endoso."
  },
  {
    "id": "f-p04-003",
    "moduleId": "p04",
    "subtopicId": "p04-s1",
    "front": "B/L a la orden",
    "back": "Consignado “to order” o “to the order of” un banco o el embarcador; se transmite por endoso. Típico de cartas de crédito."
  },
  {
    "id": "f-p04-004",
    "moduleId": "p04",
    "subtopicId": "p04-s1",
    "front": "B/L limpio vs sucio",
    "back": "Limpio: sin reservas. Sucio (claused): con anotaciones de daño. Los bancos rechazan el sucio (UCP 600, art. 27)."
  },
  {
    "id": "f-p04-005",
    "moduleId": "p04",
    "subtopicId": "p04-s1",
    "front": "Shipped on board vs received for shipment",
    "back": "On board: la carga ya está en el buque. Received: el transportista la recibió pero no la embarcó."
  },
  {
    "id": "f-p04-006",
    "moduleId": "p04",
    "subtopicId": "p04-s1",
    "front": "Master B/L vs House B/L",
    "back": "Master: lo emite la naviera al consolidador. House: lo emite el forwarder o NVOCC a cada embarcador."
  },
  {
    "id": "f-p04-007",
    "moduleId": "p04",
    "subtopicId": "p04-s1",
    "front": "Sea Waybill",
    "back": "Documento marítimo no negociable: no es título y la carga se entrega al consignatario."
  },
  {
    "id": "f-p04-008",
    "moduleId": "p04",
    "subtopicId": "p04-s1",
    "front": "Telex release",
    "back": "Originales entregados en origen y liberación de la carga en destino por mensaje."
  },
  {
    "id": "f-p04-009",
    "moduleId": "p04",
    "subtopicId": "p04-s1",
    "front": "Full set 3/3",
    "back": "Juego completo de 3 originales. Presentado uno, los demás quedan sin efecto."
  },
  {
    "id": "f-p04-010",
    "moduleId": "p04",
    "subtopicId": "p04-s2",
    "front": "AWB",
    "back": "Guía aérea: recibo, prueba del contrato de transporte aéreo y factura del flete. No es negociable."
  },
  {
    "id": "f-p04-011",
    "moduleId": "p04",
    "subtopicId": "p04-s2",
    "front": "Número de MAWB",
    "back": "11 dígitos: 3 de prefijo de la aerolínea y 8 de serie (el último, de control)."
  },
  {
    "id": "f-p04-012",
    "moduleId": "p04",
    "subtopicId": "p04-s2",
    "front": "MAWB vs HAWB",
    "back": "MAWB: la aerolínea al consolidador. HAWB: el consolidador a cada embarcador."
  },
  {
    "id": "f-p04-013",
    "moduleId": "p04",
    "subtopicId": "p04-s2",
    "front": "Chargeable weight",
    "back": "Peso facturable aéreo: el mayor entre el peso real y el volumétrico (cm³ ÷ 6000)."
  },
  {
    "id": "f-p04-014",
    "moduleId": "p04",
    "subtopicId": "p04-s2",
    "front": "CRT",
    "back": "Conocimiento de Transporte Internacional por Carretera: contrato de transporte y recibo, emitido por el porteador bajo el ATIT."
  },
  {
    "id": "f-p04-015",
    "moduleId": "p04",
    "subtopicId": "p04-s2",
    "front": "MIC/DTA",
    "back": "Manifiesto Internacional de Carga / Declaración de Tránsito Aduanero: uno por vehículo, ampara varios CRT, tránsito con precintos."
  },
  {
    "id": "f-p04-016",
    "moduleId": "p04",
    "subtopicId": "p04-s2",
    "front": "ATIT",
    "back": "Acuerdo sobre Transporte Internacional Terrestre (ALADI, 1990): Argentina, Bolivia, Brasil, Chile, Paraguay, Perú y Uruguay."
  },
  {
    "id": "f-p04-017",
    "moduleId": "p04",
    "subtopicId": "p04-s2",
    "front": "TIF/DTA",
    "back": "Carta de porte internacional ferroviaria con declaración de tránsito aduanero; uso limitado en Uruguay."
  },
  {
    "id": "f-p04-018",
    "moduleId": "p04",
    "subtopicId": "p04-s3",
    "front": "Transferencia internacional",
    "back": "Orden de pago de banco a banco vía SWIFT; liquida el pago anticipado y la cuenta abierta."
  },
  {
    "id": "f-p04-019",
    "moduleId": "p04",
    "subtopicId": "p04-s3",
    "front": "OUR / SHA / BEN",
    "back": "OUR: paga todo el ordenante. SHA: cada uno paga los de su banco. BEN: paga todo el beneficiario."
  },
  {
    "id": "f-p04-020",
    "moduleId": "p04",
    "subtopicId": "p04-s3",
    "front": "MT103 en ISO 20022",
    "back": "pacs.008 (y el MT202, pacs.009). La coexistencia MT/MX terminó el 22/11/2025."
  },
  {
    "id": "f-p04-021",
    "moduleId": "p04",
    "subtopicId": "p04-s3",
    "front": "UETR",
    "back": "Código único de SWIFT gpi para seguir una transferencia de punta a punta."
  },
  {
    "id": "f-p04-022",
    "moduleId": "p04",
    "subtopicId": "p04-s3",
    "front": "Letra de cambio",
    "back": "Título por el cual el librador ordena al librado pagar a un beneficiario, a la vista o a plazo."
  },
  {
    "id": "f-p04-023",
    "moduleId": "p04",
    "subtopicId": "p04-s3",
    "front": "Cobranza D/A",
    "back": "El banco entrega documentos al importador cuando acepta una letra a plazo; paga al vencimiento."
  },
  {
    "id": "f-p04-024",
    "moduleId": "p04",
    "subtopicId": "p04-s3",
    "front": "Escalera de riesgo del exportador",
    "back": "Anticipado → CC confirmada → CC → cobranza D/P → cobranza D/A → cuenta abierta."
  },
  {
    "id": "f-p04-025",
    "moduleId": "p04",
    "subtopicId": "p04-s3",
    "front": "Libertad cambiaria en Uruguay",
    "back": "No hay controles de cambio; sí controles de prevención de lavado (Ley 19.574)."
  },
  {
    "id": "f-p04-026",
    "moduleId": "p04",
    "subtopicId": "p04-s4",
    "front": "Certificado de origen",
    "back": "Acredita el país donde se produjo la mercadería según reglas de origen; puede ser preferencial o no preferencial."
  },
  {
    "id": "f-p04-027",
    "moduleId": "p04",
    "subtopicId": "p04-s4",
    "front": "ACE 18 vs AEC",
    "back": "ACE 18: acuerdo ALADI que registra el programa de liberación del MERCOSUR. AEC: Arancel Externo Común. “AEC 18” es una errata."
  },
  {
    "id": "f-p04-028",
    "moduleId": "p04",
    "subtopicId": "p04-s4",
    "front": "Entidades emisoras (Decreto 182/016)",
    "back": "CIU, Cámara Mercantil, Cámara Nacional de Comercio y Servicios, Unión de Exportadores y Dirección Nacional de Industrias (automotor)."
  },
  {
    "id": "f-p04-029",
    "moduleId": "p04",
    "subtopicId": "p04-s4",
    "front": "Régimen de Origen MERCOSUR vigente",
    "back": "Dec. CMC 05/23 y 06/23, desde el 18/07/2024 (Protocolo 218 al ACE 18)."
  },
  {
    "id": "f-p04-030",
    "moduleId": "p04",
    "subtopicId": "p04-s4",
    "front": "Validez y plazo de emisión del certificado MERCOSUR",
    "back": "Validez 12 meses; emisión dentro de los 180 días corridos de la factura."
  },
  {
    "id": "f-p04-031",
    "moduleId": "p04",
    "subtopicId": "p04-s4",
    "front": "Letras A, B y C de la norma de origen",
    "back": "A: totalmente obtenido. B: solo materiales originarios. C: no originarios que cumplen el requisito del Apéndice II."
  },
  {
    "id": "f-p04-032",
    "moduleId": "p04",
    "subtopicId": "p04-s4",
    "front": "COD",
    "back": "Certificado de Origen Digital (Res. 386 ALADI): firma digital y XML. Obligatorio con Argentina y Brasil desde el 1/2/2020 y con Paraguay desde el 1/4/2024."
  },
  {
    "id": "f-p04-033",
    "moduleId": "p04",
    "subtopicId": "p04-s4",
    "front": "Tope especial de VMNO para Uruguay",
    "back": "Hasta 50 % hasta el 31/12/2032 (Dec. CMC 06/23)."
  }
]
