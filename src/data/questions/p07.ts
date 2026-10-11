import type { Question } from '../types'

// Preguntas del módulo 07. Base: docs/research/03_regimenes_exportacion.md (y 01/02 para origen y CAROU).
export const p07Questions: Question[] = [
  {
    "id": "q-p07-001",
    "moduleId": "p07",
    "subtopicId": "p07-s1",
    "difficulty": 1,
    "prompt": "¿Qué ley crea los regímenes de admisión temporaria industrial, toma de stock y draw back?",
    "options": [
      "Ley 18.184",
      "Ley 15.921",
      "Ley 19.276",
      "Ley 16.246"
    ],
    "answer": 0,
    "explanation": "La Ley 18.184 (27/10/2007) crea en su art. 1 los tres mecanismos de promoción industrial. La 15.921 es la de zonas francas, la 19.276 aprueba el CAROU y la 16.246 es la de puertos (puerto libre)."
  },
  {
    "id": "q-p07-002",
    "moduleId": "p07",
    "subtopicId": "p07-s1",
    "difficulty": 1,
    "prompt": "¿Cuál es el plazo de una operación de admisión temporaria industrial?",
    "options": [
      "12 meses, sin prórroga",
      "18 meses perentorios, con una sola prórroga de hasta 18 meses",
      "18 meses, con prórrogas ilimitadas",
      "24 meses, con una prórroga de 12 meses"
    ],
    "answer": 1,
    "explanation": "La Ley 18.184 (art. 2) y el Decreto 505/009 (art. 4) fijan 18 meses perentorios; en casos excepcionales y justificados se puede prorrogar una sola vez, hasta 18 meses más."
  },
  {
    "id": "q-p07-003",
    "moduleId": "p07",
    "subtopicId": "p07-s1",
    "difficulty": 2,
    "prompt": "¿Desde cuándo se cuentan los 18 meses de una AT industrial?",
    "options": [
      "Desde el arribo del buque a Montevideo",
      "Desde el pago de las tasas del DUA",
      "Desde la autorización del LATU",
      "Desde la primera exportación del producto terminado"
    ],
    "answer": 2,
    "explanation": "El Decreto 505/009 art. 4 cuenta el plazo desde la autorización del LATU. Es una trampa clásica: no se cuenta desde la llegada de la mercadería ni desde la primera exportación."
  },
  {
    "id": "q-p07-004",
    "moduleId": "p07",
    "subtopicId": "p07-s1",
    "difficulty": 1,
    "prompt": "¿Por qué se dice que la admisión temporaria es un régimen “suspensivo”?",
    "options": [
      "Porque la mercadería queda suspendida en el puerto sin poder usarse",
      "Porque suspende la actividad de la DNA sobre la empresa",
      "Porque los tributos se pagan y luego se devuelven",
      "Porque los tributos de importación no se pagan, quedan en suspenso mientras la mercadería se reexporte en plazo"
    ],
    "answer": 3,
    "explanation": "En la AT los tributos no se perdonan: quedan en suspenso. Si la mercadería sale como corresponde, nunca se pagan; si no, hay que nacionalizar (pagar) o vienen sanciones. Pagar y que te devuelvan es el draw back, no la AT."
  },
  {
    "id": "q-p07-005",
    "moduleId": "p07",
    "subtopicId": "p07-s1",
    "difficulty": 2,
    "prompt": "En el mecanismo de “toma de stock” de la Ley 18.184, la empresa:",
    "options": [
      "Repone sin tributos insumos importados que ya usó, pagando tributos, en productos que exportó",
      "Hace un inventario anual ante el LATU",
      "Recibe en efectivo los tributos pagados al importar",
      "Deposita su stock en una zona franca"
    ],
    "answer": 0,
    "explanation": "En la toma de stock la empresa ya usó insumos importados pagando tributos para fabricar algo que exportó, y después repone una cantidad equivalente sin tributos. La devolución en dinero es el draw back."
  },
  {
    "id": "q-p07-006",
    "moduleId": "p07",
    "subtopicId": "p07-s1",
    "difficulty": 2,
    "prompt": "¿Qué distingue al draw back de la admisión temporaria?",
    "options": [
      "El draw back solo se aplica a maquinaria",
      "En el draw back los tributos se pagan al importar y después se devuelven; en la AT no se pagan",
      "El draw back no exige exportar el producto",
      "En el draw back el plazo es de 90 días"
    ],
    "answer": 1,
    "explanation": "Las tres herramientas de la Ley 18.184 apuntan a lo mismo en distinto momento: la AT evita el pago, la toma de stock repone sin tributos y el draw back devuelve lo pagado."
  },
  {
    "id": "q-p07-007",
    "moduleId": "p07",
    "subtopicId": "p07-s1",
    "difficulty": 2,
    "prompt": "Según el CAROU, ¿qué artículos regulan la AT para perfeccionamiento activo?",
    "options": [
      "Arts. 81 a 83",
      "Arts. 160 a 164",
      "Arts. 84 a 88",
      "Arts. 199 a 217"
    ],
    "answer": 2,
    "explanation": "El art. 64 del CAROU distingue dos AT: para reexportación en el mismo estado (arts. 81-83) y para perfeccionamiento activo (arts. 84-88). Los arts. 160-164 son de zonas francas y los 199-217, de infracciones."
  },
  {
    "id": "q-p07-008",
    "moduleId": "p07",
    "subtopicId": "p07-s1",
    "difficulty": 2,
    "prompt": "¿Cuál de estos bienes está excluido de la AT industrial según el Decreto 505/009?",
    "options": [
      "Envases",
      "Matrices y moldes",
      "Partes y piezas",
      "Metales y piedras preciosas"
    ],
    "answer": 3,
    "explanation": "El art. 40 del Decreto 505/009 excluye metales y piedras preciosas, materias primas para explosivos y bienes con controles especiales. Envases, moldes y partes están expresamente admitidos en el art. 2."
  },
  {
    "id": "q-p07-009",
    "moduleId": "p07",
    "subtopicId": "p07-s1",
    "difficulty": 3,
    "prompt": "¿Quién NO puede solicitar una AT industrial según el Decreto 505/009?",
    "options": [
      "Una empresa suspendida por el BPS",
      "Una industria con planta aprobada y al día",
      "Un taller de façón al día con DGI, BPS y DNA",
      "Una empresa que exporta a Chile"
    ],
    "answer": 0,
    "explanation": "El art. 39 impide pedir AT a empresas suspendidas o inhabilitadas por DGI, BPS o DNA, regla que también alcanza a los talleres de façón. Estar al día es requisito."
  },
  {
    "id": "q-p07-010",
    "moduleId": "p07",
    "subtopicId": "p07-s1",
    "difficulty": 2,
    "prompt": "En la Ley 18.184, ¿quién responde personal y solidariamente por las obligaciones de una AT?",
    "options": [
      "El despachante de aduana exclusivamente",
      "Los directores y administradores de la empresa",
      "El LATU",
      "Nadie; solo responde la sociedad"
    ],
    "answer": 1,
    "explanation": "La Ley 18.184 (arts. 9-10) hace responsable a la empresa titular, solidarios a exportadores e intermediarios y personal y solidariamente responsables a directores y administradores."
  },
  {
    "id": "q-p07-011",
    "moduleId": "p07",
    "subtopicId": "p07-s1",
    "difficulty": 3,
    "prompt": "¿Qué código de régimen se declara en la casilla A1 del DUA para una AT de perfeccionamiento activo?",
    "options": [
      "10",
      "20",
      "21",
      "30"
    ],
    "answer": 2,
    "explanation": "Según el instructivo de la DNA: 10 es importación definitiva, 20 AT para reexpedición en el mismo estado, 21 AT para perfeccionamiento activo y 30 reimportación en el mismo estado."
  },
  {
    "id": "q-p07-012",
    "moduleId": "p07",
    "subtopicId": "p07-s2",
    "difficulty": 1,
    "prompt": "¿Qué organismo hace el contralor técnico de las admisiones temporarias industriales?",
    "options": [
      "La DGI",
      "El BPS",
      "Uruguay XXI",
      "El LATU"
    ],
    "answer": 3,
    "explanation": "La Ley 18.184 (art. 3) pone el contralor en el MIEM con intervención técnico-administrativa del LATU, sin perjuicio de las competencias de la DNA y la DGI."
  },
  {
    "id": "q-p07-013",
    "moduleId": "p07",
    "subtopicId": "p07-s2",
    "difficulty": 1,
    "prompt": "¿Con cuánta anticipación hay que pedir la prórroga de una AT industrial?",
    "options": [
      "Al menos 90 días antes del vencimiento",
      "Al menos 30 días antes del vencimiento",
      "Al menos 60 días antes del vencimiento",
      "En cualquier momento antes del vencimiento"
    ],
    "answer": 0,
    "explanation": "El Decreto 505/009 art. 4 exige pedirla ante el LATU al menos 90 días antes. En 2025 se denegó una prórroga precisamente por pedirla fuera de ese plazo."
  },
  {
    "id": "q-p07-014",
    "moduleId": "p07",
    "subtopicId": "p07-s2",
    "difficulty": 2,
    "prompt": "Una empresa pide la prórroga de una AT y pasan 60 días sin respuesta. ¿Qué pasa?",
    "options": [
      "Se considera aprobada",
      "Se considera denegada",
      "Se prorroga automáticamente 6 meses",
      "El plazo de la AT queda suspendido hasta que respondan"
    ],
    "answer": 1,
    "explanation": "En la AT, el silencio de 60 días equivale a denegatoria (Dec. 505/009 art. 4). Ojo: en la reducción del porcentaje de personal en zona franca, el silencio de 60 días es aprobación."
  },
  {
    "id": "q-p07-015",
    "moduleId": "p07",
    "subtopicId": "p07-s2",
    "difficulty": 2,
    "prompt": "Una empresa quiere nacionalizar parte de una AT en el mes 8. ¿Cómo se calculan los tributos?",
    "options": [
      "Según la fecha del pedido de nacionalización, con canal rojo obligatorio",
      "No se puede nacionalizar antes del vencimiento",
      "Según la fecha de numeración del DUA de AT",
      "Según la fecha de la última exportación"
    ],
    "answer": 2,
    "explanation": "En los primeros 12 meses, la nacionalización toma los tributos según la fecha de numeración del DUA de AT (Dec. 505/009 art. 8)."
  },
  {
    "id": "q-p07-016",
    "moduleId": "p07",
    "subtopicId": "p07-s2",
    "difficulty": 3,
    "prompt": "¿Qué exige nacionalizar mercadería en AT durante los últimos 6 meses del plazo?",
    "options": [
      "Solo un aviso al LATU",
      "Una garantía bancaria del 100 % del CIF",
      "Autorización de la DGI y canal verde",
      "Autorización previa del MIEM, canal rojo y tributos a la fecha de la importación definitiva"
    ],
    "answer": 3,
    "explanation": "El art. 9 del Decreto 505/009 hace excepcional la nacionalización en los últimos 6 meses: autorización previa del MIEM, canal rojo y tributos a la fecha de importación."
  },
  {
    "id": "q-p07-017",
    "moduleId": "p07",
    "subtopicId": "p07-s2",
    "difficulty": 2,
    "prompt": "Los subproductos y residuos de una AT no se nacionalizan si su valor de plaza no supera:",
    "options": [
      "El 5 % del valor CIF de lo importado",
      "El 1 % del valor FOB",
      "El 10 % del valor CIF",
      "El 20 % del valor FOB"
    ],
    "answer": 0,
    "explanation": "Dec. 505/009 art. 44 y CAROU art. 86: hasta el 5 % del CIF no se nacionalizan; el exceso se exporta o se nacionaliza."
  },
  {
    "id": "q-p07-018",
    "moduleId": "p07",
    "subtopicId": "p07-s2",
    "difficulty": 2,
    "prompt": "¿Cuál de estas NO es una forma de cancelar una AT según el Decreto 505/009?",
    "options": [
      "Exportar el producto resultante",
      "Vender el insumo a un comercio local con factura",
      "Nacionalizar el saldo pagando tributos",
      "Reexportar en el mismo estado con autorización del MIEM"
    ],
    "answer": 1,
    "explanation": "El art. 7 prevé exportación, importación definitiva, reexportación en el mismo estado, faltante por fuerza mayor y destrucción o donación. Vender en plaza sin nacionalizar es justamente la infracción."
  },
  {
    "id": "q-p07-019",
    "moduleId": "p07",
    "subtopicId": "p07-s2",
    "difficulty": 2,
    "prompt": "Vender en plaza un insumo ingresado en AT sin nacionalizarlo configura, según el CAROU:",
    "options": [
      "Contravención",
      "Diferencia",
      "Desvío de exoneraciones",
      "Abandono infraccional"
    ],
    "answer": 2,
    "explanation": "El CAROU art. 273 remite la infracción de la Ley 18.184 al art. 208, desvío de exoneraciones: multa del doble de los tributos exonerados más los tributos."
  },
  {
    "id": "q-p07-020",
    "moduleId": "p07",
    "subtopicId": "p07-s2",
    "difficulty": 3,
    "prompt": "¿Hasta cuánto puede llegar la multa del MIEM por irregularidades en una AT?",
    "options": [
      "Hasta 4.000 UI",
      "Hasta el 20 % del valor en aduana",
      "Hasta el doble del valor FOB",
      "Hasta el 100 % del valor CIF de la mercadería involucrada"
    ],
    "answer": 3,
    "explanation": "La Ley 18.184 art. 4 prevé apercibimiento o multa de hasta el 100 % del CIF. Las 400-4.000 UI son la contravención del CAROU y el 20 % del valor es parte de la sanción del contrabando."
  },
  {
    "id": "q-p07-021",
    "moduleId": "p07",
    "subtopicId": "p07-s2",
    "difficulty": 3,
    "prompt": "Una confección importó 12.000 m de tela en AT con un consumo aprobado de 1,5 m por prenda y exportó 7.000 prendas. ¿Qué saldo queda?",
    "options": [
      "1.500 m",
      "10.500 m",
      "4.500 m",
      "5.000 m"
    ],
    "answer": 0,
    "explanation": "Descarga: 7.000 × 1,5 = 10.500 m. Saldo: 12.000 − 10.500 = 1.500 m, que hay que cancelar antes del vencimiento."
  },
  {
    "id": "q-p07-022",
    "moduleId": "p07",
    "subtopicId": "p07-s2",
    "difficulty": 2,
    "prompt": "¿En qué casos el Decreto 505/009 exige garantía para una AT?",
    "options": [
      "A todas las AT, sin excepción",
      "A empresas sin planta aprobada que operan con una planta habilitada y a empresas vinculadas a firmas morosas",
      "Solo a las AT de más de US$ 100.000",
      "Nunca; la garantía está prohibida"
    ],
    "answer": 1,
    "explanation": "La Ley 18.184 no exige garantía general, pero el decreto la pide en esos dos casos (arts. 22 y 23). Se devuelve con el aviso de cancelación del LATU."
  },
  {
    "id": "q-p07-023",
    "moduleId": "p07",
    "subtopicId": "p07-s3",
    "difficulty": 1,
    "prompt": "¿Por dónde se tramita la AT de régimen general (reexportación en el mismo estado)?",
    "options": [
      "En papel ante el LATU",
      "Ante la Dirección Nacional de Zonas Francas",
      "Por VUCE, ante la Asesoría de Política Comercial del MEF",
      "Directamente en el BROU"
    ],
    "answer": 2,
    "explanation": "La AT de régimen general se tramita solo en línea por VUCE, la gestiona la APC del MEF, no tiene costo y requiere firma electrónica avanzada."
  },
  {
    "id": "q-p07-024",
    "moduleId": "p07",
    "subtopicId": "p07-s3",
    "difficulty": 2,
    "prompt": "Si la mercadería en AT de régimen general no se reexporta en plazo, según el CAROU art. 83:",
    "options": [
      "Se prorroga automáticamente",
      "Pasa a zona franca",
      "Se considera exportada",
      "Se considera importada definitivamente; si no podía importarse, se decomisa"
    ],
    "answer": 3,
    "explanation": "El art. 83 dispone que, ante el incumplimiento, la mercadería se considera importada definitivamente, y si no podía importarse, se decomisa."
  },
  {
    "id": "q-p07-025",
    "moduleId": "p07",
    "subtopicId": "p07-s3",
    "difficulty": 2,
    "prompt": "¿Qué cambió la RG DNA 02/2026 en las AT para eventos deportivos, culturales y científicos?",
    "options": [
      "Pasó la autorización de las prórrogas a la administración de aduana del punto de ingreso",
      "Elevó el plazo máximo a 18 meses",
      "Eliminó la necesidad de DUA",
      "Pasó el trámite al LATU"
    ],
    "answer": 0,
    "explanation": "Desde el 02/02/2026, las prórrogas de estas AT (plazo máximo de 90 días, Decreto 73/002) las autoriza la aduana del punto de ingreso, por expediente GEX."
  },
  {
    "id": "q-p07-026",
    "moduleId": "p07",
    "subtopicId": "p07-s3",
    "difficulty": 2,
    "prompt": "¿Cuánto puede permanecer la mercadería en depósito aduanero en puertos y aeropuertos?",
    "options": [
      "Hasta 90 días",
      "Hasta 5 años, prorrogables",
      "Hasta 18 meses, improrrogables",
      "Por tiempo indefinido"
    ],
    "answer": 1,
    "explanation": "En puertos y aeropuertos el depósito aduanero admite hasta 5 años prorrogables; al vencer, la mercadería cae en abandono (CAROU art. 96). La permanencia indefinida es propia de la zona franca."
  },
  {
    "id": "q-p07-027",
    "moduleId": "p07",
    "subtopicId": "p07-s3",
    "difficulty": 2,
    "prompt": "¿Qué es el tránsito aduanero?",
    "options": [
      "La importación de mercadería desde un país vecino",
      "El traslado de mercadería nacional entre departamentos",
      "Un régimen en que la mercadería circula bajo control aduanero entre una aduana de partida y una de destino, sin tributos salvo tasas",
      "El depósito de mercadería en un puerto libre"
    ],
    "answer": 2,
    "explanation": "CAROU arts. 119-120: circulación bajo control aduanero, sin tributos (salvo tasas) ni restricciones económicas, con cuatro modalidades (entrada-salida, entrada-interior, interior-salida, interior-interior)."
  },
  {
    "id": "q-p07-028",
    "moduleId": "p07",
    "subtopicId": "p07-s3",
    "difficulty": 2,
    "prompt": "¿Qué ley extiende el régimen de puerto libre al Aeropuerto de Carrasco?",
    "options": [
      "Ley 16.246",
      "Ley 15.921",
      "Ley 18.184",
      "Ley 17.555 (art. 23), reglamentada por el Decreto 409/008"
    ],
    "answer": 3,
    "explanation": "El puerto libre lo crea la Ley 16.246 (1992); la Ley 17.555 art. 23 lo extiende al Aeropuerto Internacional de Carrasco."
  },
  {
    "id": "q-p07-029",
    "moduleId": "p07",
    "subtopicId": "p07-s3",
    "difficulty": 1,
    "prompt": "¿Qué operaciones se pueden hacer con la mercadería en el puerto libre?",
    "options": [
      "Depositar, reenvasar, reetiquetar, clasificar, consolidar y fraccionar, sin cambiar su naturaleza",
      "Transformarla industrialmente en otro producto",
      "Venderla al por menor a turistas",
      "Ninguna; solo puede permanecer"
    ],
    "answer": 0,
    "explanation": "La Ley 16.246 permite esas operaciones sin cambiar la naturaleza de la mercadería, con libre circulación y exención de tributos de importación dentro del recinto."
  },
  {
    "id": "q-p07-030",
    "moduleId": "p07",
    "subtopicId": "p07-s3",
    "difficulty": 3,
    "prompt": "En un depósito logístico, ¿cuándo se admiten ensamblaje y mezclas?",
    "options": [
      "Siempre, sin límites",
      "Solo si el CIF de los insumos importados supera el 80 % del valor final y no cambia el origen",
      "Solo si los insumos son de origen MERCOSUR",
      "Nunca; el depósito solo almacena"
    ],
    "answer": 1,
    "explanation": "El Decreto 99/015 art. 28 admite ensamblaje y mezclas en el depósito logístico solo si el CIF de los insumos importados supera el 80 % del valor final, y la operación no puede cambiar el origen."
  },
  {
    "id": "q-p07-031",
    "moduleId": "p07",
    "subtopicId": "p07-s3",
    "difficulty": 2,
    "prompt": "Una imprenta manda una rotativa a Alemania para repararla y luego la reimporta. ¿Qué régimen usa?",
    "options": [
      "Admisión temporaria industrial",
      "Draw back",
      "Exportación temporaria para perfeccionamiento pasivo",
      "Tránsito aduanero"
    ],
    "answer": 2,
    "explanation": "La exportación temporaria (CAROU arts. 111-117) es el espejo de la AT: mercadería nacional que sale y vuelve, en este caso reparada en el exterior (perfeccionamiento pasivo)."
  },
  {
    "id": "q-p07-032",
    "moduleId": "p07",
    "subtopicId": "p07-s3",
    "difficulty": 3,
    "prompt": "¿Qué garantía exige el Decreto 99/015 para un depósito aduanero particular de 1.000 m² no industrial?",
    "options": [
      "US$ 400.000",
      "US$ 30.000",
      "US$ 1.000.000",
      "US$ 200.000"
    ],
    "answer": 3,
    "explanation": "Dec. 99/015 arts. 14-15: US$ 200.000 hasta 1.000 m² (US$ 400.000 si es industrial) más US$ 30 por m² adicional."
  }
]
