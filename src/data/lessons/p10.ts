import type { Subtopic } from '../types'

export const p10Lessons: Subtopic[] = [
  // ─────────────────────────────────────────────────────────────
  {
    id: "p10-s1",
    moduleId: "p10",
    title: "Estructura y formas de los tratados internacionales",
    summary: "Qué es un tratado, cómo está armado por dentro, qué tipos hay y cómo pasa en Uruguay de la firma a la ratificación. Es la base para entender cualquier acuerdo comercial que vas a invocar en un certificado de origen o en un DUA.",
    minutes: 14,
    sections: [
      {
        heading: "Qué es un tratado (y por qué el nombre no importa)",
        blocks: [
          { type: "p", text: "Un **tratado** es un acuerdo internacional celebrado **por escrito** entre Estados (o entre Estados y organizaciones internacionales) y **regido por el derecho internacional**. Esa es, en esencia, la definición del artículo 2.1.a de la **Convención de Viena sobre el Derecho de los Tratados de 1969** (CVDT), que está en vigor desde 1980." },
          { type: "p", text: "Lo importante para el trabajo diario: **el nombre no cambia la naturaleza**. Tratado, acuerdo, convenio, protocolo, carta, pacto: todos son tratados si cumplen la definición. Un “Acuerdo de Complementación Económica” de ALADI es tan tratado como el “Tratado de Asunción”. Cuando en una oficina de comex alguien te dice “aplicamos el ACE 35 para Chile”, está invocando un tratado internacional." },
          { type: "eli5", text: "Un tratado es como un **contrato entre países**. Igual que un contrato de alquiler, tiene una parte que explica por qué se firma, una parte con las reglas y unas planillas con letra chica al final. Y da lo mismo si arriba dice “contrato”, “acuerdo” o “convenio”: si dos partes se obligan por escrito, es un contrato." },
          { type: "p", text: "Dos principios de la CVDT que conviene saber de memoria:" },
          { type: "list", items: [
            "**Pacta sunt servanda** (art. 26): todo tratado en vigor obliga a las partes y se debe cumplir de buena fe.",
            "**El derecho interno no es excusa** (art. 27): un Estado no puede invocar sus propias leyes para justificar que no cumple un tratado."
          ] }
        ]
      },
      {
        heading: "La estructura típica: de qué partes está hecho",
        blocks: [
          { type: "p", text: "Si abrís cualquier acuerdo comercial (el Tratado de Asunción, el TLC Uruguay–México o el acuerdo con la Unión Europea) vas a encontrar más o menos las mismas piezas. Saber dónde está cada cosa te ahorra horas: las listas de productos y las reglas de origen casi nunca están en el articulado, están en los **anexos**." },
          { type: "table", headers: ["Parte", "Qué contiene", "Ejemplo comex"], rows: [
            ["Título", "Nombre del tratado e identificación de las partes", "“Tratado para la Constitución de un Mercado Común” (Tratado de Asunción)"],
            ["Preámbulo", "Considerandos: motivos, objetivos, contexto. No crea obligaciones directas, pero **sirve para interpretar** (art. 31.2 CVDT)", "“Considerando que la ampliación de los mercados nacionales…”"],
            ["Parte dispositiva o articulado", "Artículos con derechos y obligaciones, agrupados en capítulos", "Capítulos de Comercio de Bienes, Reglas de Origen, Solución de Controversias"],
            ["Cláusulas finales", "Firma, ratificación, depositario, entrada en vigor, adhesión, denuncia, enmiendas, idiomas", "“Entrará en vigor 30 días después del depósito del tercer instrumento…”"],
            ["Anexos", "Parte integrante del tratado: listas técnicas, cronogramas de desgravación, reglas de origen específicas", "Anexo I del Tratado de Asunción (Programa de Liberación Comercial)"],
            ["Apéndices y notas", "Detalles operativos de los anexos", "Requisitos específicos de origen por partida"],
            ["Protocolos", "Instrumentos posteriores o complementarios que amplían o modifican el tratado; pueden necesitar ratificación propia", "Protocolo de Ouro Preto (1994) y de Olivos (2002) al Tratado de Asunción"]
          ], caption: "Estructura típica de un tratado comercial" },
          { type: "eli5", text: "Pensá en una receta de cocina. El **preámbulo** es el párrafo de arriba que cuenta que la torta es de la abuela y por qué es especial: no te dice qué hacer, pero te ayuda a entender la receta. Los **artículos** son los pasos. Los **anexos** son la lista de ingredientes con las cantidades exactas. Y un **protocolo** es la nota que alguien agregó después: “ahora le ponemos menos azúcar”." },
          { type: "callout", tone: "tip", title: "En la oficina", text: "Cuando te pidan verificar si un producto tiene preferencia arancelaria, no te quedes en el articulado. Andá directo al anexo de desgravación (para ver el arancel y el cronograma) y al de reglas de origen (para ver qué tiene que cumplir la mercadería)." }
        ]
      },
      {
        heading: "Cómo se clasifican los tratados",
        blocks: [
          { type: "p", text: "Hay varias formas de clasificarlos. Las tres que más se preguntan en exámenes y entrevistas son por número de partes, por contenido y por la forma de obligar." },
          { type: "table", headers: ["Criterio", "Tipo", "Ejemplo"], rows: [
            ["Número de partes", "**Bilateral**: dos partes", "TLC Uruguay–México (ACE 60); ALC Uruguay–Chile (ACE 73)"],
            ["Número de partes", "**Plurilateral o regional**: pocas partes de una región", "Tratado de Asunción; Tratado de Montevideo 1980"],
            ["Número de partes", "**Multilateral**: muchas partes, vocación universal", "Acuerdos de la OMC; la propia Convención de Viena"],
            ["Contenido", "**Tratado marco**: fija objetivos e instituciones y deja el detalle para después", "Tratado de Montevideo 1980; Acuerdo Marco UE–MERCOSUR de 1995"],
            ["Contenido", "**TLC o ALC**: elimina aranceles sobre lo sustancial del comercio", "TLC MERCOSUR–Israel; MERCOSUR–Singapur"],
            ["Contenido", "**Acuerdo de preferencias fijas**: rebajas en una lista limitada de productos", "MERCOSUR–India; MERCOSUR–SACU"],
            ["Contenido", "**Acuerdo de asociación**: pilar político, de cooperación y comercial", "Acuerdo de Asociación UE–MERCOSUR (EMPA)"],
            ["Forma de obligar", "**Solemne**: firma más ratificación parlamentaria", "La regla en Uruguay para los tratados comerciales"],
            ["Forma de obligar", "**En forma simplificada**: obliga con la firma o un canje de notas", "En Uruguay su uso está limitado; para comercio se aplica la aprobación parlamentaria"]
          ] },
          { type: "callout", tone: "info", title: "Ojo con “bilateral”", text: "Un acuerdo MERCOSUR–Israel a veces se llama “bilateral” porque hay **dos partes** (un bloque y un país), aunque lo firmen varios Estados. No te confundas si lo leés así en un documento." },
          { type: "p", text: "Los TLC modernos, llamados “de nueva generación”, no se quedan en los aranceles: también incluyen servicios, inversiones, compras públicas, propiedad intelectual, comercio electrónico, pymes y sostenibilidad. El ALC Uruguay–Chile (ACE 73) es un buen ejemplo uruguayo." }
        ]
      },
      {
        heading: "El ciclo de vida de un tratado",
        blocks: [
          { type: "p", text: "Un tratado no nace de un día para otro. Pasa por etapas que la Convención de Viena ordena. Estas son las que te conviene manejar:" },
          { type: "steps", items: [
            { title: "Negociación", text: "Rondas entre delegaciones con plenos poderes (arts. 6-7 CVDT)." },
            { title: "Adopción y autenticación", text: "Se cierra el texto: se rubrica o se firma *ad referendum* (arts. 9-10)." },
            { title: "Firma", text: "Si el tratado queda sujeto a ratificación, la firma obliga a **no frustrar el objeto y fin** del tratado mientras no entra en vigor (arts. 12 y 18)." },
            { title: "Ratificación o adhesión", text: "Acto **internacional** por el cual el Estado manifiesta su consentimiento definitivo. La **adhesión** es para quien no firmó originalmente (arts. 14-15)." },
            { title: "Depósito del instrumento", text: "Se entrega al **depositario**. Paraguay es depositario de los tratados del MERCOSUR; la Secretaría General de ALADI, de los acuerdos ALADI." },
            { title: "Entrada en vigor", text: "Cuando lo dice el propio tratado, por ejemplo X días después del depósito de cierto número de instrumentos (art. 24)." },
            { title: "Aplicación provisional", text: "Se aplica total o parcialmente antes de entrar en vigor, si el tratado lo prevé o las partes lo acuerdan (art. 25). Es justo lo que pasa con el acuerdo comercial interino MERCOSUR–UE desde el 1/5/2026." },
            { title: "Registro", text: "Ante la Secretaría de la ONU (art. 102 de la Carta de la ONU)." }
          ] },
          { type: "p", text: "Dos conceptos más que aparecen seguido. Una **reserva** es una declaración unilateral con la que un Estado excluye o modifica, para sí mismo, los efectos de ciertas disposiciones. No se admite si el tratado la prohíbe o si choca con su objeto y fin; los tratados de integración como los de ALADI y MERCOSUR normalmente **no admiten reservas**. La **denuncia** es el retiro voluntario según el procedimiento que fije el tratado (en el Tratado de Asunción, arts. 21-22)." },
          { type: "eli5", text: "Una **reserva** es pedir la hamburguesa “sin cebolla”: aceptás el plato entero pero sacás un ingrediente. Eso solo vale si el restaurante lo permite. En los acuerdos de integración, el restaurante tiene un cartel que dice “no se aceptan cambios al menú”." }
        ]
      },
      {
        heading: "Cómo se ratifica un tratado en Uruguay",
        blocks: [
          { type: "p", text: "Esta es una pregunta clásica: **firma no es lo mismo que ratificación**. En Uruguay la Constitución reparte el trabajo entre el Poder Ejecutivo y el Parlamento:" },
          { type: "list", items: [
            "**Art. 168, numeral 20**: el Presidente de la República, actuando con el ministro o ministros respectivos o con el Consejo de Ministros, **concluye y suscribe** tratados, pero **necesita la aprobación del Poder Legislativo para ratificarlos**.",
            "**Art. 85, numeral 7**: la Asamblea General aprueba o reprueba los tratados de paz, alianza y comercio **por mayoría absoluta de votos del total de componentes de cada Cámara**.",
            "**Art. 6**: en los tratados internacionales la República propondrá la cláusula de arbitraje y procurará la integración social y económica de los Estados latinoamericanos."
          ] },
          { type: "steps", items: [
            { title: "Negociación", text: "Cancillería (MRREE) con MEF, MGAP y MIEM, consultando al sector privado." },
            { title: "Firma", text: "La hace el Poder Ejecutivo (art. 168 inc. 20)." },
            { title: "Mensaje y proyecto de ley", text: "El Ejecutivo envía al Parlamento un mensaje con un proyecto de ley que aprueba el tratado." },
            { title: "Primera Cámara", text: "Comisión de Asuntos Internacionales y votación en sala." },
            { title: "Segunda Cámara", text: "Votación con mayoría absoluta del total de componentes de cada Cámara (art. 85 inc. 7)." },
            { title: "Promulgación y publicación", text: "El Ejecutivo promulga la ley y se publica (Diario Oficial, IMPO)." },
            { title: "Instrumento de ratificación", text: "El Ejecutivo emite el instrumento y lo deposita ante el depositario o lo notifica a la contraparte." },
            { title: "Entrada en vigor y reglamentación", text: "Según la cláusula del tratado. Después vienen los decretos internos: por ejemplo, el MEF reglamenta el uso de cuotas y la DNA instruye a los operadores." }
          ] },
          { type: "eli5", text: "Firmar es como **reservar un apartamento con una seña**: mostrás que vas en serio. Ratificar es **firmar la escritura**, y en Uruguay eso solo se puede hacer después de que la familia (el Parlamento) dio el visto bueno." },
          { type: "example", title: "Ejemplo real de 2026", text: "El Acuerdo Comercial Interino MERCOSUR–UE se **firmó el 17/01/2026** en Asunción. Uruguay lo aprobó por la **Ley N.º 20.462** (promulgada a fines de febrero de 2026) y, junto con Argentina, completó la ratificación el **26/02/2026**: Uruguay se presentó como el primer país del bloque en ratificarlo. Fijate la secuencia: firma del Ejecutivo, ley del Parlamento, ratificación." },
          { type: "callout", tone: "uy", title: "Quién hace qué", text: "El Parlamento **aprueba** (por ley). El Poder Ejecutivo **ratifica** (emite y deposita el instrumento). Si en un examen te dicen que “el Parlamento ratifica el tratado ante el depositario”, es la opción incorrecta." }
        ]
      }
    ],
    eli5: [
      { concept: "Tratado", text: "Es un contrato entre países. El preámbulo cuenta por qué lo firman, los artículos son las reglas y los anexos son las planillas con letra chica donde están los productos y los aranceles." },
      { concept: "Firma vs. ratificación", text: "Firmar es dejar una seña para reservar el apartamento. Ratificar es firmar la escritura, y para eso primero tiene que dar el visto bueno la familia, que en Uruguay es el Parlamento." },
      { concept: "Reserva", text: "Es como pedir la milanesa sin papas fritas: aceptás el plato pero sacás una parte. Solo funciona si el lugar lo permite, y los acuerdos de integración casi nunca lo permiten." },
      { concept: "Aplicación provisional", text: "Es como mudarte a la casa nueva con las llaves que te dio el dueño mientras el escribano termina los papeles: ya la usás, aunque la escritura todavía no esté firmada del todo." }
    ],
    keyPoints: [
      "Tratado = acuerdo escrito entre Estados regido por el derecho internacional (CVDT art. 2.1.a), sin importar cómo se llame.",
      "Pacta sunt servanda (art. 26) y el derecho interno no justifica incumplir (art. 27).",
      "Estructura: título, preámbulo (interpreta), articulado (obliga), cláusulas finales, anexos (parte integrante) y protocolos.",
      "Las listas de desgravación y las reglas de origen suelen estar en los anexos.",
      "Firma ≠ ratificación: en Uruguay el Parlamento aprueba por ley (art. 85 inc. 7) y el Ejecutivo ratifica (art. 168 inc. 20).",
      "La mayoría exigida es absoluta del total de componentes de cada Cámara.",
      "La aplicación provisional (art. 25 CVDT) permite usar un tratado antes de su entrada en vigor: caso MERCOSUR–UE desde el 1/5/2026.",
      "Los tratados de integración (ALADI, MERCOSUR) normalmente no admiten reservas."
    ],
    probableQuestions: [
      { question: "¿Qué define a un tratado según la Convención de Viena de 1969?", answer: "Que es un acuerdo internacional celebrado por escrito entre Estados y regido por el derecho internacional, cualquiera sea su denominación." },
      { question: "¿Qué valor tiene el preámbulo?", answer: "No crea obligaciones directas, pero forma parte del contexto que sirve para interpretar el tratado (art. 31 CVDT)." },
      { question: "¿Quién firma y quién aprueba un tratado en Uruguay?", answer: "Lo concluye y suscribe el Presidente con los ministros (art. 168 inc. 20); lo aprueba la Asamblea General por mayoría absoluta del total de componentes de cada Cámara (art. 85 inc. 7)." },
      { question: "¿Cuál es la diferencia entre firma y ratificación?", answer: "La firma autentica el texto y obliga a no frustrar su objeto; la ratificación es el acto internacional de consentimiento definitivo, que en Uruguay solo se hace después de la ley aprobatoria." },
      { question: "¿Qué es una reserva?", answer: "Una declaración unilateral con la que un Estado excluye o modifica para sí los efectos de ciertas disposiciones; no se admite si el tratado la prohíbe o es incompatible con su objeto y fin." },
      { question: "¿Qué es la aplicación provisional?", answer: "Aplicar total o parcialmente un tratado antes de su entrada en vigor, si el tratado lo prevé o las partes lo acuerdan (art. 25 CVDT)." },
      { question: "¿Qué es un depositario? Dé un ejemplo.", answer: "El Estado u organismo que recibe los instrumentos de ratificación. Paraguay es depositario de los tratados del MERCOSUR." },
      { question: "¿Con qué ley aprobó Uruguay el acuerdo interino MERCOSUR–UE?", answer: "Con la Ley N.º 20.462, de febrero de 2026." }
    ],
    sources: [
      { title: "Convención de Viena sobre el Derecho de los Tratados (texto)", url: "https://www.oas.org/xxxivga/spanish/reference_docs/convencion_viena.pdf" },
      { title: "Constitución de la República, art. 85 (IMPO)", url: "https://www.impo.com.uy/bases/constitucion/1967-1967/85" },
      { title: "Constitución de la República, art. 168 (IMPO)", url: "https://www.impo.com.uy/bases/constitucion/1967-1967/168" },
      { title: "Presidencia: Uruguay aprobó el acuerdo interino MERCOSUR–UE", url: "https://www.gub.uy/presidencia/comunicacion/noticias/uruguay-aprobo-acuerdo-interino-comercio-entre-mercosur-union-europea" },
      { title: "MERCOSUR: textos fundacionales", url: "https://www.mercosur.int/documentos-y-normativa/textos-fundacionales/" }
    ]
  },

  // ─────────────────────────────────────────────────────────────
  {
    id: "p10-s2",
    moduleId: "p10",
    title: "MERCOSUR: instituciones, normas y acuerdos externos",
    summary: "Qué tipo de bloque es el MERCOSUR, cómo se toman y se aplican sus decisiones, cómo funcionan el AEC y el régimen de origen, y con quién tiene acuerdos a octubre de 2026. Es el marco que más vas a usar en una oficina uruguaya.",
    minutes: 18,
    sections: [
      {
        heading: "Antes de empezar: las etapas de la integración",
        blocks: [
          { type: "p", text: "Para entender qué es el MERCOSUR conviene ubicarlo en la escalera clásica de la integración económica (la clasificación de Bela Balassa). Cada escalón **incluye** al anterior y le suma algo." },
          { type: "table", headers: ["Etapa", "Qué agrega", "Arancel frente a terceros", "Ejemplo"], rows: [
            ["Zona de preferencias", "Rebajas parciales en algunos productos", "Cada país el suyo", "PAR de ALADI; MERCOSUR–India"],
            ["Zona de libre comercio (ZLC)", "Elimina aranceles entre miembros sobre lo sustancial del comercio; necesita **reglas de origen**", "Cada país el suyo", "TLC Uruguay–México; ALC Uruguay–Chile"],
            ["Unión aduanera", "ZLC + **Arancel Externo Común (AEC)** + política comercial común", "Común", "MERCOSUR (imperfecta)"],
            ["Mercado común", "Unión aduanera + libre circulación de personas, servicios y capitales", "Común", "Objetivo declarado del MERCOSUR (art. 1 Tratado de Asunción)"],
            ["Unión económica y monetaria", "Mercado común + políticas armonizadas, eventualmente moneda única", "Común", "Unión Europea / eurozona"]
          ] },
          { type: "eli5", text: "En una **zona de libre comercio**, los vecinos de un edificio no se cobran nada entre ellos, pero cada uno le pone **su propia tarifa** a los de afuera. En una **unión aduanera**, se ponen de acuerdo y hay **una sola tarifa** en la puerta del edificio. Como en la ZLC cada uno cobra distinto, hace falta controlar de dónde viene cada cosa (las reglas de origen) para que nadie entre por la puerta más barata." },
          { type: "p", text: "El MERCOSUR es una **unión aduanera imperfecta**: tiene AEC, pero con listas nacionales de excepciones, regímenes especiales, sectores que quedaron afuera (automotor, azúcar) y cobro del AEC en cada frontera. Por eso un mismo producto puede pagar distinto arancel según el país del bloque por el que entre." },
          { type: "callout", tone: "info", title: "Intergubernamental, no supranacional", text: "La UE tiene órganos supranacionales (Comisión, Parlamento, Tribunal de Justicia). El MERCOSUR es **intergubernamental**: decide por **consenso** de los Estados (art. 37 del Protocolo de Ouro Preto)." }
        ]
      },
      {
        heading: "Textos fundacionales",
        blocks: [
          { type: "table", headers: ["Instrumento", "Fecha", "Para qué sirve"], rows: [
            ["**Tratado de Asunción**", "26/03/1991 (en vigor 29/11/1991)", "Crea el Mercado Común del Sur. Anexo I: Programa de Liberación Comercial; Anexo II: régimen de origen; Anexo III: solución de controversias provisoria"],
            ["Protocolo de Brasilia", "1991", "Primer sistema de solución de controversias, luego reemplazado por Olivos"],
            ["**Protocolo de Ouro Preto**", "17/12/1994", "Estructura institucional definitiva, **personalidad jurídica internacional**, fuentes jurídicas y decisiones por consenso"],
            ["Protocolo de Ushuaia", "1998", "**Cláusula democrática** (base de las suspensiones de Paraguay en 2012 y de Venezuela)"],
            ["**Protocolo de Olivos**", "18/02/2002 (vigor 2004)", "Sistema actual de solución de controversias; crea el **Tribunal Permanente de Revisión** con sede en **Asunción**"],
            ["Protocolo Constitutivo del Parlamento", "2005", "Crea el PARLASUR, con sede en **Montevideo**"]
          ] },
          { type: "callout", tone: "uy", title: "Montevideo, capital administrativa", text: "La **Secretaría del MERCOSUR** funciona en Montevideo (en el edificio del ex Parque Hotel) y el PARLASUR también. El depositario de los tratados del bloque es el **Gobierno de Paraguay**." },
          { type: "callout", tone: "warn", title: "Código Aduanero del MERCOSUR", text: "El Código Aduanero del MERCOSUR (CAM, Dec. CMC 27/10) necesita la ratificación de todos los Estados Partes para entrar en vigor y su estado conviene confirmarlo. En la práctica, en Uruguay rige el **Código Aduanero de la República Oriental del Uruguay (CAROU, Ley 19.276 de 2014)**." }
        ]
      },
      {
        heading: "Órganos y normas: quién decide qué",
        blocks: [
          { type: "table", headers: ["Órgano", "Quiénes lo integran", "Función", "Norma que dicta"], rows: [
            ["**CMC** – Consejo del Mercado Común", "Ministros de Relaciones Exteriores y de Economía", "Órgano superior: conducción política", "**Decisiones**"],
            ["**GMC** – Grupo Mercado Común", "Representantes de Cancillerías, Ministerios de Economía y Bancos Centrales", "Órgano ejecutivo", "**Resoluciones**"],
            ["**CCM** – Comisión de Comercio", "Coordinada por las Cancillerías", "Vela por la política comercial común (AEC, origen)", "**Directivas**"]
          ] },
          { type: "eli5", text: "Pensá en un club de barrio. El **CMC** es la asamblea de socios que decide el rumbo (dicta *Decisiones*). El **GMC** es la comisión directiva que ejecuta (dicta *Resoluciones*). La **CCM** es el encargado de la cantina que controla que todos cobren los mismos precios (dicta *Directivas*)." },
          { type: "p", text: "Las tres normas son **obligatorias** (art. 42 Ouro Preto), pero muchas tienen que **incorporarse** al derecho interno de cada país. Entran en vigor simultáneamente 30 días después de que la Secretaría comunica que todos las incorporaron (art. 40). Ese paso es la famosa **internalización**, y es la razón por la que a veces una norma aprobada en el MERCOSUR tarda años en aplicarse." },
          { type: "p", text: "Además hay órganos consultivos y técnicos: el PARLASUR, el Foro Consultivo Económico-Social, la Secretaría, los subgrupos de trabajo y los comités técnicos (por ejemplo, el CT N.º 1 de Aranceles y Clasificación y el CT N.º 2 de Asuntos Aduaneros)." },
          { type: "p", text: "La **Presidencia Pro Tempore** rota cada semestre en orden alfabético. **Uruguay la asumió el 30/06/2026**, de manos de Paraguay, en la LXVIII Cumbre. Para la cumbre de diciembre de 2026 está previsto el primer Consejo del Acuerdo Comercial Interino UE–MERCOSUR y el primer foro empresarial UE–MERCOSUR." }
        ]
      },
      {
        heading: "Solución de controversias",
        blocks: [
          { type: "steps", items: [
            { title: "Negociaciones directas", text: "Plazo breve entre los Estados en conflicto." },
            { title: "Intervención del GMC (opcional)", text: "Formula recomendaciones." },
            { title: "Tribunal Arbitral Ad Hoc", text: "Tres árbitros. De común acuerdo, las partes pueden ir directo al TPR en única instancia." },
            { title: "Tribunal Permanente de Revisión (Asunción)", text: "Revisa cuestiones de derecho. El laudo es obligatorio; si no se cumple, se habilitan medidas compensatorias." }
          ] },
          { type: "list", items: [
            "**Opción de foro**: el demandante puede elegir el sistema MERCOSUR o el de la OMC, pero una vez elegido no puede ir al otro por el mismo asunto.",
            "**Opiniones consultivas**: las pueden pedir los tribunales superiores (en Uruguay, la Suprema Corte de Justicia).",
            "**Empresas**: no demandan directamente; reclaman ante la Sección Nacional del GMC de su país."
          ] }
        ]
      },
      {
        heading: "Miembros, AEC, NCM y origen",
        blocks: [
          { type: "table", headers: ["Categoría", "Países (octubre 2026)", "Notas"], rows: [
            ["Fundadores", "Argentina, Brasil, Paraguay, Uruguay", ""],
            ["Estado Parte por adhesión", "Bolivia", "Pasó a ser Estado Parte en julio de 2024; tiene **4 años** para incorporar el acervo, el AEC, la NCM y el régimen de origen. Los acuerdos externos firmados por los cuatro (UE, EFTA) no la incluyen"],
            ["Estado Parte suspendido", "Venezuela", "Suspendida desde diciembre de 2016 y, desde agosto de 2017, por el Protocolo de Ushuaia"]
          ] },
          { type: "callout", tone: "warn", title: "Estados Asociados", text: "La investigación menciona como asociados a Chile, Colombia, Ecuador, Perú, Guyana, Surinam y Panamá (que formalizó su asociación en la Cumbre de Montevideo de diciembre de 2024). Antes de usar la lista en un examen, confirmala en mercosur.int. Los asociados **no** aplican el AEC." },
          { type: "p", text: "La **NCM (Nomenclatura Común del MERCOSUR)** tiene **8 dígitos**: los 6 del Sistema Armonizado de la OMA más 2 propios del bloque. El **AEC** fue aprobado por la Dec. CMC 22/94 y se aplica desde el **1/1/1995**, con un rango histórico de 0% a 20% (con picos en automotores por regímenes especiales). En 2021 y 2022 hubo rebajas sobre la mayoría del universo arancelario. Hay listas de excepción nacionales y regímenes como bienes de informática y telecomunicaciones o bienes de capital." },
          { type: "p", text: "Para tener **arancel 0% intrazona**, la mercadería tiene que ser **originaria** y probarlo con un **certificado de origen MERCOSUR**. Con Argentina y Brasil hoy ese certificado es **digital (COD) y obligatorio**. Los criterios generales son:" },
          { type: "list", ordered: true, items: [
            "Productos totalmente obtenidos en el país (minerales, animales nacidos y criados, vegetales cosechados).",
            "Productos elaborados exclusivamente con materiales originarios.",
            "Productos con insumos no originarios que cumplan el **salto de partida** (cambio de clasificación a 4 dígitos) o, si no lo cumplen, cuyo **valor CIF de materiales no originarios no supere el 40% del valor FOB**.",
            "Requisitos específicos por producto, que prevalecen sobre los generales."
          ] },
          { type: "p", text: "Operaciones como embalar, fraccionar, mezclar, armar de forma simple o etiquetar **no confieren origen**." },
          { type: "eli5", text: "El certificado de origen es el **documento de identidad de la mercadería**. Demuestra que “nació” en el país, o que se transformó lo suficiente acá, para merecer el descuento. Ponerle una etiqueta uruguaya a un producto chino no le cambia la cédula." },
          { type: "callout", tone: "warn", title: "A confirmar", text: "La validez de 180 días del certificado y el listado exacto de entidades emisoras (en Uruguay se mencionan la Cámara de Industrias, la Cámara Nacional de Comercio y Servicios y la Unión de Exportadores, habilitadas por el MEF) conviene confirmarlos con la entidad o en el MEF antes de darlos por seguros." }
        ]
      },
      {
        heading: "Acuerdos externos y debates (estado a octubre de 2026)",
        blocks: [
          { type: "table", headers: ["Socio", "Tipo", "Situación para Uruguay"], rows: [
            ["Chile", "ACE 35 (ZLC)", "Vigente desde 1996; además Uruguay tiene el ALC bilateral (ACE 73)"],
            ["Bolivia", "ACE 36", "Vigente; Bolivia en transición como Estado Parte"],
            ["Perú", "ACE 58", "Vigente"],
            ["Colombia / Ecuador / Venezuela", "ACE 59 (con Colombia, actualizado por ACE 72)", "Vigente"],
            ["India", "Preferencias fijas", "Vigente desde 2009"],
            ["Israel", "TLC", "Primer TLC extrarregional del bloque; vigente para Uruguay desde 2009-2010"],
            ["SACU", "Preferencias fijas", "Vigente desde 1/4/2016"],
            ["Egipto", "TLC", "Vigente desde 1/9/2017"],
            ["**Singapur**", "TLC de nueva generación (firmado 7/12/2023)", "**Vigente para Uruguay desde el 1/3/2026**"],
            ["**Unión Europea**", "EMPA + Acuerdo Comercial Interino (firmados 17/01/2026)", "Interino en **aplicación provisional desde el 1/5/2026**"],
            ["**EFTA**", "TLC (firmado 16/09/2025)", "Uruguay lo ratificó en junio de 2026; Argentina y Paraguay en trámite"],
            ["EAU, Canadá, Japón", "Negociaciones", "EAU es prioridad de la presidencia uruguaya; con Japón se lanzó la negociación en 2026"]
          ] },
          { type: "callout", tone: "warn", title: "EFTA: ¿ya rige?", text: "A la fecha de la investigación, el acuerdo MERCOSUR–EFTA (Suiza, Noruega, Islandia y Liechtenstein) **no figuraba como vigente** para Uruguay, a pesar de la ratificación uruguaya de junio de 2026. Antes de aplicarlo en una operación, confirmalo en el MEF o el MRREE." },
          { type: "p", text: "Los temas calientes del bloque en 2026:" },
          { type: "list", items: [
            "**Decisión CMC 32/00**: compromete a negociar **en conjunto** los acuerdos comerciales con preferencias arancelarias. Uruguay y Paraguay vienen pidiendo poder negociar a distintas velocidades.",
            "**Argentina–EE.UU.**: Argentina firmó el **5/02/2026** un Acuerdo de Comercio e Inversión Recíprocos con EE.UU., lo que reabrió el debate sobre la compatibilidad con el AEC y la Dec. 32/00.",
            "**China**: el presidente Orsi se reunió con Xi Jinping el **3/02/2026**; la declaración conjunta expresa el deseo de un “próximo inicio de negociaciones” de un TLC MERCOSUR–China, pero **no hay negociación formal iniciada**.",
            "**CPTPP**: en noviembre de 2025 los miembros decidieron iniciar el proceso de adhesión de Uruguay y crearon un **Grupo de Trabajo de Adhesión**. El 26/06/2026 los ministros valoraron los avances y pidieron acelerar. El gobierno estima que el proceso puede llevar unos dos años."
          ] },
          { type: "eli5", text: "La **Dec. 32/00** es como un grupo de amigos que alquila una casa en la playa: acordaron que los arreglos con el dueño se negocian entre todos. Uruguay quiere poder hablar también por su cuenta con otros dueños, y eso genera discusión en el grupo." }
        ]
      }
    ],
    eli5: [
      { concept: "Unión aduanera vs. zona de libre comercio", text: "En la zona de libre comercio cada vecino del edificio cobra su propia entrada a los de afuera; en la unión aduanera hay una sola entrada en la puerta del edificio, igual para todos." },
      { concept: "Internalización", text: "Es como una regla nueva que vota el consorcio: no se aplica hasta que cada apartamento la pegue en su heladera. Recién cuando todos la pegaron, empieza a regir para todos a la vez." },
      { concept: "Certificado de origen", text: "Es la cédula de la mercadería: prueba dónde nació para que entre con el descuento del acuerdo." },
      { concept: "Decisión 32/00", text: "Es el pacto de los amigos de negociar juntos con el dueño de la casa de la playa. Si uno quiere negociar solo, tiene que convencer al resto." }
    ],
    keyPoints: [
      "El MERCOSUR es una unión aduanera imperfecta, intergubernamental, que decide por consenso.",
      "CMC dicta Decisiones, GMC Resoluciones y CCM Directivas; las normas deben internalizarse.",
      "Ouro Preto (1994) le dio personalidad jurídica; Olivos (2002) creó el TPR en Asunción; Ushuaia (1998) es la cláusula democrática.",
      "La Secretaría y el PARLASUR están en Montevideo; Paraguay es depositario.",
      "NCM de 8 dígitos; AEC vigente desde el 1/1/1995 con excepciones nacionales.",
      "Origen intrazona: totalmente obtenido, salto de partida o no originarios hasta 40% del FOB; el COD es obligatorio con Argentina y Brasil.",
      "Singapur vigente para Uruguay desde el 1/3/2026; UE en aplicación provisional desde el 1/5/2026; EFTA ratificado por Uruguay pero sin vigencia confirmada.",
      "Uruguay ejerce la Presidencia Pro Tempore desde el 30/06/2026 y avanza en la adhesión al CPTPP."
    ],
    probableQuestions: [
      { question: "¿Qué normas dicta cada órgano decisorio del MERCOSUR?", answer: "El CMC dicta Decisiones, el GMC Resoluciones y la CCM Directivas." },
      { question: "¿Qué estableció el Protocolo de Ouro Preto?", answer: "La estructura institucional definitiva, la personalidad jurídica internacional del MERCOSUR y la toma de decisiones por consenso." },
      { question: "¿Dónde tiene sede el Tribunal Permanente de Revisión?", answer: "En Asunción. La Secretaría y el PARLASUR están en Montevideo." },
      { question: "¿Por qué se dice que el MERCOSUR es una unión aduanera imperfecta?", answer: "Porque su AEC tiene listas de excepciones, regímenes especiales y sectores excluidos (automotor, azúcar), y se cobra en cada frontera." },
      { question: "¿Cuántos dígitos tiene la NCM?", answer: "Ocho: seis del Sistema Armonizado y dos propios del MERCOSUR." },
      { question: "¿Desde cuándo rige el TLC MERCOSUR–Singapur para Uruguay?", answer: "Desde el 1/3/2026." },
      { question: "¿Qué es la Decisión CMC 32/00?", answer: "El compromiso de negociar en conjunto los acuerdos comerciales con preferencias arancelarias con terceros países o bloques." },
      { question: "¿Cuándo asumió Uruguay la Presidencia Pro Tempore?", answer: "El 30/06/2026, en la LXVIII Cumbre, de manos de Paraguay." },
      { question: "¿Qué es la internalización de normas?", answer: "La incorporación de las normas del MERCOSUR al derecho interno de cada Estado; entran en vigor 30 días después de que la Secretaría comunica que todos las incorporaron." }
    ],
    sources: [
      { title: "MERCOSUR: textos fundacionales", url: "https://www.mercosur.int/documentos-y-normativa/textos-fundacionales/" },
      { title: "Comunicado conjunto de los Presidentes, LXVIII Cumbre (30/06/2026)", url: "https://www.mre.gov.py/wp-content/uploads/2026/06/Comunicado-conjunto-de-los-presidentes-de-los-Estados-Partes-del-Mercosur.pdf" },
      { title: "MercoPress: Uruguay asume la presidencia del MERCOSUR", url: "https://en.mercopress.com/2026/07/01/uruguay-takes-over-the-mercosur-presidency-vowing-to-modernize-and-open-the-bloc" },
      { title: "MEF: Acuerdos comerciales de Uruguay", url: "https://www.gub.uy/ministerio-economia-finanzas/institucional/tratados/acuerdos-comerciales" },
      { title: "MRREE: entrada en vigor MERCOSUR–Singapur", url: "https://www.gub.uy/ministerio-relaciones-exteriores/comunicacion/comunicados/comunicado-conjunto-entrada-vigor-del-acuerdo-libre-comercio-mercosur-0" },
      { title: "El Observador: Uruguay ratifica MERCOSUR–EFTA", url: "https://www.elobservador.com.uy/nacional/uruguay-ratifica-acuerdo-del-mercosur-efta-la-oportunidad-los-cortes-calidad-carne-bovina-y-los-potenciales-inversores-muy-destacables-n6047640" },
      { title: "DFAT: Declaración Ministerial CPTPP (26/06/2026)", url: "https://www.dfat.gov.au/trade/agreements/in-force/cptpp/commission-meetings/comprehensive-and-progressive-agreement-trans-pacific-partnership-cptpp-joint-ministerial-statement-expansion-implementation-and-cooperation-26-june-2026" },
      { title: "Bloomberg Línea: Orsi y Xi Jinping", url: "https://www.bloomberglinea.com/latinoamerica/uruguay/mercosur-cerca-de-un-acuerdo-con-china-esto-hablaron-orsi-y-xi-jinping-en-una-reunion/" },
      { title: "MEF: Certificación de Origen Digital", url: "https://www.gub.uy/ministerio-economia-finanzas/politicas-y-gestion/certificacion-origen-digital" }
    ]
  },

  // ─────────────────────────────────────────────────────────────
  {
    id: "p10-s3",
    moduleId: "p10",
    title: "ALADI: Tratado de Montevideo 1980 y sus acuerdos",
    summary: "La ALADI es el paraguas jurídico de casi todos los acuerdos de Uruguay con América Latina, incluido el propio MERCOSUR a través del ACE 18. Entenderla te permite leer un certificado de origen sin perderte en las siglas.",
    minutes: 14,
    sections: [
      {
        heading: "Qué es la ALADI y de dónde viene",
        blocks: [
          { type: "p", text: "La **Asociación Latinoamericana de Integración (ALADI)** nace con el **Tratado de Montevideo de 1980 (TM80)**, firmado el **12/08/1980**. Reemplazó a la **ALALC** (Asociación Latinoamericana de Libre Comercio, creada por el Tratado de Montevideo de 1960), que había fracasado en su intento de armar una zona de libre comercio con plazos rígidos." },
          { type: "p", text: "Su sede está en **Montevideo** y es el mayor grupo latinoamericano de integración. El objetivo de largo plazo es llegar, en forma gradual y **sin plazos fijos**, a un **mercado común latinoamericano**. Para lograrlo, el TM80 se apoya en cinco principios (art. 3): **pluralismo**, **convergencia** (ir multilateralizando los acuerdos parciales), **flexibilidad**, **tratamientos diferenciales** según el nivel de desarrollo y **multiplicidad** de instrumentos." },
          { type: "eli5", text: "La ALALC fue como un grupo de amigos que se prometió correr juntos una maratón en una fecha fija; como no todos estaban en forma, no llegaron. La ALADI cambió el plan: “cada uno entrena a su ritmo, se juntan en grupitos para correr tramos, y de a poco vamos sumando a todos”." },
          { type: "p", text: "Tiene **13 miembros**: Argentina, Bolivia, Brasil, Chile, Colombia, Cuba, Ecuador, México, Panamá, Paraguay, Perú, Uruguay y Venezuela. Cuba adhirió en 1999 y Panamá en 2012. Los países se agrupan por nivel de desarrollo: Bolivia, Ecuador y Paraguay son de menor desarrollo económico relativo, y Uruguay está en el grupo de desarrollo intermedio." }
        ]
      },
      {
        heading: "Órganos",
        blocks: [
          { type: "list", items: [
            "**Consejo de Ministros** de Relaciones Exteriores: órgano supremo, dicta Resoluciones.",
            "**Conferencia de Evaluación y Convergencia**.",
            "**Comité de Representantes**: órgano permanente, con embajadores en Montevideo.",
            "**Secretaría General**: órgano técnico y **depositaria** de los acuerdos."
          ] },
          { type: "callout", tone: "uy", title: "Todo pasa en Montevideo", text: "Cuando un acuerdo latinoamericano se “protocoliza en ALADI”, el texto queda depositado en la Secretaría General, en Montevideo. Por eso los acuerdos con Chile, Perú o Colombia tienen número de ACE." }
        ]
      },
      {
        heading: "Los mecanismos: PAR, AAR y AAP",
        blocks: [
          { type: "table", headers: ["Mecanismo", "Quiénes participan", "Qué es"], rows: [
            ["**PAR** – Preferencia Arancelaria Regional", "Todos", "Rebaja porcentual sobre el arancel para terceros, según la categoría de desarrollo. Hoy pesa poco porque los ACE la superaron"],
            ["**AAR** – Acuerdos de Alcance Regional", "Todos", "Por ejemplo, apertura de mercados a favor de los países de menor desarrollo, cooperación científica, bienes culturales"],
            ["**AAP** – Acuerdos de Alcance Parcial", "Dos o más países, no todos", "Deben quedar abiertos a la adhesión de los demás y tender a la convergencia. Subtipos: complementación económica (ACE), comerciales, agropecuarios, de promoción del comercio, etc."]
          ] },
          { type: "p", text: "El **ACE (Acuerdo de Complementación Económica)** es el instrumento estrella. Permite crear zonas de libre comercio y uniones aduaneras **bajo el paraguas jurídico de la ALADI**, que a su vez está cubierta frente a la OMC por la **Cláusula de Habilitación** de 1979. Por eso tanto el MERCOSUR como sus acuerdos con países sudamericanos están protocolizados en ALADI." },
          { type: "eli5", text: "La ALADI es una **casa grande** con muchas habitaciones. La PAR es la regla de la casa que vale para todos (“nos hacemos un pequeño descuento entre nosotros”). Los ACE son **contratos entre dos o tres habitaciones** que deciden compartir todo, pero siempre con la puerta abierta para que otros se sumen." }
        ]
      },
      {
        heading: "ACE 18: la pieza que une MERCOSUR y ALADI",
        blocks: [
          { type: "p", text: "El **ACE 18** es el Acuerdo de Complementación Económica N.º 18, suscrito el **29/11/1991** por Argentina, Brasil, Paraguay y Uruguay en el marco de la ALADI. Su función es **registrar (protocolizar) en ALADI el Programa de Liberación Comercial del Tratado de Asunción**. Sus protocolos adicionales recogen el régimen de origen MERCOSUR y el cronograma de desgravación." },
          { type: "p", text: "Por eso, cuando mirás un **certificado de origen MERCOSUR**, en el campo del acuerdo dice **“ACE 18”**. No es un detalle burocrático: es la referencia jurídica que habilita el arancel 0% intrazona." },
          { type: "callout", tone: "warn", title: "“AEC 18” no existe", text: "Si en algún programa o apunte leés “AEC 18”, casi seguro es una errata por **ACE 18**. **ACE** = **A**cuerdo de **C**omplementación **E**conómica (un *acuerdo*). **AEC** = **A**rancel **E**xterno **C**omún (un *arancel*). No existe un “arancel número 18”." },
          { type: "eli5", text: "El **ACE 18** es el **contrato de alquiler** que el MERCOSUR firmó para vivir dentro de la casa grande de la ALADI. El **AEC** es el **precio de la entrada** que el MERCOSUR les cobra a los que vienen de afuera. Uno es un papel que te deja vivir ahí; el otro es una tarifa." }
        ]
      },
      {
        heading: "Los ACE que más vas a usar en Uruguay",
        blocks: [
          { type: "table", headers: ["N.º", "Partes", "Qué es"], rows: [
            ["ACE 2", "Uruguay–Brasil", "Protocolo de Expansión Comercial (1982), hoy sobre todo automotor"],
            ["**ACE 18**", "MERCOSUR", "Programa de liberación del MERCOSUR (1991)"],
            ["ACE 35", "MERCOSUR–Chile", "Zona de libre comercio (1996)"],
            ["ACE 36", "MERCOSUR–Bolivia", "Zona de libre comercio (1997)"],
            ["ACE 54", "MERCOSUR–México", "Acuerdo marco"],
            ["ACE 55", "MERCOSUR–México", "Automotor"],
            ["ACE 58", "MERCOSUR–Perú", "Zona de libre comercio (2005)"],
            ["ACE 59", "MERCOSUR–Colombia, Ecuador, Venezuela", "Zona de libre comercio (2005)"],
            ["**ACE 60**", "**Uruguay–México**", "TLC bilateral, firmado el 15/11/2003 y vigente desde el 15/07/2004; el primer TLC “de nueva generación” de Uruguay"],
            ["ACE 62", "MERCOSUR–Cuba", "Preferencias"],
            ["ACE 72", "MERCOSUR–Colombia", "Reemplaza la parte colombiana del ACE 59 (2017)"],
            ["**ACE 73**", "**Uruguay–Chile**", "ALC bilateral de nueva generación: firmado el 4/10/2016, vigente desde el 13/12/2018"]
          ], caption: "Lista para memorizar" },
          { type: "callout", tone: "tip", title: "Truco para no mezclarlos", text: "35 = MERCOSUR–Chile (el viejo, de bloque). 73 = Uruguay–Chile (el nuevo, bilateral). 60 = Uruguay–México. 18 = MERCOSUR. Si te acordás de esos cuatro, ya respondés la mayoría de las preguntas." },
          { type: "callout", tone: "warn", title: "Datos a confirmar", text: "Hay otros ACE bilaterales de Uruguay (por ejemplo el ACE 57 automotor con Argentina y el ACE 63 con Venezuela) cuyos años de vigencia no están confirmados en la investigación. Antes de citarlos, chequeá la lista de acuerdos vigentes del MEF o de ALADI." }
        ]
      },
      {
        heading: "El certificado de origen en la práctica",
        blocks: [
          { type: "doc", docId: "certificado-origen" },
          { type: "list", items: [
            "**Quién lo emite**: entidades habilitadas por cada gobierno, bajo supervisión del MEF en el caso uruguayo, con firmas registradas en la Secretaría General de ALADI.",
            "**Qué contiene**: exportador, importador, factura comercial, descripción y clasificación (NALADISA para ALADI, NCM para MERCOSUR), **norma de origen invocada**, **acuerdo invocado** (por ejemplo “ACE 35”), firma y sello.",
            "**Formato digital**: el Certificado de Origen Digital (COD) se tramita con firma electrónica; con Argentina y Brasil es obligatorio."
          ] },
          { type: "example", title: "Exportar lácteos a Chile", text: "Una cooperativa de Florida exporta queso a Santiago. El certificado tiene que invocar el acuerdo que el importador chileno va a usar para pedir la preferencia (por ejemplo, el **ACE 35** o el **ACE 73**), con la clasificación y la norma de origen correctas. Si el certificado dice un acuerdo y el importador declara otro, la aduana chilena puede negar la preferencia." },
          { type: "callout", tone: "warn", title: "Plazos del certificado", text: "La regla general de validez de 180 días y los plazos de emisión respecto del embarque varían según el acuerdo. Confirmalos con la entidad emisora o en el texto del ACE antes de embarcar." }
        ]
      }
    ],
    eli5: [
      { concept: "ALADI", text: "Es una casa grande en Montevideo donde viven 13 países. Hay reglas para todos (la PAR) y contratos entre habitaciones (los ACE) que siempre dejan la puerta abierta para que otros se sumen." },
      { concept: "ACE 18 vs. AEC", text: "El ACE 18 es el contrato de alquiler del MERCOSUR dentro de la casa de la ALADI; el AEC es el precio de la entrada que el MERCOSUR cobra a los de afuera." },
      { concept: "Convergencia", text: "Es como juntar las mesas chicas de un cumpleaños para armar de a poco una mesa larga donde terminen sentados todos." },
      { concept: "Cláusula de Habilitación", text: "Es el permiso que la OMC le da a los países en desarrollo para hacerse descuentos entre ellos sin tener que dárselos a todo el mundo, como un club que puede tener precio de socio." }
    ],
    keyPoints: [
      "La ALADI nace del Tratado de Montevideo de 1980 (12/08/1980) y reemplazó a la ALALC.",
      "Tiene sede en Montevideo y 13 miembros; su objetivo es un mercado común latinoamericano sin plazos fijos.",
      "Mecanismos: PAR (todos, rebaja porcentual), AAR (todos) y AAP (algunos), entre ellos los ACE.",
      "El ACE 18 (29/11/1991) protocoliza en ALADI el programa de liberación del MERCOSUR; por eso figura en el certificado de origen MERCOSUR.",
      "“AEC 18” no existe: ACE es un acuerdo, AEC es un arancel.",
      "ACE 60 = TLC Uruguay–México (vigente desde 2004); ACE 73 = ALC Uruguay–Chile (vigente desde 2018); ACE 35 = MERCOSUR–Chile.",
      "El certificado de origen invoca un acuerdo y una norma de origen concretos; con Argentina y Brasil es digital y obligatorio."
    ],
    probableQuestions: [
      { question: "¿Qué tratado creó la ALADI y a quién reemplazó?", answer: "El Tratado de Montevideo de 1980; reemplazó a la ALALC, creada en 1960." },
      { question: "¿Cuántos miembros tiene la ALADI?", answer: "Trece." },
      { question: "¿Qué es el ACE 18?", answer: "El Acuerdo de Complementación Económica N.º 18 de ALADI, que protocoliza el programa de liberación comercial del MERCOSUR; figura en el certificado de origen MERCOSUR." },
      { question: "¿Qué diferencia hay entre ACE y AEC?", answer: "ACE es un Acuerdo de Complementación Económica (un tratado); AEC es el Arancel Externo Común del MERCOSUR (un arancel)." },
      { question: "¿Qué es la PAR?", answer: "La Preferencia Arancelaria Regional: una rebaja porcentual que se otorgan todos los miembros de ALADI según su nivel de desarrollo." },
      { question: "¿Qué diferencia hay entre un AAR y un AAP?", answer: "En el AAR participan todos los miembros; en el AAP solo algunos, y debe quedar abierto a la adhesión de los demás." },
      { question: "¿Cómo está registrado en ALADI el TLC Uruguay–México?", answer: "Como ACE 60, vigente desde el 15/07/2004." },
      { question: "¿Qué número tiene el ALC Uruguay–Chile y cuál el acuerdo MERCOSUR–Chile?", answer: "El ALC bilateral es el ACE 73; el MERCOSUR–Chile es el ACE 35." }
    ],
    sources: [
      { title: "ALADI: Quiénes somos", url: "https://www.aladi.org/sitioaladi/language/es/quienes-somos/" },
      { title: "ALADI: Acuerdos actuales", url: "https://www.aladi.org/sitioaladi/acuerdos-actuales/" },
      { title: "ALADI: Tratado de Montevideo 1980", url: "https://www.aladi.org/sitioaladi/tratado-de-montevideo-1980/" },
      { title: "MEF: Acuerdos comerciales de Uruguay", url: "https://www.gub.uy/ministerio-economia-finanzas/institucional/tratados/acuerdos-comerciales" },
      { title: "MEF: Certificación de Origen Digital", url: "https://www.gub.uy/ministerio-economia-finanzas/politicas-y-gestion/certificacion-origen-digital" }
    ]
  },

  // ─────────────────────────────────────────────────────────────
  {
    id: "p10-s4",
    moduleId: "p10",
    title: "Unión Europea y el acuerdo MERCOSUR–UE",
    summary: "Cómo la “Comunidad Europea” se convirtió en la Unión Europea, por qué el acuerdo con el MERCOSUR se partió en dos y qué cambió para Uruguay desde que se aplica en forma provisional el 1/5/2026. Estado a octubre de 2026.",
    minutes: 18,
    sections: [
      {
        heading: "De la “Comunidad Europea” a la Unión Europea",
        blocks: [
          { type: "p", text: "Muchos programas y textos viejos todavía hablan de la “Comunidad Europea”. Conviene saber por qué hoy se dice **Unión Europea** y qué pasó en el medio:" },
          { type: "table", headers: ["Año", "Hito"], rows: [
            ["1951", "**Tratado de París**: nace la CECA (Comunidad Europea del Carbón y del Acero) con seis países: Alemania Occidental, Francia, Italia, Bélgica, Países Bajos y Luxemburgo"],
            ["1957", "**Tratados de Roma**: CEE (Comunidad Económica Europea) y Euratom; objetivo de unión aduanera y mercado común"],
            ["1968", "Se completa la **unión aduanera** con un arancel aduanero común"],
            ["1986", "**Acta Única Europea**: mercado único para 1992"],
            ["1992", "**Tratado de Maastricht** (vigor 1993): nace la **Unión Europea**; la CEE pasa a llamarse **Comunidad Europea (CE)**"],
            ["1999 / 2002", "Euro: contable en 1999, billetes en 2002"],
            ["2009", "**Tratado de Lisboa**: la UE **sustituye y sucede** a la Comunidad Europea y adquiere personalidad jurídica única. Desde ahí la “Comunidad Europea” ya no existe jurídicamente"],
            ["2020", "Sale el Reino Unido: quedan **27 Estados miembros**"]
          ] },
          { type: "eli5", text: "Es como un club de barrio que empezó siendo “Club del Carbón”, después se llamó “Club Económico”, más tarde “Comunidad” y finalmente se transformó en una “Unión” más grande que absorbió todo lo anterior. Si encontrás un carné viejo que dice “Comunidad Europea”, es del mismo club, pero hoy el nombre legal es **Unión Europea**." },
          { type: "p", text: "En la escala de integración, la UE es una **unión económica y monetaria**: mercado único, políticas armonizadas y, para la eurozona, una moneda y un banco central comunes." }
        ]
      },
      {
        heading: "Quién negocia el comercio en la UE",
        blocks: [
          { type: "p", text: "La **política comercial común es competencia exclusiva de la UE** (art. 3 del Tratado de Funcionamiento de la UE). La negocia la **Comisión Europea**, la autoriza el **Consejo** (por mayoría cualificada en lo que es exclusivo) y requiere la **aprobación del Parlamento Europeo**." },
          { type: "p", text: "Si un acuerdo incluye materias de competencia compartida con los Estados (por ejemplo, ciertos aspectos de inversión o políticos), es un acuerdo **mixto** y además tiene que ratificarlo **cada uno de los 27 parlamentos nacionales**. Esa diferencia explica por qué el acuerdo con el MERCOSUR se dividió en dos." },
          { type: "eli5", text: "Imaginá una **mudanza con dos camiones**. El camión de los muebles de comercio lo puede despachar la UE sola, con su propia firma, y sale ya. El camión de las cosas personales (política y cooperación) tiene que esperar a que los 27 dueños de la casa firmen uno por uno." }
        ]
      },
      {
        heading: "Cronología del acuerdo MERCOSUR–UE",
        blocks: [
          { type: "table", headers: ["Fecha", "Hecho"], rows: [
            ["15/12/1995", "Acuerdo Marco Interregional de Cooperación UE–MERCOSUR (Madrid), vigente desde 1999"],
            ["2010", "Relanzamiento de las negociaciones"],
            ["28/06/2019", "“Acuerdo en principio” del pilar comercial"],
            ["**6/12/2024**", "**Conclusión política** de la negociación, en la Cumbre del MERCOSUR en **Montevideo**"],
            ["3/09/2025", "La Comisión propone dividir el acuerdo en **EMPA** (Acuerdo de Asociación) e **iTA** (Acuerdo Comercial Interino)"],
            ["9/01/2026", "El Consejo de la UE autoriza la firma y la aplicación provisional del iTA"],
            ["**17/01/2026**", "**Firma** del EMPA y del iTA en **Asunción**"],
            ["21/01/2026", "El **Parlamento Europeo** pide un **dictamen al Tribunal de Justicia de la UE (TJUE)** y suspende su procedimiento de aprobación"],
            ["**26/02/2026**", "Argentina y Uruguay completan la ratificación del iTA (Uruguay: **Ley 20.462**)"],
            ["27/02/2026", "La Comisión anuncia que avanza con la aplicación provisional pese a la consulta al TJUE"],
            ["4/03/2026", "Aprueban los Senados de Brasil y de Paraguay"],
            ["15/04/2026", "Se publica en el Diario Oficial de la UE el aviso de aplicación provisional"],
            ["**1/05/2026**", "**Comienza la aplicación provisional del iTA** para Argentina, Brasil, Paraguay y Uruguay"],
            ["**29/09/2026**", "**TJUE, asunto C-460/26 R (Polonia c. Consejo)**: se rechazan las medidas cautelares pedidas por Polonia para suspender la aplicación provisional. El fondo del recurso y el dictamen pedido por el Parlamento **siguen pendientes**"],
            ["Diciembre 2026 (previsto)", "Primer Consejo del Acuerdo Comercial Interino, durante la presidencia uruguaya del MERCOSUR"]
          ], caption: "Estado a octubre de 2026" },
          { type: "callout", tone: "uy", title: "Uruguay, primero en ratificar", text: "El MRREE presentó el 1/5/2026 como el inicio del “primer acuerdo de libre comercio del bloque” con la UE en entrar en aplicación. Uruguay se presentó como el primer país del bloque en ratificar, junto con Argentina, el 26/02/2026." },
          { type: "callout", tone: "warn", title: "Lo que todavía puede cambiar", text: "A octubre de 2026 el acuerdo se aplica **provisionalmente**: el Parlamento Europeo no lo aprobó todavía, el TJUE no emitió el dictamen y el recurso de Polonia sigue abierto en cuanto al fondo. Si te preguntan en una entrevista, decí “se aplica provisionalmente desde el 1 de mayo de 2026, con temas pendientes en el TJUE”." }
        ]
      },
      {
        heading: "EMPA vs. iTA",
        blocks: [
          { type: "table", headers: ["", "EMPA (Acuerdo de Asociación)", "iTA (Acuerdo Comercial Interino)"], rows: [
            ["Contenido", "Tres pilares: diálogo político, cooperación y comercio", "Solo el pilar comercial y de inversión de competencia exclusiva de la UE"],
            ["Naturaleza en la UE", "Mixto", "Solo-UE"],
            ["Aprobación en la UE", "Unanimidad del Consejo + Parlamento Europeo + ratificación de los 27", "Mayoría cualificada en el Consejo + Parlamento Europeo"],
            ["Situación (octubre 2026)", "Firmado; en ratificación", "Firmado; **aplicación provisional desde el 1/5/2026**"],
            ["Relación", "Cuando entre en vigor, **deroga y reemplaza** al iTA", "Es un puente"]
          ] },
          { type: "eli5", text: "El iTA es un **puente provisorio de madera** que se arma para cruzar el río ya mismo; el EMPA es el **puente de hormigón** definitivo. Cuando el de hormigón esté terminado, se desarma el de madera." }
        ]
      },
      {
        heading: "Qué cambia para un exportador uruguayo",
        blocks: [
          { type: "p", text: "Según la Comisión Europea, la **UE liberaliza alrededor del 92%** de sus importaciones desde el MERCOSUR (industriales hasta en 10 años; cerca del 82% de las importaciones agrícolas liberalizadas y el resto con cuotas). El **MERCOSUR elimina aranceles sobre alrededor del 91%** de sus importaciones desde la UE, en plazos de hasta 10 años y 15 años o más para lo sensible; los autos (arancel actual 35%) en unos 15 años y los vehículos eléctricos e híbridos con un calendario de 18 años." },
          { type: "p", text: "El MRREE destaca que **desde el primer día** hay **arancel 0** para, entre otros: la carne de la **cuota Hilton**, pescados, menudencias bovinas y ovinas, manzanas y cerezas frescas, legumbres, frutos secos y pasas, agua mineral, cerveza y **bebidas espirituosas**, harina de soja, **tops de lana**, fertilizantes y fungicidas." },
          { type: "table", headers: ["Producto", "Qué da el acuerdo"], rows: [
            ["Carne bovina, cuota nueva", "**99.000 t** peso carcasa con arancel intracuota del **7,5%**, escalonada en 5 años, para todo el MERCOSUR"],
            ["Carne bovina, cuota Hilton", "La cuota existente pasa a **0%** intracuota (antes pagaba 20%)"],
            ["Quesos (cuota UE en el MERCOSUR)", "30.000 t para quesos europeos, a 10 años"]
          ] },
          { type: "callout", tone: "uy", title: "Cómo se administran las cuotas en Uruguay", text: "Como el MERCOSUR todavía **no acordó cómo repartir las cuotas** entre sus miembros, el acceso es por **“primero llegado, primero servido”**. **INAC** emite los certificados de autorización de cuota para carne bovina, aviar y porcina; el **MEF** emite el resto, tramitados por la **VUCE**, y reglamenta su uso." },
          { type: "callout", tone: "warn", title: "Cifras a confirmar", text: "El MRREE publica porcentajes distintos a los de la Comisión (por ejemplo, que el MERCOSUR elimina aranceles sobre cerca del 75% del comercio desde el inicio), porque usan bases de cálculo diferentes. Y las cuotas de otros productos (aves, cerdo, azúcar, etanol, arroz, miel, maíz) conviene verificarlas en el texto del acuerdo antes de citarlas." }
        ]
      },
      {
        heading: "Origen, indicaciones geográficas, sostenibilidad y salvaguardias",
        blocks: [
          { type: "list", items: [
            "**Reglas de origen**: hay un protocolo con reglas específicas por producto, **acumulación bilateral** y, como novedad, **autocertificación del origen** por parte del exportador (una declaración en la factura o un documento comercial), con transición desde los certificados emitidos por entidades.",
            "**Indicaciones geográficas (IG)**: el MERCOSUR protege unas **350 IG europeas** (Champagne, Prosciutto di Parma, Roquefort, Rioja) y la UE protege IG del MERCOSUR.",
            "**Desarrollo sostenible**: compromisos sobre la OIT y el **Acuerdo de París**, que es un **elemento esencial** (un incumplimiento grave puede llevar a suspender el acuerdo), y freno a la deforestación ilegal desde 2030.",
            "**Salvaguardias agrícolas**: un reglamento bilateral permite a la UE suspender preferencias si las importaciones de productos sensibles crecen y causan perjuicio grave a sus productores (con vigilancia reforzada sobre carne, aves y azúcar).",
            "**Otros capítulos**: servicios, compras públicas, medidas sanitarias y fitosanitarias, obstáculos técnicos, facilitación del comercio, pymes, solución de controversias entre Estados y propiedad intelectual."
          ] },
          { type: "eli5", text: "Una **indicación geográfica** es como el apellido de una familia famosa: solo los que realmente son de esa familia (los quesos hechos en Roquefort) pueden usarlo. Si cualquiera le pone “Roquefort” a su queso, está usando un apellido que no es suyo." },
          { type: "example", title: "Una exportación de carne en junio de 2026", text: "Un frigorífico uruguayo quiere vender cortes de alta calidad a Países Bajos. Desde el 1/5/2026 la carne de la cuota Hilton entra con arancel 0%. Necesita el **certificado de autorización de cuota de INAC**, probar el **origen** (el acuerdo admite autocertificación), los certificados sanitarios del MGAP y cumplir las normas sanitarias europeas, incluida la trazabilidad. Como la cuota es “primero llegado, primero servido”, la velocidad del trámite importa." }
        ]
      },
      {
        heading: "Por qué el acuerdo importaba tanto: el SGP perdido",
        blocks: [
          { type: "p", text: "El **SGP (Sistema Generalizado de Preferencias)** es un régimen **unilateral**: un país desarrollado rebaja aranceles a países en desarrollo sin pedir nada a cambio. La UE reformó el suyo (Reglamento (UE) 978/2012) y **excluyó a los países clasificados por el Banco Mundial como de ingreso alto o medio-alto durante tres años seguidos**." },
          { type: "p", text: "Resultado: **Uruguay dejó de ser beneficiario del SGP europeo el 1/1/2014** (al igual que Argentina, Brasil y Venezuela). Desde entonces varias exportaciones uruguayas pagaban el arancel general. El acuerdo con el MERCOSUR permite recuperar, y en muchos casos superar, ese acceso preferencial, pero ahora de forma **recíproca y negociada**." },
          { type: "eli5", text: "El SGP era como un **descuento de estudiante**: te lo daban porque eras “joven” (país en desarrollo). Cuando Uruguay “creció” y pasó a ingreso alto, se lo sacaron. El acuerdo con la UE es como un **contrato de socio**: ahora el descuento no es un regalo, es parte de un trato donde las dos partes dan algo." }
        ]
      }
    ],
    eli5: [
      { concept: "Comunidad Europea → Unión Europea", text: "Es el mismo club que fue cambiando de nombre a medida que crecía; desde 2009 el nombre legal es Unión Europea y la vieja “Comunidad” quedó absorbida." },
      { concept: "Acuerdo dividido en EMPA e iTA", text: "Una mudanza con dos camiones: el de comercio sale ya porque la UE lo despacha sola; el de política y cooperación espera la firma de los 27 dueños." },
      { concept: "Aplicación provisional", text: "Es usar el puente de madera mientras se termina el de hormigón: ya cruzás el río, aunque la obra definitiva no esté inaugurada." },
      { concept: "Primero llegado, primero servido", text: "Como la fila de la panadería cuando quedan pocas medialunas: el que llega primero con todos los papeles se lleva su parte de la cuota." },
      { concept: "SGP", text: "Un descuento de estudiante que te sacan cuando te recibís y empezás a ganar bien." }
    ],
    keyPoints: [
      "La Comunidad Europea fue sustituida y sucedida por la Unión Europea con el Tratado de Lisboa (2009); hoy son 27 Estados miembros.",
      "La política comercial es competencia exclusiva de la UE; los acuerdos mixtos requieren además a los 27 parlamentos nacionales.",
      "El acuerdo se concluyó políticamente el 6/12/2024 en Montevideo y se firmó el 17/01/2026 en Asunción, dividido en EMPA e iTA.",
      "Uruguay lo aprobó por la Ley 20.462 y ratificó el 26/02/2026.",
      "El iTA se aplica provisionalmente desde el 1/5/2026; el Parlamento Europeo pidió un dictamen al TJUE (21/01/2026) y el TJUE rechazó las cautelares de Polonia el 29/09/2026 (C-460/26 R).",
      "Cuota Hilton a 0% desde el primer día; nueva cuota de 99.000 t de carne con 7,5% intracuota en 5 años.",
      "En Uruguay las cuotas se asignan por “primero llegado, primero servido”: INAC para carnes, MEF para el resto vía VUCE.",
      "El acuerdo admite autocertificación del origen; Uruguay había perdido el SGP de la UE el 1/1/2014."
    ],
    probableQuestions: [
      { question: "¿Por qué hoy no se habla de “Comunidad Europea”?", answer: "Porque con el Tratado de Lisboa (2009) la Unión Europea sustituyó y sucedió a la Comunidad Europea y tiene personalidad jurídica única." },
      { question: "¿Cuándo y dónde se firmó el acuerdo MERCOSUR–UE?", answer: "El 17/01/2026 en Asunción, en dos instrumentos: el Acuerdo de Asociación (EMPA) y el Acuerdo Comercial Interino (iTA)." },
      { question: "¿Desde cuándo se aplica el acuerdo con la UE y en qué forma?", answer: "Desde el 1/5/2026, en aplicación provisional del Acuerdo Comercial Interino." },
      { question: "¿Por qué la UE dividió el acuerdo?", answer: "Para que la parte comercial, de competencia exclusiva de la UE, pudiera aprobarse sin esperar la ratificación de los 27 parlamentos nacionales que exige un acuerdo mixto." },
      { question: "¿Qué pasó en el TJUE en 2026?", answer: "El Parlamento Europeo pidió un dictamen el 21/01/2026 (pendiente) y el 29/09/2026, en el asunto C-460/26 R, el TJUE rechazó las medidas cautelares pedidas por Polonia; el fondo sigue pendiente." },
      { question: "¿Cómo se asignan en Uruguay las cuotas del acuerdo?", answer: "Por “primero llegado, primero servido”, con certificados de INAC para carnes y del MEF para el resto, tramitados por la VUCE." },
      { question: "¿Qué cambió para la cuota Hilton?", answer: "Pasó a arancel intracuota 0% desde el inicio de la aplicación provisional." },
      { question: "¿Cuándo perdió Uruguay el SGP de la UE y por qué?", answer: "El 1/1/2014, porque la reforma del SGP excluyó a los países de ingreso alto o medio-alto." },
      { question: "¿Qué ley aprobó en Uruguay el acuerdo interino?", answer: "La Ley N.º 20.462." }
    ],
    sources: [
      { title: "Comisión Europea: Acuerdo UE–MERCOSUR", url: "https://policy.trade.ec.europa.eu/eu-trade-relationships-country-and-region/countries-and-regions/mercosur/eu-mercosur-agreement_en" },
      { title: "MRREE: Comunicado 38/26, inicio de la aplicación provisional", url: "https://www.gub.uy/ministerio-relaciones-exteriores/comunicacion/comunicados/inicio-aplicacion-provisional-del-acuerdo-comercial-interino-entre" },
      { title: "Presidencia: Uruguay aprobó el acuerdo interino", url: "https://www.gub.uy/presidencia/comunicacion/noticias/uruguay-aprobo-acuerdo-interino-comercio-entre-mercosur-union-europea" },
      { title: "White & Case: cronología, iTA y EMPA", url: "https://www.whitecase.com/insight-alert/eu-provisionally-apply-eu-mercosur-interim-trade-agreement-pending-cjeu-opinion" },
      { title: "TJUE: comunicado C-460/26 R Polonia c. Consejo (29/09/2026)", url: "https://curia.europa.eu/site/upload/docs/application/pdf/2026-09/cp260135en.pdf" },
      { title: "Aduana News: publicación en el DOUE (15/04/2026)", url: "https://aduananews.com/la-union-europea-oficializa-la-aplicacion-provisional-del-acuerdo-comercial-con-el-mercosur/" },
      { title: "ESM Magazine: contenido del acuerdo", url: "https://esmmagazine.com/supply-chain/whats-in-the-newly-finalised-eu-mercosur-trade-accord-278740" },
      { title: "MEF: Sistema Generalizado de Preferencias", url: "https://www.gub.uy/ministerio-economia-finanzas/institucional/tratados/sistema-generalizado-preferencias-sgp" },
      { title: "Hosteltur: Uruguay y Argentina pierden el SGP de la UE en 2014", url: "https://www.hosteltur.com/lat/193400_uruguay-argentina-pierden-ventajas-arancelarias-ue-2014.html" }
    ]
  }
]
