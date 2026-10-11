import type { Subtopic } from '../types'

// Módulo 4: documentos de transporte, giro comercial y certificado de origen.
// Base: docs/research/01_incoterms_documentos.md (secciones 4 y 5),
// docs/research/04_tratados_pagos.md (secciones 4.5, 7.1 y 7.2, 7.3 en lo que toca a la letra)
// y docs/research/05_logistica_glosario_empleo.md (secciones 3 y 6).

const SRC_CAROU = {
  title: "IMPO: Código Aduanero, Ley 19.276 (art. 65)",
  url: "https://www.impo.com.uy/bases/codigo-aduanero/19276-2014",
}
const SRC_ICC = {
  title: "ICC: Incoterms® 2020 (B/L a bordo en FCA)",
  url: "https://iccwbo.org/business-solutions/incoterms-rules/incoterms-2020/",
}
const SRC_SINTIA = {
  title: "ARCA/AFIP: SINTIA (MIC/DTA, Res. GMC 17/04)",
  url: "https://www.arca.gob.ar/USAduaneros/sintia/informacion-general.asp",
}
const SRC_ANA2382 = {
  title: "Res. ANA 2382/91, Anexo II “K” (campos del MIC/DTA)",
  url: "https://www.argentina.gob.ar/normativa/recurso/29152/texactres2382-1991ANA-anexoIIK/htm",
}
const SRC_SUNAT = {
  title: "SUNAT: tránsito internacional CAN-ALADI (ATIT, MIC/DTA)",
  url: "https://www.sunat.gob.pe/legislacion/procedim/despacho/transitoInt/procGeneral/despa-pg.27.htm",
}
const SRC_ALADI_ATIT = {
  title: "ALADI: estudio ATIT y MIC/DTA",
  url: "https://www2.aladi.org/nsfaladi/estudios.nsf/F9359CE629BD85EB0325877D0049B2D6/$FILE/241.pdf",
}
const SRC_MAERSK_CW = {
  title: "Maersk: chargeable weight",
  url: "https://ewscpcd.maersk.com/logistics-explained/transportation-and-freight/2025/03/10/air-cargo-chargeable-weight",
}
const SRC_SWIFT = {
  title: "SWIFT: ISO 20022, fin de la coexistencia",
  url: "https://www.swift.com/es/node/310059",
}
const SRC_BANKPULSE = {
  title: "BankPulse: fin del MT103 (22/11/2025)",
  url: "https://bankpulse.io/howto/swift-iso-20022-mt103-retired",
}
const SRC_URC = {
  title: "ICC: URC 522",
  url: "https://iccwbo.org/business-solutions/banking-finance/urc-522/",
}
const SRC_BCU = { title: "Banco Central del Uruguay", url: "https://www.bcu.gub.uy" }
const SRC_DEC182 = {
  title: "IMPO: Decreto 182/016 (entidades habilitadas)",
  url: "https://www.impo.com.uy/bases/decretos/182-2016",
}
const SRC_MEF_INFORME = {
  title: "MEF: informe Certificados de Origen emitidos (2025)",
  url: "https://www.gub.uy/ministerio-economia-finanzas/sites/ministerio-economia-finanzas/files/2025-10/Meta%202%20-Informe%20-%20Certificados%20de%20Origen%20emitidos%20-%20%28versi%C3%B3n%20no%20confidencial%29.pdf",
}
const SRC_MEF_COD = {
  title: "MEF: Certificación de Origen Digital",
  url: "https://www.gub.uy/ministerio-economia-finanzas/politicas-y-gestion/certificacion-origen-digital",
}
const SRC_MEF_DJO = {
  title: "MEF: datos mínimos de la declaración jurada de origen",
  url: "https://www.gub.uy/ministerio-economia-finanzas/sites/ministerio-economia-finanzas/files/2020-10/datos_minimos_dj.pdf",
}
const SRC_COM60 = {
  title: "DNA: Comunicado 60/2024 (nuevo ROM, letras A, B y C)",
  url: "https://aduanas.gub.uy/innovaportal/file/26814/1/comunicado-60-2024-gestion-de-comercio-exterior.pdf",
}
const SRC_RG04 = {
  title: "DNA / VUCE: RG 04/2025 (COD con Colombia)",
  url: "https://vuce.gub.uy/wp-content/uploads/2025/02/rg-04-2025.pdf",
}
const SRC_CDA = {
  title: "CDA: nuevo régimen de origen MERCOSUR",
  url: "https://www.cda.org.ar/detalle_noticia.php?id=41518",
}
const SRC_ALADI_ACUERDOS = {
  title: "ALADI: acuerdos actuales",
  url: "https://www.aladi.org/sitioaladi/acuerdos-actuales/",
}

