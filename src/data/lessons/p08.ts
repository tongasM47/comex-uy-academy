import type { Subtopic } from '../types'

// Módulo 8: zonas francas y Código Aduanero (CAROU).
// Base: docs/research/03_regimenes_exportacion.md (sección 2) y
// docs/research/02_importacion_calculo_dua.md (secciones 0, 1.3 y 1.4).

const SRC_LEY_15921 = { title: "Ley 15.921 de Zonas Francas (texto actualizado) – IMPO", url: "https://www.impo.com.uy/bases/leyes/15921-1987" }
const SRC_LEY_15921_18 = { title: "Ley 15.921 art. 18 (personal, texto Ley 20.446) – IMPO", url: "https://impo.com.uy/bases/leyes/15921-1987/18" }
const SRC_DEC_309 = { title: "Decreto 309/018 (reglamento de zonas francas) – IMPO", url: "https://www.impo.com.uy/bases/decretos/309-2018" }
const SRC_DEC_206 = { title: "Decreto 206/026 (IMCD y zonas francas) – IMPO", url: "https://www.impo.com.uy/bases/decretos/206-2026" }
const SRC_EY = { title: "EY Tax News: cambios de la Ley 19.566 (2018)", url: "https://taxnews.ey.com/news/2018-0077-uruguay-enacts-changes-to-free-trade-zone-regime" }
const SRC_UXXI_ZF = { title: "Uruguay XXI – Zonas Francas 2023 (PDF)", url: "https://www.uruguayxxi.gub.uy/uploads/informacion/ca6cd1b9aafdbee5ced38f8658ac948aa763e26c.pdf" }
const SRC_PRES_ZF = { title: "Presidencia – Zonas francas impulsan crecimiento (09/10/2024)", url: "https://www.gub.uy/presidencia/comunicacion/noticias/arbeleche-zonas-francas-impulsan-crecimiento-economico-generacion-empleo" }
const SRC_MEF_ZF = { title: "MEF – ¿Por qué elegir zonas francas?", url: "https://www.gub.uy/ministerio-economia-finanzas/politicas-y-gestion/elegir-zonas-francas-uruguay" }
const SRC_CMC_33 = { title: "MEF – Decisión MERCOSUR sobre zonas francas entra en vigor (2019)", url: "https://www.gub.uy/ministerio-economia-finanzas/comunicacion/noticias/decision-mercosur-relativa-zonas-francas-entrara-vigor-2172019" }
const SRC_CAROU = { title: "CAROU, Ley 19.276 – IMPO", url: "https://www.impo.com.uy/bases/codigo-aduanero/19276-2014" }
const SRC_CAROU_160 = { title: "CAROU art. 160 – IMPO", url: "https://www.impo.com.uy/bases/codigo-aduanero/19276-2014/160" }
const SRC_CAROU_PDF = { title: "DNA – Código Aduanero (PDF)", url: "https://www.aduanas.gub.uy/innovaportal/file/14774/1/4-codigo-aduanero-ley-19276.pdf" }
const SRC_CAROU_199 = { title: "CAROU art. 199 – IMPO", url: "https://www.impo.com.uy/bases/codigo-aduanero/19276-2014/199" }
const SRC_CAROU_209 = { title: "CAROU art. 209 – IMPO", url: "https://www.impo.com.uy/bases/codigo-aduanero/19276-2014/209" }
const SRC_CAROU_213 = { title: "CAROU art. 213 – IMPO", url: "https://www.impo.com.uy/bases/codigo-aduanero/19276-2014/213" }
const SRC_CAROU_258 = { title: "CAROU art. 258 – IMPO", url: "https://www.impo.com.uy/bases/codigo-aduanero/19276-2014/258" }
const SRC_TC = { title: "Ley 19.535 art. 265 (Tasa Consular) – IMPO", url: "https://www.impo.com.uy/bases/leyes/19535-2017/265" }
const SRC_ANT_IVA = { title: "Decreto 220/998 art. 115 (anticipo de IVA) – IMPO", url: "https://www.impo.com.uy/bases/decretos/220-1998/115" }

