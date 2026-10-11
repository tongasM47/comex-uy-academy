import type { Subtopic } from '../types'

// Módulo 9: régimen de exportaciones, tributos y recuperos.
// Base: docs/research/03_regimenes_exportacion.md (sección 3) y
// docs/research/01_incoterms_documentos.md (sección 5, certificado de origen).

const SRC_PROC_EXPO = { title: "DNA – Procedimiento DUA digital de exportación (OD 96/2012)", url: "https://www.aduanas.gub.uy/innovaportal/file/12331/1/procedimiento_expo_od_96-2012_.pdf" }
const SRC_UXXI_NOTAS = { title: "Uruguay XXI – Notas tributarias básicas para exportar", url: "https://www.uruguayxxi.gub.uy/uploads/rutarecurso/e8e88e2e66a110bc5fd8b0a16e76320d63f39ced.pdf" }
const SRC_CAROU_107 = { title: "CAROU art. 107 – IMPO", url: "https://www.impo.com.uy/bases/codigo-aduanero/19276-2014/107" }
const SRC_CAROU_108 = { title: "CAROU art. 108 – IMPO", url: "https://www.impo.com.uy/bases/codigo-aduanero/19276-2014/108" }
const SRC_CAROU_111 = { title: "CAROU art. 111 – IMPO", url: "https://www.impo.com.uy/bases/codigo-aduanero/19276-2014/111" }
const SRC_CAROU_113 = { title: "CAROU art. 113 – IMPO", url: "https://www.impo.com.uy/bases/codigo-aduanero/19276-2014/113" }
const SRC_CAROU_117 = { title: "CAROU art. 117 – IMPO", url: "https://www.impo.com.uy/bases/codigo-aduanero/19276-2014/117" }
const SRC_DEC_182 = { title: "Decreto 182/016 (entidades emisoras de certificados de origen) – IMPO", url: "https://www.impo.com.uy/bases/decretos/182-2016" }
const SRC_DEC_4 = { title: "Decreto 4/020 (COD obligatorio) – IMPO", url: "https://www.impo.com.uy/bases/decretos/4-2020" }
const SRC_MEF_COD = { title: "MEF – Certificación de Origen Digital", url: "https://www.gub.uy/ministerio-economia-finanzas/politicas-y-gestion/certificacion-origen-digital" }
const SRC_DEC_51 = { title: "Decreto 51/014 (OEC) – IMPO", url: "https://impo.com.uy/bases/decretos/51-2014/2" }
const SRC_OMC_OEC = { title: "OMC – Presentación OEC Uruguay (2023)", url: "https://www.wto.org/english/tratop_e/msmes_e/uruguay_presentacion_oec.pdf" }
const SRC_VUCE = { title: "VUCE – Resultados 2023", url: "https://vuce.gub.uy/wp-content/uploads/2024/03/RESULTADOS-VUCE-Dic-2023-1.pdf" }
const SRC_RG57 = { title: "RG DNA 57/2024 (tasa de inspección no intrusiva)", url: "https://aduanas.gub.uy/innovaportal/file/26806/1/rg-57-2024-disposiciones-para-el-cobro-de-la-tasa.pdf" }
const SRC_DEC_122 = { title: "Decreto 122/025 (detracción a cueros) – IMPO", url: "https://www.impo.com.uy/bases/decretos/122-2025" }
const SRC_TU_EXPORTA = { title: "Uruguay XXI – TU Exporta", url: "https://uruguayxxi.gub.uy/en/news/article/ya-esta-operativo-tu-exporta" }
const SRC_UXXI_SERV = { title: "Uruguay XXI – Servicios al exportador", url: "https://www.uruguayxxi.gub.uy/en/i-want-to-export/services/" }
const SRC_LEY_16492 = { title: "Ley 16.492 – IMPO", url: "https://www.impo.com.uy/bases/leyes/16492-1994" }
const SRC_DEC_48 = { title: "Decreto 48/022 (tasas de devolución) – IMPO", url: "https://www.impo.com.uy/bases/decretos/48-2022" }
const SRC_DEC_120 = { title: "Decreto 120/026 (prórroga del Anexo II) – IMPO", url: "https://www.impo.com.uy/bases/decretos/120-2026" }
const SRC_DEC_MEF_2026 = { title: "Decreto MEF de 26/06/2026 (autopartes al Anexo II)", url: "https://medios.presidencia.gub.uy/legal/2026/decretos/07/mef_380_305.pdf" }
const SRC_DEC_435 = { title: "Decreto 435/002 (certificados de crédito) – IMPO", url: "https://www.impo.com.uy/bases/decretos/435-2002" }
const SRC_DEC_558 = { title: "Decreto 558/994 – IMPO", url: "https://impo.com.uy/bases/decretos-originales/558-1994" }
const SRC_DEC_220 = { title: "Decreto 220/998 art. 129 – IMPO", url: "https://www.impo.com.uy/bases/decretos/220-1998/129" }
const SRC_DGI_2218 = { title: "DGI – Formulario 2/218", url: "https://www.gub.uy/direccion-general-impositiva/tramites-y-servicios/formularios/formulario-2218-solicitud-certificados-credito" }
const SRC_CAROU_163 = { title: "CAROU art. 163 – IMPO", url: "https://www.impo.com.uy/bases/codigo-aduanero/19276-2014" }

