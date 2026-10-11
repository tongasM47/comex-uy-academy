import type { Question } from '../types'

export const p12Questions: Question[] = [
  {
    id: "q-p12-001",
    moduleId: "p12",
    subtopicId: "p12-s1",
    difficulty: 1,
    prompt: "¿Cuántos TEU equivale un contenedor de 40' High Cube?",
    options: [
      "1",
      "2,5",
      "2",
      "4"
    ],
    answer: 2,
    explanation: "El TEU mide largo, no altura: cualquier 40' (DV o HC) son 2 TEU."
  },
  {
    id: "q-p12-002",
    moduleId: "p12",
    subtopicId: "p12-s1",
    difficulty: 1,
    prompt: "El divisor IATA estándar para el peso volumétrico aéreo es:",
    options: [
      "6000",
      "1000",
      "3000",
      "5000"
    ],
    answer: 0,
    explanation: "cm³ ÷ 6000, equivalente a 1 m³ ≈ 167 kg. Algunos couriers usan 5000 (1 m³ = 200 kg)."
  },
  {
    id: "q-p12-003",
    moduleId: "p12",
    subtopicId: "p12-s1",
    difficulty: 1,
    prompt: "En LCL marítimo, la tarifa se aplica sobre:",
    options: [
      "Solo el peso",
      "Solo el volumen",
      "El valor de la carga",
      "El mayor entre toneladas y metros cúbicos (W/M)"
    ],
    answer: 3,
    explanation: "W/M = weight or measure, con la relación 1 t = 1 m³."
  },
  {
    id: "q-p12-004",
    moduleId: "p12",
    subtopicId: "p12-s1",
    difficulty: 2,
    prompt: "Cuatro cajas de 60 × 50 × 40 cm, de 12 kg cada una, viajan por avión. ¿Cuál es el peso facturable?",
    options: [
      "48 kg",
      "80 kg",
      "20 kg",
      "120 kg"
    ],
    answer: 1,
    explanation: "Cada caja: 120.000 cm³ ÷ 6000 = 20 kg volumétricos; total 80 kg. El real es 48 kg. Se cobra el mayor: 80 kg."
  },
  {
    id: "q-p12-005",
    moduleId: "p12",
    subtopicId: "p12-s1",
    difficulty: 2,
    prompt: "Un pallet de 120 × 80 × 100 cm pesa 250 kg. ¿Por cuántos kg se factura en aéreo?",
    options: [
      "160 kg",
      "250 kg",
      "205 kg",
      "410 kg"
    ],
    answer: 1,
    explanation: "960.000 cm³ ÷ 6000 = 160 kg volumétricos. Como el peso real (250 kg) es mayor, se factura por el real."
  },
  {
    id: "q-p12-006",
    moduleId: "p12",
    subtopicId: "p12-s1",
    difficulty: 2,
    prompt: "Diez cajas de 0,8 × 0,6 × 0,5 m, de 45 kg cada una, van en LCL a USD 60 por W/M. ¿Cuánto es el flete?",
    options: [
      "USD 27",
      "USD 270",
      "USD 600",
      "USD 144"
    ],
    answer: 3,
    explanation: "Volumen: 0,24 m³ × 10 = 2,4 m³. Peso: 450 kg = 0,45 t. W/M = 2,4. Flete = 2,4 × 60 = USD 144."
  },
  {
    id: "q-p12-007",
    moduleId: "p12",
    subtopicId: "p12-s1",
    difficulty: 1,
    prompt: "El demurrage se cobra cuando el contenedor:",
    options: [
      "Está lleno dentro de la terminal pasados los días libres",
      "Está vacío en el depósito del importador",
      "Está navegando",
      "Está en el buque esperando descarga"
    ],
    answer: 0,
    explanation: "Demurrage: lleno en terminal. Detention: fuera de la terminal, en el depósito del importador, hasta devolverlo vacío."
  },
  {
    id: "q-p12-008",
    moduleId: "p12",
    subtopicId: "p12-s1",
    difficulty: 1,
    prompt: "¿Qué cláusula de seguro de carga da la cobertura más amplia?",
    options: [
      "ICC (C)",
      "ICC (B)",
      "ICC (A)",
      "Todas cubren lo mismo"
    ],
    answer: 2,
    explanation: "ICC (A) es \"todo riesgo\" con exclusiones; (B) y (C) son de riesgos nombrados, siendo (C) la mínima."
  },
  {
    id: "q-p12-009",
    moduleId: "p12",
    subtopicId: "p12-s1",
    difficulty: 2,
    prompt: "En CIF (Incoterms 2020), ¿qué cobertura mínima de seguro exige la regla?",
    options: [
      "ICC (A)",
      "ICC (B)",
      "Ninguna",
      "ICC (C)"
    ],
    answer: 3,
    explanation: "En CIF el mínimo es ICC (C); en CIP, ICC (A). En ambos, la suma asegurada mínima es el valor del contrato más 10%."
  },
  {
    id: "q-p12-010",
    moduleId: "p12",
    subtopicId: "p12-s1",
    difficulty: 1,
    prompt: "El recargo que compensa la variación del precio del combustible es el:",
    options: [
      "CAF",
      "THC",
      "BAF",
      "PSS"
    ],
    answer: 2,
    explanation: "BAF = Bunker Adjustment Factor. CAF compensa la variación cambiaria, THC es la manipulación en terminal y PSS el recargo de temporada alta."
  },
  {
    id: "q-p12-011",
    moduleId: "p12",
    subtopicId: "p12-s1",
    difficulty: 2,
    prompt: "En un embarque LCL, ¿qué documento recibe cada cliente del consolidador?",
    options: [
      "El MBL (master bill of lading)",
      "El HBL (house bill of lading)",
      "El MAWB",
      "El CRT"
    ],
    answer: 1,
    explanation: "La naviera emite el MBL al consolidador; el consolidador o NVOCC emite un HBL a cada cliente. MAWB es aéreo y CRT es terrestre."
  },
  {
    id: "q-p12-012",
    moduleId: "p12",
    subtopicId: "p12-s1",
    difficulty: 3,
    prompt: "14 m³ y 3 t. LCL: USD 70 por W/M más USD 25 por W/M de desconsolidación. FCL 20': USD 1.300 de flete más USD 250 de THC. ¿Cuánto cuesta la opción más barata?",
    options: [
      "USD 1.330 (LCL)",
      "USD 1.550 (FCL)",
      "USD 980 (LCL)",
      "USD 1.300 (FCL)"
    ],
    answer: 0,
    explanation: "LCL: (70 + 25) × 14 = 1.330. FCL: 1.300 + 250 = 1.550. Gana LCL por USD 220; con 16 m³ el LCL costaría 1.520 y prácticamente empata."
  },
  {
    id: "q-p12-013",
    moduleId: "p12",
    subtopicId: "p12-s1",
    difficulty: 3,
    prompt: "Flete de un 40': USD 2.000; BAF 15% del flete; THC destino USD 280; 7 días libres; devolución el día 11; detention USD 60/día. ¿Costo total?",
    options: [
      "USD 2.820",
      "USD 2.580",
      "USD 2.940",
      "USD 3.240"
    ],
    answer: 0,
    explanation: "BAF = 300; detention = (11 − 7) × 60 = 240. Total = 2.000 + 300 + 280 + 240 = 2.820."
  },
  {
    id: "q-p12-014",
    moduleId: "p12",
    subtopicId: "p12-s1",
    difficulty: 2,
    prompt: "Una escala descarga 120 contenedores de 20' y 210 de 40'. ¿Cuántos TEU son?",
    options: [
      "330 TEU",
      "450 TEU",
      "540 TEU",
      "660 TEU"
    ],
    answer: 2,
    explanation: "120 × 1 + 210 × 2 = 540 TEU, aunque físicamente son 330 contenedores. Las estadísticas portuarias usan TEU."
  },
  {
    id: "q-p12-015",
    moduleId: "p12",
    subtopicId: "p12-s1",
    difficulty: 2,
    prompt: "Para carga voluminosa y liviana, en general conviene:",
    options: [
      "Un 20' Dry",
      "Un 40' High Cube",
      "Un flat rack",
      "Un ISO tank"
    ],
    answer: 1,
    explanation: "El 40' HC tiene unos 76 m³, el mayor volumen de los secos estándar. El flat rack es para carga sobredimensionada y el tank para líquidos."
  },
  {
    id: "q-p12-016",
    moduleId: "p12",
    subtopicId: "p12-s1",
    difficulty: 2,
    prompt: "¿Qué exige el VGM del convenio SOLAS?",
    options: [
      "Declarar el valor de la mercadería",
      "Una inspección sanitaria",
      "Fumigar los pallets",
      "Verificar el peso bruto del contenedor antes del embarque"
    ],
    answer: 3,
    explanation: "VGM = Verified Gross Mass, el peso bruto verificado del contenedor, obligatorio antes de cargarlo al buque."
  },
  {
    id: "q-p12-017",
    moduleId: "p12",
    subtopicId: "p12-s2",
    difficulty: 1,
    prompt: "¿Qué artículo del CAROU fija los requisitos para ser despachante de aduana persona física?",
    options: [
      "El artículo 18",
      "El artículo 16",
      "El artículo 23",
      "El artículo 199"
    ],
    answer: 1,
    explanation: "Art. 16: requisitos de la persona física. El 18 trata las personas jurídicas, el 23 el Registro de Despachantes, y los arts. 199 a 226 el régimen infraccional."
  },
  {
    id: "q-p12-018",
    moduleId: "p12",
    subtopicId: "p12-s2",
    difficulty: 1,
    prompt: "¿Ante quién se rinde el examen de competencia para ser despachante?",
    options: [
      "Ante un tribunal de tres miembros",
      "Ante un juez civil",
      "Ante la ADAU",
      "Ante el BCU"
    ],
    answer: 0,
    explanation: "El CAROU exige aprobar un examen en materia aduanera y de comercio exterior ante un tribunal de tres miembros. La habilitación la otorga el MEF."
  },
  {
    id: "q-p12-019",
    moduleId: "p12",
    subtopicId: "p12-s2",
    difficulty: 2,
    prompt: "¿Cuál es la garantía base que debe constituir un despachante a la orden de la DNA?",
    options: [
      "USD 5.000",
      "USD 50.000",
      "USD 70.000",
      "USD 15.000"
    ],
    answer: 3,
    explanation: "La base es USD 15.000; se suman USD 15.000 si el promedio anual despachado supera USD 20 millones, y llega hasta USD 70.000 si supera USD 40 millones."
  },
  {
    id: "q-p12-020",
    moduleId: "p12",
    subtopicId: "p12-s2",
    difficulty: 2,
    prompt: "¿Quién inicia el registro de un empleado de despachante ante la DNA?",
    options: [
      "El propio empleado, con su cédula",
      "El MTSS de oficio",
      "El despachante titular, con nota firmada",
      "La ADAU"
    ],
    answer: 2,
    explanation: "El trámite lo inicia el despachante; se acompaña la cédula del empleado y la Planilla de Control de Trabajo del MTSS. Es gratuito."
  },
  {
    id: "q-p12-021",
    moduleId: "p12",
    subtopicId: "p12-s2",
    difficulty: 2,
    prompt: "Según el Decreto 96/015, ¿qué NO puede hacer un empleado autorizado de despachante?",
    options: [
      "Tramitar documentos en la Aduana",
      "Cargar datos en los sistemas",
      "Coordinar con transportistas",
      "Firmar el DUA o sus correcciones"
    ],
    answer: 3,
    explanation: "El empleado no puede firmar el DUA, actas de reconocimiento o discrepancia, hacer autorrevisiones o acuerdos de pago ni cobrar devoluciones. El despachante responde por sus actos."
  },
  {
    id: "q-p12-022",
    moduleId: "p12",
    subtopicId: "p12-s2",
    difficulty: 1,
    prompt: "¿Qué organismo otorga la habilitación de despachante de aduana?",
    options: [
      "La DNA",
      "El MEF",
      "El MTSS",
      "La ANP"
    ],
    answer: 1,
    explanation: "La habilitación la otorga el Ministerio de Economía y Finanzas, con inscripción en el Registro de Despachantes (art. 23 CAROU)."
  },
  {
    id: "q-p12-023",
    moduleId: "p12",
    subtopicId: "p12-s2",
    difficulty: 2,
    prompt: "En la escala del Decreto 913/986, ¿qué categoría hace el despacho de importación y controla declaraciones antes de presentarlas?",
    options: [
      "Oficial técnico A",
      "Cadete",
      "Auxiliar administrativo",
      "Oficial técnico B"
    ],
    answer: 0,
    explanation: "El oficial técnico B redacta permisos de exportación y tránsito; el A hace el despacho de importación y controla declaraciones. El cadete lleva y trae documentos."
  },
  {
    id: "q-p12-024",
    moduleId: "p12",
    subtopicId: "p12-s2",
    difficulty: 2,
    prompt: "¿Qué sistemas informáticos piden los avisos uruguayos de comex?",
    options: [
      "SIGA y SISCOMEX",
      "Solo Excel",
      "LUCIA, VUCE y GEX, además de Excel y ERP como SAP",
      "AFIP y SIM"
    ],
    answer: 2,
    explanation: "En Uruguay lo central es LUCIA (DNA), la VUCE y el expediente electrónico GEX. Ningún aviso relevado menciona un sistema \"SIGA\" para Uruguay; SISCOMEX es de Brasil."
  },
  {
    id: "q-p12-025",
    moduleId: "p12",
    subtopicId: "p12-s2",
    difficulty: 1,
    prompt: "¿En qué tipo de empleador pesa más la experiencia naval?",
    options: [
      "En una mesa de comex de un banco",
      "En un courier",
      "En una agencia marítima",
      "En una zona franca de servicios financieros"
    ],
    answer: 2,
    explanation: "La agencia marítima representa a la naviera en puerto (escalas, manifiestos, BL, contenedores): el conocimiento de buques y operativa portuaria es un diferencial inmediato."
  },
  {
    id: "q-p12-026",
    moduleId: "p12",
    subtopicId: "p12-s2",
    difficulty: 2,
    prompt: "¿Qué requisito NO figura en el art. 16 del CAROU para ser despachante?",
    options: [
      "Secundaria completa",
      "Domicilio en el país",
      "Estar al día con DGI, BPS y DNA",
      "Tener título universitario de abogado o contador"
    ],
    answer: 3,
    explanation: "El art. 16 pide domicilio, mayoría de edad, secundaria, examen, antecedentes limpios, no concurso y estar al día. El Poder Ejecutivo puede exigir estudios terciarios en comex, pero no un título de abogado o contador."
  },
  {
    id: "q-p12-027",
    moduleId: "p12",
    subtopicId: "p12-s2",
    difficulty: 3,
    prompt: "¿Cuántas unidades tiene el temario oficial del examen de despachante (programa DNA 2024)?",
    options: [
      "18",
      "10",
      "12",
      "24"
    ],
    answer: 0,
    explanation: "Va del régimen del despachante al infraccional aduanero, pasando por ALADI y MERCOSUR, origen, nomenclatura, valoración, CAROU, regímenes y DUA."
  },
  {
    id: "q-p12-028",
    moduleId: "p12",
    subtopicId: "p12-s2",
    difficulty: 2,
    prompt: "Para una persona que busca trabajo como auxiliar de despachante, ¿cuál es el orden correcto?",
    options: [
      "Primero saca el carné de auxiliar en la DNA y después busca trabajo",
      "Primero la contrata un estudio y después el despachante la registra ante la DNA",
      "Primero rinde el examen de despachante",
      "Primero se inscribe en el Registro de Despachantes del MEF"
    ],
    answer: 1,
    explanation: "No hay un \"carné de auxiliar\" que se saque por cuenta propia: el registro lo tramita el despachante para un empleado formal."
  },
  {
    id: "q-p12-029",
    moduleId: "p12",
    subtopicId: "p12-s3",
    difficulty: 1,
    prompt: "¿Cómo conviene traducir \"Jefe de Cubierta y Armas\" en un CV de comex?",
    options: [
      "Dejarlo tal cual, sin explicación",
      "Experto en armamento naval",
      "Coordinación de equipos y recursos; responsabilidad sobre inventario, mantenimiento y seguridad de equipos",
      "Gerente general de operaciones portuarias"
    ],
    answer: 2,
    explanation: "La idea es traducir sin inflar: describir funciones que un reclutador de comex entienda y valore."
  },
  {
    id: "q-p12-030",
    moduleId: "p12",
    subtopicId: "p12-s3",
    difficulty: 1,
    prompt: "¿Qué extensión recomienda la guía para el CV?",
    options: [
      "1 a 2 páginas",
      "Media página",
      "3 a 4 páginas",
      "Sin límite"
    ],
    answer: 0,
    explanation: "El reclutador lee el perfil en segundos; un CV de 1 a 2 páginas con logros medibles es lo recomendado."
  },
  {
    id: "q-p12-031",
    moduleId: "p12",
    subtopicId: "p12-s3",
    difficulty: 2,
    prompt: "¿Qué significa el método STAR para preguntas conductuales?",
    options: [
      "Síntesis, Tema, Argumento, Respuesta",
      "Seguridad, Trabajo, Actitud, Rendimiento",
      "Situación, Técnica, Análisis, Recomendación",
      "Situación, Tarea, Acción, Resultado"
    ],
    answer: 3,
    explanation: "Sirve para contar ejemplos concretos (una guardia, una maniobra, una inspección) de forma ordenada y verificable."
  },
  {
    id: "q-p12-032",
    moduleId: "p12",
    subtopicId: "p12-s3",
    difficulty: 2,
    prompt: "¿A qué empleadores conviene apuntar primero viniendo de la Armada?",
    options: [
      "Mesas de comex de bancos",
      "Agencias marítimas y forwarders",
      "Couriers",
      "Departamentos de compras de supermercados"
    ],
    answer: 1,
    explanation: "Ahí el conocimiento de buques y puerto es un diferencial inmediato; después, estudios de despachante y dptos. de comex."
  },
  {
    id: "q-p12-033",
    moduleId: "p12",
    subtopicId: "p12-s3",
    difficulty: 2,
    prompt: "¿Qué tema conviene aclarar en la entrevista para que no quede como duda no dicha?",
    options: [
      "El grado militar exacto con todas sus siglas",
      "La fecha de baja y la disponibilidad, y su compatibilidad con el servicio",
      "Las armas que se manejaron a bordo",
      "Los destinos de navegación"
    ],
    answer: 1,
    explanation: "Si el entrevistador no sabe cuándo podés empezar, la duda juega en contra. Mejor plantearlo vos."
  },
  {
    id: "q-p12-034",
    moduleId: "p12",
    subtopicId: "p12-s3",
    difficulty: 2,
    prompt: "¿Qué estructura tiene la carta de presentación recomendada?",
    options: [
      "Datos personales; historia familiar; hobbies; firma",
      "Un solo párrafo genérico para todas las empresas",
      "Copia del CV en prosa",
      "Puesto y empresa; logros traducidos; formación y disponibilidad; cierre con propuesta de entrevista"
    ],
    answer: 3,
    explanation: "El primer párrafo debe ser específico de cada empresa; es lo que demuestra que leíste el aviso."
  },
  {
    id: "q-p12-035",
    moduleId: "p12",
    subtopicId: "p12-s3",
    difficulty: 1,
    prompt: "En el CV, ¿cómo conviene escribir la experiencia?",
    options: [
      "Con logros medibles: personas a cargo, inspecciones aprobadas, operaciones realizadas",
      "Con adjetivos como \"excelente\" y \"proactivo\"",
      "Con la lista completa de cursos navales",
      "Solo con fechas y grados"
    ],
    answer: 0,
    explanation: "Un número vale más que un adjetivo, siempre que sea real: en la entrevista te lo van a preguntar."
  },
  {
    id: "q-p12-036",
    moduleId: "p12",
    subtopicId: "p12-s3",
    difficulty: 2,
    prompt: "Te asignan tres embarques urgentes el mismo día. ¿Cuál es la mejor respuesta?",
    options: [
      "Atiendo por orden de llegada sin avisar a nadie",
      "Le digo a los tres que estará listo hoy",
      "Priorizo por impacto, comunico tiempos realistas a cada cliente, delego lo que pueda y pido apoyo si hay riesgo real",
      "Espero a que mi jefe decida"
    ],
    answer: 2,
    explanation: "Es la lógica de la guardia: prioridades claras (días libres, perecederos, cliente parado) y comunicación honesta."
  },
  {
    id: "q-p12-037",
    moduleId: "p12",
    subtopicId: "p12-s3",
    difficulty: 2,
    prompt: "¿Qué normativa internacional marítima conocida en la Armada conviene mencionar en un CV de comex?",
    options: [
      "UCP 600 y URC 522",
      "CAROU y Decreto 96/015",
      "Incoterms 2020",
      "SOLAS (incluido el VGM) e ISPS"
    ],
    answer: 3,
    explanation: "SOLAS e ISPS son puentes naturales entre la vida a bordo y la operativa de contenedores y puertos. UCP, CAROU e Incoterms se aprenden en comex."
  },
  {
    id: "q-p12-038",
    moduleId: "p12",
    subtopicId: "p12-s3",
    difficulty: 3,
    prompt: "¿Qué conviene incluir en la sección \"Otros\" del CV si además se gestiona una marca propia?",
    options: [
      "Nada, porque puede parecer un conflicto de intereses",
      "Solo el nombre de la marca",
      "Compras, proveedores y habilitaciones regulatorias, porque muestran visión de negocio",
      "Los ingresos de la marca"
    ],
    answer: 2,
    explanation: "La gestión de una marca demuestra experiencia comercial concreta, algo que un perfil puramente militar no muestra."
  }
]
