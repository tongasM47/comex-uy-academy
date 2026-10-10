import type { Subtopic } from '../types'

export const p07Lessons: Subtopic[] = [
  // ─────────────────────────────────────────────────────────────
  {
    id: "p07-s1",
    moduleId: "p07",
    title: "Admisión temporaria: Ley 18.184 y Decreto 505/009",
    summary:
      "Qué es la admisión temporaria (AT), por qué una industria exportadora la usa para no inmovilizar plata en tributos y cuáles son las normas que la regulan. Es uno de los regímenes que más se trabajan en un despachante que atiende industrias.",
    minutes: 16,
    sections: [
      {
        heading: "La idea central: importar sin pagar, con la condición de volver a sacar",
        blocks: [
          {
            type: "p",
            text:
              "Cuando una empresa importa algo para quedárselo en Uruguay hace una **importación definitiva**: paga arancel, IVA de importación, anticipo de IVA, tasa consular y las tasas de la aduana. Pero hay industrias que importan insumos solo para transformarlos y volver a venderlos afuera. Una confección que compra tela en China para hacer camisas que vende a Chile, por ejemplo. Si esa empresa tuviera que pagar todos los tributos al importar la tela, estaría poniendo plata en impuestos que no tienen sentido, porque el producto final ni siquiera se va a consumir en Uruguay.",
          },
          {
            type: "p",
            text:
              "Para eso existe la **admisión temporaria (AT)**: un régimen que permite **ingresar mercadería extranjera sin pagar los tributos de importación**, con la condición de que **vuelva a salir del país dentro de un plazo**, ya sea **transformada** (con valor agregado y uso efectivo de mano de obra) o **en el mismo estado** en que entró.",
          },
          {
            type: "p",
            text:
              "Es un régimen **suspensivo**. La palabra es clave: los tributos no se perdonan, quedan *en suspenso*. Si la mercadería sale como corresponde, nunca se pagan. Si no sale, hay que pagarlos (eso se llama **nacionalizar**, o sea, pasar a importación definitiva) o, si se hizo mal, vienen las sanciones.",
          },
          {
            type: "eli5",
            text:
              "Es como cuando un amigo de otro barrio te presta su pelota para el partido del sábado. Te la deja usar gratis, con una condición: se la devolvés (o le devolvés lo que hiciste con ella) antes de cierta fecha. Si decidís quedártela, se la tenés que pagar. Y si la vendés a escondidas, te metés en un lío.",
          },
          {
            type: "example",
            title: "Cuánta plata deja de inmovilizar una industria",
            text:
              "Una confección de Montevideo importa tela por un valor CIF de US$ 50.000. Supongamos (dato inventado para el ejemplo) que la tela tiene un arancel del 10 %. En una importación definitiva pagaría: arancel US$ 5.000; tasa consular 5 % = US$ 2.500; IVA 22 % sobre (CIF + arancel = US$ 55.000) = US$ 12.100; anticipo de IVA 10 % sobre la misma base = US$ 5.500. Total: **US$ 25.100**. Con la AT esa suma queda en suspenso. Paga solo las tasas de servicio (por ejemplo, la tasa de servicios aduaneros, que es 0,2 % del CIF con tope de US$ 50). Son US$ 25.100 que la empresa puede usar como capital de trabajo mientras fabrica y exporta.",
          },
          {
            type: "callout",
            tone: "info",
            title: "¿Y el IVA no se recupera igual?",
            text:
              "Parte sí, más adelante, vía crédito fiscal. Pero recuperar lleva meses y trámites; no pagarlo desde el arranque es mucho mejor para la caja. Esa es la ventaja financiera que vas a escuchar en cualquier oficina de comex: **la AT mejora el capital de trabajo y la competitividad del exportador**.",
          },
        ],
      },
      {
        heading: "Las dos admisiones temporarias del Código Aduanero",
        blocks: [
          {
            type: "p",
            text:
              "El **Código Aduanero de la República Oriental del Uruguay (CAROU, Ley 19.276)** enumera en su artículo 64 los regímenes de importación. Ahí aparecen **dos** admisiones temporarias distintas, que conviene no mezclar:",
          },
          {
            type: "table",
            headers: ["", "AT para reexportación en el mismo estado", "AT para perfeccionamiento activo"],
            rows: [
              ["Artículos del CAROU", "81 a 83", "84 a 88"],
              ["¿Se transforma la mercadería?", "No. Sale igual, con el desgaste normal por uso", "Sí. Se elabora, transforma o repara"],
              ["Ejemplos", "Equipos para una obra, bienes para una feria, maquinaria arrendada", "Tela para camisas, químicos para curtir cueros"],
              ["Quién autoriza en la práctica", "Asesoría de Política Comercial (APC) del MEF, por VUCE", "LATU, bajo la órbita del MIEM (régimen de la Ley 18.184)"],
              ["Código de régimen en el DUA (casilla A1)", "20", "21"],
            ],
            caption: "Los códigos 20 y 21 figuran en el instructivo de la DNA para el DUA de importación.",
          },
          {
            type: "p",
            text:
              "En esta lección nos concentramos en la segunda, la **AT industrial o de perfeccionamiento activo**, que es la que regula la Ley 18.184 y su decreto reglamentario, el 505/009. La AT “de régimen general” (mismo estado) la ves en la lección de otros regímenes.",
          },
          { type: "doc", docId: "dua" },
        ],
      },
      {
        heading: "Ley 18.184 (2007): tres herramientas para la industria exportadora",
        blocks: [
          {
            type: "p",
            text:
              "La **Ley 18.184**, del 27/10/2007, crea en su artículo 1 tres mecanismos de promoción industrial. Los pueden usar los titulares de actividades industriales. Los tres buscan lo mismo (que el exportador no cargue con tributos de insumos importados), pero en distinto momento:",
          },
          {
            type: "table",
            headers: ["Mecanismo", "Qué hace", "Ejemplo"],
            rows: [
              ["**A) Admisión temporaria**", "El insumo entra **sin pagar** tributos, se transforma y se exporta", "Importar tela para confeccionar camisas que se exportan"],
              ["**B) Toma de stock**", "La empresa ya usó insumos importados **pagando** tributos para algo que exportó; después **repone** una cantidad equivalente **sin tributos**", "Curtiembre que exportó usando químicos nacionalizados y repone el stock exento"],
              ["**C) Draw back**", "Se **devuelven** los tributos que se pagaron al importar insumos que después se incorporaron a un producto exportado", "Se pagó arancel e IVA, se exportó y se pide la devolución"],
            ],
          },
          {
            type: "eli5",
            text:
              "Pensá en lápices para hacer dibujos que vendés afuera. Con la **AT**, el kiosco te fía los lápices sin impuesto porque sabe que los dibujos se van del país. Con la **toma de stock**, ya usaste lápices tuyos (que pagaste con impuesto) y el Estado te deja reponerlos sin impuesto. Con el **draw back**, pagaste el impuesto y después te devuelven la plata.",
          },
          {
            type: "p",
            text: "Los artículos de la ley que más se preguntan son estos:",
          },
          {
            type: "table",
            headers: ["Art.", "Qué dice (en palabras simples)"],
            rows: [
              ["2", "El plazo de la operación es de **18 meses, perentorio**. En casos excepcionales y justificados se puede **prorrogar una sola vez, hasta 18 meses más**."],
              ["3", "El contralor lo hace el **MIEM** (Ministerio de Industria, Energía y Minería), con intervención técnico-administrativa del **LATU**, sin perjuicio de lo que hagan la **DNA** (Dirección Nacional de Aduanas) y la **DGI**."],
              ["4", "El MIEM puede sancionar con **apercibimiento o multa de hasta el 100 % del valor CIF** de la mercadería involucrada."],
              ["5", "**Vender en plaza** mercadería en AT sin haberla importado definitivamente es infracción (hoy, desvío de exoneraciones del CAROU)."],
              ["8", "Se puede **transferir** mercadería en AT entre empresas autorizadas, con informe del LATU y autorización del MIEM; conserva el vencimiento original."],
              ["9-10", "Responde la empresa titular; exportadores e intermediarios son solidarios; **directores y administradores responden personal y solidariamente**."],
              ["11", "La AT también sirve para **maquinaria y equipos** que entran a reparación, mantenimiento o reacondicionamiento."],
            ],
          },
        ],
      },
      {
        heading: "Decreto 505/009: la reglamentación que se usa todos los días",
        blocks: [
          {
            type: "p",
            text:
              "La ley pone las reglas grandes; el **Decreto 505/009**, del 03/11/2009, baja todo a tierra. Si en el programa del curso leés “**Decreto 505/009 LATU**”, se refiere a esto: el decreto que reglamenta la Ley 18.184 y que le da al **LATU (Laboratorio Tecnológico del Uruguay)** el papel de contralor técnico de las operaciones. Sin autorización del LATU, la DNA no le da curso a un DUA de AT.",
          },
          {
            type: "list",
            items: [
              "**Qué puede entrar en AT (art. 2):** materias primas e insumos intermedios; partes, piezas, motores y equipos; envases; matrices, moldes y modelos; consumibles que se usan en producción o control de calidad; soporte informático; maquinaria para reparación o reacondicionamiento.",
              "**Qué queda excluido (art. 40):** metales y piedras preciosas, materias primas para explosivos y bienes con controles especiales de importación.",
              "**Quién no puede pedirla (art. 39):** empresas suspendidas o inhabilitadas por la DGI, el BPS o la DNA. Lo mismo vale para los talleres que trabajan a façón.",
            ],
          },
          {
            type: "table",
            headers: ["Plazo o regla", "Qué dice", "Artículo"],
            rows: [
              ["Plazo de la operación", "**18 meses** contados desde la **autorización del LATU**", "Dec. 505/009 art. 4; Ley art. 2"],
              ["Prórroga", "**Una sola**, hasta 18 meses, excepcional y justificada", "art. 4"],
              ["Cuándo pedir la prórroga", "**Al menos 90 días antes** del vencimiento, ante el LATU", "art. 4"],
              ["Silencio de la Administración", "Si en **60 días** no hay respuesta, la prórroga se considera **denegada**", "art. 4"],
              ["Nacionalizar en los primeros 12 meses", "Tributos según la fecha de numeración del DUA de AT", "art. 8"],
              ["Nacionalizar en los últimos 6 meses", "Excepcional: autorización previa del MIEM, canal rojo y tributos a la fecha de la importación definitiva", "art. 9"],
            ],
          },
          {
            type: "callout",
            tone: "warn",
            title: "Ojo con el punto de partida",
            text:
              "Los 18 meses **no** se cuentan desde que llega el barco ni desde la primera exportación: se cuentan desde la **autorización del LATU**. Es una pregunta clásica de examen y un error caro en la oficina.",
          },
          {
            type: "eli5",
            text:
              "El LATU es como el árbitro de un partido de truco con porotos: anota cuántos porotos (metros de tela) te dieron al principio y cuántas manos (camisas) jugaste, para que al final no te quede ningún poroto escondido en el bolsillo.",
          },
        ],
      },
      {
        heading: "Paso a paso de una AT industrial",
        blocks: [
          {
            type: "steps",
            items: [
              { title: "Empresa habilitada", text: "La industria tiene planta aprobada y está al día con DGI, BPS y DNA." },
              { title: "Solicitud ante el LATU", text: "Indica el insumo, la cantidad, el producto que va a exportar y el **consumo específico** (la relación insumo-producto: cuánto insumo lleva cada unidad)." },
              { title: "Autorización del LATU", text: "El LATU autoriza y avisa a la DNA y a la empresa. **Desde acá corren los 18 meses.**" },
              { title: "DUA de importación en AT", text: "El despachante numera el DUA bajo el régimen de AT: no se pagan los tributos de importación, sí las tasas." },
              { title: "Mercadería identificada", text: "En planta, el insumo queda identificado y separado del resto, y se registra por operación." },
              { title: "Producción y exportación", text: "Se fabrica y se exporta con un DUA de exportación que referencia la AT." },
              { title: "Descarga ante el LATU", text: "Se informa cuánto insumo se “descargó” con cada exportación según el coeficiente aprobado." },
              { title: "Cierre", text: "Con saldo cero, el LATU emite el **aviso de cancelación**. Si sobra insumo, se nacionaliza o se reexporta; si se acerca el vencimiento, se pide la prórroga con 90 días de anticipación." },
            ],
          },
          {
            type: "callout",
            tone: "uy",
            title: "Dato de la práctica uruguaya",
            text:
              "Según un estudio del MEF, el LATU estima que entre el **70 % y el 80 %** de las operaciones de AT se cancelan dentro de los 18 meses. O sea: la mayoría cierra en plazo, pero una de cada cuatro o cinco necesita algo más (prórroga, nacionalización o regularización). Ahí es donde un buen asistente de comex se gana el sueldo.",
          },
          {
            type: "p",
            text:
              "Cuando la industria fabrica pero el que exporta es otra empresa (una comercializadora, por ejemplo), el decreto prevé la **entrega sin transferencia de titularidad** a exportadores, talleres de façón e intermediarios (arts. 20-21). Todos ellos quedan como **responsables solidarios**: si algo sale mal, la Administración le puede reclamar a cualquiera.",
          },
        ],
      },
    ],
    eli5: [
      {
        concept: "Admisión temporaria",
        text:
          "Es como pedir prestada una bicicleta para una carrera: no la pagás si la devolvés antes de la fecha acordada. Si te la quedás, la tenés que pagar entera.",
      },
      {
        concept: "Régimen suspensivo",
        text:
          "Es como una cuenta en el almacén del barrio que queda “en pausa”: no pagás hoy, pero el almacenero la tiene anotada. Si cumplís lo acordado, la cuenta se borra; si no, te la cobra con recargo.",
      },
      {
        concept: "Toma de stock",
        text:
          "Usaste la harina que compraste con impuesto para hacer tortas que vendiste a turistas que se las llevaron. El Estado te deja reponer esa harina sin impuesto.",
      },
      {
        concept: "Draw back",
        text:
          "Pagaste la entrada del cine, pero resulta que la película era para otros. Te devuelven la plata en la boletería.",
      },
    ],
    keyPoints: [
      "La AT permite importar sin pagar tributos de importación, con la condición de reexportar dentro de un plazo; es un régimen suspensivo.",
      "El CAROU distingue AT para reexportación en el mismo estado (arts. 81-83) y AT para perfeccionamiento activo (arts. 84-88).",
      "La Ley 18.184 (2007) crea tres mecanismos: admisión temporaria, toma de stock y draw back.",
      "Plazo: 18 meses perentorios desde la autorización del LATU, con una sola prórroga de hasta 18 meses.",
      "La prórroga se pide al menos 90 días antes del vencimiento; el silencio de 60 días equivale a denegatoria.",
      "El Decreto 505/009 reglamenta la ley y le da al LATU el contralor técnico; el MIEM es la autoridad y la DNA y la DGI mantienen sus competencias.",
      "Vender en plaza mercadería en AT sin nacionalizarla es infracción; los directores responden personal y solidariamente.",
    ],
    probableQuestions: [
      { question: "¿Qué es la admisión temporaria?", answer: "Un régimen suspensivo que permite ingresar mercadería extranjera sin pagar tributos de importación, a condición de que salga del país dentro de un plazo, transformada o en el mismo estado." },
      { question: "¿Qué tres mecanismos crea la Ley 18.184?", answer: "Admisión temporaria, toma de stock y draw back (régimen devolutivo)." },
      { question: "¿Cuál es el plazo de una AT industrial y desde cuándo se cuenta?", answer: "18 meses, perentorio, contados desde la autorización del LATU." },
      { question: "¿Se puede prorrogar una AT?", answer: "Sí, una sola vez, hasta 18 meses más, en casos excepcionales y justificados, pidiéndola al menos 90 días antes del vencimiento." },
      { question: "¿Qué pasa si se pide la prórroga y no hay respuesta?", answer: "Si pasan 60 días sin respuesta, se considera denegada." },
      { question: "¿Qué rol tiene el LATU en la AT?", answer: "Es el contralor técnico-administrativo: autoriza las operaciones, controla stock y coeficientes de consumo, inspecciona la planta y emite los avisos de cancelación." },
      { question: "¿Qué bienes no pueden ingresar en AT industrial?", answer: "Metales y piedras preciosas, materias primas para explosivos y bienes con controles especiales de importación (Dec. 505/009 art. 40)." },
      { question: "¿Qué diferencia hay entre AT y draw back?", answer: "En la AT no se pagan los tributos al importar; en el draw back se pagan y después se devuelven cuando el insumo se exportó incorporado a un producto." },
    ],
    sources: [
      { title: "Ley 18.184 – IMPO", url: "https://www.impo.com.uy/bases/leyes/18184-2007" },
      { title: "Decreto 505/009 – IMPO", url: "https://www.impo.com.uy/bases/decretos/505-2009" },
      { title: "CAROU art. 84 – IMPO", url: "https://www.impo.com.uy/bases/codigo-aduanero/19276-2014/84" },
      { title: "CAROU art. 81 – IMPO", url: "https://www.impo.com.uy/bases/codigo-aduanero/19276-2014/81" },
      { title: "MEF – Estudio del régimen de AT industrial", url: "https://www.gub.uy/ministerio-economia-finanzas/sites/ministerio-economia-finanzas/files/documentos/publicaciones/regimen-de-at-industrial.pdf" },
      { title: "DNA – Instructivo de operaciones de entrada (regímenes 20 y 21)", url: "https://www.aduanas.gub.uy/innovaportal/file/7996/1/operaciones_de_entrada_instructivo.pdf" },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  {
    id: "p07-s2",
    moduleId: "p07",
    title: "El LATU, plazos, cancelación y sanciones",
    summary:
      "Cómo se controla una admisión temporaria día a día: el rol del LATU, la “cuenta” de cada operación, los plazos que no perdonan, las formas de cancelarla y lo que pasa si algo sale mal. Es lo que vas a hacer en concreto si te toca llevar las AT de un cliente industrial.",
    minutes: 17,
    sections: [
      {
        heading: "El LATU como contralor técnico",
        blocks: [
          {
            type: "p",
            text:
              "El **LATU (Laboratorio Tecnológico del Uruguay)** es el organismo que, bajo la órbita del **MIEM**, hace el control técnico de las admisiones temporarias industriales. La DNA controla la entrada y la salida por aduana, pero quien sabe si la tela realmente se convirtió en camisas es el LATU. Estas son sus funciones según el Decreto 505/009:",
          },
          {
            type: "table",
            headers: ["Función", "Artículo del Dec. 505/009"],
            rows: [
              ["Recibe y **autoriza** las solicitudes. La DNA no puede darle curso a un DUA de AT sin autorización del LATU", "art. 3"],
              ["Pide datos de exportaciones y stock; la empresa informa sus medios de producción; inspecciona la planta", "arts. 3 y 5"],
              ["Exige que la mercadería esté **identificada y separada** del resto del stock", "art. 6"],
              ["Recibe la información de **cancelación** y emite los avisos de cancelación", "art. 7"],
              ["Autoriza cambios técnicos: nuevo modelo, nuevo insumo o una **mayor relación insumo-producto**", "art. 15"],
              ["Autoriza el trabajo a façón fuera de la planta", "art. 21"],
              ["Su opinión es **vinculante** en las rectificaciones de DUA", "art. 24"],
              ["Fija los requisitos informáticos de registro", "art. 41"],
              ["Hace inspecciones periódicas de stock y de **coeficientes de consumo**", "art. 42"],
            ],
          },
          {
            type: "eli5",
            text:
              "El LATU es como la maestra que controla la merienda compartida: anota cuántos alfajores entraron al aula y cuántos se repartieron. Si al final del día faltan alfajores y nadie sabe dónde están, alguien tiene que dar explicaciones.",
          },
        ],
      },
      {
        heading: "La “cuenta corriente” de cada operación",
        blocks: [
          {
            type: "p",
            text:
              "El artículo 43 del decreto obliga a la empresa a **registrar cada entrada y cada salida por operación**, con un control de stock compatible con los sistemas de la DNA y del LATU. En la práctica, cada AT funciona como una cuenta: entra un saldo de insumo con el DUA de AT y ese saldo se va **descargando** con cada exportación, según el **coeficiente de consumo** aprobado (cuánto insumo lleva cada unidad de producto), hasta llegar a cero.",
          },
          {
            type: "callout",
            tone: "warn",
            title: "Sobre el nombre",
            text:
              "El decreto no usa literalmente la expresión “cuenta corriente”; es un término de uso profesional. Si te lo preguntan en una entrevista, explicá el concepto y aclará que conviene confirmar la terminología exacta que usa hoy el sistema informático del LATU.",
          },
          {
            type: "example",
            title: "Llevando la cuenta de una AT de tela",
            text:
              "Una confección importa **12.000 m** de tela en AT, con un CIF de **US$ 60.000** (US$ 5 por metro). El LATU aprobó un consumo de **1,5 m por prenda**. En los primeros meses exporta **7.000 prendas**: descarga 7.000 × 1,5 = **10.500 m**. Saldo de la cuenta: 12.000 − 10.500 = **1.500 m**, que valen 1.500 × 5 = **US$ 7.500 CIF**. Ese saldo es lo que tiene que cancelar antes del vencimiento: exportando más prendas, nacionalizándolo o reexportándolo.",
          },
          {
            type: "eli5",
            text:
              "Es como la tarjeta del ómnibus: le cargás 12 viajes y cada vez que subís te descuenta uno. El LATU mira que al final la tarjeta quede en cero y que cada viaje descontado haya sido de verdad.",
          },
        ],
      },
      {
        heading: "Los plazos que no perdonan",
        blocks: [
          {
            type: "p",
            text:
              "El plazo de **18 meses** de la Ley 18.184 es **perentorio**: se vence solo, sin que nadie te avise. Por eso en cualquier despachante o departamento de comex serio hay una planilla de vencimientos de AT con alertas. Lo que hay que mirar:",
          },
          {
            type: "steps",
            items: [
              { title: "Fecha de autorización del LATU", text: "Es el día cero. Desde ahí, 18 meses." },
              { title: "Ventana de prórroga", text: "La prórroga se pide **al menos 90 días antes** del vencimiento. Si la AT vence el 01/09/2026, el último día cómodo para pedirla es el 03/06/2026." },
              { title: "Mes 12", text: "Hasta acá, si querés nacionalizar parte del saldo, los tributos se calculan según la fecha del DUA de AT (art. 8)." },
              { title: "Meses 13 a 18", text: "Nacionalizar pasa a ser excepcional: autorización previa del MIEM, canal rojo y tributos a la fecha de la importación definitiva (art. 9)." },
              { title: "Vencimiento", text: "Si no se canceló, inspección obligatoria del LATU y la DNA cobra tributos con intereses y multas (arts. 12-13)." },
            ],
          },
          {
            type: "callout",
            tone: "uy",
            title: "Casos reales que muestran el rigor",
            text:
              "**18/06/2025:** una resolución del MIEM y el MEF **denegó** la prórroga de una AT porque la empresa la pidió **fuera de los 90 días**, aunque fue un error involuntario. **09/04/2026:** una resolución del MIEM **concedió** prórroga de 18 meses a dos AT, después del informe de inspección del LATU, el de la Dirección Nacional de Industrias y el de la Asesoría Jurídica. Y en **2020**, por la pandemia, el Decreto 137/020 prorrogó **automáticamente 18 meses** las AT que vencían ese año, una medida excepcional que no hay que tomar como regla.",
          },
          {
            type: "eli5",
            text:
              "Pedir la prórroga es como anotarte al examen de recuperación: hay una fecha límite de inscripción. Si te anotás un día tarde, aunque tengas la mejor excusa, no te dejan rendir.",
          },
        ],
      },
      {
        heading: "Cómo se cancela una AT",
        blocks: [
          {
            type: "p",
            text:
              "**Cancelar** una AT es dejar la cuenta en cero, justificando el destino de todo lo que entró. El Decreto 505/009 (art. 7) prevé estas formas:",
          },
          {
            type: "table",
            headers: ["Forma", "Comentario"],
            rows: [
              ["a) **Exportación** del producto resultante", "La más común. Cuenta la fecha de numeración del DUA de exportación."],
              ["b) **Importación definitiva** (nacionalización)", "Se pagan los tributos que estaban en suspenso."],
              ["c) **Reexportación en el mismo estado**", "Con autorización del MIEM e inspección del LATU y la DNA (salvo envases y moldes, art. 10)."],
              ["d) Faltante por **fuerza mayor**", "Con autorización. El MIEM puede autorizar la baja hasta lo que reconozca el seguro."],
              ["e) **Destrucción o donación** por deterioro", "Bajo control de la DNA, o donación a un organismo público."],
            ],
          },
          {
            type: "p",
            text:
              "El CAROU (art. 88) agrega, para la AT de perfeccionamiento activo en general, la inclusión en otro régimen aduanero, la destrucción bajo control aduanero o el abandono.",
          },
          {
            type: "list",
            items: [
              "**Subproductos y residuos:** no hace falta nacionalizarlos si su valor de plaza **no supera el 5 % del valor CIF** de lo importado; el exceso se exporta o se nacionaliza (Dec. 505/009 art. 44; CAROU art. 86 recoge la misma regla).",
              "**Sobrantes y faltantes:** si están técnicamente justificados, los sobrantes se nacionalizan y los faltantes se regularizan **sin multa**. Si no están justificados, se pagan tributos con intereses y multas desde la fecha del DUA original; si no se regulariza en **30 días**, la empresa puede ser suspendida (art. 14).",
              "**Rectificación de DUA:** hasta 60 días después del vencimiento, si hay saldo y el error está documentado (art. 24).",
            ],
          },
          {
            type: "example",
            title: "¿Hay que nacionalizar los recortes?",
            text:
              "Una AT de tela tuvo un CIF de US$ 60.000. El 5 % es 60.000 × 0,05 = **US$ 3.000**. Si los recortes que quedan valen en plaza US$ 2.400, no hace falta nacionalizarlos. Si valen US$ 3.800, el exceso de US$ 800 se exporta o se nacionaliza.",
          },
        ],
      },
      {
        heading: "Garantías",
        blocks: [
          {
            type: "p",
            text:
              "La Ley 18.184 **no exige** una garantía general para la AT industrial. Pero el Decreto 505/009 sí la pide en dos casos: a empresas **sin planta industrial aprobada** que trabajan con un contrato de servicios con una planta habilitada (art. 22) y a empresas vinculadas a firmas morosas (art. 23). Puede ser un aval bancario, un depósito o un seguro de fianza ante la DNA por los tributos potenciales, y se devuelve cuando el LATU emite el aviso de cancelación. En general, el CAROU (art. 175) admite como garantía efectivo, aval bancario, póliza de seguro u otras modalidades.",
          },
        ],
      },
      {
        heading: "Sanciones: lo que pasa si algo sale mal",
        blocks: [
          {
            type: "table",
            headers: ["Conducta", "Consecuencia"],
            rows: [
              ["**Vender en plaza** mercadería en AT sin nacionalizar", "Multa del MIEM de hasta el **100 % del CIF** del faltante + tributos, intereses y multas; suspensión de hasta 1 año en los regímenes de promoción (Dec. art. 16); infracción de **desvío de exoneraciones** (CAROU art. 208: multa del **doble de los tributos exonerados** + los tributos) y denuncia judicial (Dec. art. 17)"],
              ["No cancelar en plazo", "Inspección obligatoria del LATU; la DNA cobra tributos con intereses y multas (arts. 12-13)"],
              ["Obstaculizar inspecciones", "El LATU puede negar nuevas autorizaciones (art. 42)"],
              ["Responsabilidad de las personas", "Directores y administradores responden **personal y solidariamente** (Dec. art. 37; Ley art. 10)"],
            ],
          },
          {
            type: "p",
            text:
              "Además, cuando el LATU constata una venta en plaza, el MIEM puede **suspender preventivamente** a la empresa en los tres mecanismos de la ley (Ley 18.184 art. 7). Y la DNA tiene que presentar la denuncia judicial dentro de **10 días corridos** (Ley art. 5).",
          },
          {
            type: "callout",
            tone: "tip",
            title: "Cómo lo contás en una entrevista",
            text:
              "“En una carpeta de AT controlaría primero la fecha de autorización del LATU para saber cuándo vence, después el saldo según los consumos aprobados, y por último si estamos cerca de la ventana de 90 días para pedir la prórroga. Lo llevaría en una planilla de vencimientos con alertas.”",
          },
        ],
      },
    ],
    eli5: [
      {
        concept: "Coeficiente de consumo",
        text:
          "Es la receta: para una torta van dos tazas de harina. Si hiciste diez tortas, tuviste que usar veinte tazas. El LATU mira la receta para saber cuánta harina se fue en las tortas que vendiste afuera.",
      },
      {
        concept: "Cancelación de la AT",
        text:
          "Es devolver la llave del salón de fiestas: mostrás que todo lo que te prestaron está devuelto o pagado y te dan el recibo de “todo en orden”.",
      },
      {
        concept: "Prórroga con 90 días de anticipación",
        text:
          "Es como renovar el alquiler: si querés quedarte, tenés que avisar con tiempo. Si avisás el último día, el dueño ya alquiló a otro.",
      },
      {
        concept: "Venta en plaza de mercadería en AT",
        text:
          "Es como vender en la feria la pelota que te prestaron. No era tuya para vender: la tenés que pagar, más una multa, y encima nadie te vuelve a prestar nada.",
      },
    ],
    keyPoints: [
      "El LATU autoriza las AT, controla stock y coeficientes de consumo, inspecciona plantas y emite los avisos de cancelación.",
      "Cada operación se lleva como una cuenta: entra el insumo con el DUA de AT y se descarga con las exportaciones hasta llegar a saldo cero.",
      "Nacionalizar en los primeros 12 meses: tributos a la fecha del DUA de AT; en los últimos 6 meses: autorización previa del MIEM, canal rojo y tributos a la fecha de la importación.",
      "Formas de cancelar: exportación, nacionalización, reexportación en el mismo estado, faltante por fuerza mayor y destrucción o donación.",
      "Los subproductos no se nacionalizan si su valor no supera el 5 % del CIF importado.",
      "Vender en plaza mercadería en AT: multa MIEM de hasta el 100 % del CIF, desvío de exoneraciones (doble de los tributos), suspensión y denuncia judicial.",
      "En 2025 se denegó una prórroga pedida fuera de los 90 días; en 2026 se concedió otra con informes del LATU y del MIEM.",
    ],
    probableQuestions: [
      { question: "¿Qué controla el LATU en una AT?", answer: "Que la mercadería esté identificada y separada, el stock por operación, los coeficientes de consumo, la planta, y recibe la cancelación y emite los avisos correspondientes." },
      { question: "¿Qué significa que el plazo sea perentorio?", answer: "Que vence solo, sin necesidad de intimación; si no se canceló o prorrogó en tiempo, se pierden los beneficios y vienen tributos, intereses y multas." },
      { question: "¿Qué pasa si nacionalizás en el mes 15?", answer: "Es excepcional: necesitás autorización previa del MIEM, va a canal rojo y los tributos se calculan a la fecha de la importación definitiva." },
      { question: "¿Cuáles son las formas de cancelar una AT?", answer: "Exportación del producto, importación definitiva, reexportación en el mismo estado, faltante por fuerza mayor autorizado y destrucción o donación bajo control." },
      { question: "¿Qué pasa con los recortes y subproductos?", answer: "Si su valor de plaza no supera el 5 % del CIF importado no se nacionalizan; el exceso se exporta o se nacionaliza." },
      { question: "¿Cuál es la sanción por vender en plaza un insumo en AT?", answer: "Multa del MIEM de hasta el 100 % del CIF, tributos con intereses, posible suspensión de hasta un año, desvío de exoneraciones (doble de los tributos) y denuncia judicial." },
      { question: "¿Se exige garantía en la AT industrial?", answer: "La ley no la exige en general; el decreto la pide a empresas sin planta aprobada que trabajan con una planta de terceros y a vinculadas con morosos." },
      { question: "¿Quién responde si una AT sale mal?", answer: "La empresa titular; exportadores e intermediarios son solidarios, y los directores y administradores responden personal y solidariamente." },
    ],
    sources: [
      { title: "Decreto 505/009 – IMPO", url: "https://www.impo.com.uy/bases/decretos/505-2009" },
      { title: "Ley 18.184 – IMPO", url: "https://www.impo.com.uy/bases/leyes/18184-2007" },
      { title: "Res. MIEM 2025 (prórroga denegada)", url: "https://medios.presidencia.gub.uy/legal/2025/resoluciones/06/miem_22_161.pdf" },
      { title: "Res. MIEM 2026 (prórroga concedida)", url: "https://medios.presidencia.gub.uy/legal/2026/resoluciones/04/miem_148_69.pdf" },
      { title: "Decreto 137/020 (prórroga COVID)", url: "https://www.impo.com.uy/bases/decretos/137-2020" },
      { title: "CAROU art. 86 – IMPO", url: "https://www.impo.com.uy/bases/codigo-aduanero/19276-2014/86" },
      { title: "CAROU art. 88 – IMPO", url: "https://www.impo.com.uy/bases/codigo-aduanero/19276-2014/88" },
      { title: "CAROU art. 208 – IMPO", url: "https://www.impo.com.uy/bases/codigo-aduanero/19276-2014/208" },
      { title: "MEF – Resumen AT", url: "https://www.gub.uy/ministerio-economia-finanzas/sites/ministerio-economia-finanzas/files/documentos/publicaciones/resumen-at.pdf" },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  {
    id: "p07-s3",
    moduleId: "p07",
    title: "Otros regímenes: depósito, tránsito, puerto y aeropuerto libre",
    summary:
      "Además de la AT industrial hay otros regímenes que permiten que la mercadería esté en Uruguay sin pagar tributos de importación: la AT de régimen general, la toma de stock y el draw back, el depósito aduanero, el tránsito, el puerto libre, el aeropuerto libre y la exportación temporaria. Son la base de la operativa logística del país.",
    minutes: 15,
    sections: [
      {
        heading: "AT de régimen general: entrar y salir igual",
        blocks: [
          {
            type: "p",
            text:
              "La **AT para reexportación en el mismo estado** (CAROU art. 81) sirve cuando la mercadería entra con un **fin y un plazo determinados** y sale **sin transformarse** (se admite el desgaste normal por uso). No paga tributos de importación, pero **sí tasas**. El **MEF** define qué mercaderías pueden incluirse y fija requisitos, plazos y condiciones.",
          },
          {
            type: "list",
            items: [
              "**Ejemplos:** equipos para obras (como aerogeneradores, con los Decretos 249/006 y 563/008), bienes para ferias, maquinaria arrendada.",
              "**Cancelación (art. 82):** reexportación en plazo; o, si la DNA lo autoriza, pasar a otro régimen, destrucción bajo control o abandono.",
              "**Incumplimiento (art. 83):** la mercadería se considera **importada definitivamente**; si no se podía importar, se decomisa.",
              "**Reparaciones en garantía (art. 87):** si entra temporalmente un bien que Uruguay había exportado, para repararlo sin cargo por garantía, su reexportación está exenta de tributos a la exportación.",
            ],
          },
          {
            type: "steps",
            items: [
              { title: "Trámite en línea", text: "Se hace solo por **VUCE** (Ventanilla Única de Comercio Exterior) y lo gestiona la **Asesoría de Política Comercial (APC) del MEF**. No tiene costo." },
              { title: "Credenciales", text: "Usuario gub.uy (nivel intermedio verificado o cédula digital), usuario VUCE y **firma electrónica avanzada**." },
              { title: "Documentos", text: "Contrato con el proveedor, certificado notarial de la sociedad (con no más de 60 días), nota de solicitud y factura proforma. Para obras o servicios, el contrato con el contratante." },
              { title: "Aprobación", text: "El sistema numera la habilitación y la envía a la DNA, y el despachante ya puede numerar el DUA." },
            ],
          },
          {
            type: "callout",
            tone: "uy",
            title: "Novedad 2026: eventos deportivos, culturales y científicos",
            text:
              "Para bienes que entran a eventos (Decreto 73/002, Ministerio de Turismo) el plazo máximo es de **90 días**. La **RG DNA 02/2026**, vigente desde el **02/02/2026**, pasó la autorización de las prórrogas a la **administración de aduana del punto de ingreso**, por expediente GEX.",
          },
          {
            type: "eli5",
            text:
              "Es como llevar tu guitarra a tocar en un festival en otro país: entra, la usás y vuelve igual (con algún rayón de más). Nadie te cobra impuesto por una guitarra que se va con vos.",
          },
        ],
      },
      {
        heading: "Toma de stock y draw back, en detalle",
        blocks: [
          {
            type: "table",
            headers: ["", "Toma de stock", "Draw back"],
            rows: [
              ["Base", "Ley 18.184 art. 1 B; Dec. 505/009 arts. 26-31", "Ley 18.184 art. 1 C; Dec. 505/009 arts. 32-35"],
              ["Esencia", "Reponer **sin tributos** insumos importados que ya se usaron en exportaciones", "**Devolver** los tributos pagados por insumos que ya se exportaron incorporados a un producto"],
              ["Antigüedad de la importación", "Solicitud dentro de **5 años** del despacho", "Importación de no más de **5 años**"],
              ["Plazos operativos", "La importación de reposición, en 18 meses", "Exportar en 18 meses; el LATU informa en 15 días; la DNA fija la devolución en 30 días; el **BROU paga en 20 días hábiles**"],
            ],
          },
          {
            type: "p",
            text:
              "¿Cuándo conviene cada uno? La AT es la mejor para la caja, porque nunca pagás. Pero a veces la empresa no sabe al importar si el insumo va a terminar en un producto exportado o vendido en plaza. Entonces importa pagando y, si después exporta, recupera por toma de stock (repone sin tributos) o por draw back (le devuelven la plata).",
          },
        ],
      },
      {
        heading: "Depósito aduanero: guardar sin pagar",
        blocks: [
          {
            type: "p",
            text:
              "El **depósito aduanero** (CAROU arts. 92-96; Decreto 99/015) permite que la mercadería extranjera quede **almacenada sin pagar tributos** (sí tasas) hasta que se le dé otro destino: importarla, reexportarla, etc. Sirve, por ejemplo, a un importador que trae un contenedor entero pero quiere nacionalizar de a poco según vende.",
          },
          {
            type: "table",
            headers: ["Tipo", "Plazo", "Dato clave"],
            rows: [
              ["En puertos y aeropuertos", "Hasta **5 años**, prorrogables", "Al vencer, la mercadería cae en **abandono** (art. 96)"],
              ["Depósito aduanero particular (DAP), fuera de puertos, aeropuertos y zonas francas", "Hasta **24 meses**, improrrogables (ver advertencia)", "Garantía: US$ 200.000 hasta 1.000 m² (US$ 400.000 si es industrial) + US$ 30 por m² adicional (Dec. 99/015 arts. 14-15)"],
            ],
          },
          {
            type: "callout",
            tone: "warn",
            title: "Conviene confirmar",
            text:
              "El plazo de 24 meses del DAP surge del Decreto 99/015, pero su redacción pudo cambiar con el Decreto 177/020. Antes de asesorar a un cliente, confirmalo en IMPO o con la DNA.",
          },
          {
            type: "p",
            text:
              "El CAROU (art. 94) prevé seis modalidades de depósito: **A)** almacenamiento; **B)** comercial; **C)** industrial; **D)** reparación y mantenimiento; **E)** transitorio para exposiciones; **F)** logístico. En el depósito logístico se admiten ensamblaje y mezclas solo si el CIF de los insumos importados supera el **80 %** del valor final, y la operación no puede cambiar el origen (Dec. 99/015 art. 28).",
          },
          {
            type: "eli5",
            text:
              "Es como dejar las valijas en la consigna de la terminal de ómnibus: están ahí guardadas, no son tuyas “del todo” hasta que las retirás y pagás. Si nunca volvés a buscarlas, después de un tiempo las dan por abandonadas.",
          },
        ],
      },
      {
        heading: "Tránsito aduanero: pasar sin quedarse",
        blocks: [
          {
            type: "p",
            text:
              "En el **tránsito aduanero** (CAROU arts. 119-120) la mercadería circula **bajo control aduanero** desde una aduana de partida hasta una de destino, **sin pagar tributos** (salvo tasas) y sin restricciones económicas. Es lo que pasa con un contenedor que llega a Montevideo con destino a Paraguay, o con mercadería que va del puerto a una zona franca.",
          },
          {
            type: "list",
            items: [
              "Entrada → salida (por ejemplo, del puerto de Montevideo a la frontera con Brasil).",
              "Entrada → interior (del puerto a un depósito o una zona franca del interior).",
              "Interior → salida (de una zona franca al puerto para embarcar).",
              "Interior → interior (entre dos puntos aduaneros del país).",
            ],
          },
        ],
      },
      {
        heading: "Puerto libre y aeropuerto libre",
        blocks: [
          {
            type: "p",
            text:
              "El **puerto libre** (Ley 16.246 de 1992, arts. 2-4, con texto actualizado por la Ley 19.996) hace que en el recinto aduanero portuario la mercadería **circule libremente**, sin autorizaciones ni trámites formales, y esté **exenta de tributos de importación**. Ahí se puede depositar, reenvasar, reetiquetar, clasificar, consolidar y fraccionar, **sin cambiar su naturaleza**. Cuando sale hacia el territorio no franco, es una importación. El régimen también se aplica a otros puertos, terminales y zonas de alijo que cumplan los requisitos.",
          },
          {
            type: "p",
            text:
              "El **aeropuerto libre** (Ley 17.555 de 2002, art. 23; Decreto 409/008) extiende ese régimen al **Aeropuerto Internacional de Carrasco**, con las mismas operaciones permitidas y la exención de tributos de importación mientras la mercadería está en el recinto.",
          },
          {
            type: "callout",
            tone: "uy",
            title: "Por qué importa para Uruguay",
            text:
              "El puerto libre de Montevideo, el aeropuerto libre de Carrasco y las zonas francas son la base del Uruguay como **centro de distribución regional**: una empresa puede traer mercadería, tenerla en el recinto sin pagar tributos, reetiquetarla o consolidarla, y despacharla a Argentina, Brasil o Paraguay según la vaya vendiendo.",
          },
          {
            type: "eli5",
            text:
              "El puerto libre es como el hall de un hotel: podés estar ahí con tus valijas, abrirlas, reorganizarlas y cambiar etiquetas sin hacer el check-in. Recién cuando subís a una habitación (entrás al país) te cobran.",
          },
        ],
      },
      {
        heading: "Exportación temporaria: el espejo de la AT",
        blocks: [
          {
            type: "p",
            text:
              "La **exportación temporaria** (CAROU arts. 111-117) es lo contrario de la AT: mercadería nacional **sale y vuelve**. Puede volver en el **mismo estado** (equipos a una feria) o tras un **perfeccionamiento pasivo** (una pieza que se manda a galvanizar o a reparar afuera). Se cancela con la **reimportación** en plazo o pasando a **exportación definitiva**. Si se incumplen las condiciones, la mercadería en el mismo estado se considera **exportada definitivamente** (art. 113). En el DUA, las reimportaciones tienen sus propios códigos de régimen: **30** (mismo estado) y **31** (con transformación o reparación en el exterior).",
          },
          {
            type: "table",
            headers: ["Régimen", "Mercadería", "¿Paga tributos de importación?", "Base"],
            rows: [
              ["AT industrial", "Extranjera, se transforma", "No (suspensivo)", "Ley 18.184; Dec. 505/009"],
              ["AT régimen general", "Extranjera, sale igual", "No; sí tasas", "CAROU arts. 81-83"],
              ["Depósito aduanero", "Extranjera, almacenada", "No hasta que se le dé destino; sí tasas", "CAROU arts. 92-96"],
              ["Tránsito", "Extranjera, de paso", "No; sí tasas", "CAROU arts. 119-120"],
              ["Puerto / aeropuerto libre", "Extranjera, en el recinto", "No mientras esté en el recinto", "Ley 16.246; Ley 17.555"],
              ["Exportación temporaria", "Nacional, sale y vuelve", "Al volver, exenta (mismo estado), salvo tasas", "CAROU arts. 111-117"],
            ],
            caption: "Resumen de regímenes suspensivos y especiales.",
          },
        ],
      },
    ],
    eli5: [
      {
        concept: "Depósito aduanero",
        text:
          "Es la consigna de la terminal de ómnibus: guardás las valijas y no pagás hasta que las retirás. Si nunca volvés, las dan por abandonadas.",
      },
      {
        concept: "Tránsito aduanero",
        text:
          "Es como cruzar el patio de un vecino con permiso para llegar a tu casa: pasás vigilado, no te quedás y no le pagás peaje.",
      },
      {
        concept: "Puerto libre",
        text:
          "Es el hall de un hotel: podés reorganizar tus valijas sin hacer el check-in. Te cobran recién cuando subís a la habitación, o sea, cuando la mercadería entra al país.",
      },
      {
        concept: "Exportación temporaria",
        text:
          "Es como llevar el auto al taller de un primo en Rivera del lado brasileño: sale, lo arreglan y vuelve. Como es tuyo y vuelve, no lo tratás como si lo hubieras vendido.",
      },
    ],
    keyPoints: [
      "La AT de régimen general (CAROU art. 81) es para mercadería que sale en el mismo estado; se tramita por VUCE ante la APC del MEF, sin costo.",
      "Desde el 02/02/2026 (RG DNA 02/2026), las prórrogas de AT para eventos las autoriza la aduana del punto de ingreso.",
      "Toma de stock: reponer sin tributos insumos ya exportados; draw back: devolver tributos pagados; ambos con importaciones de hasta 5 años.",
      "Depósito aduanero: almacenaje sin tributos; en puertos y aeropuertos hasta 5 años prorrogables; al vencer, abandono.",
      "Tránsito: la mercadería circula bajo control aduanero entre dos aduanas, sin tributos salvo tasas; hay cuatro modalidades.",
      "Puerto libre (Ley 16.246) y aeropuerto libre (Ley 17.555, Carrasco): circulación libre y exención de tributos de importación dentro del recinto, sin cambiar la naturaleza de la mercadería.",
      "La exportación temporaria es el espejo de la AT: mercadería nacional que sale y vuelve, en el mismo estado o tras un perfeccionamiento pasivo.",
    ],
    probableQuestions: [
      { question: "¿Dónde se tramita la AT de régimen general?", answer: "En línea por VUCE, ante la Asesoría de Política Comercial del MEF, sin costo y con firma electrónica avanzada." },
      { question: "¿Qué pasa si no se reexporta una mercadería en AT de régimen general?", answer: "Se considera importada definitivamente (CAROU art. 83); si no podía importarse, se decomisa." },
      { question: "¿Cuál es la diferencia entre toma de stock y draw back?", answer: "En la toma de stock se reponen sin tributos insumos ya usados; en el draw back se devuelven en dinero los tributos pagados. Ambos requieren haber exportado." },
      { question: "¿Cuánto tiempo puede estar una mercadería en depósito aduanero en el puerto?", answer: "Hasta 5 años, prorrogables; al vencer cae en abandono." },
      { question: "¿Qué es el tránsito aduanero?", answer: "Un régimen en que la mercadería circula bajo control aduanero entre una aduana de partida y una de destino, sin tributos (salvo tasas) ni restricciones económicas." },
      { question: "¿Qué operaciones se pueden hacer en puerto libre?", answer: "Depositar, reenvasar, reetiquetar, clasificar, consolidar y fraccionar, sin cambiar la naturaleza de la mercadería." },
      { question: "¿Qué ley extiende el régimen de puerto libre al Aeropuerto de Carrasco?", answer: "La Ley 17.555 (art. 23), reglamentada por el Decreto 409/008." },
      { question: "¿Qué es el perfeccionamiento pasivo?", answer: "Una exportación temporaria de mercadería nacional que se transforma o repara en el exterior y luego se reimporta." },
    ],
    sources: [
      { title: "Trámite “Admisión temporaria en régimen general” – gub.uy", url: "https://www.gub.uy/tramites/admision-temporaria-regimen-general" },
      { title: "MEF – Normativa AT régimen general", url: "https://www.gub.uy/ministerio-economia-finanzas/sites/ministerio-economia-finanzas/files/2020-10/normativa-at-regimen-general.pdf" },
      { title: "RG DNA 02/2026", url: "https://www.aduanas.gub.uy/innovaportal/file/28268/1/rg-02-2026.pdf" },
      { title: "CAROU art. 92 – IMPO", url: "https://www.impo.com.uy/bases/codigo-aduanero/19276-2014/92" },
      { title: "CAROU art. 94 – IMPO", url: "https://www.impo.com.uy/bases/codigo-aduanero/19276-2014/94" },
      { title: "CAROU art. 96 – IMPO", url: "https://www.impo.com.uy/bases/codigo-aduanero/19276-2014/96" },
      { title: "Decreto 99/015 – IMPO", url: "https://www.impo.com.uy/bases/decretos/99-2015" },
      { title: "CAROU art. 119 – IMPO", url: "https://www.impo.com.uy/bases/codigo-aduanero/19276-2014/119" },
      { title: "Ley 16.246 – IMPO", url: "https://www.impo.com.uy/bases/leyes/16246-1992" },
      { title: "Decreto 409/008 – IMPO", url: "https://www.impo.com.uy/bases/decretos/409-2008" },
      { title: "CAROU art. 111 – IMPO", url: "https://www.impo.com.uy/bases/codigo-aduanero/19276-2014/111" },
    ],
  },
]
