import type { Subtopic } from '../types'

// Módulo 2: Incoterms 2020.
// Base: docs/research/01_incoterms_documentos.md (sección 1) y, para el valor en aduana,
// docs/research/02_importacion_calculo_dua.md (sección 3.1). Seguro: 05 (sección 5.4).

const SRC_ICC = {
  title: "ICC: Incoterms® 2020",
  url: "https://iccwbo.org/business-solutions/incoterms-rules/incoterms-2020/",
}
const SRC_ICC_NL = {
  title: "ICC Países Bajos: grupo de trabajo para Incoterms® 2030",
  url: "https://www.iccwbo.nl/news/incoterms%C2%AE-2030-a-dutch-working-group-is-being-formed",
}
const SRC_DATASUR = {
  title: "Datasur: Incoterms 2020 vs “2026”",
  url: "https://www.datasur.com/incoterms-2020-vs-2026-ia/",
}
const SRC_OD2003 = {
  title: "DNA: Orden del Día 001/2003 (valor en aduana, Dec. CMC 17/94, Decreto 574/994)",
  url: "https://www.aduanas.gub.uy/innovaportal/file/1647/1/od-2003-001.pdf",
}
const SRC_ONU = {
  title: "ONU/UNSD: estadísticas de comercio de Uruguay (importaciones CIF)",
  url: "https://mdgs.un.org/unsd/trade/WS%20Bogota09/Presentations/Item%2012%20-%20Uruguay.pdf",
}
const SRC_OP_ENTRADA = {
  title: "DNA: Operaciones de entrada, procedimiento (seguro ficto)",
  url: "https://www.aduanas.gub.uy/innovaportal/file/7995/1/operaciones_de_entrada_procedimientos.pdf",
}
const SRC_SHIP4WD = {
  title: "Ship4wd: Institute Cargo Clauses",
  url: "https://ship4wd.com/resource-center/glossary/institute-cargo-clauses",
}
const SRC_MAERSK_DEM = {
  title: "Maersk: demurrage y detention",
  url: "https://www.maersk.com/es-mx/logistics-explained/transportation-and-freight/2023/08/28/what-is-demurrage-detention-in-shipping-for-buyers",
}

