import type { Subtopic } from '../types'

// Módulo 5: secuencia de una importación, agentes, DUA y llenado casilla por casilla.
// Base: docs/research/02_importacion_calculo_dua.md (secciones 1 y 2) y
// docs/research/05_logistica_glosario_empleo.md (secciones 1, 2 y 5.3).

const SRC_DUA_PROC = {
  title: "DNA: Procedimiento DUA Digital, importación",
  url: "https://www.aduanas.gub.uy/innovaportal/file/10163/1/procedimiento_dua_digital_-_importacion.pdf",
}
const SRC_DUA_ANEXO = {
  title: "DNA: Anexo DUA digital (formas de despacho, documentos, canales)",
  url: "https://www.aduanas.gub.uy/innovaportal/file/9902/1/dua_digital__importacion_anexo.pdf",
}
const SRC_OP_ENTRADA = {
  title: "DNA: Operaciones de entrada, procedimiento",
  url: "https://www.aduanas.gub.uy/innovaportal/file/7995/1/operaciones_de_entrada_procedimientos.pdf",
}
const SRC_CAROU = {
  title: "IMPO: Código Aduanero de la República Oriental del Uruguay (Ley 19.276)",
  url: "https://www.impo.com.uy/bases/codigo-aduanero/19276-2014",
}
const SRC_INSTRUCTIVO = {
  title: "DNA: Instructivo de llenado del DUA de importación",
  url: "https://www.aduanas.gub.uy/innovaportal/file/14492/1/instructivo--importacion.pdf",
}
const SRC_XML = {
  title: "DNA: Estructura XML del DUA de importación",
  url: "https://www.aduanas.gub.uy/innovaportal/file/14492/1/dua-de-importacion.pdf",
}
const SRC_CAP7 = {
  title: "DNA: Capítulo 7, instructivo de operaciones de entrada",
  url: "https://www.aduanas.gub.uy/innovaportal/file/7996/1/operaciones_de_entrada_instructivo.pdf",
}

