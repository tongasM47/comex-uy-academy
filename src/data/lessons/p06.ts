import type { Source, Subtopic } from '../types'

// Módulo 6: MERCOSUR, NCM/AEC/ACE 18/RGI, valor en aduana, tributos y cálculo de una importación.
// Base: docs/research/02_importacion_calculo_dua.md (secciones 0, 3 y 4, ejercicios E1-E8)
// y docs/research/04_tratados_pagos.md (secciones 2, 3, 4.5, 4.6 y 6).
// Todos los números de los ejemplos se verificaron con node y coinciden con src/data/calc.ts
// (ver scripts/check-calc.mjs). Supuestos: US$ 1 = $ 40 (ilustrativo); UI de octubre de 2026 = $ 6,65.

const S = {
  mercosurTextos: { title: "MERCOSUR: textos fundacionales", url: "https://www.mercosur.int/documentos-y-normativa/textos-fundacionales/" },
  gatt24: { title: "OMC: art. XXIV del GATT (uniones aduaneras y zonas de libre comercio)", url: "https://www.wto.org/spanish/tratop_s/region_s/region_art24_s.htm" },
  cumbre2026: { title: "Comunicado conjunto de presidentes, LXVIII Cumbre del MERCOSUR (30/06/2026)", url: "https://www.mre.gov.py/wp-content/uploads/2026/06/Comunicado-conjunto-de-los-presidentes-de-los-Estados-Partes-del-Mercosur.pdf" },
  mefAcuerdos: { title: "MEF: acuerdos comerciales de Uruguay", url: "https://www.gub.uy/ministerio-economia-finanzas/institucional/tratados/acuerdos-comerciales" },
  aladiAce18: { title: "ALADI: ficha descriptiva del ACE 18", url: "https://www2.aladi.org/SitioALADI/documentos/FichasDescriptivasAcuerdos/FD_AAP.CE_18_Argentina_Brasil_Paraguay_Uruguay.pdf" },
  aladiAcuerdos: { title: "ALADI: acuerdos actuales", url: "https://www.aladi.org/sitioaladi/acuerdos-actuales/" },
  rg06: { title: "DNA: RG 06/2025 (prueba de origen, códigos de acuerdo)", url: "https://aduanas.gub.uy/innovaportal/file/27365/1/rg-06-2025.pdf" },
  com33: { title: "DNA: Comunicado 33/2026 (MERCOSUR–UE, códigos 1117, 1118 y 1119)", url: "https://www.aduanas.gub.uy/innovaportal/file/28750/1/comunicado-33_2026-anexo.pdf" },
  singapur: { title: "MRREE: entrada en vigor del acuerdo MERCOSUR–Singapur", url: "https://www.gub.uy/ministerio-relaciones-exteriores/comunicacion/comunicados/comunicado-conjunto-entrada-vigor-del-acuerdo-libre-comercio-mercosur-0" },
  dec430: { title: "IMPO: Decreto 430/021, art. 6 (NCM VII Enmienda y TGA)", url: "https://www.impo.com.uy/bases/decretos/430-2021/6" },
  dec130: { title: "IMPO: Decreto 130/992, art. 1", url: "https://www.impo.com.uy/bases/decretos/130-1992/1" },
  dec369: { title: "IMPO: Decreto 369/022 (reducción del AEC)", url: "https://www.impo.com.uy/bases/decretos/369-2022/1" },
  mefAec: { title: "MEF: MERCOSUR, reducción del Arancel Externo Común", url: "https://www.gub.uy/ministerio-economia-finanzas/comunicacion/noticias/mercosur-reduccion-del-arancel-externo-comun" },
  mefMedidas: { title: "MEF: Rendición de Cuentas 2023, medidas de inserción internacional", url: "https://www.gub.uy/ministerio-economia-finanzas/comunicacion/publicaciones/exposicion-motivos-rc-2023/7-insercion-internacional/71-medidas" },
  omcTpr: { title: "OMC: Examen de Política Comercial de Uruguay (WT/TPR/S/486, 2026)", url: "https://www.wto.org/spanish/news_s/news_docs/S486_s.pdf" },
  gtai: { title: "GTAI: aranceles y otros gravámenes de importación de Uruguay", url: "https://www.gtai.de/de/trade/uruguay/zoll/zoelle-und-weitere-einfuhrabgaben-2023332" },
  tradeGov: { title: "US Country Commercial Guide: Uruguay, import tariffs", url: "https://www.trade.gov/country-commercial-guides/uruguay-import-tariffs" },
  excepciones: { title: "Swissinfo: MERCOSUR amplía las listas de excepciones (julio 2025)", url: "https://www.swissinfo.ch/spa/mercosur-aprueba-una-ampliaci%C3%B3n-de-las-listas-de-excepciones-arancelarias/89627093" },
  opEntrada: { title: "DNA: Operaciones de entrada, procedimiento (seguro ficto)", url: "https://www.aduanas.gub.uy/innovaportal/file/7995/1/operaciones_de_entrada_procedimientos.pdf" },
  instructivo: { title: "DNA: Instructivo de llenado del DUA de importación", url: "https://www.aduanas.gub.uy/innovaportal/file/14492/1/instructivo--importacion.pdf" },
  ley19535: { title: "IMPO: Ley 19.535, art. 265 (Tasa Consular)", url: "https://www.impo.com.uy/bases/leyes/19535-2017/265" },
  dec667: { title: "DNA: Decreto 667/992 (0,2% del CIF, tope US$ 50)", url: "https://www.aduanas.gub.uy/innovaportal/v/7591/6/innova.front/decreto-n%C2%B0667_992.html" },
  tsaDna: { title: "DNA: tasa por servicios preferenciales", url: "https://www.aduanas.gub.uy/innovaportal/v/2773/8/innova.front/tasa-por-servicios-preferenciales.html" },
  dec305: { title: "IMPO: Decreto 305/986 (servicios extraordinarios)", url: "https://www.impo.com.uy/bases/decretos/305-1986" },
  embajadaAr: { title: "Cancillería argentina: costos de importación en Uruguay (2018)", url: "https://exportaciones.cancilleria.gob.ar/Estadistica/imagen_producto/7196" },
  rg57: { title: "DNA: RG 57/2024 (tasa de inspección no intrusiva, 85 UI)", url: "https://aduanas.gub.uy/innovaportal/file/26806/1/rg-57-2024-disposiciones-para-el-cobro-de-la-tasa.pdf" },
  ui: { title: "Valor de la UI, octubre de 2026", url: "https://datosuruguay.com/actualizaciones/ui-2026-10" },
  dec194: { title: "IMPO: Decreto 194/022 (precio LATU 0,5%)", url: "https://www.impo.com.uy/bases/decretos/194-2022" },
  ivaTo: { title: "IMPO: TO DGI 2023, Título 10, art. 13 (base del IVA en la importación)", url: "https://impo.com.uy/bases/todgi2023/101-2024/13_T10" },
  ant115: { title: "IMPO: Decreto 220/998, art. 115 (anticipo de IVA)", url: "https://www.impo.com.uy/bases/decretos/220-1998/115" },
  ant116: { title: "IMPO: Decreto 220/998, art. 116", url: "https://impo.com.uy/bases/decretos/220-1998/116" },
  ant117: { title: "IMPO: Decreto 220/998, art. 117", url: "https://impo.com.uy/bases/decretos/220-1998/117" },
  irae788: { title: "IMPO: Decreto 788/008, art. 2 (anticipo de IRAE)", url: "https://impo.com.uy/bases/decretos/788-2008/2" },
  irae335: { title: "IMPO: Decreto 335/025", url: "https://impo.com.uy/bases/decretos/335-2025" },
  irae110: { title: "IMPO: Decreto 110/012", url: "https://impo.com.uy/bases/decretos-originales/110-2012/1" },
  imesiTo: { title: "IMPO: TO DGI 2023, Título 11 (IMESI)", url: "https://impo.com.uy/bases/todgi2023/101-2024/1_T11" },
  dec96: { title: "IMPO: Decreto 96/990 (IMESI)", url: "https://www.impo.com.uy/bases/decretos/96-1990" },
  dec335_96: { title: "IMPO: Decreto 335/996 (anticipo de IMESI)", url: "https://www.impo.com.uy/bases/decretos/335-1996" },
} satisfies Record<string, Source>

