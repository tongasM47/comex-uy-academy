import type { CaseStudy } from '../types'

export const p10p12Cases: CaseStudy[] = [
  {
    id: "c-p11-01",
    moduleId: "p11",
    title: "Nuevo comprador: Brasil o China",
    difficulty: 2,
    scenario: "Una bodega de Canelones consiguió dos compradores nuevos para su vino. El primero es una distribuidora de Porto Alegre que conocieron en una feria, con referencias comerciales verificables, que pide pagar a 60 días. El segundo es un importador de Shanghái que encontró la bodega por internet, sin historial con ella, que ofrece pagar a la vista pero no quiere adelantar nada. Te piden que propongas el medio de pago para cada uno.",
    data: [
      { label: "Operación Brasil", value: "USD 18.000, primera venta, buenas referencias, pide 60 días" },
      { label: "Operación China", value: "USD 60.000, primera venta, sin referencias, rechaza anticipo" },
      { label: "Banco de la bodega", value: "BROU" }
    ],
    steps: [
      {
        kind: "mcq",
        prompt: "Para el importador chino, sin historial y que rechaza el anticipo, ¿qué medio protege mejor a la bodega?",
        options: [
          "Cuenta abierta a 60 días",
          "Cobranza D/A a 90 días",
          "Enviar la mercadería consignada al importador y facturar al llegar",
          "Carta de crédito irrevocable a la vista, confirmada por un banco uruguayo o de primera línea"
        ],
        answer: 3,
        solution: "Primera operación, monto relevante, comprador desconocido y lejano: es el caso típico de carta de crédito. La confirmación agrega el compromiso de un banco que la bodega conoce y cubre el riesgo del banco emisor y el riesgo país. La cuenta abierta y la D/A dejan todo el riesgo del lado del exportador."
      },
      {
        kind: "mcq",
        prompt: "Para la distribuidora de Porto Alegre, que tiene buenas referencias y pide 60 días, ¿qué opción equilibra riesgo y relación comercial?",
        options: [
          "Cobranza D/A a 60 días o cuenta abierta con seguro de crédito",
          "Exigir carta de crédito confirmada igual que a China",
          "Pago anticipado del 100%",
          "Cobranza limpia sin documentos comerciales"
        ],
        answer: 0,
        solution: "El comprador pide plazo y tiene referencias: una D/A le da el plazo pero deja una letra aceptada (idealmente avalada), y la cuenta abierta con seguro de crédito es aún más ágil. Exigir una carta de crédito confirmada por USD 18.000 a un cliente con buenas referencias puede encarecer y trabar la relación."
      },
      {
        kind: "open",
        prompt: "¿Qué cláusula conviene incluir en la proforma para China respecto de la carta de crédito, antes de que el importador la pida a su banco?",
        solution: "Pedir que el crédito sea irrevocable, a la vista, sujeto a UCP 600, confirmado por un banco aceptable para la bodega, con fecha de embarque y vencimiento realistas y una lista de documentos que la bodega pueda cumplir. Conviene mandar al comprador un borrador de los términos para evitar enmiendas después. También aclarar quién paga la confirmación."
      },
      {
        kind: "mcq",
        prompt: "Si el importador chino finalmente acepta un anticipo, ¿qué opción de gastos de la transferencia le pedirías para recibir el monto completo?",
        options: ["BEN", "SHA", "OUR", "Es indistinto"],
        answer: 2,
        solution: "Con OUR el ordenante paga todos los gastos y el beneficiario recibe el monto íntegro. Con SHA o BEN los intermediarios pueden descontar comisiones del monto."
      }
    ]
  },
  {
    id: "c-p11-02",
    moduleId: "p11",
    title: "Carta de crédito: presentación tardía",
    difficulty: 3,
    scenario: "Un exportador de tops de lana tiene una carta de crédito confirmada por un banco uruguayo, sujeta a UCP 600. El crédito no fija un plazo especial de presentación. La fecha máxima de embarque es el 10/10 y el crédito vence el 30/10. El B/L indica embarque el 08/10. Por demoras internas, el exportador presenta los documentos el 02/11. Además, la factura dice “Wool tops 21,5 micron” y el crédito dice “Merino wool tops 21.5 micron”.",
    data: [
      { label: "Fecha de embarque (B/L)", value: "08/10" },
      { label: "Fecha máxima de embarque", value: "10/10" },
      { label: "Vencimiento del crédito", value: "30/10" },
      { label: "Fecha de presentación", value: "02/11" }
    ],
    steps: [
      {
        kind: "numeric",
        prompt: "¿Cuántos días calendario pasaron entre el embarque (08/10) y la presentación (02/11)?",
        answer: 25,
        tolerance: 0,
        unit: "días",
        solution: "Del 08/10 al 31/10 hay 23 días, más 2 días de noviembre: 25 días. Supera los 21 días que permite el art. 14(c) cuando el crédito no fija otro plazo."
      },
      {
        kind: "mcq",
        prompt: "¿Cuál era el último día válido para presentar?",
        options: ["El 30/10, vencimiento del crédito", "El 10/10, fecha máxima de embarque", "El 29/10, 21 días después del embarque", "El 06/11, 5 días hábiles después del vencimiento"],
        answer: 2,
        solution: "Se aplican dos límites a la vez: 21 días desde el embarque (08/10 + 21 = 29/10) y el vencimiento (30/10). Vale el que llega primero: el 29/10. Los 5 días hábiles son el plazo del banco para examinar, no del exportador para presentar."
      },
      {
        kind: "mcq",
        prompt: "¿La diferencia en la descripción de la mercadería es una discrepancia?",
        options: [
          "No, porque es la misma mercadería",
          "Sí, porque en la factura la descripción debe corresponder a la del crédito y se omitió “Merino”",
          "Solo si el B/L también omite la palabra",
          "No, porque la factura no necesita firma"
        ],
        answer: 1,
        solution: "En la factura comercial la descripción tiene que corresponder a la del crédito (art. 14). Omitir una característica es una discrepancia probable; en otros documentos la descripción puede ser general."
      },
      {
        kind: "open",
        prompt: "¿Qué puede hacer el exportador ahora y qué debería haber hecho para evitarlo?",
        solution: "Ahora: el confirmador no está obligado a pagar y enviará un único aviso con todas las discrepancias. El exportador puede pedir que los documentos vayan al emisor para que el ordenante acepte las discrepancias (waiver); el cobro queda a voluntad del importador, como una cobranza. Prevención: agendar fecha máxima de embarque, día 21 y vencimiento; copiar literalmente la descripción del crédito en la factura; y pedir una enmienda de prórroga antes de que fuera tarde."
      }
    ]
  },
  {
    id: "c-p11-03",
    moduleId: "p11",
    title: "D/P o D/A: ¿cuánto riesgo asumir?",
    difficulty: 2,
    scenario: "Un exportador uruguayo de cueros vende USD 40.000 a un importador de Egipto, con quien hizo dos operaciones chicas que se pagaron bien. El importador pide documentos contra aceptación a 90 días; el exportador prefiere documentos contra pago. La mercadería viaja por mar con B/L original a la orden.",
    data: [
      { label: "Monto", value: "USD 40.000" },
      { label: "Propuesta del importador", value: "Cobranza D/A a 90 días" },
      { label: "Propuesta del exportador", value: "Cobranza D/P a la vista" }
    ],
    steps: [
      {
        kind: "mcq",
        prompt: "En una cobranza D/A, ¿cuándo puede el importador retirar la mercadería?",
        options: ["Después de pagar", "Después de aceptar la letra, antes de pagar", "Solo cuando el banco presentador garantice el pago", "Después de que el exportador confirme por mail"],
        answer: 1,
        solution: "En D/A el banco presentador entrega los documentos (incluido el B/L) contra la aceptación de la letra. El importador retira la carga y paga al vencimiento. Por eso el riesgo del exportador es mayor que en D/P."
      },
      {
        kind: "mcq",
        prompt: "Si se acepta la D/A, ¿qué medida reduce más el riesgo de impago?",
        options: ["Pedir que un banco avale la letra", "Usar la opción de gastos OUR", "Enviar el B/L directamente al importador", "Declarar un valor menor en la factura"],
        answer: 0,
        solution: "Con aval bancario la letra queda garantizada por un banco y además se vuelve descontable (forfaiting). OUR solo define quién paga comisiones. Mandar el B/L directo elimina la protección. Subvaluar la factura es ilegal."
      },
      {
        kind: "mcq",
        prompt: "El importador aceptó la letra, retiró la carga y al vencimiento no paga. ¿Qué responsabilidad tiene el banco presentador bajo la URC 522?",
        options: ["Debe pagar porque entregó los documentos", "Debe pagar el 50%", "Debe recuperar la mercadería", "Ninguna de pago: actuó como mandatario y cumplió la instrucción"],
        answer: 3,
        solution: "En la cobranza los bancos no garantizan el pago. Si la instrucción lo previó, se puede protestar la letra; además, gestión de cobro y, si se contrató, reclamo al seguro de crédito."
      },
      {
        kind: "open",
        prompt: "En D/P, ¿qué riesgo sigue teniendo el exportador y cómo lo mitigarías?",
        solution: "Que el importador no retire los documentos: la mercadería queda en el puerto de destino generando almacenaje y demoras de contenedor, y hay que revender, reembarcar o abandonar. Se mitiga con un anticipo parcial que cubra al menos el flete de retorno, verificando antes al comprador, o con un seguro de crédito."
      }
    ]
  },
  {
    id: "c-p11-04",
    moduleId: "p11",
    title: "OUR, SHA y BEN con números",
    difficulty: 2,
    scenario: "Un importador de Montevideo paga USD 10.000 a un proveedor de herramientas en China. Las comisiones (ficticias, para practicar) son: banco del importador USD 40, banco intermediario en Nueva York USD 25 y banco del proveedor USD 15.",
    data: [
      { label: "Monto de la factura", value: "USD 10.000" },
      { label: "Comisión banco ordenante", value: "USD 40" },
      { label: "Comisión intermediario", value: "USD 25" },
      { label: "Comisión banco beneficiario", value: "USD 15" }
    ],
    steps: [
      {
        kind: "numeric",
        prompt: "Con opción OUR, ¿cuánto le debitan en total al importador?",
        answer: 10080,
        tolerance: 0,
        unit: "USD",
        solution: "Con OUR el ordenante paga todas las comisiones: 10.000 + 40 + 25 + 15 = USD 10.080, y el proveedor recibe USD 10.000."
      },
      {
        kind: "numeric",
        prompt: "Con opción SHA, ¿cuánto recibe el proveedor chino?",
        answer: 9960,
        tolerance: 0,
        unit: "USD",
        solution: "Con SHA el ordenante paga la comisión de su banco (USD 40, aparte) y al monto se le descuentan las del intermediario y el banco del beneficiario: 10.000 − 25 − 15 = USD 9.960."
      },
      {
        kind: "numeric",
        prompt: "Con opción BEN, ¿cuánto recibe el proveedor?",
        answer: 9920,
        tolerance: 0,
        unit: "USD",
        solution: "Con BEN el beneficiario paga todo: 10.000 − 40 − 25 − 15 = USD 9.920. Al importador le debitan solo USD 10.000."
      },
      {
        kind: "mcq",
        prompt: "El proveedor reclama que le llegó menos. ¿Qué le pedís al banco para rastrear la transferencia?",
        options: ["El UETR de SWIFT gpi y el comprobante pacs.008 (el “MT103”)", "El DUA de importación", "La carta de crédito MT700", "El certificado de origen"],
        answer: 0,
        solution: "El UETR permite seguir la transferencia de punta a punta y ver qué banco descontó qué. Mucha gente sigue llamando “MT103” al comprobante, aunque desde el 22/11/2025 el mensaje equivalente es el pacs.008."
      }
    ]
  },
  {
    id: "c-p10-01",
    moduleId: "p10",
    title: "Vino uruguayo a México y a la Unión Europea",
    difficulty: 2,
    scenario: "Una bodega de Canelones quiere exportar vino tinto en octubre de 2026 a dos destinos: un distribuidor de Ciudad de México y un importador de Rotterdam. Te pide que le digas qué acuerdo comercial le da preferencia en cada caso y qué tiene que tener en cuenta con el origen.",
    data: [
      { label: "Producto", value: "Vino tinto embotellado" },
      { label: "Destino 1", value: "México" },
      { label: "Destino 2", value: "Países Bajos (Unión Europea)" },
      { label: "Fecha", value: "Octubre de 2026" }
    ],
    steps: [
      {
        kind: "mcq",
        prompt: "¿Qué acuerdo invoca la bodega para exportar a México?",
        options: ["ACE 18 (MERCOSUR)", "ACE 35", "ACE 60, TLC Uruguay–México", "Ninguno: México no tiene acuerdo con Uruguay"],
        answer: 2,
        solution: "El TLC bilateral Uruguay–México está registrado en ALADI como ACE 60, vigente desde el 15/07/2004. El ACE 18 es intra-MERCOSUR y el ACE 35 es MERCOSUR–Chile."
      },
      {
        kind: "mcq",
        prompt: "¿Qué instrumento da preferencias para exportar a la Unión Europea en octubre de 2026?",
        options: [
          "El SGP de la UE, del que Uruguay es beneficiario",
          "El Acuerdo Comercial Interino MERCOSUR–UE, en aplicación provisional desde el 1/5/2026",
          "El EMPA, ya ratificado por los 27 Estados miembros",
          "El TLC MERCOSUR–EFTA"
        ],
        answer: 1,
        solution: "El iTA se aplica provisionalmente desde el 1/5/2026. Uruguay dejó de ser beneficiario del SGP europeo en 2014; el EMPA sigue en ratificación; y EFTA (Suiza, Noruega, Islandia, Liechtenstein) no es la UE."
      },
      {
        kind: "mcq",
        prompt: "¿Cómo se acredita el origen para la UE según lo que destaca el MRREE?",
        options: [
          "El acuerdo permite la autocertificación del origen por el exportador",
          "Con certificado ACE 18",
          "No hace falta acreditar origen",
          "Con un certificado emitido por la Comisión Europea"
        ],
        answer: 0,
        solution: "El acuerdo con la UE prevé la autocertificación: el exportador declara el origen en un documento comercial, con una transición desde los certificados emitidos por entidades. Las reglas de origen específicas por producto se siguen aplicando."
      },
      {
        kind: "open",
        prompt: "¿Qué riesgo jurídico en la UE conviene mencionarle al cliente sobre el acuerdo, a octubre de 2026?",
        solution: "Que la aplicación es provisional: el Parlamento Europeo pidió un dictamen al TJUE el 21/01/2026, que sigue pendiente, y Polonia presentó un recurso de anulación. El 29/09/2026 el TJUE rechazó las medidas cautelares de Polonia (C-460/26 R), así que la aplicación continúa, pero el fondo no está resuelto. Conviene seguir las novedades del MRREE."
      }
    ]
  },
  {
    id: "c-p12-01",
    moduleId: "p12",
    title: "Peso volumétrico en un envío aéreo",
    difficulty: 1,
    scenario: "Un laboratorio exporta desde Carrasco un envío de muestras en 4 cajas de 60 × 50 × 40 cm, cada una de 12 kg. La aerolínea usa el divisor IATA estándar y cobra una tarifa ficticia de USD 3,20 por kg, sin contar recargos.",
    data: [
      { label: "Cajas", value: "4 de 60 × 50 × 40 cm" },
      { label: "Peso real por caja", value: "12 kg" },
      { label: "Divisor", value: "6000" },
      { label: "Tarifa", value: "USD 3,20 por kg (ficticia)" }
    ],
    steps: [
      {
        kind: "numeric",
        prompt: "¿Cuál es el peso volumétrico total del envío?",
        answer: 80,
        tolerance: 0,
        unit: "kg",
        solution: "Por caja: 60 × 50 × 40 = 120.000 cm³ ÷ 6000 = 20 kg. Total: 4 × 20 = 80 kg."
      },
      {
        kind: "numeric",
        prompt: "¿Cuál es el peso facturable?",
        answer: 80,
        tolerance: 0,
        unit: "kg",
        solution: "Peso real: 4 × 12 = 48 kg. Se factura el mayor entre real y volumétrico: 80 kg."
      },
      {
        kind: "numeric",
        prompt: "¿Cuánto cuesta el flete básico?",
        answer: 256,
        tolerance: 0,
        unit: "USD",
        solution: "80 kg × USD 3,20 = USD 256, más recargos de combustible y seguridad."
      },
      {
        kind: "mcq",
        prompt: "Si el envío fuera por un courier que usa divisor 5000, ¿qué pasaría con el peso facturable?",
        options: ["Bajaría a 48 kg", "Quedaría en 80 kg", "Bajaría a 64 kg", "Subiría a 96 kg"],
        answer: 3,
        solution: "120.000 ÷ 5000 = 24 kg por caja; 4 × 24 = 96 kg. Un divisor menor da más peso volumétrico: por eso conviene preguntar qué divisor usa cada transportista."
      }
    ]
  },
  {
    id: "c-p12-02",
    moduleId: "p12",
    title: "¿FCL o LCL?",
    difficulty: 2,
    scenario: "Un importador de Montevideo trae desde Shanghái una carga de 14 m³ y 3 toneladas. Recibe dos cotizaciones (ficticias): LCL a USD 70 por W/M más USD 25 por W/M de desconsolidación en destino; o FCL en un 20' a USD 1.300 de flete más USD 250 de THC en destino.",
    data: [
      { label: "Volumen", value: "14 m³" },
      { label: "Peso", value: "3 t" },
      { label: "LCL", value: "USD 70/W/M + USD 25/W/M desconsolidación" },
      { label: "FCL 20'", value: "USD 1.300 flete + USD 250 THC destino" }
    ],
    steps: [
      {
        kind: "numeric",
        prompt: "¿Cuántos W/M se cobran en LCL?",
        answer: 14,
        tolerance: 0,
        unit: "W/M",
        solution: "W/M es el mayor entre toneladas (3) y m³ (14), con 1 t = 1 m³: 14."
      },
      {
        kind: "numeric",
        prompt: "¿Cuál es el costo total en LCL?",
        answer: 1330,
        tolerance: 0,
        unit: "USD",
        solution: "(70 + 25) × 14 = USD 1.330."
      },
      {
        kind: "numeric",
        prompt: "¿Cuál es el costo total en FCL?",
        answer: 1550,
        tolerance: 0,
        unit: "USD",
        solution: "1.300 + 250 = USD 1.550. El LCL es USD 220 más barato."
      },
      {
        kind: "numeric",
        prompt: "Si la carga creciera a 16 m³ (mismo peso), ¿cuánto costaría el LCL?",
        answer: 1520,
        tolerance: 0,
        unit: "USD",
        solution: "95 × 16 = USD 1.520, prácticamente igual que el FCL (USD 1.550). A partir de ahí el FCL, con menos manipulación y riesgo, pasa a ser la opción natural."
      },
      {
        kind: "open",
        prompt: "Además del precio, ¿qué factores pesan en la decisión?",
        solution: "El FCL implica menos manipulación (se precinta en origen), menos riesgo de daño o faltantes y no depende de otros embarcadores para consolidar o desconsolidar. El LCL suma tiempos de consolidación y desconsolidación en depósito. También hay que considerar las demoras de contenedor en FCL si no se devuelve a tiempo, y siempre comparar el costo puerta a puerta."
      }
    ]
  },
  {
    id: "c-p12-03",
    moduleId: "p12",
    title: "Flete, recargos y demoras de contenedor",
    difficulty: 3,
    scenario: "Una importadora de electrodomésticos recibe en TCP un contenedor de 40'. La cotización (ficticia) fue: flete básico USD 2.000, BAF del 15% sobre el flete y THC de destino USD 280. La naviera da 7 días libres; por un canal rojo y demoras en el pago de tributos, el contenedor vacío se devuelve el día 11. La detention cuesta USD 60 por día.",
    data: [
      { label: "Flete básico", value: "USD 2.000" },
      { label: "BAF", value: "15% del flete" },
      { label: "THC destino", value: "USD 280" },
      { label: "Días libres / devolución", value: "7 / día 11" },
      { label: "Detention", value: "USD 60 por día" }
    ],
    steps: [
      {
        kind: "numeric",
        prompt: "¿Cuánto es el BAF?",
        answer: 300,
        tolerance: 0,
        unit: "USD",
        solution: "0,15 × 2.000 = USD 300."
      },
      {
        kind: "numeric",
        prompt: "¿Cuánto se paga de detention?",
        answer: 240,
        tolerance: 0,
        unit: "USD",
        solution: "(11 − 7) × 60 = USD 240."
      },
      {
        kind: "numeric",
        prompt: "¿Cuál es el costo total de flete, recargos y detention?",
        answer: 2820,
        tolerance: 0,
        unit: "USD",
        solution: "2.000 + 300 + 280 + 240 = USD 2.820."
      },
      {
        kind: "mcq",
        prompt: "El contenedor estuvo fuera de la terminal, en el depósito de la importadora, más días de los permitidos. ¿Cómo se llama ese cargo?",
        options: ["Demurrage", "Detention", "THC", "PSS"],
        answer: 1,
        solution: "Detention es el cargo por tener el contenedor fuera de la terminal más allá de lo pactado. Demurrage es cuando el contenedor lleno se queda dentro de la terminal."
      },
      {
        kind: "open",
        prompt: "¿Qué medidas habrían evitado o reducido ese costo?",
        solution: "Tener la documentación completa y los fondos para tributos listos antes del arribo, negociar días libres extra con la naviera o el forwarder, coordinar con la terminal la verificación en caso de canal rojo y planificar el retiro y la devolución del contenedor."
      }
    ]
  }
]