export const p04Lessons: Subtopic[] = [
  // ---------------------------------------------------------------- p04-s1
  {
    id: "p04-s1",
    moduleId: "p04",
    title: "Conocimiento de embarque (B/L)",
    summary:
      "El B/L es el documento de transporte marítimo y, a la vez, el “título” de la mercadería: quien lo tiene bien endosado la retira. Saber leerlo es imprescindible en un forwarder, una agencia marítima, un despachante o un banco.",
    minutes: 16,
    sections: [
      {
        heading: "Las tres funciones del B/L",
        blocks: [
          {
            type: "p",
            text: "El **conocimiento de embarque** (en inglés *Bill of Lading*, abreviado **B/L** o BL) lo emite el transportista marítimo cuando recibe la carga. Tiene tres funciones clásicas, y la tercera es la que lo hace distinto de cualquier otro documento de transporte:",
          },
          {
            type: "steps",
            items: [
              { title: "Recibo de la mercadería", text: "El transportista declara qué recibió y en qué **estado aparente**." },
              { title: "Prueba del contrato de transporte", text: "Las condiciones del contrato están al dorso o en las *terms & conditions* de la naviera." },
              { title: "Título representativo de la mercadería", text: "Quien tiene el B/L negociable, bien endosado, tiene derecho a reclamar la carga en destino. Por eso se puede **endosar, vender o dar en garantía**, y los bancos lo usan en las cartas de crédito." },
            ],
          },
          {
            type: "eli5",
            text: "El B/L es el ticket del guardarropa. Quien tiene el ticket se lleva la campera. Si se lo das a un amigo (lo “endosás”), tu amigo puede ir a retirarla.",
          },
          {
            type: "callout",
            tone: "uy",
            title: "Por qué le importa a la Aduana",
            text: "El **CAROU (art. 65)** exige que la declaración aduanera acredite la **disponibilidad jurídica** de la mercadería mediante el **conocimiento de embarque o un documento equivalente**. En la práctica: para despachar un contenedor que llegó a Montevideo, el importador tiene que ser el consignatario del B/L o tenerlo endosado a su favor, y la agencia marítima tiene que liberarlo.",
          },
        ],
      },
      {
        heading: "Tipos de B/L",
        blocks: [
          {
            type: "table",
            headers: ["Criterio", "Tipos", "Lo que tenés que saber"],
            rows: [
              ["**Cómo circula** (casilla *Consignee*)", "**Nominativo** (*straight*): consignado a una persona determinada; no se transmite por endoso, solo por cesión. **A la orden** (*to order* / *to the order of* un banco o el embarcador): se transmite por **endoso**. **Al portador**: lo retira quien lo tenga.", "El a la orden es el más usado con cartas de crédito. El al portador es raro y riesgoso."],
              ["**Estado de la carga**", "**Limpio** (*clean*): sin reservas. **Sucio** (*claused/foul*): con anotaciones de daño, como “bultos rotos” o “mojado”.", "Los bancos **rechazan los B/L sucios** en una carta de crédito (UCP 600, art. 27)."],
              ["**Momento**", "**Embarcado / a bordo** (*shipped on board*): la carga ya está en el buque. **Recibido para embarque** (*received for shipment*): está en poder del transportista pero todavía no a bordo; puede convertirse en “a bordo” con una anotación fechada.", "Las cartas de crédito suelen exigir “on board”; por eso Incoterms 2020 permite pactarlo en FCA."],
              ["**Emisor**", "**Master B/L (MBL):** lo emite la **naviera** al consolidador o forwarder. **House B/L (HBL):** lo emite el **forwarder o NVOCC** a cada embarcador de una consolidación (LCL).", "En carga consolidada hay dos niveles de documentos."],
              ["**Otros**", "Directo o corrido (*through B/L*, con transbordos); multimodal (*combined transport*); **Sea Waybill** (no negociable, para entregas rápidas); **Telex release** o B/L *surrender* (se entregan los originales en origen y se libera por mensaje); **eB/L** (electrónico).", "El Sea Waybill no es título: la carga se entrega al consignatario indicado."],
            ],
            caption: "Fuente: investigación del módulo (B/L, UCP 600 art. 27, Incoterms 2020).",
          },
          {
            type: "eli5",
            text: "El master y el house son como una caja grande y sus cajitas: la naviera le da un solo ticket al forwarder por el contenedor entero (master), y el forwarder le da un ticket chiquito a cada cliente por su parte (house).",
          },
        ],
      },
      {
        heading: "El B/L a la orden y el endoso",
        blocks: [
          {
            type: "p",
            text: "El B/L **a la orden** es el que más vas a ver en operaciones con banco. En la casilla *Consignee* no figura el importador sino una fórmula como “To order” o “To the order of Banco República”. Eso significa que la carga se entrega a quien le **endosen** el documento.",
          },
          {
            type: "example",
            title: "Un B/L consignado al banco",
            text: "Un importador de Montevideo compra con carta de crédito del BROU. El B/L dice: *Consignee: To the order of Banco República*. Cuando el importador paga o el banco lo financia, el banco **endosa** el B/L a favor del importador y le entrega los originales. Con ese B/L endosado, el importador (a través de su despachante) consigue que la agencia marítima libere la carga. Sin el endoso del banco, el importador no puede retirar nada, aunque haya pagado al proveedor.",
          },
          {
            type: "callout",
            tone: "warn",
            title: "Errores que traban un contenedor",
            text: "Un B/L a la orden sin el endoso correcto, un consignatario mal escrito o un *notify party* equivocado pueden dejar un contenedor parado en la terminal mientras corren almacenaje y demoras. Revisá la casilla *Consignee* apenas recibas el borrador del B/L, antes de que se emita el original.",
          },
          {
            type: "p",
            text: "**Juego de originales.** Normalmente se emiten **3 originales** (*full set 3/3*) y varias copias no negociables. Con presentar uno se liberan los demás: “*one of which being accomplished, the others to stand void*”. Por eso un banco con carta de crédito pide siempre el juego completo.",
          },
        ],
      },
      {
        heading: "Cómo leer un B/L, casilla por casilla",
        blocks: [
          {
            type: "table",
            headers: ["Casilla", "Qué tiene", "Qué controlás"],
            rows: [
              ["Shipper / Embarcador", "Nombre y dirección del exportador", "Que coincida con la factura."],
              ["Consignee / Consignatario", "“To order”, “To the order of Banco X” o un nombre", "Define el tipo de B/L y quién retira."],
              ["Notify Party", "A quién se avisa la llegada", "Normalmente el importador o su despachante."],
              ["B/L N.º y Booking N.º", "Identificación del documento y de la reserva", "Se usa en el DUA para asociar la carga."],
              ["Vessel / Voyage", "Buque y viaje", "Coincide con el manifiesto."],
              ["Port of Loading / Port of Discharge / Place of Delivery", "Puerto de carga, de descarga y lugar final", "Coherencia con el Incoterm."],
              ["Marks & Numbers / Container / Seal", "Marcas, número de contenedor y precinto", "Coherencia con el packing list."],
              ["Number and kind of packages / Description", "Bultos y descripción (“Said to contain”, “Shipper's load, stow and count”)", "Coherencia con la factura."],
              ["Gross Weight / Measurement", "Peso bruto (kg) y volumen (m³)", "Coherencia con el packing list y el DUA."],
              ["Freight & charges", "*Prepaid* o *Collect*", "Coherencia con el Incoterm."],
              ["Number of original B/Ls", "Por ejemplo, THREE / 3", "Que se tenga el juego completo."],
              ["Shipped on board date / Place and date of issue", "Fecha de embarque y de emisión", "Fechas exigidas por la carta de crédito."],
              ["Firma", "Del transportista, el capitán o el agente “as carrier”", "Que esté."],
            ],
          },
          { type: "doc", docId: "bl" },
          {
            type: "callout",
            tone: "tip",
            title: "Prepaid o collect, otra vez",
            text: "*Freight prepaid* (flete pagado en origen) es típico de CFR, CIF, CPT y CIP. *Freight collect* (a pagar en destino) es típico de FOB y FCA. Si el B/L y la factura no coinciden, preguntá antes de seguir.",
          },
        ],
      },
      {
        heading: "El B/L en la operación uruguaya",
        blocks: [
          {
            type: "steps",
            items: [
              { title: "Borrador", text: "El forwarder o la naviera manda el borrador (*draft*) del B/L. El exportador y el importador lo revisan: consignatario, notify, descripción, pesos." },
              { title: "Emisión", text: "Cuando la carga está a bordo, se emite el B/L con la fecha de embarque." },
              { title: "Circulación", text: "Los originales viajan por courier o por el circuito bancario (cobranza o carta de crédito). Con *telex release*, se entregan en origen y se libera por mensaje." },
              { title: "Arribo a Montevideo", text: "La agencia marítima presenta el manifiesto. El despachante asocia el DUA al manifiesto, el conocimiento y la línea." },
              { title: "Liberación", text: "Con el B/L original (o la liberación electrónica) y el flete pago, la agencia libera la carga y el contenedor, y la terminal entrega con el levante de la DNA." },
            ],
          },
          {
            type: "eli5",
            text: "Un B/L limpio es una foto de una caja sana. Uno sucio es la misma foto con una nota que dice “llegó abollada”. El banco no quiere pagar por una caja abollada, así que rechaza el sucio.",
          },
        ],
      },
    ],
    eli5: [
      {
        concept: "B/L",
        text: "Es el ticket del guardarropa: quien lo tiene en la mano se lleva la campera.",
      },
      {
        concept: "Endoso",
        text: "Es firmar atrás del ticket “se lo paso a Juan”. Desde ahí, Juan puede ir a retirar la campera.",
      },
      {
        concept: "Master y house",
        text: "La naviera le da un ticket grande al forwarder por todo el contenedor, y el forwarder reparte ticketcitos a cada cliente por su parte.",
      },
      {
        concept: "B/L sucio",
        text: "Es la foto de la caja con una nota de “llegó abollada”. El banco no paga por cajas abolladas.",
      },
    ],
    keyPoints: [
      "El B/L es recibo de la carga, prueba del contrato de transporte y título representativo de la mercadería.",
      "Puede ser nominativo, a la orden (se transmite por endoso) o al portador; la casilla Consignee define el tipo.",
      "Un B/L sucio (con reservas sobre la carga) es rechazado por los bancos en una carta de crédito (UCP 600, art. 27).",
      "El master B/L lo emite la naviera al consolidador; el house B/L, el forwarder o NVOCC a cada embarcador.",
      "Se emiten normalmente 3 originales; presentado uno, los demás quedan sin efecto.",
      "Freight prepaid es típico de las reglas C; freight collect, de FOB y FCA.",
      "El CAROU (art. 65) exige acreditar la disponibilidad jurídica de la mercadería con el conocimiento de embarque o equivalente.",
    ],
    probableQuestions: [
      { question: "¿Cuáles son las funciones del B/L?", answer: "Recibo de la mercadería, prueba del contrato de transporte y título representativo de la mercadería." },
      { question: "Un B/L consignado “To the order of Banco República”, ¿qué tipo es?", answer: "A la orden: se transmite por endoso. Es típico de las cartas de crédito." },
      { question: "¿Qué es un B/L sucio?", answer: "Uno con anotaciones sobre daños o mal estado de la carga, como “cajas rotas”. Los bancos lo rechazan en una carta de crédito." },
      { question: "Diferencia entre master y house B/L.", answer: "El master lo emite la naviera al consolidador o forwarder; el house lo emite el forwarder o NVOCC a cada embarcador de la consolidación." },
      { question: "¿Qué es un Sea Waybill?", answer: "Un documento de transporte marítimo no negociable: no es título y la carga se entrega al consignatario indicado." },
      { question: "¿Qué significa “full set 3/3”?", answer: "Que se emitieron tres originales y se presenta el juego completo. Con presentar uno se liberan los demás." },
      { question: "¿Qué diferencia hay entre un B/L “on board” y uno “received for shipment”?", answer: "El on board certifica que la carga ya está en el buque; el received for shipment, que el transportista la recibió pero todavía no la embarcó." },
      { question: "¿Qué es un telex release?", answer: "La entrega de los originales en origen y la liberación de la carga en destino por mensaje, sin que viajen los originales." },
    ],
    sources: [SRC_CAROU, SRC_ICC,
      { title: "DNA: Procedimiento DUA digital, importación", url: "https://www.aduanas.gub.uy/innovaportal/file/10163/1/procedimiento_dua_digital_-_importacion.pdf" },
    ],
  },

  // ---------------------------------------------------------------- p04-s2
  {
    id: "p04-s2",
    moduleId: "p04",
    title: "Guía aérea, CRT, MIC/DTA y TIF/DTA",
    summary:
      "Los documentos de transporte aéreo, carretero y ferroviario. Con Argentina y Brasil manda el camión, así que el CRT y el MIC/DTA son el pan de cada día en muchas oficinas uruguayas.",
    minutes: 15,
    sections: [
      {
        heading: "La guía aérea (AWB)",
        blocks: [
          {
            type: "p",
            text: "La **guía aérea** (*Air Waybill*, **AWB**) es el documento del transporte aéreo. Tiene tres funciones: **recibo de la carga**, **prueba del contrato de transporte aéreo** (bajo el Convenio de Montreal de 1999 o el de Varsovia) y **factura del flete**. Pero hay una diferencia clave con el B/L: **no es título de crédito, no es negociable**. Siempre es nominativa (“*Not negotiable*”) y la carga se entrega al consignatario indicado. Por eso, en una carta de crédito, se suele consignar al banco.",
          },
          {
            type: "table",
            headers: ["Concepto", "Qué es"],
            rows: [
              ["**MAWB** (Master AWB)", "La emite la aerolínea (o su agente IATA) al consolidador. Número de **11 dígitos**: los **3 primeros son el prefijo de la aerolínea** y los 8 siguientes el número de serie, cuyo último dígito es de control."],
              ["**HAWB** (House AWB)", "La emite el consolidador o freight forwarder a cada embarcador."],
              ["Formato", "Estándar **IATA**, con **3 originales**: verde para el transportista emisor, rosa para el consignatario y azul para el embarcador. Hoy predomina la **e-AWB**."],
              ["Aeropuerto de salida", "Con código IATA; Montevideo es **MVD**."],
            ],
          },
          {
            type: "eli5",
            text: "La guía aérea es la etiqueta con nombre en la mochila de la excursión: solo se la dan a ese chico, aunque otro tenga la etiqueta en la mano. El B/L, en cambio, es un ticket que se puede pasar a otro.",
          },
          { type: "doc", docId: "awb" },
        ],
      },
      {
        heading: "El peso facturable en la AWB",
        blocks: [
          {
            type: "p",
            text: "Una de las casillas más importantes de la AWB es el **chargeable weight** (peso facturable): el mayor entre el **peso bruto real** y el **peso volumétrico**. El divisor IATA estándar es **6000**: largo × ancho × alto en centímetros, dividido 6000.",
          },
          {
            type: "example",
            title: "Cuatro cajas de muestras",
            text: "Un exportador manda por Carrasco 4 cajas de 60 × 50 × 40 cm, de 12 kg cada una. Volumen por caja: 120.000 cm³ ÷ 6000 = 20 kg volumétricos; total 80 kg. Peso real: 48 kg. **Peso facturable: 80 kg**, porque es el mayor.",
          },
          {
            type: "list",
            items: [
              "Otros campos: aeropuertos de salida y destino, ruta y vuelos, moneda y si el flete es **PPD** (prepaid) o **COLL** (collect), valor declarado para el transporte y para la aduana, información de manejo (por ejemplo “Perishable”), naturaleza y cantidad de la mercadería con dimensiones, y otros cargos como combustible o seguridad.",
            ],
          },
        ],
      },
      {
        heading: "El CRT: la carta de porte por carretera",
        blocks: [
          {
            type: "p",
            text: "El **CRT** (Conocimiento de Transporte Internacional por Carretera, o Carta de Porte Internacional) es el documento del **contrato de transporte por carretera**. Su marco es el **ATIT** (Acuerdo sobre Transporte Internacional Terrestre, ALADI, 1990), firmado por Argentina, Bolivia, Brasil, Chile, Paraguay, Perú y Uruguay. Funciona como **prueba del contrato y recibo de la mercadería**, lo emite el **porteador** (la empresa de transporte habilitada) y se hace en español o portugués, por lo general en formato bilingüe.",
          },
          {
            type: "table",
            headers: ["Bloque del CRT", "Qué tiene"],
            rows: [
              ["Partes", "Remitente, porteador, destinatario, consignatario y a quién notificar."],
              ["Número", "Con la sigla del país y el número de permiso del porteador."],
              ["Lugares y plazos", "Dónde y cuándo el porteador se hace cargo; lugar y plazo de entrega."],
              ["Mercadería", "Bultos, marcas, tipo de mercadería, contenedores, peso bruto y neto, volumen."],
              ["Valores y gastos", "Valor y moneda, flete, seguro, quién paga cada gasto, reembolso contra entrega."],
              ["Documentos e instrucciones", "Documentos anexos (factura, certificado de origen) e instrucciones de aduana."],
              ["Firmas", "Del remitente, del porteador y del destinatario al recibir."],
            ],
            caption: "Estructura típica del modelo ATIT bilingüe, de unas 24 casillas.",
          },
          {
            type: "callout",
            tone: "warn",
            title: "Numeración de casillas",
            text: "La numeración exacta de las casillas del CRT (y del MIC/DTA) que circula en los cursos es la estructura típica, no un formulario oficial verificado. Si te toca llenarlo, usá el formulario del transportista o el oficial vigente.",
          },
          { type: "doc", docId: "crt" },
        ],
      },
      {
        heading: "El MIC/DTA: manifiesto y tránsito en un solo papel",
        blocks: [
          {
            type: "p",
            text: "El **MIC/DTA** (Manifiesto Internacional de Carga / Declaración de Tránsito Aduanero) es un solo documento con dos funciones: es el **manifiesto de la carga** del vehículo, donde se listan todos los CRT que lleva el camión, y es la **declaración de tránsito aduanero**, que permite cruzar fronteras y países de tránsito **bajo control aduanero y con precintos**, sin pagar tributos en cada frontera.",
          },
          {
            type: "table",
            headers: ["", "CRT", "MIC/DTA"],
            rows: [
              ["Qué es", "Contrato de transporte", "Manifiesto + declaración de tránsito"],
              ["Naturaleza", "Comercial / de transporte", "Aduanera"],
              ["Cuántos por camión", "Uno por cada remitente o contrato", "**Uno por vehículo**, que puede amparar **varios CRT**"],
              ["Quién lo emite", "El porteador", "El transportista o su agente de transporte aduanero (ATA)"],
              ["Marco", "ATIT", "ATIT y Res. GMC 17/04 (informatización en el MERCOSUR)"],
            ],
          },
          {
            type: "eli5",
            text: "El MIC/DTA es la lista que lleva el chofer del ómnibus escolar con todos los chicos que van a bordo (los CRT), más un permiso para pasar por las casas de los vecinos sin parar, siempre que no abra las puertas (los precintos).",
          },
          { type: "doc", docId: "mic-dta" },
          {
            type: "example",
            title: "Un camión de Fray Bentos a Buenos Aires",
            text: "Un transportista uruguayo lleva en el mismo camión carga de dos exportadores: una bodega y una fábrica de envases. Emite **dos CRT**, uno por cada remitente, y **un MIC/DTA** que los ampara a los dos. El camión cruza por el puente Fray Bentos – Puerto Unzué precintado, bajo tránsito aduanero, y los tributos de importación se pagan recién en destino.",
          },
        ],
      },
      {
        heading: "TIF/DTA y la comparación final",
        blocks: [
          {
            type: "p",
            text: "El **TIF/DTA** es el equivalente ferroviario: el TIF (*Transporte Internacional Ferroviario*) es la carta de porte internacional ferroviaria, acompañada de la declaración de tránsito aduanero. Tiene remitente, destinatario, estaciones, vagones, precintos, mercadería, pesos, valor, flete y aduanas de partida, frontera y destino. En Uruguay su uso es limitado: el tráfico ferroviario internacional es marginal y el Ferrocarril Central es principalmente doméstico.",
          },
          {
            type: "table",
            headers: ["Documento", "Modo", "¿Negociable / título?", "Emisor", "Copias habituales"],
            rows: [
              ["B/L", "Marítimo", "**Sí** (a la orden o al portador)", "Naviera (MBL) / NVOCC (HBL)", "3 originales"],
              ["Sea Waybill", "Marítimo", "No", "Naviera", "—"],
              ["AWB", "Aéreo", "No", "Aerolínea (MAWB) / consolidador (HAWB)", "3 originales IATA"],
              ["CRT", "Carretera", "No en la práctica", "Porteador", "Original y copias"],
              ["MIC/DTA", "Carretera (aduanero)", "No: es un documento aduanero", "Transportista / ATA", "—"],
              ["TIF/DTA", "Ferrocarril", "No", "Ferrocarril", "—"],
            ],
          },
          {
            type: "callout",
            tone: "uy",
            title: "Pasos de frontera que vas a escuchar",
            text: "Con Argentina: Fray Bentos – Puerto Unzué/Gualeguaychú, Paysandú – Colón y Salto – Concordia. Con Brasil: Rivera – Santana do Livramento, Chuy – Chuí, Río Branco – Jaguarão, Artigas – Quaraí, Bella Unión – Barra do Quaraí y Aceguá – Aceguá.",
          },
        ],
      },
    ],
    eli5: [
      {
        concept: "Guía aérea",
        text: "Es la etiqueta con nombre en la mochila de la excursión: solo se la dan a ese chico, aunque otro tenga la etiqueta.",
      },
      {
        concept: "CRT",
        text: "Es el papelito que te da el remisero de encomiendas cuando le dejás tu paquete: prueba que se lo diste y que te lo tiene que llevar.",
      },
      {
        concept: "MIC/DTA",
        text: "Es la lista del chofer del ómnibus escolar con todos los chicos a bordo, más un permiso para pasar por las casas de los vecinos sin parar, con las puertas cerradas.",
      },
      {
        concept: "Peso facturable",
        text: "El avión se llena de espacio antes que de peso: una caja enorme de plumas paga como si pesara más.",
      },
    ],
    keyPoints: [
      "La AWB es recibo, prueba del contrato y factura del flete, pero no es negociable: la carga se entrega al consignatario indicado.",
      "El número de la MAWB tiene 11 dígitos y los 3 primeros son el prefijo de la aerolínea; la HAWB la emite el consolidador.",
      "El peso facturable es el mayor entre el real y el volumétrico (cm³ ÷ 6000).",
      "El CRT es el contrato de transporte por carretera bajo el ATIT; lo emite el porteador.",
      "El MIC/DTA es manifiesto y declaración de tránsito: uno por vehículo, puede amparar varios CRT y permite cruzar fronteras precintado.",
      "El TIF/DTA es el equivalente ferroviario y en Uruguay tiene un uso limitado.",
      "Solo el B/L marítimo (a la orden o al portador) es título negociable.",
    ],
    probableQuestions: [
      { question: "¿Qué función del B/L no tiene la guía aérea?", answer: "La de título de crédito negociable: la AWB es siempre “not negotiable”." },
      { question: "¿Qué indican los tres primeros dígitos de una MAWB?", answer: "El prefijo de la aerolínea. El número tiene 11 dígitos y el último es de control." },
      { question: "¿Qué es el CRT?", answer: "El Conocimiento de Transporte Internacional por Carretera: prueba del contrato de transporte y recibo de la mercadería, emitido por el porteador bajo el ATIT." },
      { question: "¿Qué documento sirve a la vez de manifiesto y de declaración de tránsito en carretera?", answer: "El MIC/DTA." },
      { question: "¿Cómo se relacionan el CRT y el MIC/DTA?", answer: "Hay un CRT por remitente o contrato y un MIC/DTA por vehículo, que puede amparar varios CRT." },
      { question: "¿Qué países integran el ATIT?", answer: "Argentina, Bolivia, Brasil, Chile, Paraguay, Perú y Uruguay." },
      { question: "¿Qué es el TIF/DTA?", answer: "La carta de porte internacional ferroviaria con la declaración de tránsito aduanero, el equivalente ferroviario del CRT y el MIC/DTA." },
    ],
    sources: [SRC_SINTIA, SRC_ANA2382, SRC_SUNAT, SRC_ALADI_ATIT, SRC_MAERSK_CW],
  },

  // ---------------------------------------------------------------- p04-s3
  {
    id: "p04-s3",
    moduleId: "p04",
    title: "El giro comercial como forma de pago",
    summary:
      "En comex “giro” se usa para dos cosas: la transferencia internacional de fondos y la letra de cambio que un vendedor gira contra el comprador. Las dos aparecen todos los días en la mesa de comex de un banco y en la pro-forma.",
    minutes: 14,
    sections: [
      {
        heading: "Dos sentidos de una misma palabra",
        blocks: [
          {
            type: "p",
            text: "Cuando en una oficina alguien dice “hacé el giro al proveedor”, casi siempre está hablando de una **transferencia internacional**: una orden de pago de un banco a otro. Pero en los libros y en los créditos documentarios vas a leer también “girar una letra”: ahí “giro” es la **letra de cambio** (en inglés, *draft*), un título por el cual el vendedor ordena al comprador pagar. Conviene tener claros los dos sentidos.",
          },
          {
            type: "table",
            headers: ["", "Giro como transferencia", "Giro como letra de cambio"],
            rows: [
              ["Qué es", "Orden de pago de banco a banco, vía SWIFT", "Título de crédito: el librador ordena al librado pagar"],
              ["Cuándo aparece", "Pago anticipado y cuenta abierta", "Cobranza documentaria (D/A) y cartas de crédito por aceptación o negociación"],
              ["Quién toma la iniciativa", "El importador ordena a su banco", "El exportador libra la letra contra el importador"],
            ],
          },
          {
            type: "eli5",
            text: "“Girar” plata es como mandarle dinero a un amigo por el banco. “Girar” una letra es como mandarle un vale que dice “pagame tanto tal día”: él lo firma y queda comprometido.",
          },
        ],
      },
      {
        heading: "La transferencia internacional",
        blocks: [
          {
            type: "p",
            text: "La transferencia es el **medio de pago más usado** en comex: tanto el pago anticipado como la cuenta abierta se liquidan así. El banco del importador (banco ordenante) debita su cuenta y envía un mensaje por **SWIFT** al banco del exportador, directamente o a través de un banco corresponsal. Los dólares normalmente pasan por un corresponsal en Nueva York.",
          },
          {
            type: "steps",
            items: [
              { title: "Acuerdo", text: "Importador y exportador pactan precio, Incoterm y pago anticipado en la pro-forma." },
              { title: "Instrucción", text: "El importador instruye la transferencia a su banco, con la pro-forma." },
              { title: "Envío", text: "El banco ordenante debita la cuenta y manda el mensaje SWIFT, directo o vía corresponsal." },
              { title: "Acreditación", text: "El banco del beneficiario aplica controles de prevención de lavado y sanciones y acredita los fondos." },
              { title: "Embarque", text: "El exportador ve los fondos, embarca y manda los documentos directamente al importador." },
            ],
          },
          {
            type: "table",
            headers: ["Dato que se necesita", "Comentario"],
            rows: [
              ["Nombre y dirección del beneficiario", "Tal como figuran en su banco."],
              ["Cuenta o **IBAN**", "El IBAN se usa en los países que lo tienen, como en Europa; en Uruguay no."],
              ["**BIC/SWIFT** del banco beneficiario", "El código que identifica al banco."],
              ["Banco intermediario o corresponsal", "Si aplica."],
              ["Moneda, monto y concepto", "El concepto suele ser el número de factura o pro-forma."],
              ["Opción de gastos", "OUR, SHA o BEN."],
            ],
          },
        ],
      },
      {
        heading: "OUR, SHA y BEN: quién paga las comisiones",
        blocks: [
          {
            type: "table",
            headers: ["Código", "En ISO 20022", "Quién paga", "Efecto"],
            rows: [
              ["**OUR**", "DEBT", "El ordenante paga todos los gastos", "El beneficiario recibe el monto íntegro."],
              ["**SHA**", "SHAR", "Compartidos: cada uno paga los de su banco", "Es el más común; los intermediarios suelen descontar del monto."],
              ["**BEN**", "CRED", "El beneficiario paga todos", "Llega el monto neto de comisiones."],
            ],
          },
          {
            type: "example",
            title: "La transferencia que llegó “incompleta”",
            text: "Un importador alemán debía pagar EUR 20.000 por anticipado. El exportador uruguayo recibe EUR 19.935 en su cuenta del BROU, y el cliente jura que mandó 20.000. ¿Qué pasó? La transferencia salió con **SHA** (o BEN) y un banco intermediario descontó su comisión. Para evitarlo, la pro-forma tiene que decir que **todos los gastos bancarios fuera de Uruguay son por cuenta del comprador** e instruir **OUR**. Y conviene pedir el comprobante de la transferencia para rastrearla.",
          },
          {
            type: "eli5",
            text: "OUR es cuando invitás vos y pagás la cuenta y la propina. SHA es cuando cada uno paga lo suyo. BEN es cuando el que cumple años paga todo. Si querés que te llegue la plata entera, pedí OUR.",
          },
        ],
      },
      {
        heading: "SWIFT hoy: del MT103 al pacs.008",
        blocks: [
          {
            type: "p",
            text: "Durante años el mensaje de una transferencia de cliente fue el **MT103**, y el de banco a banco, el MT202. SWIFT migró a **ISO 20022**, con mensajes más ricos en datos estructurados, y la **coexistencia entre los dos formatos para pagos transfronterizos terminó el 22/11/2025**. Hoy el equivalente al MT103 es el **pacs.008** y el del MT202 es el **pacs.009**. En la práctica mucha gente sigue diciendo “mandame el MT103” para pedir el comprobante de una transferencia.",
          },
          {
            type: "callout",
            tone: "info",
            title: "SWIFT gpi",
            text: "Con **SWIFT gpi** se puede seguir una transferencia de punta a punta con un código único, el **UETR**. Si un pago “no aparece”, pedí el UETR al ordenante.",
          },
          {
            type: "callout",
            tone: "uy",
            title: "Uruguay: libertad cambiaria y controles de lavado",
            text: "Uruguay **no tiene controles de cambio**: las empresas pueden cobrar y pagar en cualquier moneda, mantener cuentas en dólares y no hay obligación de ingresar las divisas de exportación. Lo que sí hay son controles de **prevención de lavado de activos** (Ley 19.574): por eso el banco te pide la factura, el DUA o el contrato para justificar una transferencia. El **BCU** regula y supervisa a los bancos y el **BROU** ofrece transferencias, cobranzas, cartas de crédito y prefinanciación de exportaciones.",
          },
        ],
      },
      {
        heading: "La letra de cambio",
        blocks: [
          {
            type: "p",
            text: "La **letra de cambio** es un título de crédito por el cual el **librador** (normalmente el exportador) ordena al **librado** (el importador) pagar una suma a un **beneficiario o tomador** en una fecha, que puede ser **a la vista** o **a plazo**.",
          },
          {
            type: "table",
            headers: ["Parte", "Quién es en comex"],
            rows: [
              ["Librador", "El exportador, que gira la letra."],
              ["Librado", "El importador, que tiene que pagarla (y, si es a plazo, aceptarla)."],
              ["Beneficiario o tomador", "Quien cobra: el exportador o el banco al que se la endosó."],
            ],
          },
          { type: "doc", docId: "letra-cambio" },
          {
            type: "list",
            items: [
              "**En la cobranza D/A** (documentos contra aceptación): el banco entrega los documentos al importador cuando este **acepta** la letra a plazo, por ejemplo a 90 días vista. El importador retira la mercadería y paga al vencimiento.",
              "**En la cobranza simple o limpia**: solo viajan documentos financieros, como letras o pagarés, sin documentos comerciales.",
              "**En cartas de crédito** por aceptación o negociación, los bancos aceptan o compran letras (*drafts*).",
              "**Aval bancario:** si un banco avala la letra, se vuelve descontable y el exportador puede cobrarla antes (forfaiting).",
              "**Protesto:** si la letra no se paga y la instrucción de cobranza lo prevé, puede protestarse.",
            ],
          },
          {
            type: "eli5",
            text: "La letra de cambio es un vale firmado: “Yo, el comprador, le pago a Juan US$ 10.000 dentro de 90 días”. Juan puede guardar el vale y cobrarlo ese día, o, si un banco lo respalda, venderlo antes con un descuento.",
          },
        ],
      },
      {
        heading: "Dónde queda el giro en la escalera de riesgo",
        blocks: [
          {
            type: "p",
            text: "Las formas de pago se ordenan según quién corre más riesgo. Para el exportador, de más seguro a menos seguro: **pago anticipado → carta de crédito confirmada → carta de crédito → cobranza D/P → cobranza D/A → cuenta abierta**. Para el importador es exactamente al revés.",
          },
          {
            type: "table",
            headers: ["Forma", "Cómo se paga", "Riesgo del exportador"],
            rows: [
              ["Pago anticipado", "Transferencia antes del embarque", "Mínimo"],
              ["Cobranza D/A", "Letra aceptada a plazo", "Medio-alto: entregó los documentos contra una promesa de pago"],
              ["Cuenta abierta", "Transferencia después del embarque", "Máximo"],
            ],
          },
          {
            type: "callout",
            tone: "tip",
            title: "Escribilo en la pro-forma",
            text: "La forma de pago es uno de los elementos de la pro-forma. No alcanza con poner “transferencia”: indicá si es anticipada o a plazo, la opción de gastos (OUR) y los datos bancarios completos. Si es con letra, el plazo y si debe estar avalada.",
          },
        ],
      },
    ],
    eli5: [
      {
        concept: "Transferencia internacional",
        text: "Es mandar plata por el banco a otro país: tu banco le pasa un mensaje al banco del otro y, a veces, a un banco intermedio que hace de puente.",
      },
      {
        concept: "OUR, SHA y BEN",
        text: "OUR: invitás vos y pagás todo. SHA: cada uno paga lo suyo. BEN: paga todo el cumpleañero.",
      },
      {
        concept: "Letra de cambio",
        text: "Es un vale firmado que dice “te pago tanto tal día”. Si un banco lo respalda, se puede vender antes.",
      },
      {
        concept: "Cuenta abierta",
        text: "Es fiar en el almacén: llevás la mercadería y pagás a fin de mes. Cómodo para el cliente, riesgoso para el almacenero.",
      },
    ],
    keyPoints: [
      "“Giro” se usa como transferencia internacional y también como letra de cambio (draft).",
      "La transferencia vía SWIFT es el medio más usado; con ella se liquidan el pago anticipado y la cuenta abierta.",
      "OUR: paga todo el ordenante; SHA: gastos compartidos; BEN: paga el beneficiario. Para recibir el monto completo, OUR.",
      "La coexistencia MT/ISO 20022 para pagos transfronterizos terminó el 22/11/2025; el equivalente al MT103 es el pacs.008.",
      "En la letra de cambio el librador ordena al librado pagar a un beneficiario, a la vista o a plazo.",
      "En la cobranza D/A el importador acepta la letra y recibe los documentos; paga al vencimiento.",
      "Uruguay tiene libertad cambiaria, pero los bancos piden respaldo documental por prevención de lavado.",
    ],
    probableQuestions: [
      { question: "¿Qué significan OUR, SHA y BEN?", answer: "Son las opciones de gastos de una transferencia: OUR, el ordenante paga todo; SHA, cada uno paga los de su banco; BEN, el beneficiario paga todo." },
      { question: "El exportador recibió menos de lo facturado. ¿Qué pasó?", answer: "Probablemente la transferencia salió con SHA o BEN y un intermediario descontó comisiones. Se evita exigiendo OUR en la pro-forma." },
      { question: "¿Qué es el MT103 y qué lo reemplazó?", answer: "El mensaje SWIFT de transferencia de cliente; con la migración a ISO 20022 su equivalente es el pacs.008. La coexistencia terminó el 22/11/2025." },
      { question: "¿Qué datos necesitás para hacer una transferencia internacional?", answer: "Nombre y dirección del beneficiario, cuenta o IBAN, BIC/SWIFT del banco, intermediario si aplica, moneda, monto, concepto y opción de gastos." },
      { question: "¿Qué es una letra de cambio?", answer: "Un título de crédito por el cual el librador ordena al librado pagar una suma a un beneficiario en una fecha, a la vista o a plazo." },
      { question: "¿Qué pasa en una cobranza D/A?", answer: "El banco entrega los documentos al importador cuando acepta una letra a plazo; el importador retira la mercadería y paga al vencimiento." },
      { question: "¿Hay controles de cambio en Uruguay?", answer: "No: hay libertad cambiaria. Sí hay controles de prevención de lavado, por eso los bancos piden factura, DUA o contrato." },
    ],
    sources: [SRC_SWIFT, SRC_BANKPULSE, SRC_URC, SRC_BCU,
      { title: "Uruguay XXI", url: "https://www.uruguayxxi.gub.uy" },
    ],
  },

  // ---------------------------------------------------------------- p04-s4
  {
    id: "p04-s4",
    moduleId: "p04",
    title: "Certificado de origen: régimen MERCOSUR 2024, COD y entidades emisoras",
    summary:
      "El certificado de origen es lo que permite que una mercadería pague menos arancel gracias a un acuerdo. Un error en él puede costarle al importador toda la preferencia, por eso se controla con lupa.",
    minutes: 16,
    sections: [
      {
        heading: "Qué acredita (y qué no)",
        blocks: [
          {
            type: "p",
            text: "El **certificado de origen** acredita **el país donde se produjo la mercadería** según las **reglas de origen** de un acuerdo o de la normativa del país importador. No acredita desde dónde se despachó ni desde dónde viajó. Normalmente lo emite una **entidad habilitada** a partir de una **declaración jurada del productor o del exportador**.",
          },
          {
            type: "table",
            headers: ["Tipo", "Para qué", "Ejemplos"],
            rows: [
              ["**Preferencial**", "Obtener la **rebaja o eliminación del arancel** que da un acuerdo. Cada acuerdo tiene su formulario y sus reglas.", "MERCOSUR (ACE 18), Chile (ACE 35), México (ACE 60), Bolivia (ACE 36), Perú (ACE 58), Colombia (ACE 72), Israel, SGP."],
              ["**No preferencial**", "Cuando el importador lo exige por otros motivos: estadística, antidumping, cuotas, embargos, licitaciones o cartas de crédito.", "No busca pagar menos arancel."],
            ],
          },
          {
            type: "eli5",
            text: "El certificado de origen es el documento de identidad de la mercadería: dice dónde nació. Si nació en un país amigo, le cobran menos para entrar, como el descuento de socio en el club.",
          },
        ],
      },
      {
        heading: "“AEC 18” o “ACE 18”: una aclaración necesaria",
        blocks: [
          {
            type: "p",
            text: "En el programa del curso aparece “AEC 18”. Casi con seguridad es una errata por **ACE 18**, y conviene tenerlo claro porque son dos cosas distintas:",
          },
          {
            type: "table",
            headers: ["Sigla", "Significa", "Qué es"],
            rows: [
              ["**ACE 18**", "**A**cuerdo de **C**omplementación **E**conómica N.º 18", "El acuerdo suscrito el 29/11/1991 por Argentina, Brasil, Paraguay y Uruguay en el marco de ALADI, que registra en ALADI el programa de liberación comercial del MERCOSUR. Por eso el certificado de origen MERCOSUR dice “ACE 18”."],
              ["**AEC**", "**A**rancel **E**xterno **C**omún", "El arancel que los países del MERCOSUR aplican a terceros países. **No existe un “AEC 18”.**"],
            ],
          },
          {
            type: "eli5",
            text: "El ACE 18 es el contrato de alquiler del MERCOSUR en la casa grande de ALADI. El AEC es el precio de la entrada que el MERCOSUR les cobra a los que vienen de afuera. Uno es un acuerdo; el otro, un arancel.",
          },
        ],
      },
      {
        heading: "Quién lo emite en Uruguay",
        blocks: [
          {
            type: "p",
            text: "Según el **Decreto 182/016**, art. 1, las entidades habilitadas para emitir certificados de origen son:",
          },
          {
            type: "list",
            items: [
              "**Cámara de Industrias del Uruguay (CIU)**.",
              "**Cámara Mercantil de Productos del País**.",
              "**Cámara Nacional de Comercio y Servicios del Uruguay**.",
              "**Unión de Exportadores del Uruguay**.",
              "**Dirección Nacional de Industrias (MIEM)**, especializada en el **sector automotor**.",
            ],
          },
          {
            type: "callout",
            tone: "warn",
            title: "El caso del MGAP",
            text: "El Decreto 182/016 también menciona al MGAP, pero el informe del MEF de 2025 lista solo las cinco entidades anteriores como emisoras. El rol actual del MGAP conviene confirmarlo en el MEF.",
          },
          {
            type: "p",
            text: "Todas emiten certificados **preferenciales** y **no preferenciales**. La **Asesoría de Política Comercial del MEF** administra los regímenes de origen y **controla a las entidades habilitadas**.",
          },
          {
            type: "callout",
            tone: "uy",
            title: "Los números de 2024",
            text: "Según el MEF, en 2024 se emitieron **63.824 certificados preferenciales**, que ampararon **USD 4.630 millones** de exportaciones (11 % más certificados que en 2023). El ACE 18 (MERCOSUR) concentró **40.332**, seguido de México (4.635), automotor con Brasil (4.386), Chile (3.856), automotor con Argentina (1.956), Israel (1.881) y Colombia (1.645).",
          },
        ],
      },
      {
        heading: "El Régimen de Origen MERCOSUR vigente desde el 18/07/2024",
        blocks: [
          {
            type: "p",
            text: "El MERCOSUR cambió su régimen de origen con las **Decisiones CMC 05/23 y 06/23**, que rigen desde el **18/07/2024** y se incorporaron a ALADI como el **Protocolo Adicional 218 al ACE 18**. Estos son los cambios que más se preguntan:",
          },
          {
            type: "table",
            headers: ["Tema", "Régimen anterior (Dec. CMC 01/09)", "Régimen vigente (Dec. CMC 05/23 y 06/23)"],
            rows: [
              ["Regla general", "Valor de contenido regional ≥ 60 % o salto de partida (4 dígitos)", "**Valor Máximo de Materiales No Originarios (VMNO)**, calculado como el CIF de los materiales no originarios sobre el FOB del producto"],
              ["Tope especial de Uruguay", "—", "**Hasta 50 % de VMNO hasta el 31/12/2032** (Dec. CMC 06/23)"],
              ["Requisitos específicos", "Anexo de excepciones aparte", "Un **único anexo (Apéndice II)** con el requisito de **cada ítem NCM**"],
              ["De minimis", "—", "Se considera cumplido el cambio de clasificación si los no originarios de la misma partida no superan el **10 % del FOB** (no aplica a los capítulos 50 a 63, textiles)"],
              ["**Plazo para emitir**", "Dentro de los 60 días de la factura", "Dentro de los **180 días corridos** desde la fecha de la factura comercial"],
              ["**Validez**", "180 días desde la emisión", "**12 meses** desde la emisión (se suspende en régimen suspensivo o zona franca, con un máximo de 5 años)"],
              ["Norma de origen en el certificado", "Artículo o literal del régimen", "Letra **A**, **B** o **C**"],
              ["Errores formales", "—", "No invalidan automáticamente el certificado: la aduana puede aceptarlo o pedir uno sustitutivo"],
              ["Sector automotor", "—", "**Excluido**: se rige por acuerdos bilaterales (ACE 2 con Brasil, ACE 57 con Argentina)"],
            ],
            caption: "Fuentes: DNA, Comunicado 60/2024; Dec. CMC 06/23; CDA.",
          },
          {
            type: "callout",
            tone: "warn",
            title: "El tope general de VMNO",
            text: "El tope general de VMNO se cita como **45 %** (equivalente a un contenido regional de alrededor del 55 %), pero las fuentes no coinciden del todo. Si te lo preguntan en un trabajo, confirmalo en el Apéndice II de la Decisión CMC 05/23.",
          },
          {
            type: "table",
            headers: ["Letra", "Significa"],
            rows: [
              ["**A**", "Totalmente obtenido."],
              ["**B**", "Elaborado exclusivamente con materiales originarios."],
              ["**C**", "Elaborado con materiales no originarios que cumplen el requisito específico del Apéndice II."],
            ],
          },
        ],
      },
      {
        heading: "El Certificado de Origen Digital (COD)",
        blocks: [
          {
            type: "p",
            text: "El **COD** se basa en la **Resolución 386 del Comité de Representantes de ALADI** (4/11/2011), que fija el procedimiento, las especificaciones técnicas y su **validez jurídica**. Se firma con **firma digital** y se transmite en formato **XML**: la entidad habilitada lo emite y firma y la aduana de destino lo recibe. Con Chile, México y Colombia el intercambio pasa por las **VUCE**.",
          },
          {
            type: "table",
            headers: ["Fecha", "Hito del COD en Uruguay"],
            rows: [
              ["9/4/2018", "Comienza el uso con Argentina y Brasil."],
              ["**1/2/2020**", "El COD pasa a ser la **única forma** para las exportaciones preferenciales uruguayas a Argentina y Brasil."],
              ["18/5/2020", "Paraguay."],
              ["20/9/2021", "Chile (optativo)."],
              ["2022", "México (obligatorio para lo que México exporta a Uruguay; optativo en sentido inverso)."],
              ["**1/4/2024**", "Obligatorio para las exportaciones preferenciales a Paraguay."],
              ["15/5/2024", "Bolivia (ACE 36)."],
              ["**3/3/2025**", "Colombia (ACE 72), según la RG DNA 04/2025. El papel sigue admitido: en el DUA el papel se declara con el código **COLO** y el digital con **COCO**."],
            ],
          },
          {
            type: "eli5",
            text: "El COD es como pasar de la cédula de cartón a la digital: el mismo documento, pero firmado electrónicamente y enviado directo a la aduana del otro país, sin papeles que se pierdan o se manchen.",
          },
        ],
      },
      {
        heading: "El formulario y cómo se pide",
        blocks: [
          {
            type: "p",
            text: "El formulario MERCOSUR clásico tiene casillas para el número del certificado, el productor o exportador, el importador, el consignatario, el puerto de embarque, el país de destino, el medio de transporte, la **factura comercial** (número y fecha), el número de orden, el **código NCM**, la denominación de la mercadería, el peso o cantidad, el **valor FOB en dólares**, la **norma de origen**, observaciones, la declaración del productor o exportador y la certificación de la entidad.",
          },
          { type: "doc", docId: "certificado-origen" },
          {
            type: "list",
            items: [
              "**Sin raspaduras, tachaduras ni enmiendas.**",
              "Todas las casillas completas, salvo observaciones y el consignatario cuando coincide con el importador.",
              "Exige **expedición directa** al país de destino; si hay tránsito por terceros países, tiene que ser bajo control aduanero.",
              "Admite la **facturación por un tercer operador** (de un país no parte), que se indica en observaciones.",
            ],
          },
          {
            type: "steps",
            items: [
              { title: "Registrar la empresa", text: "En la entidad: RUT, estatuto y registro de las firmas autorizadas. Hoy se usa firma electrónica o digital para el COD." },
              { title: "Presentar la declaración jurada de origen (DJO)", text: "La firma el productor final, antes del primer certificado del producto. Incluye el proceso productivo y el detalle de los insumos nacionales, regionales y de terceros países, con su NCM y valor CIF." },
              { title: "Cargar la solicitud por embarque", text: "Con los datos de la factura, la NCM, la cantidad, el valor, el destino y la norma de origen, y la factura adjunta." },
              { title: "Control y emisión", text: "La entidad controla la coincidencia con la DJO y la factura, emite, firma y cobra un arancel por certificado." },
              { title: "Envío y uso en destino", text: "El exportador lo envía (en el COD, en forma electrónica). En el MERCOSUR: emitido dentro de los 180 días de la factura y con 12 meses de validez. El despachante de destino lo declara en el DUA." },
            ],
          },
          {
            type: "example",
            title: "Un error en la NCM cuando la mercadería ya llegó",
            text: "Una importadora de Montevideo recibe vajilla desde Brasil con COD, pero la NCM del certificado no coincide con la de la factura. ¿Qué hacer? Primero, hablar con el exportador para que pida a la entidad emisora un certificado nuevo o una rectificación. Con el nuevo régimen MERCOSUR, un error formal no invalida automáticamente el origen: la aduana puede aceptarlo o pedir uno sustitutivo. Si la preferencia se pierde, la diferencia es grande: sin prueba de origen válida se paga el arancel extrazona y la tasa consular del 5 % en lugar del 3 %.",
          },
        ],
      },
    ],
    eli5: [
      {
        concept: "Certificado de origen",
        text: "Es el documento de identidad de la mercadería: dice dónde nació. Si nació en un país amigo, paga menos para entrar.",
      },
      {
        concept: "ACE 18 y AEC",
        text: "El ACE 18 es el contrato de alquiler del MERCOSUR en la casa de ALADI; el AEC es el precio de la entrada que se les cobra a los de afuera.",
      },
      {
        concept: "Reglas de origen (VMNO)",
        text: "Es como una receta de torta “casera”: puede tener algunos ingredientes comprados afuera, pero si pasan de cierto porcentaje, ya no es casera y no gana el premio.",
      },
      {
        concept: "COD",
        text: "Es la cédula digital de la mercadería: el mismo documento, firmado electrónicamente y enviado directo a la otra aduana.",
      },
    ],
    keyPoints: [
      "El certificado de origen acredita dónde se produjo la mercadería, no desde dónde se despachó; puede ser preferencial o no preferencial.",
      "“AEC 18” en el programa es una errata por ACE 18: el acuerdo ALADI que registra el programa de liberación del MERCOSUR; el AEC es el Arancel Externo Común.",
      "Lo emiten la CIU, la Cámara Mercantil, la Cámara Nacional de Comercio y Servicios, la Unión de Exportadores y la Dirección Nacional de Industrias (automotor), bajo control del MEF.",
      "Desde el 18/07/2024 rige el nuevo régimen de origen MERCOSUR: VMNO, Apéndice II por NCM, emisión dentro de 180 días de la factura y validez de 12 meses.",
      "Uruguay tiene un tope especial de VMNO del 50 % hasta el 31/12/2032; la norma de origen se indica con A, B o C.",
      "El COD es obligatorio con Argentina y Brasil desde el 1/2/2020 y con Paraguay desde el 1/4/2024; con Colombia desde 2025 conviven papel (COLO) y digital (COCO).",
      "El formulario no admite raspaduras ni enmiendas y exige expedición directa.",
    ],
    probableQuestions: [
      { question: "¿Qué es un certificado de origen?", answer: "El documento que acredita el país donde se produjo la mercadería según las reglas de origen de un acuerdo; el preferencial permite pagar menos arancel." },
      { question: "¿Quién emite certificados de origen en Uruguay?", answer: "Las entidades habilitadas por el Decreto 182/016: CIU, Cámara Mercantil, Cámara Nacional de Comercio y Servicios, Unión de Exportadores y la Dirección Nacional de Industrias (automotor). El MEF las controla." },
      { question: "¿Qué es el ACE 18? ¿Es lo mismo que el AEC?", answer: "El Acuerdo de Complementación Económica N.º 18 de ALADI, que registra el programa de liberación del MERCOSUR. No: el AEC es el Arancel Externo Común. “AEC 18” es una errata." },
      { question: "¿Cuál es la validez del certificado de origen MERCOSUR desde el 18/07/2024?", answer: "12 meses desde la emisión, y debe emitirse dentro de los 180 días de la factura comercial." },
      { question: "¿Qué significa la letra C en la norma de origen?", answer: "Que la mercadería se elaboró con materiales no originarios que cumplen el requisito específico del Apéndice II." },
      { question: "¿Desde cuándo el COD es obligatorio con Argentina y Brasil?", answer: "Desde el 1/2/2020." },
      { question: "¿Qué tope especial de VMNO tiene Uruguay?", answer: "Hasta 50 % hasta el 31/12/2032 (Dec. CMC 06/23)." },
      { question: "¿Qué hacés si el certificado tiene un error y la mercadería ya llegó?", answer: "Pedir al exportador un certificado nuevo o una rectificación a la entidad emisora; con el nuevo régimen un error formal no invalida automáticamente el origen y la aduana puede aceptarlo o pedir uno sustitutivo." },
    ],
    sources: [SRC_DEC182, SRC_MEF_INFORME, SRC_MEF_COD, SRC_MEF_DJO, SRC_COM60, SRC_RG04, SRC_CDA, SRC_ALADI_ACUERDOS],
  },
]
