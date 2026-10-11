import type { Question } from '../types'

export const p03Questions: Question[] = [
  {
    "id": "q-p03-001",
    "moduleId": "p03",
    "subtopicId": "p03-s1",
    "difficulty": 1,
    "prompt": "¿Cuál es la principal diferencia entre la factura pro-forma y la factura comercial?",
    "options": [
      "La pro-forma lleva Incoterm y la comercial no",
      "Son lo mismo con distinto nombre",
      "La pro-forma es una oferta previa sin efecto fiscal; la comercial documenta la venta y se usa en el despacho",
      "La comercial la emite el comprador"
    ],
    "answer": 2,
    "explanation": "La pro-forma sirve para cotizar, tramitar permisos y abrir cartas de crédito, pero no para despachar una importación definitiva. La factura comercial prueba la venta y es documento obligatorio del DUA."
  },
  {
    "id": "q-p03-002",
    "moduleId": "p03",
    "subtopicId": "p03-s1",
    "difficulty": 1,
    "prompt": "¿Para cuál de estas tareas se usa típicamente la pro-forma?",
    "options": [
      "Abrir una carta de crédito en el banco",
      "Numerar el DUA de importación definitiva",
      "Retirar el contenedor de la terminal",
      "Registrar la venta ante la DGI"
    ],
    "answer": 0,
    "explanation": "El importador usa la pro-forma para abrir una carta de crédito, financiarse, tramitar permisos y estimar tributos. No tiene efecto fiscal ni sirve para el DUA definitivo."
  },
  {
    "id": "q-p03-003",
    "moduleId": "p03",
    "subtopicId": "p03-s1",
    "difficulty": 2,
    "prompt": "¿Cuándo puede una pro-forma funcionar como contrato de compraventa?",
    "options": [
      "Nunca, es solo informativa",
      "Cuando la registra la DNA",
      "Cuando el banco la sella",
      "Cuando el importador la firma o la acepta"
    ],
    "answer": 3,
    "explanation": "Con la firma o aceptación del importador hay oferta y aceptación, y la pro-forma puede funcionar como contrato."
  },
  {
    "id": "q-p03-004",
    "moduleId": "p03",
    "subtopicId": "p03-s1",
    "difficulty": 2,
    "prompt": "En la lista didáctica de 22 elementos, ¿para qué sirve indicar la validez de la oferta?",
    "options": [
      "Define cuándo pasa el riesgo",
      "Protege al exportador de variaciones de costos y fija hasta cuándo se puede aceptar",
      "Determina el arancel aplicable",
      "Fija la fecha del B/L"
    ],
    "answer": 1,
    "explanation": "La validez (por ejemplo, 30 días) evita que el vendedor quede atado a un precio que ya no le sirve y le dice al comprador hasta cuándo puede aceptar."
  },
  {
    "id": "q-p03-005",
    "moduleId": "p03",
    "subtopicId": "p03-s1",
    "difficulty": 2,
    "prompt": "¿Por qué conviene que la pro-forma indique una posición arancelaria (NCM) sugerida?",
    "options": [
      "Porque la DNA la exige para numerar",
      "Para estimar tributos e intervenciones de organismos",
      "Para definir el Incoterm",
      "Para calcular el peso volumétrico"
    ],
    "answer": 1,
    "explanation": "Con la NCM sugerida el despachante puede estimar el arancel y saber qué permisos de la VUCE hacen falta antes de comprar."
  },
  {
    "id": "q-p03-006",
    "moduleId": "p03",
    "subtopicId": "p03-s1",
    "difficulty": 2,
    "prompt": "Una pro-forma dice “FOB” a secas. ¿Qué falta?",
    "options": [
      "El seguro",
      "El número de DUA",
      "El código de régimen",
      "El puerto de embarque y la versión de los Incoterms"
    ],
    "answer": 3,
    "explanation": "Un Incoterm se cita con regla, lugar preciso y versión: por ejemplo, “FOB Ningbo, China, Incoterms® 2020”."
  },
  {
    "id": "q-p03-007",
    "moduleId": "p03",
    "subtopicId": "p03-s1",
    "difficulty": 1,
    "prompt": "¿Qué dato de la pro-forma permite saber si se puede pedir una preferencia arancelaria?",
    "options": [
      "El país de origen de la mercadería",
      "La validez de la oferta",
      "Los datos bancarios",
      "El medio de transporte"
    ],
    "answer": 0,
    "explanation": "El país de origen define si hay un acuerdo con preferencia y qué certificado de origen corresponde."
  },
  {
    "id": "q-p03-008",
    "moduleId": "p03",
    "subtopicId": "p03-s1",
    "difficulty": 3,
    "prompt": "¿Con qué código se puede asociar la pro-forma a un DUA en LUCIA?",
    "options": [
      "FACC",
      "CODM",
      "PROF",
      "REMN"
    ],
    "answer": 2,
    "explanation": "PROF es el código de la pro-forma. FACC es la factura comercial a nivel cabezal, CODM el certificado de origen digital MERCOSUR y REMN el remito."
  },
  {
    "id": "q-p03-009",
    "moduleId": "p03",
    "subtopicId": "p03-s1",
    "difficulty": 3,
    "prompt": "Sobre “los 22 elementos de la pro-forma”, ¿qué es correcto?",
    "options": [
      "Los fija el Decreto 333/992",
      "Los exige la DNA en una resolución general",
      "Son los campos obligatorios del DUA",
      "Es una lista didáctica: no hay una lista oficial uruguaya pública de 22 elementos"
    ],
    "answer": 3,
    "explanation": "No se encontró una fuente oficial uruguaya con 22 elementos: la lista sale de la práctica del comercio exterior y sirve para no olvidar datos clave."
  },
  {
    "id": "q-p03-010",
    "moduleId": "p03",
    "subtopicId": "p03-s2",
    "difficulty": 1,
    "prompt": "Según el Código Aduanero uruguayo, ¿quién emite la factura comercial?",
    "options": [
      "El importador",
      "El despachante",
      "El exportador",
      "La DNA"
    ],
    "answer": 2,
    "explanation": "El art. 2 de la Ley 19.276 la define como el documento emitido por el exportador que detalla las mercaderías de cada embarque por precio y nombre comercial."
  },
  {
    "id": "q-p03-011",
    "moduleId": "p03",
    "subtopicId": "p03-s2",
    "difficulty": 2,
    "prompt": "¿Por qué la factura comercial es clave para el valor en aduana?",
    "options": [
      "Porque fija la tasa consular",
      "Porque prueba el precio de transacción, base del primer método de valoración OMC",
      "Porque reemplaza al B/L",
      "Porque define el canal"
    ],
    "answer": 1,
    "explanation": "El precio realmente pagado o por pagar, que surge de la factura, es la base del valor de transacción (método 1), al que se suman los ajustes."
  },
  {
    "id": "q-p03-012",
    "moduleId": "p03",
    "subtopicId": "p03-s2",
    "difficulty": 2,
    "prompt": "¿Qué práctica heredada del Decreto-Ley 10.314 sigue vigente al armar una factura?",
    "options": [
      "Un ítem por mercadería y el flete discriminado",
      "Agrupar todo en un solo ítem",
      "Emitirla en el consulado",
      "Ponerla solo en español"
    ],
    "answer": 0,
    "explanation": "La vieja factura consular prohibía agrupar mercaderías distintas y exigía el flete y los gastos por separado; esa lógica sigue en la práctica."
  },
  {
    "id": "q-p03-013",
    "moduleId": "p03",
    "subtopicId": "p03-s2",
    "difficulty": 1,
    "prompt": "¿Qué detalla el packing list?",
    "options": [
      "Por bulto: contenido, cantidad, pesos bruto y neto, medidas y marcas",
      "El precio y el Incoterm",
      "Los tributos liquidados",
      "Las condiciones del contrato de transporte"
    ],
    "answer": 0,
    "explanation": "El packing list, emitido por el vendedor, describe cómo está repartida físicamente la mercadería en bultos. Sirve para la verificación, el cubicaje y la desconsolidación."
  },
  {
    "id": "q-p03-014",
    "moduleId": "p03",
    "subtopicId": "p03-s2",
    "difficulty": 2,
    "prompt": "¿Qué códigos usa LUCIA para asociar la factura comercial al DUA?",
    "options": [
      "PROF y REMN",
      "FACC, FACI y FACN",
      "ORIM y CODM",
      "NCRD y NDEB"
    ],
    "answer": 1,
    "explanation": "FACC es la factura a nivel cabezal, FACI por ítem y FACN no parcializable. PROF es la pro-forma; ORIM/CODM, origen; NCRD/NDEB, notas de crédito y débito."
  },
  {
    "id": "q-p03-015",
    "moduleId": "p03",
    "subtopicId": "p03-s2",
    "difficulty": 2,
    "prompt": "¿Cuál de estas afirmaciones sobre la factura comercial es correcta?",
    "options": [
      "Puede tener pesos estimados",
      "Vence a los 30 días",
      "Sus datos deben coincidir con el B/L, el packing list y el certificado de origen",
      "No tiene efecto fiscal en ningún país"
    ],
    "answer": 2,
    "explanation": "La factura comercial tiene datos definitivos y tiene efecto fiscal en el país del exportador. Su coherencia con los demás documentos es lo primero que se controla."
  },
  {
    "id": "q-p03-016",
    "moduleId": "p03",
    "subtopicId": "p03-s2",
    "difficulty": 3,
    "prompt": "La factura dice 850 cajas, el packing list suma 848 y el B/L dice 850. ¿Qué es lo correcto antes de transmitir el DUA?",
    "options": [
      "Transmitir igual y esperar el canal",
      "Declarar 849 como promedio",
      "Ignorarlo porque está dentro de la tolerancia",
      "Pedir al proveedor que aclare la diferencia y corregir los documentos"
    ],
    "answer": 3,
    "explanation": "Los documentos tienen que contar la misma historia. Aunque el CAROU prevé una tolerancia del 5 % entre lo manifestado y lo arribado, lo correcto es aclarar antes de declarar."
  },
  {
    "id": "q-p03-017",
    "moduleId": "p03",
    "subtopicId": "p03-s2",
    "difficulty": 2,
    "prompt": "¿Quién usa el packing list para desconsolidar una carga LCL en Montevideo?",
    "options": [
      "El banco emisor",
      "El MEF",
      "El depósito o terminal que separa cada lote",
      "La aseguradora"
    ],
    "answer": 2,
    "explanation": "En LCL el depósito abre el contenedor y separa cada lote por documento; el packing list permite controlar que llegaron todos los bultos."
  },
  {
    "id": "q-p03-018",
    "moduleId": "p03",
    "subtopicId": "p03-s2",
    "difficulty": 1,
    "prompt": "En un canal rojo, ¿para qué le sirve el packing list al Vista?",
    "options": [
      "Para ubicar qué bultos abrir y verificar el contenido",
      "Para calcular el IVA",
      "Para emitir el levante automático",
      "Para fijar el Incoterm"
    ],
    "answer": 0,
    "explanation": "El packing list permite al verificador ubicar el bulto correcto y comparar contenido declarado con el real sin abrir todo."
  },
  {
    "id": "q-p03-019",
    "moduleId": "p03",
    "subtopicId": "p03-s2",
    "difficulty": 3,
    "prompt": "¿Qué afirmación sobre copias, firma e idioma de la factura en el DUA digital está confirmada en la investigación?",
    "options": [
      "Se exigen siempre 5 copias firmadas a mano",
      "Solo se acepta en español",
      "La firma del importador es obligatoria",
      "El despachante digitaliza y transmite la documentación por LUCIA y guarda los originales"
    ],
    "answer": 3,
    "explanation": "Con el DUA digital el despachante digitaliza, transmite y conserva los originales. El número de copias, la firma manuscrita y la traducción son puntos a confirmar con la DNA."
  },
  {
    "id": "q-p03-020",
    "moduleId": "p03",
    "subtopicId": "p03-s3",
    "difficulty": 1,
    "prompt": "Desde el 1/5/2026, la franquicia anual para personas físicas en envíos postales y courier es de:",
    "options": [
      "USD 200 por envío",
      "USD 800 acumulados por año, en un máximo de 3 envíos",
      "USD 50 por envío",
      "Ilimitada"
    ],
    "answer": 1,
    "explanation": "El Decreto 50/026 fijó una franquicia de USD 800 por año civil y hasta 3 envíos, para personas físicas con cédula uruguaya."
  },
  {
    "id": "q-p03-021",
    "moduleId": "p03",
    "subtopicId": "p03-s3",
    "difficulty": 1,
    "prompt": "¿Cuánto es la Prestación Única del régimen 2026?",
    "options": [
      "22 % del valor",
      "60 % del valor, con un mínimo de USD 20 por envío",
      "35 % del valor",
      "10 % del valor"
    ],
    "answer": 1,
    "explanation": "Es un tributo único del 60 % sobre el valor de la factura o declarado, con mínimo de USD 20, que sustituye aranceles e impuestos internos."
  },
  {
    "id": "q-p03-022",
    "moduleId": "p03",
    "subtopicId": "p03-s3",
    "difficulty": 2,
    "prompt": "¿Quién puede usar la franquicia anual de 2026?",
    "options": [
      "Cualquier empresa con RUT",
      "Extranjeros con pasaporte",
      "Solo jubilados",
      "Personas físicas mayores de 18 años con cédula uruguaya, registradas ante la DNA"
    ],
    "answer": 3,
    "explanation": "La franquicia es solo para personas físicas con cédula uruguaya. Las empresas pueden usar la Prestación Única o la importación formal."
  },
  {
    "id": "q-p03-023",
    "moduleId": "p03",
    "subtopicId": "p03-s3",
    "difficulty": 2,
    "prompt": "Un envío courier de USD 1.200 debe ingresar:",
    "options": [
      "Por importación formal con despachante y DUA",
      "Por franquicia",
      "Por Prestación Única",
      "No puede ingresar"
    ],
    "answer": 0,
    "explanation": "Los dos regímenes simplificados tienen tope de USD 800 y 20 kg. Por encima corresponde el despacho formal."
  },
  {
    "id": "q-p03-024",
    "moduleId": "p03",
    "subtopicId": "p03-s3",
    "difficulty": 2,
    "prompt": "Una empresa recibe por courier un repuesto de USD 25. ¿Cuánto paga de Prestación Única?",
    "options": [
      "USD 15",
      "USD 0",
      "USD 20",
      "USD 5,50"
    ],
    "answer": 2,
    "explanation": "25 × 60 % = USD 15, pero el mínimo por envío es USD 20, así que paga USD 20."
  },
  {
    "id": "q-p03-025",
    "moduleId": "p03",
    "subtopicId": "p03-s3",
    "difficulty": 2,
    "prompt": "En la franquicia anual, ¿qué determina si el envío queda exonerado de IVA?",
    "options": [
      "El país desde donde despegó el avión",
      "La nacionalidad del comprador",
      "El peso del envío",
      "La residencia fiscal del emisor de la factura (hoy, EE. UU.) y su registro ante la DNA"
    ],
    "answer": 3,
    "explanation": "Cuenta la residencia fiscal de quien factura. Hoy el único país con acuerdo aplicable es EE. UU. (TIFA 2008), y el vendedor debe estar registrado (RG 26/2026)."
  },
  {
    "id": "q-p03-026",
    "moduleId": "p03",
    "subtopicId": "p03-s3",
    "difficulty": 2,
    "prompt": "¿Qué norma derogó el Decreto 50/026?",
    "options": [
      "La Ley 19.276",
      "El Decreto 333/992",
      "El Decreto 356/014",
      "La Ley 20.446"
    ],
    "answer": 2,
    "explanation": "El Decreto 50/026 reglamenta la Ley 20.446 y deroga el Decreto 356/014, el régimen anterior de franquicias."
  },
  {
    "id": "q-p03-027",
    "moduleId": "p03",
    "subtopicId": "p03-s3",
    "difficulty": 3,
    "prompt": "¿Qué mercaderías quedan excluidas de la Prestación Única?",
    "options": [
      "Los libros",
      "Las gravadas por IMESI y las que requieren autorización previa si no la tienen",
      "Los envíos de personas jurídicas",
      "Los envíos de menos de 1 kg"
    ],
    "answer": 1,
    "explanation": "No pueden ir por Prestación Única los bienes con IMESI ni los que necesitan autorización de un organismo y no la tienen."
  },
  {
    "id": "q-p03-028",
    "moduleId": "p03",
    "subtopicId": "p03-s3",
    "difficulty": 3,
    "prompt": "Si no se pagan los tributos de un envío courier dentro de 30 días del ingreso, ¿qué ocurre?",
    "options": [
      "Se configura el abandono no infraccional",
      "Se aplica la franquicia automáticamente",
      "El envío se devuelve gratis",
      "Se duplica la Prestación Única"
    ],
    "answer": 0,
    "explanation": "Hay abandono no infraccional si no se pagan los tributos en 30 días del ingreso o si no se retira el envío en 90 días."
  },
  {
    "id": "q-p03-029",
    "moduleId": "p03",
    "subtopicId": "p03-s3",
    "difficulty": 2,
    "prompt": "¿Se necesita despachante de aduana para los regímenes de Prestación Única y franquicia?",
    "options": [
      "No: el operador courier liquida, declara y paga a la DNA antes de entregar",
      "Sí, siempre",
      "Solo en la franquicia",
      "Solo si el envío supera los 5 kg"
    ],
    "answer": 0,
    "explanation": "El art. 17 del decreto exime de despachante. El courier liquida y paga los tributos a la DNA antes de entregar el envío."
  },
  {
    "id": "q-p03-030",
    "moduleId": "p03",
    "subtopicId": "p03-s4",
    "difficulty": 1,
    "prompt": "¿Qué es el DUA?",
    "options": [
      "El documento de transporte marítimo",
      "La declaración aduanera única para importación, exportación, tránsito y admisión temporaria",
      "Un certificado del LATU",
      "La factura del despachante"
    ],
    "answer": 1,
    "explanation": "El Documento Único Aduanero se usa para todos los regímenes, nació con el Decreto 333/992 y hoy es 100 % digital en LUCIA."
  },
  {
    "id": "q-p03-031",
    "moduleId": "p03",
    "subtopicId": "p03-s4",
    "difficulty": 1,
    "prompt": "¿Qué código de régimen (casilla A1) corresponde a la importación definitiva?",
    "options": [
      "20",
      "21",
      "10",
      "30"
    ],
    "answer": 2,
    "explanation": "10 es importación definitiva; 20 y 21 son admisión temporaria; 30 y 31 son reimportación."
  },
  {
    "id": "q-p03-032",
    "moduleId": "p03",
    "subtopicId": "p03-s4",
    "difficulty": 2,
    "prompt": "Si no se presenta póliza de seguro en una importación, ¿qué aplica la DNA?",
    "options": [
      "Un seguro del 10 % del CIF",
      "Nada: el seguro no integra el valor",
      "El 110 % del flete",
      "Un seguro ficto del 1 % del FOB"
    ],
    "answer": 3,
    "explanation": "Según el procedimiento de la DNA, si no hay seguro declarado se usa un seguro ficto del 1 % del FOB para armar el valor en aduana."
  },
  {
    "id": "q-p03-033",
    "moduleId": "p03",
    "subtopicId": "p03-s4",
    "difficulty": 2,
    "prompt": "¿Qué exige el art. 65 del CAROU a la declaración aduanera?",
    "options": [
      "Presentar la pro-forma",
      "Indicar el Incoterm en la casilla A1",
      "Acreditar la disponibilidad jurídica de la mercadería con el conocimiento de embarque o equivalente",
      "Pagar la tasa consular por anticipado"
    ],
    "answer": 2,
    "explanation": "El art. 65 exige que la declaración acredite la disponibilidad jurídica mediante el conocimiento de embarque o un documento equivalente."
  },
  {
    "id": "q-p03-034",
    "moduleId": "p03",
    "subtopicId": "p03-s4",
    "difficulty": 2,
    "prompt": "¿Qué pasa si no se solicita canal dentro de los 30 días corridos desde la numeración?",
    "options": [
      "El DUA vence",
      "Se asigna canal verde automáticamente",
      "Se cobra una multa del 10 %",
      "Se prorroga 30 días más"
    ],
    "answer": 0,
    "explanation": "Si no se pide canal en 30 días corridos, el DUA vence."
  },
  {
    "id": "q-p03-035",
    "moduleId": "p03",
    "subtopicId": "p03-s4",
    "difficulty": 2,
    "prompt": "¿Qué es la DVA que acompaña al DUA?",
    "options": [
      "El documento de transporte aéreo",
      "Un certificado de la VUCE",
      "La vía 4 del DUA",
      "La declaración del valor en aduana (formulario DV-1)"
    ],
    "answer": 3,
    "explanation": "La DVA es la declaración del valor, formulario DV-1, que se transmite junto con el DUA."
  },
  {
    "id": "q-p03-036",
    "moduleId": "p03",
    "subtopicId": "p03-s4",
    "difficulty": 3,
    "prompt": "Factura FOB Ningbo US$ 20.000, flete US$ 2.500 y póliza de seguro US$ 200. ¿Qué total CIF va en la casilla 46?",
    "options": [
      "US$ 22.500",
      "US$ 22.700",
      "US$ 22.200",
      "US$ 20.200"
    ],
    "answer": 1,
    "explanation": "CIF = FOB + flete + seguro = 20.000 + 2.500 + 200 = US$ 22.700."
  },
  {
    "id": "q-p03-037",
    "moduleId": "p03",
    "subtopicId": "p03-s4",
    "difficulty": 3,
    "prompt": "¿Dónde se guardan las imágenes firmadas digitalmente de los documentos del DUA y por cuánto tiempo?",
    "options": [
      "En la VUCE, durante 1 año",
      "En un RADE, durante 10 años",
      "En el BROU, durante 5 años",
      "En un RASO, durante 30 días"
    ],
    "answer": 1,
    "explanation": "Los DAE (imágenes firmadas digitalmente) se guardan en un RADE, archivo digital homologado por la DNA, por 10 años."
  },
  {
    "id": "q-p03-038",
    "moduleId": "p03",
    "subtopicId": "p03-s4",
    "difficulty": 1,
    "prompt": "¿Qué significa canal naranja?",
    "options": [
      "Levante automático sin revisión",
      "Verificación física obligatoria siempre",
      "Anulación del DUA",
      "Análisis documental a cargo de un Vista"
    ],
    "answer": 3,
    "explanation": "Verde es cumplido automático; naranja, control documental del Vista (que puede derivar en revisión física); rojo, control documental y físico."
  }
]
