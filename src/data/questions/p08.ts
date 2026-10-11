import type { Question } from '../types'

// Preguntas del módulo 08. Base: docs/research/03_regimenes_exportacion.md (y 01/02 para origen y CAROU).
export const p08Questions: Question[] = [
  {
    "id": "q-p08-001",
    "moduleId": "p08",
    "subtopicId": "p08-s1",
    "difficulty": 1,
    "prompt": "Según el CAROU, la zona franca es:",
    "options": [
      "Territorio nacional que se considera fuera del territorio aduanero a efectos de los tributos de importación",
      "Territorio extranjero dentro de Uruguay",
      "Un depósito aduanero con plazo de 5 años",
      "Un área donde no rigen las leyes uruguayas"
    ],
    "answer": 0,
    "explanation": "CAROU art. 160: es parte del territorio nacional (rigen las leyes laborales, penales, etc.), pero a efectos de los tributos de importación se considera fuera del territorio aduanero."
  },
  {
    "id": "q-p08-002",
    "moduleId": "p08",
    "subtopicId": "p08-s1",
    "difficulty": 1,
    "prompt": "Un usuario indirecto de zona franca es quien:",
    "options": [
      "Contrata directamente con el Estado",
      "Contrata con un usuario directo",
      "Explota la infraestructura de la zona",
      "Trabaja desde su casa para la zona"
    ],
    "answer": 1,
    "explanation": "Ley 15.921 art. 15: el directo contrata con el explotador; el indirecto contrata con un usuario directo y usa sus instalaciones."
  },
  {
    "id": "q-p08-003",
    "moduleId": "p08",
    "subtopicId": "p08-s1",
    "difficulty": 2,
    "prompt": "¿Cuál es el plazo máximo del contrato de un usuario directo industrial tras la Ley 19.566?",
    "options": [
      "5 años",
      "10 años",
      "15 años",
      "Indefinido"
    ],
    "answer": 2,
    "explanation": "La reforma fijó 15 años para el directo industrial, 10 para el directo comercial o de servicios y 5 para el indirecto, sin prórrogas automáticas."
  },
  {
    "id": "q-p08-004",
    "moduleId": "p08",
    "subtopicId": "p08-s1",
    "difficulty": 2,
    "prompt": "¿Qué porcentaje mínimo de personal uruguayo exige la Ley 15.921 (texto de la Ley 20.446) para actividades que no son de servicios?",
    "options": [
      "50 %",
      "60 %",
      "90 %",
      "75 %"
    ],
    "answer": 3,
    "explanation": "El art. 18, con el texto dado por la Ley 20.446 (16/12/2025), exige 75 % como regla y 50 % en actividades de servicios."
  },
  {
    "id": "q-p08-005",
    "moduleId": "p08",
    "subtopicId": "p08-s1",
    "difficulty": 2,
    "prompt": "¿Cuál de estos tributos NO está exonerado para un usuario de zona franca?",
    "options": [
      "Los aportes a la seguridad social",
      "El IRAE",
      "El Impuesto al Patrimonio",
      "El IVA"
    ],
    "answer": 0,
    "explanation": "La Ley 15.921 art. 19 exonera todo tributo nacional; el art. 20 exceptúa la seguridad social, las prestaciones a entes paraestatales de seguridad social y, desde la Ley 20.446, el IMCD."
  },
  {
    "id": "q-p08-006",
    "moduleId": "p08",
    "subtopicId": "p08-s1",
    "difficulty": 3,
    "prompt": "¿Qué es el Impuesto Mínimo Complementario Doméstico (IMCD) agregado por la Ley 20.446?",
    "options": [
      "Un recargo del 15 % a toda mercadería que sale de zona franca",
      "Un impuesto mínimo del 15 % para entidades de grupos multinacionales grandes, del que no están exonerados los usuarios de zona franca",
      "Una tasa de 85 UI por DUA de zona franca",
      "Un impuesto a las exportaciones de celulosa"
    ],
    "answer": 1,
    "explanation": "La Ley 20.446 (16/12/2025) introdujo el IMCD del 15 % en línea con el Pilar 2 de la OCDE; los usuarios de zona franca no están exonerados. El Decreto 206/026 (31/08/2026) regula la compensación a los protegidos por estabilidad."
  },
  {
    "id": "q-p08-007",
    "moduleId": "p08",
    "subtopicId": "p08-s1",
    "difficulty": 3,
    "prompt": "Un usuario pide reducir transitoriamente el porcentaje de personal uruguayo y pasan 60 días sin respuesta. ¿Qué ocurre?",
    "options": [
      "La solicitud se considera denegada",
      "El contrato queda suspendido",
      "La solicitud se considera aprobada",
      "Debe volver a presentarla"
    ],
    "answer": 2,
    "explanation": "En la reducción de porcentajes de personal (art. 18, texto Ley 20.446) el silencio de 60 días es aprobación. Contrastalo con la prórroga de AT, donde el silencio es denegatoria."
  },
  {
    "id": "q-p08-008",
    "moduleId": "p08",
    "subtopicId": "p08-s1",
    "difficulty": 2,
    "prompt": "¿Qué norma reglamentó el “nuevo régimen de zona franca” de la Ley 19.566?",
    "options": [
      "Decreto 505/009",
      "Decreto 48/022",
      "Decreto 99/015",
      "Decreto 309/018"
    ],
    "answer": 3,
    "explanation": "La Ley 19.566 (08/12/2017, vigente desde el 08/03/2018) se reglamentó con el Decreto 309/018. El 505/009 es de AT, el 48/022 de devolución de tributos y el 99/015 de depósito."
  },
  {
    "id": "q-p08-009",
    "moduleId": "p08",
    "subtopicId": "p08-s1",
    "difficulty": 2,
    "prompt": "¿Qué organismo autoriza y registra los contratos de usuarios de zona franca?",
    "options": [
      "El MEF, a través de la Dirección Nacional de Zonas Francas",
      "La DNA",
      "El LATU",
      "La DGI"
    ],
    "answer": 0,
    "explanation": "La autoridad es el MEF: la Ley 19.996 (2021) creó la Dirección Nacional de Zonas Francas, antes Área Zonas Francas. La DNA hace controles selectivos."
  },
  {
    "id": "q-p08-010",
    "moduleId": "p08",
    "subtopicId": "p08-s1",
    "difficulty": 3,
    "prompt": "Un usuario directo comercial (contrato de 10 años) quiere renovar. ¿Desde cuándo puede pedirlo?",
    "options": [
      "En cualquier momento del contrato",
      "Habiendo transcurrido al menos el 85 % del plazo (102 meses) y con al menos 120 días de anticipación",
      "Recién después de vencido el contrato",
      "Con 90 días de anticipación, sin otra condición"
    ],
    "answer": 1,
    "explanation": "Dec. 309/018 art. 31: renovación pedida con al menos 120 días de anticipación y habiendo pasado al menos el 85 % del plazo. 120 meses × 0,85 = 102 meses."
  },
  {
    "id": "q-p08-011",
    "moduleId": "p08",
    "subtopicId": "p08-s1",
    "difficulty": 1,
    "prompt": "¿Cuál de estas actividades está prohibida en una zona franca?",
    "options": [
      "La actividad industrial",
      "El depósito y fraccionamiento de mercadería",
      "El comercio al por menor al público",
      "Los servicios a terceros países"
    ],
    "answer": 2,
    "explanation": "El art. 37 de la Ley 15.921 prohíbe el comercio minorista, con excepciones limitadas (provisión entre usuarios y servicios al personal de la zona)."
  },
  {
    "id": "q-p08-012",
    "moduleId": "p08",
    "subtopicId": "p08-s2",
    "difficulty": 1,
    "prompt": "La mercadería que sale de una zona franca hacia el territorio no franco uruguayo se considera:",
    "options": [
      "Exportación",
      "Tránsito",
      "Reembarque",
      "Importación a todos sus efectos"
    ],
    "answer": 3,
    "explanation": "Ley 15.921 art. 22 y CAROU art. 164: paga arancel según origen, IVA, anticipo de IVA, tasa consular y demás tributos como si viniera del exterior."
  },
  {
    "id": "q-p08-013",
    "moduleId": "p08",
    "subtopicId": "p08-s2",
    "difficulty": 2,
    "prompt": "Una fábrica de Montevideo vende mercadería nacional a un usuario de zona franca. Aduaneramente:",
    "options": [
      "Es una exportación, y los beneficios a la exportación se dan al comprobar la salida al exterior",
      "Es una importación",
      "No requiere trámite aduanero",
      "Es un tránsito interno"
    ],
    "answer": 0,
    "explanation": "CAROU art. 163: territorio aduanero → zona franca es exportación, pero los beneficios (como la devolución de tributos) se otorgan recién cuando se compruebe la salida hacia otro país."
  },
  {
    "id": "q-p08-014",
    "moduleId": "p08",
    "subtopicId": "p08-s2",
    "difficulty": 1,
    "prompt": "¿Cuánto tiempo puede permanecer la mercadería en una zona franca?",
    "options": [
      "Hasta 18 meses",
      "Por tiempo indefinido",
      "Hasta 5 años",
      "Hasta 24 meses"
    ],
    "answer": 1,
    "explanation": "CAROU art. 161: la permanencia en zona franca es indefinida."
  },
  {
    "id": "q-p08-015",
    "moduleId": "p08",
    "subtopicId": "p08-s2",
    "difficulty": 2,
    "prompt": "Mercadería extranjera que llega al puerto de Montevideo con destino a una zona franca:",
    "options": [
      "Paga los tributos en el puerto y luego entra a la zona",
      "Debe quedar en depósito al menos 30 días",
      "Debe ir de inmediato a la zona, normalmente en tránsito aduanero, sin pagar tributos",
      "Requiere autorización del LATU"
    ],
    "answer": 2,
    "explanation": "La Ley 15.921 (arts. 21 y 36) exige que la mercadería extranjera vaya de inmediato a la zona; normalmente viaja en tránsito desde el puerto, aeropuerto o frontera, sin tributos."
  },
  {
    "id": "q-p08-016",
    "moduleId": "p08",
    "subtopicId": "p08-s2",
    "difficulty": 2,
    "prompt": "Un usuario de Zonamerica vende notebooks a una empresa de Canelones. ¿Quién numera el DUA de importación?",
    "options": [
      "El usuario de zona franca, que es el exportador",
      "La Dirección Nacional de Zonas Francas",
      "No hace falta DUA",
      "El despachante del comprador de Canelones, que es el importador"
    ],
    "answer": 3,
    "explanation": "Para el territorio no franco es una importación: el importador es el comprador, cuyo despachante numera el DUA y paga los tributos. La factura del usuario no lleva IVA."
  },
  {
    "id": "q-p08-017",
    "moduleId": "p08",
    "subtopicId": "p08-s2",
    "difficulty": 3,
    "prompt": "En el caso de una venta desde zona franca con valor en aduana US$ 20.000, arancel supuesto del 2 % y tasa básica de IVA, ¿cuánto es el IVA de importación?",
    "options": [
      "US$ 4.488",
      "US$ 4.400",
      "US$ 2.040",
      "US$ 4.840"
    ],
    "answer": 0,
    "explanation": "Base del IVA = valor en aduana + arancel = 20.000 + 400 = 20.400. IVA 22 % = 4.488. US$ 2.040 sería el anticipo de IVA del 10 % sobre la misma base."
  },
  {
    "id": "q-p08-018",
    "moduleId": "p08",
    "subtopicId": "p08-s2",
    "difficulty": 2,
    "prompt": "Según la Decisión CMC 8/94, lo que sale de una zona franca hacia otro Estado Parte del MERCOSUR:",
    "options": [
      "Entra con arancel 0 % siempre",
      "Paga el AEC o el arancel nacional, sin preferencia intra-MERCOSUR",
      "No puede exportarse",
      "Paga el doble del AEC"
    ],
    "answer": 1,
    "explanation": "La Decisión CMC 8/94 es la regla general: la zona franca no tiene preferencias MERCOSUR."
  },
  {
    "id": "q-p08-019",
    "moduleId": "p08",
    "subtopicId": "p08-s2",
    "difficulty": 3,
    "prompt": "¿Qué permite la Decisión CMC 33/15, vigente desde el 21/07/2019?",
    "options": [
      "Que todo lo producido en zona franca tenga preferencia MERCOSUR",
      "Que las zonas francas se eliminen gradualmente",
      "Que la mercadería originaria del MERCOSUR solo almacenada en zona franca conserve la preferencia, con certificado de origen derivado",
      "Que la mercadería de zona franca pague medio AEC"
    ],
    "answer": 2,
    "explanation": "Es una excepción a la 8/94: si la mercadería originaria solo se almacenó con operaciones que no cambian origen ni clasificación, conserva la preferencia mediante un certificado derivado gestionado por la DNA en Uruguay."
  },
  {
    "id": "q-p08-020",
    "moduleId": "p08",
    "subtopicId": "p08-s2",
    "difficulty": 2,
    "prompt": "Una empresa de cosméticos quiere exportar a Brasil con preferencia MERCOSUR. ¿Dónde le conviene producir?",
    "options": [
      "En una zona franca, porque tiene más beneficios",
      "Es indiferente",
      "En un depósito aduanero",
      "En territorio no franco, cumpliendo las reglas de origen"
    ],
    "answer": 3,
    "explanation": "Lo producido en zona franca paga el AEC en Brasil (Dec. CMC 8/94). Para tener preferencia conviene producir en territorio no franco, con certificado de origen digital."
  },
  {
    "id": "q-p08-021",
    "moduleId": "p08",
    "subtopicId": "p08-s2",
    "difficulty": 2,
    "prompt": "¿El consumo final del personal dentro de una zona franca es exportación?",
    "options": [
      "No, la Ley 19.670 aclaró que no es exportación",
      "Sí, siempre",
      "Solo si el personal es extranjero",
      "Solo si supera US$ 200"
    ],
    "answer": 0,
    "explanation": "La Ley 19.670 agregó al art. 21 de la Ley 15.921 que el consumo final del personal dentro de la zona no es exportación."
  },
  {
    "id": "q-p08-022",
    "moduleId": "p08",
    "subtopicId": "p08-s3",
    "difficulty": 1,
    "prompt": "¿Qué ley aprobó el Código Aduanero de la República Oriental del Uruguay (CAROU)?",
    "options": [
      "Ley 15.921",
      "Ley 19.276",
      "Ley 18.184",
      "Ley 20.446"
    ],
    "answer": 1,
    "explanation": "La Ley 19.276, de artículo único, promulgada el 19/09/2014 y publicada el 25/09/2014."
  },
  {
    "id": "q-p08-023",
    "moduleId": "p08",
    "subtopicId": "p08-s3",
    "difficulty": 1,
    "prompt": "¿Cuántas infracciones aduaneras enumera el art. 199 del CAROU?",
    "options": [
      "4",
      "5",
      "7",
      "10"
    ],
    "answer": 2,
    "explanation": "Contravención, diferencia, defraudación, defraudación de valor, abandono infraccional, desvío de exoneraciones y contrabando."
  },
  {
    "id": "q-p08-024",
    "moduleId": "p08",
    "subtopicId": "p08-s3",
    "difficulty": 2,
    "prompt": "Un despachante omite presentar un documento formal exigido, sin perjuicio fiscal. ¿Qué infracción es?",
    "options": [
      "Diferencia",
      "Defraudación",
      "Contrabando",
      "Contravención, multa de 400 a 4.000 UI"
    ],
    "answer": 3,
    "explanation": "CAROU art. 200: la contravención es el incumplimiento de obligaciones formales, si no es otra infracción."
  },
  {
    "id": "q-p08-025",
    "moduleId": "p08",
    "subtopicId": "p08-s3",
    "difficulty": 2,
    "prompt": "En canal rojo, antes del libramiento, la DNA detecta que se declaró una posición con arancel menor al que corresponde. ¿Qué infracción es?",
    "options": [
      "Diferencia",
      "Contrabando",
      "Abandono infraccional",
      "Desvío de exoneraciones"
    ],
    "answer": 0,
    "explanation": "CAROU art. 201: la diferencia se configura cuando en el control previo al libramiento se detecta que, de seguirse lo declarado, el Fisco perdería renta."
  },
  {
    "id": "q-p08-026",
    "moduleId": "p08",
    "subtopicId": "p08-s3",
    "difficulty": 2,
    "prompt": "Introducir mercadería por un punto no habilitado, oculta y sin documentación es:",
    "options": [
      "Diferencia",
      "Contrabando",
      "Contravención",
      "Defraudación de valor"
    ],
    "answer": 1,
    "explanation": "CAROU arts. 209-210: el ingreso clandestino, violento o sin documentación es contrabando; el ocultamiento es una de sus presunciones."
  },
  {
    "id": "q-p08-027",
    "moduleId": "p08",
    "subtopicId": "p08-s3",
    "difficulty": 3,
    "prompt": "¿Cuál es la sanción de la infracción de contrabando?",
    "options": [
      "Multa de 400 a 4.000 UI",
      "Multa igual a los tributos que se perderían",
      "Comiso, costas, doble de los tributos y multa del 20 % del valor en aduana (más comiso del vehículo en ciertos casos)",
      "Solo el pago de los tributos con recargo"
    ],
    "answer": 2,
    "explanation": "CAROU arts. 209-211. Además, puede configurarse el delito de contrabando (art. 258)."
  },
  {
    "id": "q-p08-028",
    "moduleId": "p08",
    "subtopicId": "p08-s3",
    "difficulty": 2,
    "prompt": "¿Qué tolerancia admite el CAROU en diferencias de cantidad o peso?",
    "options": [
      "1 %; si se supera, se sanciona todo",
      "10 %, sin sanción",
      "No hay tolerancia",
      "5 %; si se supera, se sanciona solo el exceso"
    ],
    "answer": 3,
    "explanation": "CAROU art. 203: hasta 5 % no se sanciona; si se supera, solo el exceso."
  },
  {
    "id": "q-p08-029",
    "moduleId": "p08",
    "subtopicId": "p08-s3",
    "difficulty": 3,
    "prompt": "Si una defraudación fue culposa (sin intención), según el art. 213 del CAROU:",
    "options": [
      "La multa puede reducirse hasta un 50 %",
      "No hay sanción",
      "La multa se duplica",
      "Se transforma en contravención"
    ],
    "answer": 0,
    "explanation": "El art. 213 sanciona defraudación, defraudación de valor, desvío y contrabando a título de culpa o dolo; si es culposa, la multa puede bajar hasta 50 %. En contravención y diferencia no se admite la buena fe."
  },
  {
    "id": "q-p08-030",
    "moduleId": "p08",
    "subtopicId": "p08-s3",
    "difficulty": 3,
    "prompt": "¿Qué pena prevé el CAROU para el delito de contrabando cuando el perjuicio potencial supera 5.000.000 UI?",
    "options": [
      "De 3 meses a 6 años",
      "De 2 a 6 años de penitenciaría",
      "De 6 a 12 años",
      "Solo multa"
    ],
    "answer": 1,
    "explanation": "CAROU art. 258: la pena general es de 3 meses a 6 años; si el perjuicio potencial supera 5.000.000 UI, de 2 a 6 años."
  },
  {
    "id": "q-p08-031",
    "moduleId": "p08",
    "subtopicId": "p08-s3",
    "difficulty": 2,
    "prompt": "En el CAROU, el “libramiento” es:",
    "options": [
      "La descarga del buque",
      "La numeración del DUA",
      "La autorización de la DNA para disponer de la mercadería",
      "El pago de los tributos"
    ],
    "answer": 2,
    "explanation": "CAROU art. 2: libramiento es la autorización de la DNA para que el interesado disponga de la mercadería."
  },
  {
    "id": "q-p08-032",
    "moduleId": "p08",
    "subtopicId": "p08-s3",
    "difficulty": 2,
    "prompt": "¿Qué es la zona primaria según el CAROU?",
    "options": [
      "El resto del territorio aduanero",
      "Las zonas francas",
      "La franja de 40 km alrededor de Montevideo",
      "Puertos, aeropuertos, puntos de frontera y áreas donde se controla la entrada, salida y permanencia de mercadería"
    ],
    "answer": 3,
    "explanation": "CAROU art. 3. La zona secundaria es el resto del territorio aduanero (art. 4) y la zona de vigilancia especial es una franja con controles especiales (art. 5)."
  },
  {
    "id": "q-p08-033",
    "moduleId": "p08",
    "subtopicId": "p08-s3",
    "difficulty": 3,
    "prompt": "Cambiar el destino de mercadería que ingresó exonerada, sin autorización ni pago, es:",
    "options": [
      "Desvío de exoneraciones: multa del doble de los tributos exonerados más los tributos",
      "Contravención: 400 a 4.000 UI",
      "Abandono infraccional: comiso",
      "Diferencia: multa igual a los tributos"
    ],
    "answer": 0,
    "explanation": "CAROU art. 208. Es la figura que aplica, por ejemplo, cuando se vende en plaza mercadería en admisión temporaria."
  }
]
