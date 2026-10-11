import type { Question } from '../types'

export const p11Questions: Question[] = [
  {
    id: "q-p11-001",
    moduleId: "p11",
    subtopicId: "p11-s1",
    difficulty: 1,
    prompt: "Para el exportador, ¿cuál es el orden correcto de menor a mayor riesgo?",
    options: [
      "Cuenta abierta, cobranza, CC, anticipado",
      "CC, anticipado, cuenta abierta, cobranza",
      "Anticipado, CC confirmada, cobranza D/P, cobranza D/A, cuenta abierta",
      "Cobranza D/A, D/P, CC, anticipado"
    ],
    answer: 2,
    explanation: "Es la escalera de riesgo: cuanto antes cobra el exportador y más bancos se comprometen, menos riesgo corre. Para el importador el orden es exactamente el inverso."
  },
  {
    id: "q-p11-002",
    moduleId: "p11",
    subtopicId: "p11-s1",
    difficulty: 1,
    prompt: "¿Qué medio de pago es el más riesgoso para el importador?",
    options: [
      "El pago anticipado",
      "La cuenta abierta",
      "La cobranza D/A",
      "La carta de crédito confirmada"
    ],
    answer: 0,
    explanation: "En el pago anticipado el importador transfiere antes del embarque: si la mercadería no llega o llega mal, el que perdió es él."
  },
  {
    id: "q-p11-003",
    moduleId: "p11",
    subtopicId: "p11-s1",
    difficulty: 1,
    prompt: "¿Qué medio de pago tiene el costo bancario más alto?",
    options: [
      "La transferencia en cuenta abierta",
      "El pago anticipado",
      "La cobranza simple",
      "La carta de crédito"
    ],
    answer: 3,
    explanation: "La carta de crédito implica compromiso de pago y examen de documentos por parte de los bancos, y eso se cobra. La transferencia es la más barata."
  },
  {
    id: "q-p11-004",
    moduleId: "p11",
    subtopicId: "p11-s1",
    difficulty: 2,
    prompt: "Una hilandería brasileña le compra lana a un exportador uruguayo hace cinco años y siempre pagó a tiempo. ¿Qué medio es el habitual?",
    options: [
      "Carta de crédito confirmada en cada embarque",
      "Cuenta abierta por transferencia, eventualmente con seguro de crédito",
      "Pago anticipado del 100%",
      "Cobranza D/A con protesto obligatorio"
    ],
    answer: 1,
    explanation: "Con una relación consolidada lo normal es la cuenta abierta: barata y ágil. Si el monto crece, un seguro de crédito reduce el riesgo sin pasar a instrumentos bancarios caros."
  },
  {
    id: "q-p11-005",
    moduleId: "p11",
    subtopicId: "p11-s1",
    difficulty: 2,
    prompt: "¿Qué controles bancarios vas a encontrar al pagar una importación en Uruguay?",
    options: [
      "Autorización previa del BCU para comprar dólares",
      "Controles de prevención de lavado de activos que exigen respaldo documental, sin controles de cambio",
      "Obligación de ingresar divisas en 30 días",
      "Un cupo anual de divisas por empresa"
    ],
    answer: 1,
    explanation: "Uruguay tiene libertad cambiaria. Lo que sí existe es la normativa de prevención de lavado (Ley 19.574): los bancos piden factura, DUA o contrato para conocer al cliente y el origen de fondos."
  },
  {
    id: "q-p11-006",
    moduleId: "p11",
    subtopicId: "p11-s1",
    difficulty: 2,
    prompt: "¿Qué instrumento funciona como garantía y solo se cobra si el ordenante incumple?",
    options: [
      "La cobranza D/P",
      "La transferencia OUR",
      "La carta de crédito a la vista",
      "La carta de crédito stand-by"
    ],
    answer: 3,
    explanation: "La stand-by se ejecuta presentando una declaración de incumplimiento. Se rige por ISP98 o UCP 600 y se usa, por ejemplo, para garantizar pagos en cuenta abierta."
  },
  {
    id: "q-p11-007",
    moduleId: "p11",
    subtopicId: "p11-s1",
    difficulty: 3,
    prompt: "Primera venta de USD 45.000 a un distribuidor colombiano desconocido que rechaza el anticipo. ¿Qué alternativa equilibrada propone la investigación si la carta de crédito resulta cara?",
    options: [
      "Un anticipo parcial (30%) y el saldo por cobranza D/P",
      "Cuenta abierta a 90 días sin garantía",
      "Cobranza D/A a 180 días",
      "Enviar la mercadería y facturar después del despacho"
    ],
    answer: 0,
    explanation: "El anticipo parcial cubre al menos el flete de retorno si el importador no retira los documentos, y la cobranza D/P evita entregar el B/L sin pago. La primera opción sigue siendo una carta de crédito confirmada."
  },
  {
    id: "q-p11-008",
    moduleId: "p11",
    subtopicId: "p11-s1",
    difficulty: 1,
    prompt: "¿Qué reglas de la ICC rigen la cobranza documentaria?",
    options: [
      "UCP 600",
      "ISP98",
      "URC 522",
      "URDG 758"
    ],
    answer: 2,
    explanation: "URC 522 = cobranzas. UCP 600 = cartas de crédito. ISP98 = stand-by. URDG 758 = garantías a primer requerimiento."
  },
  {
    id: "q-p11-009",
    moduleId: "p11",
    subtopicId: "p11-s1",
    difficulty: 2,
    prompt: "¿Qué es el factoring?",
    options: [
      "Un seguro que cubre la mercadería en tránsito",
      "Una carta de crédito transferible",
      "El pago anticipado de los tributos aduaneros",
      "Vender las facturas a cobrar a una entidad financiera para cobrar antes, con descuento"
    ],
    answer: 3,
    explanation: "Con el factoring el exportador adelanta el cobro de sus créditos. Junto con el seguro de crédito, es lo que hace más tolerable vender en cuenta abierta."
  },
  {
    id: "q-p11-010",
    moduleId: "p11",
    subtopicId: "p11-s1",
    difficulty: 2,
    prompt: "¿En qué moneda se pactan la mayoría de las operaciones de comex en Uruguay?",
    options: [
      "En pesos uruguayos, por obligación legal",
      "En euros",
      "En dólares estadounidenses",
      "En reales, por el SML"
    ],
    answer: 2,
    explanation: "La economía uruguaya está muy dolarizada y la mayoría de las operaciones de comex se pactan en USD. El Sistema de Pagos en Moneda Local existe, pero su uso es marginal."
  },
  {
    id: "q-p11-011",
    moduleId: "p11",
    subtopicId: "p11-s2",
    difficulty: 1,
    prompt: "Bajo la UCP 600, un crédito que no dice si es revocable o irrevocable es:",
    options: [
      "Revocable",
      "Irrevocable",
      "Nulo",
      "Depende del banco emisor"
    ],
    answer: 1,
    explanation: "El art. 3 establece que el crédito es irrevocable aunque no lo indique. El crédito revocable existía bajo la UCP 500, pero ya no."
  },
  {
    id: "q-p11-012",
    moduleId: "p11",
    subtopicId: "p11-s2",
    difficulty: 1,
    prompt: "¿Cuál es el plazo máximo del banco para examinar documentos bajo la UCP 600?",
    options: [
      "5 días hábiles bancarios siguientes al día de la presentación",
      "3 días calendario",
      "7 días hábiles",
      "21 días calendario"
    ],
    answer: 0,
    explanation: "Art. 14(b). Los 21 días son otra cosa: el plazo máximo del beneficiario para presentar documentos de transporte desde el embarque."
  },
  {
    id: "q-p11-013",
    moduleId: "p11",
    subtopicId: "p11-s2",
    difficulty: 2,
    prompt: "Si el crédito no fija plazo de presentación y exige un B/L original, ¿cuál es el plazo máximo?",
    options: [
      "21 días calendario desde el embarque, y nunca después del vencimiento del crédito",
      "15 días desde el embarque",
      "30 días desde el embarque",
      "Hasta el vencimiento del crédito, sin otro límite"
    ],
    answer: 0,
    explanation: "Art. 14(c): se aplican los dos límites a la vez; vale el que llegue primero."
  },
  {
    id: "q-p11-014",
    moduleId: "p11",
    subtopicId: "p11-s2",
    difficulty: 2,
    prompt: "Un crédito por \"about USD 100.000\" permite presentar documentos por hasta:",
    options: [
      "USD 100.000",
      "USD 105.000",
      "USD 110.000",
      "USD 120.000"
    ],
    answer: 2,
    explanation: "\"About\" o \"approximately\" frente al monto da una tolerancia de 10% en más o en menos (art. 30)."
  },
  {
    id: "q-p11-015",
    moduleId: "p11",
    subtopicId: "p11-s2",
    difficulty: 1,
    prompt: "¿Quién es el ordenante de una carta de crédito?",
    options: [
      "El exportador",
      "El importador, que pide a su banco que emita el crédito",
      "El banco avisador",
      "El transportista"
    ],
    answer: 1,
    explanation: "En la carta de crédito el ordenante (applicant) es el importador y el beneficiario es el exportador. Ojo: en la cobranza el ordenante es el exportador."
  },
  {
    id: "q-p11-016",
    moduleId: "p11",
    subtopicId: "p11-s2",
    difficulty: 2,
    prompt: "¿Qué diferencia al banco confirmador del banco avisador?",
    options: [
      "El avisador paga y el confirmador solo notifica",
      "Son el mismo rol con distinto nombre",
      "El confirmador es siempre el banco del importador",
      "El confirmador agrega su propio compromiso de pago; el avisador solo notifica y verifica la autenticidad aparente"
    ],
    answer: 3,
    explanation: "Art. 8 y 9 de la UCP 600. El confirmador suele ser un banco del país del exportador y cubre el riesgo del banco emisor y el riesgo país."
  },
  {
    id: "q-p11-017",
    moduleId: "p11",
    subtopicId: "p11-s2",
    difficulty: 2,
    prompt: "¿Qué significa el principio de autonomía de la carta de crédito?",
    options: [
      "Que el exportador puede modificar el crédito solo",
      "Que el crédito es independiente del contrato de compraventa y el banco no entra en disputas sobre la mercadería",
      "Que el banco inspecciona la mercadería antes de pagar",
      "Que el crédito no necesita documentos"
    ],
    answer: 1,
    explanation: "Art. 4 y 5: el banco trabaja con documentos, no con mercaderías. Si el importador quiere controlar calidad, debe exigir un certificado de inspección de un tercero."
  },
  {
    id: "q-p11-018",
    moduleId: "p11",
    subtopicId: "p11-s2",
    difficulty: 2,
    prompt: "Si el banco rechaza una presentación, ¿cómo debe comunicarlo?",
    options: [
      "En un único aviso que indique todas las discrepancias, dentro de los 5 días hábiles",
      "En avisos sucesivos a medida que encuentra discrepancias",
      "Por teléfono al ordenante, sin aviso al presentador",
      "No tiene que comunicarlo: simplemente no paga"
    ],
    answer: 0,
    explanation: "Art. 16: un solo aviso con todas las discrepancias. Si el banco no lo hace correctamente, pierde el derecho a alegar que la presentación no era conforme."
  },
  {
    id: "q-p11-019",
    moduleId: "p11",
    subtopicId: "p11-s2",
    difficulty: 2,
    prompt: "Salvo que el crédito diga otra cosa, ¿qué cobertura mínima debe tener el seguro?",
    options: [
      "100% del valor FOB",
      "120% del valor de la factura",
      "150% del valor CIF",
      "110% del valor CIF o CIP"
    ],
    answer: 3,
    explanation: "Art. 28 de la UCP 600; además, la fecha del seguro no puede ser posterior al embarque. Coincide con el mínimo de los Incoterms CIF y CIP: valor del contrato más 10%."
  },
  {
    id: "q-p11-020",
    moduleId: "p11",
    subtopicId: "p11-s2",
    difficulty: 3,
    prompt: "El B/L tiene fecha 08/10, el crédito vence el 30/10 y el exportador presenta el 02/11. ¿Qué pasa?",
    options: [
      "Está en plazo porque el banco tiene 5 días hábiles",
      "Está en plazo porque se cuenta desde el vencimiento",
      "La presentación es tardía: el límite era el 29/10 (21 días) y además el crédito ya había vencido",
      "Solo es tardía si el ordenante lo reclama"
    ],
    answer: 2,
    explanation: "08/10 + 21 días = 29/10, antes del vencimiento del 30/10. Presentar el 02/11 viola los dos límites. El banco no está obligado a pagar; el exportador puede pedir que el ordenante acepte la discrepancia."
  },
  {
    id: "q-p11-021",
    moduleId: "p11",
    subtopicId: "p11-s2",
    difficulty: 2,
    prompt: "El crédito describe \"Merino wool tops 21.5 micron\" y la factura dice \"Wool tops 21,5 micron\". ¿Qué es lo más probable?",
    options: [
      "No importa, porque la mercadería es la misma",
      "Solo es discrepancia si el B/L dice lo mismo",
      "Es aceptable porque la factura no necesita firma",
      "Es una discrepancia: la descripción de la factura debe corresponder a la del crédito"
    ],
    answer: 3,
    explanation: "En la factura la descripción tiene que corresponder a la del crédito; en los demás documentos puede ser general. Omitir una característica como \"Merino\" es una discrepancia probable. Lección: copiar la descripción literalmente."
  },
  {
    id: "q-p11-022",
    moduleId: "p11",
    subtopicId: "p11-s2",
    difficulty: 2,
    prompt: "¿Qué tipo de crédito permite al beneficiario cobrar un anticipo antes del embarque?",
    options: [
      "El crédito transferible",
      "El crédito con cláusula roja (red clause)",
      "El crédito back-to-back",
      "El crédito stand-by"
    ],
    answer: 1,
    explanation: "La cláusula roja da prefinanciación antes del embarque. La cláusula verde da el anticipo contra un depósito o warrant de la mercadería."
  },
  {
    id: "q-p11-023",
    moduleId: "p11",
    subtopicId: "p11-s2",
    difficulty: 3,
    prompt: "¿Cuántas veces puede transferirse un crédito transferible?",
    options: [
      "Una sola vez: el segundo beneficiario no puede transferirlo a un tercero",
      "Ilimitadas veces",
      "Dos veces como máximo",
      "Ninguna: la UCP 600 prohíbe transferir"
    ],
    answer: 0,
    explanation: "Art. 38: se puede transferir total o parcialmente a uno o más segundos beneficiarios, pero una sola vez (sí puede volver al primer beneficiario)."
  },
  {
    id: "q-p11-024",
    moduleId: "p11",
    subtopicId: "p11-s2",
    difficulty: 2,
    prompt: "¿Qué mensaje SWIFT se usa para emitir una carta de crédito?",
    options: [
      "MT103",
      "MT707",
      "MT700",
      "MT754"
    ],
    answer: 2,
    explanation: "MT700 = emisión; MT707 = enmienda; MT754 = aviso de pago, aceptación o negociación. El MT103 era la transferencia de cliente."
  },
  {
    id: "q-p11-025",
    moduleId: "p11",
    subtopicId: "p11-s2",
    difficulty: 2,
    prompt: "Bajo la UCP 600, ¿qué pasa si el beneficiario acepta solo una parte de una enmienda?",
    options: [
      "Queda aceptada la parte elegida",
      "El banco elige qué parte aplica",
      "No se admite la aceptación parcial: equivale a rechazar la enmienda",
      "La enmienda se aplica completa igual"
    ],
    answer: 2,
    explanation: "Art. 10: las enmiendas necesitan el acuerdo del emisor, el confirmador y el beneficiario, y la aceptación parcial equivale a un rechazo."
  },
  {
    id: "q-p11-026",
    moduleId: "p11",
    subtopicId: "p11-s2",
    difficulty: 3,
    prompt: "Si el crédito dice que el embarque debe ser \"on or about\" el 15 de marzo, ¿qué rango se acepta?",
    options: [
      "Del 14 al 16 de marzo",
      "Todo el mes de marzo",
      "Solo el 15 de marzo",
      "Del 10 al 20 de marzo, ambos inclusive"
    ],
    answer: 3,
    explanation: "Art. 3: \"on or about\" abarca 5 días calendario antes y después de la fecha indicada, incluyendo las fechas extremas."
  },
  {
    id: "q-p11-027",
    moduleId: "p11",
    subtopicId: "p11-s2",
    difficulty: 2,
    prompt: "Un exportador presenta documentos con una discrepancia que no puede corregir en plazo. ¿Qué opción tiene?",
    options: [
      "Pedir que el banco consulte al ordenante si acepta la discrepancia (waiver)",
      "Exigir el pago porque la mercadería llegó bien",
      "Presentar una denuncia ante el BCU",
      "Pedir que el banco inspeccione la carga"
    ],
    answer: 0,
    explanation: "Si el importador acepta la discrepancia, el banco puede pagar. Pero el cobro pasa a depender de la voluntad del importador: en los hechos se parece a una cobranza."
  },
  {
    id: "q-p11-028",
    moduleId: "p11",
    subtopicId: "p11-s2",
    difficulty: 3,
    prompt: "¿Qué es un crédito back-to-back?",
    options: [
      "Un crédito que se renueva automáticamente",
      "Dos créditos independientes: el intermediario usa el que recibe como respaldo para que su banco abra otro a favor de su proveedor",
      "Un crédito confirmado por dos bancos a la vez",
      "Un crédito transferido dos veces"
    ],
    answer: 1,
    explanation: "A diferencia del transferible, son dos créditos separados. La UCP 600 no lo regula específicamente. El que se renueva solo es el rotativo (revolving)."
  },
  {
    id: "q-p11-029",
    moduleId: "p11",
    subtopicId: "p11-s3",
    difficulty: 1,
    prompt: "En una cobranza documentaria D/A:",
    options: [
      "El importador paga para retirar los documentos",
      "El banco garantiza el pago",
      "El importador acepta una letra de cambio y recibe los documentos",
      "Se aplica la UCP 600"
    ],
    answer: 2,
    explanation: "D/A = documentos contra aceptación. Rige la URC 522 y el banco no garantiza nada. Pagar para retirar es D/P."
  },
  {
    id: "q-p11-030",
    moduleId: "p11",
    subtopicId: "p11-s3",
    difficulty: 1,
    prompt: "En la URC 522, el \"banco presentador\" es:",
    options: [
      "El banco cobrador que presenta los documentos al girado",
      "El banco del exportador",
      "El banco central del país importador",
      "El banco confirmador"
    ],
    answer: 0,
    explanation: "Normalmente es el banco del importador. El banco del exportador es el banco remitente."
  },
  {
    id: "q-p11-031",
    moduleId: "p11",
    subtopicId: "p11-s3",
    difficulty: 2,
    prompt: "¿Examinan los bancos el contenido de los documentos en una cobranza?",
    options: [
      "Sí, igual que en la carta de crédito, en 5 días hábiles",
      "Sí, pero solo la factura comercial",
      "Sí, y pueden rechazarlos por discrepancias",
      "No: solo verifican que recibieron los documentos listados en la instrucción"
    ],
    answer: 3,
    explanation: "Es la gran diferencia con la carta de crédito: en la cobranza los bancos son mandatarios, no revisan conformidad ni garantizan el pago."
  },
  {
    id: "q-p11-032",
    moduleId: "p11",
    subtopicId: "p11-s3",
    difficulty: 2,
    prompt: "En una cobranza, ¿quién es el ordenante o cedente?",
    options: [
      "El importador",
      "El exportador, que confía la gestión de cobro a su banco",
      "El banco presentador",
      "La aduana de destino"
    ],
    answer: 1,
    explanation: "Trampa clásica: en la carta de crédito el ordenante es el importador; en la cobranza, el exportador. Siempre es quien inicia el trámite en su banco."
  },
  {
    id: "q-p11-033",
    moduleId: "p11",
    subtopicId: "p11-s3",
    difficulty: 2,
    prompt: "Si la instrucción de cobranza no indica D/P ni D/A y hay una letra a plazo, ¿cómo se entregan los documentos?",
    options: [
      "Contra aceptación",
      "Contra pago",
      "Libres de pago",
      "Se devuelven al exportador"
    ],
    answer: 1,
    explanation: "Por defecto, la URC 522 manda entregar contra pago. Es otra razón para redactar la instrucción con claridad."
  },
  {
    id: "q-p11-034",
    moduleId: "p11",
    subtopicId: "p11-s3",
    difficulty: 3,
    prompt: "Un importador egipcio aceptó una letra D/A a 90 días, retiró la mercadería y no pagó. ¿Responde el banco?",
    options: [
      "Sí, porque aceptó la letra",
      "Sí, porque hay TLC MERCOSUR–Egipto",
      "Sí, si el monto supera USD 50.000",
      "No: el banco cumplió al entregar documentos contra aceptación y no garantiza el pago"
    ],
    answer: 3,
    explanation: "Opciones del exportador: protestar la letra si la instrucción lo previó, gestión de cobro, reclamar al seguro de crédito si lo tenía, y para el futuro pedir aval bancario o usar D/P o carta de crédito."
  },
  {
    id: "q-p11-035",
    moduleId: "p11",
    subtopicId: "p11-s3",
    difficulty: 2,
    prompt: "¿Cuál es el principal riesgo de la cobranza D/P para el exportador?",
    options: [
      "Que el importador no retire los documentos y la mercadería quede en destino generando costos",
      "Que el banco pague antes de tiempo",
      "Que el importador retire la mercadería sin pagar",
      "Que el banco examine los documentos y los rechace"
    ],
    answer: 0,
    explanation: "En D/P el importador no puede retirar sin pagar, pero puede simplemente no aparecer. Entonces hay almacenaje y demoras de contenedor, y el exportador debe revender, reembarcar o abandonar."
  },
  {
    id: "q-p11-036",
    moduleId: "p11",
    subtopicId: "p11-s3",
    difficulty: 1,
    prompt: "¿Desde cuándo está en vigor la URC 522?",
    options: [
      "Desde el 1/07/2007",
      "Desde el 1/01/2020",
      "Desde el 1/01/1996",
      "Desde el 22/11/2025"
    ],
    answer: 2,
    explanation: "URC 522, revisión 1995, en vigor desde el 1/01/1996. El 1/07/2007 es la fecha de la UCP 600."
  },
  {
    id: "q-p11-037",
    moduleId: "p11",
    subtopicId: "p11-s3",
    difficulty: 2,
    prompt: "¿Qué es una cobranza simple o limpia?",
    options: [
      "La que no tiene comisiones bancarias",
      "La que se paga a la vista",
      "La que incluye solo la factura comercial",
      "La que incluye solo documentos financieros, sin documentos comerciales"
    ],
    answer: 3,
    explanation: "Cobranza simple: letras, pagarés o cheques. Cobranza documentaria: documentos comerciales (factura, B/L, certificado de origen), con o sin financieros."
  },
  {
    id: "q-p11-038",
    moduleId: "p11",
    subtopicId: "p11-s4",
    difficulty: 1,
    prompt: "Con la opción de gastos \"OUR\" en una transferencia:",
    options: [
      "El beneficiario paga todos los gastos",
      "Los gastos se comparten",
      "El ordenante paga todos los gastos",
      "Paga el banco intermediario"
    ],
    answer: 2,
    explanation: "OUR: paga todo el que envía y el beneficiario recibe el monto íntegro. SHA: cada uno paga los de su banco. BEN: paga todo el beneficiario."
  },
  {
    id: "q-p11-039",
    moduleId: "p11",
    subtopicId: "p11-s4",
    difficulty: 2,
    prompt: "Un exportador uruguayo esperaba EUR 20.000 y recibe EUR 19.935. ¿Cuál es la explicación más probable?",
    options: [
      "El BCU retuvo un impuesto a la entrada de divisas",
      "La transferencia salió con SHA o BEN y un banco intermediario descontó su comisión",
      "El tipo de cambio bajó durante el viaje",
      "El banco del exportador cometió un error"
    ],
    answer: 1,
    explanation: "Faltan EUR 65 de comisiones de intermediarios. Para evitarlo, la proforma debe poner los gastos fuera de Uruguay a cargo del comprador e instruir OUR. En Uruguay no hay impuesto a la entrada de divisas."
  },
  {
    id: "q-p11-040",
    moduleId: "p11",
    subtopicId: "p11-s4",
    difficulty: 2,
    prompt: "Desde el fin de la coexistencia MT/MX (22/11/2025), ¿qué mensaje ISO 20022 equivale al MT103?",
    options: [
      "pacs.008",
      "pacs.009",
      "camt.053",
      "MT700"
    ],
    answer: 0,
    explanation: "pacs.008 = transferencia de cliente (ex MT103); pacs.009 = banco a banco (ex MT202); camt.053 = extracto. MT700 es la emisión de una carta de crédito."
  },
  {
    id: "q-p11-041",
    moduleId: "p11",
    subtopicId: "p11-s4",
    difficulty: 3,
    prompt: "Un importador transfiere USD 10.000 con SHA. Su banco cobra USD 40, el intermediario USD 25 y el banco del beneficiario USD 15. ¿Cuánto recibe el proveedor?",
    options: [
      "USD 9.960",
      "USD 10.000",
      "USD 9.920",
      "USD 9.975"
    ],
    answer: 0,
    explanation: "Con SHA el ordenante paga la comisión de su banco (USD 40, fuera del monto) y al beneficiario le descuentan las demás: 10.000 − 25 − 15 = 9.960. Con OUR recibiría 10.000; con BEN, 9.920."
  },
  {
    id: "q-p11-042",
    moduleId: "p11",
    subtopicId: "p11-s4",
    difficulty: 2,
    prompt: "En una letra de cambio, ¿quién es el librado?",
    options: [
      "Quien gira la letra",
      "Quien cobra la letra",
      "La persona a quien se le ordena pagar",
      "El banco que la avala"
    ],
    answer: 2,
    explanation: "El librador gira la orden, el librado debe pagar y el beneficiario o tomador cobra. En la cobranza D/A, el librado es el importador, que acepta la letra."
  },
  {
    id: "q-p11-043",
    moduleId: "p11",
    subtopicId: "p11-s4",
    difficulty: 2,
    prompt: "¿Para qué sirve el UETR de SWIFT gpi?",
    options: [
      "Para calcular el tipo de cambio",
      "Para seguir una transferencia de punta a punta con un código único",
      "Para identificar al banco intermediario por país",
      "Para emitir una carta de crédito electrónica"
    ],
    answer: 1,
    explanation: "El UETR es como el número de seguimiento de una encomienda. Conviene pedirlo junto con el comprobante para rastrear pagos demorados o incompletos."
  },
  {
    id: "q-p11-044",
    moduleId: "p11",
    subtopicId: "p11-s4",
    difficulty: 3,
    prompt: "¿Qué hace que una letra de cambio sea fácilmente descontable en forfaiting?",
    options: [
      "Que sea a la vista",
      "Que tenga la opción OUR",
      "Que esté emitida en pesos uruguayos",
      "El aval de un banco"
    ],
    answer: 3,
    explanation: "Con el aval bancario, quien compra la letra corre el riesgo del banco y no del importador; por eso la puede comprar con descuento y el exportador cobra antes."
  }
]
