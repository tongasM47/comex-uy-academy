import type { Subtopic } from '../types'

// Módulo 3: factura pro-forma, factura comercial, packing list, courier 2026 e introducción al DUA.
// Base: docs/research/01_incoterms_documentos.md (secciones 2 y 3) y
// docs/research/02_importacion_calculo_dua.md (secciones 1.2, 2.1 a 2.3). Packing list: 05 (sección 3.6).

const SRC_CAROU = {
  title: "IMPO: Código Aduanero de la R.O.U., Ley 19.276",
  url: "https://www.impo.com.uy/bases/codigo-aduanero/19276-2014",
}
const SRC_DEC333 = {
  title: "IMPO: Decreto 333/992 (Documento Único de Importación)",
  url: "https://www.impo.com.uy/bases/decretos/333-1992",
}
const SRC_DL10314 = {
  title: "IMPO: Decreto-Ley 10.314, art. 18 (factura consular)",
  url: "https://impo.com.uy/bases/decretos-ley/10314-1943/18",
}
const SRC_DUA_DIG = {
  title: "DNA: Procedimiento DUA digital, importación",
  url: "https://www.aduanas.gub.uy/innovaportal/file/10163/1/procedimiento_dua_digital_-_importacion.pdf",
}
const SRC_DUA_ANEXO = {
  title: "DNA: Anexo DUA digital (formas de despacho, documentos, canales)",
  url: "https://www.aduanas.gub.uy/innovaportal/file/9902/1/dua_digital__importacion_anexo.pdf",
}
const SRC_INSTRUCTIVO = {
  title: "DNA: Instructivo de llenado del DUA de importación",
  url: "https://www.aduanas.gub.uy/innovaportal/file/14492/1/instructivo--importacion.pdf",
}
const SRC_CAP7 = {
  title: "DNA: Capítulo 7, instructivo de operaciones de entrada",
  url: "https://www.aduanas.gub.uy/innovaportal/file/7996/1/operaciones_de_entrada_instructivo.pdf",
}
const SRC_BIZLATIN = {
  title: "Biz Latin Hub: regulaciones de importación y exportación en Uruguay",
  url: "https://www.bizlatinhub.com/es/regulaciones-importar-exportar-uruguay/",
}
const SRC_TRADEGOV = {
  title: "trade.gov: Uruguay, Import Requirements and Documentation",
  url: "https://www.trade.gov/country-commercial-guides/uruguay-import-requirements-and-documentation",
}
const SRC_TIENDANUBE = {
  title: "Tiendanube: qué es la factura proforma",
  url: "https://www.tiendanube.com/blog/factura-proforma/",
}
const SRC_SHOPIFY = {
  title: "Shopify: qué es una factura proforma",
  url: "https://www.shopify.com/es/blog/que-es-una-factura-proforma",
}
const SRC_DEC50 = {
  title: "IMPO: Decreto 50/026",
  url: "https://www.impo.com.uy/bases/decretos/50-2026",
}
const SRC_RG26 = {
  title: "DNA: Resolución General 26/2026",
  url: "https://www.aduanas.gub.uy/innovaportal/file/28724/1/rg-26-2026-exoneracion-iva-encomiendas-postales.pdf",
}
const SRC_FEDEX = {
  title: "FedEx: alerta regulatoria Uruguay (abril de 2026)",
  url: "https://www.fedex.com/content/dam/fedex/lac-latin-america/downloads/2026/UY_ES_2026_5_pdf_NA_Reg-Alert-28-April_cus.pdf",
}
const SRC_FEDEX_SHOP = {
  title: "FedEx Uruguay: compras en el exterior",
  url: "https://www.fedex.com/es-uy/customs-tools/shopping-from-abroad.html",
}
const SRC_ANDERSEN = {
  title: "Andersen Uruguay: nuevo régimen de envíos postales internacionales",
  url: "https://uy.andersen.com/documents/NUEVO%20RE%CC%81GIMEN%20DE%20ENVI%CC%81OS%20POSTALES%20INTERNACIONALES.pdf",
}
const SRC_MVDPORTAL1 = {
  title: "Montevideo Portal: decreto del nuevo régimen (16/03/2026)",
  url: "https://www.montevideo.com.uy/Noticias/Gobierno-emite-decreto-por-impuesto-Temu-que-cambios-introduce-la-nueva-legislacion-uc956136",
}
const SRC_MVDPORTAL2 = {
  title: "Montevideo Portal: exoneración solo para EE. UU. (23/04/2026)",
  url: "https://www.montevideo.com.uy/Noticias/Ya-entro-en-vigor-la-norma-sobre-franquicias-internacionales-pero-solo-para-EE-UU--uc959976",
}