export const p05Lessons: Subtopic[] = [
  // ---------------------------------------------------------------------------
  {
    id: "p05-s1",
    moduleId: "p05",
    title: "La secuencia de una importación paso a paso",
    summary:
      "Los trece pasos que recorre una importación en Uruguay, desde la pro-forma hasta el archivo de la carpeta, con los plazos que tenés que tener en la cabeza. Es el mapa que usa todos los días cualquier oficina de comex.",
    minutes: 18,
    sections: [
      {
        heading: "Por qué empezar por la secuencia",
        blocks: [
          {
            type: "p",
            text: "Cuando entres a un estudio de despachante o al departamento de comex de un importador, lo primero que vas a notar es que todos hablan en términos de *dónde está* cada carpeta: “está para numerar”, “ya pagó, falta canal”, “le tocó rojo”, “ya tiene cumplido, que lo retire el transportista”. Ese idioma sale de una secuencia fija de pasos. Si la tenés clara, entendés cualquier conversación de la oficina y sabés qué falta para que la mercadería salga del puerto.",
          },
          {
            type: "p",
            text: "La secuencia completa tiene **13 pasos**. Los primeros cuatro pasan antes de que la mercadería llegue (comprar, pedir permisos, pagar, embarcar). Del quinto al duodécimo es el **despacho aduanero** propiamente dicho, que el Código Aduanero (CAROU, Ley 19.276, art. 2) define como el conjunto de trámites para aplicar un régimen aduanero. El último es el archivo y el control posterior.",
          },
          { type: "tool", toolId: "import-sequence" },
          {
            type: "table",
            headers: ["#", "Paso", "Quién lo mueve", "Plazo o dato clave"],
            rows: [
              ["1", "Negociación y pro-forma", "Importador y proveedor", "Se fija precio, Incoterm, plazo y forma de pago"],
              ["2", "Clasificación y permisos previos (VUCE)", "Despachante e importador", "NCM de 10 dígitos; MNNT; momento 1, 2 o 3"],
              ["3", "Pago al proveedor o apertura de carta de crédito", "Importador y bancos", "Transferencia, cobranza, carta de crédito o cuenta abierta"],
              ["4", "Embarque", "Vendedor o transitario", "B/L, AWB o CRT con MIC/DTA; factura, packing list, seguro"],
              ["5", "Arribo, manifiesto y depósito temporal", "Agente de transporte", "Hasta 12 meses en depósito; tolerancia 5%; 8 días hábiles para justificar"],
              ["6", "Transmisión del DUA y la DVA", "Despachante", "Por red VAN a LUCIA, con autoliquidación"],
              ["7", "Numeración", "LUCIA", "Formato NNN-AAAA-999999; 30 días corridos para pedir canal"],
              ["8", "Pago de tributos", "Importador vía despachante", "Un solo acto; hasta el día hábil siguiente; DGI 7 días hábiles"],
              ["9", "Canal", "Selectividad (CAROU art. 74)", "Verde, naranja o rojo"],
              ["10", "Verificación", "Vista de la DNA", "Rojo: 5 días hábiles para presentarse"],
              ["11", "Cumplido o levante", "DNA en LUCIA", "El CAROU lo llama libramiento"],
              ["12", "Retiro", "Importador o transportista", "Vía 4 del DUA; terminal, ANP y libre deuda pagos"],
              ["13", "Regularización y archivo", "Despachante", "RADE 10 años; RASO 5 días hábiles"],
            ],
            caption: "Los 13 pasos de una importación definitiva (investigación 02, sección 1).",
          },
          {
            type: "eli5",
            text: "Importar es como mandar a buscar un mueble a otro país y que lo dejen pasar por la puerta de tu edificio. Primero elegís el mueble y acordás el precio (pro-forma), averiguás si el edificio permite ese tipo de mueble (permisos), lo pagás, lo mandan, llega a la portería (depósito), llenás la ficha de ingreso (DUA), pagás la expensa de ingreso (tributos), el portero decide si lo revisa o no (canal) y, cuando te da el OK (cumplido), lo subís a tu casa (retiro).",
          },
        ],
      },
      {
        heading: "Antes de que la mercadería viaje: pasos 1 a 4",
        blocks: [
          {
            type: "steps",
            items: [
              {
                title: "1. Negociación y factura pro-forma",
                text: "Importador y proveedor acuerdan precio, Incoterm, plazo y forma de pago. La pro-forma sirve para cotizar flete y seguro, iniciar permisos previos y, si hace falta, abrir una carta de crédito. En el DUA puede asociarse como documento con el código `PROF`.",
              },
              {
                title: "2. Clasificación arancelaria y permisos previos",
                text: "Antes de comprar, el despachante clasifica la mercadería en la NCM (Nomenclatura Común del MERCOSUR). En Uruguay son **10 dígitos**: 8 de la NCM más 2 de apertura nacional. Con esa clasificación ya sabés qué arancel paga y qué intervenciones de otros organismos necesita.",
              },
              {
                title: "3. Pago internacional",
                text: "Puede ser transferencia anticipada, cobranza documentaria, carta de crédito o cuenta abierta. Intervienen el banco del importador y su corresponsal en el exterior.",
              },
              {
                title: "4. Embarque",
                text: "El vendedor o el transitario reservan bodega. Se emiten el documento de transporte (conocimiento marítimo **B/L**, guía aérea **AWB**, o **CRT** con **MIC/DTA** por carretera), la factura comercial definitiva, el packing list y la póliza de seguro si el Incoterm lo exige.",
              },
            ],
          },
          {
            type: "p",
            text: "El paso 2 es el que más confunde al principio. Las intervenciones de otros organismos se llaman **MNNT**: medidas no arancelarias asociadas a cada NCM. Se tramitan en la **VUCE** (Ventanilla Única de Comercio Exterior): registros y autorizaciones del MSP (medicamentos, cosméticos, alimentos), del MGAP (sanidad animal y vegetal), del LATU (control de alimentos, conformidad), de la URSEA (seguridad eléctrica), del MIEM, del MDN y otros.",
          },
          {
            type: "table",
            headers: ["Momento en LUCIA", "Cuándo hay que presentar el documento"],
            rows: [
              ["1", "Al numerar el DUA"],
              ["2", "Al pedir canal"],
              ["3", "A posteriori"],
            ],
            caption: "LUCIA indica en qué momento debe presentarse cada documento exigido por una MNNT.",
          },
          {
            type: "callout",
            tone: "tip",
            title: "Por qué se clasifica antes de comprar",
            text: "Si el importador compra primero y pregunta después, puede descubrir que el producto necesita un registro del MSP que demora, o que paga un arancel que se le come el margen. En una oficina de comex, la pregunta “¿qué NCM tiene esto?” va **antes** de la orden de compra.",
          },
        ],
      },
      {
        heading: "El arribo: paso 5",
        blocks: [
          {
            type: "p",
            text: "Cuando el buque, el avión o el camión llegan, el **agente de transporte** (agencia marítima o aérea) presenta ante la Dirección Nacional de Aduanas (DNA) la **declaración de llegada o manifiesto** (DAL), que queda registrada en LUCIA, el sistema informático de la Aduana. La carga se descarga en la **zona primaria** (terminal o depósito portuario) y queda en **depósito temporal de importación**.",
          },
          {
            type: "list",
            items: [
              "En depósito temporal la mercadería puede quedarse **hasta 12 meses, prorrogables** (CAROU arts. 57 a 62).",
              "Si la cantidad descargada difiere del manifiesto, hay una **tolerancia del 5%** (art. 54).",
              "Las diferencias deben justificarse dentro de **8 días hábiles** (art. 53).",
            ],
          },
          {
            type: "callout",
            tone: "warn",
            title: "Doce meses no es gratis",
            text: "Que la ley permita 12 meses en depósito temporal no quiere decir que convenga. Mientras el contenedor lleno está en la terminal corren los días libres de la naviera y, después, la **demora** (demurrage). La investigación de logística marca como causas típicas de demora el canal rojo, los documentos faltantes y la falta de fondos para pagar los tributos.",
          },
          {
            type: "eli5",
            text: "El manifiesto es la lista de pasajeros del barco, pero de cajas. El agente marítimo se la entrega a la Aduana apenas llega: “traje estos 40 contenedores, para estas personas”. Si después aparecen cajas de más o de menos, hay un margen chico (5%) y unos días para explicar qué pasó.",
          },
        ],
      },
      {
        heading: "Del DUA al pago: pasos 6, 7 y 8",
        blocks: [
          {
            type: "p",
            text: "Acá entra el despachante con todo. Con la referencia del arribo (número y línea del manifiesto o DAL, o el documento de ingreso a un depósito o zona franca) arma el **DUA** (Documento Único Aduanero) y la **DVA** (declaración del valor en aduana) y los envía por la red **VAN** a LUCIA.",
          },
          {
            type: "steps",
            items: [
              {
                title: "6. Transmisión",
                text: "En el mismo mensaje el despachante propone su **autoliquidación** de tributos e indica si acepta que LUCIA la corrija: `S` (sí), `N` (no) o `P` (prueba).",
              },
              {
                title: "7. Numeración",
                text: "LUCIA valida el mensaje y asigna el número con formato **NNN-AAAA-999999** (aduana, año, correlativo). Desde ese momento corre un plazo: si no se solicita canal en **30 días corridos**, el DUA vence.",
              },
              {
                title: "8. Pago de tributos",
                text: "Se paga todo junto, en un solo acto: **no se aceptan pagos parciales**. Los agentes de cobranza (BROU, o medios electrónicos como URUTEC o SISTARBANC) tienen plazo hasta el **día hábil siguiente** (18:00 en el BROU). Los tributos internos (IVA, IMESI, IRAE) pueden pagarse en la DGI dentro de los **7 días hábiles** desde la aceptación.",
              },
            ],
          },
          {
            type: "callout",
            tone: "warn",
            title: "Si no se paga",
            text: "Si los tributos no se pagan, el DUA se **anula**, pero igual se cobran las tasas de servicio (TSA, TSE y TCI). Un error de caja en el importador puede costar plata aunque la mercadería no salga.",
          },
          {
            type: "eli5",
            text: "Numerar el DUA es como sacar número en la carnicería: ya estás en la fila y tenés tu turno, pero si no te acercás al mostrador en un tiempo (30 días), perdés el número y tenés que sacar otro. Y la cuenta se paga entera, no en cuotas.",
          },
        ],
      },
      {
        heading: "Canal, verificación y cumplido: pasos 9, 10 y 11",
        blocks: [
          {
            type: "p",
            text: "Con los tributos pagos, el despachante pide canal. El canal lo asigna el sistema de **selectividad** (CAROU art. 74) con un análisis de riesgo, complementado con una muestra al azar. Es decir: no lo elige un funcionario a dedo, y aunque tu cliente sea impecable, de vez en cuando le va a tocar una revisión.",
          },
          {
            type: "table",
            headers: ["Canal", "Qué pasa", "Detalle práctico"],
            rows: [
              ["VERDE", "Cumplido automático, sin revisión previa al levante", "LUCIA envía la observación “DISMERC” (mercadería disponible)"],
              ["NARANJA", "Análisis documental a cargo de un Vista (verificador)", "Puede derivar en revisión física"],
              ["ROJO", "Análisis documental y verificación física", "Se entrega un sobre auxiliar con la documentación; 5 días hábiles para presentarse a la verificación"],
            ],
          },
          {
            type: "p",
            text: "En la **verificación** (paso 10) el Vista controla la posición NCM, el valor, el origen, la cantidad y el estado de la mercadería, y puede sacar muestras para análisis químico. Si encuentra discrepancias emite una **hoja de observaciones** (hay 5 días hábiles para levantarla) o una **liquidación complementaria**, con posible infracción.",
          },
          {
            type: "p",
            text: "El **cumplido** o **levante** (paso 11) es la autorización para disponer de la mercadería. El CAROU (art. 2) lo llama **libramiento**. Sin el cumplido registrado en LUCIA, la mercadería no sale del recinto.",
          },
          {
            type: "eli5",
            text: "Los canales son como la salida de un aeropuerto. Verde: pasás con la valija sin que nadie la abra. Naranja: te piden los papeles y los miran. Rojo: te piden los papeles y además abren la valija y revisan todo.",
          },
          {
            type: "callout",
            tone: "info",
            title: "Después del levante también hay canales",
            text: "En exportación se usan solo **verde y rojo**. Y después del levante existen canales internos de control a posteriori: **marrón** (estudio de Fiscalización), **blanco** (sin estudio, pasa a archivo) y **celeste** (laboratorio).",
          },
        ],
      },
      {
        heading: "Retiro y archivo: pasos 12 y 13",
        blocks: [
          {
            type: "p",
            text: "Con el cumplido no alcanza para llevarse el contenedor. Para el **retiro** (paso 12) se usa la **vía 4** del DUA, o la constancia electrónica. Antes hay que pagar los servicios de la terminal y los proventos de la ANP (Administración Nacional de Puertos), y el agente marítimo tiene que liberar el contenedor: el famoso **libre deuda** o la entrega del B/L. Se admiten **retiros parciales**, que quedan anotados en el DUA.",
          },
          {
            type: "p",
            text: "En la **regularización y archivo** (paso 13), las imágenes de los documentos, que son DAE firmados digitalmente, se guardan en un **RADE**, un servicio de archivo digital homologado por la DNA que los conserva **10 años**. Los papeles van a un **RASO**, el archivo físico, con un plazo de **5 días hábiles**. La DNA puede fiscalizar después: que la mercadería haya salido no cierra el tema.",
          },
          {
            type: "example",
            title: "Un contenedor de vasos desde Ningbo, contado como en la oficina",
            text: "El importador manda la orden con la pro-forma; el despachante clasifica los vasos en la NCM y confirma que no requieren certificados especiales. Se paga por transferencia, el proveedor embarca en Ningbo y el agente marítimo presenta el manifiesto cuando el buque llega a Montevideo; el contenedor queda en la terminal de TCP. El despachante transmite el DUA con la DVA, LUCIA lo numera, el cliente paga los tributos por red de cobranza, se pide canal y sale **verde**. Con el cumplido, el cliente paga la terminal y la ANP, la agencia marítima da el libre deuda y el transportista retira el contenedor con la vía 4. El despachante cierra la carpeta en el RADE.",
          },
        ],
      },
      {
        heading: "Dónde se traba una importación",
        blocks: [
          {
            type: "list",
            items: [
              "**Permisos que no se pidieron a tiempo.** Si una MNNT exige un certificado al numerar (momento 1), sin él no hay DUA.",
              "**Diferencias con el manifiesto.** Más allá del 5% hay que justificarlas en 8 días hábiles.",
              "**Fondos para tributos.** El pago es único y total; sin plata no hay canal.",
              "**Canal rojo con documentación floja.** El sobre auxiliar tiene que estar completo y la verificación se hace en 5 días hábiles.",
              "**Plazos que vencen.** 30 días corridos desde la numeración para pedir canal.",
              "**Demoras del contenedor.** Mientras todo eso pasa, corren los días libres de la naviera.",
            ],
          },
          {
            type: "callout",
            tone: "uy",
            title: "El DUA anticipado",
            text: "Para ganar tiempo existe la forma de despacho **1, DUA anticipado** (casilla D del DUA). La investigación de logística lo menciona como una de las formas de prevenir demoras: tener la documentación lista antes del arribo.",
          },
          {
            type: "callout",
            tone: "info",
            title: "Compras por internet: otro circuito",
            text: "Lo que viene por courier sigue un régimen propio (Ley 20.446 y Decreto 50/026, con franquicia de US$ 800 y hasta 3 envíos por persona y año civil desde el 01/05/2026). Un envío de más de US$ 800 o de más de 20 kg requiere despacho formal con despachante, es decir, esta secuencia.",
          },
        ],
      },
    ],
    eli5: [
      {
        concept: "Secuencia de importación",
        text: "Es como la receta de una torta: si ponés el horno antes de mezclar o te olvidás los huevos, no sale. En importación, si pagás los tributos antes de numerar o te falta un permiso, la mercadería no sale del puerto.",
      },
      {
        concept: "Depósito temporal",
        text: "Es la sala de espera del aeropuerto para las cajas: llegaron al país, pero todavía no pasaron migraciones. Pueden esperar ahí un buen tiempo, pero cada día de espera algo cuesta.",
      },
      {
        concept: "Selectividad y canales",
        text: "Es como el control de alcoholemia en la rambla: paran más a los que tienen pinta de riesgo, pero también a algunos al azar. Por eso nadie tiene garantizado el verde.",
      },
      {
        concept: "Libre deuda",
        text: "Es como el ticket del estacionamiento: aunque el guardia te deje salir (cumplido), la barrera no se levanta hasta que pagaste la estadía (terminal, ANP y naviera).",
      },
    ],
    keyPoints: [
      "La importación tiene 13 pasos: 4 antes del arribo, el despacho (5 a 12) y el archivo con control a posteriori (13).",
      "La clasificación NCM y los permisos previos (MNNT en la VUCE) van antes de comprar.",
      "En depósito temporal la mercadería puede quedar hasta 12 meses prorrogables; tolerancia 5% respecto del manifiesto y 8 días hábiles para justificar diferencias.",
      "El DUA se numera con formato NNN-AAAA-999999 y vence si no se pide canal en 30 días corridos.",
      "Los tributos se pagan en un solo acto, sin pagos parciales; los internos pueden pagarse en la DGI dentro de 7 días hábiles.",
      "Canales: verde (sin revisión), naranja (documental), rojo (documental y físico, 5 días hábiles para presentarse).",
      "El cumplido o libramiento (CAROU art. 2) autoriza a disponer de la mercadería; el retiro se hace con la vía 4 y el libre deuda.",
      "Los documentos se archivan en un RADE por 10 años y los papeles en un RASO en 5 días hábiles.",
    ],
    probableQuestions: [
      {
        question: "Contame el circuito de una importación marítima.",
        answer:
          "Pro-forma y clasificación, permisos en VUCE, pago, embarque con B/L, arribo y manifiesto del agente marítimo, transmisión del DUA y la DVA, numeración, pago de tributos, canal, verificación si toca naranja o rojo, cumplido, pago de la terminal y liberación del contenedor, retiro y archivo de la carpeta.",
      },
      {
        question: "¿Cuánto tiempo hay para pedir canal después de numerar el DUA?",
        answer: "30 días corridos. Si no se pide canal en ese plazo, el DUA vence.",
      },
      {
        question: "¿Se pueden pagar los tributos en partes?",
        answer:
          "No. Se pagan en un solo acto. Los agentes de cobranza tienen hasta el día hábil siguiente y los tributos internos pueden pagarse en la DGI dentro de 7 días hábiles desde la aceptación.",
      },
      {
        question: "¿Qué pasa si el DUA se anula por falta de pago?",
        answer: "Se anula, pero igual se cobran las tasas de servicio (TSA, TSE y TCI).",
      },
      {
        question: "¿Quién presenta el manifiesto de llegada?",
        answer: "El agente de transporte (agencia marítima o aérea), ante la DNA; queda registrado en LUCIA.",
      },
      {
        question: "¿Qué diferencia hay entre el cumplido y el retiro?",
        answer:
          "El cumplido (libramiento) es la autorización aduanera para disponer de la mercadería. El retiro es la salida física de la terminal, con la vía 4, después de pagar terminal y ANP y obtener la liberación del contenedor.",
      },
      {
        question: "¿Cuánto puede quedar la mercadería en depósito temporal?",
        answer: "Hasta 12 meses, prorrogables (CAROU arts. 57 a 62).",
      },
      {
        question: "¿Qué hace un Vista?",
        answer:
          "Es el verificador de la DNA: en naranja revisa los documentos y en rojo además la mercadería. Controla NCM, valor, origen, cantidad y estado, y puede emitir observaciones o una liquidación complementaria.",
      },
    ],
    sources: [SRC_DUA_PROC, SRC_DUA_ANEXO, SRC_OP_ENTRADA, SRC_CAROU,
      { title: "DNA: Procedimiento de exportación (canales verde y rojo; marrón, blanco y celeste)", url: "https://www.aduanas.gub.uy/innovaportal/file/12331/1/procedimiento_expo_od_96-2012_.pdf" },
      { title: "DNA: Manual de inducción a LUCIA (2017)", url: "https://www.aduanas.gub.uy/innovaportal/file/18337/1/manual-induccion-lucia-octubre-2017-_-v1.pdf" },
    ],
  },

  // ---------------------------------------------------------------------------
  {
    id: "p05-s2",
    moduleId: "p05",
    title: "Agentes intervinientes y responsabilidades (CAROU)",
    summary:
      "Quién hace qué en una importación y qué dice el Código Aduanero sobre cada uno, con foco en el despachante: qué puede hacer, cuándo no es obligatorio y por qué responde solidariamente por los tributos.",
    minutes: 17,
    sections: [
      {
        heading: "Un elenco grande para una sola caja",
        blocks: [
          {
            type: "p",
            text: "Una importación parece un trato entre dos personas: alguien que vende afuera y alguien que compra acá. En la práctica, para que esa caja llegue intervienen fácilmente diez actores distintos, cada uno con su responsabilidad y su base legal. Saber quién es quién te sirve para dos cosas: para no mandar un mail al que no corresponde y para responder bien en una entrevista.",
          },
          {
            type: "p",
            text: "El marco legal es el **CAROU** (Código Aduanero de la República Oriental del Uruguay, Ley 19.276 de 2014). Para empezar conviene tener a mano cinco definiciones de su artículo 2.",
          },
          {
            type: "table",
            headers: ["Término (CAROU art. 2)", "Qué significa"],
            rows: [
              ["Declarante", "La persona que presenta la declaración de mercadería, o en cuyo nombre se presenta"],
              ["Despacho aduanero", "El conjunto de trámites para aplicar un régimen aduanero"],
              ["Libramiento", "La autorización de la DNA para disponer de la mercadería"],
              ["Mercadería", "Todo bien susceptible de un destino aduanero"],
              ["Régimen aduanero", "El tratamiento que se aplica a la mercadería objeto de tráfico internacional"],
            ],
          },
          {
            type: "eli5",
            text: "Una importación es como una obra de teatro: el importador es el dueño de la compañía, el despachante es el director que lleva los papeles, la Aduana es el inspector municipal, la agencia marítima es quien trae los decorados, la terminal es el teatro y el banco cobra las entradas. Si uno falla, la función no empieza.",
          },
        ],
      },
      {
        heading: "Los agentes, uno por uno",
        blocks: [
          {
            type: "table",
            headers: ["Agente", "Rol en la importación", "Base normativa"],
            rows: [
              ["Importador", "Dueño o consignatario. Debe estar al día con DNA, DGI, BPS y BSE, e inscripto en el registro de importadores. Responde por el destino de la mercadería.", "CAROU arts. 32 a 43 (operadores)"],
              ["Despachante de aduana", "Auxiliar privado del comercio y de la función pública aduanera. Clasifica, valora, confecciona y transmite el DUA, liquida y paga tributos y asiste a la verificación. Es el declarante en la gran mayoría de los casos.", "CAROU arts. 14, 15, 23, 27 y 28; Dec. 96/015"],
              ["DNA", "Autoridad aduanera: controla, clasifica, valora, recauda y asigna canales. Tiene preeminencia sobre otros organismos en la zona primaria.", "CAROU arts. 6 a 12"],
              ["Agente de transporte", "Agencia marítima o aérea: gestiona arribo, permanencia y salida del medio de transporte, carga, descarga y transbordos. Presenta el manifiesto.", "CAROU art. 32"],
              ["Transitario o freight forwarder", "Organiza el transporte puerta a puerta, consolida carga (LCL) y emite el HBL. Es el “arquitecto logístico”.", "CAROU (agentes de carga)"],
              ["ANP y terminales", "La ANP administra el puerto de Montevideo y cobra proventos. TCP opera la terminal especializada de contenedores; Montecon, los muelles públicos multipropósito.", "Ver aviso abajo"],
              ["Depositario", "Opera un depósito aduanero o portuario. Informa ingresos y egresos; su stock se asocia al DUA.", "CAROU (depósito temporal y aduanero)"],
              ["Banco", "Pagos internacionales y cobro de tributos como agente de cobranza (BROU, redes electrónicas).", "—"],
              ["Aseguradora", "Póliza de transporte. Sin seguro declarado, la DNA usa un seguro ficto del 1% del FOB.", "Procedimiento DNA"],
              ["Organismos de control (vía VUCE)", "MSP, MGAP (DGSG, DGSA, DINARA), LATU, URSEA, MIEM, MDN, Ambiente, INAC, entre otros. Emiten certificados que LUCIA verifica electrónicamente.", "VUCE"],
            ],
            caption: "Agentes de una importación (investigación 02, sección 1.3).",
          },
          {
            type: "callout",
            tone: "warn",
            title: "Datos para confirmar",
            text: "La investigación marca como pendiente de verificar la **situación operativa de TCP y Montecon en 2026**. Lo firme es la estructura: TCP (Terminal Cuenca del Plata) es 80% Katoen Natie y 20% ANP y, desde el acuerdo de 2021, tiene prioridad de atraque para portacontenedores. También figura como dato a confirmar si el costo de referencia de **36 UI por certificado VUCE** se cobra como tasa.",
          },
          {
            type: "eli5",
            text: "El agente marítimo y el forwarder se confunden mucho. El agente marítimo es como el representante de una aerolínea en el aeropuerto: atiende al barco. El forwarder es como la agencia de viajes: arma tu viaje completo, aunque no tenga barcos propios.",
          },
        ],
      },
      {
        heading: "El despachante: el centro de la operación",
        blocks: [
          {
            type: "p",
            text: "El **CAROU art. 14** define al despachante y establece que la tramitación de los regímenes y declaraciones aduaneras le corresponde a él, salvo las tareas propias de los agentes de transporte. Puede ser persona física o jurídica. Por eso, en Uruguay, casi todas las importaciones comerciales pasan por un estudio de despachante: no es solo costumbre, es la regla legal.",
          },
          {
            type: "p",
            text: "El **art. 15** enumera los casos en que su intervención **no es preceptiva**:",
          },
          {
            type: "list",
            items: [
              "envíos postales no comerciales;",
              "equipaje;",
              "envíos de entrega expresa de hasta unos US$ 200;",
              "envíos de organismos estatales;",
              "franquicias de residentes que retornan;",
              "muestras exentas de hasta US$ 500 en importación o US$ 1.000 en exportación (Ley 19.924);",
              "régimen especial de comercio fronterizo (Ley 20.419, de 2025).",
            ],
          },
          {
            type: "p",
            text: "El **art. 23** regula el registro de despachantes y el **art. 28** las sanciones, que van desde el apercibimiento hasta la inhabilitación. Pero el artículo que tenés que saber de memoria es el **27**.",
          },
          {
            type: "callout",
            tone: "uy",
            title: "CAROU art. 27: responsabilidad solidaria",
            text: "El despachante responde **solidariamente** con su comitente (el cliente) por los tributos aduaneros, sus reajustes y los proventos portuarios. Las consecuencias de cambiar el destino de la mercadería son solo del comitente. Traducido: si el cliente no paga una diferencia de tributos, la Aduana se la puede cobrar al despachante. Por eso los estudios son tan prolijos con la clasificación y el valor.",
          },
          {
            type: "eli5",
            text: "La responsabilidad solidaria es como salir de garantía en un alquiler: si tu amigo no paga, el dueño te puede cobrar a vos. El despachante es el garante del cliente ante la Aduana, por eso revisa todo dos veces antes de firmar.",
          },
        ],
      },
      {
        heading: "Cómo se llega a ser despachante y qué puede hacer su equipo",
        blocks: [
          {
            type: "p",
            text: "Para ser despachante persona física, el **CAROU art. 16** exige: domicilio en el país, mayoría de edad, secundaria completa, aprobar un **examen de competencia** ante un tribunal de tres miembros, no tener ciertas condenas penales, no estar en concurso y estar al día con DGI, BPS y DNA. La habilitación la otorga el **MEF** y se inscribe en el Registro de Despachantes (art. 23). El Decreto 96/015 exige además una **garantía base de US$ 15.000** a la orden de la DNA, que crece con el volumen despachado (hasta US$ 70.000 si supera US$ 40 millones al año).",
          },
          {
            type: "p",
            text: "Lo que más te importa si recién entrás: un empleado solo puede actuar en nombre del despachante si está **registrado en el sistema informático aduanero** (Dec. 96/015, arts. 6 a 8). El trámite lo inicia **el despachante**, no el empleado, con nota firmada, la cédula del empleado y la planilla de control de trabajo del MTSS. Es gratuito.",
          },
          {
            type: "table",
            headers: ["Un empleado registrado NO puede (Dec. 96/015 art. 7)"],
            rows: [
              ["Firmar el DUA ni sus correcciones"],
              ["Firmar actas de reconocimiento o de discrepancia"],
              ["Hacer autorrevisiones o acuerdos de pago"],
              ["Cobrar devoluciones"],
            ],
          },
          {
            type: "p",
            text: "Y el despachante **responde por los actos de sus empleados**. Además, el titular de la mercadería tiene que otorgarle al despachante un **poder escrito**, registrado ante la DNA y comunicado electrónicamente.",
          },
          {
            type: "table",
            headers: ["Nivel", "Categoría (Dec. 913/986)", "Tarea esencial"],
            rows: [
              ["1", "Cadete", "Entrega y retiro de documentos, bancos, mandados"],
              ["2", "Auxiliar administrativo", "Prepara permisos, calcula IVA, atiende teléfono"],
              ["3", "Auxiliar de aduana", "Tramita documentos en la Aduana, sin hacer el despacho"],
              ["6", "Oficial técnico B", "Redacta permisos de exportación y tránsito"],
              ["8", "Oficial técnico A", "Despacho de importación; controla declaraciones antes de presentarlas"],
              ["9", "Encargado de despacho", "Supervisa operaciones y asesora a clientes"],
            ],
            caption: "Algunas categorías del Decreto 913/986; las denominaciones y laudos vigentes se fijan en el Consejo de Salarios.",
          },
        ],
      },
      {
        heading: "La Aduana y los otros organismos",
        blocks: [
          {
            type: "p",
            text: "La **DNA** es la autoridad aduanera (CAROU arts. 6 a 12): controla, clasifica, valora, recauda y asigna canales. En la zona primaria tiene **preeminencia** sobre los demás organismos. Su cara visible en la verificación es el **Vista**, que revisa documentos y mercadería.",
          },
          {
            type: "p",
            text: "Los demás organismos actúan por la **VUCE**: el MSP para medicamentos, cosméticos y alimentos; el MGAP para sanidad animal y vegetal; el LATU para control de alimentos y conformidad; la URSEA para seguridad eléctrica; y otros. Sus certificados viajan electrónicamente y LUCIA los verifica sin que el despachante adjunte una imagen.",
          },
          {
            type: "example",
            title: "Quién responde en cada problema",
            text: "Llegan 52 cajas cuando el manifiesto decía 50: lo explica el **agente de transporte**. El Vista dice que la NCM está mal y liquida más arancel: lo paga el **importador**, y si no paga, el **despachante** responde solidariamente (art. 27). La terminal no deja salir el contenedor: falta pagar a la **terminal** o la **ANP**, o falta el libre deuda de la **agencia marítima**. Las cremas no tienen registro del MSP: es tema del **importador** con el **organismo de control**, vía VUCE.",
          },
        ],
      },
      {
        heading: "Otros artículos del CAROU que conviene conocer",
        blocks: [
          {
            type: "list",
            items: [
              "**Art. 70:** corrección de una declaración ya registrada; en ciertos casos con un pago de **400 UI**.",
              "**Art. 74:** selectividad, la base legal de los canales.",
              "**Arts. 53 y 54:** justificación de diferencias con el manifiesto (8 días hábiles) y tolerancia del 5%.",
              "**Arts. 57 a 62:** depósito temporal de importación.",
            ],
          },
          {
            type: "callout",
            tone: "warn",
            title: "Infracciones",
            text: "El CAROU define las infracciones aduaneras (diferencia, contrabando, defraudación, entre otras). La investigación no pudo extraer los artículos y montos de esa parte: **confirmalos en IMPO** antes de citarlos.",
          },
          {
            type: "eli5",
            text: "La selectividad del art. 74 es como la máquina que sortea quién pasa por el detector de metales: usa un perfil de riesgo y un poco de azar. Nadie la puede convencer de que te deje pasar.",
          },
        ],
      },
    ],
    eli5: [
      {
        concept: "Despachante de aduana",
        text: "Es el gestor con matrícula que hace el trámite por vos y además sale de garantía si falta pagar algo.",
      },
      {
        concept: "Comitente",
        text: "Es el cliente que le encarga el trámite al despachante, como quien le da las llaves del auto al mecánico: el auto sigue siendo suyo y la decisión de qué hacer con él también.",
      },
      {
        concept: "VUCE",
        text: "Es una ventanilla única en un shopping de trámites: en lugar de ir local por local (MSP, MGAP, LATU), dejás todo en un mostrador y los permisos te llegan solos al DUA.",
      },
      {
        concept: "Registro de empleados",
        text: "Es como el carné de socio de un club que te saca el titular de la familia: no lo podés tramitar solo, primero te tiene que sumar alguien que ya es socio.",
      },
    ],
    keyPoints: [
      "El CAROU (Ley 19.276) es la base: art. 2 define declarante, despacho, libramiento, mercadería y régimen.",
      "El despachante (art. 14) es auxiliar privado del comercio y de la función pública aduanera, y la tramitación le corresponde a él.",
      "El art. 15 lista cuándo no es preceptivo: equipaje, envíos postales no comerciales, muestras exentas, entrega expresa de hasta unos US$ 200, entre otros.",
      "Por el art. 27 el despachante responde solidariamente con su cliente por tributos y proventos portuarios.",
      "Para ser despachante: examen ante tribunal de tres miembros, habilitación del MEF, registro y garantía base de US$ 15.000.",
      "Los empleados actúan solo si el despachante los registra; no pueden firmar el DUA (Dec. 96/015 art. 7).",
      "El agente de transporte presenta el manifiesto; el forwarder organiza el transporte puerta a puerta.",
      "Los organismos de control (MSP, MGAP, LATU, URSEA…) actúan vía VUCE.",
    ],
    probableQuestions: [
      {
        question: "¿Qué hace un despachante de aduana?",
        answer:
          "Es un auxiliar privado del comercio y de la función pública aduanera (CAROU art. 14). Representa al importador o exportador ante la DNA: clasifica, valora, arma y transmite el DUA en LUCIA, liquida y paga tributos, gestiona certificados VUCE y asiste a la verificación. Responde solidariamente por los tributos (art. 27).",
      },
      {
        question: "¿En qué casos no es obligatorio el despachante?",
        answer:
          "Los del CAROU art. 15: envíos postales no comerciales, equipaje, entrega expresa de hasta unos US$ 200, envíos de organismos estatales, franquicias de residentes que retornan, muestras exentas y comercio fronterizo.",
      },
      {
        question: "¿Qué significa que el despachante responde solidariamente?",
        answer:
          "Que la DNA puede cobrarle a él los tributos aduaneros, sus reajustes y los proventos portuarios que el cliente no pague (art. 27). Las consecuencias de cambiar el destino de la mercadería son solo del comitente.",
      },
      {
        question: "¿Qué diferencia hay entre agente de transporte y forwarder?",
        answer:
          "El agente de transporte representa al medio de transporte (buque, avión): gestiona arribo, descarga y presenta el manifiesto. El forwarder organiza el transporte puerta a puerta, consolida carga y emite el HBL.",
      },
      {
        question: "Si entro a trabajar a un estudio, ¿puedo firmar un DUA?",
        answer:
          "No. Primero el despachante te registra en el sistema aduanero; aun registrado, no podés firmar el DUA ni sus correcciones, actas, autorrevisiones o acuerdos de pago (Dec. 96/015 art. 7).",
      },
      {
        question: "¿Qué es el libramiento?",
        answer: "La autorización de la DNA para disponer de la mercadería (CAROU art. 2). En la oficina se dice cumplido o levante.",
      },
      {
        question: "¿Qué requisitos tiene un despachante persona física?",
        answer:
          "Domicilio en el país, mayoría de edad, secundaria completa, examen de competencia ante tribunal de tres miembros, no tener ciertas condenas, no estar en concurso y estar al día con DGI, BPS y DNA (CAROU art. 16).",
      },
    ],
    sources: [
      SRC_CAROU,
      SRC_DUA_PROC,
      { title: "IMPO: CAROU art. 16", url: "https://impo.com.uy/bases/leyes-originales/19276-2014/16" },
      { title: "IMPO: Decreto 96/015", url: "https://www.impo.com.uy/bases/decretos/96-2015" },
      { title: "gub.uy: Registro de empleados de despachante", url: "https://www.gub.uy/tramites/solicitud-registro-empleados-despachante" },
      { title: "IMPO: Decreto 913/986", url: "https://impo.com.uy/bases/decretos/913-1986/3" },
      { title: "VUCE: resultados 2023", url: "https://vuce.gub.uy/wp-content/uploads/2024/03/RESULTADOS-VUCE-Dic-2023-1.pdf" },
      { title: "Mundo Marítimo: TCP centraliza operaciones de contenedores", url: "https://www.mundomaritimo.cl/noticias/terminal-cuenca-del-plata-comienza-a-centralizar-operaciones-de-contenedores-en-el-puerto-de-montevideo" },
    ],
  },

  // ---------------------------------------------------------------------------
  {
    id: "p05-s3",
    moduleId: "p05",
    title: "El DUA: qué es, para qué sirve, regímenes y canales",
    summary:
      "El Documento Único Aduanero es la declaración que se usa para todos los regímenes y que liquida todos los tributos en un solo acto. Acá ves cómo se estructura, qué códigos lleva, qué documentos se le asocian y cómo se asignan los canales.",
    minutes: 18,
    sections: [
      {
        heading: "Qué es el DUA",
        blocks: [
          {
            type: "p",
            text: "El **DUA** (Documento Único Aduanero) es la declaración aduanera única que se usa para **todos los regímenes**: importación, exportación, tránsito y admisión temporaria. Se creó con el **Decreto 333/992** y hoy es **100% digital**: el despachante lo transmite como un mensaje XML, por una red VAN, al sistema **LUCIA** de la DNA.",
          },
          {
            type: "p",
            text: "Lo que lo hace “único” es que incluye la **liquidación de todos los tributos**, también los internos que recauda la DGI (IVA, IMESI, anticipos), y que todos se pagan **en un solo acto** (Decreto 220/998, art. 133). Va acompañado de la **DVA**, la declaración del valor en aduana (formulario DV-1).",
          },
          {
            type: "list",
            items: [
              "Desde la reforma digital, los documentos se presentan como **DAE**: imágenes firmadas digitalmente y alojadas en un **RADE** (archivo digital homologado).",
              "Los certificados emitidos por la **VUCE** viajan electrónicamente y no se adjunta imagen.",
              "Si el instructivo habla de “vías”, es porque el DUA todavía puede imprimirse en ejemplares con destinos distintos.",
            ],
          },
          {
            type: "eli5",
            text: "El DUA es el formulario de inscripción de la mercadería para entrar al país: dice quién la trae, qué es, cuánto vale y cuánto paga. Y LUCIA es el portero digital del edificio: lee el formulario, le pone número y decide si pasás directo o te revisan.",
          },
          { type: "doc", docId: "dua" },
        ],
      },
      {
        heading: "Las vías impresas",
        blocks: [
          {
            type: "table",
            headers: ["Vía", "Destino y uso"],
            rows: [
              ["1", "Aduana. Se conserva mientras no prescriben los tributos."],
              ["2", "Importador. Es su justificante legal de la importación."],
              ["3", "Declarante (despachante)."],
              ["4", "Aduana. Controla la salida de la mercadería del recinto o depósito."],
              ["5", "Transporte, para mercadería en tránsito pendiente de verificación."],
              ["0", "Otros usos justificados."],
            ],
          },
          {
            type: "callout",
            tone: "tip",
            title: "Para la entrevista",
            text: "Las dos vías que más se preguntan: la **vía 2** es la que acredita la importación ante el importador (su justificante legal) y la **vía 4** es la que controla la salida de la mercadería del recinto.",
          },
        ],
      },
      {
        heading: "Regímenes, formas de despacho y otros códigos del cabezal",
        blocks: [
          {
            type: "p",
            text: "El régimen se declara en la **casilla A1** con un código numérico de 2 dígitos de la tabla de regímenes de LUCIA. Estos son los confirmados en el instructivo de la DNA:",
          },
          {
            type: "table",
            headers: ["Código", "Régimen"],
            rows: [
              ["10", "Importación definitiva (despacho directo, desde depósito o desde zona franca o depósito franco)"],
              ["20", "Admisión temporaria para reexpedición en el mismo estado"],
              ["21", "Admisión temporaria para perfeccionamiento activo (transformación, elaboración, reparación)"],
              ["30", "Reimportación en el mismo estado"],
              ["31", "Reimportación con transformación o reparación en el exterior"],
            ],
          },
          {
            type: "callout",
            tone: "warn",
            title: "IMPO, EXPO, TRAN y ADMT",
            text: "En el lenguaje diario se habla de *IMPO* (importación), *EXPO* (exportación), *TRAN* (tránsito) y *ADMT* o *AT* (admisión temporaria) como **familias de régimen**. En el DUA, sin embargo, el régimen va con el **código numérico** de la casilla A1 y el subrégimen en la casilla 53. La investigación no encontró una tabla oficial que use esas siglas como código de LUCIA: si te lo preguntan, aclaralo y sugerí verificar la tabla completa en LUCIA (Datos básicos, Tablas generales).",
          },
          {
            type: "table",
            headers: ["Casilla D: forma de despacho", "Significado"],
            rows: [
              ["0", "Normal"],
              ["1", "DUA anticipado (en un instructivo anterior figuraba como “despacho urgente”)"],
              ["2", "Abierto en frontera terrestre (AFT)"],
              ["4", "Normal con asociación de cargas terrestres"],
            ],
          },
          {
            type: "list",
            items: [
              "**Modalidad (TipoTransito):** `N` normal; `R` repetitivo (varias expediciones); `K` consolidado o correlacionado.",
              "**Tipo de acción del mensaje:** `I` inicial; `C` corrección; `V` cambio de variables; `D` cambio de documentación.",
              "**Código de exoneración (casilla 63):** códigos genéricos según la RG DNA 72/2023; por ejemplo 10042 y 10043 para equipos de transporte de carga (Ley 20.212 art. 657, RG 24/2025).",
            ],
          },
        ],
      },
      {
        heading: "Códigos de acuerdo: la casilla 61",
        blocks: [
          {
            type: "p",
            text: "La **casilla 61** es obligatoria e indica bajo qué acuerdo se importa cada ítem. Es la casilla que “activa” una preferencia arancelaria, y por eso un error ahí sale caro.",
          },
          {
            type: "table",
            headers: ["Código", "Acuerdo", "Comentario"],
            rows: [
              ["310", "ACE 18 (MERCOSUR)", "Exige prueba de origen ORIM o CODM"],
              ["302 / 3024 / 3083", "ACE 2 con Brasil", "Automotor, autopartes y zonas francas"],
              ["111 / 112", "México", ""],
              ["1117 / 1118 / 1119", "Acuerdo MERCOSUR–UE", "Sin cupo; cupo MERCOSUR; cupo bilateral Uruguay. Aplicación provisional desde el 01/05/2026"],
            ],
          },
          {
            type: "eli5",
            text: "El código de acuerdo es como mostrar el carné de socio en la caja del club: si no lo mostrás (o mostrás el de otro club), te cobran la entrada completa aunque seas socio.",
          },
        ],
      },
      {
        heading: "Los documentos que viajan con el DUA",
        blocks: [
          {
            type: "table",
            headers: ["Código LUCIA", "Documento"],
            rows: [
              ["FACC / FACI / FACN", "Factura comercial. FACC: a nivel cabezal (también para flete, gastos y certificado de seguro). FACI: por ítem. FACN: no parcializable."],
              ["PROF", "Pro-forma"],
              ["REMN", "Remito"],
              ["NCRD / NDEB", "Nota de crédito / nota de débito"],
              ["ORII / ORIN; ORIM / CODM", "Certificado de origen; en MERCOSUR también la declaración de origen (formato `DORI-<nºfactura>-<AAMMDD>`, RG 06/2025) y el certificado digital COD"],
              ["Conocimiento / AWB / CRT, MIC-DTA", "Documento de transporte; se asocia por manifiesto + conocimiento + línea (segmento ASOMANIF)"],
              ["Packing list", "Lista de empaque"],
              ["Póliza o certificado de seguro", "Si no se presenta, se aplica el seguro ficto del 1% del FOB"],
              ["Certificados VUCE", "MSP, MGAP, LATU, URSEA, etc. (segmento IMPDOC01, con número y vencimiento)"],
              ["DVA (DV-1)", "Declaración del valor"],
            ],
          },
          {
            type: "callout",
            tone: "info",
            title: "La carpeta",
            text: "En la oficina todo esto se llama **la carpeta**: cada despacho tiene un número interno de carpeta (casilla B del DUA) y adentro van la factura, el documento de transporte, el packing list, el seguro, el origen y los certificados.",
          },
        ],
      },
      {
        heading: "Los canales y qué hacer en cada uno",
        blocks: [
          {
            type: "p",
            text: "El canal lo asigna la **selectividad** (CAROU art. 74): análisis de riesgo más una muestra al azar.",
          },
          {
            type: "table",
            headers: ["Canal", "Revisión", "Qué hace el despachante"],
            rows: [
              ["VERDE", "Ninguna antes del levante; LUCIA envía “DISMERC”", "Avisa al cliente y coordina el retiro"],
              ["NARANJA", "Documental, a cargo de un Vista", "Presenta la documentación; puede derivar en revisión física"],
              ["ROJO", "Documental y física", "Entrega el sobre auxiliar y se presenta a la verificación dentro de 5 días hábiles"],
            ],
          },
          {
            type: "p",
            text: "Si el Vista encuentra diferencias emite una **hoja de observaciones**, con 5 días hábiles para levantarla, o una **liquidación complementaria**, con posible infracción. Si hay que **corregir** una declaración ya registrada, el CAROU art. 70 lo permite, en ciertos casos con un pago de 400 UI.",
          },
          {
            type: "eli5",
            text: "Las observaciones del Vista son como la nota de la maestra en el cuaderno: “corregir y volver a presentar”. Tenés unos días para arreglarlo; si no, la consecuencia es mayor.",
          },
          {
            type: "callout",
            tone: "info",
            title: "Exportación y control a posteriori",
            text: "En exportación hay solo **verde y rojo**. Después del levante existen los canales internos **marrón** (estudio de Fiscalización), **blanco** (archivo sin estudio) y **celeste** (laboratorio).",
          },
        ],
      },
      {
        heading: "La vida de un DUA: del mensaje al archivo",
        blocks: [
          {
            type: "p",
            text: "Conviene ver el DUA no como un papel sino como un **expediente vivo** que cambia de estado. Cada estado tiene su plazo y su riesgo, y en la oficina se habla de las carpetas según el estado en que está su DUA.",
          },
          {
            type: "table",
            headers: ["Estado", "Qué pasó", "Plazo o regla"],
            rows: [
              ["Transmitido", "El despachante mandó el mensaje (tipo de acción `I`, inicial) con la DVA y su autoliquidación", "Indica si acepta que LUCIA corrija la liquidación: S, N o P"],
              ["Numerado", "LUCIA validó y asignó el número NNN-AAAA-999999", "30 días corridos para pedir canal o vence"],
              ["Pagado", "Se pagaron todos los tributos en un solo acto", "Agentes de cobranza: hasta el día hábil siguiente; DGI: 7 días hábiles"],
              ["Con canal", "La selectividad asignó verde, naranja o rojo", "Rojo: 5 días hábiles para presentarse a la verificación"],
              ["Cumplido", "La DNA registró el libramiento en LUCIA", "Recién ahí se puede retirar con la vía 4"],
              ["Archivado", "Los DAE quedan en el RADE y los papeles en el RASO", "RADE 10 años; RASO 5 días hábiles; control a posteriori posible"],
            ],
          },
          {
            type: "p",
            text: "Si en el camino hay que cambiar algo, el mensaje se reenvía con otro **tipo de acción**: `C` para una corrección, `V` para un cambio de variables y `D` para un cambio de documentación. Una declaración ya registrada se corrige por el **CAROU art. 70**, en ciertos casos con un pago de **400 UI**. Y si los tributos no se pagan, el DUA se anula pero se cobran igual las tasas de servicio (TSA, TSE y TCI).",
          },
          {
            type: "callout",
            tone: "tip",
            title: "La autoliquidación",
            text: "El despachante no espera a que la Aduana le diga cuánto pagar: **propone su propia liquidación** en el mensaje (incluidos los tributos internos de la DGI) y LUCIA la controla. Por eso, antes de transmitir, un buen auxiliar ya sabe cuánto tiene que dar el total de la casilla 47. En el módulo 6 vas a aprender a hacer esa cuenta.",
          },
          {
            type: "eli5",
            text: "El DUA es como un pedido de delivery con seguimiento: “recibido”, “pagado”, “en preparación”, “en camino”, “entregado”. Cada estado tiene su tiempo y, si se traba en uno, alguien en la oficina tiene que llamar para destrabarlo.",
          },
        ],
      },
    ],
    eli5: [
      {
        concept: "DUA",
        text: "Es el formulario de inscripción de la mercadería para entrar al país: dice quién la trae, qué es, cuánto vale y cuánto paga.",
      },
      {
        concept: "LUCIA",
        text: "Es el portero digital del edificio. Lee el formulario, le pone número y decide si pasás directo o te revisan.",
      },
      {
        concept: "Régimen aduanero",
        text: "Es el motivo del viaje que declarás en migraciones: no es lo mismo venir a quedarte (importación definitiva) que venir de paseo y volver (admisión temporaria). Según el motivo, te tratan distinto.",
      },
      {
        concept: "Liquidación en un solo acto",
        text: "Es como la cuenta del restaurante que trae todo junto, comida, bebida y cubierto, y se paga de una sola vez: no podés pagar el postre la semana que viene.",
      },
    ],
    keyPoints: [
      "El DUA (Decreto 333/992) es la declaración única para todos los regímenes y hoy es 100% digital, transmitido en XML a LUCIA.",
      "Liquida todos los tributos, incluidos los internos de la DGI, que se pagan en un solo acto (Dec. 220/998 art. 133).",
      "Va con la DVA (DV-1); los documentos se presentan como DAE guardados en un RADE.",
      "Vía 2: justificante del importador. Vía 4: controla la salida del recinto.",
      "Régimen en la casilla A1: 10 importación definitiva; 20 y 21 admisión temporaria; 30 y 31 reimportación.",
      "Forma de despacho (casilla D): 0 normal, 1 DUA anticipado, 2 AFT, 4 normal con asociación de cargas terrestres.",
      "Casilla 61: 310 = ACE 18; 1117/1118/1119 = MERCOSUR–UE desde el 01/05/2026.",
      "Canales: verde, naranja y rojo en importación; solo verde y rojo en exportación.",
    ],
    probableQuestions: [
      {
        question: "¿Qué es el DUA?",
        answer:
          "Es la declaración aduanera única para todos los regímenes, creada por el Decreto 333/992. Se transmite digitalmente a LUCIA, incluye la liquidación de todos los tributos y va con la DVA.",
      },
      {
        question: "¿Qué código de régimen tiene una importación definitiva?",
        answer: "10, en la casilla A1.",
      },
      {
        question: "¿Qué vía del DUA acredita la importación ante el importador?",
        answer: "La vía 2. La vía 4 sirve para controlar la salida del recinto.",
      },
      {
        question: "¿Qué código de acuerdo se usa para el MERCOSUR?",
        answer: "310 (ACE 18), que exige prueba de origen ORIM o CODM.",
      },
      {
        question: "¿Qué es la DVA?",
        answer: "La declaración del valor en aduana (formulario DV-1) que acompaña al DUA.",
      },
      {
        question: "¿Qué pasa si no presento póliza de seguro?",
        answer: "La DNA aplica un seguro ficto del 1% del valor FOB para calcular el valor en aduana.",
      },
      {
        question: "¿Qué es un DUA anticipado?",
        answer: "La forma de despacho 1 de la casilla D, que permite adelantar el trámite; la investigación lo menciona como herramienta para evitar demoras.",
      },
      {
        question: "¿Cuál es la diferencia entre naranja y rojo?",
        answer: "Naranja es solo análisis documental; rojo es análisis documental más verificación física de la mercadería.",
      },
      {
        question: "¿Qué tipos de acción puede tener un mensaje DUA?",
        answer: "I inicial, C corrección, V cambio de variables y D cambio de documentación.",
      },
    ],
    sources: [SRC_INSTRUCTIVO, SRC_XML, SRC_CAP7, SRC_DUA_PROC, SRC_DUA_ANEXO,
      { title: "DNA: Anexo 10 RG 73 (tablas de códigos)", url: "https://www.aduanas.gub.uy/innovaportal/file/14467/1/anexo10_r_g_73.pdf" },
      { title: "DNA: RG 06/2025 (prueba de origen, códigos de acuerdo)", url: "https://aduanas.gub.uy/innovaportal/file/27365/1/rg-06-2025.pdf" },
      { title: "DNA: RG 72/2023 (códigos de exoneración)", url: "https://www.aduanas.gub.uy/innovaportal/file/25772/1/rg-72.2023.pdf" },
      { title: "DNA: Comunicado 33/2026 (MERCOSUR–UE, códigos 1117, 1118 y 1119)", url: "https://www.aduanas.gub.uy/innovaportal/file/28750/1/comunicado-33_2026-anexo.pdf" },
      { title: "IMPO: Dec. 220/998 art. 133", url: "https://www.impo.com.uy/bases/decretos/220-1998/133" },
    ],
  },

  // ---------------------------------------------------------------------------
  {
    id: "p05-s4",
    moduleId: "p05",
    title: "Cómo se completa el DUA, casilla por casilla",
    summary:
      "Recorrido completo del DUA de importación: cabezal, ítem y segmentos asociados, con un ejemplo ficticio de vasos de vidrio desde China. Es la tarea diaria de un auxiliar en un estudio de despachante.",
    minutes: 22,
    sections: [
      {
        heading: "Antes de empezar: cómo está armado",
        blocks: [
          {
            type: "p",
            text: "El DUA tiene tres partes: el **cabezal** (datos generales de la operación, uno por DUA), los **ítems** (una línea por cada NCM de 10 dígitos con iguales condiciones de origen, acuerdo y cupo) y los **segmentos asociados** (documentos, contenedores, facturas, manifiesto, stock y medidas no arancelarias).",
          },
          {
            type: "p",
            text: "Vamos a recorrerlo con la operación del ejemplo de la investigación: vasos de vidrio templado comprados en Ningbo, China, con CIF de US$ 22.700 y TGA ilustrativa del 18%. Todos los datos son **ficticios** y algunos códigos están marcados para verificar en las tablas de LUCIA.",
          },
          { type: "doc", docId: "dua" },
          {
            type: "callout",
            tone: "warn",
            title: "Numeración de casillas",
            text: "Las fuentes son el *Instructivo de llenado del DUA para Importación* (versión XML) y el *Capítulo 7* (numeración clásica de casillas). Algunas casillas aparecen con números distintos según la versión, y varios códigos de tabla (aduana, banco, moneda, país, naturaleza de la transacción, modo de transporte, estado) están marcados **[VERIFICAR]** en la investigación. En el trabajo real, siempre se usan las tablas vigentes de LUCIA.",
          },
          {
            type: "eli5",
            text: "Llenar el DUA es como llenar la planilla de inscripción de un hijo en el colegio: primero los datos de la familia (cabezal), después una ficha por cada hijo (ítems) y al final adjuntás los papeles (segmentos). Si un dato no coincide con la partida de nacimiento, te la devuelven.",
          },
        ],
      },
      {
        heading: "Cabezal, primera parte: régimen y personas",
        blocks: [
          {
            type: "table",
            headers: ["Casilla", "Nombre", "Qué va", "Ejemplo"],
            rows: [
              ["A1", "Régimen", "Código de 2 dígitos", "`10` (importación definitiva)"],
              ["A2", "Aduana", "Aduana donde se presenta, 3 dígitos", "`001` (Montevideo) [verificar código]"],
              ["B", "Carpeta", "Nº interno de carpeta del despachante (6 caracteres)", "`004512`"],
              ["C", "Nº de DUA / año", "Lo asigna LUCIA", "`001-2026-123456`"],
              ["D", "Forma de despacho", "0, 1, 2 o 4", "`0`"],
              ["1A / 1B", "Tipo y nº de documento del importador", "4 = RUT (2 = CI, 6 = pasaporte); 12 dígitos con ceros a la izquierda", "`4` / `210000000019`"],
              ["2", "Nombre del importador", "Razón social según el RUT (40 caracteres)", "`ESPÍRITU DEMO S.A.`"],
              ["3", "Domicilio del importador", "Domicilio fiscal", "`Montevideo, Rincón 123`"],
              ["4", "Documento del declarante", "RUT o CI del despachante", "`4 / 2100…`"],
              ["5", "Nombre del declarante", "Despachante", "`Desp. Juan Pérez`"],
              ["6", "Código del declarante", "Código que asigna la DNA", "`1234`"],
              ["7", "(Uso futuro)", "No se llena", "—"],
              ["8A / 8B", "Usuario de zona franca", "Solo si la mercadería viene de una ZF", "—"],
            ],
            caption: "Cabezal del DUA: identificación del régimen, la aduana y las personas.",
          },
          {
            type: "list",
            items: [
              "La **casilla C** no la llenás vos: la asigna LUCIA al numerar, con el formato aduana-año-correlativo.",
              "En la **1B** el RUT va con 12 dígitos, completando con ceros a la izquierda. Un dígito de menos es un rechazo seguro.",
              "En la **2** va la razón social tal cual figura en el RUT, no el nombre de fantasía.",
              "Las **8A/8B** solo se usan si la mercadería sale de una zona franca hacia territorio aduanero.",
            ],
          },
        ],
      },
      {
        heading: "Cabezal, segunda parte: proveedor, factura, transporte y totales",
        blocks: [
          {
            type: "table",
            headers: ["Casilla", "Nombre", "Qué va", "Ejemplo"],
            rows: [
              ["9", "Proveedor", "Nombre del proveedor del exterior", "`NINGBO GLASS CO.`"],
              ["10", "Dirección del proveedor", "Calle, ciudad, país", "`Ningbo, China`"],
              ["11", "Entidad financiera", "Código del banco interviniente", "`001` (BROU) [verificar]"],
              ["12", "Cantidad de facturas", "Nº de facturas", "`1`"],
              ["13", "Monto total de facturas", "En la divisa de la factura, sin decimales", "`20000`"],
              ["14", "Moneda", "Código de la divisa (única por DUA)", "`USD` / `2222` [verificar tabla]"],
              ["17", "Naturaleza de la transacción", "Código de 2 caracteres (compraventa, sin pago, etc.)", "`11` [verificar]"],
              ["19", "Modo de transporte en frontera", "Marítimo, aéreo, terrestre… (A = medios propios)", "`1` (marítimo) [verificar]"],
              ["33", "Aduana de ingreso", "3 dígitos", "`001`"],
              ["34", "Lugar de localización de la mercadería", "Código del depósito o terminal (4 caracteres)", "`TCP1` (ficticio)"],
              ["36", "Depósito de destino", "Si corresponde", "—"],
              ["37", "Total de bultos", "Suma de los bultos de todos los ítems", "`850`"],
              ["38", "Peso bruto total (kg)", "Hasta 3 decimales", "`12500,000`"],
              ["39 / 48", "Monto y nº de garantía", "Si corresponde", "—"],
              ["40", "Cantidad de ítems", "Máximo 9999", "`2`"],
              ["46", "Total CIF (USD)", "Suma de la casilla 84 de los ítems", "`22700`"],
              ["47", "Total a pagar (en pesos)", "Suma de todos los tributos", "`$ 601.259`"],
              ["49 / 50", "Código y monto de cada tributo", "Lista de tributos liquidados (Tabla 10)", "`TGA 163.440`…"],
              ["87", "Total del valor en aduana", "Suma de la casilla 85", "—"],
              ["93", "Observaciones", "Texto libre (100 caracteres)", "—"],
              ["94", "Firma y fecha", "Firma electrónica del declarante", "—"],
              ["—", "Acepta diferencia", "S / N / P", "`S`"],
              ["—", "Forma de pago DNA / DGI", "1 = BROU, 4 = URUTEC, 5 = SISTARBANC; IVA cód. 1 o 2", "`4` / `1`"],
            ],
            caption: "Cabezal del DUA: comercial, transporte, totales y pago.",
          },
          {
            type: "p",
            text: "Fijate cómo se conectan los números del ejemplo. La **casilla 13** dice 20000 porque la factura es FOB US$ 20.000. La **casilla 46** dice 22700 porque suma el CIF de los ítems (FOB 20.000 + flete 2.500 + seguro 200). La **casilla 47** son los tributos en pesos: el total del ejemplo es US$ 15.031,49 que, al tipo de cambio ilustrativo de $ 40, da ≈ $ 601.260. En la casilla **49/50**, la TGA figura como 163.440, que son los US$ 4.086 de TGA por 40.",
          },
          {
            type: "callout",
            tone: "tip",
            title: "La casilla 14 es única",
            text: "La moneda es **una sola por DUA**. Si el proveedor factura en una moneda que no está en la tabla, se convierte a dólares con el arbitraje del BCU del **día hábil anterior** al registro.",
          },
          {
            type: "eli5",
            text: "Los totales del cabezal son como el total del ticket del súper: no se escriben a mano, salen de sumar cada producto. Si el total no coincide con la suma de los ítems, algo está mal en algún renglón.",
          },
        ],
      },
      {
        heading: "El ítem: identificación, pesos y NCM",
        blocks: [
          {
            type: "p",
            text: "Cada ítem corresponde a **una NCM de 10 dígitos** con iguales condiciones de origen, acuerdo y cupo. Si el mismo contenedor trae vasos y platos con NCM distintas, son dos ítems; si trae vasos chinos y vasos brasileños con la misma NCM, también son dos ítems, porque cambia el origen.",
          },
          {
            type: "table",
            headers: ["Casilla", "Nombre", "Qué va", "Ejemplo"],
            rows: [
              ["51", "Nº de ítem", "Correlativo", "`1`"],
              ["52C", "Documento de carga", "Manifiesto o stock asociado", "—"],
              ["53", "Operación solicitada", "Subrégimen", "[verificar código]"],
              ["57A / 57B", "Tipo y cantidad de bultos", "Igual que el documento de carga", "`CT` / `850`"],
              ["58", "Peso neto (kg)", "Sin envases", "`11800,000`"],
              ["59", "Peso bruto (kg)", "Sin contenedor", "`12500,000`"],
              ["60A", "NCM (10 dígitos)", "8 dígitos NCM + 2 de apertura nacional", "`7013.37.00.00` (ejemplo)"],
              ["60B", "Apertura nacional (DGI)", "Para tributos internos", "`00`"],
              ["61", "Código de acuerdo", "310 = ACE 18; régimen general [verificar código]", "`310`"],
              ["63", "Código de exoneración", "Si hay una norma de exoneración", "—"],
              ["65A / 65B", "Nomenclatura del acuerdo", "Solo para acuerdos con NALADISA (no MERCOSUR)", "—"],
              ["71", "Exonera recargo", "S si la DNA lo autorizó", "—"],
            ],
            caption: "Ítem del DUA: identificación, bultos, pesos, NCM y acuerdo.",
          },
          {
            type: "callout",
            tone: "warn",
            title: "Ojo con la casilla 61 del ejemplo",
            text: "La tabla de la investigación muestra `310` como valor de ejemplo en la casilla 61, pero 310 es el código del **ACE 18** y solo corresponde si la mercadería es de origen MERCOSUR con prueba de origen. Para vasos chinos en régimen general va el código del régimen general, que la investigación marca como **a verificar**. Es un buen ejemplo de error que el Vista detectaría.",
          },
          {
            type: "list",
            items: [
              "**57A/57B:** el tipo y la cantidad de bultos tienen que coincidir con el documento de carga (B/L, AWB o CRT).",
              "**58 y 59:** el peso neto va sin envases y el bruto sin el contenedor. 12.500 kg brutos no incluyen la tara del contenedor.",
              "**60A:** si la NCM está mal, cambian el arancel, los permisos y los tributos internos. Es la casilla más delicada del DUA.",
            ],
          },
        ],
      },
      {
        heading: "El ítem: origen, cantidades y valor",
        blocks: [
          {
            type: "table",
            headers: ["Casilla", "Nombre", "Qué va", "Ejemplo"],
            rows: [
              ["72", "País de origen", "Según el certificado de origen o el país de fabricación", "`156` (China) [verificar tabla]"],
              ["73", "País de procedencia", "Desde donde se despachó y se emitió el título de transporte", "`156`"],
              ["74", "País de adquisición", "Donde se formalizó la compra", "`156`"],
              ["75", "Estado de la mercadería", "Nuevo, usado…", "`N` [verificar]"],
              ["77A / 77B", "Unidad de volumen físico (UVF) y cantidad", "Según el arancel", "`KG` / `11800`"],
              ["78A / 78B", "Unidad comercial y cantidad", "Según la factura", "`UN` / `24000`"],
              ["79A / 79B", "Unidad y cantidad de admisión temporaria LATU", "Solo en AT", "—"],
              ["80–82", "Forma de pago, plazo y % de interés", "Del precio facturado", "—"],
              ["84", "Valor CIF (USD)", "Del ítem", "`22700`"],
              ["85", "Valor en aduana", "Método 1 OMC: precio + ajustes del art. 8", "`22700`"],
              ["86 / 87", "Ajuste (%) y valor ajustado", "Si corresponde", "—"],
              ["89", "VA ajustado + TGA", "Base de IVA y anticipos", "`26786`"],
              ["90", "Marcas y números", "`S/M` y `S/N` si no tiene", "`NB-01/850`"],
              ["91", "Tributo, base y alícuota", "Por cada tributo del ítem", "`TGA C84 18%`"],
              ["92A–E", "Descripción", "(a) genérica y pública, en español; (c), (d) y (e) técnicas y reservadas; químicos con nombre IUPAC y nº CAS", "`Vasos de vidrio templado 300 ml`"],
            ],
            caption: "Ítem del DUA: origen, unidades, valor y descripción.",
          },
          {
            type: "p",
            text: "Tres ideas clave de esta parte. Primero, **origen, procedencia y adquisición** son cosas distintas: un vino chileno comprado a un distribuidor de Miami y embarcado en Miami tiene origen Chile, procedencia EE. UU. y adquisición EE. UU. Segundo, hay **dos unidades**: la del arancel (UVF, por ejemplo kilos) y la comercial de la factura (unidades). Tercero, la **casilla 89** (VA + TGA) es la base de todos los tributos internos: 22.700 + 4.086 = **26.786**.",
          },
          {
            type: "eli5",
            text: "Origen, procedencia y adquisición son como una persona: dónde nació (origen), de qué aeropuerto salió el avión (procedencia) y dónde compró el pasaje (adquisición). Pueden ser tres países distintos.",
          },
          {
            type: "callout",
            tone: "info",
            title: "Flete y seguro no tienen casilla propia",
            text: "En el XML de LUCIA el flete y el seguro **no tienen casillas propias**: entran en la fórmula del valor en aduana (casilla 85). El **Incoterm** se declara en la factura asociada (segmento VALFAC01).",
          },
        ],
      },
      {
        heading: "Los segmentos asociados",
        blocks: [
          {
            type: "table",
            headers: ["Segmento", "Qué contiene"],
            rows: [
              ["IMPDOC01", "Documentos y certificados (código, número, vencimiento, imagen)"],
              ["IMPCNT01", "Contenedores (formato `AAAU-123456-7`, precintos, pies)"],
              ["VALFAC01", "Facturas (número, fecha, Incoterm, lugar de entrega, moneda, importe)"],
              ["ASOMANIF", "Manifiesto (tipo, fecha de arribo, nº de manifiesto, conocimiento, línea, bultos)"],
              ["ASOSTOCK", "Stock en depósito"],
              ["ASOMNNT", "Medidas no arancelarias asociadas a la NCM"],
            ],
          },
          {
            type: "eli5",
            text: "Los segmentos son los clips que abrochan papeles al formulario: uno para la factura, otro para el contenedor, otro para el manifiesto. Sin el clip correcto, el formulario queda suelto y LUCIA no lo acepta.",
          },
        ],
      },
      {
        heading: "Ejercicio guiado y errores frecuentes",
        blocks: [
          {
            type: "example",
            title: "Del expediente al DUA: vasos desde Ningbo",
            text: "Factura FOB Ningbo US$ 20.000, flete US$ 2.500, póliza US$ 200, 850 cartones, 24.000 vasos, 11.800 kg netos y 12.500 kg brutos, TGA ilustrativa 18%. Régimen `10` (A1), forma de despacho `0` (D), una factura (12) por `20000` (13) en dólares (14). Ítem 1 (51): `CT` / `850` (57A/B), `11800,000` (58), `12500,000` (59), NCM en 60A, origen, procedencia y adquisición China (72 a 74), `KG` / `11800` (77) y `UN` / `24000` (78). CIF `22700` (84) y valor en aduana `22700` (85). VA + TGA = `26786` (89). Total CIF del cabezal (46): `22700`. Segmentos: VALFAC01 con el Incoterm FOB, IMPCNT01 con el contenedor y ASOMANIF con el conocimiento y la línea del manifiesto.",
          },
          {
            type: "table",
            headers: ["Error", "Casilla", "Consecuencia probable"],
            rows: [
              ["NCM equivocada", "60A", "Otro arancel, otras MNNT; observación o liquidación complementaria del Vista"],
              ["Código 310 sin prueba de origen válida", "61", "Se pierde la preferencia: TGA extrazona y Tasa Consular del 5%"],
              ["Bultos distintos al documento de carga", "57A / 57B", "Diferencia con el manifiesto que hay que justificar"],
              ["Peso bruto con el contenedor incluido", "59", "Dato inconsistente con el documento de transporte"],
              ["RUT sin ceros a la izquierda", "1B", "Rechazo del mensaje"],
              ["Dos monedas en el mismo DUA", "14", "No se admite: la moneda es única por DUA"],
              ["Descripción vaga (“mercadería varia”)", "92A", "Observación del Vista; la descripción debe ser genérica pero precisa"],
            ],
          },
          {
            type: "callout",
            tone: "tip",
            title: "Cómo controla un oficial técnico",
            text: "Antes de transmitir, cruzá cada número contra su documento: bultos y pesos contra el B/L y el packing list, montos contra la factura, origen contra el certificado, NCM contra el arancel integrado. Si los totales del cabezal (37, 38, 46) no coinciden con la suma de los ítems, no lo mandes.",
          },
        ],
      },
    ],
    eli5: [
      {
        concept: "Cabezal e ítems",
        text: "Es como una factura de supermercado: arriba están los datos del súper y del cliente (cabezal) y abajo cada producto en su renglón (ítems). Si comprás dos cosas distintas, son dos renglones.",
      },
      {
        concept: "NCM en la casilla 60A",
        text: "Es la dirección postal del producto: país (capítulo), ciudad (partida), barrio (subpartida) y casa (ítem y subítem). Si te equivocás de dirección, el arancel le llega a otra casa.",
      },
      {
        concept: "Casilla 89 (VA + TGA)",
        text: "Es como el precio con el envío incluido sobre el que después te calculan el IVA: primero se suma el arancel al valor y recién ahí se aplican los impuestos internos.",
      },
      {
        concept: "Descripción 92A",
        text: "Es como la etiqueta de un frasco en la heladera: tiene que decir qué hay adentro de forma clara para cualquiera. “Cosas varias” no sirve; “vasos de vidrio templado 300 ml”, sí.",
      },
    ],
    keyPoints: [
      "El DUA tiene cabezal, ítems y segmentos asociados.",
      "Un ítem por cada NCM de 10 dígitos con iguales condiciones de origen, acuerdo y cupo.",
      "A1 régimen, D forma de despacho, C número que asigna LUCIA (NNN-AAAA-999999).",
      "1A/1B: tipo de documento del importador (4 = RUT) y número de 12 dígitos con ceros a la izquierda.",
      "Casilla 14: una sola moneda por DUA; las divisas fuera de tabla se convierten con el arbitraje BCU del día hábil anterior.",
      "Casillas 72, 73 y 74: origen, procedencia y adquisición, que pueden ser países distintos.",
      "Casilla 85: valor en aduana; 89: VA + TGA, base de los tributos internos.",
      "Flete y seguro no tienen casilla propia; el Incoterm va en el segmento VALFAC01.",
    ],
    probableQuestions: [
      {
        question: "¿Cuándo se abre un ítem nuevo en el DUA?",
        answer: "Por cada NCM de 10 dígitos con iguales condiciones de origen, acuerdo y cupo. Si cambia alguna, es otro ítem.",
      },
      {
        question: "¿Dónde se declara el Incoterm?",
        answer: "En la factura asociada, segmento VALFAC01. El flete y el seguro no tienen casilla propia: integran el valor en aduana (casilla 85).",
      },
      {
        question: "¿Qué diferencia hay entre país de origen, de procedencia y de adquisición?",
        answer:
          "Origen: donde se fabricó o según el certificado de origen. Procedencia: desde donde se despachó y se emitió el título de transporte. Adquisición: donde se formalizó la compra.",
      },
      {
        question: "¿Qué va en la casilla 89?",
        answer: "El valor en aduana ajustado más la TGA, que es la base del IVA y de los anticipos.",
      },
      {
        question: "¿El peso bruto incluye el contenedor?",
        answer: "No. La casilla 59 pide el peso bruto sin contenedor.",
      },
      {
        question: "¿Se puede declarar más de una moneda en un DUA?",
        answer: "No. La moneda (casilla 14) es única por DUA.",
      },
      {
        question: "¿Qué tiene la casilla 92?",
        answer:
          "La descripción: la (a) es genérica y pública, en español; las (c), (d) y (e) son técnicas y reservadas, y los productos químicos llevan nombre IUPAC y número CAS.",
      },
    ],
    sources: [SRC_INSTRUCTIVO, SRC_XML, SRC_CAP7,
      { title: "DNA: Anexo 10 RG 73 (tablas de códigos)", url: "https://www.aduanas.gub.uy/innovaportal/file/14467/1/anexo10_r_g_73.pdf" },
      { title: "DNA: RG 06/2025 (prueba de origen, códigos de acuerdo)", url: "https://aduanas.gub.uy/innovaportal/file/27365/1/rg-06-2025.pdf" },
      SRC_DUA_PROC,
    ],
  },
]
