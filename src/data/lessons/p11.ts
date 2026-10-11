import type { Subtopic } from '../types'

export const p11Lessons: Subtopic[] = [
  // ─────────────────────────────────────────────────────────────
  {
    id: "p11-s1",
    moduleId: "p11",
    title: "Panorama de las formas de pago y su riesgo",
    summary: "Cada forma de pago internacional reparte de manera distinta el riesgo entre exportador e importador. Entender esa “escalera de riesgo” es lo primero que te preguntan en una mesa de comex de un banco o en el área de exportaciones de una empresa.",
    minutes: 15,
    sections: [
      {
        heading: "La pregunta de fondo: ¿quién confía en quién?",
        blocks: [
          { type: "p", text: "En una venta dentro de Uruguay, si el cliente no paga, lo vas a buscar a su local, le mandás una intimación o vas al juzgado de la esquina. En una venta internacional, el comprador está a miles de kilómetros, con otro idioma, otras leyes y otra moneda. Por eso el comercio exterior tiene una tensión permanente: **el exportador quiere cobrar antes de entregar** y **el importador quiere recibir antes de pagar**." },
          { type: "p", text: "Las formas de pago internacional son, en el fondo, distintas maneras de repartir ese riesgo. Algunas ponen todo el riesgo del lado del importador (pagar antes de ver la mercadería), otras del lado del exportador (mandar la mercadería y esperar a que le paguen), y en el medio aparecen los **bancos** como intermediarios que reducen la desconfianza, a cambio de comisiones." },
          { type: "eli5", text: "Imaginá que le vendés tu bicicleta a alguien de otro barrio que no conocés. Si él te paga primero, el riesgo es suyo: capaz que nunca le entregás la bici. Si vos le das la bici primero, el riesgo es tuyo: capaz que nunca te paga. Para no pelear, pueden dejar la plata y la bici **en manos de un vecino de confianza** que hace el cambio. Ese vecino es el banco." },
          { type: "callout", tone: "info", title: "Términos que vas a escuchar", text: "**Exportador** = vendedor, también llamado *beneficiario* (en la carta de crédito) o *cedente/ordenante* (en la cobranza). **Importador** = comprador, también *ordenante* (en la carta de crédito) o *girado* (en la cobranza). Los nombres cambian según el instrumento: en cada lección de este módulo los vas a ver con detalle." }
        ]
      },
      {
        heading: "La escalera de riesgo",
        blocks: [
          { type: "p", text: "La forma más útil de ordenar los medios de pago es una escalera. Para el **exportador**, de más seguro a menos seguro, el orden es: **pago anticipado → carta de crédito confirmada → carta de crédito no confirmada → cobranza D/P → cobranza D/A → cuenta abierta**. Para el **importador** es exactamente al revés." },
          { type: "table", headers: ["Medio", "Riesgo del exportador", "Riesgo del importador", "Costo bancario", "Cuándo se usa"], rows: [
            ["**Pago anticipado** (transferencia antes del embarque)", "Mínimo", "**Máximo**", "Muy bajo", "Relación nueva con un importador de poco poder de negociación, bienes a medida, mercado de riesgo"],
            ["**Carta de crédito confirmada**", "Muy bajo (se obligan dos bancos, uno local)", "Bajo (paga contra documentos conformes)", "**Alto**", "Montos grandes, país o banco emisor de riesgo, primera operación"],
            ["**Carta de crédito irrevocable no confirmada**", "Bajo (depende del banco emisor y del país)", "Bajo", "Alto", "Igual que la anterior, cuando el banco emisor es solvente"],
            ["**Cobranza documentaria D/P** (documentos contra pago)", "Medio: el importador puede no retirar y la mercadería ya viajó", "Bajo a medio", "Medio", "Relación con cierta confianza y riesgo país aceptable"],
            ["**Cobranza documentaria D/A** (documentos contra aceptación)", "Medio a alto: entrega documentos contra una promesa de pago a plazo", "Bajo", "Medio", "Cuando se financia al importador con una letra aceptada"],
            ["**Cuenta abierta** (transferencia después de recibir)", "**Máximo**", "Mínimo", "Muy bajo", "Relación consolidada, filiales, clientes de primera, o con seguro de crédito o factoring"]
          ], caption: "La escalera de riesgo de los medios de pago" },
          { type: "tool", toolId: "payment-flows" },
          { type: "eli5", text: "La escalera es como las formas de pagar en un almacén de barrio. **Pago anticipado** es cuando el almacenero te dice “primero pagás, después te doy la leche”. **Cuenta abierta** es **fiar**: te llevás la leche y pagás a fin de mes en la libreta. En el medio están las opciones con un “tercero de confianza” que sostiene la llave del depósito hasta que se cumple lo pactado." },
          { type: "callout", tone: "tip", title: "Regla mnemotécnica", text: "Para el exportador: **cuanto más arriba en la escalera, más tranquilo duerme y más caro le sale al cliente**. Para el importador, cuanto más abajo, más cómodo, porque paga después o con menos garantías. La negociación del medio de pago es, en realidad, una negociación de poder." }
        ]
      },
      {
        heading: "Los medios uno por uno, en dos líneas",
        blocks: [
          { type: "steps", items: [
            { title: "Pago anticipado", text: "El importador transfiere antes del embarque (todo o una parte). El exportador embarca cuando ve los fondos. Simple y barato, pero el importador queda expuesto a que la mercadería no llegue o llegue mal." },
            { title: "Carta de crédito (crédito documentario)", text: "El banco del importador se compromete a pagar al exportador si este presenta exactamente los documentos que pide el crédito. Se rige por la **UCP 600** de la Cámara de Comercio Internacional (ICC). Si un segundo banco, normalmente en el país del exportador, se suma al compromiso, es **confirmada**." },
            { title: "Cobranza documentaria", text: "El exportador entrega los documentos a su banco, que los manda al banco del importador. Este solo los entrega si el importador paga (D/P) o acepta una letra de cambio (D/A). Se rige por la **URC 522**. Los bancos **no garantizan** el pago: son mensajeros con instrucciones." },
            { title: "Cuenta abierta", text: "El exportador manda la mercadería y los documentos directamente al importador, que paga después por transferencia en el plazo pactado (por ejemplo, 60 días). Es lo más común entre empresas que se conocen." }
          ] },
          { type: "eli5", text: "La **cobranza documentaria** es como mandar un paquete **contra reembolso**: el cartero (el banco) solo entrega la llave del paquete si el cliente paga. Pero si el cliente nunca aparece, el cartero no te paga nada: el paquete queda en la oficina de correo y vos tenés que ver qué hacés con él." }
        ]
      },
      {
        heading: "Instrumentos complementarios",
        blocks: [
          { type: "p", text: "Además de los medios “clásicos”, hay herramientas que se combinan con ellos para cubrir riesgos o dar financiación:" },
          { type: "list", items: [
            "**Garantías bancarias** (reglas URDG 758 de la ICC): un banco garantiza el cumplimiento de una obligación, por ejemplo la devolución de un anticipo.",
            "**Carta de crédito *stand-by***: funciona como garantía; se cobra solo si el ordenante incumple. Se sujeta a las reglas ISP98 o a la UCP 600.",
            "**Seguro de crédito a la exportación**: una aseguradora cubre el riesgo de que el comprador no pague; permite vender en cuenta abierta con menos riesgo.",
            "**Factoring y forfaiting**: el exportador vende sus créditos (facturas o letras) a una entidad financiera y cobra antes, con descuento.",
            "**Prefinanciación de exportaciones**: crédito en dólares contra un contrato, una orden de compra o una carta de crédito, para producir antes de cobrar."
          ] },
          { type: "callout", tone: "warn", title: "Seguro de crédito en Uruguay", text: "La investigación menciona que lo ofrecen aseguradoras privadas y posiblemente el BSE, pero eso último no está confirmado. Si te lo preguntan, decí que existe el seguro de crédito a la exportación y que conviene consultar qué aseguradoras lo ofrecen hoy." }
        ]
      },
      {
        heading: "Particularidades de Uruguay",
        blocks: [
          { type: "list", items: [
            "**Libertad cambiaria**: Uruguay no tiene controles de cambio. Las empresas pueden cobrar y pagar en cualquier moneda, tener cuentas en dólares, y no hay obligación de ingresar las divisas de exportación ni autorización previa para pagar importaciones. Esto contrasta con Argentina (cepo, flexibilizado en 2025) y con Brasil (registro cambiario).",
            "**Dolarización**: la mayoría de las operaciones de comex se pactan en **dólares** y los depósitos del sistema son mayoritariamente en esa moneda.",
            "**BCU (Banco Central del Uruguay)**: regula y supervisa a los bancos a través de la Superintendencia de Servicios Financieros, conduce la política monetaria, publica el tipo de cambio de referencia y recopila estadísticas como la balanza de pagos.",
            "**Prevención de lavado**: la **Ley 19.574** (Ley Integral contra el Lavado de Activos, 2017) obliga a los bancos a “conocer al cliente” (KYC) y justificar el origen de los fondos. Por eso, al hacer una transferencia, el banco te pide factura, DUA o contrato.",
            "**BROU (Banco de la República Oriental del Uruguay)**: el banco estatal y el principal del país. Ofrece cartas de crédito de importación y exportación, cobranzas, transferencias, prefinanciación de exportaciones y líneas de crédito para comex, con una red de corresponsales en el exterior."
          ] },
          { type: "callout", tone: "uy", title: "Libre no quiere decir sin papeles", text: "Que haya libertad cambiaria no significa que el banco te deje transferir sin preguntar. Los controles que vas a ver en el día a día son de **prevención de lavado**: el oficial de comex te va a pedir respaldo documental de cada pago. Tener la factura y el DUA a mano acelera todo." },
          { type: "callout", tone: "warn", title: "Datos a confirmar", text: "La norma y el año exactos de la libertad cambiaria, la lista de bancos privados con mesa de comex, el uso actual del Sistema de Pagos en Moneda Local (SML) con Brasil y Argentina y la operatividad del Convenio de Pagos y Créditos Recíprocos (CCR) de ALADI figuran en la investigación como pendientes de verificación. Si te preguntan, mencionalos como mecanismos existentes y aclarás que su uso es marginal o que conviene confirmarlo con el banco." }
        ]
      },
      {
        heading: "Cómo se elige en la práctica",
        blocks: [
          { type: "p", text: "Cuando un cliente pregunta “¿qué medio de pago le pido a mi comprador?”, un buen profesional de comex no responde de memoria: hace preguntas. Monto de la operación, si se conoce al comprador, en qué país está y qué banco tiene, el poder de negociación de cada uno, los márgenes, el plazo que necesita el comprador y si hay seguro de crédito. Con eso ubica la operación en la escalera." },
          { type: "example", title: "Primera venta de gin a Colombia", text: "Una destilería uruguaya exporta por primera vez USD 45.000 de gin a un distribuidor de Bogotá que no conoce. El distribuidor no acepta pagar por anticipado. La opción equilibrada es una **carta de crédito irrevocable a la vista**, idealmente **confirmada** por un banco uruguayo o de primera línea si el banco colombiano no es conocido. Si la carta de crédito sale cara para ese monto, una alternativa es **30% de anticipo y el saldo por cobranza D/P**: si el importador no retira los documentos, el anticipo cubre al menos el flete de retorno. Y en el certificado de origen se invoca el **ACE 72** (MERCOSUR–Colombia) para que el comprador obtenga la preferencia arancelaria." },
          { type: "example", title: "Cliente de años en Brasil", text: "Un exportador de lana lleva cinco años vendiéndole a la misma hilandería de Rio Grande do Sul, que siempre pagó a tiempo. Ahí lo habitual es **cuenta abierta** a 30 o 60 días por transferencia; si el monto crece mucho, se puede complementar con un **seguro de crédito** en lugar de pasar a un instrumento bancario caro." },
          { type: "eli5", text: "Elegir medio de pago es como decidir cómo prestarle algo a alguien. A tu hermano le prestás el auto sin pedir nada (cuenta abierta). A un compañero nuevo del trabajo le pedís que deje algo en garantía (carta de crédito). A un desconocido de internet, solo si te paga primero (anticipado)." }
        ]
      }
    ],
    eli5: [
      { concept: "Riesgo en el pago internacional", text: "Es el miedo de los dos lados de una venta de bicicleta entre desconocidos: el que paga primero puede quedarse sin bici; el que entrega primero puede quedarse sin plata. Un vecino de confianza en el medio (el banco) baja ese miedo." },
      { concept: "Escalera de riesgo", text: "Es como los niveles de confianza con la gente: al desconocido le cobrás antes, al conocido le pedís una garantía y al amigo de siempre le fiás. Cuanto más confianza, menos papeles y menos costos." },
      { concept: "Cuenta abierta", text: "Es fiar en el almacén: te llevás la mercadería y pagás a fin de mes. Muy cómodo para el comprador, muy riesgoso para el almacenero, salvo que conozca bien al cliente o tenga un seguro." },
      { concept: "Cobranza documentaria", text: "Es un envío contra reembolso: el cartero solo entrega la llave del paquete si el cliente paga o firma un pagaré, pero si el cliente no aparece, el cartero no te paga nada." },
      { concept: "Carta de crédito", text: "Es comprar con un escribano en el medio: el banco promete pagarte si traés exactamente los papeles pedidos, aunque el comprador cambie de idea." }
    ],
    keyPoints: [
      "El exportador quiere cobrar antes de entregar y el importador recibir antes de pagar: cada medio de pago reparte ese riesgo de forma distinta.",
      "Escalera para el exportador (de más a menos seguro): anticipado, carta de crédito confirmada, carta de crédito no confirmada, cobranza D/P, cobranza D/A, cuenta abierta.",
      "Para el importador la escalera es exactamente la inversa.",
      "Más seguridad suele implicar más costo bancario: la carta de crédito es la más cara, la transferencia la más barata.",
      "La carta de crédito se rige por la UCP 600 y la cobranza por la URC 522, ambas de la ICC.",
      "Instrumentos complementarios: garantías bancarias (URDG 758), stand-by (ISP98 o UCP 600), seguro de crédito, factoring, forfaiting y prefinanciación.",
      "Uruguay tiene libertad cambiaria y operaciones mayormente en dólares; los controles bancarios que vas a ver son de prevención de lavado (Ley 19.574).",
      "Elegir el medio de pago exige preguntar: monto, conocimiento del comprador, país y banco, poder de negociación, márgenes y plazos."
    ],
    probableQuestions: [
      { question: "Ordená los medios de pago de más seguro a menos seguro para el exportador.", answer: "Pago anticipado, carta de crédito confirmada, carta de crédito no confirmada, cobranza D/P, cobranza D/A y cuenta abierta." },
      { question: "¿Qué medio de pago es el más riesgoso para el importador?", answer: "El pago anticipado, porque paga antes de que la mercadería se embarque." },
      { question: "¿Por qué la carta de crédito es más cara que la cobranza?", answer: "Porque en la carta de crédito los bancos asumen un compromiso de pago y examinan documentos; en la cobranza solo actúan como intermediarios sin garantizar." },
      { question: "¿Qué reglas de la ICC rigen la carta de crédito y la cobranza?", answer: "La UCP 600 para la carta de crédito y la URC 522 para la cobranza." },
      { question: "¿Hay controles de cambio en Uruguay?", answer: "No. Hay libertad cambiaria; lo que hay son controles de prevención de lavado, por lo que los bancos piden documentación respaldatoria." },
      { question: "Un cliente nuevo quiere exportar y no sabe qué medio de pago pedir. ¿Qué le preguntás?", answer: "Monto, si conoce al comprador, país y banco del comprador, poder de negociación, márgenes, plazo que necesita el comprador y si tiene seguro de crédito." },
      { question: "¿Qué es la cuenta abierta y cuándo se usa?", answer: "El exportador envía mercadería y documentos y el importador paga después por transferencia; se usa con relaciones consolidadas, filiales o con seguro de crédito." },
      { question: "¿Qué instrumento permite vender en cuenta abierta reduciendo el riesgo de impago?", answer: "El seguro de crédito a la exportación (también el factoring o una stand-by como garantía)." }
    ],
    sources: [
      { title: "ICC: reglas bancarias y financieras (UCP 600)", url: "https://iccwbo.org/business-solutions/banking-finance/" },
      { title: "ICC: URC 522", url: "https://iccwbo.org/business-solutions/banking-finance/urc-522/" },
      { title: "Banco Central del Uruguay", url: "https://www.bcu.gub.uy" },
      { title: "BROU", url: "https://www.brou.com.uy" },
      { title: "Uruguay XXI: guía del exportador", url: "https://www.uruguayxxi.gub.uy" }
    ]
  },

  // ─────────────────────────────────────────────────────────────
  {
    id: "p11-s2",
    moduleId: "p11",
    title: "Carta de crédito (UCP 600)",
    summary: "La carta de crédito es la promesa de un banco de pagar al exportador si presenta exactamente los documentos pedidos. Es el instrumento estrella de las mesas de comex de los bancos y donde más se nota la diferencia entre alguien prolijo y alguien que no lo es.",
    minutes: 22,
    sections: [
      {
        heading: "Qué es y qué reglas la gobiernan",
        blocks: [
          { type: "p", text: "La **carta de crédito** (también *crédito documentario*, *L/C* o *letter of credit*) es un compromiso de un banco, el **banco emisor**, de pagar al exportador siempre que este presente documentos que cumplan exactamente con lo que pide el crédito. Lo pide el importador a su banco, y el banco pone su propia solvencia en lugar de la del importador." },
          { type: "p", text: "Las reglas que la gobiernan son la **UCP 600** (Reglas y Usos Uniformes relativos a los Créditos Documentarios), publicación N.º 600 de la Cámara de Comercio Internacional (ICC), revisión 2007, **en vigor desde el 1/07/2007**, con **39 artículos**. No es una ley: se aplica porque el crédito la incorpora expresamente. En el mensaje SWIFT de emisión (MT700) hay un campo de “reglas aplicables” donde se indica la UCP vigente." },
          { type: "p", text: "La definición del artículo 2, dicha con nuestras palabras: un crédito es **cualquier acuerdo, siempre irrevocable**, por el que el banco emisor asume el compromiso firme de **honrar** una **presentación conforme**. *Honrar* quiere decir pagar a la vista, o asumir un pago diferido y pagarlo al vencimiento, o aceptar una letra de cambio y pagarla al vencimiento." },
          { type: "eli5", text: "La carta de crédito es como **comprar una casa con un escribano en el medio**. El comprador deposita la confianza (y el respaldo) en el escribano; el escribano le dice al vendedor: “si me traés exactamente estos papeles, te pago yo, aunque el comprador cambie de idea”. El escribano no va a mirar la casa: mira los papeles." },
          { type: "callout", tone: "info", title: "Reglas complementarias", text: "Junto con la UCP 600 vas a escuchar: **ISBP 821** (2023), la práctica bancaria estándar para examinar documentos, que reemplazó a la ISBP 745; **eUCP 2.1** (2023), para presentaciones electrónicas o mixtas; **URR 725**, para reembolsos entre bancos; **ISP98**, para stand-by; y **URDG 758**, para garantías a primer requerimiento." },
          { type: "callout", tone: "warn", title: "A confirmar", text: "La investigación indica que la ISBP 821 es la versión vigente, pero lo marca para verificar. Si en una entrevista te preguntan por la ISBP, podés decir que es la guía de práctica bancaria para examinar documentos y que la última versión conocida es la 821." }
        ]
      },
      {
        heading: "Los principios que tenés que saber de memoria",
        blocks: [
          { type: "list", items: [
            "**Autonomía o independencia** (art. 4): el crédito es independiente del contrato de compraventa. Si el importador y el exportador se pelean por la calidad de la mercadería, el banco no entra en esa discusión.",
            "**Los bancos trabajan con documentos, no con mercaderías** (art. 5): el banco no ve la carga; ve papeles.",
            "**Cumplimiento estricto (presentación conforme)**: los documentos tienen que cumplir los términos del crédito, la UCP aplicable y la práctica bancaria estándar (ISBP).",
            "**Irrevocabilidad** (art. 3): bajo la UCP 600 todo crédito es irrevocable **aunque no lo diga**. En la versión anterior, la UCP 500, existía el crédito revocable; ya no."
          ] },
          { type: "eli5", text: "El cumplimiento estricto es como un formulario de inscripción en la facultad: si en lugar de “Gastón” escribiste “Gaston” en un campo y en otro “G. Maldonado”, el funcionario te puede rebotar el trámite aunque todos sepan que sos vos. El banco se aferra al formulario porque trabaja con papeles, no con personas ni con mercadería." },
          { type: "callout", tone: "tip", title: "Por qué importa la autonomía", text: "Al exportador le da seguridad: si presenta bien, cobra aunque el importador diga que la mercadería no le gustó. Al importador le exige cuidado: si quiere controlar calidad, tiene que pedir en el crédito un **certificado de inspección** emitido por un tercero, porque el banco no va a revisar la carga." }
        ]
      },
      {
        heading: "Las partes",
        blocks: [
          { type: "table", headers: ["Parte", "Rol"], rows: [
            ["**Ordenante** (applicant)", "El **importador**, que pide a su banco que emita el crédito"],
            ["**Beneficiario**", "El **exportador**, a favor de quien se emite"],
            ["**Banco emisor**", "Banco del importador; asume el compromiso de honrar"],
            ["**Banco avisador**", "Banco en el país del exportador que **notifica** el crédito y verifica que parezca auténtico; no asume compromiso de pago (art. 9)"],
            ["**Banco confirmador**", "Banco que, a pedido o con autorización del emisor, **agrega su propio compromiso** de honrar o negociar (art. 8); normalmente el avisador o un banco de primera línea"],
            ["**Banco designado**", "Banco autorizado en el crédito para honrar o negociar, o “cualquier banco” si es de libre negociación"],
            ["**Banco negociador**", "El que adelanta fondos al beneficiario contra una presentación conforme"],
            ["**Banco reembolsador**", "El que paga al banco designado por cuenta del emisor"],
            ["**Segundo beneficiario**", "Quien recibe el crédito cuando es transferible"]
          ] },
          { type: "doc", docId: "carta-credito" },
          { type: "eli5", text: "La **confirmación** es el mismo escribano de antes, pero además **tu propio banco de barrio** te dice: “si el banco de allá no te paga, te pago yo”. Así no dependés de un banco que no conocés en un país que no controlás." }
        ]
      },
      {
        heading: "El flujo paso a paso",
        blocks: [
          { type: "steps", items: [
            { title: "1. Contrato", text: "Comprador y vendedor pactan “pago por carta de crédito irrevocable confirmada, a la vista, sujeta a UCP 600”." },
            { title: "2. Solicitud", text: "El importador pide a su banco la apertura; el banco evalúa su crédito y las garantías, porque el riesgo de que el importador no le reembolse es del banco." },
            { title: "3. Emisión", text: "El banco emisor emite el crédito (mensaje **MT700**) y lo envía al banco avisador o confirmador del exportador." },
            { title: "4. Aviso y confirmación", text: "El banco avisador verifica la autenticidad, agrega la confirmación si se pidió, y avisa al exportador." },
            { title: "5. Revisión del exportador", text: "El exportador revisa los términos: ¿puede cumplirlos? Si no, pide una **enmienda** (mensaje **MT707**) **antes de embarcar**." },
            { title: "6. Embarque", text: "El exportador produce y embarca dentro de la fecha máxima de embarque; obtiene el conocimiento de embarque (B/L) y los demás documentos." },
            { title: "7. Presentación", text: "Presenta los documentos al banco confirmador o designado, dentro de los 21 días del embarque y antes del vencimiento del crédito." },
            { title: "8. Examen", text: "El banco tiene como máximo 5 días hábiles bancarios. Si la presentación es conforme, paga y manda los documentos al emisor (**MT754**). Si no, avisa el rechazo con **todas** las discrepancias (**MT734** o **MT750**)." },
            { title: "9. Reembolso", text: "El banco emisor examina, reembolsa al confirmador y debita al importador (o le da financiación)." },
            { title: "10. Retiro de la carga", text: "El importador recibe los documentos, con el B/L original retira la mercadería y despacha en aduana." }
          ] },
          { type: "tool", toolId: "payment-flows" },
          { type: "callout", tone: "uy", title: "En Montevideo", text: "Si sos el exportador uruguayo, el banco avisador y confirmador suele ser tu banco local, por ejemplo el BROU. Si sos el importador, tu banco en Uruguay es el emisor y vas a firmar una solicitud de apertura con todos los datos del crédito: lo que pongas ahí es lo que después tu proveedor va a tener que cumplir." }
        ]
      },
      {
        heading: "Tipos de carta de crédito",
        blocks: [
          { type: "table", headers: ["Tipo", "Explicación breve"], rows: [
            ["**Irrevocable**", "La regla general en la UCP 600: no puede modificarse ni cancelarse sin acuerdo del emisor, del confirmador si lo hay y del beneficiario (art. 10)"],
            ["**Confirmada**", "Además del emisor, se obliga un segundo banco, generalmente en el país del exportador. Cubre el riesgo del banco emisor y el **riesgo país**"],
            ["**No confirmada**", "Solo se compromete el emisor; el avisador solo avisa"],
            ["**Confirmación silenciosa** (silent confirmation)", "La pide el beneficiario sin mandato del emisor; queda fuera de la UCP"],
            ["**A la vista** (sight)", "Se paga al presentar documentos conformes"],
            ["**De pago diferido**", "Se paga a X días (por ejemplo, 90 días de la fecha del B/L) **sin letra de cambio**"],
            ["**Por aceptación**", "El banco **acepta una letra** a plazo y la paga al vencimiento; esa letra aceptada se puede descontar"],
            ["**Por negociación**", "Un banco designado compra letras o documentos y adelanta fondos al beneficiario"],
            ["**Transferible** (art. 38)", "El beneficiario, normalmente un intermediario, pide que se transfiera total o parcialmente a uno o más segundos beneficiarios; **una sola vez**"],
            ["**Back-to-back**", "Dos créditos **independientes**: el intermediario usa el que recibe como respaldo para que su banco abra otro a favor de su proveedor. La UCP no lo regula específicamente"],
            ["**Rotativa** (revolving)", "Se renueva automáticamente, por monto o por tiempo, para envíos periódicos"],
            ["**Cláusula roja** (red clause)", "Permite al beneficiario cobrar un **anticipo antes del embarque**. La *cláusula verde* da el anticipo contra un depósito de la mercadería"],
            ["**Stand-by**", "Funciona como **garantía**: se cobra solo si el ordenante incumple, presentando una declaración de incumplimiento. Sujeta a ISP98 o UCP 600"],
            ["**Abierta / restringida**", "Libre negociación en cualquier banco o solo en un banco designado"]
          ] },
          { type: "eli5", text: "La **transferible** es como una entrada de recital que te dejan pasarle a un amigo **una sola vez**: tu amigo no se la puede revender a un tercero. La **back-to-back** es distinta: es como usar tu entrada como garantía para que te presten plata y comprarle otra entrada a otra persona; son dos papeles separados." }
        ]
      },
      {
        heading: "Los artículos que más se preguntan (en palabras propias)",
        blocks: [
          { type: "table", headers: ["Art.", "Tema", "Qué dice, resumido"], rows: [
            ["1", "Aplicación", "Las reglas se aplican si el crédito lo indica y obligan salvo que el crédito las modifique o excluya"],
            ["3", "Interpretación", "El crédito es irrevocable aunque no lo diga. “On or about” una fecha abarca 5 días calendario antes y después. Palabras como “to”, “until”, “from” y “between” incluyen la fecha mencionada; “before” y “after” la excluyen. Principio, mitad y fin de mes son los días 1 a 10, 11 a 20 y 21 al último"],
            ["4 y 5", "Autonomía", "El crédito es independiente del contrato; los bancos trabajan con documentos"],
            ["6", "Disponibilidad y vencimiento", "El crédito indica con qué banco está disponible y de qué forma; debe tener fecha de vencimiento para presentar; no se gira letra contra el ordenante"],
            ["7 y 8", "Compromisos", "El emisor tiene que honrar una presentación conforme; el confirmador asume un compromiso propio e independiente, igual al del emisor"],
            ["9", "Aviso", "El avisador verifica la autenticidad aparente; si decide no avisar, tiene que informarlo sin demora"],
            ["10", "Enmiendas", "Necesitan el acuerdo del emisor, del confirmador y del beneficiario. Aceptar solo una parte de una enmienda no vale: equivale a rechazarla"],
            ["14", "Examen de documentos", "Se examinan solo en apariencia. El banco tiene **como máximo 5 días hábiles bancarios** desde el día siguiente a la presentación. Los documentos de transporte originales se presentan **dentro de los 21 días calendario** posteriores al embarque y nunca después del vencimiento. Los datos de distintos documentos no tienen que ser idénticos, pero no pueden contradecirse. En la **factura**, la descripción de la mercadería tiene que corresponder a la del crédito; en los otros documentos puede ser general"],
            ["16", "Discrepancias y rechazo", "Si el banco rechaza, manda **un solo aviso** con **todas** las discrepancias, dentro de los 5 días hábiles. Si no lo hace bien, pierde el derecho a decir que la presentación no era conforme. Puede consultar al ordenante si acepta las discrepancias"],
            ["18", "Factura comercial", "La emite el beneficiario, a nombre del ordenante, en la moneda del crédito; no hace falta que esté firmada"],
            ["27", "Transporte limpio", "El documento de transporte no puede tener cláusulas que declaren defectos de la mercadería o del embalaje"],
            ["28", "Seguro", "Si no se dice otra cosa, la cobertura mínima es el **110% del valor CIF o CIP**, con fecha no posterior al embarque"],
            ["29", "Prórroga", "Si el vencimiento cae en un día en que el banco está cerrado, se pasa al siguiente día hábil (no aplica a cierres por fuerza mayor)"],
            ["30", "Tolerancias", "“About” o “approximately” frente a un monto, cantidad o precio unitario permite **10% más o menos**. Si la cantidad no se expresa en unidades o piezas, se admite **5% en cantidad** siempre que no se pase del monto. Si se embarca todo y no se prohíben embarques parciales, se acepta cobrar hasta un 5% menos"],
            ["31 y 32", "Embarques", "Los parciales están permitidos salvo prohibición. En embarques en cuotas, si falla una cuota, el crédito deja de servir para esa y las siguientes"],
            ["38 y 39", "Transferencia y cesión", "Reglas del crédito transferible; el beneficiario puede ceder el producido (la plata), no el crédito"]
          ], caption: "Paráfrasis propia, no es el texto de la ICC" },
          { type: "example", title: "Cuánto entra en un “about”", text: "Un crédito dice “about USD 100.000”. Con la tolerancia de 10%, el exportador puede presentar documentos por **hasta USD 110.000**, y por no menos de USD 90.000. Si el crédito dijera USD 100.000 sin “about”, el monto máximo sería exactamente ese." },
          { type: "example", title: "Contando el plazo de presentación", text: "El B/L tiene fecha de embarque 08/10. Sumando 21 días calendario, el último día para presentar es el **29/10**. Si el crédito vence el 30/10, el límite efectivo es el 29/10 (lo que ocurra primero). Si vence el 25/10, el límite pasa a ser el 25/10." }
        ]
      },
      {
        heading: "Discrepancias: el pan de cada día",
        blocks: [
          { type: "p", text: "Una **discrepancia** es cualquier diferencia entre los documentos presentados y los términos del crédito, la UCP o la ISBP. Son muy frecuentes en las primeras presentaciones. Las más comunes:" },
          { type: "list", items: [
            "Presentación **tardía**: más de 21 días después del embarque o después del vencimiento.",
            "**Embarque tardío**: después de la fecha máxima de embarque.",
            "Descripción de la mercadería en la factura **distinta** a la del crédito.",
            "Montos que superan el crédito o cantidades fuera de tolerancia.",
            "B/L **sucio** (con cláusulas de defecto), sin anotación de “a bordo”, o con consignatario o notify mal puestos.",
            "Documentos **inconsistentes** entre sí: pesos, marcas, puertos.",
            "Seguro insuficiente (menos del 110%) o con fecha posterior al embarque.",
            "Falta de firma o endoso donde se exige; número de originales incompleto.",
            "Puertos de carga o descarga distintos a los del crédito.",
            "Certificado de origen emitido por una entidad distinta a la exigida."
          ] },
          { type: "steps", items: [
            { title: "Corregir y volver a presentar", text: "Si todavía hay plazo, se corrige el documento y se presenta de nuevo." },
            { title: "Pedir la aceptación del ordenante", text: "El banco consulta al importador si acepta la discrepancia (waiver). El pago pasa a depender de la voluntad del importador: en los hechos, el crédito se convierte en una especie de cobranza." },
            { title: "Enviar en aprobación", text: "Los documentos se mandan al emisor “en aprobación” para que el ordenante decida." },
            { title: "Pago bajo reserva o contra garantía", text: "El banco paga, pero se reserva el derecho a recuperar los fondos, o pide una garantía (indemnity) del beneficiario." },
            { title: "Prevenir con una enmienda", text: "Lo mejor: detectar antes de embarcar lo que no vas a poder cumplir y pedir una enmienda del crédito." }
          ] },
          { type: "eli5", text: "Una discrepancia es como presentar un formulario con **un dato mal escrito**: aunque sea una sola letra, el banco no te lo acepta, porque su trabajo es comparar papeles con papeles. Si el comprador igual quiere la mercadería, puede decir “dale, está bien”, pero entonces cobrar depende de su buena voluntad." },
          { type: "callout", tone: "tip", title: "Hábito profesional", text: "**Copiá la descripción de la mercadería del crédito, letra por letra, en la factura.** Omitir una palabra (por ejemplo, “Merino” en “Merino wool tops”) puede ser una discrepancia. Y anotá en un calendario la fecha máxima de embarque, el día 21 desde el embarque y el vencimiento." }
        ]
      },
      {
        heading: "Mensajes SWIFT, costos y presentación electrónica",
        blocks: [
          { type: "table", headers: ["Mensaje", "Para qué se usa"], rows: [
            ["MT700", "Emisión del crédito"],
            ["MT707", "Enmienda"],
            ["MT710", "Aviso de un crédito emitido por un tercer banco"],
            ["MT720", "Transferencia"],
            ["MT730", "Acuse de recibo"],
            ["MT734", "Aviso de rechazo"],
            ["MT740 / MT747", "Autorización de reembolso"],
            ["MT750", "Aviso de discrepancias"],
            ["MT752", "Autorización de pago tras discrepancias"],
            ["MT754", "Aviso de pago, aceptación o negociación"],
            ["MT756", "Aviso de reembolso o pago"]
          ] },
          { type: "callout", tone: "warn", title: "Costos orientativos", text: "La investigación da rangos orientativos (por ejemplo, una comisión de apertura del orden de 0,1% a 0,5% trimestral con mínimos, cargos fijos por aviso, confirmación según el riesgo del país y cargos por discrepancia que se descuentan al beneficiario), pero aclara que hay que verificarlos con el tarifario del BROU o de cada banco. No los des como cifras exactas." },
          { type: "p", text: "La **eUCP 2.1** permite presentar documentos **electrónicos** o mixtos (papel y electrónicos). El beneficiario tiene que avisar cuándo la presentación está completa y el plazo de examen corre desde ese aviso; si el banco no puede recibir por una falla de su sistema, los plazos se extienden." },
          { type: "callout", tone: "info", title: "SWIFT y la categoría 7", text: "Los mensajes de pagos migraron a ISO 20022 en noviembre de 2025, pero la investigación señala que los de *trade finance* (categoría 7, los MT7xx de esta tabla) no migraron obligatoriamente en esa fecha. Es un dato a confirmar con el calendario de SWIFT." }
        ]
      }
    ],
    eli5: [
      { concept: "Carta de crédito", text: "Es como comprar una casa con un escribano en el medio: el escribano te paga si le traés exactamente los papeles pedidos, aunque el comprador cambie de idea." },
      { concept: "Confirmación", text: "Es tener a tu propio banco del barrio diciendo: “si el banco de allá no te paga, te pago yo”." },
      { concept: "Autonomía del crédito", text: "Es como el árbitro de un partido que solo mira el reglamento y la planilla: no le importa si los equipos se pelearon antes del partido." },
      { concept: "Discrepancia", text: "Es un formulario con una letra mal escrita: el funcionario te lo rebota aunque todos sepan que sos vos, porque compara papeles con papeles." },
      { concept: "Crédito transferible", text: "Es una entrada de recital que podés pasarle a un amigo una sola vez; tu amigo ya no puede revendérsela a otro." },
      { concept: "Stand-by", text: "Es como el depósito de garantía de un alquiler: nadie lo toca mientras pagues, y solo se usa si dejás de cumplir." }
    ],
    keyPoints: [
      "La carta de crédito es el compromiso irrevocable del banco emisor de honrar una presentación conforme.",
      "Se rige por la UCP 600 (ICC, en vigor desde el 1/07/2007, 39 artículos) cuando el crédito la incorpora.",
      "Principios: autonomía respecto del contrato, los bancos trabajan con documentos y cumplimiento estricto.",
      "Todo crédito UCP 600 es irrevocable aunque no lo diga; la confirmación agrega el compromiso de un segundo banco y cubre el riesgo del emisor y del país.",
      "El banco tiene como máximo 5 días hábiles bancarios para examinar; los documentos de transporte originales se presentan dentro de 21 días del embarque y antes del vencimiento.",
      "El rechazo se comunica en un solo aviso con todas las discrepancias; si el banco no lo hace bien, pierde el derecho a rechazar.",
      "“About” permite una tolerancia de 10% en monto, cantidad o precio; el seguro mínimo es 110% del valor CIF o CIP.",
      "Ante una discrepancia: corregir en plazo, pedir la aceptación del ordenante, enviar en aprobación, pagar bajo reserva, o prevenir con enmiendas."
    ],
    probableQuestions: [
      { question: "¿Qué es una carta de crédito?", answer: "El compromiso irrevocable de un banco emisor, a pedido del importador, de pagar al exportador si presenta documentos que cumplen con los términos del crédito." },
      { question: "Bajo la UCP 600, ¿un crédito que no dice si es revocable es revocable o irrevocable?", answer: "Irrevocable (art. 3)." },
      { question: "¿Cuántos días tiene el banco para examinar los documentos?", answer: "Como máximo 5 días hábiles bancarios siguientes al día de la presentación (art. 14)." },
      { question: "Si el crédito no fija plazo de presentación, ¿cuál es el máximo?", answer: "21 días calendario desde el embarque, y nunca después del vencimiento del crédito." },
      { question: "¿Qué diferencia hay entre banco avisador y confirmador?", answer: "El avisador solo notifica y verifica la autenticidad aparente; el confirmador agrega su propio compromiso de pago." },
      { question: "¿Qué significa que el crédito es autónomo?", answer: "Que es independiente del contrato de compraventa: el banco no se involucra en disputas sobre la mercadería." },
      { question: "Un crédito por “about USD 100.000”, ¿hasta cuánto permite presentar?", answer: "Hasta USD 110.000, por la tolerancia de 10% del art. 30." },
      { question: "¿Qué hacés si los documentos tienen una discrepancia y el crédito vence mañana?", answer: "Si es corregible, corregir y presentar hoy; si no, presentar igual para que se consulte al ordenante si la acepta, y avisar al cliente para que el importador la acepte rápido." },
      { question: "¿Qué es una carta de crédito stand-by?", answer: "Un crédito que funciona como garantía: se cobra solo si el ordenante incumple; se rige por ISP98 o UCP 600." },
      { question: "¿Qué documentos suele exigir una carta de crédito de exportación?", answer: "Factura comercial, documento de transporte, packing list, certificado de origen, póliza de seguro si es CIF o CIP, certificados sanitarios o de inspección y a veces letra de cambio." }
    ],
    sources: [
      { title: "ICC: reglas bancarias y financieras", url: "https://iccwbo.org/business-solutions/banking-finance/" },
      { title: "ICC Academy: evolución de la UCP 600", url: "https://academy.iccwbo.org/trade-finance/article/evolution-of-ucp-600-impact-on-documentary-credits" },
      { title: "SWIFT: ISO 20022", url: "https://www.swift.com/es/node/310059" },
      { title: "BROU", url: "https://www.brou.com.uy" }
    ]
  },

  // ─────────────────────────────────────────────────────────────
  {
    id: "p11-s3",
    moduleId: "p11",
    title: "Cobranza documentaria (URC 522)",
    summary: "En la cobranza los bancos llevan los documentos y solo los entregan contra pago o aceptación, pero no garantizan nada. Es el punto medio de la escalera de riesgo: más barata que la carta de crédito y más segura que la cuenta abierta.",
    minutes: 16,
    sections: [
      {
        heading: "Qué es y qué reglas la gobiernan",
        blocks: [
          { type: "p", text: "En la **cobranza documentaria**, el exportador embarca la mercadería y le entrega los documentos (factura, conocimiento de embarque, certificado de origen, etc.) a **su banco**, con una instrucción: “entregale estos documentos al importador solo si paga” o “solo si acepta esta letra de cambio”. Su banco los manda a un banco en el país del importador, que los presenta y cobra." },
          { type: "p", text: "Las reglas son la **URC 522** (Reglas Uniformes relativas a las Cobranzas), publicación N.º 522 de la ICC, revisión 1995, **en vigor desde el 1/01/1996**. Igual que con la UCP, se aplican cuando la instrucción de cobranza las incorpora. Existe además la **eURC** (versión 1.1) para la presentación electrónica de documentos." },
          { type: "eli5", text: "Es como mandar un paquete **contra reembolso**. El cartero (el banco) tiene la llave del paquete, que es el conocimiento de embarque. Solo se la da al cliente si paga (D/P) o si firma un pagaré (D/A). Pero si el cliente nunca va a buscarlo, el cartero no te paga nada: solo te avisa." },
          { type: "callout", tone: "info", title: "Por qué el B/L es la llave", text: "En el transporte marítimo, el **conocimiento de embarque original “a la orden”** es título de la mercadería: quien lo tiene la retira. Por eso controlar la entrega del B/L es controlar la carga. En aéreo o terrestre el documento de transporte no cumple ese rol de la misma forma, y la cobranza pierde parte de su protección." }
        ]
      },
      {
        heading: "Tipos y partes",
        blocks: [
          { type: "list", items: [
            "**Cobranza simple o limpia** (clean): solo **documentos financieros** (letras, pagarés, cheques), sin documentos comerciales.",
            "**Cobranza documentaria**: **documentos comerciales** (factura, conocimiento de embarque, certificado de origen, packing list…), con o sin documentos financieros."
          ] },
          { type: "table", headers: ["Parte", "Quién es"], rows: [
            ["**Cedente u ordenante** (principal)", "El **exportador**, que confía la gestión de cobro a su banco"],
            ["**Banco remitente**", "El banco del exportador, que recibe los documentos y los envía"],
            ["**Banco cobrador**", "Cualquier banco distinto del remitente que interviene en la cobranza"],
            ["**Banco presentador**", "El banco cobrador que presenta los documentos al girado; normalmente el banco del importador"],
            ["**Girado** (librado)", "El **importador**, a quien se presentan los documentos"]
          ], caption: "Partes según el art. 3 de la URC 522, resumido" },
          { type: "callout", tone: "warn", title: "Ojo con los nombres", text: "En la cobranza el **ordenante es el exportador**; en la carta de crédito el **ordenante es el importador**. Es una trampa clásica de examen. Truco: el ordenante es siempre quien **inicia** el trámite en su banco, y en la cobranza la iniciativa es del exportador." }
        ]
      },
      {
        heading: "D/P y D/A",
        blocks: [
          { type: "table", headers: ["Modalidad", "Cómo funciona", "Riesgo para el exportador"], rows: [
            ["**D/P** – documentos contra pago", "El banco presentador entrega los documentos **solo si el importador paga** (a la vista)", "Que el importador no retire: la mercadería queda en el puerto de destino"],
            ["**D/A** – documentos contra aceptación", "El banco entrega los documentos si el importador **acepta una letra de cambio** a plazo (por ejemplo, 90 días vista). El importador retira la mercadería y paga al vencimiento", "Mayor: el importador ya tiene la mercadería y solo dejó una promesa de pago"]
          ] },
          { type: "p", text: "También existe la entrega “contra otros términos y condiciones”, por ejemplo contra la firma de un pagaré." },
          { type: "eli5", text: "**D/P** es como el delivery que no te da la pizza hasta que le pagás. **D/A** es como el delivery que te da la pizza si firmás un papel que dice “te pago el mes que viene”: ya te la comiste, y si no pagás, al repartidor le queda solo el papel." },
          { type: "tool", toolId: "payment-flows" }
        ]
      },
      {
        heading: "Lo que dice la URC 522, en palabras propias",
        blocks: [
          { type: "list", items: [
            "Los bancos **no examinan** el contenido de los documentos: solo verifican que recibieron los que figuran en la instrucción. Es la gran diferencia con la carta de crédito.",
            "Los bancos **no están obligados a pagar**: actúan como mandatarios. Tampoco responden por la mercadería ni por demoras de mensajería.",
            "No se deben enviar mercaderías **consignadas a un banco** sin su acuerdo previo.",
            "Si la cobranza no dice D/P o D/A y trae una letra a plazo, por defecto los documentos se entregan **contra pago**.",
            "Si el importador no paga o no acepta, el banco presentador avisa al remitente; puede hacerse el **protesto** de la letra si la instrucción lo pide.",
            "Los gastos y comisiones los paga quien diga la instrucción; si el girado se niega, pueden cargarse al cedente."
          ] },
          { type: "callout", tone: "tip", title: "La instrucción de cobranza es todo", text: "Como el banco solo hace lo que le dicen, la **instrucción de cobranza** tiene que ser clara: D/P o D/A, plazo de la letra, quién paga los gastos, si se protesta en caso de impago, qué hacer con la mercadería si no se retira. Un error ahí no lo arregla nadie después." }
        ]
      },
      {
        heading: "El flujo",
        blocks: [
          { type: "steps", items: [
            { title: "1. Contrato", text: "Se pacta “pago D/P a la vista vía cobranza documentaria”." },
            { title: "2. Embarque", text: "El exportador embarca y obtiene el B/L y los demás documentos." },
            { title: "3. Entrega al banco remitente", text: "El exportador entrega documentos e instrucción de cobranza sujeta a la URC 522 a su banco." },
            { title: "4. Envío", text: "El banco remitente manda los documentos al banco cobrador o presentador en el país del importador." },
            { title: "5. Aviso al importador", text: "El banco presentador avisa al girado que llegaron los documentos." },
            { title: "6. Pago o aceptación", text: "En D/P el importador paga y recibe los documentos; en D/A acepta la letra, recibe los documentos y paga al vencimiento." },
            { title: "7. Retiro de la carga", text: "Con el B/L original, el importador retira la mercadería y despacha en aduana." },
            { title: "8. Transferencia de fondos", text: "El banco presentador transfiere al remitente, que acredita al exportador." }
          ] },
          { type: "example", title: "El importador que no aparece", text: "Un exportador uruguayo manda un contenedor a Ecuador bajo D/P. El importador encontró un precio mejor y no retira los documentos. El contenedor queda en el puerto de destino generando **almacenaje y demoras de contenedor**, y el exportador tiene que elegir entre revender a otro comprador en destino, reembarcar de vuelta (pagando flete) o abandonar la carga. Los bancos cumplieron: avisaron y no entregaron documentos. Por eso muchas veces se combina la cobranza con un **anticipo parcial** que cubra al menos el flete de retorno." },
          { type: "example", title: "Cobranza D/A impaga", text: "Un exportador de cueros envió documentos bajo **D/A a 90 días** a un importador de Egipto. El importador aceptó la letra, retiró la mercadería y al vencimiento no pagó. ¿Responde el banco? **No**: cumplió su función de entregar documentos contra aceptación. Opciones: si la instrucción lo previó, **protestar** la letra; gestión de cobro o abogados; reclamar al **seguro de crédito** si se contrató; y para el futuro, pedir **aval bancario** en la letra, usar D/P o carta de crédito. Que exista el TLC MERCOSUR–Egipto (vigente desde 2017) da preferencias arancelarias, pero no cambia el riesgo comercial." }
        ]
      },
      {
        heading: "Carta de crédito vs. cobranza",
        blocks: [
          { type: "table", headers: ["Aspecto", "Carta de crédito (UCP 600)", "Cobranza (URC 522)"], rows: [
            ["Compromiso bancario de pago", "**Sí** (emisor y confirmador)", "**No** (los bancos son mandatarios)"],
            ["Examen de documentos", "Sí, en apariencia, hasta 5 días hábiles", "No; solo verifican que estén los listados"],
            ["Quién toma la iniciativa", "El **importador** abre el crédito", "El **exportador** inicia la cobranza"],
            ["Costo", "Alto", "Medio"],
            ["Seguridad para el exportador", "Alta", "Media"],
            ["Flexibilidad documental", "Baja (cumplimiento estricto)", "Alta"]
          ] },
          { type: "eli5", text: "La carta de crédito es un **seguro con garantía**: alguien con plata promete pagar. La cobranza es un **mensajero muy prolijo**: lleva tus papeles, los entrega solo si se cumple lo pactado, pero si el otro no paga, el mensajero no pone un peso de su bolsillo." }
        ]
      }
    ],
    eli5: [
      { concept: "Cobranza documentaria", text: "Es un envío contra reembolso: el cartero solo entrega la llave del paquete si el cliente paga o firma, pero no te paga si el cliente desaparece." },
      { concept: "D/P", text: "Es el delivery que no te da la pizza hasta que pagás." },
      { concept: "D/A", text: "Es el delivery que te da la pizza si firmás que pagás el mes que viene: si no pagás, al repartidor le queda solo el papel." },
      { concept: "Banco como mandatario", text: "Es como un amigo al que le pedís que entregue un sobre: hace exactamente lo que le dijiste, pero no se hace cargo si el otro no cumple." },
      { concept: "Protesto", text: "Es como dejar constancia ante un escribano de que el otro no pagó, para poder reclamarle después con más fuerza." }
    ],
    keyPoints: [
      "En la cobranza los bancos llevan y entregan documentos según una instrucción, pero no garantizan el pago.",
      "Se rige por la URC 522 (ICC, revisión 1995, en vigor desde el 1/01/1996) cuando la instrucción la incorpora.",
      "Cobranza simple: solo documentos financieros; documentaria: documentos comerciales con o sin financieros.",
      "Partes: cedente (exportador), banco remitente, banco cobrador, banco presentador y girado (importador).",
      "D/P: documentos contra pago; D/A: documentos contra aceptación de una letra a plazo, con más riesgo para el exportador.",
      "Los bancos no examinan el contenido de los documentos; si no se indica D/P o D/A, se entrega contra pago.",
      "El gran riesgo es que el importador no retire y la mercadería quede en destino generando costos.",
      "Frente a la carta de crédito: más barata y flexible, pero menos segura; la iniciativa es del exportador."
    ],
    probableQuestions: [
      { question: "¿Qué diferencia hay entre una carta de crédito y una cobranza documentaria?", answer: "En la carta de crédito hay compromiso de pago bancario y examen de documentos (UCP 600); en la cobranza los bancos solo entregan documentos contra pago o aceptación sin garantizar (URC 522)." },
      { question: "En una cobranza D/A, ¿qué hace el importador para recibir los documentos?", answer: "Acepta una letra de cambio a plazo y paga al vencimiento." },
      { question: "¿Quién es el banco presentador?", answer: "El banco cobrador que presenta los documentos al girado, normalmente el banco del importador." },
      { question: "¿Responde el banco si el importador no paga una cobranza D/A?", answer: "No; los bancos son mandatarios y no garantizan el pago." },
      { question: "¿Los bancos examinan los documentos en una cobranza?", answer: "No, solo verifican que recibieron los listados en la instrucción." },
      { question: "Si la instrucción no dice D/P ni D/A y hay una letra a plazo, ¿cómo se entregan los documentos?", answer: "Contra pago." },
      { question: "¿Cuál es el principal riesgo de la cobranza D/P para el exportador?", answer: "Que el importador no retire los documentos y la mercadería quede en destino generando costos." },
      { question: "¿Qué es una cobranza limpia?", answer: "La que incluye solo documentos financieros (letras, pagarés, cheques), sin documentos comerciales." }
    ],
    sources: [
      { title: "ICC: URC 522", url: "https://iccwbo.org/business-solutions/banking-finance/urc-522/" },
      { title: "ICC: eURC versión 1.1", url: "https://iccwbo.org/news-publications/policies-reports/urc-522-icc-uniform-rules-for-collections-supplement-for-electronic-presentation-eurc-version-1-1/" },
      { title: "ICC: texto URC 522 (PDF)", url: "https://iccwbo.org/wp-content/uploads/sites/3/2019/06/icc-uniform-rules-for-collections-v1-0.pdf" }
    ]
  },

  // ─────────────────────────────────────────────────────────────
  {
    id: "p11-s4",
    moduleId: "p11",
    title: "Giro, transferencia y letra de cambio",
    summary: "La transferencia internacional es el medio de pago más usado: con ella se liquidan el pago anticipado y la cuenta abierta. Saber qué datos lleva, cómo viaja por SWIFT y quién paga las comisiones te evita reclamos de clientes; la letra de cambio aparece en la cobranza D/A y en ciertas cartas de crédito.",
    minutes: 15,
    sections: [
      {
        heading: "Qué es una transferencia internacional",
        blocks: [
          { type: "p", text: "Una **transferencia** o **giro internacional** es una orden de pago de un banco a otro para acreditar fondos a un beneficiario en el exterior. Viaja por **SWIFT**, la red de mensajería interbancaria. Es el medio más usado del comercio exterior, porque tanto el **pago anticipado** como la **cuenta abierta** se terminan pagando por transferencia." },
          { type: "eli5", text: "SWIFT es como el **WhatsApp de los bancos**: no mueve la plata en un camión blindado, sino que manda mensajes muy precisos de un banco a otro diciendo “debitá acá, acreditá allá”. Si el banco de destino no tiene relación directa con el de origen, el mensaje pasa por un banco intermedio, como cuando un amigo en común te pasa un contacto." },
          { type: "p", text: "Cuando la moneda es el dólar, lo habitual es que la transferencia pase por un **banco corresponsal o intermediario** en Nueva York. Cada banco que toca la transferencia puede cobrar su comisión, y ahí nace la mayoría de los reclamos de “me llegó menos plata”." }
        ]
      },
      {
        heading: "De los MT al ISO 20022",
        blocks: [
          { type: "list", items: [
            "Históricamente se usaban el **MT103** (transferencia de un cliente) y el **MT202** o **MT202 COV** (de banco a banco o de cobertura).",
            "SWIFT migró al estándar **ISO 20022** (mensajes “MX”, con más datos y mejor estructurados). La coexistencia de los dos formatos para pagos transfronterizos **terminó el 22/11/2025**.",
            "Hoy el equivalente al MT103 es el **pacs.008** y el del MT202 es el **pacs.009**; los extractos van, por ejemplo, en camt.053. Desde 2026 SWIFT cobra cargos por traducción o contingencia.",
            "**SWIFT gpi** permite seguir la transferencia de punta a punta con un código único, el **UETR**."
          ] },
          { type: "callout", tone: "tip", title: "Cómo se habla en la oficina", text: "Aunque formalmente el MT103 se retiró para pagos transfronterizos, mucha gente sigue diciendo “mandame el MT103” para pedir el comprobante de la transferencia. Entendé lo que te piden y, si podés, pedí también el **UETR** para rastrearla." }
        ]
      },
      {
        heading: "Los datos que no pueden faltar",
        blocks: [
          { type: "list", items: [
            "Nombre y dirección del **beneficiario**.",
            "Número de cuenta o **IBAN** (si el país lo usa: en Europa sí, en Uruguay no).",
            "**BIC o código SWIFT** del banco del beneficiario.",
            "Banco intermediario o corresponsal, si corresponde.",
            "Moneda y monto.",
            "Concepto (por ejemplo, el número de factura o proforma).",
            "**Opción de gastos**: OUR, SHA o BEN."
          ] },
          { type: "callout", tone: "uy", title: "Lo que te pide el banco en Uruguay", text: "Además de los datos de la transferencia, el banco uruguayo te va a pedir **respaldo documental** (proforma, factura, DUA o contrato) por las normas de prevención de lavado de activos (Ley 19.574). No es un control de cambios: Uruguay tiene libertad cambiaria. Es el “conocé a tu cliente”." },
          { type: "steps", items: [
            { title: "1. Acuerdo", text: "Importador y exportador pactan precio, Incoterm y pago anticipado en la proforma." },
            { title: "2. Instrucción", text: "El importador instruye a su banco la transferencia, con la proforma de respaldo." },
            { title: "3. Envío", text: "El banco ordenante debita la cuenta y manda el pacs.008 por SWIFT, directo o vía un corresponsal (en dólares, normalmente en Nueva York)." },
            { title: "4. Controles y acreditación", text: "El banco del beneficiario aplica controles de cumplimiento (lavado, sanciones) y acredita." },
            { title: "5. Embarque", text: "El exportador ve los fondos, embarca y manda los documentos directamente al importador." }
          ] },
          { type: "tool", toolId: "payment-flows" }
        ]
      },
      {
        heading: "OUR, SHA y BEN: quién paga las comisiones",
        blocks: [
          { type: "table", headers: ["Código", "En ISO 20022", "Quién paga", "Efecto"], rows: [
            ["**OUR**", "DEBT", "El ordenante paga todos los gastos", "El beneficiario recibe el monto íntegro"],
            ["**SHA**", "SHAR", "Compartidos: cada uno paga los de su banco", "Es el más común; los intermediarios suelen descontar del monto"],
            ["**BEN**", "CRED", "El beneficiario paga todos", "Llega el monto neto de comisiones"]
          ] },
          { type: "eli5", text: "Es como mandar un regalo por encomienda. **OUR**: vos pagás todo el envío y tu primo recibe el regalo sin poner un peso. **SHA**: vos pagás el despacho y tu primo paga el retiro. **BEN**: tu primo paga todo al recibirlo. Si el regalo era plata, con SHA o BEN le llega un poco menos." },
          { type: "example", title: "Los EUR que faltan", text: "Un importador alemán tenía que pagar **EUR 20.000** por anticipado. El exportador uruguayo recibe **EUR 19.935** en su cuenta del BROU, y el cliente jura que mandó 20.000. Faltan **EUR 65**: la transferencia salió con opción **SHA** (o BEN) y un banco intermediario descontó su comisión del monto. Para evitarlo, la proforma tiene que decir que **todos los gastos bancarios fuera de Uruguay son por cuenta del comprador** y pedir la opción **OUR**. Y si el exportador va a convertir los euros a dólares en Uruguay, hay un costo de cambio adicional: puede convenir una cuenta en euros." },
          { type: "example", title: "Cuentas con las tres opciones", text: "Un importador uruguayo paga USD 10.000 a un proveedor en China. Su banco cobra USD 40 de comisión de envío, el intermediario en Nueva York USD 25 y el banco chino USD 15. Con **OUR**, al importador le debitan 10.000 + 40 + 25 + 15 = **USD 10.080** y el proveedor recibe **USD 10.000**. Con **SHA**, al importador le debitan 10.000 + 40 = **USD 10.040** y el proveedor recibe 10.000 − 25 − 15 = **USD 9.960**. Con **BEN**, al importador le debitan **USD 10.000** y el proveedor recibe 10.000 − 40 − 25 − 15 = **USD 9.920**. (Comisiones ficticias, solo para practicar la lógica.)" }
        ]
      },
      {
        heading: "La letra de cambio",
        blocks: [
          { type: "p", text: "La **letra de cambio** es un título de crédito por el cual una persona, el **librador**, ordena a otra, el **librado**, pagar una suma de dinero a un **beneficiario o tomador** en una fecha determinada, que puede ser **a la vista** (al presentarla) o **a plazo** (por ejemplo, a 90 días)." },
          { type: "doc", docId: "letra-cambio" },
          { type: "table", headers: ["Figura", "Quién es en comex"], rows: [
            ["**Librador**", "Normalmente el exportador, que gira la letra"],
            ["**Librado**", "El importador (en la cobranza) o un banco (en ciertas cartas de crédito), a quien se le ordena pagar"],
            ["**Beneficiario o tomador**", "Quien cobra: el propio exportador o el banco a quien se la endosa"],
            ["**Aceptación**", "La firma del librado en la letra, que lo obliga a pagar al vencimiento"],
            ["**Aval**", "La garantía de un tercero, típicamente un banco, de que la letra se pagará"]
          ] },
          { type: "list", items: [
            "En la **cobranza D/A**, el importador **acepta** la letra para recibir los documentos: el exportador se queda con un crédito documentado.",
            "En las cartas de crédito **por aceptación o negociación** aparecen letras (en inglés, *drafts*) que el banco acepta o compra.",
            "Si un banco **avala** la letra, se vuelve fácilmente descontable: el exportador puede venderla y cobrar antes. Eso es el **forfaiting**.",
            "Si la letra no se paga, puede hacerse el **protesto**, la constancia formal del impago que facilita reclamar después."
          ] },
          { type: "eli5", text: "La letra de cambio es un **vale formal**. Vos (librador) escribís: “Juan (librado), pagale $ 1.000 a Pedro (tomador) el 30 de junio”. Si Juan firma abajo, **aceptó**: ahora está obligado. Y si un banco firma al costado diciendo “si Juan no paga, pago yo” (aval), cualquiera te compra ese vale hoy, aunque sea con un pequeño descuento." },
          { type: "callout", tone: "warn", title: "Derecho interno", text: "Los requisitos formales de la letra (qué menciones tiene que tener, cómo se protesta) los fija la ley de cada país. La investigación no detalla la normativa uruguaya de títulos valores, así que, si te lo preguntan con detalle, conviene consultarlo en la fuente legal antes de afirmarlo." }
        ]
      },
      {
        heading: "Cuándo usar cada cosa",
        blocks: [
          { type: "table", headers: ["Situación", "Instrumento habitual"], rows: [
            ["Cliente nuevo con poco poder de negociación", "Transferencia anticipada (total o parcial)"],
            ["Cliente de años, de confianza", "Transferencia en cuenta abierta (con seguro de crédito si el monto es grande)"],
            ["Se quiere financiar al importador con algo de respaldo", "Cobranza D/A con letra aceptada, idealmente avalada"],
            ["Monto grande, país de riesgo, primera operación", "Carta de crédito, confirmada si el emisor no es conocido"]
          ] },
          { type: "eli5", text: "Elegir el instrumento es como elegir cómo cobrarle a alguien por cuidar su perro una semana: al vecino de siempre le cobrás al final por transferencia; a alguien nuevo le pedís la mitad antes; y si es alguien que vive lejos y no conocés, le pedís que deje la plata con un tercero de confianza." }
        ]
      }
    ],
    eli5: [
      { concept: "SWIFT", text: "Es el WhatsApp de los bancos: no lleva plata en camión, manda mensajes precisos de “debitá acá, acreditá allá”." },
      { concept: "OUR / SHA / BEN", text: "Es quién paga la encomienda de un regalo: vos todo (OUR), mitad y mitad (SHA) o el que lo recibe (BEN)." },
      { concept: "Banco corresponsal", text: "Es el amigo en común que te pasa un contacto: si tu banco no conoce al banco de destino, el mensaje pasa por él, y a veces cobra por el favor." },
      { concept: "Letra de cambio", text: "Es un vale formal: le ordenás a alguien que le pague a otro en una fecha; si firma abajo, aceptó y queda obligado." },
      { concept: "Aval bancario", text: "Es como un garante en un alquiler: si el inquilino no paga, paga el garante; por eso todos confían más en ese papel." },
      { concept: "UETR", text: "Es el número de seguimiento de una encomienda: con él sabés en qué parte del camino está tu transferencia." }
    ],
    keyPoints: [
      "La transferencia internacional viaja por SWIFT y es el medio más usado: liquida el pago anticipado y la cuenta abierta.",
      "La coexistencia MT/MX para pagos transfronterizos terminó el 22/11/2025: el MT103 equivale hoy al pacs.008 y el MT202 al pacs.009.",
      "SWIFT gpi permite rastrear la transferencia con el UETR.",
      "Datos clave: beneficiario, cuenta o IBAN, BIC/SWIFT, intermediario, moneda, monto, concepto y opción de gastos.",
      "OUR: el ordenante paga todo; SHA: cada uno paga los de su banco; BEN: el beneficiario paga todo.",
      "Para recibir el monto íntegro, la proforma debe poner los gastos del exterior a cargo del comprador e instruir OUR.",
      "La letra de cambio tiene librador, librado y tomador; aparece en la cobranza D/A y en cartas de crédito por aceptación o negociación.",
      "Una letra avalada por un banco se puede descontar (forfaiting); si no se paga, se puede protestar."
    ],
    probableQuestions: [
      { question: "¿Qué significan OUR, SHA y BEN?", answer: "Las opciones de gastos: OUR, el ordenante paga todo; SHA, cada uno paga los de su banco; BEN, el beneficiario paga todo." },
      { question: "Un cliente recibió menos dinero del que le mandaron. ¿Qué pasó?", answer: "Probablemente la transferencia salió con SHA o BEN y un intermediario descontó su comisión; para evitarlo, pedir OUR." },
      { question: "¿Qué mensaje ISO 20022 reemplaza al MT103?", answer: "El pacs.008." },
      { question: "¿Cuándo terminó la coexistencia MT/MX para pagos transfronterizos?", answer: "El 22/11/2025." },
      { question: "¿Qué datos necesitás para hacer una transferencia al exterior?", answer: "Nombre y dirección del beneficiario, cuenta o IBAN, BIC/SWIFT, banco intermediario si aplica, moneda, monto, concepto y opción de gastos." },
      { question: "¿Qué es el UETR?", answer: "El código único de SWIFT gpi que permite seguir una transferencia de punta a punta." },
      { question: "¿Quiénes son el librador, el librado y el tomador de una letra?", answer: "El librador la gira, el librado es quien debe pagar y el tomador es quien cobra." },
      { question: "¿Qué es el forfaiting?", answer: "Vender una letra o crédito, normalmente avalado por un banco, para cobrar antes con descuento." }
    ],
    sources: [
      { title: "SWIFT: ISO 20022, fin de la coexistencia", url: "https://www.swift.com/es/node/310059" },
      { title: "BankPulse: retiro del MT103 (22/11/2025)", url: "https://bankpulse.io/howto/swift-iso-20022-mt103-retired" },
      { title: "Banco Central del Uruguay", url: "https://www.bcu.gub.uy" },
      { title: "BROU", url: "https://www.brou.com.uy" },
      { title: "ICC: URC 522", url: "https://iccwbo.org/business-solutions/banking-finance/urc-522/" }
    ]
  }
]
