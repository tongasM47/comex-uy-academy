// Secuencias de importación y exportación en Uruguay.
// Fuentes: docs/research/02 (§1.1–1.2) y 03 (§3.2): procedimientos DUA digital de la DNA y CAROU.

export interface SeqStep {
  title: string
  who: string
  docs: string
  text: string
  tip?: string
}

export const importSequence: SeqStep[] = [
  {
    title: 'Negociación y factura pro-forma',
    who: 'Importador y exportador',
    docs: 'Pro-forma (código PROF en el DUA)',
    text: 'Se acuerdan precio, Incoterm, plazo y forma de pago. Con la pro-forma se cotizan flete y seguro, se inician los permisos y, si corresponde, se abre la carta de crédito.',
  },
  {
    title: 'Clasificación y permisos previos',
    who: 'Despachante · VUCE · organismos',
    docs: 'NCM de 10 dígitos · permisos MSP, MGAP, LATU, URSEA…',
    text: 'El despachante clasifica la mercadería en la NCM (8 dígitos MERCOSUR más 2 de apertura nacional). La clasificación dice qué arancel paga y qué intervenciones necesita, que se tramitan en la VUCE.',
    tip: 'Clasificar antes de comprar evita sorpresas: un permiso que falta puede dejar la mercadería parada en el puerto.',
  },
  {
    title: 'Pago internacional',
    who: 'Importador y bancos',
    docs: 'Transferencia, cobranza, carta de crédito o cuenta abierta',
    text: 'Según lo pactado: pago anticipado, cobranza documentaria, carta de crédito o cuenta abierta. Intervienen el banco del importador y su corresponsal en el exterior.',
  },
  {
    title: 'Embarque',
    who: 'Exportador · forwarder · transportista',
    docs: 'B/L, AWB o CRT + MIC/DTA · factura comercial · packing list · seguro',
    text: 'Se reserva bodega y se emite el documento de transporte, la factura comercial definitiva, el packing list y la póliza si el Incoterm lo exige.',
  },
  {
    title: 'Arribo y depósito temporal',
    who: 'Agente de transporte · terminal',
    docs: 'Manifiesto / DAL en LUCIA',
    text: 'El agente marítimo o aéreo presenta la declaración de llegada, que queda en LUCIA. La carga se descarga en zona primaria y queda en depósito temporal de importación.',
    tip: 'Si la cantidad difiere del manifiesto hay una tolerancia del 5% (CAROU art. 54) y 8 días hábiles para justificar diferencias (art. 53).',
  },
  {
    title: 'Transmisión del DUA',
    who: 'Despachante',
    docs: 'Mensaje DUA + DVA (declaración del valor)',
    text: 'Con la referencia del arribo, el despachante transmite el DUA y la declaración del valor, y propone su autoliquidación de tributos.',
  },
  {
    title: 'Numeración y liquidación',
    who: 'LUCIA (DNA)',
    docs: 'Número NNN-AAAA-999999',
    text: 'LUCIA valida el mensaje y le asigna número: aduana, año y correlativo. Si no se pide canal en 30 días corridos, el DUA vence.',
  },
  {
    title: 'Pago de tributos',
    who: 'Despachante · BROU o red de cobranza · DGI',
    docs: 'Liquidación del DUA',
    text: 'Se paga todo junto, sin pagos parciales, hasta el día hábil siguiente. Los tributos internos (IVA, IMESI, IRAE) se pueden pagar en la DGI dentro de 7 días hábiles desde la aceptación.',
  },
  {
    title: 'Canal de revisión',
    who: 'Sistema de selectividad (CAROU art. 74)',
    docs: 'Verde · naranja · rojo',
    text: 'Verde: cumplido automático. Naranja: revisión documental por un vista. Rojo: revisión documental y física, con 5 días hábiles para presentarse.',
    tip: 'En exportación solo se usan verde y rojo.',
  },
  {
    title: 'Verificación',
    who: 'Vista de la DNA',
    docs: 'Hoja de observaciones · liquidación complementaria',
    text: 'El vista controla NCM, valor, origen, cantidad y estado, y puede extraer muestras. Si hay diferencias, emite observaciones (5 días hábiles para levantarlas) o una liquidación complementaria.',
  },
  {
    title: 'Cumplido o levante',
    who: 'DNA',
    docs: 'Libramiento en LUCIA',
    text: 'Es la autorización para disponer de la mercadería; el CAROU la llama libramiento. Sin el cumplido registrado, la carga no sale del recinto.',
  },
  {
    title: 'Retiro de la terminal',
    who: 'Importador · terminal · agente marítimo',
    docs: 'Vía 4 del DUA · libre deuda',
    text: 'Se pagan los servicios de terminal y los proventos de la ANP, el agente marítimo libera el contenedor y se retira la mercadería. Se admiten retiros parciales.',
  },
  {
    title: 'Regularización y archivo',
    who: 'Despachante',
    docs: 'RADE (digital, 10 años) · RASO (papel)',
    text: 'Las imágenes de los documentos se guardan en un archivo digital homologado (RADE) y los papeles en un RASO dentro de 5 días hábiles. La DNA puede controlar a posteriori.',
  },
]