export const p09Lessons: Subtopic[] = [
  // ─────────────────────────────────────────────────────────────
  {
    id: "p09-s1",
    moduleId: "p09",
    title: "Régimen y secuencia de una exportación",
    summary:
      "Cómo es una exportación en Uruguay de punta a punta: los principios del régimen, los 17 pasos desde la negociación hasta el recupero de beneficios, el DUA de exportación en LUCIA, los canales, el certificado de origen y la diferencia entre exportación definitiva y temporaria.",
    minutes: 19,
    sections: [
      {
        heading: "Los principios: Uruguay no exporta impuestos",
        blocks: [
          {
            type: "p",
            text:
              "La lógica del régimen de exportaciones es simple: un país chico como Uruguay necesita vender afuera y no le conviene cargar sus productos con impuestos que los hagan más caros frente a los de la competencia. Por eso hay tres principios que conviene tener claros desde el día uno:",
          },
          {
            type: "list",
            items: [
              "**Como regla, las exportaciones no están gravadas.** Las excepciones son puntuales (las ves en la lección siguiente).",
              "**La exportación de bienes no lleva IVA**, y el exportador **recupera el IVA de sus compras** (Decreto 220/998, art. 129).",
              "**La declaración de exportación se presenta antes de que salga el medio de transporte** (CAROU, art. 108). Además se admite el **despacho directo**, sin pasar por un depósito temporal de exportación (art. 110).",
            ],
          },
          {
            type: "eli5",
            text:
              "Imaginá que vendés limonada a los vecinos de otra cuadra. Si tu mamá te cobrara un “impuesto” por cada vaso, tendrías que venderla más cara que el chico de enfrente y nadie te compraría. Por eso, a lo que sale del país casi no se le cobra nada, y encima te devuelven parte de lo que pagaste por los limones.",
          },
          {
            type: "p",
            text:
              "El **CAROU** (Código Aduanero de la República Oriental del Uruguay) enumera en su artículo 107 los regímenes de exportación: **exportación definitiva**; **exportación temporaria para reimportación en el mismo estado**; **exportación temporaria para perfeccionamiento pasivo**; y **tránsito aduanero**.",
          },
        ],
      },
      {
        heading: "La secuencia completa, del pedido al cobro",
        blocks: [
          {
            type: "p",
            text:
              "Esta es la secuencia que vas a ver en cualquier exportador o despachante. Mirá la línea de tiempo interactiva y después leé el detalle de cada paso.",
          },
          { type: "tool", toolId: "export-sequence" },
          {
            type: "table",
            headers: ["#", "Etapa", "Quién", "Documento o sistema"],
            rows: [
              ["1", "Contacto y negociación: precio, Incoterm, medio de pago", "Exportador", "Cotización"],
              ["2", "**Factura proforma** (en el idioma del cliente si hace falta)", "Exportador", "Proforma"],
              ["3", "Confirmación: orden de compra, apertura de carta de crédito o pago anticipado", "Importador y bancos", "Orden de compra, L/C"],
              ["4", "Certificados previos que exija el producto o el destino: sanitario (MGAP), bromatológico, fitosanitario, **certificado de origen** (muchos por **VUCE**)", "Exportador y organismos", "Certificados"],
              ["5", "Reserva de flete (*booking*) y coordinación logística: contenedor, ingreso a terminal", "Exportador o forwarder", "Booking; MIC/DTA y CRT si es terrestre"],
              ["6", "**Factura de exportación** (e-factura de exportación) y packing list", "Exportador", "CFE"],
              ["7", "Digitalización de documentos y **numeración del DUA de exportación** en **LUCIA**", "Despachante", "DUA (rango de numeración 500.001 a 749.999)"],
              ["8", "Pago de tasas en el BROU o la DGI, al día hábil siguiente", "Despachante", "—"],
              ["9", "Ingreso de la carga a zona primaria (registro en portón), declaración de contenedores y precintos", "Despachante y terminal", "—"],
              ["10", "**Solicitud de canal**, dentro de **30 días corridos** desde la numeración; si no, el DUA se anula", "Despachante", "LUCIA"],
              ["11", "**Canal**: verde (libramiento automático) o rojo (verificación física y documental por un vista). El naranja es excepcional en exportación", "DNA, por análisis de riesgo", "—"],
              ["12", "Si es rojo: presentarse dentro de **5 días hábiles**; el vista verifica. En granel, diferencias de peso de hasta 5 % se corrigen sin multa", "Despachante y vista", "—"],
              ["13", "**OK-cumplido**, libramiento y **embarque**", "DNA, terminal, transportista", "B/L, AWB o CRT"],
              ["14", "**Cumplido de embarque / cierre del DUA** con el “tercer mensaje” (factura final, datos definitivos del embarque)", "Despachante", "LUCIA"],
              ["15", "Archivo del sobre (DUA + documentos) en un **RASO** dentro de 5 días hábiles", "Despachante", "—"],
              ["16", "Envío de documentos al cliente o al banco; **cobro** (transferencia, cobranza documentaria, carta de crédito)", "Exportador y bancos", "—"],
              ["17", "Recupero de beneficios: **devolución de tributos** si el producto la tiene y **IVA compras** ante la DGI", "Exportador y contador", "Certificados de crédito"],
            ],
          },
          {
            type: "callout",
            tone: "warn",
            title: "Un plazo para confirmar",
            text:
              "El plazo exacto para enviar el “tercer mensaje” que cierra el DUA no está confirmado en la investigación: un procedimiento de la DNA menciona 15 días hábiles desde el embarque. Si te toca, confirmalo en la Orden del Día vigente o con el despachante.",
          },
          {
            type: "eli5",
            text:
              "Exportar es como mandar a tu hijo de excursión: primero acordás con la escuela (negociación y proforma), conseguís los permisos firmados (certificados), reservás el ómnibus (booking), anotás al chico en la lista (DUA), el profesor revisa la mochila o no (canal verde o rojo), sale el ómnibus (embarque) y al final confirmás que llegó y pagás la cuota (cierre y cobro).",
          },
        ],
      },
      {
        heading: "El DUA de exportación y los canales",
        blocks: [
          {
            type: "p",
            text:
              "El **DUA** (Documento Único Aduanero) es la declaración que se usa para todos los regímenes: importación, exportación, tránsito y admisión temporaria. Es 100 % digital y se transmite al sistema **LUCIA** de la DNA. En exportación, lo numera el despachante con un rango propio (500.001 a 749.999), lo que permite distinguirlo a simple vista de uno de importación.",
          },
          { type: "doc", docId: "dua" },
          {
            type: "table",
            headers: ["Canal", "Qué pasa", "Qué tenés que hacer"],
            rows: [
              ["**Verde**", "Libramiento automático", "Seguir con el embarque"],
              ["**Rojo**", "Verificación física y documental por un vista de la DNA", "Presentarse dentro de 5 días hábiles con la mercadería y los documentos"],
              ["**Naranja**", "Excepcional en exportación (revisión documental)", "Presentar lo que pida la DNA"],
            ],
          },
          {
            type: "callout",
            tone: "uy",
            title: "Tasa por escáner",
            text:
              "Desde el Decreto 235/024 y la RG DNA 57/2024, cada DUA de exportación paga una **tasa de inspección no intrusiva de 85 UI**, se escanee o no, e incluso si después se anula el DUA. Están exentos los envíos aéreos de hasta 20 kg y hasta US$ 200.",
          },
          {
            type: "example",
            title: "Contando los 30 días para pedir canal",
            text:
              "El despachante numera un DUA de exportación de carne el 05/03/2026. Los 30 días son **corridos**: el último día para solicitar canal es el 04/04/2026. Si el contenedor no llegó a la terminal a tiempo y no se pidió canal, el DUA se anula y hay que numerar otro (y la tasa de escáner del primero igual se pagó).",
          },
        ],
      },
      {
        heading: "El certificado de origen en la exportación",
        blocks: [
          {
            type: "p",
            text:
              "El **certificado de origen** acredita **dónde se produjo** la mercadería según las reglas de origen de un acuerdo. Sirve para que el importador obtenga la **preferencia arancelaria** en destino (MERCOSUR, ALADI, SGP, etc.) o se presenta cuando el país importador lo exige por otros motivos (certificado no preferencial). Ojo: no acredita desde dónde se despachó la mercadería, sino dónde se produjo.",
          },
          { type: "doc", docId: "certificado-origen" },
          {
            type: "list",
            items: [
              "**Entidades habilitadas (Decreto 182/016):** Dirección Nacional de Industrias del MIEM, MGAP, **Cámara de Industrias del Uruguay**, **Cámara Mercantil de Productos del País**, **Cámara Nacional de Comercio y Servicios** y **Unión de Exportadores del Uruguay**.",
              "**Autoridad:** la **Asesoría de Política Comercial (APC) del MEF** administra los regímenes de origen y audita a las entidades.",
              "**Certificado de Origen Digital (COD):** **obligatorio** para exportar con preferencia a **Argentina y Brasil** desde el **01/02/2020** (Decreto 4/020; papel solo por fuerza mayor, avisando a la APC en 2 días hábiles). También obligatorio hacia Paraguay; opcional con Chile, México y Colombia.",
              "**Régimen de Origen MERCOSUR vigente desde el 18/07/2024:** el certificado se emite dentro de los **180 días** desde la factura comercial y vale **12 meses** desde su emisión.",
            ],
          },
          {
            type: "eli5",
            text:
              "El certificado de origen es como la partida de nacimiento de la mercadería: dice dónde “nació”. Si nació en Uruguay y viaja a Brasil, con esa partida le hacen precio de vecino en la aduana brasileña.",
          },
        ],
      },
      {
        heading: "Exportación definitiva y temporaria",
        blocks: [
          {
            type: "table",
            headers: ["", "Definitiva", "Temporaria (mismo estado)", "Temporaria (perfeccionamiento pasivo)"],
            rows: [
              ["¿Vuelve?", "No", "Sí, en el mismo estado", "Sí, transformada o reparada"],
              ["Tributos", "No hay tributos generales (salvo excepciones)", "Exenta de tributos de exportación; al volver, exenta de tributos de importación (salvo tasas)", "Al volver se tributa según la normativa sobre lo agregado en el exterior"],
              ["Ejemplos", "Venta de carne, celulosa, servicios", "Equipos a una feria, maquinaria a reparar en garantía", "Una pieza que se manda a galvanizar al exterior"],
              ["Cancelación", "—", "Reimportación en plazo o pasar a definitiva (art. 112)", "Reimportación del producto o pasar a definitiva (art. 117)"],
              ["Si se incumple", "—", "Se considera **exportada definitivamente** (art. 113)", "—"],
              ["Base", "CAROU arts. 107-110", "CAROU arts. 111-113", "CAROU arts. 114-117"],
            ],
          },
          {
            type: "callout",
            tone: "warn",
            title: "Base de cálculo a confirmar",
            text:
              "La investigación no confirmó la base exacta sobre la que se tributa al reimportar después de un perfeccionamiento pasivo. Si te toca una operación así, consultalo con el despachante o en la DNA.",
          },
        ],
      },
      {
        heading: "Herramientas de apoyo: VUCE, Uruguay XXI y OEC",
        blocks: [
          {
            type: "table",
            headers: ["Herramienta", "Qué es", "Dato clave"],
            rows: [
              ["**VUCE** (Ventanilla Única de Comercio Exterior)", "Plataforma electrónica para trámites, certificados y permisos ante MGAP, MSP, MIEM, MEF, DINARA y otros, integrada con la DNA", "Creada en 2011, operativa desde 2013; a fines de 2023 tenía 230 procedimientos integrados; tasa de **36 UI** por certificado usado en una operación"],
              ["**Uruguay XXI**", "Agencia de promoción de exportaciones, inversiones e imagen país", "Información (herramienta de reintegros por NCM), capacitación, asesoramiento gratuito, ferias y misiones; programas como Uruguay al Mundo"],
              ["**OEC** (Operador Económico Calificado)", "Certificación voluntaria y gratuita de la DNA para operadores confiables, basada en el Marco SAFE de la OMA", "Vigencia de **3 años**, renovable; menos inspecciones, prioridad, despacho anticipado (Ley 19.149 art. 148; Dec. 51/014)"],
              ["**TU Exporta**", "Régimen simplificado para micro y pequeñas empresas con certificado PYME, por VUCE", "Desde el 25/11/2019; facturas de hasta US$ 2.000 (tope a confirmar)"],
            ],
          },
          {
            type: "callout",
            tone: "uy",
            title: "El tejido exportador uruguayo",
            text:
              "Según Uruguay XXI (2025), Uruguay tiene más de 1.000 empresas exportadoras; unas 860 (83 %) son mipymes, pero explican solo alrededor del 5 % del valor exportado. Es decir: mucha gente exportando poco y pocas empresas grandes (carne, celulosa, soja, lácteos) exportando mucho. En una oficina de comex vas a ver los dos mundos.",
          },
          {
            type: "eli5",
            text:
              "El **OEC** es como el carné de buen alumno: si demostrás que siempre hacés las cosas bien, la aduana te revisa menos y pasás más rápido por la puerta.",
          },
        ],
      },
    ],
    eli5: [
      { concept: "Exportación sin impuestos", text: "Si a la limonada que vendés a otra cuadra le sumaran impuestos, nadie te la compraría. Por eso lo que sale del país casi no paga." },
      { concept: "Canal verde y rojo", text: "Es el semáforo del aeropuerto: con verde pasás directo; con rojo te abren la valija y te preguntan qué llevás." },
      { concept: "Certificado de origen", text: "La partida de nacimiento de la mercadería: dice dónde nació, y con eso en el país vecino le cobran precio de familia." },
      { concept: "Exportación temporaria", text: "Prestarle tu parlante a un amigo que vive en Buenos Aires para una fiesta: sale y vuelve, así que nadie te cobra como si lo hubieras vendido." },
    ],
    keyPoints: [
      "Uruguay no grava, como regla, las exportaciones; la exportación de bienes no lleva IVA y el exportador recupera el IVA de compras (Dec. 220/998 art. 129).",
      "La declaración de exportación se presenta antes de la salida del medio de transporte (CAROU art. 108); se admite el despacho directo (art. 110).",
      "El DUA de exportación se numera en LUCIA (rango 500.001-749.999); el canal se pide dentro de 30 días corridos o el DUA se anula.",
      "En exportación los canales habituales son verde y rojo; el naranja es excepcional. Con rojo, hay 5 días hábiles para presentarse.",
      "Cada DUA de exportación paga 85 UI de tasa de escáner (RG DNA 57/2024), aunque se anule.",
      "El COD es obligatorio hacia Argentina y Brasil desde el 01/02/2020; lo emiten entidades habilitadas por el Dec. 182/016.",
      "Exportación temporaria en el mismo estado: si se incumple, se considera exportada definitivamente (CAROU art. 113).",
    ],
    probableQuestions: [
      { question: "¿Cuándo se presenta la declaración de exportación?", answer: "Antes de la salida del medio de transporte (CAROU art. 108)." },
      { question: "¿Cuál es el plazo para solicitar canal en una exportación?", answer: "30 días corridos desde la numeración del DUA; si no se pide, el DUA se anula." },
      { question: "¿Qué canales se usan en exportación?", answer: "Verde (libramiento automático) y rojo (verificación por un vista); el naranja es excepcional." },
      { question: "¿Qué pasa si el DUA va a canal rojo?", answer: "Hay que presentarse dentro de 5 días hábiles; un vista verifica la mercadería y los documentos." },
      { question: "¿Quién emite los certificados de origen en Uruguay?", answer: "Las entidades habilitadas por el Decreto 182/016: DNI-MIEM, MGAP, Cámara de Industrias, Cámara Mercantil, Cámara Nacional de Comercio y Servicios y Unión de Exportadores." },
      { question: "¿Desde cuándo es obligatorio el COD para Argentina y Brasil?", answer: "Desde el 01/02/2020 (Decreto 4/020)." },
      { question: "¿Qué regímenes de exportación prevé el CAROU?", answer: "Exportación definitiva, temporaria para reimportación en el mismo estado, temporaria para perfeccionamiento pasivo y tránsito (art. 107)." },
      { question: "¿Qué es el OEC?", answer: "La certificación voluntaria y gratuita de la DNA para operadores confiables, por 3 años, con menos inspecciones y prioridad en los trámites." },
    ],
    sources: [SRC_PROC_EXPO, SRC_CAROU_107, SRC_CAROU_108, SRC_CAROU_111, SRC_CAROU_113, SRC_CAROU_117, SRC_DEC_182, SRC_DEC_4, SRC_MEF_COD, SRC_RG57, SRC_VUCE, SRC_DEC_51, SRC_OMC_OEC, SRC_UXXI_SERV, SRC_TU_EXPORTA, SRC_UXXI_NOTAS],
  },

  // ─────────────────────────────────────────────────────────────
  {
    id: "p09-s2",
    moduleId: "p09",
    title: "Tributos a la exportación",
    summary:
      "Qué se paga (y qué no) al exportar desde Uruguay: la regla de no gravar, la excepción de la detracción a los cueros, las tasas por DUA y por certificado y los demás costos que tenés que poner en una cotización. Saber armar ese costo es parte del trabajo diario en comex.",
    minutes: 13,
    sections: [
      {
        heading: "La regla: exportar no paga impuestos",
        blocks: [
          {
            type: "p",
            text:
              "Uruguay, como regla general, **no grava las exportaciones**. No hay un “derecho de exportación” general como existe en otros países de la región. Además, la exportación de bienes **no lleva IVA**: la factura que emite el exportador es una **e-factura de exportación**, sin IVA. Eso no quiere decir que exportar sea gratis: hay **tasas** (pagos por servicios concretos del Estado) y **costos privados** que hay que conocer.",
          },
          {
            type: "callout",
            tone: "info",
            title: "Impuesto, tasa y costo: no es lo mismo",
            text:
              "Un **impuesto** se paga sin una contraprestación directa (el IVA, por ejemplo). Una **tasa** se paga por un servicio concreto del Estado (la tasa por el escáner de la DNA, la tasa de la VUCE). Un **costo privado** es lo que cobra una empresa (el despachante, la terminal, el forwarder). En exportación, lo que casi no hay son impuestos; tasas y costos sí.",
          },
          {
            type: "eli5",
            text:
              "Vender en la feria de otro barrio no te cobra impuesto, pero igual pagás el alquiler del puesto (la tasa) y el flete del que te lleva las cajas (el costo privado).",
          },
        ],
      },
      {
        heading: "La gran excepción: la detracción a los cueros",
        blocks: [
          {
            type: "p",
            text:
              "La excepción más conocida es la **detracción** a la exportación de **cueros bovinos** (subpartidas **41.04.11** y **41.04.19**). Una detracción es un tributo que grava la exportación de un producto, normalmente para que la materia prima quede en el país y se industrialice acá. La tasa base es del **5 %** (Decreto 639/006).",
          },
          {
            type: "p",
            text:
              "Pero esa tasa viene **reducida a 0 %** por prórrogas sucesivas de 12 meses: Decretos 269/020, 174/021, 188/022, 144/023, 120/024 y el último confirmado, **122/025, del 10/06/2025**.",
          },
          {
            type: "callout",
            tone: "warn",
            title: "Para confirmar en 2026",
            text:
              "La investigación no pudo confirmar si hubo una nueva prórroga en junio de 2026. Si no la hubo, la detracción habría vuelto al 5 %. Antes de cotizar una exportación de cueros, confirmalo en IMPO o con el despachante.",
          },
          {
            type: "example",
            title: "Cuánto pesa la detracción si vuelve al 5 %",
            text:
              "Una curtiembre exporta cueros de la subpartida 41.04.11 por un valor de US$ 120.000. Con la tasa reducida a 0 % no paga detracción. Si la prórroga no se renovara y rigiera la tasa base del 5 %, la detracción sería 120.000 × 5 % = **US$ 6.000**. Por eso, en un sector con márgenes chicos, cada prórroga anual se sigue con atención.",
          },
          {
            type: "eli5",
            text:
              "Es como si el club del barrio dijera: “si te llevás las pelotas de cuero a otro club, pagás un 5 %”, para que se queden acá y las usen los equipos locales. Pero cada año el club decide “este año no cobro”, y hay que fijarse si lo volvió a decir.",
          },
        ],
      },
      {
        heading: "Las tasas que sí se pagan",
        blocks: [
          {
            type: "table",
            headers: ["Concepto", "Monto (2025-2026)", "Base"],
            rows: [
              ["Tasa por **inspección no intrusiva** (escáner) de la DNA", "**85 UI por DUA** de exportación. Exentos: envíos aéreos de hasta 20 kg y hasta US$ 200. Se paga aunque se anule el DUA", "Dec. 235/024; RG DNA 57/2024"],
              ["Tasa **VUCE** por certificado usado en una operación", "**36 UI** (desde 2016)", "VUCE"],
              ["**Rectificación de DUA** después del control", "**400 UI**", "CAROU art. 70"],
              ["Otros costos privados", "Honorarios del despachante, certificados de origen, tasas portuarias o aeroportuarias, terminales", "De mercado (tarifas a confirmar)"],
            ],
          },
          {
            type: "p",
            text:
              "La **UI** (Unidad Indexada) es una unidad que se ajusta por inflación, y el CAROU actualiza tributos y multas por UI al momento del pago (art. 190). En la investigación de importación figura un valor de referencia de **$ 6,65** por UI en octubre de 2026, lo que hace que la tasa de escáner ronde los $ 565.",
          },
          {
            type: "example",
            title: "Tasas de un embarque con dos certificados",
            text:
              "Un exportador de vino manda un contenedor a Brasil. Usa en la operación dos certificados de organismos que se tramitan por VUCE (por ejemplo, los que exija el producto en destino). Tasas: escáner 85 UI + 2 × 36 UI = **157 UI**. Con la UI a $ 6,65, son 157 × 6,65 = **$ 1.044,05**. Si además tiene que rectificar el DUA después del control, suma 400 UI más: 557 UI, o sea **$ 3.704,05**. A eso se agregan los honorarios del despachante y los costos de la terminal, que son de mercado.",
          },
          {
            type: "eli5",
            text:
              "Las tasas son como las entradas de un parque: no pagás por los juegos que te llevás (no hay impuesto a lo que vendés), pero sí una entrada fija por cada vez que pasás por el molinete (cada DUA) y por cada pulsera que usás (cada certificado).",
          },
        ],
      },
      {
        heading: "Cómo armar el costo de exportar en una cotización",
        blocks: [
          {
            type: "steps",
            items: [
              { title: "Precio del producto", text: "Sin IVA, porque es exportación." },
              { title: "Gastos hasta el punto del Incoterm", text: "Si vendés FOB Montevideo: flete interno, terminal, despachante y tasas. Si vendés CIF o CFR, sumás el flete internacional (y el seguro en CIF)." },
              { title: "Tasas públicas", text: "Escáner 85 UI por DUA, 36 UI por certificado VUCE y, si aplica, la detracción (cueros)." },
              { title: "Certificados", text: "Origen, sanitario, fitosanitario, según el producto y el destino." },
              { title: "Beneficios a descontar mentalmente", text: "La devolución de tributos (si la posición la tiene) y el IVA compras recuperable mejoran el margen, aunque se cobran después." },
            ],
          },
          {
            type: "callout",
            tone: "tip",
            title: "Pregunta de entrevista",
            text:
              "“¿El exportador paga IVA?” La respuesta completa: no factura IVA en la exportación, pero sí paga IVA en sus compras; ese IVA lo puede recuperar con certificados de crédito de la DGI, que usa para pagar otros tributos o cede. Lo ves en la próxima lección.",
          },
        ],
      },
    ],
    eli5: [
      { concept: "Detracción", text: "Un peaje para que una materia prima no se vaya del país sin industrializar; en los cueros está en 0 % por prórrogas anuales." },
      { concept: "Tasa vs. impuesto", text: "El impuesto es la cuota del club que pagás igual; la tasa es lo que pagás cada vez que usás la cancha." },
      { concept: "Unidad Indexada", text: "Es una “moneda” que se estira con la inflación: 85 UI hoy valen más pesos que hace un año, pero compran lo mismo." },
    ],
    keyPoints: [
      "Uruguay, como regla, no grava las exportaciones, y la exportación de bienes no lleva IVA.",
      "La detracción a cueros bovinos (41.04.11 y 41.04.19) tiene tasa base del 5 % (Dec. 639/006), reducida a 0 % por prórrogas anuales; la última confirmada es el Dec. 122/025 (10/06/2025).",
      "Tasa de escáner: 85 UI por DUA de exportación (RG DNA 57/2024), aun si se anula; exentos los envíos aéreos de hasta 20 kg y US$ 200.",
      "Tasa VUCE: 36 UI por certificado usado en una operación.",
      "Rectificar un DUA después del control cuesta 400 UI (CAROU art. 70).",
      "Honorarios, terminales y certificados son costos privados de mercado que se suman a la cotización según el Incoterm.",
    ],
    probableQuestions: [
      { question: "¿Uruguay cobra impuestos a la exportación?", answer: "Como regla no; hay excepciones puntuales como la detracción a los cueros bovinos." },
      { question: "¿Cuál es la tasa de la detracción a los cueros?", answer: "La tasa base es 5 % (Dec. 639/006), pero se redujo a 0 % por prórrogas de 12 meses; la última confirmada es el Dec. 122/025 de junio de 2025." },
      { question: "¿Cuánto es la tasa de escáner en exportación?", answer: "85 UI por DUA (Dec. 235/024; RG DNA 57/2024), y se paga aunque se anule el DUA." },
      { question: "¿Qué envíos están exentos de la tasa de escáner?", answer: "Los envíos aéreos de hasta 20 kg y hasta US$ 200." },
      { question: "¿Cuánto cobra la VUCE por certificado?", answer: "36 UI por certificado usado en una operación." },
      { question: "¿Cuánto cuesta rectificar un DUA después del control?", answer: "400 UI (CAROU art. 70)." },
      { question: "¿Qué diferencia hay entre una tasa y un impuesto?", answer: "La tasa se paga por un servicio concreto del Estado; el impuesto no tiene contraprestación directa." },
    ],
    sources: [SRC_UXXI_NOTAS, SRC_DEC_122, SRC_RG57, SRC_VUCE, SRC_DEC_220],
  },

  // ─────────────────────────────────────────────────────────────
  {
    id: "p09-s3",
    moduleId: "p09",
    title: "Devolución de impuestos y recuperación del IVA",
    summary:
      "Los dos grandes recuperos del exportador uruguayo: la devolución de tributos de la Ley 16.492 (con las tasas del Decreto 48/022 y la prórroga del Decreto 120/026 hasta el 31/05/2027) y la recuperación del IVA compras ante la DGI. Es plata que el exportador cobra después del embarque y que tenés que saber gestionar.",
    minutes: 16,
    sections: [
      {
        heading: "Por qué se devuelve algo si no se pagó nada",
        blocks: [
          {
            type: "p",
            text:
              "Ya viste que exportar no paga impuestos. Pero fabricar en Uruguay sí: el exportador compra energía, combustibles, servicios e insumos que llevan **impuestos indirectos** “escondidos” en su precio. Si esos impuestos quedan dentro del costo, el producto uruguayo sale más caro que el de un competidor. Por eso existen dos mecanismos distintos que conviene no mezclar:",
          },
          {
            type: "table",
            headers: ["", "Devolución de tributos (reintegro)", "Recuperación del IVA compras"],
            rows: [
              ["Base legal", "Ley 16.492 art. 2 (texto Ley 19.149 art. 362); Dec. 48/022", "Dec. 220/998 art. 129"],
              ["Qué devuelve", "Un **porcentaje fijo** sobre el valor exportado, que representa los impuestos indirectos incluidos en el costo", "El **IVA efectivamente pagado** en las compras que integran el costo de lo exportado"],
              ["Quién puede", "Exportadores de bienes **industrializados producidos en Uruguay** cuya posición NCM tenga tasa", "Todo **exportador directo**"],
              ["Quién lo gestiona", "MEF / DNA / BROU", "DGI"],
              ["Cómo se cobra", "Certificados de crédito exigibles el 1.er día del 5.º mes posterior al embarque", "Certificados de crédito que autoriza la DGI"],
            ],
          },
          {
            type: "eli5",
            text:
              "Pensá en una torta que vendés a un turista que se la lleva a su país. La **devolución de tributos** es un “premio fijo” por torta exportada, que te devuelve un poquito de los impuestos escondidos en el gas, la luz y todo lo que usaste. La **recuperación del IVA** es distinta: es que te devuelvan exactamente el IVA que figura en los tickets de la harina y los huevos.",
          },
        ],
      },
      {
        heading: "La devolución de tributos: Ley 16.492 y Decreto 48/022",
        blocks: [
          {
            type: "p",
            text:
              "La **devolución de tributos** (también llamada **reintegro**) devuelve los **impuestos indirectos incluidos en el costo** de bienes **industrializados** (finales o semielaborados) **producidos en Uruguay** y exportados. Se expresa como un **porcentaje** sobre el valor de exportación y se fija respetando los compromisos ante la **OMC** (Organización Mundial del Comercio). El texto vigente del art. 2 de la Ley 16.492 lo dio la Ley 19.149, art. 362 (2013).",
          },
          {
            type: "list",
            items: [
              "**Las tasas se fijan por posición NCM de 10 dígitos** en el **Decreto 48/022**.",
              "**Anexo I:** tasas permanentes (históricamente muchas en 2 % o 3 %).",
              "**Anexo II:** un **régimen especial transitorio**, con tasas mayores, para sectores afectados por la demanda externa. Se prorroga año a año.",
              "**No es acumulable** con las preferencias de la Tasa Global Arancelaria del Decreto 316/992 (Dec. 48/022 art. 3).",
              "Si el producto exportado usó insumos en **admisión temporaria**, algunas posiciones tienen un porcentaje diferente (Dec. 558/994).",
              "Si se exporta a una **zona franca**, el beneficio se da recién al comprobar la salida al exterior (CAROU art. 163).",
              "Para consultar la tasa de un producto, Uruguay XXI tiene una herramienta web de reintegros por NCM.",
            ],
          },
          {
            type: "table",
            headers: ["Decreto de prórroga del Anexo II", "Vigencia hasta"],
            rows: [
              ["187/022", "31/05/2023"],
              ["152/023", "31/05/2024"],
              ["173/024", "31/05/2025"],
              ["127/025", "31/05/2026"],
              ["**120/026** (del 01/06/2026)", "**31/05/2027**"],
            ],
            caption: "El régimen transitorio del Anexo II se viene prorrogando de a un año.",
          },
          {
            type: "callout",
            tone: "uy",
            title: "Novedad de 2026",
            text:
              "El **Decreto 120/026**, del **01/06/2026**, prorrogó el Anexo II hasta el **31/05/2027**. Además, un decreto del MEF del **26/06/2026** incorporó al Anexo II las posiciones **8708.95.21.00** y **8708.95.29.00** (autopartes) con una tasa del **6 %**.",
          },
          {
            type: "callout",
            tone: "warn",
            title: "Base de cálculo",
            text:
              "Históricamente la devolución se calculó sobre el **valor FOB** (Decreto 558/994). La investigación no confirmó que esa siga siendo la base en el Decreto 48/022; en los ejemplos la usamos como referencia, pero conviene verificarlo.",
          },
          {
            type: "eli5",
            text:
              "El Anexo I es como el descuento fijo que tiene un socio del club todo el año. El Anexo II es una promo especial “por tiempo limitado” para algunos socios que la están pasando mal, y cada año el club decide si la renueva.",
          },
        ],
      },
      {
        heading: "Cómo y cuándo se cobra la devolución",
        blocks: [
          {
            type: "p",
            text:
              "La devolución no se cobra en efectivo de inmediato: se cobra con **certificados de crédito** (Decreto 435/002). Estas son sus reglas:",
          },
          {
            type: "steps",
            items: [
              { title: "Embarque", text: "Se exporta y se cierra el DUA. Hay que estar al día con DGI y BPS." },
              { title: "Cálculo en dólares y conversión", text: "Se aplica el porcentaje de la posición NCM. El monto se convierte con el **tipo de cambio interbancario comprador del día anterior al embarque**." },
              { title: "Exigibilidad", text: "El crédito es **exigible el primer día del quinto mes** posterior al embarque." },
              { title: "Uso", text: "Sirve para **cancelar tributos**." },
              { title: "Endoso", text: "Solo el beneficiario puede **endosarlo**, y **solo a bancos o cooperativas de intermediación financiera**. Así el exportador puede conseguir liquidez antes." },
            ],
          },
          {
            type: "example",
            title: "Calculando la fecha y el monto",
            text:
              "Una industria exporta autopartes de la posición 8708.95.21.00 por **US$ 80.000 FOB**, con embarque el **14/07/2026**. La posición está en el Anexo II con **6 %**. Devolución: 80.000 × 6 % = **US$ 4.800**. Si el tipo de cambio interbancario comprador del 13/07/2026 fuera de $ 40 (dato supuesto para el ejemplo), el crédito sería de 4.800 × 40 = **$ 192.000**. El quinto mes posterior a julio es diciembre: el crédito es exigible el **01/12/2026**. Si la empresa necesita la plata antes, puede endosar el certificado a un banco.",
          },
          {
            type: "callout",
            tone: "warn",
            title: "Procedimiento operativo",
            text:
              "La investigación no confirmó el procedimiento operativo actual de emisión de los certificados (cómo intervienen hoy la DNA y el BROU por sistema). Las reglas de exigibilidad y endoso surgen del Decreto 435/002.",
          },
          {
            type: "eli5",
            text:
              "El certificado de crédito es como un vale que te da el almacén: no es plata en la mano, pero con él pagás tus cuentas en el mismo almacén. Y si necesitás efectivo ya, se lo podés pasar al banco, que te da la plata a cambio.",
          },
        ],
      },
      {
        heading: "La recuperación del IVA compras",
        blocks: [
          {
            type: "p",
            text:
              "El exportador **no factura IVA** en sus ventas al exterior, pero **sí paga IVA** en sus compras: insumos, servicios, fletes internos. El Decreto 220/998, art. 129, le permite **deducir todo el IVA de compras** que integra el costo de lo exportado. Como no tiene IVA ventas contra el cual compensarlo, le queda un **crédito fiscal** a favor.",
          },
          {
            type: "steps",
            items: [
              { title: "Juntar las facturas", text: "Facturas de compra a nombre de la empresa, con el IVA discriminado." },
              { title: "Vincularlas con las exportaciones", text: "DUA de exportación cumplidos (cerrados) que respalden las ventas al exterior." },
              { title: "Declarar el IVA", text: "En la declaración de IVA, el IVA compras queda como crédito porque no hay IVA ventas." },
              { title: "Pedir certificados de crédito a la DGI", text: "La DGI puede autorizar que el crédito se use para **pagar otros impuestos** (de la DGI y, en ciertos casos, aportes al BPS) o se **ceda a otro contribuyente**." },
              { title: "Estar al día", text: "Requisito práctico: estar al día con DGI y BPS." },
            ],
          },
          {
            type: "callout",
            tone: "info",
            title: "Solo el exportador directo",
            text:
              "La recuperación corresponde solo al **exportador directo**. Las etapas anteriores de la cadena (el proveedor que le vende frascos al exportador, por ejemplo) facturan con IVA normalmente.",
          },
          {
            type: "callout",
            tone: "warn",
            title: "Formulario",
            text:
              "La investigación menciona el formulario DGI **2/218** de solicitud de certificados de crédito, pero no confirmó si es el que corresponde a la solicitud de los exportadores. Confirmalo con el contador o en la DGI.",
          },
          {
            type: "example",
            title: "Una exportadora de miel recupera su IVA",
            text:
              "“Mieles del Este” exporta miel fraccionada por **US$ 200.000 FOB**. En el mes pagó **$ 1.100.000** de IVA en frascos, etiquetas, fletes y servicios. Su factura de exportación no lleva IVA, así que su IVA ventas es $ 0. En la declaración, el IVA compras de $ 1.100.000 queda como crédito. Con certificados de crédito de la DGI puede usarlo para pagar, por ejemplo, sus anticipos de IRAE, o cederlo. Si además su posición NCM tuviera una devolución del 2 % (dato supuesto), cobraría 200.000 × 2 % = **US$ 4.000** con certificados exigibles desde el primer día del quinto mes posterior al embarque.",
          },
          {
            type: "eli5",
            text:
              "Es como juntar los tickets del súper para que te devuelvan el IVA en el aeropuerto cuando sos turista: el IVA lo pagaste al comprar, pero como lo que hiciste se va del país, te lo devuelven.",
          },
        ],
      },
      {
        heading: "Otros instrumentos para el exportador",
        blocks: [
          {
            type: "list",
            items: [
              "**Admisión temporaria, toma de stock y draw back** (Ley 18.184): evitan o devuelven los tributos de los insumos importados que se usan para exportar. El **draw back** paga por el BROU dentro de **20 días hábiles** una vez fijada la devolución.",
              "**TU Exporta** (desde el 25/11/2019): régimen simplificado para micro y pequeñas empresas con certificado PYME, con facturas de hasta US$ 2.000 (tope a confirmar), gestión por VUCE y un procedimiento especial para devoluciones.",
            ],
          },
          {
            type: "callout",
            tone: "tip",
            title: "Lo que hace la oficina de comex",
            text:
              "En un exportador, el departamento de comex suele llevar una planilla con cada embarque, su posición NCM, el porcentaje de devolución, la fecha de embarque y la fecha en que el crédito se vuelve exigible. Con eso, finanzas decide si espera o endosa al banco. Es una tarea concreta que podés ofrecer hacer desde el primer día.",
          },
        ],
      },
    ],
    eli5: [
      { concept: "Devolución de tributos", text: "El Estado no quiere exportar impuestos, así que te devuelve un poquito de los impuestos escondidos en lo que costó fabricar tu producto." },
      { concept: "Certificado de crédito", text: "Un vale del almacén: no es plata, pero con él pagás tus cuentas, o se lo cambiás al banco por efectivo." },
      { concept: "Recuperación del IVA", text: "Como el turista que presenta los tickets en el aeropuerto: pagaste IVA al comprar, pero como lo que hiciste se va del país, te lo devuelven." },
      { concept: "Anexo II transitorio", text: "Una promo especial que el club renueva cada año para los socios que la están pasando mal; hoy vale hasta el 31/05/2027." },
    ],
    keyPoints: [
      "La devolución de tributos (Ley 16.492 art. 2) devuelve un porcentaje del valor exportado por los impuestos indirectos incluidos en el costo de bienes industrializados uruguayos.",
      "Las tasas se fijan por NCM de 10 dígitos en el Decreto 48/022: Anexo I permanente y Anexo II transitorio.",
      "El Decreto 120/026 (01/06/2026) prorrogó el Anexo II hasta el 31/05/2027; en junio de 2026 se agregaron autopartes con 6 %.",
      "Se cobra con certificados de crédito exigibles el primer día del quinto mes posterior al embarque, endosables solo a bancos o cooperativas de intermediación financiera.",
      "Si se exporta a zona franca, la devolución se da recién cuando se comprueba la salida al exterior.",
      "El exportador no factura IVA, pero deduce el IVA de compras (Dec. 220/998 art. 129) y lo recupera con certificados de crédito de la DGI.",
      "La recuperación del IVA corresponde solo al exportador directo y exige estar al día con DGI y BPS.",
    ],
    probableQuestions: [
      { question: "¿Qué es la devolución de tributos a la exportación?", answer: "El reintegro de los impuestos indirectos incluidos en el costo de bienes industrializados producidos en Uruguay y exportados, como un porcentaje por posición NCM (Ley 16.492; Dec. 48/022)." },
      { question: "¿Hasta cuándo rige el Anexo II del Decreto 48/022?", answer: "Hasta el 31/05/2027, por la prórroga del Decreto 120/026 del 01/06/2026." },
      { question: "¿Cuándo se puede usar el crédito de la devolución?", answer: "Es exigible el primer día del quinto mes posterior al embarque (Dec. 435/002)." },
      { question: "¿A quién se puede endosar el certificado de devolución?", answer: "Solo a bancos o cooperativas de intermediación financiera, y solo puede endosarlo el beneficiario." },
      { question: "¿Se puede acumular la devolución con las preferencias de la TGA del Dec. 316/992?", answer: "No, el Dec. 48/022 art. 3 dice que no es acumulable." },
      { question: "¿Cómo recupera el IVA un exportador?", answer: "Deduce el IVA de compras (Dec. 220/998 art. 129); como no tiene IVA ventas, le queda un crédito que la DGI le permite usar para pagar otros tributos o ceder mediante certificados de crédito." },
      { question: "¿Quién puede recuperar el IVA de exportación?", answer: "Solo el exportador directo; las etapas anteriores de la cadena facturan con IVA." },
      { question: "¿Qué tipo de cambio se usa para el crédito de devolución?", answer: "El interbancario comprador del día anterior al embarque." },
    ],
    sources: [SRC_LEY_16492, SRC_DEC_48, SRC_DEC_120, SRC_DEC_MEF_2026, SRC_DEC_435, SRC_DEC_558, SRC_DEC_220, SRC_DGI_2218, SRC_UXXI_NOTAS, SRC_TU_EXPORTA, SRC_CAROU_163],
  },
]
