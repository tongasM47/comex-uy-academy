import type { Question } from '../types'

export const p02Questions: Question[] = [
  {
    "id": "q-p02-001",
    "moduleId": "p02",
    "subtopicId": "p02-s1",
    "difficulty": 1,
    "prompt": "¿Quién elabora las reglas Incoterms?",
    "options": [
      "La Organización Mundial del Comercio",
      "El MERCOSUR",
      "La Cámara de Comercio Internacional (ICC)",
      "La IATA"
    ],
    "answer": 2,
    "explanation": "Los Incoterms son reglas privadas de la ICC. No son una norma estatal: se aplican porque las partes las incorporan al contrato."
  },
  {
    "id": "q-p02-002",
    "moduleId": "p02",
    "subtopicId": "p02-s1",
    "difficulty": 1,
    "prompt": "¿Cuántas reglas tiene la edición Incoterms® 2020?",
    "options": [
      "11",
      "13",
      "9",
      "7"
    ],
    "answer": 0,
    "explanation": "Son 11: siete para cualquier modo (EXW, FCA, CPT, CIP, DAP, DPU, DDP) y cuatro solo marítimas (FAS, FOB, CFR, CIF)."
  },
  {
    "id": "q-p02-003",
    "moduleId": "p02",
    "subtopicId": "p02-s1",
    "difficulty": 2,
    "prompt": "¿Cuál es el estado de los “Incoterms 2030” a octubre de 2026?",
    "options": [
      "Están vigentes desde enero de 2026",
      "La ICC descartó una nueva versión",
      "Rigen solo para el comercio electrónico",
      "La ICC trabaja en la revisión, con lanzamiento previsto para fines de 2029"
    ],
    "answer": 3,
    "explanation": "La versión oficial sigue siendo la 2020. La ICC inició la revisión y, según ICC Países Bajos, los Incoterms 2030 se lanzarían a fines de 2029."
  },
  {
    "id": "q-p02-004",
    "moduleId": "p02",
    "subtopicId": "p02-s1",
    "difficulty": 1,
    "prompt": "¿Cuál es la forma correcta de citar un Incoterm?",
    "options": [
      "FCA",
      "FCA Depósito ABC, Ruta 1 km 25, Montevideo, Uruguay, Incoterms® 2020",
      "FCA Uruguay",
      "Incoterm FCA vigente"
    ],
    "answer": 1,
    "explanation": "Se cita la regla, el lugar lo más preciso posible y la versión. Un país no es un lugar de entrega y sin versión puede haber discusiones."
  },
  {
    "id": "q-p02-005",
    "moduleId": "p02",
    "subtopicId": "p02-s1",
    "difficulty": 2,
    "prompt": "¿Qué asunto queda FUERA de lo que regulan los Incoterms?",
    "options": [
      "Quién contrata el seguro",
      "El medio de pago",
      "Quién hace la aduana de importación",
      "Dónde se entrega la mercadería"
    ],
    "answer": 1,
    "explanation": "El medio de pago, el precio, la propiedad, el incumplimiento y la ley aplicable no los regulan los Incoterms. Sí regulan entrega, riesgo, costos, transporte, seguro y trámites."
  },
  {
    "id": "q-p02-006",
    "moduleId": "p02",
    "subtopicId": "p02-s1",
    "difficulty": 2,
    "prompt": "¿Qué grupo de Incoterms es exclusivo del transporte marítimo y fluvial?",
    "options": [
      "FCA, CPT, CIP y DAP",
      "EXW, FCA, FAS y FOB",
      "CPT, CIP, CFR y CIF",
      "FAS, FOB, CFR y CIF"
    ],
    "answer": 3,
    "explanation": "FAS, FOB, CFR y CIF entregan al costado o a bordo del buque, así que solo sirven para transporte por agua."
  },
  {
    "id": "q-p02-007",
    "moduleId": "p02",
    "subtopicId": "p02-s1",
    "difficulty": 2,
    "prompt": "¿Qué Incoterm 2020 reemplazó a DAT?",
    "options": [
      "DPU",
      "DAP",
      "DDP",
      "CPT"
    ],
    "answer": 0,
    "explanation": "DAT (entregado en terminal) pasó a llamarse DPU (entregado en lugar descargado), y el lugar ya no tiene que ser una terminal."
  },
  {
    "id": "q-p02-008",
    "moduleId": "p02",
    "subtopicId": "p02-s1",
    "difficulty": 2,
    "prompt": "En las reglas “C”, el lugar que se nombra junto a la regla (por ejemplo, “CIF Montevideo”) es:",
    "options": [
      "El de origen, donde pasa el riesgo",
      "El del banco que paga",
      "El de destino, hasta donde el vendedor paga el flete",
      "El de la aduana de exportación"
    ],
    "answer": 2,
    "explanation": "En las reglas C se nombra el destino: hasta ahí paga el vendedor el transporte, aunque el riesgo pasó antes en origen."
  },
  {
    "id": "q-p02-009",
    "moduleId": "p02",
    "subtopicId": "p02-s1",
    "difficulty": 3,
    "prompt": "Un importador compra mochilas FOB Shanghái por US$ 10.000, paga US$ 1.500 de flete y no contrata seguro. Con el seguro ficto del 1 % del FOB, ¿cuál es el valor en aduana?",
    "options": [
      "US$ 11.500",
      "US$ 11.615",
      "US$ 10.000",
      "US$ 11.600"
    ],
    "answer": 3,
    "explanation": "Valor en aduana = FOB + flete + seguro = 10.000 + 1.500 + 100 (1 % de 10.000) = US$ 11.600."
  },
  {
    "id": "q-p02-010",
    "moduleId": "p02",
    "subtopicId": "p02-s1",
    "difficulty": 2,
    "prompt": "¿En qué valor se declaran y miden las exportaciones uruguayas?",
    "options": [
      "CIF",
      "EXW",
      "FOB",
      "DDP"
    ],
    "answer": 2,
    "explanation": "Las exportaciones se declaran en FOB y las estadísticas usan ese valor; las importaciones se valoran en base CIF."
  },
  {
    "id": "q-p02-011",
    "moduleId": "p02",
    "subtopicId": "p02-s2",
    "difficulty": 1,
    "prompt": "En CIF, ¿cuándo pasa el riesgo al comprador?",
    "options": [
      "Al llegar al puerto de destino",
      "Cuando la mercadería está a bordo del buque en el puerto de embarque",
      "Al descargarla en destino",
      "Cuando el comprador paga"
    ],
    "answer": 1,
    "explanation": "Las reglas C tienen dos puntos críticos: el costo llega hasta destino, pero el riesgo pasa a bordo en origen."
  },
  {
    "id": "q-p02-012",
    "moduleId": "p02",
    "subtopicId": "p02-s2",
    "difficulty": 1,
    "prompt": "¿Qué cobertura mínima de seguro exige CIF?",
    "options": [
      "Institute Cargo Clauses (C)",
      "Institute Cargo Clauses (A)",
      "Institute Cargo Clauses (B)",
      "Ninguna"
    ],
    "answer": 0,
    "explanation": "CIF mantiene la cobertura mínima ICC (C), por el 110 % del valor del contrato. La ICC (A) la exige CIP."
  },
  {
    "id": "q-p02-013",
    "moduleId": "p02",
    "subtopicId": "p02-s2",
    "difficulty": 2,
    "prompt": "En FAS, ¿dónde entrega el vendedor?",
    "options": [
      "Al costado del buque en el puerto de embarque",
      "A bordo del buque",
      "En su propio local, sin cargar",
      "En el puerto de destino"
    ],
    "answer": 0,
    "explanation": "FAS (Free Alongside Ship) entrega al costado del buque, en el muelle o en una barcaza. Cargar a bordo y el flete son del comprador."
  },
  {
    "id": "q-p02-014",
    "moduleId": "p02",
    "subtopicId": "p02-s2",
    "difficulty": 2,
    "prompt": "Una empresa uruguaya exporta celulosa en contenedores que entrega en la terminal 5 días antes de la carga. ¿Qué Incoterm es más adecuado?",
    "options": [
      "FOB",
      "FCA",
      "FAS",
      "EXW"
    ],
    "answer": 1,
    "explanation": "Con contenedores la entrega real ocurre en la terminal. FCA hace coincidir el riesgo con ese momento; con FOB el vendedor seguiría corriendo un riesgo que no controla."
  },
  {
    "id": "q-p02-015",
    "moduleId": "p02",
    "subtopicId": "p02-s2",
    "difficulty": 2,
    "prompt": "Compraste CFR Montevideo y un golpe de mar daña la carga en la travesía. ¿Quién soporta la pérdida?",
    "options": [
      "El vendedor, porque pagó el flete",
      "La naviera, siempre",
      "El comprador, porque el riesgo pasó a bordo en origen",
      "Se reparte por mitades"
    ],
    "answer": 2,
    "explanation": "En CFR el vendedor paga el flete hasta destino, pero el riesgo pasó a bordo en el puerto de embarque. Por eso el comprador debería asegurar."
  },
  {
    "id": "q-p02-016",
    "moduleId": "p02",
    "subtopicId": "p02-s2",
    "difficulty": 2,
    "prompt": "¿Cuál es la base estadística de las exportaciones uruguayas, muy usada en carne, soja y celulosa?",
    "options": [
      "CIF",
      "DAP",
      "FCA",
      "FOB"
    ],
    "answer": 3,
    "explanation": "FOB es la base de valor estadístico de las exportaciones uruguayas y se usa mucho en commodities."
  },
  {
    "id": "q-p02-017",
    "moduleId": "p02",
    "subtopicId": "p02-s2",
    "difficulty": 1,
    "prompt": "¿Cuál de estos Incoterms NO puede usarse para un envío aéreo?",
    "options": [
      "CPT",
      "DAP",
      "CFR",
      "FCA"
    ],
    "answer": 2,
    "explanation": "FAS, FOB, CFR y CIF son exclusivos del transporte marítimo y fluvial."
  },
  {
    "id": "q-p02-018",
    "moduleId": "p02",
    "subtopicId": "p02-s2",
    "difficulty": 2,
    "prompt": "En un B/L de una venta FOB, ¿qué suele decir la casilla de flete?",
    "options": [
      "Freight collect",
      "Freight prepaid",
      "Freight included in CIF",
      "No se indica"
    ],
    "answer": 0,
    "explanation": "En FOB el flete lo contrata y paga el comprador, así que el B/L suele decir freight collect (a pagar en destino). En las reglas C, freight prepaid."
  },
  {
    "id": "q-p02-019",
    "moduleId": "p02",
    "subtopicId": "p02-s2",
    "difficulty": 3,
    "prompt": "¿Por cuánto debe asegurar como mínimo el vendedor en CIF?",
    "options": [
      "100 % del valor FOB",
      "120 % del valor CIF",
      "El monto que pida el banco",
      "110 % del precio del contrato, en la moneda del contrato"
    ],
    "answer": 3,
    "explanation": "En CIF y en CIP el seguro mínimo es del 110 % del precio del contrato, en la misma moneda. Las partes pueden pactar más."
  },
  {
    "id": "q-p02-020",
    "moduleId": "p02",
    "subtopicId": "p02-s2",
    "difficulty": 2,
    "prompt": "¿Cuál es un error típico con CFR?",
    "options": [
      "Que el vendedor pague la aduana de importación",
      "Que el comprador no contrate seguro porque cree que todo está cubierto",
      "Que se use para graneles",
      "Que el riesgo pase en destino"
    ],
    "answer": 1,
    "explanation": "En CFR nadie está obligado a asegurar. Como el vendedor paga el flete, el comprador a veces cree que está cubierto, pero el riesgo del viaje es suyo."
  },
  {
    "id": "q-p02-021",
    "moduleId": "p02",
    "subtopicId": "p02-s2",
    "difficulty": 3,
    "prompt": "¿Qué riesgo NO cubre normalmente la cobertura mínima ICC (C) de un CIF?",
    "options": [
      "El incendio",
      "La mojadura",
      "El hundimiento",
      "La avería gruesa"
    ],
    "answer": 1,
    "explanation": "La ICC (C) cubre riesgos mayores nombrados: incendio, explosión, varada, hundimiento, colisión, avería gruesa, echazón. La mojadura o el robo requieren una cobertura más amplia, como la ICC (A)."
  },
  {
    "id": "q-p02-022",
    "moduleId": "p02",
    "subtopicId": "p02-s3",
    "difficulty": 1,
    "prompt": "¿Qué cobertura mínima de seguro exige CIP en Incoterms 2020?",
    "options": [
      "ICC (C)",
      "ICC (B)",
      "Ninguna",
      "ICC (A)"
    ],
    "answer": 3,
    "explanation": "Desde 2020 CIP exige la cobertura amplia ICC (A), todo riesgo con exclusiones. CIF mantiene la mínima, ICC (C)."
  },
  {
    "id": "q-p02-023",
    "moduleId": "p02",
    "subtopicId": "p02-s3",
    "difficulty": 2,
    "prompt": "En FCA con entrega en el local del vendedor, ¿cómo se entrega la mercadería?",
    "options": [
      "Cargada en el vehículo del comprador",
      "Sobre el vehículo del vendedor, sin descargar",
      "Al costado del buque",
      "Descargada en destino"
    ],
    "answer": 0,
    "explanation": "Si el lugar es el local del vendedor, el vendedor carga. Si es otro lugar, entrega sobre su propio vehículo, lista para descargar."
  },
  {
    "id": "q-p02-024",
    "moduleId": "p02",
    "subtopicId": "p02-s3",
    "difficulty": 2,
    "prompt": "En FCA con entrega en la terminal de Montevideo, ¿quién descarga el camión del vendedor?",
    "options": [
      "El vendedor, siempre",
      "La DNA",
      "No el vendedor: entrega lista para descargar y la descarga es del lado del comprador",
      "El despachante del vendedor"
    ],
    "answer": 2,
    "explanation": "En FCA en otro lugar distinto del local del vendedor, el vendedor entrega sobre su vehículo, lista para descargar, a disposición del transportista. No descarga."
  },
  {
    "id": "q-p02-025",
    "moduleId": "p02",
    "subtopicId": "p02-s3",
    "difficulty": 2,
    "prompt": "¿Qué permite pactar FCA en la versión 2020 para facilitar el cobro con carta de crédito?",
    "options": [
      "Que el vendedor contrate el flete",
      "Que el seguro sea ICC (A)",
      "Que el riesgo pase en destino",
      "Que el comprador instruya a su transportista para emitir al vendedor un B/L con anotación a bordo"
    ],
    "answer": 3,
    "explanation": "Las cartas de crédito suelen exigir un B/L on board. Desde 2020 las partes pueden pactar en FCA que se emita al vendedor ese B/L."
  },
  {
    "id": "q-p02-026",
    "moduleId": "p02",
    "subtopicId": "p02-s3",
    "difficulty": 2,
    "prompt": "Una bodega vende vino CPT San Pablo y el camión vuelca en Rio Grande do Sul. ¿Quién soporta la pérdida?",
    "options": [
      "La bodega uruguaya, porque pagó el flete",
      "El transportista siempre",
      "El importador brasileño",
      "La aseguradora del vendedor"
    ],
    "answer": 2,
    "explanation": "En CPT el riesgo pasa al entregar al primer transportista en origen, aunque el vendedor pague el flete hasta destino."
  },
  {
    "id": "q-p02-027",
    "moduleId": "p02",
    "subtopicId": "p02-s3",
    "difficulty": 3,
    "prompt": "¿Cuál es la diferencia principal entre CIF y CIP en cuanto a riesgo y seguro?",
    "options": [
      "Son iguales, solo cambia el nombre",
      "CIF: riesgo a bordo y seguro ICC (C); CIP: riesgo al primer transportista y seguro ICC (A)",
      "CIF tiene seguro ICC (A) y CIP ICC (C)",
      "En CIP el riesgo pasa en destino"
    ],
    "answer": 1,
    "explanation": "CIF es marítimo, con riesgo a bordo y cobertura mínima (C). CIP sirve para cualquier modo, con riesgo al primer transportista y cobertura amplia (A)."
  },
  {
    "id": "q-p02-028",
    "moduleId": "p02",
    "subtopicId": "p02-s3",
    "difficulty": 1,
    "prompt": "¿Qué Incoterm es el “equivalente moderno” de FOB, apto para contenedores y aéreo?",
    "options": [
      "FCA",
      "FAS",
      "CPT",
      "DAP"
    ],
    "answer": 0,
    "explanation": "FCA cumple el papel de FOB pero con entrega al transportista, por eso sirve para cualquier modo y es la recomendada para contenedores."
  },
  {
    "id": "q-p02-029",
    "moduleId": "p02",
    "subtopicId": "p02-s3",
    "difficulty": 2,
    "prompt": "Un laboratorio exporta por Carrasco y el comprador tiene su propio forwarder. ¿Qué regla conviene?",
    "options": [
      "FCA Terminal de Cargas, Aeropuerto de Carrasco",
      "FOB Aeropuerto de Carrasco",
      "CIF aeropuerto de destino",
      "FAS Carrasco"
    ],
    "answer": 0,
    "explanation": "Si el comprador contrata el flete aéreo, FCA con la terminal de cargas como lugar de entrega. FOB, CIF y FAS no sirven para aéreo."
  },
  {
    "id": "q-p02-030",
    "moduleId": "p02",
    "subtopicId": "p02-s3",
    "difficulty": 3,
    "prompt": "En CIP, ¿pueden las partes pactar una cobertura menor que ICC (A)?",
    "options": [
      "No, nunca",
      "Sí, pero tienen que decirlo expresamente",
      "Solo si el transporte es marítimo",
      "Solo si lo autoriza la aduana de destino"
    ],
    "answer": 1,
    "explanation": "El mínimo de CIP es ICC (A), pero las partes pueden acordar otra cobertura siempre que lo indiquen expresamente en el contrato."
  },
  {
    "id": "q-p02-031",
    "moduleId": "p02",
    "subtopicId": "p02-s3",
    "difficulty": 2,
    "prompt": "Al cotizar una venta CIP, ¿cuál es un error frecuente del vendedor?",
    "options": [
      "Incluir el flete hasta destino",
      "Despachar la exportación",
      "Cotizar el seguro como si fuera CIF, con cobertura ICC (C)",
      "Entregar al primer transportista"
    ],
    "answer": 2,
    "explanation": "En CIP el seguro es más amplio (ICC A) y por lo tanto más caro. Cotizarlo como en CIF deja al vendedor incumpliendo o perdiendo margen."
  },
  {
    "id": "q-p02-032",
    "moduleId": "p02",
    "subtopicId": "p02-s4",
    "difficulty": 1,
    "prompt": "¿En qué Incoterm el vendedor está obligado a descargar en destino?",
    "options": [
      "DAP",
      "DDP",
      "CIP",
      "DPU"
    ],
    "answer": 3,
    "explanation": "DPU es el único Incoterm con descarga obligatoria a cargo del vendedor."
  },
  {
    "id": "q-p02-033",
    "moduleId": "p02",
    "subtopicId": "p02-s4",
    "difficulty": 1,
    "prompt": "En DDP, ¿quién paga el IVA de importación en el país de destino?",
    "options": [
      "El comprador",
      "Se reparte por mitades",
      "El vendedor",
      "Nadie: DDP está exento"
    ],
    "answer": 2,
    "explanation": "DDP incluye el despacho de importación y los tributos (“duty paid”), incluido el IVA, que muchas veces el vendedor no puede recuperar."
  },
  {
    "id": "q-p02-034",
    "moduleId": "p02",
    "subtopicId": "p02-s4",
    "difficulty": 2,
    "prompt": "¿Por qué EXW es problemático para exportar desde Uruguay?",
    "options": [
      "Porque obliga al comprador a despachar la exportación y el exportador ante la DNA debe tener RUT registrado",
      "Porque está prohibido por el CAROU",
      "Porque obliga al vendedor a pagar el flete",
      "Porque solo sirve para aéreo"
    ],
    "answer": 0,
    "explanation": "Un comprador extranjero normalmente no puede despachar una exportación en Uruguay. Por eso la ICC sugiere FCA en lugar de EXW cuando hay exportación."
  },
  {
    "id": "q-p02-035",
    "moduleId": "p02",
    "subtopicId": "p02-s4",
    "difficulty": 2,
    "prompt": "En DAP, ¿cómo entrega el vendedor?",
    "options": [
      "En destino, descargada y despachada",
      "En su local, sin cargar",
      "A bordo del buque en origen",
      "En destino, sobre el medio de transporte, lista para descargar y sin despachar la importación"
    ],
    "answer": 3,
    "explanation": "DAP lleva costo y riesgo hasta el lugar de destino, pero el vendedor no descarga ni hace la importación."
  },
  {
    "id": "q-p02-036",
    "moduleId": "p02",
    "subtopicId": "p02-s4",
    "difficulty": 2,
    "prompt": "¿Cuál es un riesgo práctico típico de DAP en el comercio por camión?",
    "options": [
      "Que el vendedor deba pagar el IVA en destino",
      "Que el comprador no tenga lista la importación y el camión quede retenido con estadías",
      "Que el riesgo pase en origen",
      "Que no se pueda usar con camión"
    ],
    "answer": 1,
    "explanation": "Si el comprador no tiene listo su despacho, el camión espera en destino y las partes discuten estadías y demoras."
  },
  {
    "id": "q-p02-037",
    "moduleId": "p02",
    "subtopicId": "p02-s4",
    "difficulty": 2,
    "prompt": "Con EXW, ¿está obligado el vendedor a cargar la mercadería en el vehículo del comprador?",
    "options": [
      "Sí, siempre",
      "No: solo la pone a disposición en su local, sin cargar",
      "Sí, si el comprador lo pide verbalmente",
      "Solo con contenedores"
    ],
    "answer": 1,
    "explanation": "EXW es la mínima obligación: el vendedor pone la mercadería a disposición sin cargarla. Esperar que cargue es un error típico."
  },
  {
    "id": "q-p02-038",
    "moduleId": "p02",
    "subtopicId": "p02-s4",
    "difficulty": 3,
    "prompt": "Una empresa de Montevideo recibe una factura DDP Montevideo. ¿Qué hace el despachante para llegar al valor en aduana?",
    "options": [
      "Suma flete y seguro",
      "Usa el valor tal cual",
      "Suma la carga en origen",
      "Resta los gastos posteriores a la llegada, incluidos los tributos"
    ],
    "answer": 3,
    "explanation": "El valor en aduana es base CIF. En DAP, DPU y DDP hay que restar lo que corresponde a gastos posteriores a la llegada; en DDP, también los tributos."
  },
  {
    "id": "q-p02-039",
    "moduleId": "p02",
    "subtopicId": "p02-s4",
    "difficulty": 2,
    "prompt": "¿Cuál es el principal riesgo de DDP para un exportador uruguayo?",
    "options": [
      "No poder actuar como importador en el país de destino y pagar un IVA que no recupera",
      "Perder el control del flete",
      "No poder despachar la exportación",
      "Que el comprador asuma el riesgo en origen"
    ],
    "answer": 0,
    "explanation": "En DDP el vendedor hace la importación en destino: necesita alguien habilitado allá y suele pagar un IVA que no puede descontar."
  },
  {
    "id": "q-p02-040",
    "moduleId": "p02",
    "subtopicId": "p02-s4",
    "difficulty": 1,
    "prompt": "¿En cuál de estos Incoterms hay obligación de contratar seguro?",
    "options": [
      "En DDP",
      "En DPU",
      "En ninguno de EXW, DAP, DPU o DDP",
      "En EXW"
    ],
    "answer": 2,
    "explanation": "En EXW y en las reglas D nadie está obligado a asegurar: cada parte asegura por interés propio. Solo CIF y CIP obligan a asegurar."
  },
  {
    "id": "q-p02-041",
    "moduleId": "p02",
    "subtopicId": "p02-s4",
    "difficulty": 3,
    "prompt": "¿Qué significa “DAP Paso de los Libres” en una venta por camión del MERCOSUR?",
    "options": [
      "El comprador retira en Paso de los Libres con la importación pagada por el vendedor",
      "El vendedor descarga en la frontera",
      "El riesgo pasa en el local del vendedor",
      "El vendedor asume costo y riesgo hasta ese punto de frontera, sin descargar ni despachar la importación"
    ],
    "answer": 3,
    "explanation": "En DAP el lugar convenido es el de entrega en destino. Con un punto de frontera, el vendedor lleva la carga hasta allí, lista para descargar, sin hacer la importación."
  },
  {
    "id": "q-p02-042",
    "moduleId": "p02",
    "subtopicId": "p02-s5",
    "difficulty": 2,
    "prompt": "Un cliente dice “vendo FOB Montevideo” una carga en contenedor. ¿Qué le recomendás?",
    "options": [
      "Mantener FOB, es lo estándar",
      "Pasar a FAS",
      "Pasar a FCA con la terminal o el depósito como lugar de entrega",
      "Pasar a EXW"
    ],
    "answer": 2,
    "explanation": "Con FOB el riesgo sigue en el vendedor hasta que el contenedor sube al buque. FCA hace pasar el riesgo al entregar en la terminal, y en 2020 se puede pactar el B/L a bordo."
  },
  {
    "id": "q-p02-043",
    "moduleId": "p02",
    "subtopicId": "p02-s5",
    "difficulty": 1,
    "prompt": "¿Qué Incoterms obligan al vendedor a contratar seguro?",
    "options": [
      "CFR y CPT",
      "Solo CIF y CIP",
      "Todos los de la familia D",
      "FOB y FCA"
    ],
    "answer": 1,
    "explanation": "Solo CIF (ICC C) y CIP (ICC A) obligan a asegurar. En el resto, la decisión de asegurar es de quien corre el riesgo."
  },
  {
    "id": "q-p02-044",
    "moduleId": "p02",
    "subtopicId": "p02-s5",
    "difficulty": 2,
    "prompt": "La factura dice CIF y el B/L dice “freight collect”. ¿Qué indica?",
    "options": [
      "Una incoherencia: en CIF el flete lo paga el vendedor y debería decir freight prepaid",
      "Que todo está correcto",
      "Que el seguro es ICC (A)",
      "Que el riesgo pasa en destino"
    ],
    "answer": 0,
    "explanation": "El Incoterm debe coincidir con el flete del B/L. Freight collect es típico de FOB o FCA, no de CIF. Hay que aclararlo antes de presentar documentos."
  },
  {
    "id": "q-p02-045",
    "moduleId": "p02",
    "subtopicId": "p02-s5",
    "difficulty": 2,
    "prompt": "Para carga a granel que se embarca directamente en bodega y el comprador fleta el buque, ¿qué regla es correcta?",
    "options": [
      "FOB puerto de embarque",
      "CPT puerto de destino",
      "DDP destino",
      "CIP destino"
    ],
    "answer": 0,
    "explanation": "Para graneles o carga convencional que se entrega a bordo, con flete a cargo del comprador, FOB es una elección correcta."
  },
  {
    "id": "q-p02-046",
    "moduleId": "p02",
    "subtopicId": "p02-s5",
    "difficulty": 3,
    "prompt": "¿Qué cubre el ICC (B) además de lo que cubre el ICC (C)?",
    "options": [
      "Robo y rotura común",
      "Por ejemplo, terremoto y entrada de agua de mar o de río",
      "Vicio propio y demora",
      "Embalaje insuficiente"
    ],
    "answer": 1,
    "explanation": "Las cláusulas (B) son intermedias: suman a la (C) riesgos como terremoto y entrada de agua de mar o río. El robo y la rotura común los cubre la (A)."
  },
  {
    "id": "q-p02-047",
    "moduleId": "p02",
    "subtopicId": "p02-s5",
    "difficulty": 2,
    "prompt": "¿Qué Incoterms se usan habitualmente en el comercio por camión dentro del MERCOSUR?",
    "options": [
      "FOB, CFR y CIF",
      "FAS y FOB",
      "FCA, CPT y DAP",
      "Solo EXW"
    ],
    "answer": 2,
    "explanation": "En el transporte terrestre del MERCOSUR son habituales FCA, CPT y DAP, a veces con un punto de frontera."
  }
]