export const p06Lessons: Subtopic[] = [
  // ---------------------------------------------------------------------------
  {
    id: "p06-s1",
    moduleId: "p06",
    title: "MERCOSUR: países, normativa y aplicación práctica",
    summary:
      "Qué es el MERCOSUR, quiénes lo integran, cómo produce normas y, sobre todo, qué cambia en una importación cuando la mercadería es originaria del bloque: arancel 0% con prueba de origen, Tasa Consular del 3% y código de acuerdo 310 en el DUA.",
    minutes: 18,
    sections: [
      {
        heading: "Por qué el MERCOSUR te importa en la oficina",
        blocks: [
          {
            type: "p",
            text: "Brasil y Argentina son proveedores de todos los días para un importador uruguayo: vajilla que viene en camión desde São Paulo, alimentos, insumos industriales. Cuando esa mercadería es **originaria** del MERCOSUR (Mercado Común del Sur) y se acredita con un certificado o una declaración de origen, el arancel baja a **0%**. Esa diferencia puede valer miles de dólares en un solo contenedor, y la decide un papel que tiene que estar bien hecho.",
          },
          {
            type: "p",
            text: "En esta lección vas a ver el MERCOSUR desde dos ángulos: el **institucional** (qué tipo de integración es, qué tratados lo crean, qué órganos dictan normas) y el **práctico** (cómo se aplica la preferencia en un DUA). El primero te sirve para un examen o una entrevista; el segundo, para no hacerle perder plata a un cliente.",
          },
          {
            type: "eli5",
            text: "El MERCOSUR es como un club de barrio con cuatro socios fundadores. Entre socios se prestan las cosas sin cobrarse (arancel 0%), pero para eso tenés que mostrar el carné de socio, que es la prueba de origen. Y frente a los de afuera del club, todos cobran la misma entrada: el Arancel Externo Común.",
          },
        ],
      },
      {
        heading: "Qué tipo de integración es: la escalera de Balassa",
        blocks: [
          {
            type: "p",
            text: "Los manuales clasifican la integración económica en etapas (la clasificación de Bela Balassa). Cada etapa incluye las anteriores y agrega algo. Te conviene tenerla clara porque explica por qué el MERCOSUR tiene, a la vez, libre comercio entre socios y un arancel común frente a terceros.",
          },
          {
            type: "table",
            headers: ["Etapa", "Qué agrega", "Ejemplo"],
            rows: [
              ["Zona de preferencias arancelarias", "Rebajas parciales sobre algunos productos", "PAR de ALADI; MERCOSUR–India"],
              ["Zona de libre comercio", "Elimina aranceles entre miembros sobre lo sustancial del comercio; necesita reglas de origen", "TLC Uruguay–México; ALC Uruguay–Chile"],
              ["Unión aduanera", "Libre comercio + Arancel Externo Común (AEC) + política comercial común", "MERCOSUR (unión aduanera imperfecta)"],
              ["Mercado común", "Unión aduanera + libre circulación de personas, servicios y capitales", "Objetivo declarado del MERCOSUR (art. 1 del Tratado de Asunción)"],
              ["Unión económica y monetaria", "Mercado común + armonización de políticas; eventualmente moneda única", "Unión Europea / Eurozona"],
            ],
            caption: "Etapas de la integración económica (investigación 04, sección 2).",
          },
          {
            type: "callout",
            tone: "info",
            title: "Unión aduanera imperfecta",
            text: "El MERCOSUR tiene AEC, pero con **listas nacionales de excepciones**, regímenes especiales de importación y sectores que quedan afuera (automotor y azúcar). Por eso un mismo bien puede pagar distinto arancel según el país del bloque por el que entre. Además, es **intergubernamental**: decide por consenso de los Estados, sin órganos supranacionales como los de la Unión Europea.",
          },
          {
            type: "eli5",
            text: "La diferencia entre zona de libre comercio y unión aduanera es como la de dos vecinos que se prestan herramientas. En la zona de libre comercio cada uno pone su propio precio a los de afuera. En la unión aduanera además se ponen de acuerdo y cobran el mismo precio a todos los que no son vecinos.",
          },
        ],
      },
      {
        heading: "Los textos fundacionales y los órganos",
        blocks: [
          {
            type: "table",
            headers: ["Instrumento", "Fecha", "Para qué sirve"],
            rows: [
              ["Tratado de Asunción", "26/03/1991 (en vigor 29/11/1991)", "Crea el MERCOSUR; programa de liberación comercial, régimen de origen y solución de controversias provisoria"],
              ["Protocolo de Ouro Preto", "17/12/1994", "Estructura institucional definitiva; personalidad jurídica internacional; decisiones por consenso"],
              ["Protocolo de Ushuaia", "1998", "Cláusula democrática"],
              ["Protocolo de Olivos", "18/02/2002 (vigor 2004)", "Solución de controversias; crea el Tribunal Permanente de Revisión, con sede en Asunción"],
              ["Código Aduanero del MERCOSUR", "Dec. CMC 27/10", "Normas aduaneras comunes; requiere ratificación de todos"],
            ],
          },
          {
            type: "callout",
            tone: "warn",
            title: "El Código Aduanero del MERCOSUR",
            text: "La investigación marca para verificar el estado de vigencia del Código Aduanero del MERCOSUR (al menos Argentina no lo había ratificado según la última información disponible). Lo que aplicás en Uruguay todos los días es el **CAROU**, la Ley 19.276 de 2014.",
          },
          {
            type: "table",
            headers: ["Órgano", "Quién lo integra", "Qué norma dicta"],
            rows: [
              ["CMC: Consejo del Mercado Común", "Ministros de Relaciones Exteriores y de Economía", "Decisiones (órgano superior)"],
              ["GMC: Grupo Mercado Común", "Cancillerías, Ministerios de Economía y Bancos Centrales", "Resoluciones (órgano ejecutivo)"],
              ["CCM: Comisión de Comercio del MERCOSUR", "Coordinada por las Cancillerías", "Directivas (vela por el AEC, el origen y la política comercial común)"],
            ],
          },
          {
            type: "p",
            text: "Las normas de los tres órganos son **obligatorias** (art. 42 de Ouro Preto), pero muchas tienen que **incorporarse** al derecho interno de cada país y entran en vigor 30 días después de que la Secretaría comunica que todos lo hicieron (art. 40). Es el famoso problema de la **internalización**. En la práctica de una oficina, eso explica por qué una Decisión del CMC sobre el AEC no te sirve hasta que Uruguay la incorpora por decreto: la reducción del AEC de la Decisión CMC 08/22, por ejemplo, entró por el **Decreto 369/022**.",
          },
          {
            type: "callout",
            tone: "uy",
            title: "Montevideo, capital administrativa",
            text: "La **Secretaría del MERCOSUR** y el **PARLASUR** tienen sede en Montevideo. Uruguay asumió la Presidencia Pro Tempore el **30/06/2026**.",
          },
        ],
      },
      {
        heading: "Quiénes son los países",
        blocks: [
          {
            type: "table",
            headers: ["Categoría", "Países", "Notas"],
            rows: [
              ["Estados Partes fundadores", "Argentina, Brasil, Paraguay, Uruguay", "Son las partes del ACE 18"],
              ["Estado Parte por adhesión", "Bolivia", "Estado Parte desde julio de 2024; tiene 4 años para incorporar el acervo, el AEC, la NCM y el régimen de origen"],
              ["Estado Parte suspendido", "Venezuela", "Suspendida desde diciembre de 2016 y desde agosto de 2017 por el Protocolo de Ushuaia"],
              ["Estados Asociados", "Chile, Colombia, Ecuador, Perú, Guyana, Surinam y Panamá", "No aplican el AEC"],
            ],
          },
          {
            type: "callout",
            tone: "warn",
            title: "Datos a confirmar",
            text: "La investigación pide verificar la fecha exacta en que Bolivia pasó a ser Estado Parte y la lista vigente de Estados Asociados en mercosur.int. Tené presente también que los acuerdos externos firmados por los cuatro fundadores (por ejemplo con la Unión Europea o la EFTA) **no incluyen a Bolivia** como parte.",
          },
        ],
      },
      {
        heading: "La aplicación práctica: ACE 18, código 310 y prueba de origen",
        blocks: [
          {
            type: "p",
            text: "El libre comercio entre los socios está **protocolizado en la ALADI** (Asociación Latinoamericana de Integración) a través del **ACE 18**, el Acuerdo de Complementación Económica N° 18, firmado el **29/11/1991** por Argentina, Brasil, Paraguay y Uruguay. Es el instrumento que da la **preferencia del 100%** intra-MERCOSUR. Por eso el certificado de origen MERCOSUR dice “ACE 18” y por eso la Ley 19.535 habla de la Tasa Consular del 3% “para el ACE 18”.",
          },
          {
            type: "steps",
            items: [
              { title: "1. Verificar que la mercadería sea originaria", text: "No alcanza con que venga de Brasil: tiene que cumplir el régimen de origen. Una mercadería china revendida desde São Paulo **no** es brasileña." },
              { title: "2. Conseguir la prueba de origen", text: "Certificado de origen MERCOSUR, certificado digital (**COD**) o la **declaración de origen**, con formato `DORI-<nºfactura>-<AAMMDD>` según la RG DNA 06/2025. En LUCIA se asocian con los códigos ORIM o CODM." },
              { title: "3. Declarar el acuerdo en el DUA", text: "En la **casilla 61** de cada ítem va el código de acuerdo **310** (ACE 18)." },
              { title: "4. Liquidar con la preferencia", text: "TGA **0%** y Tasa Consular **3%** en lugar del 5%. El resto (tasas de servicio, IVA, anticipos) sigue igual." },
            ],
          },
          {
            type: "table",
            headers: ["Criterio de origen MERCOSUR", "Qué exige"],
            rows: [
              ["Totalmente obtenido", "Minerales extraídos, animales nacidos y criados, vegetales cosechados en el país"],
              ["Elaborado con materiales originarios", "Todos los insumos son del bloque"],
              ["Con materiales no originarios", "Salto de partida (cambio de clasificación a 4 dígitos del SA) o, si no lo cumple, valor CIF de los materiales no originarios ≤ 40% del valor FOB"],
              ["Requisitos específicos", "Reglas propias por producto, que prevalecen sobre las generales"],
            ],
            caption: "Criterios generales del régimen de origen intrazona (investigación 04, sección 3.6).",
          },
          {
            type: "callout",
            tone: "warn",
            title: "Confirmar antes de usar",
            text: "La investigación marca **[VERIFICAR]** la norma de origen vigente consolidada (Dec. CMC 01/04 y modificatorias), la **validez de 180 días** del certificado y el listado actual de **entidades emisoras** en Uruguay (Cámara de Industrias, Cámara Nacional de Comercio y Servicios, Unión de Exportadores). En una operación real, confirmalo con el despachante o la entidad emisora.",
          },
          {
            type: "callout",
            tone: "uy",
            title: "Lo que el MERCOSUR no libera",
            text: "Quedan afuera del 0% el **azúcar** (partida 17.01) y el **sector automotor**, que se rige por acuerdos bilaterales: **ACE 2** con Brasil (en la casilla 61, códigos 302, 3024 o 3083) y **ACE 57** con Argentina.",
          },
          {
            type: "eli5",
            text: "La prueba de origen es el pasaporte del producto. Un vaso hecho en Brasil viaja con su pasaporte brasileño y entra sin pagar arancel. Un vaso chino que pasó por un depósito en Brasil no se vuelve brasileño por haber dormido ahí, igual que vos no te volvés brasileño por hacer escala en São Paulo.",
          },
        ],
      },
      {
        heading: "Cuánto vale la preferencia: un ejemplo",
        blocks: [
          {
            type: "example",
            title: "Ejercicio E5 de la investigación: ahorro de origen",
            text: "Importás mercadería de origen argentino con CIF US$ 50.000 y TGA extrazona del 12%. **Sin certificado válido:** TGA 50.000 × 12% = 6.000 y Tasa Consular 50.000 × 5% = 2.500. **Con certificado válido:** TGA 0 y Tasa Consular 50.000 × 3% = 1.500. **Ahorro = (6.000 + 2.500) − 1.500 = US$ 7.000.** El IVA también baja, porque su base pasa de 56.000 a 50.000: son US$ 1.320 menos de IVA, aunque para un contribuyente ese IVA es recuperable.",
          },
          {
            type: "p",
            text: "Fijate qué parte del ahorro es plata real: los US$ 7.000 de TGA y Tasa Consular son **costo** que el importador no recupera nunca. Los US$ 1.320 de IVA, en cambio, un contribuyente los iba a recuperar como crédito fiscal, así que solo mejoran el flujo de caja.",
          },
          {
            type: "callout",
            tone: "tip",
            title: "Qué preguntar al cliente",
            text: "Cuando un cliente te dice “compro en Brasil”, la primera pregunta no es el precio: es **“¿el proveedor te puede dar certificado o declaración de origen?”**. Si no, liquidás como extrazona.",
          },
        ],
      },
      {
        heading: "Los otros acuerdos que vas a ver en un DUA",
        blocks: [
          {
            type: "table",
            headers: ["Socio", "Instrumento", "Qué cambia en la importación"],
            rows: [
              ["Argentina, Brasil, Paraguay", "ACE 18 (código 310)", "TGA 0% con origen (salvo azúcar y automotor); Tasa Consular 3%"],
              ["Chile", "ACE 35 + ALC Uruguay–Chile (ACE 73, vigor 13/12/2018)", "Tasa Consular 3% (Ley 19.812, 2019)"],
              ["México", "TLC Uruguay–México (ACE 60, vigor 15/07/2004) y ACE 55 automotor", "Tasa Consular 0% (salvo autos); códigos de acuerdo 111 / 112"],
              ["Unión Europea", "Acuerdo Comercial Interino", "Aplicación provisional desde el 01/05/2026; códigos 1117, 1118 y 1119"],
              ["Singapur", "TLC MERCOSUR–Singapur", "Vigente para Uruguay desde el 01/03/2026"],
            ],
            caption: "Acuerdos con efecto directo en la liquidación de una importación (investigaciones 02 y 04).",
          },
          {
            type: "callout",
            tone: "warn",
            title: "Tasa Consular y origen UE",
            text: "El acuerdo MERCOSUR–UE obliga a eliminar la Tasa Consular después de un período de gracia de 3 años. La investigación marca **[VERIFICAR]** cómo se trata la Tasa Consular para el origen UE desde el 01/05/2026: confirmalo con la DNA antes de liquidar.",
          },
          {
            type: "eli5",
            text: "Cada acuerdo es un carné de descuento distinto: el del MERCOSUR, el de México, el de Chile, el de la Unión Europea. En el DUA tenés que mostrar el carné correcto (el código de acuerdo) y la prueba de que tu producto es socio de ese club.",
          },
        ],
      },
    ],
    eli5: [
      {
        concept: "Unión aduanera",
        text: "Es un grupo de amigos que comparten la heladera sin cobrarse nada y que además se ponen de acuerdo en cobrarle lo mismo al que viene de afuera a sacar algo.",
      },
      {
        concept: "ACE 18",
        text: "Es el contrato firmado ante escribano (la ALADI) que deja por escrito que los cuatro socios no se cobran entrada entre ellos.",
      },
      {
        concept: "Régimen de origen",
        text: "Es la regla que decide quién es “de la casa”. Un mate hecho en Uruguay es de la casa; un mate chino al que solo le cambiaste la etiqueta en Montevideo, no.",
      },
      {
        concept: "Internalización",
        text: "Es como una regla que vota la comisión del edificio pero que no se aplica en tu apartamento hasta que la pegás en la heladera: la norma MERCOSUR existe, pero rige en Uruguay recién cuando se incorpora por decreto.",
      },
    ],
    keyPoints: [
      "El MERCOSUR es una unión aduanera imperfecta: libre comercio intrazona y AEC frente a terceros, con excepciones nacionales y sectores fuera (automotor y azúcar).",
      "Tratado de Asunción (26/03/1991) lo crea; Ouro Preto (1994) le da su estructura institucional; Olivos (2002) crea el Tribunal Permanente de Revisión.",
      "CMC dicta Decisiones, GMC Resoluciones y CCM Directivas; muchas deben incorporarse al derecho interno para regir.",
      "Estados Partes: Argentina, Brasil, Paraguay, Uruguay y Bolivia (en adhesión); Venezuela suspendida.",
      "El ACE 18 (ALADI, 29/11/1991) da la preferencia del 100%; en el DUA se declara con el código 310 en la casilla 61.",
      "Con prueba de origen válida: TGA 0% y Tasa Consular 3%; sin ella, se liquida como extrazona (TGA del arancel y Tasa Consular 5%).",
      "Chile paga Tasa Consular 3% y México 0% (salvo autos); el acuerdo con la UE se aplica provisionalmente desde el 01/05/2026.",
    ],
    probableQuestions: [
      {
        question: "¿Qué tributos paga una importación desde Brasil con certificado de origen?",
        answer:
          "TGA 0% por el ACE 18, pero sigue pagando Tasa Consular del 3%, las tasas de servicio (TSA, servicios extraordinarios, escáner), el IVA y, si es contribuyente, los anticipos de IVA y de IRAE.",
      },
      {
        question: "¿Qué es el ACE 18?",
        answer:
          "El Acuerdo de Complementación Económica N° 18 de la ALADI, firmado en 1991 por Argentina, Brasil, Paraguay y Uruguay. Instrumenta el libre comercio del MERCOSUR; en el DUA es el código de acuerdo 310 y exige prueba de origen.",
      },
      {
        question: "¿Por qué se dice que el MERCOSUR es una unión aduanera imperfecta?",
        answer:
          "Porque tiene AEC pero con listas nacionales de excepciones, regímenes especiales y sectores fuera del libre comercio (automotor y azúcar), así que un bien puede pagar distinto arancel según el país por el que entre.",
      },
      {
        question: "¿Qué normas dictan el CMC, el GMC y la CCM?",
        answer: "El CMC dicta Decisiones, el GMC Resoluciones y la CCM Directivas. Son obligatorias, pero muchas deben incorporarse al derecho interno.",
      },
      {
        question: "¿Qué productos del MERCOSUR no entran con arancel 0%?",
        answer: "El azúcar (partida 17.01) y el sector automotor, que se rige por acuerdos bilaterales como el ACE 2 con Brasil y el ACE 57 con Argentina.",
      },
      {
        question: "Un cliente compra en Brasil mercadería fabricada en China. ¿Paga 0%?",
        answer:
          "No. La preferencia es para mercadería originaria del MERCOSUR. Lo fabricado en China no cumple el régimen de origen, así que se liquida como extrazona.",
      },
      {
        question: "¿Cuánto se ahorra con un certificado de origen válido en una importación de CIF US$ 50.000 con TGA extrazona del 12%?",
        answer: "US$ 7.000: 6.000 de TGA y 1.000 de diferencia de Tasa Consular (2.500 al 5% contra 1.500 al 3%).",
      },
      {
        question: "¿Quiénes son los Estados Partes del MERCOSUR?",
        answer: "Argentina, Brasil, Paraguay y Uruguay como fundadores; Bolivia por adhesión desde 2024, en período de incorporación del acervo; Venezuela está suspendida.",
      },
    ],
    sources: [S.mercosurTextos, S.gatt24, S.cumbre2026, S.mefAcuerdos, S.aladiAce18, S.aladiAcuerdos, S.rg06, S.ley19535, S.com33, S.singapur, S.dec369],
  },

  // ---------------------------------------------------------------------------
  {
    id: "p06-s2",
    moduleId: "p06",
    title: "NCM, AEC, ACE 18 y Reglas Generales Interpretativas",
    summary:
      "Cómo se arma el código de diez dígitos que lleva cada ítem del DUA, cómo se clasifica un producto con las seis Reglas Generales Interpretativas y qué es el Arancel Externo Común. También resolvemos la duda del programa: “AEC 18” casi seguro quiere decir ACE 18.",
    minutes: 20,
    sections: [
      {
        heading: "Clasificar: la tarea que define todo lo demás",
        blocks: [
          {
            type: "p",
            text: "Antes de calcular un solo tributo, alguien tiene que decidir **qué es** la mercadería en el idioma de la Aduana. Esa decisión se llama **clasificación arancelaria** y da un código: la posición NCM. De ese código depende el arancel, las intervenciones de otros organismos (MNNT), si tiene IMESI, si está en el Anexo del anticipo de IRAE y qué tasa de IVA lleva. Una clasificación equivocada cambia todo el cálculo y es lo primero que mira el Vista en una verificación.",
          },
          {
            type: "eli5",
            text: "La NCM es la dirección postal de un producto: país (capítulo), ciudad (partida), barrio (subpartida) y casa (ítem y subítem). Si te equivocás de dirección, el arancel le llega a otra casa y alguien termina pagando de más o de menos.",
          },
        ],
      },
      {
        heading: "Del Sistema Armonizado a los 10 dígitos de LUCIA",
        blocks: [
          {
            type: "p",
            text: "El punto de partida es el **SA** (Sistema Armonizado de Designación y Codificación de Mercancías), que administra la **OMA** (Organización Mundial de Aduanas). Tiene **6 dígitos**, 21 secciones y 97 capítulos (el 77 está reservado). Sobre esa base, el MERCOSUR arma la **NCM** (Nomenclatura Común del MERCOSUR), que agrega 2 dígitos: en total **8**. Y Uruguay agrega **2 dígitos nacionales** para los tributos internos, las aperturas de TGA y los controles, por eso el DUA pide **10 dígitos** más un dígito verificador.",
          },
          {
            type: "table",
            headers: ["Dígitos", "Nivel", "Quién lo define", "En el ejemplo 2208.30.20.00"],
            rows: [
              ["1º y 2º", "Capítulo", "SA (OMA)", "22"],
              ["3º y 4º", "Partida", "SA (OMA)", "2208"],
              ["5º y 6º", "Subpartida", "SA (OMA)", "2208.30"],
              ["7º", "Ítem", "MERCOSUR", "2208.30.2"],
              ["8º", "Subítem", "MERCOSUR", "2208.30.20"],
              ["9º y 10º", "Apertura nacional", "Uruguay", "2208.30.20.00"],
            ],
            caption: "Estructura del código que va en la casilla 60A del DUA (investigación 02, sección 4.1).",
          },
          {
            type: "p",
            text: "Hoy la NCM está ajustada a la **VII Enmienda del SA (SA 2022)**, que Uruguay incorporó por el **Decreto 430/021**. El SA se revisa periódicamente, así que la posición de un producto puede cambiar con una enmienda: el bloque ya trabaja en la VIII Enmienda (SA 2028).",
          },
          {
            type: "callout",
            tone: "warn",
            title: "Cambios recientes",
            text: "Las Resoluciones GMC 4/2026 (mayo) y 16/2026 (junio) modificaron la NCM y el AEC. La investigación marca **[VERIFICAR]** su incorporación en Uruguay. Moraleja de oficina: la clasificación se confirma siempre en el arancel vigente, no en la carpeta del año pasado.",
          },
          {
            type: "eli5",
            text: "Los 10 dígitos son como un número de teléfono internacional: el código del país lo pone el mundo (SA), el de la ciudad lo pone la región (MERCOSUR) y el número de la casa lo pone Uruguay.",
          },
        ],
      },
      {
        heading: "Las seis Reglas Generales Interpretativas",
        blocks: [
          {
            type: "p",
            text: "Las **RGI** (Reglas Generales Interpretativas) son el método legal para clasificar. Se aplican **en orden**: solo pasás a la siguiente si la anterior no resolvió.",
          },
          {
            type: "steps",
            items: [
              { title: "RGI 1: textos de partida y notas", text: "Los títulos de secciones y capítulos solo orientan. La clasificación la determinan **los textos de las partidas y las notas** de sección y capítulo. La gran mayoría de los productos se clasifica acá." },
              { title: "RGI 2a: incompletos y desarmados", text: "Un artículo **incompleto o sin terminar**, o **desarmado**, se clasifica como el completo si ya tiene sus características esenciales. Una bicicleta que llega desarmada en cajas sigue siendo una bicicleta." },
              { title: "RGI 2b: mezclas", text: "Una referencia a una materia incluye sus **mezclas y combinaciones**. Las mercancías de varias materias se resuelven con la RGI 3." },
              { title: "RGI 3: cuando dos partidas parecen aplicables", text: "**3a:** la partida **más específica** prevalece sobre la genérica. **3b:** en mezclas, manufacturas compuestas y **surtidos** para la venta al por menor, decide el componente que da el **carácter esencial**. **3c:** si nada de lo anterior resuelve, se elige la **última partida** por orden de numeración." },
              { title: "RGI 4: lo más análogo", text: "Lo que no puede clasificarse con las reglas anteriores va en la partida de los artículos **más análogos**." },
              { title: "RGI 5: estuches y envases", text: "**5a:** los **estuches y fundas** hechos para un artículo, aptos para uso prolongado, se clasifican **con** ese artículo (el estuche de la guitarra va con la guitarra). **5b:** los **envases** se clasifican con la mercancía si son los normales para ella y no son reutilizables por naturaleza." },
              { title: "RGI 6: subpartidas", text: "Para bajar a **subpartidas** se aplican los textos de subpartida y sus notas y las reglas anteriores, **comparando solo subpartidas del mismo nivel**. La NCM agrega una regla general complementaria (RGC) que extiende el criterio a ítems y subítems." },
            ],
          },
          {
            type: "eli5",
            text: "Las RGI son como las reglas para desempatar en un campeonato: primero los puntos (RGI 1); si hay empate, diferencia de goles (RGI 3a, lo más específico); si sigue el empate, goles a favor (3b, el carácter esencial); y si todavía empatan, se decide por sorteo fijo (3c, la última partida).",
          },
          {
            type: "example",
            title: "Tres casos para practicar",
            text: "**Un kit de regalo** con una botella de gin, dos vasos y un abridor, armado para la venta al por menor: es un surtido, y por la **RGI 3b** se clasifica por el componente que le da el carácter esencial; cuál es ese componente se analiza caso a caso con las notas explicativas, y lo confirma el despachante. **Una guitarra con su estuche rígido**: por la **RGI 5a** el estuche va con la guitarra. **Una máquina que llega sin terminar pero con todas sus funciones esenciales**: por la **RGI 2a** se clasifica como la máquina completa.",
          },
        ],
      },
      {
        heading: "El método práctico y dónde se consulta",
        blocks: [
          {
            type: "steps",
            items: [
              { title: "1. Entender el producto", text: "Materia, función y grado de elaboración. Pedile al cliente la ficha técnica: “vasos” no alcanza, “vasos de vidrio templado de 300 ml” sí." },
              { title: "2. Ubicar sección y capítulo", text: "Con los títulos como orientación." },
              { title: "3. Leer las notas legales", text: "Las notas de sección y capítulo excluyen o incluyen productos expresamente." },
              { title: "4. Elegir la partida", text: "Con la RGI 1 y, si hace falta, las RGI 2 a 5." },
              { title: "5. Bajar a subpartida, ítem y subítem", text: "Con la RGI 6, comparando solo códigos del mismo nivel." },
              { title: "6. Consultar antecedentes", text: "Notas Explicativas del SA (NESA), dictámenes de clasificación del MERCOSUR y clasificaciones de la DNA." },
              { title: "7. Verificar en el arancel integrado", text: "En LUCIA: TGA, MNNT, IMESI y anticipos de esa posición." },
            ],
          },
          {
            type: "list",
            items: [
              "**Arancel integrado de la DNA** (módulo de LUCIA y consulta web): NCM con su TGA, acuerdos, MNNT y tributos internos.",
              "**ALADI:** sistema de información de acuerdos y preferencias.",
              "**MERCOSUR:** la NCM y el AEC se publican en mercosur.int.",
              "**Access2Markets (UE):** consulta gratuita de aranceles uruguayos.",
            ],
          },
          {
            type: "callout",
            tone: "warn",
            title: "URL del arancel",
            text: "La investigación no pudo verificar la dirección exacta de la consulta web del arancel de la DNA. Buscala desde el sitio oficial aduanas.gub.uy.",
          },
        ],
      },
      {
        heading: "El Arancel Externo Común (AEC) y la TGA uruguaya",
        blocks: [
          {
            type: "p",
            text: "El **AEC** es el arancel común que los socios del MERCOSUR aplican a las importaciones de **terceros países**. Rige desde **1995**. El nivel general va de **0% a 20%**, más alto cuanto más elaborado es el bien, y hay niveles de hasta **35%** en bienes sensibles (autos, lácteos, textiles, calzado). Según el Country Commercial Guide de EE. UU., la estructura de Uruguay tiene **19 tasas, de 0% a 35%**. El promedio aplicado por Uruguay fue **8,2% en 2025**, frente a 9,4% en 2017 (Examen de Política Comercial de la OMC, abril de 2026).",
          },
          {
            type: "p",
            text: "En Uruguay el arancel se liquida como **TGA** (Tasa Global Arancelaria). Para la extrazona suele coincidir con el AEC, salvo listas de excepción y regímenes nacionales. Por dentro, la TGA suma tres componentes (Decreto 430/021, art. 6), aunque en la práctica nadie los desglosa:",
          },
          {
            type: "table",
            headers: ["TGA", "Recargo mínimo", "Recargo adicional", "IMADUNI"],
            rows: [
              ["7%", "6%", "1%", "0%"],
              ["12%", "6%", "4%", "2%"],
              ["20%", "6%", "4%", "10%"],
              ["35%", "6%", "19%", "10%"],
            ],
            caption: "Ejemplos de composición de la TGA (IMADUNI = Impuesto Aduanero Único a la Importación).",
          },
          {
            type: "callout",
            tone: "info",
            title: "Recargos en la jerga",
            text: "Cuando una norma dice que un bien está “exento de todo recargo, incluso el mínimo”, quiere decir **TGA 0%**. Algunas NCM llevan además un **derecho específico** o un precio ficto (Dec. 264/003; ciertos textiles y calzado), que la investigación marca para verificar en cada posición.",
          },
          {
            type: "table",
            headers: ["Hito", "Qué hizo"],
            rows: [
              ["Decisión CMC 08/22 (20/07/2022)", "Bajó 10% el AEC de 6.886 códigos NCM (≈ 66% del universo); los que estaban en 2% pasaron a 0%"],
              ["Exclusiones", "Textiles, confección, calzado, juguetes, duraznos en conserva, lácteos y sector automotor"],
              ["Incorporación en Uruguay", "Decreto 369/022 y Res. MEF 8658/022, con su Anexo V de 1.409 códigos adicionales"],
              ["Efecto", "Según el MEF, el arancel promedio aplicado bajó de 9,2% a 8,3%"],
            ],
          },
          {
            type: "table",
            headers: ["País", "Códigos NCM en la lista nacional de excepciones", "Vigencia"],
            rows: [
              ["Argentina", "100", "Hasta fines de 2028"],
              ["Brasil", "100", "Hasta fines de 2028"],
              ["Uruguay", "225", "Hasta fines de 2029"],
              ["Paraguay", "649", "Hasta fines de 2030"],
            ],
            caption: "Decisión CMC 01/25, incorporada en Uruguay por el Decreto 211/025. En julio de 2025 se autorizó además una lista temporal de 50 códigos por país.",
          },
          {
            type: "callout",
            tone: "warn",
            title: "Bienes de capital e informática",
            text: "En los regímenes de **BK** (bienes de capital) y **BIT** (informática y telecomunicaciones) cada país puede apartarse del AEC; Uruguay suele aplicar 0% o 2% a los BK no producidos en la región. La investigación marca **[VERIFICAR]** los plazos y alícuotas vigentes en 2026.",
          },
          {
            type: "example",
            title: "Ejercicio E8: el efecto de la Decisión 08/22",
            text: "Bajar 10% un AEC del 18% da 18 × 0,9 = **16,2%**; uno del 12% da **10,8%**; y uno del 2% pasa a **0%** por regla expresa de la decisión (no al 1,8% que daría la cuenta). Sobre un CIF de US$ 20.000 con AEC original del 18%, la TGA pasa de 3.600 a 3.240: **ahorro de US$ 360**.",
          },
        ],
      },
      {
        heading: "¿“AEC 18” o “ACE 18”?",
        blocks: [
          {
            type: "p",
            text: "Si en el programa del curso leés “AEC 18”, frená. **AEC** es el Arancel Externo Común: un arancel. **ACE** es un Acuerdo de Complementación Económica: un acuerdo. No existe un instrumento llamado “AEC 18”. Hay tres lecturas posibles, de la más a la menos probable:",
          },
          {
            type: "list",
            ordered: true,
            items: [
              "**Es “ACE 18” con las letras invertidas.** El Acuerdo de Complementación Económica N° 18 de la ALADI (29/11/1991), que da la preferencia del 100% intra-MERCOSUR, con su régimen de origen y su certificado. En LUCIA es el código de acuerdo **310**, y la Ley 19.535 fija la Tasa Consular del **3% “para el ACE 18”**. Es la lectura más probable en un curso uruguayo.",
              "**Un AEC del 18%.** Muchos bienes de consumo tenían AEC del 20%; con el recorte del 10% de la Decisión 08/22 (20% × 0,9 = 18%), el **18%** quedó como un nivel muy frecuente para bienes finales extrazona. Por eso los ejemplos de la investigación usan una TGA ilustrativa del 18%.",
              "**Una decisión del CMC con número 18** relativa al AEC. No se encontró ninguna relevante para Uruguay.",
            ],
          },
          {
            type: "callout",
            tone: "warn",
            title: "Confirmalo con el docente",
            text: "La investigación marca esta interpretación como **[VERIFICAR con el material del curso]**. En un examen, si la pregunta es “¿qué es el ACE 18?”, la respuesta segura es: el acuerdo de la ALADI que da cobertura jurídica al libre comercio del MERCOSUR.",
          },
          {
            type: "eli5",
            text: "ACE y AEC son como “casa” y “saca”: mismas letras, otra cosa. **ACE** es el **A**cuerdo (el contrato entre socios). **AEC** es el **A**rancel (el precio que se cobra a los de afuera).",
          },
        ],
      },
    ],
    eli5: [
      {
        concept: "Sistema Armonizado",
        text: "Es el idioma común de las aduanas del mundo: igual que todos los médicos usan los mismos nombres para los huesos, todas las aduanas usan los mismos 6 dígitos para los productos.",
      },
      {
        concept: "RGI 3b (carácter esencial)",
        text: "Es como decidir de qué es una pizza de muzzarella con aceitunas: aunque tenga aceitunas, lo que la define es la muzzarella. En un surtido, manda el componente principal.",
      },
      {
        concept: "RGI 5a (estuches)",
        text: "Es como el estuche de los lentes: lo comprás con los lentes y viaja con ellos, así que no tiene sentido declararlo como una caja aparte.",
      },
      {
        concept: "AEC",
        text: "Es la entrada que cobran todos los socios del club a los que vienen de afuera. Debería ser igual en las cuatro puertas, pero cada socio tiene una lista de excepciones.",
      },
    ],
    keyPoints: [
      "SA: 6 dígitos (OMA). NCM: 8 dígitos (SA + 2 del MERCOSUR). Uruguay: 10 dígitos en LUCIA (+2 de apertura nacional).",
      "La NCM vigente sigue la VII Enmienda del SA (SA 2022), incorporada por el Decreto 430/021.",
      "Las RGI se aplican en orden: 1 textos y notas; 2a incompletos y desarmados; 2b mezclas; 3a específica; 3b carácter esencial; 3c última partida; 4 analogía; 5 estuches y envases; 6 subpartidas del mismo nivel.",
      "El AEC rige desde 1995, con niveles generales de 0% a 20% y picos de hasta 35%; Uruguay aplicó en promedio 8,2% en 2025.",
      "La Decisión CMC 08/22 bajó 10% el AEC de 6.886 códigos (Dec. 369/022 en Uruguay); los de 2% pasaron a 0%.",
      "Uruguay tiene una lista nacional de excepciones de 225 códigos hasta fines de 2029 (Dec. 211/025).",
      "“AEC 18” es casi seguro una errata por ACE 18 (acuerdo ALADI del MERCOSUR, código 310); la lectura alternativa es un AEC del 18%.",
    ],
    probableQuestions: [
      {
        question: "¿Cuántos dígitos tiene la NCM?",
        answer: "Ocho: los 6 del Sistema Armonizado más 2 del MERCOSUR. En LUCIA Uruguay usa 10, porque agrega 2 dígitos nacionales.",
      },
      {
        question: "¿Cómo clasificás un producto?",
        answer:
          "Entiendo el producto, ubico sección y capítulo, leo las notas, elijo la partida con la RGI 1 (o 2 a 5), bajo a subpartida e ítem con la RGI 6, consulto notas explicativas y dictámenes, y verifico en el arancel integrado de LUCIA la TGA, las MNNT y los tributos internos.",
      },
      {
        question: "¿Qué dice la RGI 3?",
        answer: "Si dos partidas parecen aplicables: 3a, prevalece la más específica; 3b, en mezclas y surtidos decide el componente que da el carácter esencial; 3c, si nada resuelve, la última partida por orden de numeración.",
      },
      {
        question: "¿Cómo se clasifica el estuche de una guitarra que viene con ella?",
        answer: "Con la guitarra, por la RGI 5a: los estuches hechos para un artículo y aptos para uso prolongado se clasifican con ese artículo.",
      },
      {
        question: "¿Qué es el AEC y cuándo empezó a regir?",
        answer: "El Arancel Externo Común que los socios del MERCOSUR aplican a terceros países. Rige desde 1995.",
      },
      {
        question: "¿Qué hizo la Decisión CMC 08/22?",
        answer: "Bajó 10% el AEC de 6.886 códigos NCM; los que estaban en 2% pasaron a 0%. Uruguay la incorporó por el Decreto 369/022.",
      },
      {
        question: "¿Qué significa “AEC 18” en el programa?",
        answer:
          "Lo más probable es que sea “ACE 18” con las letras invertidas: el acuerdo ALADI que da el 0% intra-MERCOSUR (código 310). La lectura alternativa es un AEC del 18%, nivel frecuente para bienes finales después del recorte de 2022.",
      },
      {
        question: "¿Qué es la TGA y qué componentes tiene?",
        answer: "Es el arancel de importación uruguayo. Suma IMADUNI, recargo mínimo y recargo adicional (Dec. 430/021 art. 6), aunque en la práctica se liquida la TGA total de cada NCM.",
      },
    ],
    sources: [S.dec430, S.dec130, S.dec369, S.mefAec, S.mefMedidas, S.omcTpr, S.tradeGov, S.excepciones, S.gtai, S.aladiAce18, S.ley19535],
  },
  // ---------------------------------------------------------------------------
  {
    id: "p06-s3",
    moduleId: "p06",
    title: "Valor en aduana y los tributos de importación (tasas, gravámenes, anticipos)",
    summary:
      "Cómo se calcula el valor en aduana (base CIF) y cada uno de los tributos que liquida el DUA, con su alícuota vigente a octubre de 2026, su base, su norma y si es costo o se recupera. También aclaramos qué puede querer decir el curso con “gravámenes y amortizaciones”.",
    minutes: 25,
    sections: [
      {
        heading: "La pregunta que te van a hacer siempre",
        blocks: [
          {
            type: "p",
            text: "“¿Cuánto me sale traer esto?” Es la pregunta que un importador le hace al despachante antes de cada compra, y la que vas a tener que contestar vos. La respuesta tiene dos partes: **cuánto se paga** en el DUA y **cuánto de eso es costo de verdad**, porque una parte importante se recupera después como crédito ante la DGI.",
          },
          {
            type: "p",
            text: "Todo arranca en el mismo número: el **valor en aduana** (VA). Casi todos los tributos se calculan sobre él o sobre el VA más el arancel. Si el VA está mal, todo lo demás está mal.",
          },
          {
            type: "eli5",
            text: "Calcular una importación es como armar la cuenta de un asado: primero sabés cuánto costó la carne puesta en tu casa (el valor en aduana), y después se van sumando los extras. Algunos extras los pagás y listo (costo); otros los ponés vos pero después tus amigos te los devuelven (crédito fiscal).",
          },
        ],
      },
      {
        heading: "El valor en aduana: base CIF",
        blocks: [
          {
            type: "p",
            text: "Uruguay aplica el **Acuerdo de Valoración de la OMC** (el acuerdo relativo al art. VII del GATT 1994). El método principal, el **método 1**, es el **valor de transacción**: el precio realmente pagado o por pagar, más los ajustes del art. 8. Entre esos ajustes están las comisiones y corretajes (salvo las de compra), los envases y embalajes, los *assists* (moldes, herramientas o materiales que pone el comprador), los cánones y regalías vinculados, el producto de la reventa que vuelve al vendedor y, lo más importante para el día a día, **el transporte, la carga y manipulación y el seguro hasta el lugar de importación**.",
          },
          {
            type: "callout",
            tone: "uy",
            title: "La fórmula uruguaya",
            text: "Uruguay valora en **base CIF** (puerto o frontera de entrada): **Valor en aduana = FOB + flete internacional + seguro internacional (+ ajustes del art. 8)**. Si no hay póliza declarada, se usa un **seguro ficto del 1% del FOB** (procedimiento de operaciones de entrada de la DNA). En el DUA, el valor en aduana va en la **casilla 85**.",
          },
          {
            type: "table",
            headers: ["Si compraste en…", "Para llegar al CIF…"],
            rows: [
              ["EXW", "Sumás el traslado y la carga en origen hasta el embarque, más flete y seguro"],
              ["FOB / FCA", "Sumás flete y seguro (o seguro ficto)"],
              ["CFR / CPT", "Solo agregás el seguro"],
              ["CIF / CIP", "Usás ese valor y revisás los ajustes"],
              ["DAP / DPU / DDP", "Restás lo posterior a la llegada (descarga, transporte interno y, en DDP, los tributos)"],
            ],
            caption: "Conversión de Incoterms al valor en aduana (investigación 02, sección 3.1).",
          },
          {
            type: "example",
            title: "Ejercicios E1 y E2: seguro ficto y compra EXW",
            text: "**E1.** Compraste CFR Montevideo US$ 5.400 (FOB 5.000 + flete 400) y no hay póliza. Seguro ficto = 1% × 5.000 = 50. **VA = 5.000 + 400 + 50 = US$ 5.450.** Ojo: el ficto se calcula sobre el FOB, no sobre el CFR (que daría 54). **E2.** Precio EXW US$ 11.500, traslado y carga en origen US$ 500, flete US$ 900, sin seguro. FOB = 12.000; seguro ficto = 120; **CIF = 12.000 + 900 + 120 = US$ 13.020.**",
          },
          {
            type: "p",
            text: "Se restan, si están separados en la factura, los conceptos que no integran el valor: transporte interno posterior a la importación, intereses de financiación y derechos internos. Si el método 1 no se puede usar, los métodos siguen un orden fijo: mercancías idénticas, similares, valor deducido, valor reconstruido y “último recurso”; el importador puede pedir que se invierta el orden entre el deducido y el reconstruido.",
          },
          {
            type: "eli5",
            text: "El valor CIF es lo que cuesta la caja puesta en la puerta de Uruguay: el producto, más el viaje, más el seguro del viaje. Lo que pase después de la puerta (el flete hasta tu depósito) ya no cuenta.",
          },
        ],
      },
      {
        heading: "Los tributos aduaneros: arancel y tasas",
        blocks: [
          {
            type: "p",
            text: "La primera familia son los tributos que cobra la DNA por la entrada de la mercadería. Para un contribuyente, **todos son costo**: no se recuperan.",
          },
          {
            type: "table",
            headers: ["Tributo", "Alícuota vigente", "Base", "Norma y vigencia"],
            rows: [
              ["TGA (Tasa Global Arancelaria)", "0% a 35% según NCM; intra-MERCOSUR con origen: 0%", "Valor en aduana", "Decretos de arancel; Dec. 430/021 (NCM VII Enmienda); Dec. 369/022 (–10% del AEC)"],
              ["Tasa Consular", "5% general; 3% ACE 18 (MERCOSUR); 3% Chile; 0% México (salvo autos)", "Valor en aduana", "Ley 19.535 art. 265, desde el 01/01/2018 (antes 2% para todo); Chile: Ley 19.812 (2019)"],
              ["Tasa de servicios aduaneros (TSA, “tasa por servicios preferenciales”)", "0,2% con tope de US$ 50 por DUA", "CIF", "Ley 16.320 art. 170; Dec. 667/992, mod. Dec. 540/994"],
              ["Servicios extraordinarios (TSE)", "Escala fija en US$ por tramo de valor", "Valor de la operación", "Dec. 305/986 con montos actualizados (montos 2018)"],
              ["Inspección no intrusiva (escáner)", "85 UI por DUA", "Por declaración", "Ley 20.075 art. 161; Dec. 235/024; RG DNA 57/2024"],
              ["Precio LATU", "0,5%, solo alimentos sujetos a control", "CIF", "Dec. 194/022 (antes 1,5%)"],
            ],
            caption: "Tributos aduaneros de una importación definitiva, vigentes a octubre de 2026 (investigación 02, sección 0).",
          },
          {
            type: "p",
            text: "**Tasa Consular.** Exoneraciones: admisión temporaria, petróleo crudo y ciertos combustibles, y **bienes de capital** de uso exclusivo industrial, agropecuario o pesquero cuya TGA extrazona sea 0% o 2%. Desde 2020 el Poder Ejecutivo puede bajarla hasta 0,5 puntos por año, con piso del 2%, y eliminarla para el ACE 18; según la prensa, a agosto de 2024 no había usado esa facultad. La Tasa Consular **no integra** la base del IVA.",
          },
          {
            type: "callout",
            tone: "warn",
            title: "Tasa Consular: confirmar antes de liquidar",
            text: "La investigación no encontró ninguna norma que haya cambiado el 5% y el 3%, y por eso los ejercicios usan **5% extrazona y 3% MERCOSUR**. Pero marca **[VERIFICAR]** una posible reducción por decreto en 2025–2026 y el tratamiento del origen UE desde el 01/05/2026 (el acuerdo con la UE obliga a eliminarla tras 3 años de gracia). En la práctica, confirmalo con el despachante o en la DNA.",
          },
          {
            type: "p",
            text: "**TSA.** Se paga **aunque la mercadería esté exonerada**. Con el tope, deja de crecer a partir de un CIF de US$ 25.000 (25.000 × 0,2% = 50). Ejercicio E3: con CIF US$ 8.000 da 8.000 × 0,2% = **US$ 16**; con CIF US$ 40.000 daría 80, pero se aplica el tope: **US$ 50**.",
          },
          {
            type: "table",
            headers: ["Tramo de valor (US$)", "TSE (US$)"],
            rows: [
              ["500 – 1.000", "12"],
              ["1.000 – 2.000", "30"],
              ["2.000 – 8.000", "48"],
              ["8.001 – 30.000", "108"],
              ["30.000 – 100.000", "240"],
              ["Más de 100.000", "600"],
            ],
            caption: "Escala de servicios extraordinarios según la Embajada argentina (2018). En los ejercicios, un CIF de exactamente 30.000 cae en el tramo de 240, como en el ejercicio E4 de la investigación.",
          },
          {
            type: "callout",
            tone: "warn",
            title: "TSE: montos a confirmar",
            text: "Los montos de la TSE son de 2018. La investigación marca **[VERIFICAR montos vigentes 2026 en una liquidación real de LUCIA]**. Los usamos en los ejemplos para que las cuentas cierren con la investigación, no porque estén confirmados.",
          },
          {
            type: "p",
            text: "**Escáner.** Son **85 UI por DUA** de importación, exportación o tránsito, sin importar el valor. Están exentos los envíos aéreos de hasta 20 kg y US$ 200. Con la UI de octubre de 2026 (≈ $ 6,65) son 85 × 6,65 = **$ 565,25**, que al tipo de cambio ilustrativo de $ 40 dan **≈ US$ 14,13**.",
          },
          {
            type: "eli5",
            text: "La Tasa Consular es como el cubierto en el restaurante: lo pagás aunque no pidas plato principal. Hasta los socios del club (MERCOSUR) pagan un poco: 3% en lugar de 5%.",
          },
        ],
      },
      {
        heading: "Otras tasas y conceptos que vas a escuchar",
        blocks: [
          {
            type: "list",
            items: [
              "**TCI (tasa de contralor de importaciones) o “tasa BROU”:** comisión histórica que cobraba el BROU. El procedimiento de la DNA todavía la nombra entre las tasas que se cobran si se anula un DUA, pero el dato de 3% del VA (artículo de 2015) **no se pudo confirmar como vigente**.",
              "**TMB (tasa de movilización de bultos) y proventos portuarios:** la TMB aparece en normas de exoneración (por ejemplo, Ley 20.212 art. 657). Hoy los servicios portuarios los factura la ANP o la terminal **fuera del DUA**.",
              "**VUCE:** 36 UI de costo de referencia por certificado utilizado; no está confirmado que sea un cobro.",
              "**Corrección de una declaración ya registrada:** 400 UI en ciertos casos (CAROU art. 70).",
              "**Honorarios del despachante:** son libres. Las referencias van de ≈ 1% del CIF (2018) a un rango de 0,5% a 3%, con mínimo por despacho, más IVA, y el timbre profesional. No son un tributo.",
            ],
          },
          {
            type: "callout",
            tone: "warn",
            title: "No las metas en la calculadora sin confirmar",
            text: "La TCI, la TMB dentro del DUA, el costo VUCE y la tarifa de honorarios 2026 están marcados **[VERIFICAR]** en la investigación. Por eso la calculadora de la app no los incluye.",
          },
        ],
      },
      {
        heading: "Los tributos internos: IVA, anticipos e IMESI",
        blocks: [
          {
            type: "p",
            text: "La segunda familia son los tributos de la **DGI** que se cobran en el DUA. Su base no es el VA solo, sino **VA + arancel (TGA)**: es la **casilla 89** del DUA. Para un importador contribuyente, casi todos se **recuperan**.",
          },
          {
            type: "table",
            headers: ["Tributo", "Alícuota vigente", "Base", "Norma y vigencia", "Naturaleza"],
            rows: [
              ["IVA importación", "22% básica / 10% mínima (algunos bienes exentos, como libros y diarios)", "VA + TGA (× 1,5 si no contribuyente)", "TO DGI 2023, Título 10, arts. 13 lit. B y 34", "Crédito fiscal para contribuyentes"],
              ["Anticipo de IVA", "10% (bien a tasa básica) / 3% (tasa mínima)", "VA + TGA", "Dec. 220/998 art. 115", "Se descuenta del IVA del mes (art. 117)"],
              ["Anticipo de IRAE", "4% desde el 01/01/2026 (antes 15% Anexo 1 / 4% Anexo 2)", "VA + TGA", "Dec. 788/008 art. 2, texto del Dec. 335/025", "Se descuenta de los anticipos de IRAE"],
              ["IMESI (solo bienes gravados)", "Según el bien: cosméticos 10% fijado, cerveza 27% (tope), cigarrillos 70%", "Contribuyente: anticipo sobre VA + TGA. No contribuyente: (VA + TGA) × 1,5", "TO DGI Título 11; Dec. 96/990; Dec. 335/996 art. 4", "Anticipo (recuperable) o costo"],
            ],
            caption: "Tributos internos que liquida el DUA, vigentes a octubre de 2026.",
          },
          {
            type: "p",
            text: "**IVA.** Si el importador **no es contribuyente** o importa a nombre propio por cuenta ajena, la base se **incrementa en 50%** (TO 2023, Tít. 10, art. 13 lit. B). Para un contribuyente, el IVA de importación es **crédito fiscal**: lo descuenta del IVA de sus ventas.",
          },
          {
            type: "callout",
            tone: "warn",
            title: "Discrepancia sobre la base del IVA",
            text: "Algunas fuentes privadas dicen que la base del IVA incluye todas las tasas o el IMESI. El texto legal consultado dice solo “valor normal de aduana más el arancel”, y así calculamos en esta app. La investigación marca **[VERIFICAR contra una liquidación real]**.",
          },
          {
            type: "p",
            text: "**Anticipo de IVA.** No corresponde (art. 116) para bienes exonerados o con IVA en suspenso, importadores con exoneración subjetiva y otros casos con declaración jurada previa. Un **no contribuyente** paga el IVA completo y no tiene anticipo.",
          },
          {
            type: "p",
            text: "**Anticipo de IRAE.** Lo pagan los contribuyentes de IRAE que importan **bienes de consumo incluidos en el Anexo**. Están exceptuados quienes tienen todas sus rentas exentas y las empresas promovidas por la Ley 16.906, con declaración jurada. El Anexo se publica en los sitios de Presidencia y del MEF.",
          },
          {
            type: "callout",
            tone: "warn",
            title: "¿Está la NCM en el Anexo?",
            text: "La investigación marca **[VERIFICAR si la NCM está en el Anexo]** del anticipo de IRAE 2026. En los ejemplos lo aplicamos a bienes de consumo para mostrar la cuenta; en una operación real se confirma en el arancel integrado.",
          },
          {
            type: "p",
            text: "**IMESI.** Grava la **primera enajenación** de bienes específicos: bebidas, alcoholes, cosmética y perfumería, tabaco, vehículos, combustibles, lubricantes. El contribuyente de IMESI paga al importar un **anticipo** sobre VA + TGA (Dec. 335/996 art. 4) que después descuenta del IMESI de sus ventas. El no contribuyente paga el IMESI en el despacho sobre (VA + TGA) × 1,5 o sobre un ficto (Dec. 96/990 art. 11), y para él es costo.",
          },
          {
            type: "table",
            headers: ["Bien", "Tasa de IMESI"],
            rows: [
              ["Cosmética y perfumería (numeral 8)", "10% fijado por decreto (tope legal 20%) [verificar vigencia]"],
              ["Bebidas alcohólicas (numeral 4)", "Tope 85% (se usan precios fictos)"],
              ["Cerveza", "Tope 27%"],
              ["Vinos finos y espumantes", "Tope 23%"],
              ["Bebidas sin alcohol con jugo, aguas y sodas", "Tope 22%"],
              ["Cigarrillos", "70%"],
              ["Lubricantes", "Tope 35%"],
            ],
            caption: "Tasas de referencia del IMESI (investigación 02, sección 3.2 j). El whisky importado lleva estampilla de la DGI (Dec. 335/996).",
          },
          {
            type: "eli5",
            text: "El IVA y los anticipos son como dejar una seña: pagás ahora en la aduana y, si sos empresa, después te lo descuentan de lo que le debés a la DGI. Si sos un particular, la seña no se devuelve: es tuya la pérdida, y encima te la calculan sobre una base 50% más grande.",
          },
        ],
      },
      {
        heading: "El orden de cálculo",
        blocks: [
          {
            type: "p",
            text: "Este es el algoritmo de la investigación, el mismo que usa la calculadora de la app. Te conviene aprenderlo de memoria, en este orden:",
          },
          {
            type: "steps",
            items: [
              { title: "1. Valor en aduana", text: "CIF = FOB + flete + seguro (sin póliza, 1% del FOB)." },
              { title: "2. TGA", text: "VA × %TGA (0% si origen MERCOSUR con prueba de origen)." },
              { title: "3. Tasa Consular", text: "VA × 5% (3% ACE 18 o Chile; 0% México o exonerada)." },
              { title: "4. TSA", text: "El menor entre CIF × 0,2% y US$ 50." },
              { title: "5. Servicios extraordinarios", text: "Según el tramo de valor." },
              { title: "6. Escáner", text: "85 UI." },
              { title: "7. LATU", text: "0,5% del CIF, solo si es alimento controlado." },
              { title: "8. Base interna", text: "VA + TGA (× 1,5 si el importador no es contribuyente)." },
              { title: "9. IMESI o anticipo de IMESI", text: "Base × %IMESI, si corresponde." },
              { title: "10. IVA", text: "Base × 22% (o 10%)." },
              { title: "11. Anticipo de IVA", text: "Base × 10% (o 3%), solo contribuyentes." },
              { title: "12. Anticipo de IRAE", text: "Base × 4%, solo contribuyentes de IRAE con bienes del Anexo." },
              { title: "13. Total del DUA", text: "La suma de los pasos 2 a 12." },
              { title: "14. Costo no recuperable", text: "TGA + Tasa Consular + TSA + TSE + escáner + LATU + honorarios (+ IMESI si es costo)." },
            ],
          },
          { type: "tool", toolId: "import-calculator" },
          {
            type: "callout",
            tone: "tip",
            title: "Redondeo",
            text: "La calculadora redondea cada línea a centavos y suma las líneas ya redondeadas, como en una liquidación. Por eso el escáner figura como 14,13 y no como 14,13125.",
          },
        ],
      },
      {
        heading: "“Gravámenes” y “amortizaciones”: qué quiere decir el curso",
        blocks: [
          {
            type: "p",
            text: "**Gravamen** es la palabra genérica para cualquier carga tributaria: en un programa, “gravámenes de importación” es el conjunto de tributos que viste arriba (TGA, Tasa Consular, tasas de servicio, IVA, anticipos, IMESI). En la jerga uruguaya también se habla de **recargos**, que son los componentes de la TGA (mínimo y adicional).",
          },
          {
            type: "p",
            text: "Con “amortizaciones” hay que tener cuidado: **no existe ningún tributo de importación uruguayo vigente con ese nombre**. Las normas y procedimientos consultados de la DNA y la DGI no lo mencionan. Si el curso lo usa, lo más probable es una de estas tres acepciones:",
          },
          {
            type: "list",
            ordered: true,
            items: [
              "**En el costeo de la importación:** “amortizar” es **prorratear** gastos fijos (honorarios, flete, gastos bancarios, tasas fijas como la TSA, la TSE o el escáner) entre las unidades importadas para llegar al **costo unitario puesto en depósito**.",
              "**Anticipos “recuperables”:** el anticipo de IVA, el anticipo de IRAE y el IVA de importación no son costo para un contribuyente, porque se recuperan o se descuentan después. Algunos docentes separan la liquidación en “costos” y “créditos o amortizables”.",
              "**Uso contable:** si lo importado es un **bien de uso** (una máquina), su costo de importación, sin los tributos recuperables, se activa y se **amortiza** (deprecia) a lo largo de su vida útil.",
            ],
          },
          {
            type: "callout",
            tone: "warn",
            title: "Confirmalo con el docente",
            text: "Estas tres lecturas son interpretaciones de la investigación, marcadas **[VERIFICAR con el docente]**. Si te lo preguntan en una entrevista, explicá que no es un tributo y contá cuál de los tres sentidos tiene sentido en el contexto.",
          },
          {
            type: "example",
            title: "Amortizar en el sentido 1: costo unitario",
            text: "En el Ejemplo 2 de la investigación (24.000 vasos desde China), el CIF es US$ 22.700 y el costo no recuperable de tributos es US$ 5.388,53. El costo puesto en depósito sin honorarios es 22.700 + 5.388,53 = US$ 28.088,53, que dividido entre 24.000 vasos da **≈ US$ 1,17 por vaso**. Si sumás los honorarios del despachante (1% del CIF = US$ 227, sin el IVA, que es recuperable), quedan US$ 28.315,53, o sea **≈ US$ 1,18 por vaso**. Eso es “amortizar” los gastos fijos en las unidades.",
          },
          {
            type: "eli5",
            text: "Amortizar en el costeo es como dividir la cuenta de la nafta de un viaje entre todos los que van en el auto: el gasto es uno solo, pero cada pasajero carga con su parte. Con una importación, cada vaso carga con su parte del flete, de las tasas y de los honorarios.",
          },
        ],
      },
      {
        heading: "Qué es costo y qué se recupera",
        blocks: [
          {
            type: "table",
            headers: ["Concepto", "Importador contribuyente", "Particular no contribuyente"],
            rows: [
              ["TGA, Tasa Consular, TSA, TSE, escáner, LATU", "Costo", "Costo"],
              ["IVA de importación", "Crédito fiscal (se recupera)", "Costo, con base × 1,5"],
              ["Anticipo de IVA", "Se descuenta del IVA del mes", "No corresponde"],
              ["Anticipo de IRAE", "Se descuenta de los anticipos de IRAE", "No corresponde"],
              ["IMESI", "Anticipo que se descuenta del IMESI de las ventas", "Costo, con base × 1,5"],
              ["Honorarios del despachante", "Costo (su IVA es recuperable)", "Costo"],
            ],
          },
          {
            type: "callout",
            tone: "tip",
            title: "La respuesta de entrevista",
            text: "“Son costo la TGA, la Tasa Consular, las tasas de servicio y los honorarios. El IVA de importación y los anticipos de IVA y de IRAE son créditos para un contribuyente, y el IMESI anticipado se descuenta del IMESI de las ventas.”",
          },
        ],
      },
    ],
    eli5: [
      {
        concept: "Valor en aduana",
        text: "Es el precio de la caja puesta en la puerta del país, con el viaje y el seguro incluidos. Sobre ese número se calcula casi todo lo demás.",
      },
      {
        concept: "Seguro ficto",
        text: "Es como cuando el kiosco te cobra la bolsa aunque digas que no la querés: si no mostrás tu póliza, la Aduana supone que tenías un seguro del 1% del FOB y lo suma igual.",
      },
      {
        concept: "Tope de la TSA",
        text: "Es como un estacionamiento con tarifa máxima diaria: cobra por hora, pero nunca más de cierto monto. La TSA cobra 0,2%, pero nunca más de US$ 50.",
      },
      {
        concept: "Base × 1,5 para no contribuyentes",
        text: "Es como el precio para no socios en el club: el socio paga sobre el precio normal y después recupera parte; el que no es socio paga sobre un precio inflado 50% y no recupera nada.",
      },
      {
        concept: "Anticipo de IRAE",
        text: "Es como adelantar una cuota del colegio: la pagás ahora, al importar, y después te la descuentan de lo que igual ibas a tener que pagar de impuesto a la renta.",
      },
    ],
    keyPoints: [
      "Valor en aduana (casilla 85) = FOB + flete + seguro, base CIF; sin póliza, seguro ficto del 1% del FOB.",
      "Costos aduaneros: TGA (0–35%; 0% MERCOSUR con origen), Tasa Consular (5%; 3% ACE 18 y Chile; 0% México; Ley 19.535, desde 01/01/2018), TSA (0,2%, tope US$ 50), TSE (escala), escáner (85 UI), LATU (0,5%, alimentos controlados).",
      "La base del IVA y los anticipos es VA + TGA (casilla 89); la Tasa Consular no la integra; para no contribuyentes se multiplica por 1,5.",
      "IVA 22% o 10%; anticipo de IVA 10% o 3% (Dec. 220/998 art. 115); anticipo de IRAE 4% desde el 01/01/2026 (Dec. 335/025).",
      "IMESI: el contribuyente paga un anticipo recuperable; el no contribuyente paga el impuesto definitivo sobre la base × 1,5.",
      "No existe un tributo llamado “amortización”: el curso probablemente se refiere a prorratear gastos, a los anticipos recuperables o a la amortización contable de un bien de uso.",
      "Datos a confirmar: Tasa Consular 2026 y origen UE, montos de la TSE, base del IVA según fuentes privadas, Anexo del IRAE e IMESI de cosméticos.",
    ],
    probableQuestions: [
      {
        question: "¿Cómo calculás el valor en aduana?",
        answer:
          "Con el método de transacción del Acuerdo de Valoración de la OMC: precio de factura más los ajustes del art. 8, más flete y seguro hasta Uruguay, o sea base CIF. Si no hay póliza, se usa un seguro ficto del 1% del FOB.",
      },
      {
        question: "¿Cuál es la base del IVA de importación?",
        answer: "El valor en aduana más el arancel (TGA). Si el importador no es contribuyente, esa base se incrementa 50%.",
      },
      {
        question: "¿La Tasa Consular integra la base del IVA?",
        answer: "No. La ley dice “valor normal de aduana más el arancel”, y la Tasa Consular no es arancel.",
      },
      {
        question: "¿Cuánto es la TSA en una importación de CIF US$ 40.000?",
        answer: "US$ 50: el 0,2% daría 80, pero la tasa tiene tope de US$ 50 por DUA.",
      },
      {
        question: "¿Qué cambió en 2026 con el anticipo de IRAE?",
        answer: "Desde el 01/01/2026 es 4% para los bienes de consumo del Anexo (Dec. 335/025). Antes era 15% para el Anexo 1 y 4% para el Anexo 2.",
      },
      {
        question: "¿Qué tributos son costo y cuáles se recuperan?",
        answer:
          "Son costo la TGA, la Tasa Consular, las tasas de servicio (TSA, TSE, escáner), el LATU y los honorarios. El IVA de importación y los anticipos de IVA y de IRAE se recuperan si el importador es contribuyente; el anticipo de IMESI se descuenta del IMESI de las ventas.",
      },
      {
        question: "¿Qué son las “amortizaciones” en una importación?",
        answer:
          "No hay un tributo con ese nombre en Uruguay. Puede referirse a prorratear los gastos fijos entre las unidades para sacar el costo unitario, a los anticipos que se recuperan, o a la amortización contable si se importa un bien de uso.",
      },
      {
        question: "¿Cuánto es la tasa de escáner?",
        answer: "85 UI por DUA (Ley 20.075 art. 161, Dec. 235/024, RG DNA 57/2024): unos $ 565 con la UI de octubre de 2026.",
      },
      {
        question: "¿Qué anticipo de IVA corresponde a un alimento gravado a la tasa mínima?",
        answer: "3% sobre VA + TGA (Dec. 220/998 art. 115). Para bienes a la tasa básica es 10%.",
      },
    ],
    sources: [S.opEntrada, S.instructivo, S.ley19535, S.dec667, S.tsaDna, S.dec305, S.embajadaAr, S.rg57, S.ui, S.dec194, S.ivaTo, S.ant115, S.ant116, S.ant117, S.irae788, S.irae335, S.irae110, S.imesiTo, S.dec96, S.dec335_96, S.dec430],
  },
  // ---------------------------------------------------------------------------
  {
    id: "p06-s4",
    moduleId: "p06",
    title: "Cálculo de una importación intra-MERCOSUR",
    summary:
      "Liquidación completa, renglón por renglón, de una importación desde Brasil con prueba de origen ACE 18, y de un alimento con IVA mínimo y control del LATU. Vas a ver por qué el arancel 0% no quiere decir “gratis” y cuánto cuesta perder el certificado de origen.",
    minutes: 22,
    sections: [
      {
        heading: "Los supuestos con que trabajamos",
        blocks: [
          {
            type: "p",
            text: "Antes de cualquier liquidación, en una oficina se dejan escritos los supuestos. Acá usamos los mismos que la investigación, y la calculadora de la app los aplica igual:",
          },
          {
            type: "list",
            items: [
              "Todos los importes en dólares (US$). Tipo de cambio ilustrativo: **US$ 1 = $ 40**.",
              "Escáner: 85 UI × $ 6,65 (UI de octubre de 2026) = $ 565,25 ≈ **US$ 14,13**.",
              "Tasas vigentes a octubre de 2026: Tasa Consular 3% para el ACE 18; TSA 0,2% con tope de US$ 50; TSE según la escala de 2018 (a confirmar); IVA 22% o 10%; anticipo de IVA 10% o 3%; anticipo de IRAE 4% desde el 01/01/2026.",
              "Importador **contribuyente** de IVA e IRAE, salvo que se diga otra cosa.",
              "Cada renglón se redondea a centavos y los totales se suman sobre los renglones redondeados.",
            ],
          },
          {
            type: "eli5",
            text: "Fijar los supuestos es como anotar la receta antes de cocinar: si no decís cuántos huevos usaste, nadie puede repetir la torta. En comex, si no decís qué tipo de cambio y qué tasas usaste, nadie puede revisar tu cuenta.",
          },
        ],
      },
      {
        heading: "Qué cambia cuando el origen es MERCOSUR",
        blocks: [
          {
            type: "table",
            headers: ["Concepto", "Extrazona", "Intra-MERCOSUR con prueba de origen (ACE 18)"],
            rows: [
              ["TGA", "La del arancel para esa NCM", "0%"],
              ["Tasa Consular", "5%", "3%"],
              ["TSA, TSE, escáner, LATU", "Igual", "Igual"],
              ["Base del IVA y anticipos", "VA + TGA", "VA (porque la TGA es 0)"],
              ["IVA y anticipos", "Igual alícuota", "Igual alícuota, sobre una base menor"],
              ["Código en la casilla 61", "El del régimen general", "310"],
            ],
          },
          {
            type: "eli5",
            text: "Con origen MERCOSUR no pagás la entrada al club, pero igual pagás el cubierto (Tasa Consular 3%), el guardarropa (las tasas de servicio) y dejás la seña del IVA. Ahorrás mucho, pero no es gratis.",
          },
        ],
      },
      {
        heading: "Ejemplo 1: vajilla de vidrio desde São Paulo",
        blocks: [
          {
            type: "p",
            text: "**Datos.** Vajilla de vidrio desde São Paulo en camión, CPT Montevideo. FOB US$ 10.000; flete US$ 800; seguro US$ 60. Declaración de origen ACE 18 (código 310). IVA a tasa básica. El bien está en el Anexo del anticipo de IRAE.",
          },
          {
            type: "table",
            headers: ["#", "Concepto", "Cálculo", "US$", "¿Costo o crédito?"],
            rows: [
              ["1", "Valor en aduana (CIF)", "10.000 + 800 + 60", "**10.860,00**", "—"],
              ["2", "TGA", "10.860 × 0% (ACE 18)", "0,00", "—"],
              ["3", "Tasa Consular", "10.860 × 3%", "325,80", "Costo"],
              ["4", "TSA", "10.860 × 0,2% = 21,72 (menor que el tope de 50)", "21,72", "Costo"],
              ["5", "Servicios extraordinarios", "Tramo 8.001–30.000", "108,00", "Costo"],
              ["6", "Inspección no intrusiva", "85 UI", "14,13", "Costo"],
              ["7", "Base interna", "10.860 + 0", "10.860,00", "—"],
              ["8", "IVA 22%", "10.860 × 22%", "2.389,20", "Crédito"],
              ["9", "Anticipo de IVA 10%", "10.860 × 10%", "1.086,00", "Crédito"],
              ["10", "Anticipo de IRAE 4%", "10.860 × 4%", "434,40", "Crédito"],
              ["", "**Total del DUA**", "3 + 4 + 5 + 6 + 8 + 9 + 10", "**4.379,25**", ""],
              ["", "Costo no recuperable", "3 + 4 + 5 + 6", "469,65 (4,3% del CIF)", ""],
              ["", "Recuperable como crédito", "8 + 9 + 10", "3.909,60", ""],
            ],
            caption: "Ejemplo 1 de la investigación (sección 3.4). Al tipo de cambio ilustrativo, el DUA suma ≈ $ 175.170.",
          },
          {
            type: "p",
            text: "Fijate en tres cosas. Primero, la **base interna** es igual al VA porque la TGA es cero. Segundo, la mayor parte de lo que se paga (US$ 3.909,60 de US$ 4.379,25) es **crédito**: el importador lo adelanta, pero lo recupera. Tercero, el costo que queda (US$ 469,65) es apenas el **4,3% del CIF**. El costo puesto en Montevideo, antes de honorarios y gastos de terminal, es 10.860 + 469,65 = **US$ 11.329,65**.",
          },
          {
            type: "tool",
            toolId: "import-calculator",
          },
          {
            type: "callout",
            tone: "tip",
            title: "Probalo en la calculadora",
            text: "Cargá FOB 10.000, flete 800, seguro 60, origen MERCOSUR, IVA 22%, contribuyente, con anticipo de IRAE. Tenés que llegar a un total de US$ 4.379,25 y un costo real de US$ 11.329,65. Después cambiá el origen a extrazona con arancel 18% y mirá qué pasa.",
          },
        ],
      },
      {
        heading: "La misma operación sin certificado de origen",
        blocks: [
          {
            type: "p",
            text: "Supongamos que el proveedor brasileño no manda la declaración de origen, o que el certificado tiene un error que lo invalida. La mercadería se liquida como **extrazona**. Con una TGA ilustrativa del 18% (como en los ejemplos de la investigación), la cuenta queda así:",
          },
          {
            type: "table",
            headers: ["Concepto", "Con origen ACE 18", "Sin prueba de origen (TGA 18%)", "Diferencia"],
            rows: [
              ["TGA", "0,00", "1.954,80", "+1.954,80"],
              ["Tasa Consular", "325,80 (3%)", "543,00 (5%)", "+217,20"],
              ["TSA + TSE + escáner", "143,85", "143,85", "0"],
              ["Base interna", "10.860,00", "12.814,80", ""],
              ["IVA 22%", "2.389,20", "2.819,26", "+430,06"],
              ["Anticipo de IVA 10%", "1.086,00", "1.281,48", "+195,48"],
              ["Anticipo de IRAE 4%", "434,40", "512,59", "+78,19"],
              ["**Total del DUA**", "**4.379,25**", "**7.254,98**", "+2.875,73"],
              ["**Costo no recuperable**", "**469,65**", "**2.641,65**", "**+2.172,00**"],
            ],
            caption: "Comparación verificada con la calculadora de la app (misma lógica que la investigación).",
          },
          {
            type: "p",
            text: "Perder el papel cuesta **US$ 2.172 de costo real** (1.954,80 de TGA + 217,20 de diferencia de Tasa Consular) en una operación de poco más de diez mil dólares. Los otros US$ 703,73 de diferencia en el DUA son IVA y anticipos: el contribuyente los recupera, pero igual tiene que poner esa plata en el momento del despacho.",
          },
          {
            type: "callout",
            tone: "warn",
            title: "Por qué la casilla 61 es tan delicada",
            text: "Si declarás el código 310 sin una prueba de origen válida, el Vista puede liquidar la diferencia (TGA extrazona y Tasa Consular del 5%) y puede configurarse una infracción. Y recordá que el despachante responde solidariamente por los tributos (CAROU art. 27).",
          },
          {
            type: "eli5",
            text: "El certificado de origen es como el carné de estudiante en el ómnibus: si lo tenés, pagás boleto con descuento; si te lo olvidaste en casa, pagás el boleto entero aunque seas estudiante.",
          },
        ],
      },
      {
        heading: "Ejercicio E6: alimento con IVA mínimo y control del LATU",
        blocks: [
          {
            type: "p",
            text: "**Datos.** Alimento gravado a la tasa mínima de IVA, CIF US$ 6.000, origen MERCOSUR con prueba de origen (TGA 0%), sujeto a control del LATU. No está en el Anexo del anticipo de IRAE.",
          },
          {
            type: "table",
            headers: ["Concepto", "Cálculo", "US$"],
            rows: [
              ["Valor en aduana", "Dato", "6.000,00"],
              ["TGA", "6.000 × 0%", "0,00"],
              ["Tasa Consular", "6.000 × 3%", "180,00"],
              ["TSA", "6.000 × 0,2%", "12,00"],
              ["Servicios extraordinarios", "Tramo 2.000–8.000", "48,00"],
              ["Escáner", "85 UI", "14,13"],
              ["Precio LATU", "6.000 × 0,5%", "30,00"],
              ["IVA 10% (tasa mínima)", "6.000 × 10%", "600,00"],
              ["Anticipo de IVA 3% (tasa mínima)", "6.000 × 3%", "180,00"],
              ["**Total del DUA**", "", "**1.064,13**"],
              ["Costo no recuperable", "180 + 12 + 48 + 14,13 + 30", "284,13"],
              ["Recuperable", "600 + 180", "780,00"],
            ],
            caption: "Ejercicio E6 de la investigación.",
          },
          {
            type: "list",
            items: [
              "Con IVA a la **tasa mínima** (10%), el anticipo de IVA es del **3%**, no del 10% (Dec. 220/998 art. 115).",
              "El **LATU** cobra 0,5% del CIF solo porque el alimento está sujeto a su control (Dec. 194/022; antes era 1,5%).",
              "No hay anticipo de IRAE porque el bien no está en el Anexo.",
            ],
          },
          {
            type: "eli5",
            text: "Los alimentos básicos son como el menú del día: tienen IVA con descuento (10%) y la seña que dejás también es más chica (3%). Pero como son comida, pasan por el control del LATU, que cobra su revisión.",
          },
        ],
      },
      {
        heading: "Cómo se lee una liquidación intra-MERCOSUR",
        blocks: [
          {
            type: "steps",
            items: [
              { title: "1. Verificar el origen antes de calcular", text: "¿Hay certificado, COD o declaración de origen válidos? Si no, se calcula como extrazona." },
              { title: "2. Valor en aduana", text: "CIF: FOB + flete + seguro (ficto 1% del FOB si no hay póliza). En camión desde Brasil, el flete es el del CRT." },
              { title: "3. TGA en cero, Tasa Consular al 3%", text: "Sin olvidar que azúcar y automotores no tienen el 0%." },
              { title: "4. Tasas fijas", text: "TSA (0,2%, tope 50), TSE (tramo) y escáner (85 UI). En operaciones chicas pesan mucho en proporción." },
              { title: "5. Tributos internos sobre el VA", text: "IVA, anticipo de IVA y, si corresponde, anticipo de IRAE e IMESI." },
              { title: "6. Separar costo y crédito", text: "Es lo que el cliente necesita para formar su precio de venta." },
            ],
          },
          {
            type: "callout",
            tone: "uy",
            title: "Tasas fijas y operaciones chicas",
            text: "En el Ejemplo 1 las tasas fijas (TSE y escáner) suman US$ 122,13 sobre un CIF de 10.860. En una importación de CIF US$ 3.000 serían 48 + 14,13 = US$ 62,13, que proporcionalmente pesan mucho más. Por eso la investigación sugiere **consolidar embarques** para diluir las tasas fijas.",
          },
        ],
      },
    ],
    eli5: [
      {
        concept: "Arancel 0% intra-MERCOSUR",
        text: "Es como entrar gratis al cine con el carné del club, pero igual pagás el pochoclo: la Tasa Consular, las tasas de servicio y el IVA siguen.",
      },
      {
        concept: "Costo y crédito",
        text: "Es la diferencia entre la plata que gastás en el almuerzo (costo) y la que le prestás a un amigo (crédito): las dos salen de tu bolsillo hoy, pero solo una vuelve.",
      },
      {
        concept: "Base interna sin TGA",
        text: "Si la entrada es gratis, el impuesto que se calcula sobre “precio + entrada” se calcula solo sobre el precio. Por eso, sin arancel, el IVA también es más bajo.",
      },
      {
        concept: "LATU",
        text: "Es como el bromatólogo que prueba la comida antes de que llegue a la mesa: solo interviene con los alimentos que controla y cobra medio por ciento del valor.",
      },
    ],
    keyPoints: [
      "Con prueba de origen ACE 18 (código 310): TGA 0% y Tasa Consular 3%; todo lo demás se paga igual.",
      "Ejemplo 1 (Brasil, CIF 10.860): total del DUA US$ 4.379,25; costo no recuperable US$ 469,65 (4,3% del CIF); recuperable US$ 3.909,60.",
      "Sin prueba de origen y con TGA 18%, la misma operación tiene un costo no recuperable de US$ 2.641,65: perder el papel cuesta US$ 2.172.",
      "La base del IVA y los anticipos es VA + TGA; con TGA 0%, es el VA.",
      "Con IVA mínimo (10%), el anticipo de IVA es 3%. El LATU cobra 0,5% del CIF solo en alimentos controlados.",
      "Ejercicio E6 (alimento, CIF 6.000): total US$ 1.064,13; costo US$ 284,13; recuperable US$ 780.",
      "Azúcar y automotores no tienen el 0% intra-MERCOSUR.",
    ],
    probableQuestions: [
      {
        question: "Importás de Brasil con declaración de origen. ¿Qué pagás?",
        answer:
          "TGA 0% (ACE 18), Tasa Consular 3%, TSA 0,2% con tope de US$ 50, servicios extraordinarios, escáner de 85 UI, IVA sobre el VA y, si sos contribuyente, anticipo de IVA y eventualmente de IRAE.",
      },
      {
        question: "En el Ejemplo 1, ¿cuánto es costo y cuánto es crédito?",
        answer: "Costo: US$ 469,65 (Tasa Consular, TSA, TSE y escáner). Crédito: US$ 3.909,60 (IVA, anticipo de IVA y anticipo de IRAE). Total del DUA: US$ 4.379,25.",
      },
      {
        question: "¿Cuánto es la Tasa Consular sobre un CIF de US$ 10.860 de origen MERCOSUR?",
        answer: "US$ 325,80 (3%).",
      },
      {
        question: "¿Qué pasa si el certificado de origen no es válido?",
        answer: "Se liquida como extrazona: TGA del arancel y Tasa Consular 5%. Si ya se declaró el código 310, el Vista puede liquidar la diferencia y puede haber infracción.",
      },
      {
        question: "¿Qué anticipo de IVA paga un alimento a la tasa mínima?",
        answer: "3% sobre VA + TGA. Para bienes a la tasa básica es 10%.",
      },
      {
        question: "¿Cuándo se paga el precio LATU?",
        answer: "Solo cuando el alimento está sujeto a control del LATU: 0,5% del CIF (Dec. 194/022).",
      },
      {
        question: "¿Por qué conviene consolidar embarques chicos?",
        answer: "Porque la TSE y el escáner son montos fijos por DUA: en una operación chica pesan proporcionalmente más, y al consolidar se diluyen.",
      },
    ],
    sources: [S.ley19535, S.dec667, S.tsaDna, S.dec305, S.embajadaAr, S.rg57, S.ui, S.dec194, S.ivaTo, S.ant115, S.irae335, S.aladiAce18, S.rg06],
  },

  // ---------------------------------------------------------------------------
  {
    id: "p06-s5",
    moduleId: "p06",
    title: "Cálculo de una importación extra-MERCOSUR",
    summary:
      "Liquidaciones completas de importaciones desde China y EE. UU.: régimen general con TGA, Tasa Consular del 5%, tope de la TSA, IMESI para cosméticos y el caso del particular no contribuyente, donde casi todo se vuelve costo.",
    minutes: 25,
    sections: [
      {
        heading: "Extrazona: el caso más común",
        blocks: [
          {
            type: "p",
            text: "La mayoría de los bienes de consumo que entran por el Puerto de Montevideo viene de fuera del MERCOSUR, sobre todo de China. Ahí no hay preferencia: se paga la **TGA** de la NCM (que para la extrazona suele coincidir con el AEC) y la **Tasa Consular del 5%**. Y como la TGA entra en la base del IVA y de los anticipos, todo lo que viene después también crece.",
          },
          {
            type: "callout",
            tone: "info",
            title: "Supuestos",
            text: "Igual que en la lección anterior: US$ 1 = $ 40; escáner 85 UI ≈ US$ 14,13; tasas vigentes a octubre de 2026; importador contribuyente de IVA e IRAE; cada renglón redondeado a centavos. Las TGA de los ejemplos son **ilustrativas** (la investigación marca verificar la NCM real).",
          },
          {
            type: "eli5",
            text: "Importar desde fuera del club es entrar al cine sin carné: pagás la entrada completa (TGA), el cubierto más caro (Tasa Consular 5%) y, como el IVA se calcula sobre el precio más la entrada, también te sale más caro el IVA.",
          },
        ],
      },
      {
        heading: "Ejemplo 2: vasos de vidrio desde Ningbo",
        blocks: [
          {
            type: "p",
            text: "**Datos.** Vasos de vidrio, FOB Ningbo US$ 20.000; flete marítimo US$ 2.500; seguro US$ 200. TGA ilustrativa del 18%. IVA a tasa básica. Bien de consumo del Anexo del anticipo de IRAE.",
          },
          {
            type: "table",
            headers: ["#", "Concepto", "Cálculo", "US$", "¿Costo o crédito?"],
            rows: [
              ["1", "CIF", "20.000 + 2.500 + 200", "**22.700,00**", "—"],
              ["2", "TGA 18%", "22.700 × 18%", "4.086,00", "Costo"],
              ["3", "Tasa Consular 5%", "22.700 × 5%", "1.135,00", "Costo"],
              ["4", "TSA", "22.700 × 0,2% = 45,40 (menor que 50)", "45,40", "Costo"],
              ["5", "Servicios extraordinarios", "Tramo 8.001–30.000", "108,00", "Costo"],
              ["6", "Inspección no intrusiva", "85 UI", "14,13", "Costo"],
              ["7", "Base interna", "22.700 + 4.086", "26.786,00", "—"],
              ["8", "IVA 22%", "26.786 × 22%", "5.892,92", "Crédito"],
              ["9", "Anticipo de IVA 10%", "26.786 × 10%", "2.678,60", "Crédito"],
              ["10", "Anticipo de IRAE 4%", "26.786 × 4%", "1.071,44", "Crédito"],
              ["", "**Total del DUA**", "2 a 6 + 8 a 10", "**15.031,49** (≈ $ 601.260)", ""],
              ["", "Costo no recuperable", "2 a 6", "5.388,53 (23,7% del CIF)", ""],
              ["", "Recuperable", "8 a 10", "9.642,96", ""],
              ["", "Honorarios del despachante (1% CIF + IVA)", "227 + 49,94", "276,94 (el IVA de 49,94 es recuperable)", ""],
            ],
            caption: "Ejemplo 2 de la investigación (sección 3.5). Es la misma operación del DUA de la lección p05-s4.",
          },
          {
            type: "p",
            text: "Compará con el Ejemplo 1 de Brasil: allá el costo no recuperable era el **4,3%** del CIF; acá es el **23,7%**. Casi toda la diferencia es la TGA (US$ 4.086) y el salto de la Tasa Consular del 3% al 5%. El costo puesto en Montevideo, sin honorarios, es 22.700 + 5.388,53 = **US$ 28.088,53**.",
          },
          {
            type: "tool",
            toolId: "import-calculator",
          },
          {
            type: "callout",
            tone: "uy",
            title: "Del dólar al peso en el DUA",
            text: "En el DUA, la **casilla 47** (total a pagar) va en pesos: 15.031,49 × 40 ≈ **$ 601.260** (la investigación muestra $ 601.259 en el ejemplo de la casilla). En la **casilla 49/50**, la TGA figura como 4.086 × 40 = **$ 163.440**.",
          },
          {
            type: "eli5",
            text: "La base interna es como la propina calculada sobre la cuenta con el vino incluido: como el arancel se suma antes, el IVA se calcula sobre un número más grande.",
          },
        ],
      },
      {
        heading: "El tope de la TSA y los tramos de la TSE",
        blocks: [
          {
            type: "example",
            title: "Ejercicio E4: extrazona con CIF US$ 30.000",
            text: "CIF US$ 30.000; TGA 14%; importador contribuyente; bien de consumo del Anexo de IRAE. TGA = **4.200**. Tasa Consular 5% = **1.500**. TSA: 30.000 × 0,2% = 60, pero con el tope queda en **50**. TSE: tramo 30.000–100.000 = **240** (a confirmar). Escáner = **14,13**. Base interna = 30.000 + 4.200 = **34.200**. IVA 22% = **7.524**. Anticipo de IVA 10% = **3.420**. Anticipo de IRAE 4% = **1.368**. **Total = US$ 18.316,13.** Costo no recuperable = 4.200 + 1.500 + 50 + 240 + 14,13 = **US$ 6.004,13** (20% del CIF).",
          },
          {
            type: "table",
            headers: ["CIF (US$)", "0,2% del CIF", "TSA que se paga"],
            rows: [
              ["8.000", "16,00", "16,00"],
              ["22.700", "45,40", "45,40"],
              ["25.000", "50,00", "50,00"],
              ["40.000", "80,00", "50,00 (tope)"],
            ],
            caption: "Ejercicio E3 de la investigación y otros valores de referencia.",
          },
          {
            type: "callout",
            tone: "warn",
            title: "La TSE es el dato más flojo",
            text: "Los montos de la TSE vienen de un informe de 2018 y la investigación pide verificarlos en una liquidación real de LUCIA. Si en la oficina ves otro número, el que vale es el de LUCIA.",
          },
        ],
      },
      {
        heading: "Ejemplo 3: cosméticos con IMESI desde Miami",
        blocks: [
          {
            type: "p",
            text: "**Datos.** Cremas faciales, FOB Miami US$ 15.000; flete aéreo US$ 1.200; seguro US$ 150. TGA ilustrativa del 18% (verificar NCM 3304). IMESI numeral 8 al 10% (verificar vigencia). El importador es contribuyente de IMESI. Requiere registro previo del producto en el MSP vía VUCE.",
          },
          {
            type: "table",
            headers: ["#", "Concepto", "Cálculo", "US$", "¿Costo o crédito?"],
            rows: [
              ["1", "CIF", "15.000 + 1.200 + 150", "**16.350,00**", "—"],
              ["2", "TGA 18%", "16.350 × 18%", "2.943,00", "Costo"],
              ["3", "Tasa Consular 5%", "16.350 × 5%", "817,50", "Costo"],
              ["4", "TSA", "16.350 × 0,2%", "32,70", "Costo"],
              ["5", "Servicios extraordinarios", "Tramo 8.001–30.000", "108,00", "Costo"],
              ["6", "Inspección no intrusiva", "85 UI", "14,13", "Costo"],
              ["7", "Base interna", "16.350 + 2.943", "19.293,00", "—"],
              ["8", "Anticipo de IMESI 10%", "19.293 × 10%", "1.929,30", "Crédito (contra el IMESI de las ventas)"],
              ["9", "IVA 22%", "19.293 × 22%", "4.244,46", "Crédito"],
              ["10", "Anticipo de IVA 10%", "19.293 × 10%", "1.929,30", "Crédito"],
              ["11", "Anticipo de IRAE 4%", "19.293 × 4%", "771,72", "Crédito"],
              ["", "**Total del DUA**", "", "**12.790,11**", ""],
              ["", "Costo no recuperable", "2 a 6", "3.915,33", ""],
              ["", "Recuperable", "8 a 11", "8.874,78", ""],
            ],
            caption: "Ejemplo 3 de la investigación (sección 3.6).",
          },
          {
            type: "callout",
            tone: "warn",
            title: "IMESI de cosméticos",
            text: "El 10% para cosmética es una tasa **fijada por decreto** dentro de un tope legal del 20%, y la investigación marca **[VERIFICAR vigencia]**. Confirmá la tasa de la NCM en el arancel integrado antes de cotizar.",
          },
          {
            type: "eli5",
            text: "El IMESI es como un impuesto especial a los “gustitos” (bebidas, perfumes, cigarrillos). Si vendés esos productos, al importar dejás una seña que después descontás; si los traés para vos, lo pagás entero.",
          },
        ],
      },
      {
        heading: "La variante del no contribuyente",
        blocks: [
          {
            type: "p",
            text: "Si las mismas cremas las importa una **persona física no contribuyente**, cambian tres cosas: la base de IVA e IMESI se **multiplica por 1,5**, el IMESI y el IVA pasan a ser **definitivos** (costo) y **no hay anticipos** de IVA ni de IRAE.",
          },
          {
            type: "table",
            headers: ["Concepto", "Contribuyente", "No contribuyente"],
            rows: [
              ["TGA + Tasa Consular + TSA + TSE + escáner", "3.915,33", "3.915,33"],
              ["Base interna", "19.293,00", "19.293 × 1,5 = 28.939,50"],
              ["IMESI 10%", "1.929,30 (anticipo)", "2.893,95 (definitivo)"],
              ["IVA 22%", "4.244,46 (crédito)", "6.366,69 (costo)"],
              ["Anticipo de IVA", "1.929,30", "No corresponde"],
              ["Anticipo de IRAE", "771,72", "No corresponde"],
              ["**Total del DUA**", "**12.790,11**", "**13.175,97**"],
              ["**Costo no recuperable**", "**3.915,33**", "**13.175,97**"],
              ["**Costo real (CIF + no recuperable)**", "**20.265,33**", "**29.525,97**"],
            ],
            caption: "Variante del Ejemplo 3, verificada con la calculadora.",
          },
          {
            type: "p",
            text: "El DUA del particular es apenas US$ 385,86 más caro, pero su **costo real** es US$ 9.260,64 mayor, porque no recupera nada. Esa es la razón por la que un particular que importa por la vía formal termina pagando tanto.",
          },
          {
            type: "example",
            title: "Ejercicio E7: particular no contribuyente",
            text: "Una persona física importa por la vía formal un bien de CIF US$ 3.000 con TGA del 20%. TGA = **600**; Tasa Consular 5% = **150**; TSA = **6**; TSE (tramo 2.000–8.000) = **48**; escáner = **14,13**. Base del IVA = (3.000 + 600) × 1,5 = **5.400**; IVA 22% = **1.188**, sin anticipos. **Total = US$ 2.006,13**, es decir, el **67% del CIF**, y todo es costo.",
          },
          {
            type: "eli5",
            text: "Para el particular, el IVA de importación es como la entrada a un recital: la pagás y no te la devuelve nadie. Para la empresa, es como un depósito de garantía que recupera después.",
          },
        ],
      },
      {
        heading: "Cómo bajar el costo, dentro de la norma",
        blocks: [
          {
            type: "list",
            items: [
              "**Revisar la clasificación:** una NCM correcta puede tener otra TGA (y una incorrecta, una multa).",
              "**Aprovechar preferencias de origen:** MERCOSUR, México, Chile y la UE desde 2026, con la prueba de origen en regla.",
              "**Admisión temporaria** si la mercadería se va a reexportar.",
              "**Consolidar embarques** para diluir las tasas fijas por DUA.",
              "**Exoneraciones** previstas (bienes de capital, Ley de Inversiones), siempre dentro de la norma.",
            ],
          },
          {
            type: "example",
            title: "Comparación de los tres ejemplos",
            text: "Ejemplo 1 (Brasil, ACE 18): costo no recuperable **4,3%** del CIF. Ejemplo 2 (China, TGA 18%): **23,7%**. Ejercicio E7 (particular, TGA 20%): **67%**. El mismo tipo de mercadería puede costar muy distinto según el origen y quién la importa.",
          },
          {
            type: "callout",
            tone: "tip",
            title: "Lo que el cliente quiere ver",
            text: "Cuando presentes una liquidación, separá siempre tres números: **total a pagar en el DUA** (la plata que tiene que tener en la cuenta), **costo no recuperable** (lo que va a su precio de venta) y **crédito a recuperar** (lo que vuelve vía DGI). Así lo hace la calculadora de la app.",
          },
        ],
      },
    ],
    eli5: [
      {
        concept: "Tasa Consular extrazona",
        text: "Es el cubierto del restaurante en su versión cara: 5% para los que no son del club, contra 3% de los socios.",
      },
      {
        concept: "Tope de la TSA",
        text: "Es como el peaje que cobra por kilómetro pero tiene un máximo: por más largo que sea el viaje (el valor), nunca pagás más de US$ 50.",
      },
      {
        concept: "Base × 1,5",
        text: "Es como comprar en un mayorista sin ser socio: te cobran sobre un precio 50% más alto y además no podés descontar nada después.",
      },
      {
        concept: "Costo no recuperable",
        text: "Es la parte de la cuenta que se queda en la mesa. El resto es como un vale que canjeás después en la DGI.",
      },
    ],
    keyPoints: [
      "Extrazona: TGA del arancel sobre el VA y Tasa Consular del 5%; la TGA también agranda la base del IVA y los anticipos.",
      "Ejemplo 2 (China, CIF 22.700, TGA 18%): total US$ 15.031,49; costo no recuperable US$ 5.388,53 (23,7%); recuperable US$ 9.642,96.",
      "TSA: 0,2% con tope de US$ 50 (se alcanza con CIF de US$ 25.000); E4 con CIF 30.000 da TSA 50, TSE 240 y total US$ 18.316,13.",
      "Ejemplo 3 (cosméticos, IMESI 10%): total US$ 12.790,11 para un contribuyente; el anticipo de IMESI es recuperable.",
      "No contribuyente: base × 1,5, IMESI e IVA definitivos y sin anticipos; en el Ejemplo 3, costo real US$ 29.525,97 contra US$ 20.265,33.",
      "E7 (particular, CIF 3.000, TGA 20%): total US$ 2.006,13, el 67% del CIF, todo costo.",
      "Siempre separá total del DUA, costo no recuperable y crédito a recuperar.",
    ],
    probableQuestions: [
      {
        question: "¿Qué tributos paga una importación desde China?",
        answer:
          "TGA según la NCM, Tasa Consular del 5%, TSA del 0,2% con tope de US$ 50, servicios extraordinarios, escáner de 85 UI, IVA del 22% o 10% sobre CIF + TGA y, si es contribuyente, anticipo de IVA y eventualmente de IRAE del 4%. IMESI si el producto lo tiene.",
      },
      {
        question: "En el Ejemplo 2, ¿cuál es la base del IVA y por qué?",
        answer: "US$ 26.786: el valor en aduana (22.700) más la TGA (4.086). La ley dice “valor normal de aduana más el arancel”.",
      },
      {
        question: "¿Cuánto es el costo no recuperable del Ejemplo 2?",
        answer: "US$ 5.388,53, el 23,7% del CIF: TGA 4.086 + Tasa Consular 1.135 + TSA 45,40 + TSE 108 + escáner 14,13.",
      },
      {
        question: "¿Qué cambia si quien importa no es contribuyente?",
        answer: "La base del IVA (y del IMESI) se multiplica por 1,5, esos impuestos son costo definitivo y no hay anticipos de IVA ni de IRAE.",
      },
      {
        question: "¿Cómo trata el IMESI un importador contribuyente de IMESI?",
        answer: "Paga un anticipo sobre VA + TGA (Dec. 335/996 art. 4) y lo descuenta después del IMESI de sus ventas.",
      },
      {
        question: "¿Cuánto paga de TSA una importación de CIF US$ 30.000?",
        answer: "US$ 50: el 0,2% daría 60, pero el tope es US$ 50.",
      },
      {
        question: "¿Qué le sugerís a un cliente para bajar costos de importación?",
        answer:
          "Revisar la clasificación y las preferencias de origen, usar admisión temporaria si va a reexportar, consolidar embarques para diluir las tasas fijas y aprovechar las exoneraciones, siempre dentro de la norma.",
      },
      {
        question: "Un particular importa formalmente un bien de CIF US$ 3.000 con TGA 20%. ¿Cuánto paga?",
        answer: "US$ 2.006,13: TGA 600, Tasa Consular 150, TSA 6, TSE 48, escáner 14,13 e IVA 1.188 sobre una base de 5.400 (3.600 × 1,5). Es el 67% del CIF.",
      },
    ],
    sources: [S.ley19535, S.dec667, S.tsaDna, S.dec305, S.embajadaAr, S.rg57, S.ui, S.ivaTo, S.ant115, S.ant116, S.ant117, S.irae788, S.irae335, S.imesiTo, S.dec96, S.dec335_96, S.tradeGov],
  },
]