export const p08Lessons: Subtopic[] = [
  // ─────────────────────────────────────────────────────────────
  {
    id: "p08-s1",
    moduleId: "p08",
    title: "Zonas francas: Ley 15.921, Ley 19.566 y cambios de 2025",
    summary:
      "Qué es una zona franca en Uruguay, quiénes operan en ella, qué beneficios tiene y qué se puede hacer adentro. Incluye el “nuevo régimen” de la Ley 19.566 y las novedades de la Ley 20.446 de diciembre de 2025 (personal e Impuesto Mínimo Complementario Doméstico).",
    minutes: 17,
    sections: [
      {
        heading: "Un pedazo de Uruguay que, para la aduana, está “afuera”",
        blocks: [
          {
            type: "p",
            text:
              "Si trabajás en comex en Uruguay, las zonas francas te van a aparecer todo el tiempo: un cliente que tiene el depósito en Zonamerica, una celulosa que exporta desde Fray Bentos, un forwarder que consolida carga en Nueva Palmira. Vale la pena entenderlas bien desde el principio.",
          },
          {
            type: "p",
            text:
              "La **Ley 15.921** (de 1987) las define (arts. 1-BIS y 2) como **áreas del territorio nacional**, de propiedad pública o privada, **cercadas y aisladas**, determinadas por el Poder Ejecutivo, donde se pueden hacer actividades **industriales, comerciales o de servicios** con los beneficios que da la ley.",
          },
          {
            type: "p",
            text:
              "El **CAROU** (Código Aduanero de la República Oriental del Uruguay, Ley 19.276), en su artículo 160, la mira desde la aduana: es la parte del territorio donde la mercadería que entra se considera **fuera del territorio aduanero** a efectos de los tributos de importación. Adentro no rigen las prohibiciones ni restricciones **económicas** (por ejemplo, cupos), pero sí las **no económicas**: sanitarias, de seguridad, etc. Y tiene que estar delimitada y cercada.",
          },
          {
            type: "callout",
            tone: "warn",
            title: "La confusión más común",
            text:
              "La zona franca **es territorio uruguayo**: ahí rigen las leyes laborales, penales y todas las demás. Lo que no es, es **territorio aduanero** a efectos de los tributos de importación. Si en un examen te dicen que la zona franca es “territorio extranjero”, la respuesta es incorrecta.",
          },
          {
            type: "eli5",
            text:
              "Imaginá un patio cercado dentro de tu casa donde las reglas de los impuestos son las de la calle. Lo que entra desde la calle al patio no paga nada. Pero si pasás algo del patio al living, cuenta como si lo trajeras de otro país.",
          },
        ],
      },
      {
        heading: "Quién es quién en una zona franca",
        blocks: [
          {
            type: "table",
            headers: ["Sujeto", "Qué es", "Base"],
            rows: [
              ["**Explotador o desarrollador**", "Quien provee, a cambio de un precio, la infraestructura de la zona: energía, agua, caminos, seguridad, instalaciones para la aduana y control de acceso. Puede ser el **Estado** o un **particular autorizado** por el Poder Ejecutivo", "Ley arts. 8-13; Dec. 309/018 arts. 19-24"],
              ["**Usuario**", "Persona física o jurídica que adquiere el derecho de operar en la zona", "Ley art. 14"],
              ["**Usuario directo**", "Contrata **con el explotador**", "Ley art. 15"],
              ["**Usuario indirecto**", "Contrata **con un usuario directo** y usa sus instalaciones", "Ley art. 15"],
              ["**Autoridad**", "MEF, **Dirección Nacional de Zonas Francas** (antes Área Zonas Francas): autoriza y registra contratos, controla ingresos y egresos y administra las zonas estatales", "Ley art. 5 (texto Ley 19.996); Dec. 309/018 arts. 4-5"],
              ["**DNA**", "Hace controles selectivos de mercadería y personas; puede instalarse dentro de la zona. El perímetro exterior es zona de vigilancia aduanera especial", "CAROU art. 162"],
            ],
          },
          {
            type: "eli5",
            text:
              "Pensá en un shopping. El **explotador** es el dueño del shopping, que pone la luz, la seguridad y los pasillos. El **usuario directo** es el que le alquila un local al dueño. El **usuario indirecto** es el que le subalquila un rincón al que tiene el local. Y la Dirección Nacional de Zonas Francas es la intendencia que habilita a todos.",
          },
          {
            type: "p",
            text:
              "Las personas jurídicas usuarias tienen que tener **objeto exclusivo** en actividades de zona franca. O sea: una sociedad no puede operar en la zona y, a la vez, tener un comercio en 18 de Julio con la misma razón social.",
          },
        ],
      },
      {
        heading: "Qué se puede hacer adentro (y qué no)",
        blocks: [
          {
            type: "list",
            items: [
              "**Comercialización y logística:** depósito, acondicionamiento, selección, clasificación, fraccionamiento, armado, desarmado y manipuleo de bienes.",
              "**Industria:** actividades fabriles (las plantas de celulosa son el ejemplo más grande).",
              "**Servicios** a terceros países y entre zonas francas; desde la reforma de la Ley 19.566, ciertos servicios también a contribuyentes de IRAE (Impuesto a las Rentas de las Actividades Económicas) del territorio no franco.",
              "**Operaciones con mercadería que está en el exterior o en tránsito**, si están previstas en el contrato y en el plan de negocios.",
              "Algunos servicios al territorio no franco: call centers, correo electrónico, educación a distancia, emisión de certificados de firma electrónica.",
              "**Teletrabajo** del personal desde su domicilio en Uruguay (art. 14-TER, Ley 20.212).",
              "Zonas temáticas de servicios audiovisuales y de entretenimiento fuera del Área Metropolitana (Cap. VIII, arts. 49-54).",
            ],
          },
          {
            type: "callout",
            tone: "warn",
            title: "Lo que está prohibido o limitado",
            text:
              "El **comercio al por menor** está prohibido (art. 37), salvo la provisión entre usuarios y los servicios al personal de la zona. Además, las actividades comerciales **sustantivas** de venta y entrega de mercadería al resto del país **no pueden hacerse fuera de la zona** (art. 14). Hay excepciones puntuales: cobranza de carteras morosas por terceros, exhibiciones autorizadas y oficinas administrativas para actividades complementarias en zonas del interior.",
          },
        ],
      },
      {
        heading: "Los beneficios tributarios",
        blocks: [
          {
            type: "table",
            headers: ["Beneficio", "Base"],
            rows: [
              ["Exoneración de **todo tributo nacional**, creado o a crearse, por las actividades autorizadas", "Ley art. 19"],
              ["Excepciones: **aportes a la seguridad social** (con una opción para los extranjeros), prestaciones a entes paraestatales de seguridad social y, desde la Ley 20.446, el **Impuesto Mínimo Complementario Doméstico (IMCD)**", "Ley art. 20 (texto Ley 20.446)"],
              ["Bienes, servicios y materias primas entran a la zona **sin tributos de importación**, sea cual sea su origen", "Ley art. 21"],
              ["La salida de bienes de la zona al exterior está **exenta de tributos**", "Ley art. 22"],
              ["El Estado **garantiza** los beneficios mientras dure el contrato", "Ley art. 25"],
              ["Libre circulación de títulos, moneda y metales preciosos", "Ley art. 38"],
              ["Rentas de propiedad intelectual de I+D hecha en la zona: exentas, con límites", "Ley art. 20"],
              ["Los monopolios estatales de servicios no rigen en la zona; puede haber tarifas promocionales", "Ley art. 24"],
            ],
          },
          {
            type: "p",
            text:
              "Los **desarrolladores** no gozan de los beneficios de los usuarios, salvo lo que prevé la Ley 16.906; fuera del Área Metropolitana (un radio de 40 km desde Montevideo) pueden tener exoneraciones, excepto IRAE y seguridad social (Ley art. 20-BIS).",
          },
          {
            type: "eli5",
            text:
              "Los beneficios de la zona franca son como el pase libre de un club: mientras tu contrato con el club esté vigente, no pagás las entradas de cada actividad. Lo que sí seguís pagando es la mutualista (la seguridad social), y desde 2025 también una “cuota mínima” que se les cobra a los socios gigantes (el IMCD).",
          },
        ],
      },
      {
        heading: "El “nuevo régimen de zona franca”: Ley 19.566 y Decreto 309/018",
        blocks: [
          {
            type: "p",
            text:
              "Si en el programa del curso ves “**Nuevo régimen de Zona Franca**”, se refiere a la reforma de la **Ley 19.566** (del 08/12/2017, vigente desde el 08/03/2018), reglamentada por el **Decreto 309/018**. La idea de fondo fue exigir **sustancia**: que en la zona haya empresas de verdad, con gente trabajando, y no solo sociedades de papel. Los usuarios que ya tenían contrato conservaron sus beneficios.",
          },
          {
            type: "table",
            headers: ["Antes", "Después de la reforma"],
            rows: [
              ["Contratos sin plazo o con prórroga automática", "Plazos máximos: **15 años** (usuario directo industrial), **10 años** (directo comercial o de servicios) y **5 años** (indirecto); revisión de contratos sin plazo (art. 16-BIS)"],
              ["Control de sustancia débil", "Empleo local, operaciones reales con personal a tiempo completo, domicilio fiscal en la zona (Dec. 309/018 art. 32); **declaración jurada bienal**; revocación por incumplimiento"],
              ["Servicios solo al exterior", "Servicios también a contribuyentes de IRAE del territorio no franco"],
              ["Prohibición total de operar fuera de la zona", "Se permiten actividades **no sustantivas** fuera (zonas del interior, oficinas del desarrollador), cobranza de morosos, exhibiciones"],
              ["—", "Exoneración de rentas de propiedad intelectual de I+D, con límites"],
              ["—", "Zonas temáticas audiovisuales y de entretenimiento"],
              ["Administración por el Área Zonas Francas", "La Ley 19.996 (2021) crea la **Dirección Nacional de Zonas Francas**"],
            ],
          },
          {
            type: "list",
            items: [
              "**Renovación del contrato:** no hay prórroga automática. Se pide con al menos **120 días** de anticipación y habiendo transcurrido al menos el **85 %** del plazo (Dec. 309/018 art. 31).",
              "**Plazos más largos** si hay gran inversión o mucho empleo (arts. 34-35): fuera del Área Metropolitana, más de 50 empleados o más de UI 20 millones de inversión; dentro, más de 100 empleados o más de UI 40 millones.",
              "**Declaración jurada bienal** de cumplimiento (personal, inversión, ingresos, actividades): Ley art. 16-TER; Dec. 309/018 art. 36.",
            ],
          },
          {
            type: "example",
            title: "¿Cuándo pide la renovación un usuario directo comercial?",
            text:
              "Una empresa de logística firmó como usuario directo comercial, así que su plazo máximo es de 10 años (120 meses). El 85 % de ese plazo es 120 × 0,85 = **102 meses**, o sea 8 años y medio. Recién desde ahí puede pedir la renovación, y siempre con al menos 120 días de anticipación al vencimiento.",
          },
          {
            type: "eli5",
            text:
              "Antes, algunas empresas tenían la llave del club para siempre. La reforma dijo: “la membresía dura 15, 10 o 5 años según el tipo de socio, y cada dos años me mostrás que de verdad venís a entrenar”.",
          },
        ],
      },
      {
        heading: "Novedades de diciembre de 2025: Ley 20.446",
        blocks: [
          {
            type: "p",
            text:
              "La **Ley 20.446** del **16/12/2025** (la ley de Presupuesto 2025-2029) tocó la Ley de Zonas Francas en dos puntos que hoy se preguntan mucho.",
          },
          {
            type: "steps",
            items: [
              { title: "Personal uruguayo (art. 18, texto dado por el art. 196 de la Ley 20.446)", text: "Al menos el **75 %** del personal tiene que ser uruguayo (ciudadanos naturales o legales). En las actividades de **servicios**, el mínimo es **50 %**, durante todo el plazo del contrato. El Poder Ejecutivo puede **reducir transitoriamente** esos porcentajes (por la naturaleza de la actividad, la puesta en marcha, una ampliación o el interés general) y exigir planes de capacitación. La solicitud se resuelve en **60 días**; si no hay respuesta, **se considera aprobada**." },
              { title: "Impuesto Mínimo Complementario Doméstico (IMCD)", text: "Es un impuesto mínimo del **15 %** para entidades de **grupos multinacionales grandes**, en línea con el llamado Pilar 2 de la OCDE. Los usuarios de zona franca **no están exonerados** del IMCD: quedó agregado como excepción en el art. 20 de la Ley 15.921." },
              { title: "Compensación a los protegidos por estabilidad (Decreto 206/026)", text: "El **Decreto 206/026**, del **31/08/2026**, regula cómo se **compensa** a los grupos que tenían contratos firmados antes de que entrara en vigor el IMCD y estaban protegidos por las cláusulas de estabilidad de la Ley 15.921 (arts. 19, 20 y 25). Un decreto anterior sobre el tema, el 325/025, figura como derogado." },
            ],
          },
          {
            type: "callout",
            tone: "warn",
            title: "Datos para confirmar",
            text:
              "Se suele mencionar un umbral de **€ 750 millones** de ingresos del grupo para el IMCD, pero la investigación no pudo confirmar el umbral exacto ni la fecha de vigencia en una fuente oficial. Antes de asesorar a un cliente, confirmalo en IMPO o con un asesor tributario.",
          },
          {
            type: "callout",
            tone: "info",
            title: "Ojo con el silencio",
            text:
              "Fijate el contraste con la admisión temporaria: en la prórroga de una AT, el silencio de 60 días es **denegatoria**; en la reducción del porcentaje de personal de zona franca, el silencio de 60 días es **aprobación**. Es una trampa típica de examen.",
          },
          {
            type: "p",
            text:
              "Sobre el personal extranjero, el Decreto 309/018 (arts. 44-45) pide una lista del personal extranjero, y cada extranjero puede optar por no aportar a la seguridad social uruguaya mediante una declaración jurada.",
          },
        ],
      },
      {
        heading: "Las zonas francas de Uruguay",
        blocks: [
          {
            type: "p",
            text:
              "Según Uruguay XXI (julio de 2023) había **14 zonas aprobadas: 12 operativas y 2 en construcción**. En octubre de 2024 el MEF y Presidencia informaron **12 en funcionamiento**, más de **21.000 empleos** y alrededor del **35 % de las exportaciones**. El censo 2023, presentado en noviembre de 2025, mostró más de **US$ 1.000 millones de inversión** y más de **16.000 empleos directos**.",
          },
          {
            type: "table",
            headers: ["Zona franca", "Departamento", "Tipo (2023)"],
            rows: [
              ["Nueva Palmira", "Colonia", "Comercial y logística (estatal)"],
              ["Libertad", "San José", "Comercial y logística"],
              ["Colonia (Grupo Continental)", "Colonia", "Industrial"],
              ["Fray Bentos (UPM 1)", "Río Negro", "Industrial (celulosa)"],
              ["UPM 2 (Pueblo Centenario)", "Durazno", "Industrial (celulosa)"],
              ["Punta Pereira (Montes del Plata)", "Colonia", "Industrial (celulosa)"],
              ["Colonia Suiza", "Colonia", "Mixta"],
              ["Floridasur", "Florida", "Mixta"],
              ["Parque de las Ciencias", "Canelones", "Mixta (farmacéutica, ciencias de la vida)"],
              ["Zonamerica", "Montevideo", "Mixta (servicios, logística)"],
              ["Aguada Park", "Montevideo", "Servicios"],
              ["WTC Montevideo Free Zone", "Montevideo", "Servicios"],
              ["WTC Punta del Este Free Zone", "Maldonado", "Servicios (en construcción en 2023)"],
              ["Zona Franca del Plata", "Colonia", "Servicios (en construcción en 2023)"],
            ],
            caption: "Fuente: Uruguay XXI, 2023.",
          },
          {
            type: "callout",
            tone: "warn",
            title: "Listado a confirmar",
            text:
              "El listado es de 2023. No está confirmado el estado actual de WTC Punta del Este, Zona Franca del Plata, Libertad (si sigue siendo estatal) ni de Rivera, que fue estatal históricamente y no aparece en el listado de 2023. Para datos de 2026, consultá la Dirección Nacional de Zonas Francas.",
          },
          {
            type: "callout",
            tone: "uy",
            title: "Por qué te importa para buscar trabajo",
            text:
              "Las zonas francas concentran muchos empleos de comex: operadores logísticos en Zonamerica, Parque de las Ciencias o Nueva Palmira, departamentos de exportación en las celulosas y empresas de servicios globales. Saber explicar qué es un usuario directo, qué cambió con la Ley 19.566 y qué trajo la Ley 20.446 te diferencia en una entrevista.",
          },
        ],
      },
    ],
    eli5: [
      { concept: "Zona franca", text: "Un patio cercado dentro de tu casa donde los impuestos funcionan como en la calle: lo que entra desde afuera no paga, pero si lo pasás al living es como si lo importaras." },
      { concept: "Usuario directo e indirecto", text: "El directo le alquila el local al dueño del shopping; el indirecto le subalquila un rincón al que alquiló el local." },
      { concept: "Sustancia (Ley 19.566)", text: "No alcanza con tener la camiseta del club: tenés que ir a entrenar. La zona franca exige gente trabajando de verdad y una declaración cada dos años que lo demuestre." },
      { concept: "IMCD", text: "Es un piso de impuesto para los gigantes: aunque el club te exonere de casi todo, si sos una multinacional muy grande pagás por lo menos una cuota mínima del 15 %." },
    ],
    keyPoints: [
      "La zona franca es territorio uruguayo, pero queda fuera del territorio aduanero a efectos de los tributos de importación (Ley 15.921; CAROU art. 160).",
      "Explotador provee la infraestructura; usuario directo contrata con el explotador; usuario indirecto contrata con un usuario directo.",
      "Los usuarios están exonerados de todo tributo nacional, salvo seguridad social y, desde la Ley 20.446 (16/12/2025), el IMCD del 15 % para grupos multinacionales grandes.",
      "La Ley 19.566 (vigente desde el 08/03/2018) y el Decreto 309/018 son el “nuevo régimen”: plazos de 15/10/5 años, sustancia y declaración jurada bienal.",
      "Personal: 75 % uruguayo como regla y 50 % en servicios (art. 18, texto de la Ley 20.446); el silencio de 60 días en un pedido de reducción es aprobación.",
      "Está prohibido el comercio minorista y las actividades comerciales sustantivas hacia el territorio no franco deben hacerse desde la zona.",
      "En 2023 había 14 zonas aprobadas (12 operativas); en 2024, alrededor del 35 % de las exportaciones salía de zonas francas.",
    ],
    probableQuestions: [
      { question: "¿La zona franca es territorio extranjero?", answer: "No. Es territorio nacional donde rigen todas las leyes, pero a efectos de los tributos de importación se considera fuera del territorio aduanero (CAROU art. 160)." },
      { question: "¿Qué diferencia hay entre usuario directo e indirecto?", answer: "El directo contrata con el explotador de la zona; el indirecto contrata con un usuario directo (Ley 15.921 art. 15)." },
      { question: "¿Cuáles son los plazos máximos de los contratos de usuario?", answer: "15 años para el directo industrial, 10 para el directo comercial o de servicios y 5 para el indirecto, sin prórroga automática (Ley 19.566)." },
      { question: "¿Qué tributos paga un usuario de zona franca?", answer: "Los aportes a la seguridad social (con opción para extranjeros), las prestaciones a entes paraestatales de seguridad social y, desde la Ley 20.446, el IMCD si integra un grupo multinacional grande." },
      { question: "¿Qué porcentaje de personal uruguayo exige la ley?", answer: "75 % como regla y 50 % en actividades de servicios; el Poder Ejecutivo puede reducirlo transitoriamente." },
      { question: "¿Qué cambió con la Ley 19.566?", answer: "Plazos máximos de contratos, requisitos de sustancia y declaración jurada bienal, servicios a contribuyentes de IRAE, actividades no sustantivas fuera de la zona, exoneración de rentas de I+D y zonas temáticas audiovisuales." },
      { question: "¿Puede un usuario abrir un local de venta al público?", answer: "No. El comercio minorista está prohibido (art. 37) y las actividades comerciales sustantivas hacia el territorio no franco no pueden hacerse fuera de la zona (art. 14)." },
      { question: "¿Quién es la autoridad de las zonas francas?", answer: "El MEF, a través de la Dirección Nacional de Zonas Francas, creada por la Ley 19.996 de 2021." },
    ],
    sources: [SRC_LEY_15921, SRC_LEY_15921_18, SRC_DEC_309, SRC_DEC_206, SRC_EY, SRC_CAROU_160, SRC_UXXI_ZF, SRC_PRES_ZF, SRC_MEF_ZF],
  },

  // ─────────────────────────────────────────────────────────────
  {
    id: "p08-s2",
    moduleId: "p08",
    title: "Operar entre zona franca y territorio aduanero",
    summary:
      "Qué pasa aduanera y tributariamente cuando la mercadería entra a una zona franca, sale al exterior o cruza al resto del país, y cómo juegan las preferencias MERCOSUR (Decisiones CMC 8/94 y 33/15). Es la operativa diaria de un despachante que atiende usuarios de zona franca.",
    minutes: 16,
    sections: [
      {
        heading: "La regla de oro: la frontera aduanera es el cerco",
        blocks: [
          {
            type: "p",
            text:
              "Para entender cualquier operación con zona franca, imaginá que el cerco de la zona es una frontera. Todo lo que cruza ese cerco hacia el resto del país (el **territorio no franco**) se trata como si cruzara la frontera de Uruguay. Con esa idea, los cuatro movimientos se entienden solos:",
          },
          {
            type: "table",
            headers: ["Movimiento", "Tratamiento", "Base"],
            rows: [
              ["Exterior → zona franca", "**Sin tributos.** La mercadería extranjera tiene que ir **de inmediato** a la zona, normalmente en **tránsito** desde el puerto, el aeropuerto o la frontera", "Ley 15.921 arts. 21 y 36; CAROU art. 160"],
              ["Territorio no franco → zona franca", "Es una **exportación** (DUA de exportación). Los beneficios a la exportación, como la devolución de tributos, se dan **recién cuando se compruebe la salida hacia otro país**", "CAROU art. 163; Ley art. 21"],
              ["Zona franca → territorio no franco", "Es una **importación a todos sus efectos**: DUA de importación, arancel según el origen, IVA, anticipo de IVA, tasa consular y demás tributos, como si viniera del exterior", "Ley art. 22; CAROU art. 164"],
              ["Zona franca → exterior", "**Sin tributos**", "Ley art. 22"],
              ["Zona franca ↔ zona franca", "Tránsito entre zonas", "Dec. 309/018"],
              ["Consumo final del personal dentro de la zona", "**No** es exportación (agregado de la Ley 19.670)", "Ley art. 21"],
            ],
          },
          {
            type: "eli5",
            text:
              "Es como un free shop en la frontera de Chuy, pero al revés: dentro del cerco las cosas están “sin impuestos”. Si una caja sale del cerco hacia Montevideo, es como si viniera de otro país y paga en la aduana. Si sale hacia Brasil o hacia un barco, se va sin pagar nada.",
          },
          {
            type: "p",
            text:
              "Un detalle que se pregunta: la mercadería puede quedarse en la zona franca por **tiempo indefinido** (CAROU art. 161). No hay un plazo como en el depósito aduanero o en la admisión temporaria.",
          },
        ],
      },
      {
        heading: "Vender desde la zona franca a una empresa uruguaya",
        blocks: [
          {
            type: "p",
            text:
              "Es la operación que más dudas genera. Supongamos que un usuario de Zonamerica tiene notebooks que importó de Taiwán y le vende un lote a una empresa de Canelones. Para el territorio no franco, eso es una **importación** (Ley art. 22; CAROU art. 164). Quien importa es el **comprador** de Canelones: su despachante numera un **DUA de importación** y paga los tributos como si las notebooks llegaran directamente de Taiwán. La factura del usuario de zona franca no lleva IVA.",
          },
          { type: "doc", docId: "dua" },
          {
            type: "steps",
            items: [
              { title: "Venta y factura", text: "El usuario de zona franca factura al comprador local, sin IVA." },
              { title: "DUA de importación", text: "El despachante del comprador numera el DUA de importación definitiva. En el instructivo de la DNA, el código de régimen **10** abarca la importación definitiva desde zona franca o depósito franco." },
              { title: "Liquidación", text: "Se liquidan arancel (según el origen de la mercadería), tasa consular, IVA, anticipo de IVA y tasas, igual que en cualquier importación." },
              { title: "Canal y libramiento", text: "La DNA asigna canal y, una vez otorgado el libramiento, la mercadería sale de la zona hacia el depósito del comprador." },
            ],
          },
          {
            type: "example",
            title: "Cuánto paga el comprador de Canelones",
            text:
              "Valor en aduana del lote: **US$ 20.000**. Origen Taiwán (extra-MERCOSUR). Supongamos, solo para el ejemplo, un arancel del 2 % y que las notebooks van a la tasa básica de IVA. Arancel: 20.000 × 2 % = **US$ 400**. Tasa consular 5 %: **US$ 1.000**. IVA 22 % sobre (valor en aduana + arancel = US$ 20.400): **US$ 4.488**. Anticipo de IVA 10 % sobre la misma base: **US$ 2.040**. Tasa de servicios aduaneros 0,2 %: **US$ 40** (está por debajo del tope de US$ 50). Total sin contar la tasa de escáner de 85 UI ni los honorarios: **US$ 7.968**. El IVA y su anticipo, si el comprador es contribuyente, después funcionan como crédito fiscal.",
          },
          {
            type: "callout",
            tone: "warn",
            title: "Lo que no puede hacer el usuario",
            text:
              "El usuario de zona franca **no puede** abrir un local en Montevideo para vender al público: el comercio minorista está prohibido (art. 37) y las actividades comerciales sustantivas hacia el territorio no franco no pueden hacerse fuera de la zona (art. 14).",
          },
        ],
      },
      {
        heading: "Vender desde el país hacia la zona franca",
        blocks: [
          {
            type: "p",
            text:
              "El camino inverso también tiene su vuelta. Si una fábrica de Canelones le vende insumos a una planta de celulosa en zona franca, para la aduana es una **exportación**: lleva **DUA de exportación**. Pero el CAROU (art. 163) agrega una condición importante: los **beneficios a la exportación** (como la devolución de tributos) se otorgan **recién cuando se compruebe la salida de la mercadería hacia otro país**.",
          },
          {
            type: "eli5",
            text:
              "Es como un premio por meter un gol: no alcanza con pasar la pelota al área chica (la zona franca), el premio se paga recién cuando la pelota entra al arco (sale al exterior).",
          },
          {
            type: "callout",
            tone: "tip",
            title: "Pregunta de entrevista",
            text:
              "“¿Una venta de una fábrica nacional a un usuario de zona franca es exportación?” Sí, aduaneramente es exportación con DUA de exportación; pero los beneficios a la exportación quedan condicionados a que se compruebe la salida al exterior (CAROU art. 163).",
          },
        ],
      },
      {
        heading: "Zona franca y MERCOSUR: Decisiones CMC 8/94 y 33/15",
        blocks: [
          {
            type: "p",
            text:
              "Acá entra una pieza que distingue a quien sabe de comex. En el MERCOSUR, los productos originarios circulan entre los socios con **preferencia arancelaria** (en general, arancel 0 %). Pero ¿qué pasa con lo que sale de una zona franca?",
          },
          {
            type: "table",
            headers: ["Norma", "Qué dice", "Consecuencia práctica"],
            rows: [
              ["**Decisión CMC 8/94**", "La mercadería que sale de zonas francas hacia otro Estado Parte paga el **Arancel Externo Común (AEC)** o el arancel nacional", "**No recibe la preferencia intra-MERCOSUR.** Es la regla general: “la zona franca no tiene preferencias”"],
              ["**Decisión CMC 33/15** (vigente desde el **21/07/2019**)", "Crea una **excepción**: la mercadería **originaria** del MERCOSUR (o de países con acuerdo con el MERCOSUR, según listas) que solo estuvo **almacenada** en la zona franca, con operaciones que **no cambian su origen ni su clasificación** (conservación, fraccionamiento en lotes, etc.), **conserva** la preferencia", "Se usa un **certificado de origen derivado**, que en Uruguay emite o gestiona la **DNA**"],
            ],
          },
          {
            type: "list",
            items: [
              "Bienes **producidos o transformados** en zona franca: **no** tienen preferencia MERCOSUR; pagan el AEC en el país de destino.",
              "Bienes de origen MERCOSUR **solo almacenados** en zona franca: **sí** pueden conservar la preferencia, con certificado derivado.",
            ],
          },
          {
            type: "example",
            title: "Mercadería brasileña almacenada en Nueva Palmira",
            text:
              "Un trader guarda en la zona franca de Nueva Palmira un lote de un producto originario de Brasil, con su certificado de origen MERCOSUR. Lo fracciona en lotes y vende uno a Paraguay. Como solo estuvo almacenado y fraccionado (no cambió el origen ni la clasificación), por la Decisión CMC 33/15 puede conservar la preferencia con un certificado derivado. En cambio, si en la zona lo hubiera transformado en otro producto, por la Decisión CMC 8/94 pagaría el AEC al entrar a Paraguay.",
          },
          {
            type: "callout",
            tone: "info",
            title: "Un dato del nuevo régimen de origen",
            text:
              "Con el Régimen de Origen MERCOSUR vigente desde el 18/07/2024, el certificado tiene **12 meses** de validez, y ese plazo **se suspende** mientras la mercadería está en un régimen suspensivo o en zona franca, con un máximo de **5 años**. Es justamente lo que le permite a la mercadería esperar en la zona sin que el certificado venza.",
          },
          {
            type: "callout",
            tone: "warn",
            title: "Para confirmar",
            text:
              "La investigación no pudo confirmar la reglamentación nacional vigente de los certificados derivados ni el estado de las listas para mercadería de terceros países con acuerdo. Si un cliente lo necesita, confirmalo con la DNA.",
          },
          {
            type: "eli5",
            text:
              "Es como un alfajor con sello “hecho en Brasil” que guardás en tu mochila. Si solo lo guardaste y lo partiste a la mitad, sigue siendo un alfajor brasileño y conserva su sello. Si lo derretiste e hiciste una torta, ya no podés decir que la torta tiene sello brasileño.",
          },
        ],
      },
      {
        heading: "Elegir dónde producir: planta nacional o zona franca",
        blocks: [
          {
            type: "p",
            text:
              "Con todo lo anterior podés razonar una decisión de negocio clásica. Una empresa de cosméticos quiere exportar a Brasil. Si produce en su **planta de Canelones** y el producto cumple las reglas de origen MERCOSUR, exporta con **certificado de origen digital** (obligatorio hacia Brasil desde el 01/02/2020) y entra a Brasil con la preferencia. Además puede usar **admisión temporaria** para insumos extrazona. Si produce en **zona franca**, por la Decisión CMC 8/94 su producto **paga el AEC** en Brasil.",
          },
          {
            type: "callout",
            tone: "uy",
            title: "Conclusión práctica",
            text:
              "Para vender al MERCOSUR con preferencia conviene producir en territorio no franco. La zona franca conviene para mercados fuera del MERCOSUR, para servicios y para logística y distribución regional. Por eso las celulosas exportan desde zona franca a China y Europa, y los centros logísticos de Zonamerica o Parque de las Ciencias distribuyen a toda la región.",
          },
        ],
      },
    ],
    eli5: [
      { concept: "Zona franca → país", text: "Pasar algo del patio cercado al living es como traerlo del extranjero: paga los mismos impuestos que en la aduana." },
      { concept: "País → zona franca", text: "Llevar algo del living al patio cuenta como sacarlo del país, pero el premio de exportador te lo dan recién cuando ese algo sale del patio hacia otro país." },
      { concept: "Decisión CMC 8/94", text: "Lo que se cocina en la zona franca no tiene el pase VIP del MERCOSUR: paga la entrada completa (el AEC)." },
      { concept: "Decisión CMC 33/15", text: "Si la mercadería MERCOSUR solo estuvo guardada en el ropero de la zona franca, conserva su pase VIP con una copia del pase (el certificado derivado)." },
    ],
    keyPoints: [
      "Exterior → zona franca y zona franca → exterior: sin tributos.",
      "Territorio no franco → zona franca es exportación; los beneficios a la exportación se dan al comprobar la salida al exterior (CAROU art. 163).",
      "Zona franca → territorio no franco es importación a todos sus efectos: arancel, IVA, anticipo de IVA, tasa consular y tasas (Ley art. 22; CAROU art. 164).",
      "La mercadería puede permanecer en zona franca por tiempo indefinido (CAROU art. 161).",
      "Decisión CMC 8/94: lo que sale de zona franca a otro socio del MERCOSUR paga AEC, sin preferencia.",
      "Decisión CMC 33/15 (vigente desde el 21/07/2019): la mercadería originaria solo almacenada conserva la preferencia con certificado derivado gestionado por la DNA.",
      "Para exportar al MERCOSUR con preferencia conviene producir en territorio no franco.",
    ],
    probableQuestions: [
      { question: "¿Qué es, para la aduana, una venta de zona franca a una empresa de Montevideo?", answer: "Una importación a todos sus efectos: el comprador hace el DUA de importación y paga arancel, IVA, anticipo, tasa consular y tasas." },
      { question: "¿Y una venta de una fábrica nacional a un usuario de zona franca?", answer: "Una exportación con DUA de exportación; los beneficios a la exportación se otorgan cuando se compruebe la salida hacia otro país (CAROU art. 163)." },
      { question: "¿Cuánto tiempo puede estar la mercadería en una zona franca?", answer: "Por tiempo indefinido (CAROU art. 161)." },
      { question: "¿Cómo llega la mercadería del puerto a la zona franca?", answer: "En tránsito aduanero, porque la mercadería extranjera debe ir de inmediato a la zona." },
      { question: "¿Lo que se fabrica en zona franca entra a Brasil con preferencia?", answer: "No. Por la Decisión CMC 8/94 paga el AEC o el arancel nacional." },
      { question: "¿Qué excepción crea la Decisión CMC 33/15?", answer: "Que la mercadería originaria del MERCOSUR solo almacenada en zona franca, sin cambiar origen ni clasificación, conserve la preferencia con un certificado de origen derivado." },
      { question: "¿Desde cuándo rige la Decisión CMC 33/15?", answer: "Desde el 21/07/2019." },
      { question: "¿El consumo del personal dentro de la zona es exportación?", answer: "No, la Ley 19.670 aclaró que el consumo final del personal en la zona no es exportación." },
    ],
    sources: [SRC_LEY_15921, SRC_CAROU_160, SRC_CAROU, SRC_DEC_309, SRC_CMC_33, SRC_TC, SRC_ANT_IVA],
  },

  // ─────────────────────────────────────────────────────────────
  {
    id: "p08-s3",
    moduleId: "p08",
    title: "El Código Aduanero (CAROU): estructura e infracciones",
    summary:
      "Cómo está organizado el Código Aduanero de la República Oriental del Uruguay (Ley 19.276), los conceptos que usás todos los días y las siete infracciones aduaneras con sus sanciones. Es la base legal de todo lo que hace un despachante.",
    minutes: 18,
    sections: [
      {
        heading: "Qué es el CAROU y por qué es tan importante",
        blocks: [
          {
            type: "p",
            text:
              "El **CAROU** se aprobó por la **Ley 19.276**, de artículo único, promulgada el **19/09/2014** y publicada el **25/09/2014**. Reemplazó una normativa aduanera dispersa (el Código de 1941, leyes de infracciones y muchas otras) por un solo código. Se reglamentó con varios decretos de 2015: **96/015** (despachantes), **97/015** (zonas francas), **98/015** (regímenes especiales), **99/015** (depósito) y **145/015** (consulta).",
          },
          {
            type: "eli5",
            text:
              "El CAROU es el reglamento del juego de la aduana: dice qué es una mercadería, por qué puerta entra, a qué “casillero” va (importación, tránsito, depósito…) y qué tarjeta te sacan si hacés trampa.",
          },
          {
            type: "callout",
            tone: "uy",
            title: "“Nuevo régimen de Zona Franca, CAROU”",
            text:
              "En el programa del curso este punto junta dos cosas: el **nuevo régimen de zonas francas** de la Ley 19.566 (que viste en la primera lección del módulo) y el tratamiento de la zona franca **dentro del CAROU**, en el Título X, Capítulo I (arts. 160 a 164). Es decir: cómo la ley de zonas francas y el código aduanero se complementan. Más abajo tenés esos artículos resumidos.",
          },
        ],
      },
      {
        heading: "La estructura del código",
        blocks: [
          {
            type: "table",
            headers: ["Título", "Tema", "Artículos (aprox.)"],
            rows: [
              ["I", "Disposiciones preliminares, definiciones, zonas aduaneras", "1-5"],
              ["II", "Sujetos: DNA, despachantes (14-31), otros sujetos (32-43, incluye el OEC en el art. 40)", "6-43"],
              ["III", "Control aduanero", "44-45"],
              ["IV", "Ingreso de mercadería: declaración de llegada, descarga, depósito temporal de importación", "46-62"],
              ["V", "Destinos de importación: importación definitiva, AT en el mismo estado, AT para perfeccionamiento activo, depósito, reembarque, abandono, destrucción", "63-100 aprox."],
              ["VI", "Egreso de mercadería (declaración de salida)", "~101-106"],
              ["VII", "Destino de exportación: definitiva, temporaria, perfeccionamiento pasivo", "107-118"],
              ["VIII", "Tránsito aduanero", "119-~129"],
              ["IX", "Regímenes especiales: equipaje, pacotilla, envíos postales, contenedores, etc.", "130-~159"],
              ["X", "Áreas con tratamientos especiales: zonas francas (160-164) y tiendas libres (165-167)", "160-167"],
              ["XI", "Disposiciones comunes: prohibiciones, garantías, valor, pago, devolución y actualización de tributos", "168-~193"],
              ["XII", "Consulta", "194-198"],
              ["XIII", "Régimen infraccional: infracciones (199-217), procedimiento, delitos aduaneros (258 y ss.)", "199-~270"],
              ["XIV", "Disposiciones transitorias y especiales", "~271 en adelante"],
            ],
          },
          {
            type: "callout",
            tone: "warn",
            title: "Rangos aproximados",
            text:
              "Los extremos marcados con “~” son aproximados. Si te piden el rango exacto de un título, confirmalo en el índice del CAROU en IMPO.",
          },
        ],
      },
      {
        heading: "Conceptos que usás todos los días",
        blocks: [
          {
            type: "table",
            headers: ["Concepto", "Qué es (en palabras simples)", "Art."],
            rows: [
              ["**Territorio aduanero**", "El ámbito donde se aplica la legislación aduanera", "1"],
              ["**Mercadería**", "Todo bien que puede tener un destino aduanero", "2"],
              ["**Destino aduanero**", "El fin que se le da a la mercadería que entra o sale", "2"],
              ["**Régimen aduanero**", "El tratamiento que se aplica a la mercadería en tráfico internacional", "2"],
              ["**Despacho**", "Las formalidades para aplicar un régimen", "2"],
              ["**Libramiento**", "La autorización de la DNA para disponer de la mercadería", "2"],
              ["**Zona primaria**", "Puertos, aeropuertos, puntos de frontera y áreas donde se controla la entrada, salida y permanencia", "3"],
              ["**Zona secundaria**", "El resto del territorio aduanero", "4"],
              ["**Zona de vigilancia especial**", "Franja de la zona secundaria con controles especiales (fronteras, perímetro de zonas francas)", "5 y 162"],
              ["**Despachante de aduana**", "Auxiliar privado del comercio y de la función pública aduanera, habilitado para tramitar en nombre de otro", "14"],
              ["**OEC**", "Operador Económico Calificado: aprobado por la DNA por su cumplimiento, con controles simplificados", "40"],
              ["**Depósito temporal de importación**", "La situación de la mercadería desde que se descarga hasta que recibe un destino", "57"],
            ],
          },
          {
            type: "list",
            items: [
              "**Destinos de la mercadería que ingresa (art. 63):** inclusión en un régimen de importación, reembarque, abandono o destrucción.",
              "**Regímenes de importación (art. 64):** importación definitiva; AT para reexportación en el mismo estado; AT para perfeccionamiento activo; depósito aduanero; tránsito aduanero.",
              "**Regímenes de exportación (art. 107):** exportación definitiva; exportación temporaria para reimportación en el mismo estado; exportación temporaria para perfeccionamiento pasivo; tránsito aduanero.",
              "**Responsabilidad del despachante (art. 27):** responde **solidariamente** con su comitente por los tributos, sus reajustes y los proventos portuarios.",
            ],
          },
          {
            type: "table",
            headers: ["Regla útil", "Dato", "Art."],
            rows: [
              ["Declaración", "Electrónica; el declarante responde por la exactitud", "65 y 72"],
              ["Rectificar el DUA después del control", "Tasa de **400 UI** por declaración", "70"],
              ["Selectividad (base de los canales)", "Por análisis de riesgo", "74"],
              ["Tolerancia en la descarga", "**5 %** sin justificación", "54"],
              ["Actualización de tributos y multas", "Por **Unidad Indexada** al momento del pago", "190 y 216"],
              ["Consulta vinculante", "La DNA resuelve en **30 días hábiles**", "196"],
            ],
          },
          {
            type: "eli5",
            text:
              "La **zona primaria** es la puerta de entrada de la casa, donde está el portero mirando todo lo que pasa. La **zona secundaria** es el resto de la casa. Y la **zona de vigilancia especial** es el pasillo que da a la ventana del vecino: no es la puerta, pero ahí también se mira con más atención.",
          },
        ],
      },
      {
        heading: "La zona franca dentro del CAROU (arts. 160-164)",
        blocks: [
          {
            type: "table",
            headers: ["Art.", "Regla"],
            rows: [
              ["160", "Definición: parte del territorio nacional considerada fuera del territorio aduanero para los tributos de importación; sin restricciones económicas, sí no económicas; cercada"],
              ["161", "Permanencia **indefinida**; actividades de depósito, comerciales, industriales y de servicios"],
              ["162", "Controles selectivos de la DNA; instalaciones aduaneras dentro; el perímetro es zona de vigilancia aduanera especial (reglamentado por el Dec. 97/015)"],
              ["163", "Territorio aduanero → zona franca = **exportación**; los beneficios se dan cuando se compruebe la salida al exterior"],
              ["164", "Zona franca → territorio aduanero = **importación**"],
            ],
          },
        ],
      },
      {
        heading: "Las siete infracciones aduaneras (art. 199)",
        blocks: [
          {
            type: "p",
            text:
              "El artículo 199 enumera **siete** infracciones. Saberlas de memoria, con su sanción, es casi obligatorio para cualquier entrevista en un despachante:",
          },
          {
            type: "table",
            headers: ["Infracción", "Qué es (paráfrasis)", "Sanción", "Art."],
            rows: [
              ["**Contravención**", "Incumplir obligaciones **formales** en trámites aduaneros, si no es otra infracción", "Multa de **400 a 4.000 UI**", "200"],
              ["**Diferencia**", "En el control **antes del libramiento** se detecta que, de seguir lo declarado, el Fisco perdería renta (clasificación, especie, calidad, cantidad, peso, origen…)", "Multa igual a los tributos que se perderían, o al valor en aduana del excedente, según el caso; más los tributos", "201-202"],
              ["**Defraudación**", "Acción u omisión que viola normas y causa o podría causar pérdida de renta fiscal o de beneficios, si no es otra infracción", "Multa del **doble** del perjuicio + tributos", "204"],
              ["**Defraudación de valor**", "Declaración que altera el **valor en aduana** en perjuicio fiscal", "Multa del **doble** de los tributos + tributos", "205"],
              ["**Abandono infraccional**", "Mercadería abandonada en circunstancias que hacen presumir que se preparaba un contrabando, o cuyos responsables no se identifican", "**Comiso**", "207"],
              ["**Desvío de exoneraciones**", "Cambiar el destino de mercadería exonerada sin autorización ni pago", "Multa del **doble** de los tributos exonerados + tributos", "208"],
              ["**Contrabando**", "Introducir o sacar mercadería en forma **clandestina, violenta o sin documentación**, con pérdida de renta o violación de requisitos esenciales", "Comiso + costas + **doble de los tributos** + multa del **20 %** del valor en aduana + comiso del vehículo en ciertos casos", "209-211"],
            ],
          },
          {
            type: "list",
            items: [
              "**Tolerancia (art. 203):** hasta un **5 %** de diferencia en cantidad o peso no se sanciona; si se supera, se sanciona solo el exceso.",
              "**Presunciones de defraudación (art. 206):** discrepancias evidentes, mala aplicación de normas, doble contabilidad, documentos alterados, datos omitidos.",
              "**Presunciones simples de contrabando (art. 210):** ingreso sin documentación o fuera de horario, desvío de ruta, ocultamiento, simulación de operaciones, falsificación de precintos, etc.",
              "**Abandono simple** (no infraccional): mercadería sin documentación o sin destino dentro de los plazos de depósito (arts. 60, 62 y 96). No es lo mismo que el abandono infraccional.",
            ],
          },
          {
            type: "eli5",
            text:
              "**Contrabando** es esconder algo en el fondo de la mochila para que nadie lo vea. **Diferencia** es mostrar la mochila pero decir que adentro hay menos de lo que hay, y que la maestra lo descubra al revisar. **Contravención** es olvidarte de firmar el permiso: no escondiste nada, pero faltó un papel.",
          },
        ],
      },
      {
        heading: "Culpa, dolo, delito y acuerdos",
        blocks: [
          {
            type: "steps",
            items: [
              { title: "Culpa o dolo (art. 213)", text: "Defraudación, defraudación de valor, desvío y contrabando se sancionan tanto si hubo intención (**dolo**) como si hubo descuido (**culpa**). Si fue culposa, la multa puede reducirse **hasta un 50 %**. En la contravención y la diferencia **no** se admite la buena fe ni el error como excusa." },
              { title: "Delito de contrabando (art. 258)", text: "Además de la infracción, el contrabando puede ser delito: pena de **3 meses a 6 años** de penitenciaría; si el perjuicio potencial supera **5.000.000 UI**, de **2 a 6 años**." },
              { title: "Acuerdos de pago (art. 217)", text: "Se pueden hacer acuerdos de pago con la DNA hasta la sentencia de primera instancia." },
            ],
          },
          {
            type: "example",
            title: "Comparando sanciones con números",
            text:
              "Un importador declara un valor en aduana de US$ 20.000 cuando el real es US$ 30.000. Supongamos que, entre todos, los tributos equivalen al 40 % del valor. Tributos omitidos: 10.000 × 40 % = **US$ 4.000**. Como **defraudación de valor**, la multa es el doble: **US$ 8.000**, más los US$ 4.000 de tributos. Si fue culposa, la multa puede bajar hasta la mitad: US$ 4.000. Si en cambio esa mercadería (valor US$ 30.000, tributos US$ 12.000) hubiera entrado escondida y sin documentos, sería **contrabando**: comiso, doble de los tributos (US$ 24.000) y multa del 20 % del valor en aduana (US$ 6.000), o sea **US$ 30.000** de multas además de perder la mercadería.",
          },
          {
            type: "callout",
            tone: "tip",
            title: "Cómo distinguirlas rápido",
            text:
              "Preguntate: ¿se declaró la mercadería? Si **no** se declaró y pasó escondida o sin documentos, pensá en **contrabando**. Si se declaró mal y la DNA lo detectó en el control **antes del libramiento**, el CAROU lo encuadra como **diferencia**. Si la declaración alteró el **valor en aduana** en perjuicio fiscal, la figura específica es **defraudación de valor**. La **defraudación** genérica es residual: hay perjuicio fiscal (o riesgo de él) y no encaja en otra figura. Si es solo un papel formal, **contravención**. Si se usó una exoneración para otro fin, **desvío**.",
          },
        ],
      },
    ],
    eli5: [
      { concept: "CAROU", text: "El reglamento del juego de la aduana, con todas las reglas en un solo libro y las tarjetas amarillas y rojas para quien hace trampa." },
      { concept: "Libramiento", text: "Es el “podés llevártelo” que te dice el cajero después de pagar: hasta que no lo dice, la bolsa no es tuya." },
      { concept: "Diferencia", text: "Mostraste la mochila pero declaraste mal lo que había; la maestra lo encontró al revisar, antes de dejarte salir." },
      { concept: "Contrabando", text: "Esconder algo en la mochila para que nadie lo vea: es la falta más grave y te sacan lo escondido." },
      { concept: "Desvío de exoneraciones", text: "Te dieron una entrada gratis para la función de los jubilados y la revendiste a otra persona: tenés que pagar el doble." },
    ],
    keyPoints: [
      "El CAROU es la Ley 19.276, promulgada el 19/09/2014; se reglamentó con decretos de 2015 (96, 97, 98, 99 y 145/015).",
      "Zona primaria: puertos, aeropuertos y fronteras; zona secundaria: el resto; zona de vigilancia especial: fronteras y perímetro de zonas francas.",
      "Regímenes de importación (art. 64): definitiva, dos AT, depósito y tránsito. Regímenes de exportación (art. 107): definitiva, dos temporarias y tránsito.",
      "Siete infracciones: contravención, diferencia, defraudación, defraudación de valor, abandono infraccional, desvío de exoneraciones y contrabando.",
      "Contravención: 400 a 4.000 UI. Defraudación, defraudación de valor y desvío: doble del perjuicio o de los tributos. Contrabando: comiso + doble de tributos + 20 % del valor.",
      "Si la infracción es culposa, la multa puede bajar hasta 50 %; en contravención y diferencia no se acepta la buena fe.",
      "Delito de contrabando: 3 meses a 6 años; 2 a 6 años si el perjuicio potencial supera 5.000.000 UI.",
      "Arts. 160-164: la zona franca en el CAROU (permanencia indefinida; entrar desde el país es exportación; salir al país es importación).",
    ],
    probableQuestions: [
      { question: "¿Qué ley aprueba el CAROU y cuándo?", answer: "La Ley 19.276, promulgada el 19/09/2014 y publicada el 25/09/2014." },
      { question: "¿Cuáles son las siete infracciones aduaneras?", answer: "Contravención, diferencia, defraudación, defraudación de valor, abandono infraccional, desvío de exoneraciones y contrabando (art. 199)." },
      { question: "¿Cuál es la sanción de la contravención?", answer: "Multa de 400 a 4.000 UI (art. 200)." },
      { question: "¿Qué diferencia hay entre diferencia y contrabando?", answer: "En la diferencia la mercadería se declaró y la DNA detecta el error antes del libramiento; en el contrabando la mercadería entra o sale en forma clandestina, violenta o sin documentación." },
      { question: "¿Qué tolerancia admite el CAROU en cantidad o peso?", answer: "Un 5 %; si se supera, se sanciona solo el exceso (art. 203)." },
      { question: "¿Qué pasa si una defraudación fue sin intención?", answer: "Igual se sanciona, pero si fue culposa la multa puede reducirse hasta un 50 % (art. 213)." },
      { question: "¿Qué pena tiene el delito de contrabando?", answer: "De 3 meses a 6 años de penitenciaría; si el perjuicio potencial supera 5.000.000 UI, de 2 a 6 años (art. 258)." },
      { question: "¿Qué es el libramiento?", answer: "La autorización de la DNA para que el interesado disponga de la mercadería (art. 2)." },
      { question: "¿Cuánto cuesta rectificar un DUA después del control?", answer: "Una tasa de 400 UI por declaración (art. 70)." },
    ],
    sources: [SRC_CAROU, SRC_CAROU_PDF, SRC_CAROU_199, SRC_CAROU_209, SRC_CAROU_213, SRC_CAROU_258, SRC_CAROU_160],
  },
]
