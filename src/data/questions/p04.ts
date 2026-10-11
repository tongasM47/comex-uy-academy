import type { Question } from '../types'

export const p04Questions: Question[] = [
  {
    "id": "q-p04-001",
    "moduleId": "p04",
    "subtopicId": "p04-s1",
    "difficulty": 1,
    "prompt": "¿Cuáles son las tres funciones clásicas del B/L?",
    "options": [
      "Factura, certificado de origen y póliza",
      "Manifiesto, tránsito y declaración de valor",
      "Recibo de la mercadería, prueba del contrato de transporte y título representativo",
      "Recibo, pago y seguro"
    ],
    "answer": 2,
    "explanation": "El B/L acredita qué recibió el transportista, prueba el contrato y, por ser título, permite reclamar la carga a quien lo tiene bien endosado."
  },
  {
    "id": "q-p04-002",
    "moduleId": "p04",
    "subtopicId": "p04-s1",
    "difficulty": 1,
    "prompt": "Un B/L consignado “To the order of Banco República” es:",
    "options": [
      "A la orden",
      "Nominativo",
      "Al portador",
      "Sucio"
    ],
    "answer": 0,
    "explanation": "Se transmite por endoso. Es el tipo más usado con cartas de crédito."
  },
  {
    "id": "q-p04-003",
    "moduleId": "p04",
    "subtopicId": "p04-s1",
    "difficulty": 1,
    "prompt": "Un B/L con la anotación “3 cajas rotas” es:",
    "options": [
      "Limpio",
      "Recibido para embarque",
      "Directo",
      "Sucio (claused)"
    ],
    "answer": 3,
    "explanation": "Las reservas sobre el estado de la carga lo vuelven sucio, y los bancos lo rechazan en una carta de crédito (UCP 600, art. 27)."
  },
  {
    "id": "q-p04-004",
    "moduleId": "p04",
    "subtopicId": "p04-s1",
    "difficulty": 2,
    "prompt": "En una consolidación LCL, el documento que la naviera emite al forwarder se llama:",
    "options": [
      "House B/L",
      "Master B/L",
      "Sea Waybill",
      "CRT"
    ],
    "answer": 1,
    "explanation": "El MBL lo emite la naviera al consolidador; luego el forwarder o NVOCC emite un HBL a cada embarcador."
  },
  {
    "id": "q-p04-005",
    "moduleId": "p04",
    "subtopicId": "p04-s1",
    "difficulty": 2,
    "prompt": "¿Cómo se transmite un B/L nominativo (straight)?",
    "options": [
      "Por endoso en blanco",
      "Por cesión, no por endoso",
      "Por simple entrega",
      "Por mensaje SWIFT"
    ],
    "answer": 1,
    "explanation": "El nominativo está consignado a una persona determinada y no circula por endoso; solo por cesión. El a la orden sí se endosa."
  },
  {
    "id": "q-p04-006",
    "moduleId": "p04",
    "subtopicId": "p04-s1",
    "difficulty": 2,
    "prompt": "¿Qué significa “full set 3/3” en un B/L?",
    "options": [
      "Que hay 3 contenedores",
      "Que el flete se paga en 3 cuotas",
      "Que hubo 3 transbordos",
      "Que se emitieron 3 originales y se presenta el juego completo"
    ],
    "answer": 3,
    "explanation": "Normalmente se emiten 3 originales. Presentado uno, los demás quedan sin efecto, por eso los bancos piden el juego completo."
  },
  {
    "id": "q-p04-007",
    "moduleId": "p04",
    "subtopicId": "p04-s1",
    "difficulty": 2,
    "prompt": "¿Qué documento marítimo NO es título y entrega la carga al consignatario indicado?",
    "options": [
      "Sea Waybill",
      "B/L a la orden",
      "B/L al portador",
      "Through B/L negociable"
    ],
    "answer": 0,
    "explanation": "El Sea Waybill no es negociable: sirve para entregas rápidas sin necesidad de presentar originales."
  },
  {
    "id": "q-p04-008",
    "moduleId": "p04",
    "subtopicId": "p04-s1",
    "difficulty": 3,
    "prompt": "¿Qué diferencia hay entre un B/L “shipped on board” y uno “received for shipment”?",
    "options": [
      "Son sinónimos",
      "El primero es aéreo y el segundo marítimo",
      "El primero certifica que la carga ya está en el buque; el segundo, que el transportista la recibió pero no la embarcó",
      "El segundo es siempre sucio"
    ],
    "answer": 2,
    "explanation": "El received for shipment puede convertirse en a bordo con una anotación fechada. Las cartas de crédito suelen exigir on board."
  },
  {
    "id": "q-p04-009",
    "moduleId": "p04",
    "subtopicId": "p04-s1",
    "difficulty": 3,
    "prompt": "Un importador pagó al proveedor, pero el B/L dice “To the order of Banco X” sin endoso. ¿Puede retirar la carga?",
    "options": [
      "Sí, porque ya pagó",
      "Sí, con la factura comercial",
      "Sí, si el despachante lo autoriza",
      "No: necesita que el banco endose el B/L a su favor"
    ],
    "answer": 3,
    "explanation": "En un B/L a la orden la carga se entrega a quien le endosen el documento. Sin el endoso del banco, el importador no acredita la disponibilidad."
  },
  {
    "id": "q-p04-010",
    "moduleId": "p04",
    "subtopicId": "p04-s1",
    "difficulty": 2,
    "prompt": "¿Qué es un telex release?",
    "options": [
      "Un B/L emitido por la aerolínea",
      "Una enmienda de carta de crédito",
      "Entregar los originales en origen y liberar la carga en destino por mensaje",
      "Un recargo por combustible"
    ],
    "answer": 2,
    "explanation": "Con telex release (o B/L surrender) los originales se entregan en origen y la naviera libera la carga en destino sin que viajen."
  },
  {
    "id": "q-p04-011",
    "moduleId": "p04",
    "subtopicId": "p04-s2",
    "difficulty": 1,
    "prompt": "¿Qué función del B/L NO tiene la guía aérea?",
    "options": [
      "Recibo de la carga",
      "Título de crédito negociable",
      "Prueba del contrato de transporte",
      "Detalle del flete"
    ],
    "answer": 1,
    "explanation": "La AWB es siempre “not negotiable”: la carga se entrega al consignatario indicado."
  },
  {
    "id": "q-p04-012",
    "moduleId": "p04",
    "subtopicId": "p04-s2",
    "difficulty": 2,
    "prompt": "¿Qué indican los 3 primeros dígitos del número de una MAWB?",
    "options": [
      "El prefijo de la aerolínea",
      "El aeropuerto de destino",
      "El año de emisión",
      "El código del despachante"
    ],
    "answer": 0,
    "explanation": "La MAWB tiene 11 dígitos: 3 de prefijo de la aerolínea y 8 de serie, cuyo último es de control."
  },
  {
    "id": "q-p04-013",
    "moduleId": "p04",
    "subtopicId": "p04-s2",
    "difficulty": 1,
    "prompt": "En el transporte por carretera del MERCOSUR, ¿qué documento es a la vez manifiesto y declaración de tránsito aduanero?",
    "options": [
      "MIC/DTA",
      "CRT",
      "TIF",
      "AWB"
    ],
    "answer": 0,
    "explanation": "El MIC/DTA ampara uno o varios CRT y permite el tránsito con precintos."
  },
  {
    "id": "q-p04-014",
    "moduleId": "p04",
    "subtopicId": "p04-s2",
    "difficulty": 2,
    "prompt": "Un camión lleva carga de dos exportadores distintos. ¿Cuántos CRT y MIC/DTA corresponden normalmente?",
    "options": [
      "Un CRT y dos MIC/DTA",
      "Dos CRT y un MIC/DTA",
      "Un CRT y un MIC/DTA",
      "Dos CRT y dos MIC/DTA"
    ],
    "answer": 1,
    "explanation": "Hay un CRT por remitente o contrato y un MIC/DTA por vehículo, que puede amparar varios CRT."
  },
  {
    "id": "q-p04-015",
    "moduleId": "p04",
    "subtopicId": "p04-s2",
    "difficulty": 2,
    "prompt": "¿Qué países integran el ATIT?",
    "options": [
      "Solo los cuatro fundadores del MERCOSUR",
      "Todos los miembros de ALADI",
      "Argentina, Bolivia, Brasil, Chile, Paraguay, Perú y Uruguay",
      "Uruguay, Argentina y Brasil"
    ],
    "answer": 2,
    "explanation": "El Acuerdo sobre Transporte Internacional Terrestre (ALADI, 1990) lo firmaron esos siete países."
  },
  {
    "id": "q-p04-016",
    "moduleId": "p04",
    "subtopicId": "p04-s2",
    "difficulty": 2,
    "prompt": "Cuatro cajas de 60 × 50 × 40 cm y 12 kg cada una van por avión. ¿Peso facturable?",
    "options": [
      "48 kg",
      "20 kg",
      "128 kg",
      "80 kg"
    ],
    "answer": 3,
    "explanation": "Cada caja: 120.000 cm³ ÷ 6000 = 20 kg volumétricos; total 80 kg. Real 48 kg. Se factura el mayor: 80 kg."
  },
  {
    "id": "q-p04-017",
    "moduleId": "p04",
    "subtopicId": "p04-s2",
    "difficulty": 2,
    "prompt": "¿Quién emite el CRT?",
    "options": [
      "La DNA",
      "El despachante del exportador",
      "El porteador (la empresa de transporte habilitada)",
      "El banco del importador"
    ],
    "answer": 2,
    "explanation": "El CRT lo emite el porteador como prueba del contrato y recibo de la mercadería."
  },
  {
    "id": "q-p04-018",
    "moduleId": "p04",
    "subtopicId": "p04-s2",
    "difficulty": 3,
    "prompt": "¿Qué norma MERCOSUR regula la informatización e intercambio electrónico del MIC/DTA?",
    "options": [
      "Resolución GMC 17/04",
      "Decisión CMC 05/23",
      "Resolución 386 de ALADI",
      "Decreto 50/026"
    ],
    "answer": 0,
    "explanation": "La Res. GMC 17/04 regula el MIC/DTA electrónico. La CMC 05/23 es el régimen de origen y la Res. 386 de ALADI, el COD."
  },
  {
    "id": "q-p04-019",
    "moduleId": "p04",
    "subtopicId": "p04-s2",
    "difficulty": 2,
    "prompt": "¿Quién emite la HAWB?",
    "options": [
      "La aerolínea",
      "La DNA",
      "El aeropuerto",
      "El consolidador o freight forwarder"
    ],
    "answer": 3,
    "explanation": "La MAWB la emite la aerolínea al consolidador; la HAWB, el consolidador a cada embarcador."
  },
  {
    "id": "q-p04-020",
    "moduleId": "p04",
    "subtopicId": "p04-s2",
    "difficulty": 3,
    "prompt": "¿Qué es el TIF/DTA?",
    "options": [
      "La guía aérea de transporte farmacéutico",
      "La carta de porte internacional ferroviaria con la declaración de tránsito aduanero",
      "Un certificado de origen digital",
      "El manifiesto de un buque"
    ],
    "answer": 1,
    "explanation": "El TIF (Transporte Internacional Ferroviario) es el equivalente ferroviario del CRT, acompañado del DTA. En Uruguay su uso es limitado."
  },
  {
    "id": "q-p04-021",
    "moduleId": "p04",
    "subtopicId": "p04-s3",
    "difficulty": 1,
    "prompt": "Con la opción de gastos OUR en una transferencia:",
    "options": [
      "El beneficiario paga todos los gastos",
      "El ordenante paga todos los gastos",
      "Se comparten",
      "Paga el banco intermediario"
    ],
    "answer": 1,
    "explanation": "OUR: el ordenante paga todo y el beneficiario recibe el monto íntegro. SHA: compartidos. BEN: paga el beneficiario."
  },
  {
    "id": "q-p04-022",
    "moduleId": "p04",
    "subtopicId": "p04-s3",
    "difficulty": 2,
    "prompt": "Un importador alemán transfiere EUR 20.000 y el exportador uruguayo recibe EUR 19.935. ¿Causa más probable?",
    "options": [
      "El BROU cobró IVA",
      "La DNA retuvo un tributo",
      "El tipo de cambio del BCU",
      "La transferencia salió con SHA o BEN y un intermediario descontó comisiones"
    ],
    "answer": 3,
    "explanation": "Con SHA o BEN los bancos intermediarios descuentan sus comisiones del monto. Se evita pidiendo OUR en la pro-forma."
  },
  {
    "id": "q-p04-023",
    "moduleId": "p04",
    "subtopicId": "p04-s3",
    "difficulty": 2,
    "prompt": "¿Cuándo terminó la coexistencia de los formatos MT e ISO 20022 para pagos transfronterizos?",
    "options": [
      "El 22/11/2025",
      "El 1/1/2020",
      "El 1/5/2026",
      "Todavía no terminó"
    ],
    "answer": 0,
    "explanation": "La coexistencia terminó el 22/11/2025. Hoy el equivalente al MT103 es el pacs.008."
  },
  {
    "id": "q-p04-024",
    "moduleId": "p04",
    "subtopicId": "p04-s3",
    "difficulty": 2,
    "prompt": "¿Cuál es el equivalente ISO 20022 del MT103?",
    "options": [
      "pacs.009",
      "camt.053",
      "pacs.008",
      "MT700"
    ],
    "answer": 2,
    "explanation": "pacs.008 reemplaza al MT103 (transferencia de cliente) y pacs.009 al MT202 (banco a banco). MT700 es la emisión de una carta de crédito."
  },
  {
    "id": "q-p04-025",
    "moduleId": "p04",
    "subtopicId": "p04-s3",
    "difficulty": 1,
    "prompt": "En una letra de cambio, ¿quién es el librado?",
    "options": [
      "Quien emite la orden (el exportador)",
      "El banco avisador",
      "La aduana",
      "Quien recibe la orden de pagar (en comex, el importador)"
    ],
    "answer": 3,
    "explanation": "El librador ordena, el librado paga y el beneficiario o tomador cobra."
  },
  {
    "id": "q-p04-026",
    "moduleId": "p04",
    "subtopicId": "p04-s3",
    "difficulty": 2,
    "prompt": "En una cobranza documentaria D/A:",
    "options": [
      "El importador paga para retirar los documentos",
      "El banco garantiza el pago",
      "El importador acepta una letra de cambio y recibe los documentos",
      "Se aplica UCP 600"
    ],
    "answer": 2,
    "explanation": "En D/A el importador acepta la letra a plazo, retira la mercadería y paga al vencimiento. Rige la URC 522 y el banco no garantiza el pago."
  },
  {
    "id": "q-p04-027",
    "moduleId": "p04",
    "subtopicId": "p04-s3",
    "difficulty": 2,
    "prompt": "Para el exportador, el orden correcto de menor a mayor riesgo es:",
    "options": [
      "Cuenta abierta, cobranza, CC, anticipado",
      "Anticipado, CC confirmada, cobranza D/P, cobranza D/A, cuenta abierta",
      "CC, anticipado, cuenta abierta, cobranza",
      "Cobranza D/A, D/P, CC, anticipado"
    ],
    "answer": 1,
    "explanation": "Esa es la escalera de riesgo del exportador; para el importador es exactamente al revés."
  },
  {
    "id": "q-p04-028",
    "moduleId": "p04",
    "subtopicId": "p04-s3",
    "difficulty": 3,
    "prompt": "¿Qué hace descontable una letra de cambio de exportación (forfaiting)?",
    "options": [
      "Que esté avalada por un banco",
      "Que esté en euros",
      "Que sea a la vista",
      "Que figure en el DUA"
    ],
    "answer": 0,
    "explanation": "Con aval bancario la letra se vuelve descontable: el exportador puede cobrarla antes del vencimiento."
  },
  {
    "id": "q-p04-029",
    "moduleId": "p04",
    "subtopicId": "p04-s3",
    "difficulty": 2,
    "prompt": "¿Hay controles de cambio en Uruguay?",
    "options": [
      "No, hay libertad cambiaria; sí hay controles de prevención de lavado",
      "Sí, hay que ingresar las divisas de exportación",
      "Sí, se necesita autorización del BCU para pagar importaciones",
      "Solo para operaciones en euros"
    ],
    "answer": 0,
    "explanation": "Uruguay no tiene controles de cambio. Los bancos piden respaldo documental (factura, DUA, contrato) por la normativa de prevención de lavado."
  },
  {
    "id": "q-p04-030",
    "moduleId": "p04",
    "subtopicId": "p04-s3",
    "difficulty": 3,
    "prompt": "¿Para qué sirve el UETR en una transferencia SWIFT gpi?",
    "options": [
      "Para fijar el tipo de cambio",
      "Para seguir la transferencia de punta a punta con un código único",
      "Para identificar la cuenta del beneficiario",
      "Para calcular la comisión"
    ],
    "answer": 1,
    "explanation": "SWIFT gpi permite rastrear el pago con el UETR, un código único de la transferencia."
  },
  {
    "id": "q-p04-031",
    "moduleId": "p04",
    "subtopicId": "p04-s4",
    "difficulty": 1,
    "prompt": "¿Qué acredita el certificado de origen?",
    "options": [
      "El país desde donde se despachó",
      "El país del banco que paga",
      "El país donde se produjo la mercadería según las reglas de origen",
      "El país de la naviera"
    ],
    "answer": 2,
    "explanation": "Acredita la producción según las reglas de un acuerdo o del país importador, no el lugar de despacho."
  },
  {
    "id": "q-p04-032",
    "moduleId": "p04",
    "subtopicId": "p04-s4",
    "difficulty": 2,
    "prompt": "Si el programa del curso dice “AEC 18”, ¿qué corresponde entender?",
    "options": [
      "Es el Arancel Externo Común número 18",
      "Es el artículo 18 del CAROU",
      "Es la versión 18 del AEC",
      "Es una errata por ACE 18, el acuerdo ALADI que registra el programa de liberación del MERCOSUR"
    ],
    "answer": 3,
    "explanation": "ACE es Acuerdo de Complementación Económica; AEC es Arancel Externo Común. No existe un “AEC 18”."
  },
  {
    "id": "q-p04-033",
    "moduleId": "p04",
    "subtopicId": "p04-s4",
    "difficulty": 2,
    "prompt": "¿Qué entidad uruguaya está especializada en certificados de origen del sector automotor?",
    "options": [
      "La Unión de Exportadores",
      "La Cámara de Industrias",
      "La Dirección Nacional de Industrias (MIEM)",
      "La Cámara Mercantil"
    ],
    "answer": 2,
    "explanation": "Según el informe del MEF de 2025, la Dirección Nacional de Industrias se especializa en el sector automotor."
  },
  {
    "id": "q-p04-034",
    "moduleId": "p04",
    "subtopicId": "p04-s4",
    "difficulty": 2,
    "prompt": "Con el Régimen de Origen MERCOSUR vigente desde el 18/07/2024, ¿cuál es la validez del certificado?",
    "options": [
      "12 meses desde la emisión",
      "180 días",
      "90 días",
      "5 años"
    ],
    "answer": 0,
    "explanation": "Pasó de 180 días a 12 meses, y debe emitirse dentro de los 180 días corridos de la factura comercial."
  },
  {
    "id": "q-p04-035",
    "moduleId": "p04",
    "subtopicId": "p04-s4",
    "difficulty": 2,
    "prompt": "En la casilla “Norma de origen” del certificado MERCOSUR, la letra C significa:",
    "options": [
      "Totalmente obtenido",
      "Elaborado solo con materiales originarios",
      "Certificado corregido",
      "Elaborado con materiales no originarios que cumplen el requisito específico del Apéndice II"
    ],
    "answer": 3,
    "explanation": "A = totalmente obtenido; B = elaborado exclusivamente con materiales originarios; C = con materiales no originarios que cumplen el requisito específico."
  },
  {
    "id": "q-p04-036",
    "moduleId": "p04",
    "subtopicId": "p04-s4",
    "difficulty": 2,
    "prompt": "¿Desde cuándo el COD es la única forma de certificar el origen preferencial en las exportaciones uruguayas a Argentina y Brasil?",
    "options": [
      "Desde 2015",
      "Desde el 1/2/2020",
      "Desde el 1/4/2024",
      "Todavía no es obligatorio"
    ],
    "answer": 1,
    "explanation": "Desde el 1/2/2020 Uruguay emite solo COD para esos destinos. Con Paraguay es obligatorio desde el 1/4/2024."
  },
  {
    "id": "q-p04-037",
    "moduleId": "p04",
    "subtopicId": "p04-s4",
    "difficulty": 3,
    "prompt": "¿Qué tope especial de VMNO tiene Uruguay en el nuevo régimen de origen MERCOSUR?",
    "options": [
      "Hasta 60 % hasta 2038",
      "Hasta 50 % hasta el 31/12/2032",
      "40 % sin plazo",
      "10 % para todos los productos"
    ],
    "answer": 1,
    "explanation": "La Dec. CMC 06/23 da a Uruguay hasta 50 % de VMNO hasta el 31/12/2032. El 60 % hasta 2038 corresponde a Paraguay."
  },
  {
    "id": "q-p04-038",
    "moduleId": "p04",
    "subtopicId": "p04-s4",
    "difficulty": 3,
    "prompt": "¿Cómo se declara en el DUA un certificado de origen con Colombia en papel y uno digital?",
    "options": [
      "Papel con FACC y digital con PROF",
      "Ambos con el código 310",
      "Papel con ORIM y digital con REMN",
      "Papel con COLO y digital con COCO"
    ],
    "answer": 3,
    "explanation": "Según la RG DNA 04/2025, desde el 3/3/2025 conviven papel (COLO) y COD (COCO) con Colombia."
  },
  {
    "id": "q-p04-039",
    "moduleId": "p04",
    "subtopicId": "p04-s4",
    "difficulty": 1,
    "prompt": "¿Qué organismo administra los regímenes de origen y controla a las entidades emisoras?",
    "options": [
      "La Asesoría de Política Comercial del MEF",
      "La DNA",
      "El LATU",
      "El BCU"
    ],
    "answer": 0,
    "explanation": "El MEF, a través de su Asesoría de Política Comercial, administra los regímenes de origen y controla a las entidades habilitadas."
  },
  {
    "id": "q-p04-040",
    "moduleId": "p04",
    "subtopicId": "p04-s4",
    "difficulty": 2,
    "prompt": "¿Qué base jurídica tiene el Certificado de Origen Digital (COD)?",
    "options": [
      "El Decreto 50/026",
      "La UCP 600",
      "La Resolución 386 del Comité de Representantes de ALADI",
      "La Ley 18.184"
    ],
    "answer": 2,
    "explanation": "La Res. 386 de ALADI (4/11/2011) fija el procedimiento, las especificaciones técnicas y la validez jurídica del COD, firmado digitalmente y transmitido en XML."
  },
  {
    "id": "q-p04-041",
    "moduleId": "p04",
    "subtopicId": "p04-s4",
    "difficulty": 3,
    "prompt": "¿Qué sector está excluido del Régimen de Origen MERCOSUR y se rige por acuerdos bilaterales?",
    "options": [
      "El textil",
      "El farmacéutico",
      "El cárnico",
      "El automotor"
    ],
    "answer": 3,
    "explanation": "El sector automotor se rige por el ACE 2 con Brasil y el ACE 57 con Argentina."
  }
]