export const exportSequence: SeqStep[] = [
  { title: 'Contacto y negociación', who: 'Exportador', docs: 'Cotización', text: 'Se acuerdan precio, Incoterm y medio de pago con el cliente del exterior.' },
  { title: 'Factura pro-forma', who: 'Exportador', docs: 'Pro-forma', text: 'La oferta formal, en el idioma del cliente si hace falta.' },
  { title: 'Confirmación del pedido', who: 'Importador y bancos', docs: 'Orden de compra · carta de crédito', text: 'El cliente confirma con una orden de compra, abre la carta de crédito o paga por adelantado.' },
  {
    title: 'Certificados previos',
    who: 'Exportador · organismos · VUCE',
    docs: 'Sanitarios, fitosanitarios, certificado de origen',
    text: 'Los que exija el producto o el destino: sanitario del MGAP, bromatológico, fitosanitario y certificado de origen, muchos por la VUCE.',
  },
  { title: 'Reserva de flete', who: 'Exportador o forwarder', docs: 'Booking · CRT y MIC/DTA si es terrestre', text: 'Se reserva el espacio y se coordina el contenedor y su ingreso a la terminal.' },
  { title: 'Factura de exportación y packing list', who: 'Exportador', docs: 'e-factura de exportación', text: 'Se emite el comprobante fiscal electrónico de exportación y la lista de empaque.' },
  { title: 'Numeración del DUA de exportación', who: 'Despachante', docs: 'DUA en LUCIA', text: 'El despachante digitaliza los documentos y numera el DUA de exportación.' },
  { title: 'Pago de tasas', who: 'Despachante', docs: 'BROU o DGI', text: 'Las tasas se pagan hasta el día hábil siguiente.' },
  { title: 'Ingreso a zona primaria', who: 'Despachante · terminal', docs: 'Registro en portón · precintos', text: 'La carga entra al recinto portuario y se declaran contenedores y precintos.' },
  { title: 'Solicitud de canal', who: 'Despachante', docs: 'LUCIA', text: 'Hay que pedir canal dentro de los 30 días corridos desde la numeración; si no, el DUA se anula.' },
  {
    title: 'Canal verde o rojo',
    who: 'DNA',
    docs: 'Selectividad por riesgo',
    text: 'Verde: libramiento automático. Rojo: verificación documental y física por un vista. El naranja es excepcional en exportación.',
  },
  {
    title: 'Verificación (si es rojo)',
    who: 'Despachante · vista',
    docs: '—',
    text: 'Hay 5 días hábiles para presentarse. En granel, diferencias de peso de hasta 5% se corrigen sin multa.',
  },
  { title: 'Cumplido y embarque', who: 'DNA · terminal · transportista', docs: 'B/L, AWB o CRT', text: 'Con el OK la mercadería se embarca y se emite el documento de transporte.' },
  {
    title: 'Cierre del DUA',
    who: 'Despachante',
    docs: 'Tercer mensaje en LUCIA',
    text: 'Se transmiten los datos definitivos (factura final y embarque) para cerrar el DUA.',
    tip: 'El plazo exacto del tercer mensaje conviene confirmarlo con el despachante: la investigación no lo dejó cerrado.',
  },
  { title: 'Archivo', who: 'Despachante', docs: 'RASO', text: 'El sobre con el DUA y los documentos se archiva dentro de 5 días hábiles.' },
  { title: 'Documentos al cliente y cobro', who: 'Exportador y bancos', docs: 'Transferencia, cobranza o carta de crédito', text: 'Se envían los documentos al cliente o al banco y se cobra según lo pactado.' },
  {
    title: 'Recupero de beneficios',
    who: 'Exportador · contador',
    docs: 'Certificados de crédito',
    text: 'Se gestiona la devolución de tributos, si el producto la tiene, y la recuperación del IVA de las compras ante la DGI.',
  },
]
