import type { InterviewQuestion } from './types'

// Preguntas de entrevista para puestos junior de comercio exterior en Uruguay:
// estudio de despachante, forwarder o agencia marítima, departamento de comex
// y mesa de comercio exterior de un banco. Las respuestas modelo están en primera
// persona y se apoyan en los datos de docs/research. Conviene adaptarlas con ejemplos propios.
export const interviewQuestions: InterviewQuestion[] = [
  // ───────────────────────────── TÉCNICAS ─────────────────────────────
  {
    id: 'iq-t01',
    category: 'tecnica',
    question: "¿Qué es un Incoterm y qué cosas no regula?",
    modelAnswer:
      "Un Incoterm es una regla de la Cámara de Comercio Internacional que, en una compraventa internacional, define dónde se entrega la mercadería, cuándo pasa el riesgo del vendedor al comprador, quién paga cada costo y quién hace los trámites aduaneros de exportación y de importación. Lo que no regula es igual de importante: no dice cuándo pasa la propiedad, ni fija el precio, ni el medio de pago, ni qué pasa si alguien incumple. Eso va en el contrato. Hoy rige la versión 2020; la ICC está trabajando en la 2030, con lanzamiento previsto para fines de 2029, así que cuando veo “Incoterms 2026” sé que es un nombre comercial de algún blog. En la práctica, siempre lo escribo con la regla, el lugar lo más preciso posible y la versión, por ejemplo “FCA Terminal TCP, Montevideo, Incoterms® 2020”.",
    tips: [
      "Mencioná lo que **no** regulan: es lo que diferencia una respuesta memorizada de una entendida.",
      "Cerrá con un ejemplo bien escrito, con lugar y versión.",
      "Si te preguntan por la versión 2030, decí que todavía no existe y que está prevista para fines de 2029.",
    ],
    moduleIds: ['p02'],
  },
  {
    id: 'iq-t02',
    category: 'tecnica',
    question: "Un cliente quiere exportar en contenedor y dice “vendo FOB Montevideo”. ¿Qué le recomendás?",
    modelAnswer:
      "Le recomendaría pasar a FCA, con la terminal o el depósito como lugar de entrega. El problema de FOB con contenedores es que el contenedor se entrega en la terminal días antes de que lo carguen, pero con FOB el riesgo sigue en el vendedor hasta que el contenedor está a bordo. Ese tramo lo controla la terminal y no él: si el contenedor se daña en el patio, el problema sigue siendo suyo. Con FCA el riesgo pasa cuando entrega el contenedor al transportista que designó el comprador, que es lo que realmente pasa en la operativa. Si el cliente necesita un B/L con anotación “a bordo” porque cobra con carta de crédito, en FCA 2020 se puede pactar que el comprador instruya a su transportista para emitirlo. FOB lo dejaría para graneles, como soja o celulosa.",
    tips: [
      "Es una pregunta clásica de entrevista: respondé con el **porqué** del riesgo, no solo con la sigla.",
      "Sumá el detalle del B/L a bordo en FCA 2020; muestra que conocés los cambios de la versión.",
    ],
    moduleIds: ['p02'],
  },
  {
    id: 'iq-t03',
    category: 'tecnica',
    question: "¿Qué diferencia hay entre CIF y CIP?",
    modelAnswer:
      "Las dos son reglas “C” en las que el vendedor paga el transporte principal y además contrata un seguro, pero tienen tres diferencias. Primero, el modo: CIF es solo para transporte marítimo o fluvial, mientras que CIP sirve para cualquier modo, incluido el aéreo y el multimodal. Segundo, el momento del riesgo: en CIF pasa cuando la mercadería está a bordo del buque en origen; en CIP, cuando se entrega al primer transportista. Tercero, la cobertura del seguro: desde la versión 2020, CIP exige cobertura amplia, Institute Cargo Clauses (A), que es prácticamente todo riesgo, mientras que CIF mantiene la mínima, cláusulas (C). En los dos casos el monto mínimo asegurado es el 110 % del valor del contrato. Por eso, si alguien me pide “CIF aéreo”, le explico que lo correcto es CIP.",
    tips: [
      "Ordená la respuesta en tres diferencias: modo, riesgo y seguro.",
      "El dato del seguro (A) en CIP y (C) en CIF es lo que más se pregunta del cambio de 2020.",
    ],
    moduleIds: ['p02'],
  },
  {
    id: 'iq-t04',
    category: 'tecnica',
    question: "Importamos con precio FOB Shanghái. ¿Cómo armás el valor en aduana?",
    modelAnswer:
      "Uruguay aplica el Acuerdo de Valoración de la OMC y valora en base CIF, es decir, el valor puesto en el puerto o la frontera de entrada. Parto del precio de transacción de la factura, que es el método 1, y le sumo los ajustes que correspondan: el flete internacional hasta Montevideo con sus recargos, como el BAF, y el seguro. Si no hay póliza, la DNA aplica un seguro ficto del 1 % del FOB. Por ejemplo, FOB 12.000 dólares, flete 900 y sin seguro: el seguro ficto es 120 y el valor en aduana queda en 13.020. Ese CIF es la base del arancel, de la Tasa Consular y de las tasas, y el CIF más el arancel es la base del IVA. Los gastos portuarios y de almacenaje en Uruguay no integran el valor.",
    tips: [
      "Tené un ejemplo numérico corto y que cierre: impresiona más que la teoría.",
      "Aclarar qué gastos **no** entran (los de destino) muestra criterio.",
    ],
    moduleIds: ['p06'],
  },
  {
    id: 'iq-t05',
    category: 'tecnica',
    question: "¿Qué documentos le pedís a un cliente para preparar un DUA de importación?",
    modelAnswer:
      "Le pido la factura comercial, el documento de transporte, que puede ser un B/L, una guía aérea o un CRT, el packing list, y el certificado de origen si vamos a pedir una preferencia, por ejemplo el ACE 18 si viene de Brasil. Si el flete y el seguro no están en la factura, necesito las constancias para armar el CIF. Además reviso con la NCM si la mercadería tiene intervenciones de organismos, como MSP, MGAP, LATU o URSEA, que se tramitan por la VUCE, idealmente antes del embarque. Del lado del cliente, que tenga RUT, que esté al día con DNA, DGI, BPS y BSE, y el poder al despachante registrado. Y antes de transmitir, cruzo los documentos entre sí: número de factura, bultos, pesos y descripción tienen que coincidir.",
    tips: [
      "Separá documentos de la mercadería y requisitos del cliente: se nota orden mental.",
      "Terminar con el control cruzado muestra que entendés para qué sirve cada documento.",
    ],
    moduleIds: ['p04', 'p05'],
  },
  {
    id: 'iq-t06',
    category: 'tecnica',
    question: "Explicame las funciones del conocimiento de embarque y sus tipos.",
    modelAnswer:
      "El B/L cumple tres funciones: es recibo de la carga, porque el transportista declara qué recibió y en qué estado aparente; es prueba del contrato de transporte; y es título representativo de la mercadería. Esa tercera función es la clave: si el B/L es “a la orden”, se transmite por endoso, y quien presenta un original bien endosado retira la carga. Por eso los bancos lo usan como garantía en las cartas de crédito. Según cómo circula puede ser nominativo, a la orden o al portador. Según el estado de la carga, limpio o sucio, y los bancos rechazan los sucios. Según el momento, “shipped on board” o “received for shipment”. Y según quién lo emite, master si es la naviera o house si es el forwarder. Normalmente se emiten tres originales.",
    tips: [
      "Usá la analogía del ticket del guardarropa si te piden explicarlo simple.",
      "Relacioná el B/L sucio con la carta de crédito: une dos módulos en una respuesta.",
    ],
    moduleIds: ['p04'],
  },
  {
    id: 'iq-t07',
    category: 'tecnica',
    question: "¿Qué diferencia hay entre un master y un house?",
    modelAnswer:
      "El master lo emite el transportista real, la naviera en el caso de un MBL o la aerolínea en una MAWB, a nombre del consolidador o forwarder. El house lo emite el forwarder o el NVOCC a cada uno de sus clientes. Se ve claro en carga consolidada: un forwarder junta en un contenedor la mercadería de varios embarcadores; la naviera le emite un solo master por el contenedor, y él le emite un house a cada cliente. En destino, el despachante trabaja con el house de su cliente, pero la carga llega manifestada bajo el master, y en Montevideo el depósito desconsolida y separa cada lote por su house. Para el cliente es importante saber con quién tiene el contrato: con el forwarder que le emitió el house.",
    tips: [
      "Un ejemplo de consolidación LCL hace que la respuesta se entienda sola.",
      "Mencioná que lo mismo pasa en aéreo con MAWB y HAWB.",
    ],
    moduleIds: ['p04', 'p12'],
  },
  {
    id: 'iq-t08',
    category: 'tecnica',
    question: "¿Qué es un MIC/DTA y cómo se relaciona con el CRT?",
    modelAnswer:
      "El CRT es la carta de porte del transporte internacional por carretera: el documento del contrato entre el remitente y la empresa de transporte, en el marco del ATIT. Hay uno por remitente o contrato. El MIC/DTA es un solo documento con dos funciones: es el manifiesto de toda la carga del camión y, a la vez, la declaración de tránsito aduanero. Gracias a eso el camión cruza fronteras precintado, bajo control aduanero, sin pagar tributos en cada país de paso. La relación es simple: un MIC/DTA por vehículo, que puede amparar varios CRT. Si un camión trae mercadería de dos exportadores brasileños, viaja con dos CRT y un MIC/DTA. Lo emite el transportista o su agente de transporte aduanero, y en el MERCOSUR está informatizado por la Resolución GMC 17/04.",
    tips: [
      "La frase “un MIC/DTA por camión, varios CRT adentro” es la que tienen que escuchar.",
      "Si querés sumar, mencioná los precintos y la ruta declarada.",
    ],
    moduleIds: ['p04'],
  },
  {
    id: 'iq-t09',
    category: 'tecnica',
    question: "¿Qué son los canales verde, naranja y rojo?",
    modelAnswer:
      "Son el resultado de la selectividad, que el Código Aduanero prevé en el artículo 74: después de numerar el DUA y pagar, se pide canal y LUCIA lo asigna por análisis de riesgo, con una parte al azar. En verde hay cumplido automático, sin revisión antes del levante. En naranja un Vista hace un control documental, que puede terminar en revisión física. En rojo hay control documental y verificación física: el despachante entrega el sobre con la documentación y tiene cinco días hábiles para presentarse a la verificación. En exportación solo se usan verde y rojo. Además, desde la numeración hay 30 días corridos para pedir canal, porque si no el DUA vence. Y ser Operador Económico Calificado reduce las inspecciones.",
    tips: [
      "Sumá los plazos (30 días para pedir canal, 5 hábiles en rojo): son lo que diferencia a alguien que estudió.",
      "Aclarar que el rojo no es una acusación sino gestión de riesgo sirve para la pregunta situacional que suele venir después.",
    ],
    moduleIds: ['p05'],
  },
  {
    id: 'iq-t10',
    category: 'tecnica',
    question: "¿Qué tributos paga una importación desde China?",
    modelAnswer:
      "Sobre el valor en aduana, que es el CIF, se paga la TGA según la NCM, que es el arancel, y la Tasa Consular, que por ley es del 5 % fuera del MERCOSUR. Después vienen las tasas de servicio: la tasa de servicios aduaneros del 0,2 % del CIF con tope de 50 dólares, la de servicios extraordinarios por tramo de valor y la de inspección no intrusiva de 85 UI por DUA. Luego los tributos internos sobre el CIF más la TGA: IVA del 22 % o del 10 %, y si el importador es contribuyente, el anticipo de IVA del 10 % o 3 % y, para bienes de consumo del anexo, el anticipo de IRAE, que desde el 1/1/2026 es del 4 %. Si el producto lo tiene, IMESI. Para un contribuyente, el IVA y los anticipos se recuperan; el resto es costo.",
    tips: [
      "Ordenalo en tres bloques: sobre el CIF, tasas fijas y tributos internos.",
      "Separar lo que es costo de lo que se recupera es lo que más valora un importador.",
      "Si no estás seguro de una alícuota vigente, decí que la confirmarías en LUCIA: es mejor que inventar.",
    ],
    moduleIds: ['p06'],
  },
  {
    id: 'iq-t11',
    category: 'tecnica',
    question: "¿Y si la misma mercadería viene de Brasil?",
    modelAnswer:
      "Si viene con prueba de origen del ACE 18, que es el acuerdo de la ALADI que instrumenta el libre comercio del MERCOSUR, la TGA es 0 %. En el DUA se declara con el código de acuerdo 310, que exige certificado o declaración de origen. Pero no es gratis: la Tasa Consular sigue, aunque al 3 %, y se pagan las tasas de servicio, el IVA y los anticipos igual que desde China. Por ejemplo, en una importación de vajilla de vidrio con un CIF de 10.860 dólares, el arancel es cero, pero la Tasa Consular son 325,80 dólares. Sin un certificado válido se pagaría la TGA extrazona y la Tasa Consular del 5 %. Por eso con el proveedor brasileño reviso desde el principio que el certificado salga bien: NCM, factura y valor.",
    tips: [
      "No confundas ACE 18 (acuerdo) con AEC (arancel externo común).",
      "Un número concreto vuelve creíble la respuesta.",
    ],
    moduleIds: ['p06', 'p10'],
  },
  {
    id: 'iq-t12',
    category: 'tecnica',
    question: "¿Qué es la NCM y cómo clasificás un producto?",
    modelAnswer:
      "La NCM es la Nomenclatura Común del MERCOSUR. Toma los seis dígitos del Sistema Armonizado, que administra la Organización Mundial de Aduanas, y le suma dos dígitos del MERCOSUR, en total ocho. En Uruguay se agregan dos dígitos de apertura nacional, por eso el DUA pide diez. Para clasificar, primero entiendo qué es el producto: material, función y grado de elaboración. Después ubico la sección y el capítulo, leo las notas legales y elijo la partida aplicando las Reglas Generales Interpretativas en orden: la primera dice que mandan los textos de partida y las notas, no los títulos. Bajo a subpartida con la regla 6. Consulto las notas explicativas y los dictámenes, y al final verifico en el arancel integrado de LUCIA la TGA y las intervenciones.",
    tips: [
      "Explicá la estructura de dígitos con un ejemplo si te dan pie.",
      "Mencionar que la RGI 1 es la base muestra que no clasificás “por intuición”.",
    ],
    moduleIds: ['p06'],
  },
  {
    id: 'iq-t13',
    category: 'tecnica',
    question: "¿Qué es la admisión temporaria y qué controlarías en una carpeta de AT?",
    modelAnswer:
      "Es un régimen suspensivo de la Ley 18.184 que permite importar insumos sin pagar arancel, IVA ni anticipos, siempre que se transformen y se exporten. Al cliente industrial le da capital de trabajo, porque no inmoviliza plata en tributos de algo que se va a ir del país. La operación dura 18 meses desde la autorización del LATU, con una sola prórroga de hasta 18 meses más, que hay que pedir al menos 90 días antes del vencimiento. En una carpeta controlaría primero esa fecha, después el saldo pendiente según los consumos específicos aprobados, y si se acerca la ventana de los 90 días. Llevaría una planilla de vencimientos con alertas, porque hay resoluciones que negaron prórrogas pedidas fuera de plazo aunque fuera por un error involuntario.",
    tips: [
      "Los números (18 meses, 90 días) son lo que buscan escuchar.",
      "Ofrecer una herramienta concreta, como la planilla con alertas, convierte la teoría en trabajo real.",
    ],
    moduleIds: ['p07'],
  },
  {
    id: 'iq-t14',
    category: 'tecnica',
    question: "Un usuario de zona franca le vende a una empresa de Montevideo. ¿Qué pasa aduaneramente?",
    modelAnswer:
      "Para la aduana es una importación a todos sus efectos. La zona franca es territorio uruguayo, pero queda fuera del territorio aduanero para los tributos de importación. Entonces, cuando la mercadería sale de la zona hacia el resto del país, el comprador de Montevideo tiene que hacer un DUA de importación y pagar arancel según el origen, Tasa Consular, IVA, anticipos y tasas, como si la mercadería viniera del exterior. El Código Aduanero lo dice en el artículo 164. Al revés, si una empresa de Montevideo le vende a la zona franca, es una exportación, aunque los beneficios a la exportación, como la devolución de tributos, se dan recién cuando se comprueba que la mercadería salió hacia otro país.",
    tips: [
      "La clave es la idea “territorio uruguayo, pero no territorio aduanero”.",
      "Contestar también el sentido inverso suma puntos.",
    ],
    moduleIds: ['p08'],
  },
  {
    id: 'iq-t15',
    category: 'tecnica',
    question: "¿Qué diferencia hay entre una carta de crédito y una cobranza documentaria?",
    modelAnswer:
      "En la carta de crédito hay un compromiso de pago del banco: el emisor, y el confirmador si lo hay, se obligan a pagar si el exportador presenta documentos conformes. Se rige por la UCP 600 y los bancos examinan los documentos en hasta cinco días hábiles bancarios. En la cobranza, que se rige por la URC 522, los bancos son solo mandatarios: entregan los documentos al importador contra pago, D/P, o contra la aceptación de una letra, D/A, pero no garantizan nada y no examinan el contenido. También cambia quién toma la iniciativa: el crédito lo abre el importador; la cobranza la inicia el exportador. Por eso la carta de crédito es más segura para el exportador, pero más cara y menos flexible en lo documental.",
    tips: [
      "Para la mesa de comex de un banco, esta es casi segura: tenela bien armada.",
      "Ubicá ambas en la escalera de riesgo si querés cerrar con fuerza.",
    ],
    moduleIds: ['p11'],
  },
  {
    id: 'iq-t16',
    category: 'tecnica',
    question: "¿Qué es una discrepancia en una carta de crédito y cuáles son las más comunes?",
    modelAnswer:
      "Es una diferencia entre los documentos presentados y los términos del crédito, la UCP 600 o la práctica bancaria estándar. Las más comunes son la presentación tardía, es decir, después de los 21 días del embarque o del vencimiento; el embarque después de la fecha límite; una descripción en la factura distinta de la del crédito; un B/L sucio o sin anotación “on board”; montos fuera de tolerancia; seguro por menos del 110 %; y documentos inconsistentes entre sí, como pesos o puertos distintos. Si hay discrepancias, el banco tiene que avisarlas todas en un único aviso dentro de los cinco días hábiles. Las opciones son corregir y volver a presentar en plazo, o pedir que el ordenante acepte la discrepancia, aunque ahí el pago pasa a depender del importador.",
    tips: [
      "Nombrá al menos cuatro discrepancias concretas.",
      "Mencionar que el banco debe avisar todas juntas muestra que leíste la UCP 600 con atención.",
    ],
    moduleIds: ['p11'],
  },
  {
    id: 'iq-t17',
    category: 'tecnica',
    question: "¿Qué es el peso volumétrico? ¿Y cuándo conviene FCL o LCL?",
    modelAnswer:
      "En aéreo, el peso volumétrico es un peso “virtual” que se calcula con las medidas: largo por ancho por alto en centímetros dividido 6000. La aerolínea cobra el mayor entre el peso real y el volumétrico, porque el espacio en bodega es limitado. Una caja de 100 por 60 por 30 centímetros que pesa 20 kilos factura 30. En marítimo, FCL es contratar el contenedor entero, y LCL es carga suelta compartida que el consolidador junta en origen y separa en destino; en LCL se cobra por W/M, peso o medida, lo mayor, con una tonelada igual a un metro cúbico. Para 8 metros cúbicos normalmente conviene LCL; desde unos 13 a 15 suele convenir un 20 pies. Igual siempre cotizo las dos opciones con los gastos de destino.",
    tips: [
      "Llevá un cálculo corto preparado: es probable que te den números.",
      "Aclarar que hay que comparar con los gastos de destino, no solo el flete, muestra experiencia práctica.",
    ],
    moduleIds: ['p12'],
  },
  {
    id: 'iq-t18',
    category: 'tecnica',
    question: "¿Qué diferencia hay entre demurrage y detention?",
    modelAnswer:
      "Las dos son cargos por usar el contenedor más tiempo del que dan los días libres, pero cambian según dónde está el contenedor. Demurrage es cuando el contenedor lleno sigue dentro de la terminal después de los días libres. Detention es cuando el contenedor ya salió de la terminal, por ejemplo está en el depósito del importador, y no se devuelve vacío a tiempo. En Uruguay se habla en general de “demoras de contenedor”. Las causas típicas son canal rojo, documentos que faltan o un cliente que no tiene la plata para los tributos. Para prevenirlas tengo la documentación lista antes del arribo, uso el DUA anticipado cuando aplica, negocio días libres extra con la naviera y coordino retiro y devolución con tiempo.",
    tips: [
      "La forma fácil de recordarlo: demurrage adentro de la terminal, detention afuera.",
      "Cerrá con prevención: es lo que le importa al empleador.",
    ],
    moduleIds: ['p12'],
  },
  {
    id: 'iq-t19',
    category: 'tecnica',
    question: "¿Qué cambió con el nuevo Régimen de Origen MERCOSUR?",
    modelAnswer:
      "Rige desde el 18 de julio de 2024, con las Decisiones CMC 05/23 y 06/23, y en la ALADI se instrumentó como Protocolo Adicional 218 al ACE 18. El cambio de fondo es que el viejo criterio de contenido regional se reemplazó por un tope de valor de materiales no originarios, el VMNO, y hay requisitos específicos para cada NCM en un único apéndice. Uruguay tiene un tope especial del 50 % hasta 2032. En lo operativo, el certificado ahora vale 12 meses en lugar de 180 días, se puede emitir hasta 180 días después de la factura, y en la casilla de norma de origen se pone una letra: A si es totalmente obtenido, B si se hizo solo con materiales originarios, y C si tiene materiales no originarios que cumplen el requisito específico.",
    tips: [
      "Las letras A, B y C y los plazos de 12 meses y 180 días son lo más práctico.",
      "Con Argentina y Brasil el certificado es digital (COD) desde 2020: podés sumarlo.",
    ],
    moduleIds: ['p04', 'p10'],
  },
  {
    id: 'iq-t20',
    category: 'tecnica',
    question: "Un cliente compró por internet algo de USD 500 y quiere saber cuánto paga. ¿Qué le explicás?",
    modelAnswer:
      "Le explico que desde 2026 hay un régimen nuevo, de la Ley 20.446 y el Decreto 50/026, con dos caminos. Si es persona física con cédula, está registrado en la DNA, pagó con su tarjeta y no usó todavía sus tres envíos ni sus 800 dólares del año, puede usar la franquicia: no paga arancel, pero sí IVA, salvo que el vendedor facture desde Estados Unidos y esté registrado. Si no cumple esas condiciones, va por la Prestación Única: un 60 % sobre el valor, con un mínimo de 20 dólares por envío. Ojo que la Prestación Única no aplica a productos con IMESI. Y si el envío supera los 800 dólares o los 20 kilos, ya no es courier: es una importación formal con despachante y DUA.",
    tips: [
      "Es un tema de 2026: demostrar que lo sabés muestra que estás al día.",
      "Respondé con condiciones claras, como le hablarías a un cliente.",
    ],
    moduleIds: ['p03'],
  },
  {
    id: 'iq-t21',
    category: 'tecnica',
    question: "¿Qué significan OUR, SHA y BEN en una transferencia? ¿Hay control de cambios en Uruguay?",
    modelAnswer:
      "Son las opciones de gastos de una transferencia internacional. Con OUR el ordenante paga todos los gastos y el beneficiario recibe el monto íntegro. Con SHA cada uno paga los de su banco, y es lo más común, aunque los bancos intermediarios suelen descontar del monto. Con BEN el beneficiario paga todo y recibe el neto. Por eso, si un exportador uruguayo necesita cobrar el monto exacto de su factura, tiene que pedir OUR. Sobre los cambios: Uruguay tiene libertad cambiaria, se puede cobrar y pagar en cualquier moneda y no hay obligación de ingresar las divisas de exportación. Lo que sí hay son controles de prevención de lavado: el banco pide documentación de respaldo, como la factura, el DUA o el contrato, para justificar la operación.",
    tips: [
      "Relacioná SHA con el caso típico de la transferencia que “llega incompleta”.",
      "La diferencia entre control de cambios y prevención de lavado es muy valorada en bancos.",
    ],
    moduleIds: ['p11'],
  },
  {
    id: 'iq-t22',
    category: 'tecnica',
    question: "¿Qué hace un despachante de aduana y qué responsabilidad tiene?",
    modelAnswer:
      "El Código Aduanero, en el artículo 14, lo define como un auxiliar privado del comercio y de la función pública aduanera. Representa al importador o exportador ante la DNA: clasifica la mercadería en la NCM, determina el valor, arma y transmite el DUA en LUCIA, liquida y paga los tributos, gestiona los certificados de la VUCE y asiste a la verificación. En la mayoría de los casos es el declarante. Su responsabilidad es fuerte: según el artículo 27 responde solidariamente con su cliente por los tributos y los proventos portuarios, y además responde por los actos de sus empleados. Por eso un empleado registrado no puede firmar el DUA. Para mí eso explica por qué el trabajo en un estudio exige tanto rigor documental.",
    tips: [
      "Citar los artículos 14 y 27 del CAROU suma mucho en un estudio de despachante.",
      "Conectá la responsabilidad solidaria con tu propia forma de trabajar.",
    ],
    moduleIds: ['p05'],
  },
  {
    id: 'iq-t23',
    category: 'tecnica',
    question: "¿Cómo es el proceso de un DUA de exportación y qué recupera el exportador?",
    modelAnswer:
      "Se digitalizan los documentos, el despachante numera el DUA de exportación en LUCIA y se pagan las tasas. La carga ingresa a zona primaria y se pide canal dentro de los 30 días corridos desde la numeración, porque si no el DUA se anula. En exportación hay verde o rojo; si es rojo, el Vista verifica y en graneles una diferencia de peso de hasta el 5 % se corrige sin multa. Después viene el cumplido, el embarque y el cierre del DUA con los datos definitivos. Sobre lo que recupera: la exportación de bienes no lleva IVA, pero el exportador sí paga IVA en sus compras y lo puede recuperar con certificados de crédito de la DGI. Además, algunos bienes industrializados tienen devolución de tributos, un porcentaje por NCM fijado en el Decreto 48/022.",
    tips: [
      "Mostrá que sabés que en exportación no hay naranja como regla.",
      "Cerrar con los recuperos le habla al departamento de comex de un exportador.",
    ],
    moduleIds: ['p09'],
  },
  {
    id: 'iq-t24',
    category: 'tecnica',
    question: "¿En qué está el acuerdo MERCOSUR–Unión Europea?",
    modelAnswer:
      "Se cerró políticamente en diciembre de 2024 en la cumbre de Montevideo y se firmó el 17 de enero de 2026 en Asunción, dividido en dos instrumentos: el Acuerdo de Asociación, que es mixto y necesita la ratificación de los 27 Estados miembros, y el Acuerdo Comercial Interino, que tiene solo el pilar comercial. Uruguay lo aprobó con la Ley 20.462, y el interino se aplica de forma provisional desde el 1 de mayo de 2026. En la Unión Europea sigue pendiente el dictamen del Tribunal de Justicia que pidió el Parlamento Europeo. Para el trabajo diario cambia cosas concretas: en el DUA hay nuevos códigos de acuerdo, el 1117, 1118 y 1119, y el acuerdo admite la autocertificación del origen por el exportador.",
    tips: [
      "Mostrá que distinguís el acuerdo interino del de asociación.",
      "Bajarlo a lo operativo, como los códigos del DUA, te diferencia de quien solo leyó noticias.",
    ],
    moduleIds: ['p10'],
  },

  // ─────────────────────────── SITUACIONALES ───────────────────────────
  {
    id: 'iq-s01',
    category: 'situacional',
    question: "El contenedor cayó en canal rojo y el cliente está furioso porque tiene que vender la mercadería mañana. ¿Qué hacés?",
    modelAnswer:
      "Primero escucho y valido la urgencia, sin prometer lo que no controlo. Le explico que el rojo es una selección por análisis de riesgo, no una acusación. Después me muevo: coordino con la terminal para que posicionen el contenedor para la verificación lo antes posible, confirmo que el despachante o el empleado autorizado esté presente con el sobre completo, y reviso que el packing list y las marcas coincidan con la carga para que el Vista termine rápido. Si hay riesgo de demurrage, aviso a la naviera para pedir días libres extra. Al cliente le doy un horario realista y le mando novedades cada pocas horas. Cuando todo pase, analizo si hubo algo que disparó el rojo, como una descripción vaga, y le propongo mejoras para la próxima.",
    tips: [
      "Estructurá en tres momentos: contener al cliente, actuar, aprender.",
      "No prometas que “sale mañana”: el entrevistador está evaluando si sos realista.",
    ],
    moduleIds: ['p05'],
  },
  {
    id: 'iq-s02',
    category: 'situacional',
    question: "La mercadería ya llegó y el certificado de origen tiene la NCM equivocada. ¿Qué hacés?",
    modelAnswer:
      "No presento un documento con un error esperando que pase, porque se puede perder la preferencia o terminar en una infracción. Primero identifico el error exacto y lo comparo con la factura y la clasificación del despachante. Después contacto al exportador para que la entidad emisora en origen emita un certificado nuevo o lo rectifique. Con el nuevo régimen de origen del MERCOSUR un error de forma no invalida automáticamente el certificado: la aduana puede aceptarlo o pedir uno sustitutivo. Mientras tanto, evalúo con el despachante si conviene esperar, con el costo de almacenaje y demoras, o despachar con garantía de los tributos de diferencia, según el procedimiento de la DNA. Y le aviso al cliente cuánto puede impactar en costo y en plazo.",
    tips: [
      "Mostrá que pesás el costo de esperar contra el costo de despachar.",
      "Mencioná que lo validarías con el despachante: un junior no decide solo.",
    ],
    moduleIds: ['p04', 'p06'],
  },
  {
    id: 'iq-s03',
    category: 'situacional',
    question: "La naviera hizo roll-over y el contenedor no salió en el buque previsto. ¿Qué hacés?",
    modelAnswer:
      "Lo primero es confirmar con la naviera o el forwarder en qué buque quedó y cuáles son la nueva fecha de salida y de llegada. Con eso aviso al cliente enseguida, antes de que se entere por otro lado, y le presento alternativas si la urgencia lo justifica: otro servicio, un transbordo distinto o mandar una parte por aéreo. Después reviso las consecuencias en los papeles. Si la operación se paga con carta de crédito, me fijo si el nuevo embarque queda dentro de la fecha límite del crédito y si la presentación entra en los 21 días y antes del vencimiento; si no, hay que pedir una enmienda a tiempo. También reviso los compromisos con el comprador final. Y dejo todo registrado en el seguimiento del embarque.",
    tips: [
      "Mencionar la carta de crédito muestra que pensás en toda la cadena, no solo en el transporte.",
      "Avisar al cliente primero es lo que más valoran en un forwarder.",
    ],
    moduleIds: ['p12', 'p11'],
  },
  {
    id: 'iq-s04',
    category: 'situacional',
    question: "Un cliente te pide que la factura muestre un valor menor para pagar menos tributos. ¿Qué le decís?",
    modelAnswer:
      "Le digo que no, con firmeza pero sin perder la relación. Le explico que alterar el valor en aduana es defraudación de valor según el Código Aduanero, con una multa del doble de los tributos más los propios tributos, y que el despachante responde solidariamente. Además, la DNA puede controlar a posteriori, así que el riesgo no termina cuando sale la mercadería. Después le ofrezco alternativas legales para bajar el costo: revisar si la clasificación es correcta, ver si hay una preferencia por origen que no se está usando, analizar un régimen como la admisión temporaria si va a reexportar, o consolidar embarques para diluir las tasas fijas. Si insiste, lo escalo a mi superior y dejo constancia por escrito.",
    tips: [
      "La pregunta mide ética: la negativa tiene que ser clara.",
      "Ofrecer alternativas legales muestra que querés ayudar al cliente, no solo cubrirte.",
    ],
    moduleIds: ['p08', 'p06'],
  },
  {
    id: 'iq-s05',
    category: 'situacional',
    question: "Llega la carga y faltan bultos respecto del packing list. ¿Qué hacés?",
    modelAnswer:
      "Antes de retirar, dejo constancia en la terminal o el depósito, con un acta que diga cuántos bultos llegaron y en qué estado, y saco fotos de todo. Aviso al transportista y a la aseguradora dentro de los plazos de la póliza, porque si el reclamo llega tarde se pierde. Reviso el B/L y el manifiesto para ver si la diferencia ya venía de origen o se produjo en el viaje. El Código Aduanero da una tolerancia del 5 % respecto del manifiesto y las diferencias se justifican en ocho días hábiles, así que coordino con el despachante si hay que ajustar la declaración. Y le aviso al proveedor para que revise su carga y, si corresponde, reponga o emita una nota de crédito.",
    tips: [
      "El orden importa: constancia primero, reclamos después.",
      "Citar la tolerancia del 5 % y los 8 días hábiles demuestra estudio.",
    ],
    moduleIds: ['p12', 'p05'],
  },
  {
    id: 'iq-s06',
    category: 'situacional',
    question: "Te asignan tres embarques urgentes el mismo día. ¿Cómo te organizás?",
    modelAnswer:
      "Priorizo por impacto, no por quién grita más. Miro qué vence primero y qué cuesta más si se atrasa: días libres que se terminan, carga perecedera o un cliente con la producción parada. Con eso armo un orden y le comunico a cada cliente un tiempo realista. Lo que se puede delegar, como un trámite con el cadete o una consulta que puede hacer un compañero, lo delego, y si veo que hay un riesgo real de no llegar, pido apoyo a mi superior temprano y no a última hora. Es la misma lógica que usaba en las guardias a bordo: prioridades claras, comunicación constante y no esconder un problema hasta que explota. Al final del día dejo actualizada la planilla de seguimiento.",
    tips: [
      "Usá un criterio explícito para priorizar: vencimientos y costo del atraso.",
      "Traer la experiencia de guardia es natural y creíble.",
    ],
    moduleIds: ['p12'],
  },
  {
    id: 'iq-s07',
    category: 'situacional',
    question: "Llega al puerto un contenedor reefer con carne y una falla de temperatura. ¿Qué hacés?",
    modelAnswer:
      "Lo primero es no mover la carga hasta tener evidencia. Pido el registro de temperatura del equipo, que muestra cuándo y cuánto se desvió, y aviso de inmediato a la naviera y a la aseguradora. Solicito una inspección independiente, un survey, antes de tocar la mercadería, porque eso define después de quién es la responsabilidad. Reviso qué cláusulas de seguro tiene la operación: si se contrató cobertura amplia o mínima cambia mucho lo que se puede reclamar. En paralelo coordino con el MGAP por las implicancias sanitarias y mantengo informado al cliente y al comprador en destino. Todo lo documento con fechas y horas, porque en un reclamo de este tipo gana el que tiene mejor evidencia.",
    tips: [
      "La palabra clave es evidencia: registro de temperatura y survey.",
      "Vincular con el tipo de cobertura ICC muestra visión integral.",
    ],
    moduleIds: ['p12'],
  },
  {
    id: 'iq-s08',
    category: 'situacional',
    question: "Te llega una factura comercial que no indica el Incoterm. ¿Qué hacés?",
    modelAnswer:
      "No asumo nada. El Incoterm define qué gastos están incluidos en el precio, y eso es lo que necesito para armar el valor en aduana: si la venta fue FCA tengo que sumar flete y seguro; si fue CIF, ya están; si fue DAP, puede que tenga que restar gastos posteriores a la llegada. Le pido al proveedor una factura corregida o, si no llega a tiempo, una nota aclaratoria firmada. Mientras tanto reviso la pro-forma, la orden de compra y el documento de transporte, por ejemplo si el B/L dice flete prepago o a pagar en destino, para tener una idea, pero no transmito el DUA con un supuesto. Y le aviso al cliente para que en las próximas compras pida que el Incoterm figure siempre.",
    tips: [
      "Explicá por qué importa: el valor en aduana depende del Incoterm.",
      "Usar el B/L como pista, pero sin asumir, muestra criterio.",
    ],
    moduleIds: ['p03', 'p06'],
  },
  {
    id: 'iq-s09',
    category: 'situacional',
    question: "El DUA ya está numerado y el cliente todavía no transfirió la plata para los tributos. ¿Qué hacés?",
    modelAnswer:
      "Le aviso al cliente de inmediato y con claridad: los tributos se pagan todos juntos, en un solo acto, y si no se pagan en plazo el DUA se anula, pero las tasas de servicio se cobran igual. Además, mientras la carga espera corren el almacenaje en la terminal y las demoras del contenedor, que después tiene que pagar él. Le doy el monto exacto, los datos para pagar y la hora límite. Si no responde, escalo a mi superior, porque la decisión de adelantar fondos o no corresponde al estudio, no a mí. Todo queda por escrito, con la hora de cada aviso. Y para la próxima, sugeriría pedir la provisión de fondos antes de numerar, cuando se le manda la liquidación estimada.",
    tips: [
      "Mostrá que sabés qué pasa si no se paga: anulación y tasas igual.",
      "Escalar a tiempo es una virtud en un junior, no una debilidad.",
    ],
    moduleIds: ['p05'],
  },
  {
    id: 'iq-s10',
    category: 'situacional',
    question: "Un camión está trancado en la frontera de Fray Bentos por diferencias en el MIC/DTA. ¿Qué hacés?",
    modelAnswer:
      "Primero averiguo cuál es exactamente la diferencia: puede ser un precinto que no coincide con el declarado, un peso distinto o una cantidad de bultos que no cierra con el CRT. Para eso hablo con el transportista y con la aduana de frontera. Con el dato concreto, reviso la documentación de origen, la factura, el CRT y el packing list, para ver dónde está el error. Después gestiono la corrección con el despachante de partida o de destino, según dónde se originó. Al cliente le aviso enseguida qué pasó y le doy una nueva hora estimada de llegada, sin adivinar. Y cuando se resuelve, anoto qué falló para evitarlo: muchas veces es un dato mal copiado entre documentos que se puede detectar antes de que salga el camión.",
    tips: [
      "Nombrá las causas típicas: precinto, peso, bultos.",
      "Cerrar con prevención muestra que pensás en procesos.",
    ],
    moduleIds: ['p04'],
  },
  {
    id: 'iq-s11',
    category: 'situacional',
    question: "Los documentos de una carta de crédito tienen una discrepancia y el crédito vence mañana. ¿Qué hacés?",
    modelAnswer:
      "Lo primero es ver si la discrepancia se puede corregir hoy. Si es un error en un documento que emite el propio exportador, como la factura o el packing list, lo corrijo y presento hoy mismo, dentro del vencimiento y de los 21 días desde el embarque. Si no se puede corregir a tiempo, presento igual, para que el banco notifique la discrepancia y consulte al ordenante si la acepta. Ahí contacto al cliente para que su comprador acepte rápido, aunque le explico que el pago queda sujeto a la voluntad del importador, como si fuera una cobranza. Si todavía hay margen, evalúo pedir una enmienda de prórroga. Y después reviso por qué pasó, para armar una lista de control antes de cada presentación.",
    tips: [
      "Explicá qué se pierde con la aceptación de la discrepancia: la garantía del banco.",
      "Para la mesa de un banco, la lista de control final suma mucho.",
    ],
    moduleIds: ['p11'],
  },
  {
    id: 'iq-s12',
    category: 'situacional',
    question: "Revisando carpetas, ves que una admisión temporaria vence en 80 días y nadie pidió la prórroga. ¿Qué hacés?",
    modelAnswer:
      "Lo levanto de inmediato a mi superior, porque es un problema serio. La prórroga se tiene que pedir al LATU al menos 90 días antes del vencimiento, y con 80 días ya estamos fuera de ese plazo. Hay resoluciones que negaron prórrogas pedidas fuera de término aun cuando el error fue involuntario. Entonces hay que trabajar con lo que queda: ver cuánto saldo falta cancelar, si se puede cancelar exportando a tiempo, o si la mercadería que no se va a exportar conviene nacionalizarla, teniendo en cuenta que en los últimos seis meses la nacionalización necesita autorización previa del MIEM. Yo no tomaría la decisión solo, pero sí prepararía los números para que el responsable decida rápido. Y propondría una planilla de vencimientos con alertas.",
    tips: [
      "Mostrá que sabés el plazo de 90 días y sus consecuencias.",
      "Prepará opciones para tu jefe: es lo que se espera de un junior.",
    ],
    moduleIds: ['p07'],
  },
  {
    id: 'iq-s13',
    category: 'situacional',
    question: "Una transferencia de un cliente del exterior llegó con 35 dólares menos. El cliente local está preocupado. ¿Qué le explicás?",
    modelAnswer:
      "Le explico que lo más probable es que la transferencia se haya hecho con la opción de gastos SHA, en la que cada parte paga los costos de su banco, y que algún banco intermediario, por ejemplo el corresponsal en dólares en Nueva York, descontó su comisión del monto. No es un error del banco local. Para confirmarlo, pido el detalle del mensaje de la transferencia, donde figura la opción de gastos y los cargos. Después lo ayudo a decidir: puede pedirle al comprador que complete la diferencia, absorberla, o acordar que en las próximas facturas se pague con la opción OUR, donde el ordenante paga todos los gastos y el beneficiario recibe el monto íntegro. Conviene dejarlo escrito en la pro-forma.",
    tips: [
      "Es un caso típico de mesa de comex: mostrá calma y explicación técnica.",
      "La solución de fondo es pactar OUR en la pro-forma.",
    ],
    moduleIds: ['p11'],
  },

  // ─────────────────────────── CONDUCTUALES ───────────────────────────
  {
    id: 'iq-c01',
    category: 'conductual',
    question: "¿Por qué querés dejar la Armada para trabajar en comercio exterior?",
    modelAnswer:
      "No lo veo como dejar algo, sino como llevar lo que aprendí a otro lugar. En la Armada aprendí a operar en un entorno muy regulado, a coordinar equipos y a trabajar con procedimientos donde un error en un registro tiene consecuencias reales. El comercio exterior funciona igual: un dato mal puesto en un DUA o un vencimiento perdido le cuesta plata al cliente. Además, siempre trabajé cerca del puerto y de los buques, y el comex es una forma de seguir ligado a eso desde el lado empresarial. Estoy estudiando Administración en la FCEA y me preparé en serio en comercio exterior: Incoterms, documentos, regímenes y cálculo de importaciones. Es un cambio planificado, no un impulso, y quiero crecer en esta carrera a largo plazo.",
    tips: [
      "Hablá en positivo de la Armada: el entrevistador quiere ver gratitud, no huida.",
      "Decí que el cambio es planificado y mostrá qué estudiaste.",
      "Tené clara la fecha de baja o tu disponibilidad, porque te la van a preguntar.",
    ],
    moduleIds: ['p12'],
  },
  {
    id: 'iq-c02',
    category: 'conductual',
    question: "¿Cómo aplicás tu experiencia naval y portuaria a este puesto?",
    modelAnswer:
      "Hay cosas que traslado directamente. Como jefe de cubierta trabajé con maniobras, estiba, carga y descarga, así que entiendo cómo se mueve un buque en puerto, qué es un cut-off y por qué un contenedor mal estibado es un problema. Conozco el inglés técnico marítimo y normas como SOLAS o el código ISPS, que aparecen en el VGM y en los recargos de seguridad. También estoy acostumbrado a llevar inventarios, registros e inspecciones, que en comex se traduce en gestión documental rigurosa. Y en las guardias aprendí a decidir bajo presión con información incompleta. En una agencia marítima o un forwarder eso me permite hablar el mismo idioma que la naviera y la terminal desde el primer día; en un estudio, me da disciplina con los procedimientos.",
    tips: [
      "Traducí cada competencia naval a una tarea concreta de comex.",
      "Evitá jerga militar sin explicar: grados y siglas internas no le dicen nada al entrevistador.",
    ],
    moduleIds: ['p12'],
  },
  {
    id: 'iq-c03',
    category: 'conductual',
    question: "Contame una situación de presión que hayas resuelto.",
    modelAnswer:
      "Uso un ejemplo de a bordo. La situación: durante una maniobra de atraque con viento fuerte, teníamos poco margen de tiempo y una parte del equipo de cubierta era nueva. Mi tarea, como responsable de cubierta, era que la maniobra saliera segura y en tiempo. Lo que hice fue repartir funciones claras antes de empezar, poner a la gente con más experiencia en los puestos críticos y mantener una comunicación corta y constante con el puente, confirmando cada paso. Cuando una línea no quedó como esperábamos, paramos, corregimos y seguimos, sin improvisar. El resultado fue una maniobra sin incidentes, y después hicimos una revisión rápida para ajustar la asignación de puestos. Eso mismo aplicaría con un buque que llega y un despacho urgente.",
    tips: [
      "Usá el método STAR: situación, tarea, acción y resultado.",
      "Adaptá el ejemplo a uno real tuyo; los detalles concretos son los que convencen.",
      "Cerrá conectando con una situación de comex.",
    ],
    moduleIds: ['p12'],
  },
  {
    id: 'iq-c04',
    category: 'conductual',
    question: "¿Cómo manejás un error propio?",
    modelAnswer:
      "Lo reconozco rápido y lo informo, porque un error escondido siempre crece. En comercio exterior eso es todavía más importante: si en un DUA se transmitió un dato mal, cuanto antes se corrige, menos cuesta, y el Código Aduanero prevé mecanismos de corrección que tienen plazos y a veces un costo. Después de corregirlo, busco por qué pasó y dejo un control para que no se repita, como una lista de verificación o un doble chequeo entre documentos antes de transmitir. En la Armada aprendí que los procedimientos y las listas de control no son burocracia, sino la forma de no depender de la memoria cuando estás cansado o apurado. Prefiero que mi jefe se entere por mí, con una solución en la mano.",
    tips: [
      "Mostrá el ciclo completo: reconocer, corregir y prevenir.",
      "Si tenés un ejemplo real pequeño, contalo: suma credibilidad.",
    ],
    moduleIds: ['p12'],
  },
  {
    id: 'iq-c05',
    category: 'conductual',
    question: "¿Cómo te organizás cuando tenés muchos frentes abiertos?",
    modelAnswer:
      "Con una planilla de seguimiento por embarque, donde cada operación tiene sus fechas críticas: llegada estimada del buque, cut-off, vencimiento de los días libres, plazo para pedir canal o vencimiento de una admisión temporaria. Le pongo alertas y la reviso al principio y al final del día. Así no dependo de la memoria y cualquiera del equipo puede ver en qué está cada carpeta si yo no estoy. También separo lo urgente de lo importante: un contenedor que empieza a generar demoras mañana va antes que un informe que se puede entregar el viernes. Mando un reporte corto a los clientes cuando hay novedades, para que no tengan que llamar a preguntar. Esa forma de trabajar la traigo de llevar registros y turnos a bordo.",
    tips: [
      "Nombrar fechas críticas reales de comex muestra que entendés el trabajo.",
      "Si manejás Excel con tablas dinámicas o BUSCARV, decilo: lo piden casi todos los avisos.",
    ],
    moduleIds: ['p12'],
  },
  {
    id: 'iq-c06',
    category: 'conductual',
    question: "¿Qué nivel de inglés tenés?",
    modelAnswer:
      "Lo describo por lo que puedo hacer, que es lo que importa en el trabajo. Escribo correos operativos sin dificultad, leo documentación técnica, y en la Armada usé inglés técnico marítimo para comunicaciones, manuales y normativa internacional. Puedo leer un B/L, una guía aérea o un crédito documentario en inglés y entender cada campo. Para conversaciones con agentes del exterior me manejo bien en temas operativos; en negociaciones largas todavía estoy mejorando, y lo practico. Si quieren, podemos seguir un rato la entrevista en inglés. También me interesa reforzar portugués, porque buena parte del comercio de Uruguay es con Brasil y los CRT suelen venir en formato bilingüe.",
    tips: [
      "Sé honesto: te pueden cambiar de idioma en el momento.",
      "Ofrecer seguir en inglés muestra seguridad.",
      "Tené listo un ejemplo concreto de uso del inglés.",
    ],
    moduleIds: ['p12'],
  },
  {
    id: 'iq-c07',
    category: 'conductual',
    question: "¿Dónde te ves en tres años?",
    modelAnswer:
      "Me veo dominando la operativa completa de importación y exportación, con autonomía para manejar clientes propios y avanzando hacia un rol de analista o coordinador. Quiero haber pasado por todo el circuito: documentación, clasificación, cálculo de costos, coordinación con la naviera y la terminal, y el trato con la aduana. Para ese momento también quiero haber terminado la licenciatura en Administración y estar evaluando la preparación para el examen de despachante, que tiene un temario amplio, desde el Código Aduanero hasta valoración y origen. No busco saltar etapas: entiendo que se empieza con tareas operativas y que ahí se aprende el oficio. Pero sí quiero crecer dentro de la empresa, y por eso me interesa un lugar donde se pueda hacer carrera.",
    tips: [
      "Mostrá ambición, pero con realismo sobre empezar desde abajo.",
      "Mencionar el examen de despachante es un buen gesto en un estudio.",
    ],
    moduleIds: ['p12'],
  },
  {
    id: 'iq-c08',
    category: 'conductual',
    question: "¿Qué disponibilidad horaria tenés y cuándo podés empezar?",
    modelAnswer:
      "Tengo disponibilidad completa y entiendo cómo es el ritmo de este trabajo: se mueve con los buques, los cut-offs y las verificaciones, y a veces eso significa quedarse más tarde o arrancar temprano. Estoy acostumbrado a guardias y turnos, así que no es algo que me asuste. Sobre la fecha de inicio, te la digo concreta: [adaptar con la fecha real de baja o de disponibilidad]. Prefiero aclararlo ahora para que no quede ninguna duda. Mis clases en la facultad las organizo para que no interfieran con el horario de trabajo, y si hay exámenes, los aviso con anticipación. Lo que sí valoro es saber con tiempo cuando hay picos de trabajo, para organizarme.",
    tips: [
      "Llevá la fecha concreta de baja o disponibilidad: es una duda que el entrevistador va a tener aunque no la diga.",
      "Mostrá flexibilidad real, con el argumento de la vida a bordo.",
    ],
    moduleIds: ['p12'],
  },
  {
    id: 'iq-c09',
    category: 'conductual',
    question: "¿Por qué querés trabajar en esta empresa en particular?",
    modelAnswer:
      "Antes de venir investigué a la empresa. [Adaptar con datos reales: si es un forwarder, qué rutas o agentes maneja; si es un estudio de despachante, en qué rubros se especializa; si es un importador, qué productos y desde qué orígenes compra]. Me interesa porque es el tipo de operativa donde puedo aportar desde el primer día: conozco el lado portuario y de los buques, y lo estuve complementando con el estudio de documentos, regímenes y cálculo de importaciones. Además, me atrae que sea un lugar donde se aprende el oficio completo. Para mí el primer trabajo en comex es la base de toda la carrera, así que busco un equipo del que pueda aprender y en el que pueda crecer, no solo un puesto.",
    tips: [
      "Investigá de verdad: un dato concreto de la empresa vale más que diez frases generales.",
      "Si es agencia marítima o forwarder, destacá que ahí tu experiencia naval pesa más.",
    ],
    moduleIds: ['p12'],
  },
  {
    id: 'iq-c10',
    category: 'conductual',
    question: "¿Cómo te mantenés al día en comercio exterior?",
    modelAnswer:
      "Sigo las fuentes oficiales: las resoluciones y comunicados de la DNA, la VUCE, el MEF y la Cancillería, y las normas en IMPO. También Uruguay XXI, ALADI y MERCOSUR, y las novedades de la ICC sobre Incoterms y reglas bancarias. Este año, por ejemplo, hubo cambios importantes que seguí de cerca: el anticipo de IRAE a la importación pasó al 4 % desde el 1 de enero, entró en vigor el acuerdo con Singapur en marzo, empezó el régimen nuevo de compras por internet y se aplica de forma provisional el acuerdo con la Unión Europea desde el 1 de mayo. Cuando algo me genera dudas, prefiero ir a la norma original antes que quedarme con un resumen de prensa.",
    tips: [
      "Dar ejemplos de 2026 demuestra que realmente seguís el tema.",
      "Mencionar IMPO y la DNA suena a alguien que va a la fuente.",
    ],
    moduleIds: ['p01', 'p10'],
  },
  {
    id: 'iq-c11',
    category: 'conductual',
    question: "Venís de tener gente a cargo. ¿Cómo te vas a sentir empezando como junior, quizás con un jefe más joven que vos?",
    modelAnswer:
      "Me siento cómodo, y lo digo en serio. En la Armada aprendí que la jerarquía funcional se respeta por lo que la persona sabe y por su rol, no por la edad. En comercio exterior soy nuevo, y quien me va a enseñar tiene años de oficio que yo no tengo, así que voy a aprender de esa persona. Lo que sí traigo es la experiencia de haber estado del otro lado: sé lo que valora un jefe en alguien que recién empieza, como que pregunte a tiempo, que no esconda errores, que cumpla lo que dice y que no haya que repetirle las cosas. Con el tiempo, cuando conozca el trabajo, también voy a poder aportar en organización y en coordinación de equipos.",
    tips: [
      "Es una pregunta para detectar soberbia: la humildad tiene que sonar genuina.",
      "Convertí la experiencia de mando en una ventaja: sabés qué espera un jefe.",
    ],
    moduleIds: ['p12'],
  },
  {
    id: 'iq-c12',
    category: 'conductual',
    question: "Contame de alguna experiencia fuera de la Armada que te haya preparado para este trabajo.",
    modelAnswer:
      "Además de mi carrera naval, gestiono una marca propia de bebidas, y eso me puso en contacto directo con el lado empresarial: compras a proveedores, costos, habilitaciones regulatorias y plazos de organismos. Ahí entendí por qué un importador necesita saber el costo real puesto en depósito y no solo el precio de factura, y por qué una habilitación que se demora frena toda la cadena. También aprendí a negociar con proveedores y a tomar decisiones con plata propia en juego, que es una forma muy rápida de aprender a cuidar los números. A eso le sumo la licenciatura en Administración, que me da herramientas de costos, contabilidad y gestión. Todo eso lo quiero volcar en una oficina de comercio exterior, donde se cruzan logística, normas y números.",
    tips: [
      "Una experiencia empresarial propia muestra visión de negocio: aprovechala.",
      "Bajala a aprendizajes concretos que sirvan en comex, como el costeo.",
    ],
    moduleIds: ['p12', 'p06'],
  },
]