export const p02Lessons: Subtopic[] = [
  // ---------------------------------------------------------------- p02-s1
  {
    id: "p02-s1",
    moduleId: "p02",
    title: "Qué son los Incoterms, la edición 2020 y cómo se citan",
    summary:
      "Los Incoterms son el idioma común para repartir costos, riesgos y trámites entre comprador y vendedor. Es lo primero que te preguntan en una entrevista de comex y lo que más se escribe mal en una pro-forma.",
    minutes: 14,
    sections: [
      {
        heading: "Un idioma de tres letras",
        blocks: [
          {
            type: "p",
            text: "Imaginá que una bodega de Canelones vende vino a un importador de San Pablo. Alguien tiene que contratar el camión, alguien tiene que hacer el trámite de exportación en Uruguay y el de importación en Brasil, alguien paga el seguro, y si el camión vuelca en la ruta, alguien pierde la plata. Si cada contrato tuviera que explicar todo eso en diez páginas, comerciar sería lentísimo. Para eso existen los **Incoterms**.",
          },
          {
            type: "p",
            text: "Los Incoterms® son **reglas de la Cámara de Comercio Internacional (ICC)**: 11 términos de tres letras que se usan en los contratos de compraventa de mercaderías entre empresas (B2B). Existen desde **1936** y la edición vigente es la **Incoterms® 2020**, aplicable desde el **1/1/2020**. Con escribir “CPT San Pablo, Incoterms® 2020” las dos partes saben exactamente quién hace qué.",
          },
          {
            type: "eli5",
            text: "Los Incoterms son como las reglas de “¿quién lleva la torta al cumpleaños?”. Dicen hasta dónde la lleva tu tía, desde dónde la lleva tu mamá, quién paga el taxi y de quién es la culpa si la torta se cae en el camino.",
          },
          {
            type: "callout",
            tone: "info",
            title: "No son ley",
            text: "Los Incoterms no son una norma estatal: son reglas privadas que se aplican porque las partes las incorporan al contrato. Por eso conviven versiones: dos empresas pueden pactar Incoterms 2010 si quieren, pero tienen que decirlo expresamente. Si no dicen la versión, se presta a discusión.",
          },
        ],
      },
      {
        heading: "Qué regulan y qué no",
        blocks: [
          {
            type: "p",
            text: "Este es el punto que más se pregunta en los exámenes, porque mucha gente cree que el Incoterm lo dice todo. No es así. Regula cinco cosas y deja afuera otras tantas, que van en el contrato de compraventa (y, cuando corresponde, en la **Convención de Viena de 1980** sobre compraventa internacional de mercaderías, de la que Uruguay es parte).",
          },
          {
            type: "table",
            headers: ["Sí regulan", "No regulan"],
            rows: [
              ["El **punto de entrega** de la mercadería", "La **transferencia de la propiedad**"],
              ["La **transferencia del riesgo** de pérdida o daño", "El **precio**"],
              ["El **reparto de los costos** (flete, seguro, cargas, trámites)", "El **medio de pago** (transferencia, carta de crédito, cobranza)"],
              ["Quién **contrata el transporte y el seguro**", "Las **consecuencias del incumplimiento**"],
              ["Quién hace la **aduana de exportación y la de importación**, y qué documentos se entregan", "La **ley aplicable** al contrato"],
            ],
            caption: "Fuente: ICC, Incoterms® 2020.",
          },
          {
            type: "example",
            title: "Un error típico de oficina",
            text: "Un importador te dice: “Compramos FOB, así que la mercadería ya es nuestra desde que sube al barco”. Ojo: el Incoterm FOB dice que desde ese momento el **riesgo** es del comprador, pero no dice nada sobre la **propiedad**. Quién es dueño y desde cuándo lo define el contrato y la ley aplicable, no el Incoterm.",
          },
        ],
      },
      {
        heading: "Cómo se citan correctamente",
        blocks: [
          {
            type: "p",
            text: "La fórmula correcta tiene tres partes: **la regla + el lugar o puerto, lo más preciso posible + “Incoterms® 2020”**. El lugar es parte esencial de la regla: “FCA” solo no dice nada, porque no sabés dónde se entrega.",
          },
          {
            type: "table",
            headers: ["Mal citado", "Bien citado", "Por qué"],
            rows: [
              ["FOB", "FOB Montevideo, Uruguay, Incoterms® 2020", "Falta el puerto de embarque y la versión."],
              ["FCA Uruguay", "FCA Depósito ABC, Ruta 1 km 25, Montevideo, Uruguay, Incoterms® 2020", "Un país no es un lugar de entrega. Hay que saber dónde se carga."],
              ["CIF", "CIF Montevideo, Uruguay, Incoterms® 2020", "En las reglas C el lugar que se nombra es el de **destino** (hasta donde se paga el flete)."],
              ["DAP Brasil", "DAP Rua X 100, San Pablo, Brasil, Incoterms® 2020", "En las reglas D el lugar es el de destino y conviene precisar la dirección."],
              ["FOB Aeropuerto de Carrasco", "FCA Terminal de Cargas, Aeropuerto de Carrasco, Uruguay, Incoterms® 2020", "FOB es solo marítimo: no existe FOB en un aeropuerto."],
            ],
          },
          {
            type: "callout",
            tone: "tip",
            title: "Fijate en qué lugar se nombra",
            text: "En las reglas **E y F** el lugar nombrado está en **origen** (donde se entrega). En las reglas **C y D** está en **destino**: en las C es hasta dónde paga el flete el vendedor, aunque el riesgo pasó antes; en las D es donde se entrega.",
          },
        ],
      },
      {
        heading: "Las 11 reglas en dos grupos y cuatro familias",
        blocks: [
          {
            type: "p",
            text: "La ICC agrupa las reglas según el modo de transporte. Este es el criterio oficial y el más útil en la práctica:",
          },
          {
            type: "table",
            headers: ["Grupo", "Reglas", "Comentario"],
            rows: [
              ["**Cualquier modo de transporte** (incluido el multimodal)", "EXW, FCA, CPT, CIP, DAP, DPU, DDP", "Sirven para camión, avión, barco con contenedor o combinaciones."],
              ["**Solo marítimo y vías navegables interiores**", "FAS, FOB, CFR, CIF", "Pensadas para carga que se entrega en el costado o a bordo del buque: graneles y carga convencional."],
            ],
          },
          {
            type: "p",
            text: "En cursos y entrevistas también vas a ver la clasificación clásica **por letra inicial**, que ayuda a recordar la lógica:",
          },
          {
            type: "table",
            headers: ["Familia", "Reglas", "Idea central"],
            rows: [
              ["**E** (salida)", "EXW", "El vendedor pone la mercadería a disposición en su local. Mínima obligación."],
              ["**F** (transporte principal no pagado por el vendedor)", "FCA, FAS, FOB", "El vendedor entrega en origen al transportista o al buque que contrata el comprador."],
              ["**C** (transporte principal pagado por el vendedor)", "CPT, CIP, CFR, CIF", "El vendedor paga el flete hasta destino, pero el riesgo pasa en origen. Son reglas de **dos puntos críticos**."],
              ["**D** (llegada)", "DAP, DPU, DDP", "El vendedor asume costo y riesgo hasta destino."],
            ],
          },
          {
            type: "eli5",
            text: "Las reglas C son como mandar una carta con estampilla paga. Vos pagaste el viaje, pero si el cartero la pierde, el problema ya no es tuyo: tu parte terminó cuando la dejaste en el buzón.",
          },
          { type: "tool", toolId: "incoterms-visualizer" },
        ],
      },
      {
        heading: "Qué cambió en 2020 respecto de 2010",
        blocks: [
          {
            type: "p",
            text: "Es una pregunta clásica. No hace falta saberse todo de memoria, pero sí los tres cambios grandes: DAT pasó a DPU, el seguro de CIP subió de cobertura y FCA admite un B/L “a bordo”.",
          },
          {
            type: "table",
            headers: ["Cambio", "Detalle"],
            rows: [
              ["**DAT → DPU**", "DAT (entregado en terminal) pasa a llamarse **DPU** (entregado en lugar descargado). El lugar puede ser cualquiera, no solo una terminal. Es la **única regla en la que el vendedor descarga** en destino."],
              ["**Seguro en CIP**", "CIP exige ahora cobertura amplia, **Institute Cargo Clauses (A)**, “todo riesgo”. **CIF mantiene la cobertura mínima, ICC (C)**. Las partes pueden pactar otra cosa."],
              ["**FCA y B/L “a bordo”**", "Las partes pueden pactar que el comprador instruya a su transportista para emitir al vendedor un B/L con anotación *on board*. Sirve para cobrar con carta de crédito."],
              ["**Costos en A9/B9**", "Todos los costos de cada regla quedan listados en los artículos A9 (vendedor) y B9 (comprador)."],
              ["**Seguridad**", "Se precisan las obligaciones y los costos relacionados con seguridad de la carga."],
              ["**Transporte propio**", "En FCA, DAP, DPU y DDP se admite que vendedor o comprador transporten con sus propios medios, sin un transportista independiente."],
              ["**Orden de los artículos**", "Los artículos A/B se reordenaron: la entrega y el riesgo aparecen antes."],
            ],
            caption: "Fuente: página oficial de la ICC sobre Incoterms® 2020.",
          },
        ],
      },
      {
        heading: "¿Y los Incoterms 2030?",
        blocks: [
          {
            type: "p",
            text: "A octubre de 2026 **no hay Incoterms 2030 vigentes**: la versión oficial sigue siendo la 2020. La ICC ya inició la revisión. ICC Países Bajos informó que está formando un grupo de trabajo nacional para enviar aportes al *Drafting Group* de la ICC, y que el lanzamiento de los **Incoterms® 2030 está previsto para fines de 2029**. Los documentos de trabajo son confidenciales, así que nadie puede decirte hoy qué va a cambiar.",
          },
          {
            type: "callout",
            tone: "warn",
            title: "Cuidado con los “Incoterms 2026”",
            text: "En internet circulan títulos como “Incoterms 2026”. **No existen**: son nombres comerciales de blogs que explican la edición 2020. Si un cliente o un compañero los menciona, la respuesta profesional es: “rige la 2020; la ICC está trabajando en la 2030, con lanzamiento previsto para fines de 2029”.",
          },
        ],
      },
      {
        heading: "Por qué al despachante uruguayo le importa el Incoterm",
        blocks: [
          {
            type: "p",
            text: "Para el despachante el Incoterm no es un tema comercial lejano: cambia la cuenta de los tributos. En Uruguay el **valor en aduana de una importación se arma en base CIF**: incluye el transporte, el seguro y los gastos de carga, descarga y manipulación hasta el puerto o lugar de importación. Así lo establecen el Acuerdo de Valoración de la OMC y la **Decisión CMC 17/94** del MERCOSUR, incorporada por el **Decreto 574/994**. Las exportaciones, en cambio, se declaran y se miden en estadísticas en valor **FOB**.",
          },
          {
            type: "table",
            headers: ["Si la compra fue…", "Para llegar al valor en aduana…"],
            rows: [
              ["EXW", "Se suman el traslado y la carga en origen hasta el embarque, más flete y seguro."],
              ["FCA o FOB", "Se suman el flete internacional y el seguro."],
              ["CFR o CPT", "Solo se agrega el seguro."],
              ["CIF o CIP", "Se usa ese valor y se revisan los ajustes."],
              ["DAP, DPU o DDP", "Se restan los gastos posteriores a la llegada (descarga, transporte interno y, en DDP, los tributos)."],
            ],
            caption: "Fuentes: DNA, Orden del Día 001/2003 y procedimiento de operaciones de entrada.",
          },
          {
            type: "callout",
            tone: "uy",
            title: "Qué entra y qué no en el CIF uruguayo",
            text: "Según la Orden del Día DNA 001/2003, entran el flete interno en origen, los gastos de carga, la emisión del B/L y los recargos del flete como el BAF. Quedan **fuera** los gastos portuarios, el almacenaje y la desconsolidación **en Uruguay**. Cuando no hay póliza de seguro declarada, el procedimiento de la DNA aplica un **seguro ficto del 1 % del FOB**.",
          },
          {
            type: "example",
            title: "Compra FOB Shanghái",
            text: "Un importador de Montevideo compra mochilas FOB Shanghái por US$ 10.000. El flete marítimo hasta Montevideo cuesta US$ 1.500 y no contrató seguro. El despachante arma el valor en aduana así: 10.000 + 1.500 + 100 (seguro ficto del 1 % del FOB) = **US$ 11.600**. Sobre ese CIF se calculan el arancel y la tasa consular, y después el IVA.",
          },
        ],
      },
    ],
    eli5: [
      {
        concept: "Incoterms",
        text: "Son las reglas de quién lleva la torta al cumpleaños: hasta dónde la lleva cada uno, quién paga el taxi y de quién es la culpa si se cae.",
      },
      {
        concept: "Lugar convenido",
        text: "Decir “FCA” sin lugar es como decir “nos vemos en la esquina” sin decir cuál. Todos entendieron la idea, pero nadie sabe dónde ir.",
      },
      {
        concept: "Reglas de dos puntos críticos (C)",
        text: "Es como pagarle el taxi a un amigo hasta su casa: vos pagaste el viaje entero, pero si el taxi choca a mitad de camino, el golpe se lo llevó tu amigo, no vos.",
      },
      {
        concept: "Incoterms y propiedad",
        text: "El Incoterm dice quién tiene que cuidar la bicicleta en cada tramo del viaje, no de quién es la bicicleta. Para saber quién es el dueño hay que mirar el contrato.",
      },
    ],
    keyPoints: [
      "Los Incoterms son 11 reglas privadas de la ICC; la edición vigente es la 2020, aplicable desde el 1/1/2020.",
      "Regulan entrega, riesgo, costos, contratación de transporte y seguro, trámites aduaneros y documentos; no regulan propiedad, precio, medio de pago, incumplimiento ni ley aplicable.",
      "Se citan con regla + lugar preciso + “Incoterms® 2020”.",
      "Siete reglas sirven para cualquier modo (EXW, FCA, CPT, CIP, DAP, DPU, DDP) y cuatro son solo marítimas (FAS, FOB, CFR, CIF).",
      "En 2020: DAT pasó a DPU, CIP exige seguro ICC (A) y FCA admite pactar un B/L “a bordo”.",
      "No hay Incoterms 2030 vigentes: la ICC trabaja en la revisión, con lanzamiento previsto para fines de 2029.",
      "En Uruguay la importación se valora en base CIF y la exportación se declara FOB, por eso el Incoterm cambia la cuenta de los tributos.",
    ],
    probableQuestions: [
      { question: "¿Qué es un Incoterm?", answer: "Una regla de la ICC que define en una compraventa internacional dónde se entrega la mercadería, cuándo pasa el riesgo, quién paga cada costo y quién hace cada trámite aduanero." },
      { question: "¿Qué cosas no regulan los Incoterms?", answer: "La transferencia de la propiedad, el precio, el medio de pago, las consecuencias del incumplimiento y la ley aplicable." },
      { question: "¿Cuál es la versión vigente?", answer: "Incoterms® 2020, aplicable desde el 1/1/2020. La ICC trabaja en la 2030, con lanzamiento previsto para fines de 2029." },
      { question: "¿Cómo se cita correctamente un Incoterm?", answer: "Regla + lugar o puerto lo más preciso posible + “Incoterms® 2020”. Por ejemplo: “FCA Depósito ABC, Ruta 1 km 25, Montevideo, Uruguay, Incoterms® 2020”." },
      { question: "¿Qué reglas son solo para transporte marítimo?", answer: "FAS, FOB, CFR y CIF." },
      { question: "Nombrá tres cambios de 2020 respecto de 2010.", answer: "DAT pasó a DPU; CIP exige seguro ICC (A); FCA permite pactar un B/L con anotación a bordo. También se listaron los costos en A9/B9 y se admitió el transporte propio." },
      { question: "¿Existen los Incoterms 2026?", answer: "No. Son nombres comerciales de blogs que explican la edición 2020." },
      { question: "¿Por qué le importa al despachante el Incoterm?", answer: "Porque en Uruguay el valor en aduana es base CIF: según el Incoterm hay que sumar flete y seguro (FOB, FCA, EXW) o restar gastos posteriores a la llegada (DAP, DPU, DDP)." },
    ],
    sources: [SRC_ICC, SRC_ICC_NL, SRC_DATASUR, SRC_OD2003, SRC_OP_ENTRADA, SRC_ONU],
  },

  // ---------------------------------------------------------------- p02-s2
  {
    id: "p02-s2",
    moduleId: "p02",
    title: "Incoterms marítimos: FAS, FOB, CFR y CIF",
    summary:
      "Las cuatro reglas exclusivas del transporte por agua. Son las más conocidas (FOB y CIF aparecen en todas partes) y también las más mal usadas, sobre todo con contenedores.",
    minutes: 16,
    sections: [
      {
        heading: "Por qué estas cuatro son “solo marítimas”",
        blocks: [
          {
            type: "p",
            text: "FAS, FOB, CFR y CIF tienen algo en común: la entrega ocurre **en el buque** o **al costado del buque**, en el puerto de embarque. Esa lógica nació cuando la carga se subía bulto por bulto, con la grúa del barco o del muelle. Por eso solo sirven para **transporte marítimo y vías navegables interiores** (ríos, como la Hidrovía), y la ICC las recomienda para **graneles y carga convencional** (*breakbulk*), no para contenedores.",
          },
          {
            type: "table",
            headers: ["Regla", "Entrega y riesgo", "Costos del vendedor hasta…", "Flete principal", "Seguro", "Aduana expo", "Aduana impo"],
            rows: [
              ["**FAS**", "Al costado del buque en el puerto de embarque", "El mismo punto", "Comprador", "Nadie obligado", "Vendedor", "Comprador"],
              ["**FOB**", "A bordo del buque en el puerto de embarque", "El mismo punto", "Comprador", "Nadie obligado", "Vendedor", "Comprador"],
              ["**CFR**", "A bordo del buque en el puerto de embarque", "El puerto de destino", "Vendedor", "Nadie obligado", "Vendedor", "Comprador"],
              ["**CIF**", "A bordo del buque en el puerto de embarque", "El puerto de destino", "Vendedor", "Vendedor, mínimo ICC (C), 110 %", "Vendedor", "Comprador"],
            ],
            caption: "Fuente: ICC, Incoterms® 2020 (tabla maestra de la investigación).",
          },
          { type: "tool", toolId: "incoterms-visualizer" },
        ],
      },
      {
        heading: "FAS: franco al costado del buque",
        blocks: [
          {
            type: "p",
            text: "**FAS** (*Free Alongside Ship*) significa que el vendedor entrega cuando pone la mercadería **al costado del buque** que designó el comprador, en el puerto de embarque: en el muelle o en una barcaza. Desde ese momento el riesgo y los costos son del comprador, que paga la carga a bordo y el flete. El vendedor sí hace el despacho de exportación.",
          },
          {
            type: "list",
            items: [
              "**Uso típico:** graneles y carga de proyecto, como troncos, granos o maquinaria pesada.",
              "**Error típico:** usarlo con contenedores. El contenedor nunca se entrega “al costado del buque”: se entrega en la terminal días antes.",
            ],
          },
          {
            type: "eli5",
            text: "FAS es dejar la valija al lado del ómnibus, en el andén. Ya cumpliste: subirla al maletero y pagar el pasaje es cosa del que viaja.",
          },
        ],
      },
      {
        heading: "FOB: franco a bordo",
        blocks: [
          {
            type: "p",
            text: "**FOB** (*Free On Board*) es probablemente el Incoterm más famoso. El vendedor entrega cuando la mercadería está **a bordo del buque** designado por el comprador, en el puerto de embarque. Hasta ahí paga todo y corre con todo el riesgo, incluida la carga a bordo; de ahí en más, flete, seguro y riesgo son del comprador.",
          },
          {
            type: "callout",
            tone: "uy",
            title: "FOB en Uruguay",
            text: "FOB es la **base de valor estadístico de las exportaciones uruguayas** y se usa mucho en commodities: carne, soja, celulosa, lácteos. Cuando leas que Uruguay exportó tantos millones de dólares, ese número está en valor FOB.",
          },
          {
            type: "p",
            text: "Ahora viene la pregunta clásica de entrevista: **¿por qué no conviene FOB con contenedores?** Porque el contenedor se entrega en la terminal (por ejemplo, en TCP) varios días antes de que lo carguen al buque. Bajo FOB, el riesgo sigue siendo del vendedor hasta que el contenedor está a bordo, y durante esos días el contenedor está en manos de la terminal y de la naviera, no del vendedor. Es un tramo que el vendedor no controla y sin embargo corre con el riesgo. Para contenedores lo correcto es **FCA**.",
          },
          {
            type: "eli5",
            text: "Con FOB, prestaste tu pelota y sigue siendo tu problema hasta que el otro nene la tiene en la mano. Si se la dejás a la maestra y se pincha antes de que él la agarre, igual es tu culpa. Con contenedores conviene FCA: “te la doy cuando se la entrego a la maestra”.",
          },
          {
            type: "list",
            items: [
              "**Otro error típico:** decir “FOB Aeropuerto de Carrasco”. FOB no sirve para transporte aéreo; corresponde FCA.",
              "**Flete:** en FOB el B/L suele decir *freight collect* (flete a pagar en destino), porque el flete lo contrata el comprador.",
            ],
          },
        ],
      },
      {
        heading: "CFR: costo y flete",
        blocks: [
          {
            type: "p",
            text: "**CFR** (*Cost and Freight*) es FOB más el flete. El vendedor contrata y paga el transporte marítimo **hasta el puerto de destino**, pero el **riesgo pasa a bordo en el puerto de embarque**, igual que en FOB. Es una regla de **dos puntos críticos**: el costo llega hasta destino, el riesgo se quedó en origen.",
          },
          {
            type: "example",
            title: "Importación CFR Montevideo",
            text: "Una ferretería de Montevideo compra herramientas CFR Montevideo a un proveedor de Shanghái. El proveedor paga el flete hasta Montevideo y el B/L dice *freight prepaid*. En plena travesía, un golpe de mar daña parte de la carga. ¿Quién sufre la pérdida? **La ferretería**, porque el riesgo pasó cuando la mercadería quedó a bordo en Shanghái. Si no contrató seguro, no tiene a quién reclamarle.",
          },
          {
            type: "callout",
            tone: "warn",
            title: "Error típico con CFR",
            text: "Que el comprador **no contrate seguro**. En CFR nadie está obligado a asegurar, y como el vendedor paga el flete, el comprador se queda tranquilo creyendo que “todo está cubierto”. No lo está. Además, para armar el valor en aduana en Uruguay el despachante igual tiene que agregar el seguro (o el seguro ficto).",
          },
        ],
      },
      {
        heading: "CIF: costo, seguro y flete",
        blocks: [
          {
            type: "p",
            text: "**CIF** (*Cost, Insurance and Freight*) es CFR más un seguro que contrata el vendedor **a favor del comprador**. El riesgo, igual que en CFR, pasa a bordo en origen. El seguro existe justamente para proteger al comprador durante el viaje, que es cuando el riesgo ya es suyo.",
          },
          {
            type: "table",
            headers: ["Requisito del seguro en CIF", "Regla"],
            rows: [
              ["Cobertura mínima", "**Institute Cargo Clauses (C)** o similar: riesgos mayores nombrados, como incendio, explosión, varada, hundimiento, colisión, avería gruesa y echazón."],
              ["Monto mínimo", "**110 %** del precio del contrato."],
              ["Moneda", "La del contrato."],
              ["¿Se puede pactar más?", "Sí, las partes pueden pactar una cobertura mayor."],
              ["Beneficiario", "El comprador, o quien tenga interés asegurable."],
            ],
          },
          {
            type: "callout",
            tone: "uy",
            title: "CIF en las importaciones uruguayas",
            text: "CIF es muy común en las importaciones a Uruguay por mar, y además coincide con la base del valor en aduana. Si la factura dice CIF Montevideo, el despachante parte de ese valor y revisa si hay ajustes.",
          },
          {
            type: "list",
            items: [
              "**Error típico 1:** creer que CIF incluye seguro “todo riesgo”. Incluye la cobertura mínima, ICC (C), que no cubre por ejemplo la mojadura o el robo.",
              "**Error típico 2:** usar CIF para carga aérea o para contenedores. En esos casos corresponde **CIP**.",
            ],
          },
          {
            type: "eli5",
            text: "CIF trae un paraguas chiquito: te cubre si llueve muy fuerte, pero con la llovizna igual te mojás. Si querés estar seco del todo, tenés que pedir un piloto (más cobertura) o comprarlo vos.",
          },
        ],
      },
      {
        heading: "Las cuatro, lado a lado, con ejemplos uruguayos",
        blocks: [
          {
            type: "table",
            headers: ["Regla", "Ejemplo uruguayo realista", "Quién paga el flete", "Dónde pasa el riesgo"],
            rows: [
              ["FAS", "Exportación de troncos al costado del buque en un puerto uruguayo", "Comprador", "Al costado del buque, en Uruguay"],
              ["FOB", "Exportación de soja a granel FOB Nueva Palmira", "Comprador", "A bordo, en Nueva Palmira"],
              ["CFR", "Importación de fertilizante a granel CFR Montevideo", "Vendedor", "A bordo, en el puerto de origen"],
              ["CIF", "Importación de carga convencional CIF Montevideo", "Vendedor (más seguro ICC C)", "A bordo, en el puerto de origen"],
            ],
          },
          {
            type: "steps",
            items: [
              { title: "¿Es carga en contenedor?", text: "Si sí, pensá primero en FCA, CPT o CIP. Las reglas marítimas quedan para graneles y carga convencional." },
              { title: "¿Quién consigue mejor flete?", text: "Si el comprador tiene un forwarder con buenas tarifas, FOB o FAS. Si el vendedor tiene volumen con una naviera, CFR o CIF." },
              { title: "¿Quién asegura?", text: "En FAS, FOB y CFR nadie está obligado: el comprador tiene que decidir si asegura. En CIF asegura el vendedor con cobertura mínima." },
              { title: "¿Cómo se paga?", text: "Si hay carta de crédito, el banco va a pedir un B/L “a bordo” y, en CIF, la póliza por el 110 %." },
            ],
          },
          {
            type: "callout",
            tone: "tip",
            title: "Prepaid o collect",
            text: "Mirá la casilla de flete del B/L: en CFR y CIF suele decir *freight prepaid* (pagado en origen); en FOB y FAS, *freight collect* (a pagar en destino). Si no coincide con el Incoterm de la factura, algo está mal y hay que preguntar.",
          },
        ],
      },
    ],
    eli5: [
      {
        concept: "FAS",
        text: "Dejás la valija al lado del ómnibus en el andén. Subirla al maletero y pagar el pasaje ya es cosa del que viaja.",
      },
      {
        concept: "FOB",
        text: "Subís la valija al maletero vos. Desde que está adentro, si el ómnibus choca, la valija ya es problema del pasajero.",
      },
      {
        concept: "CFR",
        text: "Le pagás el pasaje a tu primo hasta Salto, pero apenas sube al ómnibus, lo que le pase en el viaje ya no es tu responsabilidad.",
      },
      {
        concept: "CIF",
        text: "Igual que CFR, pero además le das un paraguas chiquito por si llueve fuerte. Para la llovizna, que se compre un piloto.",
      },
    ],
    keyPoints: [
      "FAS, FOB, CFR y CIF son solo para transporte marítimo y fluvial, pensadas para graneles y carga convencional.",
      "FAS entrega al costado del buque; FOB, CFR y CIF entregan a bordo en el puerto de embarque.",
      "En CFR y CIF el vendedor paga el flete hasta destino, pero el riesgo pasa a bordo en origen: son reglas de dos puntos críticos.",
      "CIF obliga al vendedor a asegurar con cobertura mínima ICC (C) por el 110 % del precio del contrato.",
      "FOB con contenedores es un error clásico: el riesgo queda en el vendedor en un tramo que no controla; corresponde FCA.",
      "FOB es la base estadística de las exportaciones uruguayas; CIF es la base del valor en aduana de las importaciones.",
      "No existe FOB ni CIF en un aeropuerto: para aéreo se usan FCA, CPT o CIP.",
    ],
    probableQuestions: [
      { question: "En CIF, ¿cuándo pasa el riesgo al comprador?", answer: "Cuando la mercadería está a bordo del buque en el puerto de embarque, aunque el vendedor pague flete y seguro hasta destino." },
      { question: "¿Qué cobertura mínima de seguro exige CIF?", answer: "Institute Cargo Clauses (C), por el 110 % del precio del contrato y en la moneda del contrato." },
      { question: "¿Por qué no conviene FOB con contenedores?", answer: "Porque el contenedor se entrega en la terminal días antes de la carga y bajo FOB el riesgo sigue en el vendedor hasta que está a bordo, un tramo que no controla. Corresponde FCA." },
      { question: "¿Qué diferencia hay entre FAS y FOB?", answer: "En FAS la entrega es al costado del buque; en FOB, a bordo. En FAS la carga a bordo corre por cuenta y riesgo del comprador." },
      { question: "¿Qué diferencia hay entre CFR y CIF?", answer: "CIF agrega la obligación del vendedor de contratar un seguro con cobertura mínima ICC (C) a favor del comprador. El punto de riesgo es el mismo." },
      { question: "¿Se puede usar CIF para un envío aéreo?", answer: "No. CIF es solo marítimo; para aéreo corresponde CIP." },
      { question: "¿En qué valor se miden las exportaciones uruguayas?", answer: "En valor FOB." },
      { question: "Compraste CFR Montevideo. ¿Qué agrega el despachante para el valor en aduana?", answer: "El seguro, porque el flete ya está incluido. Si no hay póliza, se aplica el seguro ficto del 1 % del FOB según el procedimiento de la DNA." },
    ],
    sources: [SRC_ICC, SRC_OD2003, SRC_OP_ENTRADA, SRC_ONU, SRC_SHIP4WD],
  },

  // ---------------------------------------------------------------- p02-s3
  {
    id: "p02-s3",
    moduleId: "p02",
    title: "Incoterms aéreos y multimodales: FCA, CPT y CIP",
    summary:
      "Las tres reglas que sirven para todo: avión, camión y contenedor. FCA es la que la ICC recomienda para contenedores y la que más vas a recomendar en una oficina.",
    minutes: 15,
    sections: [
      {
        heading: "Por qué estas tres son las “modernas”",
        blocks: [
          {
            type: "p",
            text: "FCA, CPT y CIP funcionan con cualquier modo de transporte, incluido el multimodal. Su lógica es la del comercio actual: la mercadería no se entrega en la borda del buque sino **al transportista**, en una terminal, un depósito, un aeropuerto o el propio local del vendedor. Por eso son las adecuadas para **carga aérea** y para **contenedores**, aunque el viaje principal sea en barco.",
          },
          {
            type: "table",
            headers: ["Regla", "Entrega y riesgo", "Costos del vendedor hasta…", "Flete principal", "Seguro", "Aduana expo", "Aduana impo"],
            rows: [
              ["**FCA**", "Al transportista designado por el comprador, en el lugar convenido", "El mismo punto", "Comprador", "Nadie obligado", "Vendedor", "Comprador"],
              ["**CPT**", "Al primer transportista, en origen", "El lugar de destino convenido", "Vendedor", "Nadie obligado", "Vendedor", "Comprador"],
              ["**CIP**", "Al primer transportista, en origen", "El lugar de destino (flete y seguro)", "Vendedor", "Vendedor, ICC (A), 110 %", "Vendedor", "Comprador"],
            ],
            caption: "Fuente: ICC, Incoterms® 2020.",
          },
          {
            type: "callout",
            tone: "info",
            title: "La pareja equivalente",
            text: "Una forma fácil de recordarlas: FCA es el “FOB moderno”, CPT es el “CFR moderno” y CIP es el “CIF moderno”. La diferencia es que la entrega ocurre al **transportista**, no a bordo del buque, y que sirven para cualquier modo.",
          },
          { type: "tool", toolId: "incoterms-visualizer" },
        ],
      },
      {
        heading: "FCA: franco transportista",
        blocks: [
          {
            type: "p",
            text: "**FCA** (*Free Carrier*) significa que el vendedor entrega la mercadería, **con la exportación despachada**, al transportista que designó el comprador, en el lugar convenido. Desde ese momento el riesgo y los costos son del comprador. La clave de FCA es que tiene **dos variantes de entrega**, y confundirlas genera discusiones:",
          },
          {
            type: "table",
            headers: ["Si el lugar convenido es…", "El vendedor…", "Ejemplo"],
            rows: [
              ["**El local del vendedor**", "Entrega la mercadería **cargada** en el vehículo del comprador.", "FCA Planta de la bodega, Canelones: el vendedor carga el camión que mandó el comprador."],
              ["**Otro lugar** (terminal, depósito, aeropuerto)", "Entrega la mercadería sobre su propio vehículo, **lista para descargar**, a disposición del transportista. **No descarga.**", "FCA Terminal TCP, Montevideo: el camión del vendedor llega a la terminal y la terminal descarga."],
            ],
          },
          {
            type: "callout",
            tone: "uy",
            title: "Uso de FCA desde Uruguay",
            text: "FCA es el Incoterm natural para la **exportación en contenedor** (entrega en un depósito o en la terminal de Montevideo), para la **carga aérea por Carrasco** y para la **carga terrestre** al MERCOSUR. La ICC lo recomienda para contenedores justamente porque el riesgo pasa en el momento real de entrega en la terminal.",
          },
          {
            type: "p",
            text: "**FCA y la carta de crédito.** Un problema histórico de FCA era que, como el vendedor entrega antes de que la carga suba al buque, no recibía un B/L con anotación *on board*, y las cartas de crédito suelen exigirlo. Desde 2020 las partes pueden pactar que **el comprador instruya a su transportista para emitir al vendedor un B/L “a bordo”**. Así el exportador puede cobrar con carta de crédito sin tener que volver a FOB.",
          },
          {
            type: "example",
            title: "Celulosa en contenedores",
            text: "Una empresa uruguaya exporta celulosa en contenedores que entrega en la terminal de Montevideo cinco días antes de la carga. El comprador le propone FOB. ¿Qué le recomendás? **FCA Terminal, Montevideo, Incoterms® 2020**. Con FCA, el riesgo pasa cuando el contenedor queda en la terminal, que es el momento en que el vendedor pierde el control físico de la carga.",
          },
          {
            type: "callout",
            tone: "warn",
            title: "Error típico con FCA",
            text: "No precisar si la entrega es en el local del vendedor (el vendedor carga) o en otro lugar (el vendedor no descarga). Si el contrato dice solo “FCA Montevideo”, nadie sabe quién paga el autoelevador.",
          },
        ],
      },
      {
        heading: "CPT: transporte pagado hasta",
        blocks: [
          {
            type: "p",
            text: "**CPT** (*Carriage Paid To*) es la versión multimodal de CFR. El vendedor contrata y paga el transporte **hasta el lugar de destino convenido**, pero el **riesgo pasa cuando entrega la mercadería al primer transportista** en origen. Otra vez, dos puntos críticos: el costo viaja hasta destino, el riesgo se quedó en origen.",
          },
          {
            type: "example",
            title: "Vino por camión a San Pablo",
            text: "Una bodega uruguaya vende vino CPT San Pablo. Contrata el camión y paga el flete hasta San Pablo. El riesgo pasa cuando entrega las cajas al transportista en Uruguay. Si el camión vuelca en Rio Grande do Sul, la pérdida es del **importador brasileño**, aunque el flete lo haya pagado la bodega. Por eso el importador debería asegurar el tránsito.",
          },
          {
            type: "list",
            items: [
              "**Uso típico:** exportaciones terrestres a Brasil o Argentina, y exportaciones aéreas.",
              "**Error típico:** creer que el vendedor responde por los daños durante el viaje porque paga el flete.",
              "**Descarga en destino:** si el contrato de transporte del vendedor incluye la descarga, el vendedor no puede cobrársela aparte al comprador.",
            ],
          },
          {
            type: "eli5",
            text: "CPT es como mandar una encomienda por ómnibus con el envío pago. Vos pagaste hasta destino, pero desde que la dejaste en la ventanilla de la terminal, si se rompe en el camino, el lío es del que la recibe.",
          },
        ],
      },
      {
        heading: "CIP: transporte y seguro pagados hasta",
        blocks: [
          {
            type: "p",
            text: "**CIP** (*Carriage and Insurance Paid To*) es CPT más un seguro que contrata el vendedor. Y acá está el cambio más importante de 2020: el seguro de CIP tiene que ser de **cobertura amplia, Institute Cargo Clauses (A)**, “todo riesgo” salvo exclusiones, por al menos el **110 %** del valor del contrato y en la moneda del contrato. Las partes pueden pactar una cobertura menor, pero tienen que decirlo expresamente.",
          },
          {
            type: "table",
            headers: ["", "CIF", "CIP"],
            rows: [
              ["Modo de transporte", "Solo marítimo y fluvial", "Cualquiera"],
              ["Dónde pasa el riesgo", "A bordo del buque en origen", "Al entregar al primer transportista en origen"],
              ["Cobertura mínima", "ICC (C), riesgos mayores nombrados", "ICC (A), todo riesgo con exclusiones"],
              ["Monto mínimo", "110 % del precio del contrato", "110 % del precio del contrato"],
              ["¿Se puede pactar otra?", "Sí, una mayor", "Sí, una menor (hay que decirlo)"],
            ],
          },
          {
            type: "list",
            items: [
              "**Uso típico:** carga aérea o contenedores pagados por el exportador, y operaciones con carta de crédito.",
              "**Error típico:** cotizar el seguro como si fuera CIF (ICC C). En CIP el costo del seguro es mayor porque cubre más.",
            ],
          },
          {
            type: "eli5",
            text: "CIF trae un paraguas chiquito; CIP trae un piloto completo, botas incluidas. Los dos te los da el vendedor, pero con el piloto te mojás mucho menos.",
          },
        ],
      },
      {
        heading: "Carga aérea por Carrasco: qué regla usar",
        blocks: [
          {
            type: "p",
            text: "En el transporte aéreo solo sirven las siete reglas de cualquier modo: **EXW, FCA, CPT, CIP, DAP, DPU y DDP**. Nunca FOB, CFR ni CIF. En la práctica, las exportaciones por la Terminal de Cargas del Aeropuerto de Carrasco se pactan casi siempre en FCA, CPT o CIP.",
          },
          {
            type: "table",
            headers: ["Situación", "Regla sugerida", "Por qué"],
            rows: [
              ["Un laboratorio uruguayo exporta medicamentos; el comprador tiene su propio forwarder", "FCA Terminal de Cargas, Aeropuerto de Carrasco", "El comprador contrata el flete y el riesgo pasa al entregar en la terminal."],
              ["El exportador consigue mejor tarifa aérea que el comprador", "CPT Aeropuerto de destino", "El exportador paga el flete; el comprador asegura si quiere."],
              ["El comprador pide carga asegurada y paga con carta de crédito", "CIP Aeropuerto de destino", "El exportador paga flete y seguro ICC (A) por el 110 %."],
            ],
          },
          {
            type: "callout",
            tone: "uy",
            title: "Un dato de contexto",
            text: "Carrasco funciona con el régimen **MVD Free Airport** (aeropuerto libre) y tiene la certificación IATA CEIV Pharma desde 2018, por eso el sector farmacéutico es protagonista en la carga aérea uruguaya.",
          },
        ],
      },
    ],
    eli5: [
      {
        concept: "FCA",
        text: "Le das tu paquete al cadete que mandó tu amigo. Desde que el cadete lo tiene, lo que pase ya no es culpa tuya, porque el cadete lo eligió él.",
      },
      {
        concept: "CPT",
        text: "Mandás una encomienda por ómnibus con el envío pago. Pagaste hasta destino, pero si se rompe en el camino, el problema es del que la recibe.",
      },
      {
        concept: "CIP",
        text: "Igual que CPT, pero además le pagás un seguro completo, como un piloto con botas: lo protege de casi cualquier lluvia.",
      },
      {
        concept: "Las dos variantes de FCA",
        text: "Si el cadete viene a tu casa, vos le subís el paquete a la moto. Si vos lo llevás a la oficina del cadete, se lo dejás arriba de tu bici y que él lo baje.",
      },
    ],
    keyPoints: [
      "FCA, CPT y CIP sirven para cualquier modo de transporte y son las adecuadas para carga aérea y contenedores.",
      "En FCA el vendedor entrega al transportista del comprador con la exportación despachada; si es en su local, carga; si es en otro lugar, no descarga.",
      "FCA es la regla que la ICC recomienda para contenedores; desde 2020 se puede pactar un B/L “a bordo” para la carta de crédito.",
      "En CPT y CIP el vendedor paga el transporte hasta destino, pero el riesgo pasa al entregar al primer transportista en origen.",
      "CIP exige seguro ICC (A) por el 110 %; CIF exige solo ICC (C).",
      "En aéreo nunca se usan FOB, CFR ni CIF.",
    ],
    probableQuestions: [
      { question: "¿Qué Incoterm recomienda la ICC para contenedores?", answer: "FCA (y, si el vendedor paga el flete, CPT o CIP), porque el riesgo pasa cuando el contenedor se entrega en la terminal." },
      { question: "¿Cuáles son las dos variantes de entrega en FCA?", answer: "En el local del vendedor: la entrega es con la mercadería cargada en el vehículo del comprador. En otro lugar: sobre el vehículo del vendedor, lista para descargar." },
      { question: "¿Qué cambió en FCA con la versión 2020?", answer: "Se puede pactar que el comprador instruya a su transportista para emitir al vendedor un B/L con anotación a bordo, útil para cobrar con carta de crédito." },
      { question: "En CPT, ¿quién corre el riesgo durante el viaje principal?", answer: "El comprador: el riesgo pasa al entregar al primer transportista, aunque el vendedor pague el flete." },
      { question: "¿Qué seguro exige CIP?", answer: "Cobertura ICC (A), todo riesgo con exclusiones, por al menos el 110 % del valor del contrato, en la moneda del contrato." },
      { question: "Diferencias entre CIF y CIP.", answer: "CIF es solo marítimo, el riesgo pasa a bordo y el seguro mínimo es ICC (C). CIP sirve para cualquier modo, el riesgo pasa al primer transportista y el seguro es ICC (A)." },
      { question: "Exportás por Carrasco y el comprador tiene su forwarder. ¿Qué regla proponés?", answer: "FCA con la terminal de cargas del aeropuerto como lugar de entrega." },
    ],
    sources: [SRC_ICC, SRC_SHIP4WD,
      { title: "Mundo Marítimo: carga en el Aeropuerto de Carrasco", url: "https://mundomaritimo.cl/noticias/aeropuerto-de-carrasco-uruguay-sector-farmaceutico-lidera-el-desarrollo-en-la-terminal-de-cargas" },
    ],
  },

  // ---------------------------------------------------------------- p02-s4
  {
    id: "p02-s4",
    moduleId: "p02",
    title: "Incoterms terrestres y de llegada: EXW, DAP, DPU y DDP",
    summary:
      "Los dos extremos del abanico: EXW, donde el vendedor casi no hace nada, y las reglas D, donde lleva la mercadería hasta la puerta del comprador. Son muy usadas en el comercio por camión con el MERCOSUR.",
    minutes: 15,
    sections: [
      {
        heading: "Los extremos del abanico",
        blocks: [
          {
            type: "p",
            text: "Si ordenás las 11 reglas según cuánto trabajo le dejan al vendedor, **EXW** está en una punta (mínima obligación) y **DDP** en la otra (máxima obligación). En el medio de las reglas D está **DAP** y su variante con descarga, **DPU**. Las cuatro sirven para cualquier modo de transporte, y en el MERCOSUR son muy frecuentes con camión.",
          },
          {
            type: "table",
            headers: ["Regla", "Entrega y riesgo", "Flete principal", "Descarga en destino", "Aduana expo", "Aduana impo"],
            rows: [
              ["**EXW**", "En el local del vendedor, a disposición del comprador, **sin cargar**", "Comprador", "Comprador", "**Comprador**", "Comprador"],
              ["**DAP**", "En destino, sobre el medio de transporte, **lista para descargar**", "Vendedor", "Comprador", "Vendedor", "**Comprador**"],
              ["**DPU**", "En destino, **descargada**", "Vendedor", "**Vendedor**", "Vendedor", "**Comprador**"],
              ["**DDP**", "En destino, lista para descargar y **despachada a plaza**", "Vendedor", "Comprador", "Vendedor", "**Vendedor** (paga aranceles, IVA, etc.)"],
            ],
            caption: "En ninguna de las cuatro hay obligación de asegurar; cada parte asegura por interés propio. Fuente: ICC, Incoterms® 2020.",
          },
          { type: "tool", toolId: "incoterms-visualizer" },
        ],
      },
      {
        heading: "EXW: en fábrica",
        blocks: [
          {
            type: "p",
            text: "**EXW** (*Ex Works*) es la mínima obligación del vendedor: solo pone la mercadería **a disposición del comprador en su local**, sin cargarla en el vehículo y sin despachar la exportación. El vendedor apenas tiene que colaborar con información para que el comprador haga los trámites. Todo lo demás (carga, flete, exportación, importación, seguro) es del comprador.",
          },
          {
            type: "callout",
            tone: "uy",
            title: "El problema de EXW en Uruguay",
            text: "En Uruguay el exportador ante la DNA tiene que ser alguien con **RUT registrado**, y un comprador extranjero normalmente no puede despachar una exportación en Uruguay. Si pactás EXW, ¿quién hace el DUA de exportación? En los papeles, el comprador; en la práctica, no puede. Por eso la ICC sugiere **FCA en lugar de EXW** cuando hay una exportación de por medio.",
          },
          {
            type: "list",
            items: [
              "**Uso en Uruguay:** compras domésticas o cotizaciones “precio de fábrica”. Para exportar desde Uruguay casi nunca conviene.",
              "**Error típico:** pactar EXW y esperar que el vendedor cargue el camión o haga el DUA de exportación. EXW no lo obliga a ninguna de las dos cosas.",
              "**En la importación uruguaya:** si compraste EXW, para el valor en aduana el despachante suma el traslado y la carga en origen hasta el embarque, más el flete y el seguro.",
            ],
          },
          {
            type: "eli5",
            text: "EXW es “vení a buscar el juguete a mi casa: te lo dejo en la puerta y vos hacés todo lo demás”. Ni siquiera te ayudo a subirlo al auto.",
          },
        ],
      },
      {
        heading: "DAP: entregada en lugar",
        blocks: [
          {
            type: "p",
            text: "**DAP** (*Delivered at Place*) significa que el vendedor asume costo y riesgo **hasta el lugar de destino convenido**, donde entrega la mercadería sobre el medio de transporte, **lista para descargar**. No descarga y **no despacha la importación**: los tributos y el trámite en destino son del comprador.",
          },
          {
            type: "example",
            title: "Camión al MERCOSUR",
            text: "Una fábrica uruguaya vende envases a Paraguay DAP depósito del cliente en Asunción. Contrata el camión, despacha la exportación en Uruguay, paga el flete y corre con el riesgo hasta que el camión llega al depósito del cliente. El cliente descarga y hace la importación en Paraguay. En el MERCOSUR también se usa DAP con un punto de frontera, por ejemplo “DAP Paso de los Libres”.",
          },
          {
            type: "callout",
            tone: "warn",
            title: "Error típico con DAP",
            text: "Que el comprador **no tenga lista la importación** y el camión quede retenido en destino. Mientras tanto corren estadías del camión y demoras de contenedor, y las dos partes discuten quién las paga. En la pro-forma conviene aclarar cuántas horas libres de espera hay y quién paga después.",
          },
        ],
      },
      {
        heading: "DPU: entregada en lugar descargada",
        blocks: [
          {
            type: "p",
            text: "**DPU** (*Delivered at Place Unloaded*) es igual a DAP pero con un paso más: el vendedor **descarga** la mercadería en el lugar de destino. Es el **único Incoterm en el que la descarga en destino es obligación del vendedor**. Reemplazó en 2020 a DAT (*Delivered at Terminal*); la diferencia es que ahora el lugar puede ser cualquiera, no solo una terminal.",
          },
          {
            type: "list",
            items: [
              "**Cuándo tiene sentido:** cuando el vendedor tiene cómo descargar en destino o lo contrata a buen precio (por ejemplo, el transportista trae su propia grúa).",
              "**Error típico:** elegir DPU cuando el vendedor no tiene cómo descargar en destino, por ejemplo porque no hay autoelevador en el depósito del comprador.",
            ],
          },
          {
            type: "eli5",
            text: "DAP es que el delivery te deje la heladera en la puerta, arriba del camión. DPU es que además te la bajen y la dejen en el piso. Con DDP, encima, te pagan los impuestos de la heladera.",
          },
        ],
      },
      {
        heading: "DDP: entregada con derechos pagados",
        blocks: [
          {
            type: "p",
            text: "**DDP** (*Delivered Duty Paid*) es la máxima obligación del vendedor: entrega en destino, lista para descargar y **despachada a plaza**. Es decir, el vendedor también hace el **trámite de importación** en el país del comprador y paga sus tributos, incluido el **IVA de importación**.",
          },
          {
            type: "table",
            headers: ["Riesgo de DDP", "Por qué"],
            rows: [
              ["El vendedor necesita alguien habilitado para importar en destino", "Un exportador uruguayo no puede ser importador en Brasil o en Chile si no tiene una filial o un representante registrado allá."],
              ["El vendedor paga un IVA que quizás no recupera", "El IVA de importación es crédito fiscal para un contribuyente local, pero un vendedor extranjero normalmente no puede descontarlo."],
              ["El vendedor asume trámites que no controla", "Permisos previos, clasificación y canales de la aduana de destino."],
            ],
          },
          {
            type: "list",
            items: [
              "**Uso típico:** e-commerce y empresas con filial en destino.",
              "**En la importación uruguaya:** si la factura dice DDP Montevideo, para el valor en aduana el despachante tiene que **restar** los gastos posteriores a la llegada, incluidos los tributos.",
            ],
          },
          {
            type: "eli5",
            text: "DDP es “te llevo el juguete hasta tu cuarto, pago el taxi y hasta el peaje”. Vos solo abrís la puerta.",
          },
        ],
      },
      {
        heading: "Comparación rápida para decidir",
        blocks: [
          {
            type: "table",
            headers: ["Pregunta", "EXW", "DAP", "DPU", "DDP"],
            rows: [
              ["¿Quién carga en origen?", "Comprador", "Vendedor", "Vendedor", "Vendedor"],
              ["¿Quién hace la aduana de exportación?", "Comprador", "Vendedor", "Vendedor", "Vendedor"],
              ["¿Quién paga el flete principal?", "Comprador", "Vendedor", "Vendedor", "Vendedor"],
              ["¿Quién descarga en destino?", "Comprador", "Comprador", "Vendedor", "Comprador"],
              ["¿Quién hace la aduana de importación?", "Comprador", "Comprador", "Comprador", "Vendedor"],
            ],
          },
          {
            type: "callout",
            tone: "tip",
            title: "Truco para el examen",
            text: "Si te preguntan “¿en qué regla el vendedor descarga?”, la respuesta es DPU. Si te preguntan “¿en qué regla el vendedor paga el IVA de importación?”, es DDP. Si te preguntan “¿en qué regla el comprador hace la aduana de exportación?”, es EXW.",
          },
        ],
      },
    ],
    eli5: [
      {
        concept: "EXW",
        text: "Te dejo el juguete en la puerta de mi casa. Subirlo al auto, llevarlo y todos los trámites son cosa tuya.",
      },
      {
        concept: "DAP",
        text: "El delivery te deja la heladera arriba del camión en la puerta de tu casa. Bajarla y pagar los impuestos te toca a vos.",
      },
      {
        concept: "DPU",
        text: "El delivery te baja la heladera y la deja en el piso. Es el único que te la baja.",
      },
      {
        concept: "DDP",
        text: "Te llevo el juguete hasta tu cuarto, pago el taxi y hasta el peaje. Vos solo abrís la puerta.",
      },
    ],
    keyPoints: [
      "EXW es la mínima obligación: el vendedor no carga ni despacha la exportación.",
      "En Uruguay EXW es problemático para exportar, porque el exportador ante la DNA debe tener RUT; la ICC sugiere FCA.",
      "DAP: el vendedor entrega en destino lista para descargar, sin despachar la importación.",
      "DPU (ex DAT) es el único Incoterm en que el vendedor descarga en destino.",
      "DDP: el vendedor despacha y paga la importación en destino, incluido el IVA, que muchas veces no puede recuperar.",
      "En ninguna de las cuatro hay obligación de asegurar.",
      "Si se importa a Uruguay en DAP, DPU o DDP, para el valor en aduana se restan los gastos posteriores a la llegada.",
    ],
    probableQuestions: [
      { question: "¿En qué Incoterm el vendedor está obligado a descargar en destino?", answer: "En DPU, el único con descarga a cargo del vendedor." },
      { question: "En DDP, ¿quién paga el IVA de importación?", answer: "El vendedor, porque DDP incluye el despacho y los tributos de importación." },
      { question: "¿Por qué EXW no conviene para exportar desde Uruguay?", answer: "Porque obliga al comprador a hacer la exportación, y el exportador ante la DNA tiene que tener RUT; un comprador extranjero normalmente no puede. La ICC sugiere FCA." },
      { question: "¿Qué Incoterm reemplazó a DAT?", answer: "DPU. Además el lugar ya no tiene que ser una terminal." },
      { question: "Diferencia entre DAP y DDP.", answer: "En los dos el vendedor lleva la mercadería hasta destino, pero en DAP la importación la hace y paga el comprador y en DDP la hace y paga el vendedor." },
      { question: "¿Qué riesgo práctico tiene DAP?", answer: "Que el comprador no tenga lista la importación y el camión quede retenido, generando estadías y demoras que las partes discuten." },
      { question: "¿Cuál es el principal riesgo de DDP para el vendedor?", answer: "No poder actuar como importador en el país de destino y pagar un IVA de importación que no puede recuperar." },
    ],
    sources: [SRC_ICC, SRC_OD2003, SRC_OP_ENTRADA, SRC_MAERSK_DEM],
  },

  // ---------------------------------------------------------------- p02-s5
  {
    id: "p02-s5",
    moduleId: "p02",
    title: "Elegir el Incoterm correcto y errores frecuentes",
    summary:
      "Saber las once reglas no alcanza: en una oficina te van a pedir que recomiendes una. Acá tenés un método para elegir y la lista de errores que más plata hacen perder.",
    minutes: 15,
    sections: [
      {
        heading: "Un método en cinco preguntas",
        blocks: [
          {
            type: "p",
            text: "No existe “el mejor Incoterm”. Existe el que mejor encaja con el modo de transporte, con quién controla mejor la logística, con el medio de pago y con quién puede hacer los trámites aduaneros. Este método te sirve tanto para asesorar a un exportador como a un importador.",
          },
          {
            type: "steps",
            items: [
              { title: "¿Cómo viaja la mercadería?", text: "Si es aéreo, terrestre o en contenedor, descartá FAS, FOB, CFR y CIF. Si es granel o carga convencional por barco, las cuatro marítimas son una opción válida." },
              { title: "¿Quién consigue mejor flete y controla mejor la logística?", text: "Si es el comprador (tiene forwarder, volumen, contratos), conviene una regla F (FCA, FOB). Si es el vendedor, una regla C (CPT, CIP, CFR, CIF) o D." },
              { title: "¿Quién puede hacer cada aduana?", text: "La exportación la tiene que hacer alguien habilitado en el país de origen y la importación, alguien habilitado en destino. Eso descarta EXW para exportar desde Uruguay y DDP si el vendedor no tiene cómo importar en destino." },
              { title: "¿Cómo se paga?", text: "Con carta de crédito, el banco suele pedir un B/L “a bordo” y, si el seguro lo pone el vendedor, la póliza por el 110 %. FCA con B/L a bordo pactado, CIF o CIP encajan bien." },
              { title: "¿Quién asegura y con qué cobertura?", text: "Solo CIF (ICC C) y CIP (ICC A) obligan a asegurar. En las demás, decidí expresamente quién asegura el tramo en el que corre con el riesgo." },
            ],
          },
          { type: "tool", toolId: "incoterms-visualizer" },
        ],
      },
      {
        heading: "Qué reglas sirven para cada modo",
        blocks: [
          {
            type: "table",
            headers: ["Modo", "Reglas aptas", "Comentario"],
            rows: [
              ["**Marítimo / fluvial**", "Las 11. FAS, FOB, CFR y CIF son exclusivas de este modo.", "Para **contenedores**, las preferidas son FCA, CPT y CIP. FAS, FOB, CFR y CIF quedan para granel o carga convencional."],
              ["**Aéreo**", "EXW, FCA, CPT, CIP, DAP, DPU, DDP", "Nunca FOB, CFR ni CIF."],
              ["**Terrestre** (camión, ferrocarril)", "EXW, FCA, CPT, CIP, DAP, DPU, DDP", "En el MERCOSUR son habituales FCA, CPT y DAP con frontera, por ejemplo “DAP Paso de los Libres”."],
              ["**Multimodal**", "Las siete de cualquier modo", "—"],
            ],
            caption: "Fuente: investigación del módulo sobre Incoterms 2020 (ICC).",
          },
          {
            type: "eli5",
            text: "Las reglas marítimas son como zapatos de fútbol: buenísimos en la cancha, pero si los usás para correr en la calle te resbalás. Para contenedores y aviones, ponete las zapatillas (FCA, CPT, CIP).",
          },
        ],
      },
      {
        heading: "Los errores que más plata cuestan",
        blocks: [
          {
            type: "table",
            headers: ["Error", "Qué pasa", "Cómo se corrige"],
            rows: [
              ["**FOB con contenedores**", "El vendedor sigue corriendo el riesgo días después de entregar el contenedor en la terminal, en un tramo que no controla.", "Usar FCA con la terminal o el depósito como lugar de entrega."],
              ["**“FOB Aeropuerto de Carrasco”**", "Es una regla inexistente para aéreo; genera dudas sobre dónde pasa el riesgo.", "Usar FCA Terminal de Cargas, Aeropuerto de Carrasco."],
              ["**CIF creyendo que es “todo riesgo”**", "La cobertura mínima ICC (C) no cubre, por ejemplo, mojadura o robo.", "Pactar cobertura mayor o usar CIP, que exige ICC (A)."],
              ["**CFR sin seguro del comprador**", "El riesgo del viaje es del comprador y nadie aseguró.", "El comprador contrata su propia póliza."],
              ["**CPT o CFR creyendo que el vendedor responde en el viaje**", "Como el vendedor pagó el flete, el comprador le reclama un daño que es suyo.", "Recordar los dos puntos críticos: costo hasta destino, riesgo en origen."],
              ["**EXW para exportar desde Uruguay**", "Nadie puede hacer el DUA de exportación: el comprador extranjero no tiene RUT.", "Usar FCA."],
              ["**FCA sin precisar el lugar**", "No se sabe si el vendedor carga o si no descarga.", "Indicar la dirección exacta y si es el local del vendedor o un tercero."],
              ["**DAP sin importación lista**", "El camión espera en destino y corren estadías y demoras.", "Coordinar el despacho del comprador antes de la llegada y pactar las horas libres."],
              ["**DPU sin medios de descarga**", "El vendedor no puede cumplir su obligación de descargar.", "Elegir DAP o asegurarse de contar con la descarga."],
              ["**DDP sin poder importar en destino**", "El vendedor no puede despachar o paga un IVA que no recupera.", "Usar DAP o actuar mediante una filial registrada."],
              ["**No indicar la versión**", "Si se escribe solo “FOB”, se presta a discusión qué edición rige.", "Agregar siempre “Incoterms® 2020”."],
            ],
          },
          {
            type: "callout",
            tone: "warn",
            title: "Coherencia entre documentos",
            text: "El Incoterm tiene que ser el mismo en la pro-forma, la factura comercial, el B/L (prepaid o collect) y la póliza de seguro. Si la factura dice CIF pero el B/L dice *freight collect*, alguien se equivocó y en la aduana o en el banco te lo van a observar.",
          },
        ],
      },
      {
        heading: "El seguro, explicado de una vez",
        blocks: [
          {
            type: "p",
            text: "Las **Institute Cargo Clauses** (ICC, edición 2009) son las cláusulas estándar de seguro de carga. Tienen tres niveles, y los Incoterms 2020 usan dos de ellos como mínimo obligatorio.",
          },
          {
            type: "table",
            headers: ["Cláusula", "Alcance", "Ejemplo cubierto", "Ejemplo no cubierto"],
            rows: [
              ["**ICC (A)**", "“Todo riesgo” con exclusiones", "Robo, mojadura, rotura en la manipulación", "Vicio propio, embalaje insuficiente, demora"],
              ["**ICC (B)**", "Riesgos nombrados, intermedio", "Además de los de (C): terremoto, entrada de agua de mar o de río", "Robo, rotura común"],
              ["**ICC (C)**", "Riesgos nombrados, mínimo", "Incendio, explosión, varada, hundimiento, colisión, avería gruesa, echazón", "Daños por agua, desastres naturales"],
            ],
            caption: "Fuente: Ship4wd, Institute Cargo Clauses.",
          },
          {
            type: "eli5",
            text: "El seguro A cubre casi todo; el B cubre una lista de desastres grandes; el C cubre solo los desastres más gordos. Más cobertura, más caro. CIF te da el C; CIP te da el A.",
          },
        ],
      },
      {
        heading: "Casos para practicar",
        blocks: [
          {
            type: "example",
            title: "Importador de Montevideo que compra en China por barco",
            text: "Una empresa de Montevideo importa un contenedor de 40′ de bazar desde Ningbo y tiene un forwarder de confianza con buena tarifa. El proveedor le ofrece FOB Ningbo. ¿Qué conviene? Como el comprador controla el flete, una regla F tiene sentido. Pero es un **contenedor**, así que lo correcto es **FCA** con la terminal o el depósito de Ningbo como lugar de entrega. Para el valor en aduana, el despachante va a sumar al precio el flete hasta Montevideo y el seguro.",
          },
          {
            type: "example",
            title: "Exportador de soja a granel",
            text: "Un exportador vende soja a granel que se carga directo en la bodega del buque en Nueva Palmira, y el comprador fleta el buque. Acá **FOB Nueva Palmira** es correcto: la carga se entrega a bordo, no hay contenedor y el comprador controla el flete.",
          },
          {
            type: "example",
            title: "Envío urgente aéreo con carta de crédito",
            text: "Un laboratorio exporta por Carrasco y cobra con carta de crédito que exige seguro. **CIP aeropuerto de destino**: el laboratorio paga flete y seguro ICC (A) por el 110 %, y presenta la póliza y la guía aérea al banco.",
          },
          {
            type: "callout",
            tone: "uy",
            title: "Pensá también en el DUA",
            text: "Cuando asesores a un importador uruguayo, recordá que el Incoterm de la factura se declara en el DUA (en la factura asociada) y define qué hay que sumar o restar para llegar al valor CIF. Un Incoterm mal elegido no solo genera discusiones con el proveedor: también puede generar un valor en aduana mal armado.",
          },
        ],
      },
    ],
    eli5: [
      {
        concept: "Elegir un Incoterm",
        text: "Es como decidir quién organiza el viaje de egresados: conviene que lo haga el que tiene contactos con la agencia. Si el comprador tiene el mejor forwarder, que el flete sea suyo.",
      },
      {
        concept: "Reglas marítimas vs. multimodales",
        text: "Las marítimas son zapatos de fútbol: geniales en la cancha (granos, troncos), malos en la calle (contenedores, aviones). Para eso están FCA, CPT y CIP, las zapatillas.",
      },
      {
        concept: "Coherencia de documentos",
        text: "Si en la invitación dice que la fiesta es en tu casa y en el grupo de WhatsApp dice que es en el club, nadie sabe adónde ir. Factura, B/L y póliza tienen que decir lo mismo.",
      },
      {
        concept: "Seguro A, B y C",
        text: "El A es un piloto con botas, el B es un impermeable común y el C es un paraguas chiquito. Todos protegen, pero no de lo mismo.",
      },
    ],
    keyPoints: [
      "Elegí el Incoterm según modo de transporte, quién controla el flete, quién puede hacer cada aduana, cómo se paga y quién asegura.",
      "Para contenedores y aéreo se usan FCA, CPT o CIP; FAS, FOB, CFR y CIF quedan para granel y carga convencional.",
      "Solo CIF (ICC C) y CIP (ICC A) obligan a asegurar, siempre por al menos el 110 %.",
      "Errores clásicos: FOB con contenedores, FOB en aeropuerto, CIF como “todo riesgo”, EXW para exportar, DDP sin poder importar.",
      "El Incoterm tiene que coincidir en pro-forma, factura, documento de transporte y póliza.",
      "En la importación uruguaya, el Incoterm define qué se suma o resta para llegar al valor CIF del DUA.",
    ],
    probableQuestions: [
      { question: "Un cliente quiere exportar en contenedor y dice “vendo FOB Montevideo”. ¿Qué le recomendás?", answer: "Pasar a FCA con la terminal o el depósito como lugar de entrega, porque con FOB el riesgo queda en el vendedor hasta que el contenedor sube al buque. Si necesita B/L a bordo para la carta de crédito, en FCA 2020 se puede pactar." },
      { question: "¿Qué Incoterms obligan a contratar seguro?", answer: "Solo CIF (cobertura mínima ICC C) y CIP (ICC A), en ambos casos por al menos el 110 % del valor del contrato." },
      { question: "¿Qué Incoterms se usan en el comercio por camión en el MERCOSUR?", answer: "Habitualmente FCA, CPT y DAP, a veces con un punto de frontera." },
      { question: "¿Qué cubre el ICC (A) que no cubre el ICC (C)?", answer: "Riesgos como robo, mojadura y rotura en la manipulación. El C cubre solo riesgos mayores nombrados." },
      { question: "La factura dice CIF y el B/L dice freight collect. ¿Qué pasa?", answer: "Hay una incoherencia: en CIF el flete lo paga el vendedor y el B/L debería decir freight prepaid. Hay que aclararlo antes de presentar los documentos." },
      { question: "¿Qué Incoterm proponés para un importador uruguayo con buen forwarder que compra un contenedor en China?", answer: "FCA, con la terminal o el depósito de origen como lugar de entrega." },
      { question: "¿Cuándo es correcto usar FOB?", answer: "Para carga a granel o convencional que se entrega a bordo de un buque, cuando el comprador contrata el flete marítimo." },
    ],
    sources: [SRC_ICC, SRC_SHIP4WD, SRC_OD2003, SRC_OP_ENTRADA],
  },
]
