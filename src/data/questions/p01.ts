import type { Question } from '../types'

export const p01Questions: Question[] = [
  {
    "id": "q-p01-001",
    "moduleId": "p01",
    "subtopicId": "p01-s1",
    "difficulty": 1,
    "prompt": "¿Qué hecho define que una operación sea de comercio exterior?",
    "options": [
      "Que el pago se haga en dólares",
      "Que intervenga un banco",
      "Que la mercadería cruce una frontera aduanera",
      "Que la mercadería viaje en barco"
    ],
    "answer": 2,
    "explanation": "Lo que distingue al comercio exterior es el cruce de una frontera aduanera: ahí el Estado controla qué entra o sale, cuánto vale y qué tributos corresponden. La moneda, el banco o el modo de transporte pueden variar."
  },
  {
    "id": "q-p01-002",
    "moduleId": "p01",
    "subtopicId": "p01-s1",
    "difficulty": 1,
    "prompt": "¿Cuáles son las tres capas que corren en paralelo en toda operación de comex?",
    "options": [
      "Comercial, logística y aduanera",
      "Contable, fiscal y laboral",
      "Nacional, regional y global",
      "Bancaria, portuaria y judicial"
    ],
    "answer": 0,
    "explanation": "La capa comercial es el contrato (precio, Incoterm, pago), la logística es cómo viaja la mercadería y la aduanera es la declaración y los tributos ante la DNA. Las tres tienen que contar la misma historia."
  },
  {
    "id": "q-p01-003",
    "moduleId": "p01",
    "subtopicId": "p01-s1",
    "difficulty": 1,
    "prompt": "¿Qué artículo del CAROU define al despachante de aduana?",
    "options": [
      "El art. 2",
      "El art. 74",
      "El art. 160",
      "El art. 14"
    ],
    "answer": 3,
    "explanation": "El art. 14 del Código Aduanero define al despachante y le atribuye la tramitación de los regímenes y declaraciones. El art. 2 tiene definiciones generales, el 74 la selectividad y el 160 las zonas francas."
  },
  {
    "id": "q-p01-004",
    "moduleId": "p01",
    "subtopicId": "p01-s1",
    "difficulty": 2,
    "prompt": "Según el art. 27 del CAROU, ¿cómo responde el despachante por los tributos aduaneros de la operación?",
    "options": [
      "No responde: solo es un gestor",
      "Solidariamente con su comitente",
      "Solo si el cliente quiebra",
      "Únicamente por los proventos portuarios"
    ],
    "answer": 1,
    "explanation": "El despachante responde solidariamente con su cliente por los tributos aduaneros, sus reajustes y los proventos portuarios. Por eso los estudios son tan rigurosos con la documentación."
  },
  {
    "id": "q-p01-005",
    "moduleId": "p01",
    "subtopicId": "p01-s1",
    "difficulty": 2,
    "prompt": "¿En cuál de estos casos NO es obligatoria la intervención del despachante (CAROU art. 15)?",
    "options": [
      "Importación definitiva de un contenedor de vasos",
      "Equipaje de viajeros",
      "Exportación comercial de carne",
      "Admisión temporaria de insumos industriales"
    ],
    "answer": 1,
    "explanation": "El art. 15 exceptúa, entre otros, el equipaje, los envíos postales no comerciales, los envíos expresos de bajo valor y las muestras exentas. Las operaciones comerciales normales requieren despachante."
  },
  {
    "id": "q-p01-006",
    "moduleId": "p01",
    "subtopicId": "p01-s1",
    "difficulty": 1,
    "prompt": "¿Qué es LUCIA?",
    "options": [
      "La ventanilla única de permisos de organismos",
      "El archivo físico de documentos aduaneros",
      "Un registro de importadores del MEF",
      "El sistema informático de la DNA donde se transmite, numera y liquida el DUA"
    ],
    "answer": 3,
    "explanation": "LUCIA es el sistema de la Dirección Nacional de Aduanas: recibe el DUA, lo numera, liquida los tributos y asigna canal. Los permisos de organismos se tramitan en la VUCE."
  },
  {
    "id": "q-p01-007",
    "moduleId": "p01",
    "subtopicId": "p01-s1",
    "difficulty": 1,
    "prompt": "¿Para qué sirve la VUCE?",
    "options": [
      "Para centralizar permisos y certificados de organismos como MSP, MGAP o LATU",
      "Para pagar los tributos de importación",
      "Para asignar el canal de revisión",
      "Para emitir el conocimiento de embarque"
    ],
    "answer": 0,
    "explanation": "La Ventanilla Única de Comercio Exterior reúne los permisos de los organismos de control, y esos certificados viajan electrónicamente y se vinculan al DUA."
  },
  {
    "id": "q-p01-008",
    "moduleId": "p01",
    "subtopicId": "p01-s1",
    "difficulty": 2,
    "prompt": "¿Quién presenta ante la DNA el manifiesto o declaración de llegada de un buque?",
    "options": [
      "El despachante del importador",
      "El importador",
      "El agente de transporte (agencia marítima)",
      "La terminal TCP"
    ],
    "answer": 2,
    "explanation": "El agente de transporte representa al buque o al avión y gestiona su arribo: presenta el manifiesto, la carga, la descarga y los transbordos (CAROU art. 32)."
  },
  {
    "id": "q-p01-009",
    "moduleId": "p01",
    "subtopicId": "p01-s1",
    "difficulty": 2,
    "prompt": "Un empleado registrado de un despachante, ¿puede firmar el DUA?",
    "options": [
      "Sí, si tiene más de un año en el estudio",
      "Sí, con autorización del cliente",
      "Solo en canal verde",
      "No: el Decreto 96/015 le prohíbe firmar el DUA y sus correcciones"
    ],
    "answer": 3,
    "explanation": "El empleado registrado puede tramitar, pero no firmar el DUA, sus correcciones ni actas de discrepancia. El despachante titular firma y responde por sus empleados."
  },
  {
    "id": "q-p01-010",
    "moduleId": "p01",
    "subtopicId": "p01-s1",
    "difficulty": 2,
    "prompt": "¿Cuál es la participación accionaria en TCP (Terminal Cuenca del Plata)?",
    "options": [
      "50 % ANP y 50 % Neltume Ports",
      "100 % ANP",
      "80 % Katoen Natie y 20 % ANP",
      "80 % ANP y 20 % Katoen Natie"
    ],
    "answer": 2,
    "explanation": "TCP es 80 % de Katoen Natie y 20 % de la ANP. Neltume Ports es el accionista mayoritario de Montecon, que opera los muelles públicos multipropósito."
  },
  {
    "id": "q-p01-011",
    "moduleId": "p01",
    "subtopicId": "p01-s1",
    "difficulty": 3,
    "prompt": "Para empezar a trabajar como auxiliar en un estudio de despachante, ¿cómo funciona el registro ante la DNA?",
    "options": [
      "Te registrás por tu cuenta y después buscás estudio",
      "Primero te contrata el estudio y el despachante inicia tu registro",
      "Tenés que aprobar el examen de despachante",
      "Lo tramita el MTSS al darte de alta"
    ],
    "answer": 1,
    "explanation": "No existe un carné de auxiliar que uno saque solo: el trámite lo inicia el despachante titular, con la cédula del empleado y la planilla de trabajo del MTSS, y es gratuito."
  },
  {
    "id": "q-p01-012",
    "moduleId": "p01",
    "subtopicId": "p01-s2",
    "difficulty": 1,
    "prompt": "¿Qué edición de los Incoterms está vigente?",
    "options": [
      "Incoterms® 2020",
      "Incoterms® 2010",
      "Incoterms® 2026",
      "Incoterms® 2030"
    ],
    "answer": 0,
    "explanation": "La edición vigente es la 2020, aplicable desde el 1/1/2020. Los “Incoterms 2026” no existen y la 2030 está en preparación."
  },
  {
    "id": "q-p01-013",
    "moduleId": "p01",
    "subtopicId": "p01-s2",
    "difficulty": 1,
    "prompt": "¿Qué de lo siguiente NO regulan los Incoterms?",
    "options": [
      "La transferencia de la propiedad",
      "El punto de entrega",
      "La transferencia del riesgo",
      "Quién despacha la exportación"
    ],
    "answer": 0,
    "explanation": "Los Incoterms regulan entrega, riesgo, costos y trámites. La propiedad, el precio y el pago van en el contrato y en la ley aplicable."
  },
  {
    "id": "q-p01-014",
    "moduleId": "p01",
    "subtopicId": "p01-s2",
    "difficulty": 2,
    "prompt": "¿Por qué el Incoterm importa para los tributos de una importación uruguaya?",
    "options": [
      "Porque cada Incoterm tiene una alícuota distinta de IVA",
      "Porque el valor en aduana se arma en base CIF y el Incoterm define qué hay que sumar o restar",
      "Porque los Incoterms D están exentos de arancel",
      "Porque la DNA cobra una tasa por Incoterm"
    ],
    "answer": 1,
    "explanation": "En Uruguay el valor en aduana es base CIF: si compraste FOB, el despachante suma flete y seguro; si compraste DDP, resta gastos posteriores a la llegada."
  },
  {
    "id": "q-p01-015",
    "moduleId": "p01",
    "subtopicId": "p01-s2",
    "difficulty": 1,
    "prompt": "¿Sirve la factura pro-forma para despachar una importación definitiva?",
    "options": [
      "Sí, siempre",
      "Sí, si está firmada por el comprador",
      "No: para el DUA se necesita la factura comercial",
      "Solo si el valor es menor a USD 800"
    ],
    "answer": 2,
    "explanation": "La pro-forma es una oferta previa sin efecto fiscal. Sirve para permisos, carta de crédito o estimar tributos, pero el DUA exige la factura comercial."
  },
  {
    "id": "q-p01-016",
    "moduleId": "p01",
    "subtopicId": "p01-s2",
    "difficulty": 1,
    "prompt": "¿Qué documento prueba dónde se produjo la mercadería para acceder a preferencias arancelarias?",
    "options": [
      "El packing list",
      "El MIC/DTA",
      "La factura pro-forma",
      "El certificado de origen"
    ],
    "answer": 3,
    "explanation": "El certificado de origen, emitido por una entidad habilitada, acredita el país de producción según las reglas de un acuerdo."
  },
  {
    "id": "q-p01-017",
    "moduleId": "p01",
    "subtopicId": "p01-s2",
    "difficulty": 2,
    "prompt": "¿Qué tipo de régimen es la admisión temporaria?",
    "options": [
      "Una exoneración definitiva de tributos",
      "Una forma de exportación",
      "Un régimen suspensivo: los tributos quedan en suspenso mientras la mercadería deba volver a salir",
      "Un régimen de zona franca"
    ],
    "answer": 2,
    "explanation": "En la admisión temporaria la mercadería entra sin pagar tributos con la condición de salir dentro de un plazo, transformada o en el mismo estado. Si no sale, hay que pagar o hay sanciones."
  },
  {
    "id": "q-p01-018",
    "moduleId": "p01",
    "subtopicId": "p01-s2",
    "difficulty": 2,
    "prompt": "¿Cuál es el plazo de una operación de admisión temporaria bajo la Ley 18.184?",
    "options": [
      "18 meses, con una sola prórroga excepcional de hasta 18 meses",
      "12 meses sin prórroga",
      "6 meses prorrogables indefinidamente",
      "5 años"
    ],
    "answer": 0,
    "explanation": "El plazo es de 18 meses, perentorio, con una sola prórroga excepcional y justificada de hasta 18 meses más. El contralor es del MIEM con intervención del LATU."
  },
  {
    "id": "q-p01-019",
    "moduleId": "p01",
    "subtopicId": "p01-s2",
    "difficulty": 2,
    "prompt": "Sacar mercadería de una zona franca hacia el resto del territorio uruguayo es:",
    "options": [
      "Un movimiento interno sin trámite",
      "Una exportación",
      "Un tránsito aduanero",
      "Una importación a todos sus efectos"
    ],
    "answer": 3,
    "explanation": "La zona franca está fuera del territorio aduanero a efectos de los tributos de importación (CAROU art. 160), así que pasar mercadería al territorio no franco es importar, con DUA y tributos."
  },
  {
    "id": "q-p01-020",
    "moduleId": "p01",
    "subtopicId": "p01-s2",
    "difficulty": 2,
    "prompt": "¿Cuánto tiempo puede permanecer la mercadería en una zona franca?",
    "options": [
      "18 meses",
      "Por tiempo indefinido",
      "12 meses prorrogables",
      "90 días"
    ],
    "answer": 1,
    "explanation": "El CAROU (art. 161) permite la permanencia indefinida en zona franca."
  },
  {
    "id": "q-p01-021",
    "moduleId": "p01",
    "subtopicId": "p01-s2",
    "difficulty": 3,
    "prompt": "Una empresa usó insumos importados con tributos pagos para fabricar algo que exportó, y ahora repone esos insumos sin pagar tributos. ¿Qué mecanismo de la Ley 18.184 usa?",
    "options": [
      "Draw back",
      "Toma de stock",
      "Admisión temporaria",
      "Depósito aduanero"
    ],
    "answer": 1,
    "explanation": "La toma de stock permite reponer sin tributos insumos que ya se importaron pagando y se usaron en exportaciones. El draw back, en cambio, devuelve los tributos pagados."
  },
  {
    "id": "q-p01-022",
    "moduleId": "p01",
    "subtopicId": "p01-s3",
    "difficulty": 1,
    "prompt": "¿Cuántos TEU son 120 contenedores de 20′ y 210 de 40′?",
    "options": [
      "330 TEU",
      "450 TEU",
      "660 TEU",
      "540 TEU"
    ],
    "answer": 3,
    "explanation": "Un 20′ vale 1 TEU y un 40′ vale 2: 120 × 1 + 210 × 2 = 540 TEU. Son 330 contenedores, pero las estadísticas portuarias cuentan TEU."
  },
  {
    "id": "q-p01-023",
    "moduleId": "p01",
    "subtopicId": "p01-s3",
    "difficulty": 2,
    "prompt": "Una caja de 100 × 60 × 30 cm pesa 20 kg y va por avión. ¿Cuál es el peso facturable con el divisor IATA 6000?",
    "options": [
      "30 kg",
      "20 kg",
      "18 kg",
      "50 kg"
    ],
    "answer": 0,
    "explanation": "100 × 60 × 30 = 180.000 cm³; ÷ 6000 = 30 kg volumétricos. El peso facturable es el mayor entre 30 y 20: 30 kg."
  },
  {
    "id": "q-p01-024",
    "moduleId": "p01",
    "subtopicId": "p01-s3",
    "difficulty": 2,
    "prompt": "En LCL, 10 cajas suman 2,4 m³ y 450 kg. Con una tarifa de US$ 60 por W/M, ¿cuánto cuesta el flete?",
    "options": [
      "US$ 27",
      "US$ 600",
      "US$ 144",
      "US$ 171"
    ],
    "answer": 2,
    "explanation": "W/M es el mayor entre toneladas y metros cúbicos, con 1 t = 1 m³: máx(0,45; 2,4) = 2,4. Flete: 2,4 × 60 = US$ 144."
  },
  {
    "id": "q-p01-025",
    "moduleId": "p01",
    "subtopicId": "p01-s3",
    "difficulty": 1,
    "prompt": "¿Qué diferencia hay entre FCL y LCL?",
    "options": [
      "FCL es aéreo y LCL es marítimo",
      "FCL es para refrigerados y LCL para carga seca",
      "No hay diferencia, son sinónimos",
      "FCL es el contenedor completo; LCL es carga consolidada con otros embarcadores"
    ],
    "answer": 3,
    "explanation": "En FCL el cliente contrata el contenedor entero; en LCL comparte espacio y el consolidador junta y luego desconsolida la carga."
  },
  {
    "id": "q-p01-026",
    "moduleId": "p01",
    "subtopicId": "p01-s3",
    "difficulty": 2,
    "prompt": "¿Qué es el demurrage?",
    "options": [
      "El cargo por devolver tarde el contenedor vacío desde el depósito del importador",
      "El recargo por combustible",
      "El cargo cuando el contenedor lleno se queda en la terminal más allá de los días libres",
      "El cargo de manipulación en terminal"
    ],
    "answer": 2,
    "explanation": "Demurrage es el contenedor lleno dentro de la terminal; detention, fuera de ella sin devolver. El recargo por combustible es el BAF y la manipulación, el THC."
  },
  {
    "id": "q-p01-027",
    "moduleId": "p01",
    "subtopicId": "p01-s3",
    "difficulty": 1,
    "prompt": "¿Qué compensa el recargo BAF?",
    "options": [
      "La variación del tipo de cambio",
      "La variación del precio del combustible",
      "La temporada alta",
      "La manipulación en la terminal"
    ],
    "answer": 1,
    "explanation": "BAF es Bunker Adjustment Factor (combustible). El cambiario es el CAF, la temporada alta el PSS y la manipulación el THC."
  },
  {
    "id": "q-p01-028",
    "moduleId": "p01",
    "subtopicId": "p01-s3",
    "difficulty": 2,
    "prompt": "¿Qué documentos acompañan a un camión con carga hacia Brasil bajo el ATIT?",
    "options": [
      "El CRT y el MIC/DTA",
      "El B/L y la AWB",
      "El HAWB y el MAWB",
      "Solo la factura comercial"
    ],
    "answer": 0,
    "explanation": "El CRT es el contrato de transporte por carretera y el MIC/DTA es el manifiesto y la declaración de tránsito aduanero."
  },
  {
    "id": "q-p01-029",
    "moduleId": "p01",
    "subtopicId": "p01-s3",
    "difficulty": 2,
    "prompt": "¿Qué puerto uruguayo es el kilómetro 0 de la Hidrovía Paraná-Paraguay?",
    "options": [
      "Nueva Palmira",
      "Montevideo",
      "La Paloma",
      "Fray Bentos"
    ],
    "answer": 0,
    "explanation": "Nueva Palmira, en Colonia, es el kilómetro 0 de la Hidrovía y el segundo puerto del país por volumen, con terminales bajo régimen de zona franca."
  },
  {
    "id": "q-p01-030",
    "moduleId": "p01",
    "subtopicId": "p01-s3",
    "difficulty": 3,
    "prompt": "Flete básico 40′ US$ 2.000, BAF 15 %, THC destino US$ 280, 7 días libres, devolución al día 11, detention US$ 60/día. ¿Total?",
    "options": [
      "US$ 2.580",
      "US$ 2.820",
      "US$ 2.760",
      "US$ 3.240"
    ],
    "answer": 1,
    "explanation": "BAF = 300; detention = (11 − 7) × 60 = 240. Total = 2.000 + 300 + 280 + 240 = US$ 2.820."
  },
  {
    "id": "q-p01-031",
    "moduleId": "p01",
    "subtopicId": "p01-s3",
    "difficulty": 2,
    "prompt": "¿Qué régimen tiene el Puerto de Montevideo que permite almacenar y manipular mercadería sin pagar tributos de importación mientras está en el recinto?",
    "options": [
      "Admisión temporaria",
      "Zona franca (Ley 15.921)",
      "Puerto Libre (Ley 16.246)",
      "Draw back"
    ],
    "answer": 2,
    "explanation": "El régimen de Puerto Libre, creado por la Ley 16.246 de 1992, permite circular, almacenar y manipular la mercadería en el recinto sin tributos de importación."
  }
]