export const p03Lessons: Subtopic[] = [
  // ---------------------------------------------------------------- p03-s1
  {
    id: "p03-s1",
    moduleId: "p03",
    title: "La factura pro-forma: los 22 elementos",
    summary:
      "La pro-forma es la cotización formal que abre toda operación. Con ella se piden permisos, se abre la carta de crédito y se estiman los tributos, así que una pro-forma incompleta frena todo lo que viene después.",
    minutes: 15,
    sections: [
      {
        heading: "Qué es una pro-forma (y qué no es)",
        blocks: [
          {
            type: "p",
            text: "La **factura pro-forma** es un **documento previo a la venta**: una cotización formal u oferta que el exportador le manda al importador antes de cerrar la operación. Tiene cara de factura, con precios, cantidades y totales, pero **no es un comprobante fiscal**: no registra una venta, no genera IVA ni crédito fiscal, y **no sirve para despachar una importación definitiva**.",
          },
          {
            type: "p",
            text: "Lo interesante es que, aunque no tiene efecto fiscal, sí puede tener efecto jurídico: cuando el importador la **firma o la acepta**, la pro-forma puede funcionar como **contrato de compraventa**, porque hay una oferta y una aceptación. Por eso conviene leerla con la misma atención que un contrato.",
          },
          {
            type: "eli5",
            text: "La pro-forma es el menú con precios que te dan antes de pedir. La factura comercial es el ticket que te dan después de comer. Con el menú no podés reclamar que ya pagaste, pero si lo firmaste, el mozo te puede decir “vos pediste esto”.",
          },
        ],
      },
      {
        heading: "Para qué se usa en la práctica",
        blocks: [
          {
            type: "table",
            headers: ["Uso", "Quién la usa", "Ejemplo uruguayo"],
            rows: [
              ["**Formalizar la oferta**", "Exportador e importador", "Precio, Incoterm, plazo de entrega y forma de pago quedan por escrito."],
              ["**Tramitar permisos previos**", "Importador, a través de la VUCE", "Un importador de cosméticos tramita el registro ante el MSP antes del embarque; uno de alimentos, la intervención del LATU o el MGAP."],
              ["**Abrir una carta de crédito o financiarse**", "Importador ante su banco", "El BROU o un banco privado abre la carta de crédito con los datos de la pro-forma, o la pide para un pago anticipado."],
              ["**Calcular el costo de importación**", "Despachante", "El despachante liquida tributos estimados para que el cliente sepa cuánto le va a costar todo."],
              ["**Casos especiales**", "Despachante", "Admisiones temporarias, muestras y licitaciones. En el DUA puede asociarse con el código **PROF**."],
            ],
          },
          {
            type: "callout",
            tone: "uy",
            title: "La pro-forma en la secuencia de importación",
            text: "En la secuencia de 13 pasos de una importación uruguaya, la pro-forma es el **paso 1**: con ella se piden cotizaciones de flete y seguro, se inician los permisos previos y, si hace falta, se abre la carta de crédito. Todo lo que pase después se apoya en lo que dice ese papel.",
          },
        ],
      },
      {
        heading: "Los 22 elementos de una pro-forma completa",
        blocks: [
          {
            type: "p",
            text: "El temario del curso habla de “los 22 pasos” (o elementos) de la pro-forma. No hay una lista oficial uruguaya pública que los enumere, así que la que sigue es una **lista didáctica** armada a partir de la práctica generalizada del comercio exterior. Lo importante no es memorizar el número exacto sino entender para qué sirve cada dato.",
          },
          {
            type: "table",
            headers: ["#", "Elemento", "Para qué sirve"],
            rows: [
              ["1", "Título “FACTURA PRO-FORMA” / “PROFORMA INVOICE”", "Que no se confunda con una factura comercial."],
              ["2", "Número y fecha de emisión", "Trazabilidad y referencia para la carta de crédito."],
              ["3", "Datos del vendedor: razón social, dirección, país, identificación fiscal, contacto", "Identificar a quien ofrece."],
              ["4", "Datos del comprador: razón social, dirección, país, identificación fiscal", "Identificar al importador, también para los permisos."],
              ["5", "Consignatario y *notify party*, si son distintos del comprador", "Para armar después los documentos de transporte."],
              ["6", "Descripción detallada de la mercadería (comercial y técnica: marca, modelo, material)", "Clasificación arancelaria y permisos."],
              ["7", "Posición arancelaria sugerida (SA/NCM)", "Estimar tributos e intervenciones de organismos."],
              ["8", "Cantidad y unidad de medida", "Base del precio."],
              ["9", "Precio unitario", "—"],
              ["10", "Precio total por ítem y total general", "—"],
              ["11", "Moneda (USD, EUR…)", "—"],
              ["12", "**Incoterm® 2020 + lugar convenido**", "Reparto de costos y riesgos."],
              ["13", "Forma y condiciones de pago (anticipado, cobranza, carta de crédito, plazo)", "—"],
              ["14", "Plazo de entrega o fecha estimada de embarque", "—"],
              ["15", "Puerto o lugar de embarque y de destino", "—"],
              ["16", "Medio de transporte", "—"],
              ["17", "País de origen de la mercadería", "Preferencias arancelarias y certificado de origen."],
              ["18", "Embalaje: tipo, cantidad de bultos, marcas", "—"],
              ["19", "Pesos y volumen estimados (bruto, neto, m³)", "Cotizar el flete."],
              ["20", "Validez de la oferta (por ejemplo, 30 días)", "Protege al exportador de variaciones de costos."],
              ["21", "Datos bancarios del beneficiario (banco, SWIFT, cuenta o IBAN)", "Pago."],
              ["22", "Condiciones adicionales y firma: documentos que se entregarán, garantía, seguro, firma y sello del vendedor y espacio para la aceptación del comprador", "Cierra la oferta."],
            ],
            caption: "Lista didáctica: no se encontró una lista oficial uruguaya de 22 elementos.",
          },
          { type: "doc", docId: "proforma" },
        ],
      },
      {
        heading: "Cómo leer los 22 elementos en bloques",
        blocks: [
          {
            type: "p",
            text: "Veintidós ítems sueltos son difíciles de recordar. Agrupalos en cinco bloques y vas a ver que tienen lógica:",
          },
          {
            type: "steps",
            items: [
              { title: "Identificación (1 a 5)", text: "Qué documento es, cuándo se emitió y quiénes son las partes: vendedor, comprador, consignatario y a quién notificar." },
              { title: "Mercadería (6 a 8, 17 a 19)", text: "Qué se vende, cómo se clasifica, cuánto, de dónde es originaria, cómo va embalada y cuánto pesa y ocupa." },
              { title: "Precio (9 a 11)", text: "Precio unitario, totales y moneda." },
              { title: "Condiciones (12 a 16, 20)", text: "Incoterm con lugar, pago, plazo de embarque, puertos, medio de transporte y validez de la oferta." },
              { title: "Cierre (21 y 22)", text: "Dónde se paga, qué documentos se van a entregar, firma del vendedor y lugar para que el comprador acepte." },
            ],
          },
          {
            type: "eli5",
            text: "Una pro-forma es como un presupuesto de un carpintero para hacerte un placard: quién sos vos y quién es él, qué mueble, de qué madera y medidas, cuánto sale, cuándo te lo entrega, hasta cuándo vale el precio y dónde le depositás la seña.",
          },
        ],
      },
      {
        heading: "Errores que te van a tocar revisar",
        blocks: [
          {
            type: "table",
            headers: ["Error en la pro-forma", "Qué problema genera"],
            rows: [
              ["Incoterm sin lugar o sin versión (“FOB”, a secas)", "No se sabe dónde se entrega ni qué edición rige; discusiones con el proveedor y un valor en aduana mal armado."],
              ["Descripción vaga (“repuestos”, “accesorios”)", "El despachante no puede clasificar en la NCM ni saber qué permisos hacen falta."],
              ["País de origen ausente o equivocado", "No se puede pedir el certificado de origen correcto ni estimar si hay preferencia."],
              ["Sin validez de la oferta", "El vendedor queda atado a un precio que quizás ya no le sirve, o el comprador no sabe hasta cuándo puede aceptar."],
              ["Datos bancarios incompletos", "El pago se demora o rebota."],
              ["Pesos y medidas faltantes", "No se puede cotizar el flete ni elegir contenedor."],
              ["Usar la pro-forma para despachar", "No corresponde: para el DUA de una importación definitiva se necesita la factura comercial."],
            ],
          },
          {
            type: "callout",
            tone: "tip",
            title: "Un consejo de oficina",
            text: "Cuando el cliente te mande la pro-forma, revisala contra esta lista **antes** de que pague o abra la carta de crédito. Corregir una pro-forma cuesta un mail; corregir una carta de crédito abierta cuesta una enmienda y comisiones bancarias.",
          },
          {
            type: "example",
            title: "Pro-forma de vasos desde China",
            text: "Una importadora de Montevideo recibe una pro-forma de Ningbo por 24.000 vasos de vidrio, US$ 20.000, “FOB”. Faltan el puerto, la versión del Incoterm, la validez y el país de origen. La respuesta correcta es pedir: “FOB Ningbo, China, Incoterms® 2020”, país de origen China, validez de 30 días y el peso bruto estimado para cotizar el flete.",
          },
        ],
      },
    ],
    eli5: [
      {
        concept: "Factura pro-forma",
        text: "Es el menú con precios antes de pedir. Te dice qué hay y cuánto sale, pero todavía no compraste nada.",
      },
      {
        concept: "Pro-forma aceptada",
        text: "Es como un presupuesto del carpintero que firmaste: ya no es solo información, es un compromiso de los dos.",
      },
      {
        concept: "Validez de la oferta",
        text: "Es como el cartel “precio válido hasta el domingo” en la feria. Después del domingo, el feriante puede cambiar el precio.",
      },
      {
        concept: "Notify party",
        text: "Es la persona que el cartero tiene que avisar cuando llega el paquete, aunque el paquete no sea para ella.",
      },
    ],
    keyPoints: [
      "La pro-forma es una oferta o cotización previa a la venta: no es comprobante fiscal ni sirve para despachar una importación definitiva.",
      "Si el comprador la firma o acepta, puede funcionar como contrato de compraventa.",
      "Sirve para formalizar la oferta, tramitar permisos previos en la VUCE, abrir una carta de crédito y estimar los tributos.",
      "La lista de 22 elementos es didáctica: identificación, mercadería, precio, condiciones y cierre.",
      "Los elementos críticos son la descripción, la NCM sugerida, el Incoterm con lugar, el país de origen, el pago y la validez.",
      "En el DUA la pro-forma puede asociarse con el código PROF.",
    ],
    probableQuestions: [
      { question: "¿Qué es una factura pro-forma?", answer: "Una cotización formal u oferta que el exportador envía antes de cerrar la venta. No tiene efecto fiscal y no sirve para despachar una importación definitiva." },
      { question: "¿Para qué se usa?", answer: "Para formalizar la oferta, tramitar permisos previos, abrir una carta de crédito o financiarse y que el despachante estime los tributos." },
      { question: "¿Puede una pro-forma ser un contrato?", answer: "Sí: si el importador la firma o la acepta, hay oferta y aceptación, y puede funcionar como contrato de compraventa." },
      { question: "Nombrá cinco elementos imprescindibles de una pro-forma.", answer: "Datos de vendedor y comprador, descripción detallada de la mercadería, precio y moneda, Incoterm con lugar, forma de pago, país de origen y validez de la oferta." },
      { question: "¿Por qué la pro-forma debe indicar el país de origen?", answer: "Porque define si se puede pedir una preferencia arancelaria y qué certificado de origen corresponde." },
      { question: "¿Para qué sirve indicar la validez de la oferta?", answer: "Protege al exportador de variaciones de costos y le dice al comprador hasta cuándo puede aceptar ese precio." },
      { question: "¿Con qué código se asocia la pro-forma en el DUA?", answer: "Con el código PROF." },
    ],
    sources: [SRC_TIENDANUBE, SRC_SHOPIFY, SRC_BIZLATIN, SRC_TRADEGOV, SRC_DUA_DIG, SRC_DUA_ANEXO],
  },

  // ---------------------------------------------------------------- p03-s2
  {
    id: "p03-s2",
    moduleId: "p03",
    title: "La factura comercial y el packing list",
    summary:
      "La factura comercial prueba la venta y el precio, que es la base del valor en aduana; el packing list dice qué hay en cada bulto. Son los dos papeles que más vas a revisar en una oficina de comex.",
    minutes: 14,
    sections: [
      {
        heading: "La factura comercial según el Código Aduanero",
        blocks: [
          {
            type: "p",
            text: "El **Código Aduanero de la República Oriental del Uruguay** (CAROU, Ley 19.276), en su **art. 2**, define la factura comercial como el documento **emitido por el exportador** que detalla las mercaderías de cada embarque **por precio y nombre comercial**. Fijate en dos cosas: la emite el **exportador** (no el importador ni el despachante) y detalla **cada embarque**.",
          },
          {
            type: "list",
            items: [
              "**Prueba la compraventa y el precio de transacción**, que es la base del valor en aduana según el primer método de valoración de la OMC.",
              "**Sostiene la clasificación**, porque describe la mercadería con su nombre comercial, marca y modelo.",
              "**Sostiene el origen** y el **cobro**: es uno de los documentos que viajan en una cobranza o una carta de crédito.",
            ],
          },
          {
            type: "eli5",
            text: "La factura comercial es el ticket del súper: dice qué compraste, cuántos, a cuánto y quién te lo vendió. Si querés devolver algo o reclamar, es lo primero que te piden.",
          },
        ],
      },
      {
        heading: "Qué tiene que tener",
        blocks: [
          {
            type: "p",
            text: "El decreto que reglamenta el DUA (Decreto 333/992) no enumera campos, y no hay una resolución de la DNA vigente con una lista cerrada. La práctica y las guías coinciden en este contenido mínimo:",
          },
          {
            type: "table",
            headers: ["Dato", "Por qué importa"],
            rows: [
              ["Número y fecha", "Se cruza con el B/L, el certificado de origen y el DUA."],
              ["Nombre y domicilio del vendedor y del comprador", "Identifica a las partes de la compraventa."],
              ["Descripción exacta (nombre comercial, marca, modelo)", "Clasificación en la NCM y control del Vista."],
              ["Cantidad, unidad, precio unitario y total", "Valor de transacción."],
              ["Moneda", "Conversión y liquidación de tributos."],
              ["**Incoterm**", "Define qué se suma o resta para llegar al valor CIF."],
              ["**País de origen**", "Preferencias arancelarias y certificado de origen."],
              ["Forma de pago", "Coherencia con el banco y con el valor."],
              ["Pesos y bultos", "Coherencia con el manifiesto y el packing list."],
              ["Firma del exportador", "Autenticidad del documento."],
            ],
          },
          {
            type: "callout",
            tone: "uy",
            title: "Un antecedente que sigue vivo",
            text: "El viejo **Decreto-Ley 10.314** (1943), art. 18, exigía para la antigua “factura consular” datos muy parecidos, entre ellos el valor por mercadería **con el flete y los gastos por separado**, y **prohibía agrupar valores de mercaderías distintas** aunque compartieran partida. Esa lógica sigue en la práctica: **un ítem por mercadería y el flete discriminado**.",
          },
          { type: "doc", docId: "factura-comercial" },
        ],
      },
      {
        heading: "Original, firma, idioma y DUA digital",
        blocks: [
          {
            type: "p",
            text: "Con el **DUA digital**, el despachante **digitaliza y transmite** la documentación por el sistema **LUCIA** y guarda los originales. La factura va **firmada por el exportador**. El idioma habitual es español, inglés o portugués; si está en otro idioma, puede exigirse traducción.",
          },
          {
            type: "callout",
            tone: "warn",
            title: "Detalles para confirmar",
            text: "El número de copias que se exige, si la firma tiene que ser manuscrita y cuándo se pide traducción son puntos que la investigación no pudo confirmar en una norma vigente. Confirmalos con el despachante o en el procedimiento “DUA digital, importación” de la DNA antes de darlos por seguros.",
          },
          {
            type: "p",
            text: "En LUCIA la factura se asocia al DUA con distintos códigos según el nivel: **FACC** a nivel cabezal (también se usa para flete, gastos y certificado de seguro), **FACI** por ítem y **FACN** para una factura no parcializable. Los datos de la factura, incluido el **Incoterm**, se declaran en el segmento de facturas del DUA.",
          },
        ],
      },
      {
        heading: "Pro-forma y factura comercial, lado a lado",
        blocks: [
          {
            type: "table",
            headers: ["", "Pro-forma", "Factura comercial"],
            rows: [
              ["Momento", "Antes de la venta (oferta o cotización)", "Al concretar la venta o el embarque"],
              ["Naturaleza", "Oferta o contrato preliminar", "Comprobante de la compraventa"],
              ["Efecto fiscal o contable", "Ninguno", "Sí, en el país del exportador (en Uruguay, e-factura de exportación ante la DGI)"],
              ["¿Sirve para despachar?", "No, salvo casos especiales como muestras o admisión temporaria", "**Sí: es documento obligatorio del DUA**"],
              ["Validez", "Tiene plazo de validez de la oferta", "No “vence”"],
              ["Datos", "Pueden ser estimados (peso, fecha de embarque)", "Definitivos; deben coincidir con el B/L, el packing list y el certificado de origen"],
            ],
          },
          {
            type: "eli5",
            text: "La pro-forma es el presupuesto del mecánico; la factura comercial es la boleta que te da cuando te devuelve el auto arreglado. El presupuesto puede decir “más o menos”; la boleta dice exactamente qué se hizo y cuánto costó.",
          },
        ],
      },
      {
        heading: "El packing list (lista de empaque)",
        blocks: [
          {
            type: "p",
            text: "El **packing list** lo emite el **vendedor** y detalla, **bulto por bulto**, qué hay adentro: cantidad, peso bruto y neto, medidas y marcas. La factura dice cuánto vale lo que se vendió; el packing list dice cómo está repartido físicamente en cajas, pallets o contenedores.",
          },
          {
            type: "table",
            headers: ["Quién lo usa", "Para qué"],
            rows: [
              ["El Vista de la DNA (canal rojo)", "Ubicar rápido qué bulto abrir y verificar que el contenido coincide con lo declarado."],
              ["El forwarder", "Cubicar la carga y cotizar el flete."],
              ["El depósito en Montevideo (LCL)", "Desconsolidar: separar cada lote y controlar que llegaron todos los bultos."],
              ["El importador", "Recibir la mercadería y controlar faltantes o roturas."],
            ],
          },
          { type: "doc", docId: "packing-list" },
          {
            type: "example",
            title: "Cuando los números no cierran",
            text: "La factura dice 850 cajas y 12.500 kg brutos. El packing list suma 848 cajas y el B/L dice 850. ¿Qué hacés? Antes de transmitir el DUA, le pedís al proveedor que aclare. Si en la verificación aparecen 848 cajas, el Vista va a pedir explicaciones. El CAROU admite una tolerancia del 5 % entre lo manifestado y lo arribado, y las diferencias se justifican en 8 días hábiles, pero lo mejor es que los papeles cuenten la misma historia desde el principio.",
          },
          {
            type: "eli5",
            text: "El packing list es la etiqueta de cada caja de la mudanza: “caja 3, cocina, platos, 12 kilos”. Si alguien quiere revisar los platos, no tiene que abrir las 40 cajas.",
          },
        ],
      },
      {
        heading: "El control cruzado: tu tarea diaria",
        blocks: [
          {
            type: "steps",
            items: [
              { title: "Número de factura", text: "El mismo en la factura, el certificado de origen y, cuando corresponde, el packing list." },
              { title: "Descripción", text: "Coherente entre factura, packing list y B/L. En el B/L puede ser más general, pero no contradictoria." },
              { title: "Cantidades y bultos", text: "Factura, packing list y documento de transporte tienen que coincidir." },
              { title: "Pesos", text: "Bruto y neto iguales en packing list, B/L y DUA." },
              { title: "Incoterm", text: "El mismo en pro-forma, factura y coherente con el flete del B/L (prepaid o collect)." },
              { title: "Origen", text: "El país de origen de la factura tiene que coincidir con el certificado de origen." },
            ],
          },
          {
            type: "callout",
            tone: "tip",
            title: "Lo que se dice en una entrevista",
            text: "Si te preguntan “¿qué controlás en una factura comercial?”, la buena respuesta tiene dos partes: los datos que tiene que tener (partes, descripción, cantidades, precios, moneda, Incoterm con lugar, origen, pago, pesos, firma) y que **coincida con el B/L, el packing list y el certificado de origen**.",
          },
        ],
      },
    ],
    eli5: [
      {
        concept: "Factura comercial",
        text: "Es el ticket del súper: qué compraste, cuántos, a cuánto y quién te lo vendió.",
      },
      {
        concept: "Packing list",
        text: "Es la etiqueta de cada caja de la mudanza: qué hay adentro y cuánto pesa, para no tener que abrir todas.",
      },
      {
        concept: "Control cruzado",
        text: "Es como el juego de las siete diferencias: tenés tres dibujos (factura, packing list, B/L) y tu trabajo es encontrar si algo no coincide antes que la Aduana.",
      },
      {
        concept: "Flete discriminado",
        text: "Es como pedir la cuenta del restaurante con la propina aparte: así se sabe cuánto fue la comida y cuánto el servicio.",
      },
    ],
    keyPoints: [
      "El CAROU (art. 2) define la factura comercial como el documento emitido por el exportador que detalla las mercaderías de cada embarque por precio y nombre comercial.",
      "La factura prueba el precio de transacción, base del valor en aduana, y es documento obligatorio del DUA.",
      "Contenido mínimo: partes, descripción exacta, cantidades, precios, moneda, Incoterm, país de origen, pago, pesos y bultos, firma.",
      "En la práctica se factura un ítem por mercadería y el flete discriminado.",
      "En LUCIA la factura se asocia como FACC, FACI o FACN.",
      "El packing list detalla bulto por bulto contenido, pesos, medidas y marcas; sirve para la verificación, el cubicaje y la desconsolidación.",
      "Factura, packing list, documento de transporte y certificado de origen tienen que coincidir entre sí.",
    ],
    probableQuestions: [
      { question: "Según el Código Aduanero, ¿quién emite la factura comercial?", answer: "El exportador (CAROU, art. 2)." },
      { question: "¿Por qué la factura comercial es tan importante para la aduana?", answer: "Porque prueba el precio de transacción, que es la base del valor en aduana, y sostiene la clasificación y el origen." },
      { question: "¿Qué controlás en una factura comercial?", answer: "Que tenga partes, número y fecha, descripción exacta, cantidad, precios, moneda, Incoterm con lugar, país de origen, pago, pesos, bultos y firma, y que coincida con el B/L, el packing list y el certificado de origen." },
      { question: "Diferencia entre pro-forma y factura comercial.", answer: "La pro-forma es una oferta previa sin efecto fiscal y no sirve para despachar; la factura comercial documenta la venta, tiene efecto fiscal en origen y es obligatoria para el DUA." },
      { question: "¿Qué es el packing list y quién lo emite?", answer: "La lista de empaque que emite el vendedor, con el detalle por bulto de contenido, pesos, medidas y marcas." },
      { question: "¿Para qué sirve el packing list en un canal rojo?", answer: "Para que el Vista ubique qué bultos abrir y verifique que el contenido coincide con lo declarado." },
      { question: "¿Qué códigos usa LUCIA para asociar la factura al DUA?", answer: "FACC (cabezal), FACI (por ítem) y FACN (no parcializable)." },
    ],
    sources: [SRC_CAROU, SRC_DEC333, SRC_DL10314, SRC_DUA_DIG, SRC_DUA_ANEXO, SRC_INSTRUCTIVO, SRC_BIZLATIN, SRC_TRADEGOV],
  },

  // ---------------------------------------------------------------- p03-s3
  {
    id: "p03-s3",
    moduleId: "p03",
    title: "Envíos courier y el régimen 2026 (Ley 20.446, Decreto 50/026)",
    summary:
      "En 2026 cambió por completo el régimen de compras por internet y envíos courier: hay una Prestación Única del 60 % y una franquicia anual de USD 800. Es tema de conversación en cualquier oficina y una pregunta segura en las entrevistas de couriers.",
    minutes: 15,
    sections: [
      {
        heading: "El cambio grande de 2026",
        blocks: [
          {
            type: "p",
            text: "Hasta 2026 las compras por internet entraban por un régimen de franquicias reglamentado por el **Decreto 356/014**. La **Ley 20.446** (Presupuesto Nacional, 16/12/2025), en sus **arts. 627 a 635**, creó un nuevo marco para los envíos postales internacionales, que incluye a los courier o “envíos expresos”. Lo reglamentó el **Decreto 50/026**, del 12/03/2026 (publicado el 19/03/2026), que **derogó el Decreto 356/014**.",
          },
          {
            type: "table",
            headers: ["Norma", "Qué hace"],
            rows: [
              ["Ley 20.446, arts. 627 a 635", "Marco legal del nuevo régimen de envíos postales internacionales."],
              ["Decreto 50/026", "Reglamenta la ley; deroga el Decreto 356/014."],
              ["Resolución General DNA 09/2026", "Procedimiento operativo: registro de usuarios, países con acuerdo, etc."],
              ["Resolución General DNA 26/2026", "Del 13/08/2026, vigente desde el **5/10/2026**: crea el registro de **empresas vendedoras extranjeras** para la exoneración de IVA y posterga un numeral de la RG 09/2026 hasta el **3/11/2026**."],
            ],
          },
          {
            type: "steps",
            items: [
              { title: "Marzo de 2026", text: "Rige la **Prestación Única** desde la publicación del decreto." },
              { title: "Hasta el 30/4/2026", text: "Sigue vigente el viejo Decreto 356/014 para la franquicia." },
              { title: "Desde el 1/5/2026", text: "Rige la **nueva franquicia anual**. Para los topes de 2026 se suman los envíos hechos bajo los dos regímenes." },
            ],
          },
          {
            type: "callout",
            tone: "info",
            title: "Para contexto: el régimen anterior",
            text: "Con el Decreto 356/014 la franquicia era **por envío**: USD 200 en envíos expresos (courier) y USD 50 en envíos postales comunes, según el resumen de FedEx, con hasta 3 envíos por año por persona, 20 kg como máximo y uso personal.",
          },
        ],
      },
      {
        heading: "Prestación Única: el tributo único del 60 %",
        blocks: [
          {
            type: "table",
            headers: ["Aspecto", "Regla"],
            rows: [
              ["Quiénes", "**Personas físicas y jurídicas**, con o sin fines comerciales."],
              ["Tope por envío", "Hasta **USD 800** de valor y hasta **20 kg**."],
              ["Tributo", "**60 %** sobre el valor de la factura o el valor declarado. **Sustituye** aranceles e impuestos internos de la importación definitiva."],
              ["Mínimo", "**USD 20 por envío**."],
              ["Límite anual", "Sin límite anual de cantidad, según el análisis de Andersen."],
              ["Excluidos", "Mercaderías gravadas por **IMESI** y las que requieren autorización previa de un organismo si no la tienen."],
            ],
            caption: "Fuentes: Decreto 50/026, Andersen Uruguay y FedEx.",
          },
          {
            type: "example",
            title: "Dos cuentas rápidas",
            text: "Una empresa recibe por courier un repuesto de USD 150. Prestación Única: 150 × 60 % = **USD 90**. Otra persona recibe un accesorio de USD 25: 25 × 60 % = USD 15, pero como el mínimo es USD 20 por envío, paga **USD 20**.",
          },
          {
            type: "eli5",
            text: "La Prestación Única es como una entrada fija al cine: no importa qué película veas, pagás un porcentaje fijo y listo, sin sacar cuentas de cada impuesto por separado. Pero si la entrada sale muy barata, igual hay un mínimo.",
          },
        ],
      },
      {
        heading: "La franquicia anual (desde el 1/5/2026)",
        blocks: [
          {
            type: "table",
            headers: ["Aspecto", "Regla"],
            rows: [
              ["Beneficiario", "**Solo personas físicas**, mayores de 18 años, con **cédula de identidad uruguaya**. Las empresas quedan excluidas."],
              ["Tope", "**USD 800 acumulados por año civil**. Según Andersen, el valor computable es el total de la operación, flete incluido."],
              ["Cantidad", "**Máximo 3 envíos por año civil**, sin importar el monto de cada uno."],
              ["Uso", "Personal, sin fines comerciales."],
              ["Aranceles", "Exonerados."],
              ["IVA", "**Se paga IVA**, con un mínimo de USD 20 por envío según FedEx, **salvo** envíos desde países con acuerdos comerciales que tengan disposiciones sobre envíos postales. Según la DNA, hoy el único caso es **EE. UU.** (TIFA de 2008)."],
              ["Fuera del tope", "**Libros** y **medicamentos de uso personal** (estos con autorización del MSP) no consumen los USD 800."],
              ["Registro", "Registro único ante la DNA y verificación de identidad digital."],
              ["Incumplimiento", "El envío pierde la franquicia, pasa a Prestación Única y puede aplicarse una multa (art. 632 de la ley)."],
            ],
          },
          {
            type: "callout",
            tone: "uy",
            title: "La exoneración de IVA para EE. UU.",
            text: "El país se determina por la **residencia fiscal del emisor de la factura**, no por desde dónde se despacha el paquete. Además, el vendedor o la plataforma tiene que estar **registrado ante la DNA** (RG 26/2026). También se exoneran los **obsequios familiares** no comerciales, que igual cuentan para los topes.",
          },
          {
            type: "callout",
            tone: "warn",
            title: "Un punto a confirmar",
            text: "El pago tiene que hacerse con tarjeta o dinero electrónico **a nombre del comprador, que debe ser también el destinatario**. El decreto habla de un medio de pago “internacional” y FedEx dice “emitida en Uruguay”. Hasta que se aclare, confirmalo con el courier o la DNA.",
          },
          {
            type: "eli5",
            text: "La franquicia es tu cupón anual de cumpleaños: lo podés usar tres veces al año, hasta llenar USD 800, y es solo para vos, no para revender. Si lo usás para otro o te pasás, el paquete paga como cualquiera.",
          },
        ],
      },
      {
        heading: "Reglas comunes y cuándo hace falta despachante",
        blocks: [
          {
            type: "list",
            items: [
              "**Valor:** el total de la factura original, o la declaración de valor si no se exige factura. Se convierte a dólares con el **arbitraje del BCU del día hábil anterior** al despacho.",
              "**No se requiere despachante** para estos regímenes (art. 17 del decreto). El CAROU (art. 15) ya preveía excepciones para envíos postales no comerciales y envíos expresos de bajo valor.",
              "**Operadores postales y courier:** liquidan, declaran y **pagan los tributos a la DNA antes de entregar** el envío, y registran por cada envío fecha, titular, descripción, valor, origen, peso y datos de pago, con control en tiempo real de la DNA.",
              "**Abandono no infraccional:** si no se pagan los tributos dentro de **30 días** del ingreso o si no se retira el envío en **90 días**.",
              "**Mercadería sin autorización:** puede devolverse al origen a costo del interesado dentro de **30 días**.",
              "**Exportaciones por envío postal** de hasta **USD 200**: sin tributos; el operador las registra antes de la salida.",
            ],
          },
          {
            type: "table",
            headers: ["Situación", "Régimen"],
            rows: [
              ["Persona física, registrada, uso personal, dentro de 3 envíos y USD 800 en el año", "Franquicia: sin arancel, con IVA (salvo vendedor de EE. UU. registrado)."],
              ["Empresa, o persona que no cumple la franquicia, envío de hasta USD 800 y 20 kg", "Prestación Única: 60 %, mínimo USD 20."],
              ["Envío de más de USD 800 o más de 20 kg", "**Importación formal** con despachante y DUA."],
              ["Empresa que quiere descontar el IVA o usar un certificado de origen", "Despacho formal opcional (en FedEx, la guía se marca en origen como *Broker Select Option*, BSO) y la carga va a un depósito aduanero."],
            ],
          },
        ],
      },
      {
        heading: "Documentos del courier",
        blocks: [
          {
            type: "table",
            headers: ["Documento", "Qué tiene que tener"],
            rows: [
              ["**Guía aérea courier (HAWB courier)**", "La emite la empresa courier. Incluye el documento del destinatario (RUT, CI o pasaporte) para la Prestación Única, la descripción, el valor declarado, el peso, la cantidad de piezas, el origen y el destino."],
              ["**Factura comercial** del vendedor", "O una declaración de valor si no hubo compra. Debe mostrar la residencia fiscal del vendedor si se pide la exoneración de IVA."],
              ["**Manifiesto courier**", "El courier lo transmite a la DNA por LUCIA con los datos de cada envío."],
              ["**Comprobante de pago**", "Con tarjeta a nombre del destinatario, para la franquicia."],
              ["**Habilitaciones**", "MSP, MGAP, URSEC, etc., cuando la mercadería lo requiere."],
            ],
          },
          {
            type: "p",
            text: "Las empresas courier son operadores postales en sentido amplio: el **CAROU (art. 38)** define al operador postal como quien presta en nombre propio la admisión, el tratamiento, el transporte y la distribución de correspondencia y encomiendas, **incluidos los envíos urgentes de entrega expresa**. En Uruguay operan, entre otros, DHL, FedEx, UPS, el Correo Uruguayo (EMS) y empresas de casilla en Miami.",
          },
          {
            type: "example",
            title: "La consulta típica de un cliente",
            text: "“Compré algo de USD 500 por internet, ¿cuánto pago?”. Si es persona física con cédula, está registrado en la DNA, pagó con su tarjeta y no usó sus tres envíos ni sus USD 800 del año, va por franquicia: no paga arancel, pero sí IVA, salvo que el vendedor facture desde EE. UU. y esté registrado. Si no cumple, va por Prestación Única: 500 × 60 % = **USD 300**.",
          },
        ],
      },
    ],
    eli5: [
      {
        concept: "Prestación Única",
        text: "Es una entrada fija al cine: pagás un porcentaje fijo del precio y listo, sin sumar cada impuesto por separado. Hay un precio mínimo de entrada.",
      },
      {
        concept: "Franquicia anual",
        text: "Es tu cupón anual de cumpleaños: tres usos por año, hasta USD 800, y solo para vos.",
      },
      {
        concept: "Residencia fiscal del vendedor",
        text: "No importa desde qué depósito salga el paquete: lo que cuenta es dónde vive, para los impuestos, la empresa que te hizo la factura. Es como el documento del vendedor, no la dirección del camión.",
      },
      {
        concept: "Abandono no infraccional",
        text: "Si dejás tu paquete en el correo y no lo pagás ni lo retirás, después de un tiempo se considera que no lo querés más, como la ropa olvidada en la tintorería.",
      },
    ],
    keyPoints: [
      "La Ley 20.446 (arts. 627 a 635) y el Decreto 50/026 crearon el régimen 2026 y derogaron el Decreto 356/014.",
      "Prestación Única: personas físicas y jurídicas, hasta USD 800 y 20 kg por envío, 60 % del valor con mínimo de USD 20; sustituye aranceles e impuestos internos.",
      "Franquicia (desde el 1/5/2026): solo personas físicas con cédula uruguaya, USD 800 por año y máximo 3 envíos; sin arancel pero con IVA, salvo vendedores de EE. UU. registrados.",
      "La exoneración de IVA depende de la residencia fiscal del emisor de la factura y del registro del vendedor ante la DNA (RG 26/2026).",
      "Estos regímenes no requieren despachante; el courier liquida y paga a la DNA antes de entregar.",
      "Más de USD 800 o más de 20 kg: importación formal con despachante y DUA.",
      "Los valores se convierten con el arbitraje del BCU del día hábil anterior al despacho.",
    ],
    probableQuestions: [
      { question: "¿Qué normas regulan el régimen courier de 2026?", answer: "La Ley 20.446 (arts. 627 a 635), reglamentada por el Decreto 50/026, que derogó el Decreto 356/014. La DNA lo complementó con las RG 09/2026 y 26/2026." },
      { question: "¿Cuánto es la Prestación Única?", answer: "El 60 % del valor de la factura o declarado, con un mínimo de USD 20 por envío, para envíos de hasta USD 800 y 20 kg." },
      { question: "¿Quién puede usar la franquicia anual?", answer: "Personas físicas mayores de 18 años con cédula uruguaya, registradas ante la DNA. Las empresas quedan excluidas." },
      { question: "¿Cuál es el tope de la franquicia?", answer: "USD 800 acumulados por año civil, en un máximo de 3 envíos." },
      { question: "¿La franquicia paga IVA?", answer: "Sí, salvo envíos de vendedores con residencia fiscal en EE. UU. registrados ante la DNA, que hoy es el único país con acuerdo aplicable." },
      { question: "Un envío courier de USD 1.200, ¿cómo entra?", answer: "Por importación formal con despachante y DUA, porque supera el tope de USD 800." },
      { question: "¿Se necesita despachante para la Prestación Única?", answer: "No: el courier liquida, declara y paga los tributos a la DNA antes de entregar." },
      { question: "¿Qué bienes no consumen el tope de la franquicia?", answer: "Los libros y los medicamentos de uso personal, estos con autorización del MSP." },
    ],
    sources: [SRC_DEC50, SRC_RG26, SRC_FEDEX, SRC_FEDEX_SHOP, SRC_ANDERSEN, SRC_MVDPORTAL1, SRC_MVDPORTAL2, SRC_CAROU],
  },

  // ---------------------------------------------------------------- p03-s4
  {
    id: "p03-s4",
    moduleId: "p03",
    title: "Introducción al DUA y a los demás documentos de importación",
    summary:
      "El DUA es la declaración aduanera que une todos los papeles de la operación. Antes de llenarlo casilla por casilla (módulo 5), conviene entender qué es, qué documentos lo acompañan y cómo se arma la carpeta.",
    minutes: 13,
    sections: [
      {
        heading: "Qué es el DUA",
        blocks: [
          {
            type: "p",
            text: "El **DUA** (Documento Único Aduanero) es la declaración aduanera única que se usa para **todos los regímenes**: importación, exportación, tránsito y admisión temporaria. Se creó con el **Decreto 333/992** y hoy es **100 % digital**: el despachante lo transmite como un mensaje electrónico por una red VAN al sistema **LUCIA** de la DNA.",
          },
          {
            type: "list",
            items: [
              "Incluye la **liquidación de todos los tributos**, también los internos de la DGI (IVA, IMESI, anticipos), que se pagan **en un solo acto**.",
              "Va acompañado de la **DVA** (declaración del valor en aduana, formulario DV-1).",
              "Los documentos se presentan como **DAE**: imágenes firmadas digitalmente y alojadas en un **RADE**, el archivo digital homologado por la DNA, que las conserva 10 años.",
              "Los certificados emitidos por la **VUCE** viajan electrónicamente y no hace falta adjuntar imagen.",
            ],
          },
          {
            type: "eli5",
            text: "El DUA es como el formulario de inscripción a la facultad: un solo papel donde ponés todos tus datos y al que le abrochás la cédula, el carné de salud y la escolaridad. La Aduana mira el formulario y los adjuntos juntos.",
          },
        ],
      },
      {
        heading: "La carpeta: documentos que acompañan el DUA",
        blocks: [
          {
            type: "p",
            text: "Cuando un cliente te dice “mandame lo que necesitás para despachar”, esta es la lista. Cada documento se asocia en LUCIA con un código:",
          },
          {
            type: "table",
            headers: ["Documento", "Código o forma en LUCIA", "Para qué"],
            rows: [
              ["**Factura comercial**", "FACC (cabezal), FACI (por ítem), FACN (no parcializable)", "Precio, Incoterm, origen. Obligatoria."],
              ["Pro-forma", "PROF", "Casos especiales."],
              ["**Documento de transporte** (B/L, AWB, CRT con MIC/DTA)", "Se asocia por manifiesto + conocimiento + línea", "Acredita la disponibilidad jurídica de la mercadería."],
              ["**Packing list**", "Lista de empaque", "Detalle por bulto."],
              ["**Certificado de origen**", "ORII / ORIN; en MERCOSUR también ORIM / CODM y la declaración de origen", "Solo si se pide preferencia arancelaria."],
              ["**Póliza o certificado de seguro**", "Documento asociado", "Para armar el CIF. Si no se presenta, seguro ficto del 1 % del FOB."],
              ["**Certificados VUCE**", "Con número y vencimiento", "Permisos de MSP, MGAP, LATU, URSEA, etc."],
              ["**DVA (DV-1)**", "Declaración del valor", "Acompaña al DUA."],
              ["Nota de crédito o débito, remito", "NCRD / NDEB, REMN", "Cuando corresponden."],
            ],
            caption: "Fuente: Anexo DUA digital e instructivo de llenado del DUA de importación (DNA).",
          },
          {
            type: "callout",
            tone: "uy",
            title: "El documento de transporte es clave",
            text: "El **CAROU (art. 65)** exige que la declaración acredite la **disponibilidad jurídica** de la mercadería mediante el **conocimiento de embarque o un documento equivalente**. Dicho simple: sin B/L, AWB o CRT a nombre del importador (o endosado a su favor), no se puede despachar.",
          },
        ],
      },
      {
        heading: "Cómo se ve un DUA",
        blocks: [
          {
            type: "p",
            text: "El DUA tiene un **cabezal** con los datos generales de la operación y un bloque por cada **ítem** (una línea por cada NCM con iguales condiciones de origen, acuerdo y cupo). Algunos datos que vas a ver siempre:",
          },
          {
            type: "table",
            headers: ["Casilla", "Qué va", "Ejemplo"],
            rows: [
              ["A1 Régimen", "Código de 2 dígitos", "10 = importación definitiva"],
              ["C Nº de DUA", "Lo asigna LUCIA, formato NNN-AAAA-999999", "001-2026-123456"],
              ["2 Importador", "Razón social según el RUT", "ESPÍRITU DEMO S.A."],
              ["9 Proveedor", "Nombre del proveedor del exterior", "NINGBO GLASS CO."],
              ["46 Total CIF", "En dólares", "22.700"],
              ["60A NCM", "10 dígitos: 8 de la NCM y 2 de apertura nacional", "7013.37.00.00 (ejemplo)"],
              ["61 Código de acuerdo", "Obligatorio; 310 = ACE 18 (MERCOSUR)", "310"],
              ["72 País de origen", "Según el certificado de origen o el país de fabricación", "China"],
            ],
            caption: "Ejemplos ficticios. El detalle completo, casilla por casilla, está en el módulo 5.",
          },
          { type: "doc", docId: "dua" },
          {
            type: "table",
            headers: ["Código de régimen (A1)", "Significado"],
            rows: [
              ["10", "Importación definitiva"],
              ["20", "Admisión temporaria para reexpedición en el mismo estado"],
              ["21", "Admisión temporaria para perfeccionamiento activo"],
              ["30", "Reimportación en el mismo estado"],
              ["31", "Reimportación con transformación o reparación en el exterior"],
            ],
          },
          {
            type: "callout",
            tone: "info",
            title: "Sobre IMPO, EXPO, TRAN",
            text: "En la oficina vas a escuchar hablar de “IMPO”, “EXPO”, “TRAN” o “AT” como familias de régimen. En el DUA, sin embargo, el régimen se declara con el **código numérico** de la casilla A1, y la operación concreta en la casilla 53.",
          },
        ],
      },
      {
        heading: "Del DUA al retiro, en cinco pasos",
        blocks: [
          {
            type: "steps",
            items: [
              { title: "Transmisión", text: "El despachante obtiene la referencia del arribo (manifiesto y línea) y transmite el DUA con la DVA, proponiendo su autoliquidación." },
              { title: "Numeración", text: "LUCIA valida y asigna número NNN-AAAA-999999. Si no se pide canal en **30 días corridos**, el DUA vence." },
              { title: "Pago", text: "Todos los tributos en un solo acto, por el BROU o redes de cobranza; los internos pueden pagarse en la DGI dentro de los 7 días hábiles desde la aceptación." },
              { title: "Canal", text: "**Verde** (cumplido automático), **naranja** (control documental de un Vista) o **rojo** (control documental y físico)." },
              { title: "Levante y retiro", text: "Con el cumplido (el CAROU lo llama **libramiento**) y los gastos de terminal pagos, la mercadería sale con la vía 4 o la constancia electrónica." },
            ],
          },
          {
            type: "eli5",
            text: "Los canales son como el control del aeropuerto al volver de viaje: verde, pasás directo; naranja, te piden los papeles; rojo, te abren la valija. No siempre significa que hiciste algo mal: a veces toca al azar.",
          },
        ],
      },
      {
        heading: "Cómo se conecta con lo que ya viste",
        blocks: [
          {
            type: "p",
            text: "El DUA es el punto donde se encuentran todos los temas del curso. El **Incoterm** de la factura define qué se suma para llegar al valor CIF; la **factura comercial** da el precio; el **packing list** y el **B/L** dan bultos y pesos; el **certificado de origen** decide si se aplica la preferencia del ACE 18 (código 310); los **permisos de la VUCE** habilitan la mercadería. Si un solo papel no coincide, el DUA lo refleja.",
          },
          {
            type: "example",
            title: "La carpeta de los vasos de Ningbo",
            text: "Para despachar los 24.000 vasos de vidrio que llegaron a TCP, el despachante junta: factura comercial FOB Ningbo por US$ 20.000, B/L con flete de US$ 2.500, póliza de seguro por US$ 200, packing list de 850 cajas y 12.500 kg brutos. Con eso arma el CIF: 20.000 + 2.500 + 200 = **US$ 22.700**, que es el total de la casilla 46. Como el origen es China, no hay certificado de origen preferencial que asociar.",
          },
          {
            type: "callout",
            tone: "tip",
            title: "Pregunta de entrevista",
            text: "“¿Qué documentos pedís para preparar un DUA de importación?” Respuesta modelo: factura comercial, documento de transporte, packing list, certificado de origen si hay preferencia, constancia de seguro y flete si no están en la factura, y las autorizaciones de la VUCE si la mercadería las requiere. Y después controlo que todos coincidan.",
          },
        ],
      },
    ],
    eli5: [
      {
        concept: "DUA",
        text: "Es el formulario de inscripción al que le abrochás todos los papeles: un solo documento que resume la operación entera para la Aduana.",
      },
      {
        concept: "DVA",
        text: "Es la parte del formulario donde explicás por qué la mercadería vale lo que decís que vale, como mostrar el ticket cuando te preguntan cuánto pagaste.",
      },
      {
        concept: "RADE",
        text: "Es la caja fuerte digital donde se guardan las fotos firmadas de todos los papeles durante 10 años, por si alguien después quiere revisarlos.",
      },
      {
        concept: "Canales",
        text: "Son como el control del aeropuerto: verde pasás, naranja te piden papeles, rojo te abren la valija.",
      },
    ],
    keyPoints: [
      "El DUA es la declaración única para importación, exportación, tránsito y admisión temporaria; nació con el Decreto 333/992 y hoy es 100 % digital en LUCIA.",
      "Liquida todos los tributos, incluidos los internos de la DGI, que se pagan en un solo acto, y va con la DVA (DV-1).",
      "La carpeta básica: factura comercial, documento de transporte, packing list, certificado de origen (si hay preferencia), seguro, certificados VUCE y DVA.",
      "El CAROU (art. 65) exige acreditar la disponibilidad jurídica con el conocimiento de embarque o equivalente.",
      "El régimen se declara con un código numérico (10 = importación definitiva) y el número de DUA tiene el formato NNN-AAAA-999999.",
      "Si no se pide canal en 30 días corridos, el DUA vence; los canales son verde, naranja y rojo.",
    ],
    probableQuestions: [
      { question: "¿Qué es el DUA?", answer: "El Documento Único Aduanero: la declaración aduanera única para todos los regímenes, que hoy se transmite en forma electrónica a LUCIA e incluye la liquidación de todos los tributos." },
      { question: "¿Qué documentos acompañan un DUA de importación?", answer: "Factura comercial, documento de transporte, packing list, certificado de origen si se pide preferencia, póliza de seguro, certificados VUCE y la DVA." },
      { question: "¿Qué pasa si no hay póliza de seguro?", answer: "Se aplica un seguro ficto del 1 % del FOB para armar el valor en aduana." },
      { question: "¿Qué código de régimen corresponde a la importación definitiva?", answer: "El 10, en la casilla A1." },
      { question: "¿Qué formato tiene el número de DUA?", answer: "NNN-AAAA-999999: aduana, año y correlativo." },
      { question: "¿Qué es la DVA?", answer: "La declaración del valor en aduana (formulario DV-1) que acompaña al DUA." },
      { question: "¿Qué exige el art. 65 del CAROU?", answer: "Que la declaración acredite la disponibilidad jurídica de la mercadería mediante el conocimiento de embarque o un documento equivalente." },
    ],
    sources: [SRC_DEC333, SRC_DUA_DIG, SRC_DUA_ANEXO, SRC_INSTRUCTIVO, SRC_CAP7, SRC_CAROU],
  },
]
