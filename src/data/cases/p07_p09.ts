import type { CaseStudy } from '../types'

// Casos prácticos de los módulos 7, 8 y 9 (admisión temporaria, zona franca, CAROU y exportación).
// Base: docs/research/03_regimenes_exportacion.md (secciones 1 a 3 y casos 1 a 5).
// Los aranceles y tipos de cambio marcados como "supuestos" son inventados para el ejercicio.

export const p07p09Cases: CaseStudy[] = [
  // ─────────────────────────────────────────────────────────────
  {
    id: "c-p07-01",
    moduleId: "p07",
    title: "Lana Sur: tela en admisión temporaria para camisas a Chile",
    difficulty: 2,
    scenario:
      "Lana Sur S.A. es una confección de Montevideo con planta aprobada y al día con DGI, BPS y DNA. Importa de China 10.000 m de tela, con un valor CIF de US$ 50.000, para fabricar camisas para un cliente de Chile. El LATU autorizó la operación el 15/03/2025 y aprobó un consumo de 1,6 m por camisa. En mayo de 2026 (mes 14) lleva exportadas 5.500 camisas. El cliente chileno acaba de postergar su próximo pedido.",
    data: [
      { label: "Tela importada", value: "10.000 m" },
      { label: "Valor CIF", value: "US$ 50.000 (US$ 5 por metro)" },
      { label: "Autorización del LATU", value: "15/03/2025" },
      { label: "Consumo aprobado", value: "1,6 m por camisa" },
      { label: "Camisas exportadas a mayo de 2026", value: "5.500" },
    ],
    steps: [
      {
        kind: "mcq",
        prompt: "¿Qué régimen corresponde y quién autoriza la operación?",
        options: [
          "Importación definitiva, autorizada por la DGI",
          "Admisión temporaria industrial (Ley 18.184 y Dec. 505/009), autorizada por el LATU",
          "Depósito aduanero, autorizado por la ANP",
          "Zona franca, autorizada por el MEF",
        ],
        answer: 1,
        solution:
          "Es una admisión temporaria para perfeccionamiento activo, del régimen industrial de la Ley 18.184 reglamentado por el Decreto 505/009. La solicitud va al LATU, que autoriza y comunica a la DNA; recién ahí el despachante numera el DUA de AT, sin tributos de importación (sí se pagan tasas).",
      },
      {
        kind: "numeric",
        prompt: "¿Cuántos metros de tela quedan como saldo en la “cuenta” de la operación?",
        answer: 1200,
        tolerance: 0,
        unit: "m",
        solution: "Descargado: 5.500 camisas × 1,6 m = 8.800 m. Saldo: 10.000 − 8.800 = 1.200 m.",
      },
      {
        kind: "numeric",
        prompt: "¿Cuál es el valor CIF de ese saldo?",
        answer: 6000,
        tolerance: 0,
        unit: "US$",
        solution: "1.200 m × US$ 5 por metro = US$ 6.000 CIF que todavía hay que cancelar.",
      },
      {
        kind: "mcq",
        prompt: "La AT vence el 15/09/2026. ¿Cuál es el último día para pedir la prórroga cumpliendo los 90 días de anticipación?",
        options: [
          "15/08/2026",
          "15/09/2026",
          "17/06/2026",
          "15/03/2026",
        ],
        answer: 2,
        solution:
          "La prórroga se pide al LATU al menos 90 días antes del vencimiento (Dec. 505/009 art. 4). Contando 90 días hacia atrás desde el 15/09/2026 se llega al 17/06/2026. En la práctica conviene pedirla antes, apenas se sabe que el pedido se posterga, con la justificación correspondiente.",
      },
      {
        kind: "mcq",
        prompt: "Si en vez de prorrogar Lana Sur decide nacionalizar el saldo en el mes 14, ¿qué necesita?",
        options: [
          "Solo pagar los tributos según la fecha del DUA de AT",
          "Nada; la nacionalización está prohibida",
          "Un aviso a la DGI",
          "Autorización previa del MIEM, canal rojo y tributos a la fecha de la importación definitiva",
        ],
        answer: 3,
        solution:
          "El mes 14 está dentro de los últimos 6 meses del plazo. Según el art. 9 del Dec. 505/009, la nacionalización es excepcional: autorización previa del MIEM, canal rojo y tributos a la fecha de la importación. Si lo hubiera hecho en los primeros 12 meses, los tributos se calcularían según la fecha del DUA de AT (art. 8).",
      },
      {
        kind: "open",
        prompt: "El gerente propone venderle 500 m de tela a un taller local “para no perderlos”. ¿Qué le contestás?",
        solution:
          "Que no se puede: vender en plaza mercadería en AT sin nacionalizarla es infracción. Consecuencias: multa del MIEM de hasta el 100 % del CIF del faltante (500 m × US$ 5 = hasta US$ 2.500), tributos con intereses y multas, posible suspensión de hasta un año en los regímenes de promoción, la infracción de desvío de exoneraciones del CAROU (doble de los tributos exonerados más los tributos) y denuncia judicial de la DNA. Además, los directores responden personal y solidariamente. Las salidas legales son exportar más camisas, pedir la prórroga en plazo, nacionalizar con autorización o reexportar la tela con autorización del MIEM.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  {
    id: "c-p07-02",
    moduleId: "p07",
    title: "Una prórroga pedida tarde",
    difficulty: 2,
    scenario:
      "Una curtiembre tiene una AT de químicos que vence el 01/09/2026. Por un cambio de personal en el departamento de comex, nadie controló la planilla de vencimientos y la solicitud de prórroga se presentó ante el LATU el 20/06/2026. La empresa todavía tiene un saldo importante sin exportar.",
    data: [
      { label: "Vencimiento de la AT", value: "01/09/2026" },
      { label: "Fecha de la solicitud de prórroga", value: "20/06/2026" },
    ],
    steps: [
      {
        kind: "numeric",
        prompt: "¿Con cuántos días de anticipación al vencimiento se presentó la solicitud?",
        answer: 73,
        tolerance: 0,
        unit: "días",
        solution: "Del 20/06/2026 al 01/09/2026 hay 73 días (10 de junio, 31 de julio, 31 de agosto y 1 de septiembre). Le faltaron 17 días para llegar a los 90.",
      },
      {
        kind: "mcq",
        prompt: "¿Qué es lo más probable que pase con la solicitud?",
        options: [
          "Que se deniegue por presentarse fuera de los 90 días, como ya pasó en un caso de 2025",
          "Que se apruebe automáticamente porque es la primera prórroga",
          "Que se apruebe por 36 meses",
          "Que el plazo quede suspendido hasta que el LATU resuelva",
        ],
        answer: 0,
        solution:
          "El Decreto 505/009 exige pedirla al menos 90 días antes. En una resolución MIEM-MEF del 18/06/2025 se denegó una prórroga justamente por pedirla fuera de plazo, aunque había sido un error involuntario. Además, si pasan 60 días sin respuesta, la prórroga se considera denegada.",
      },
      {
        kind: "mcq",
        prompt: "Suponiendo que la prórroga se deniega, ¿qué opción NO es una salida legal para el saldo?",
        options: [
          "Exportar producto terminado antes del 01/09/2026",
          "Nacionalizar el saldo con autorización previa del MIEM y canal rojo",
          "Dejar vencer la AT y seguir usando los químicos en producción para el mercado local",
          "Reexportar los químicos en el mismo estado con autorización del MIEM",
        ],
        answer: 2,
        solution:
          "Dejar vencer la AT no la cancela: vencido el plazo hay inspección obligatoria del LATU y la DNA cobra tributos con intereses y multas (arts. 12-13), y usar los químicos para el mercado local sin nacionalizar sería un desvío. Las otras tres son formas válidas de cancelar.",
      },
      {
        kind: "open",
        prompt: "¿Qué cambio de proceso propondrías en la oficina para que esto no vuelva a pasar?",
        solution:
          "Una planilla (o sistema) de vencimientos de AT con la fecha de autorización del LATU como día cero, el vencimiento a los 18 meses, el saldo actualizado según los coeficientes aprobados y alertas automáticas bastante antes del umbral de 90 días (por ejemplo, a los 150 y a los 120 días). Con un responsable titular y un suplente, para que un cambio de personal no deje la planilla sin control.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  {
    id: "c-p08-01",
    moduleId: "p08",
    title: "TechParts: un usuario de zona franca vende a Canelones",
    difficulty: 2,
    scenario:
      "TechParts es usuario directo de Zonamerica. Importa equipos de Taiwán que llegan por el puerto de Montevideo y quiere vender un lote a una empresa de Canelones. El valor en aduana del lote es de US$ 50.000. Para el ejercicio suponé un arancel (TGA) del 10 % y que los equipos van a la tasa básica de IVA. El comprador es contribuyente de IVA.",
    data: [
      { label: "Valor en aduana del lote", value: "US$ 50.000" },
      { label: "Origen", value: "Taiwán (extra-MERCOSUR)" },
      { label: "Arancel supuesto", value: "10 %" },
      { label: "Tasa consular", value: "5 %" },
      { label: "IVA / anticipo de IVA", value: "22 % / 10 % sobre valor + arancel" },
      { label: "Tasa de servicios aduaneros", value: "0,2 % con tope de US$ 50" },
    ],
    steps: [
      {
        kind: "mcq",
        prompt: "¿TechParts pagó tributos de importación cuando los equipos entraron a Zonamerica?",
        options: [
          "Sí, todos los tributos en el puerto",
          "Solo el IVA",
          "No; el ingreso a la zona desde el exterior está exento y la mercadería llegó en tránsito",
          "Solo el arancel",
        ],
        answer: 2,
        solution:
          "Ley 15.921 art. 21 y CAROU art. 160: lo que entra a la zona franca desde el exterior no paga tributos de importación. La mercadería tiene que ir de inmediato a la zona, normalmente en tránsito desde el puerto.",
      },
      {
        kind: "mcq",
        prompt: "¿Qué es la venta a Canelones para la aduana y quién la declara?",
        options: [
          "Una importación a todos sus efectos; el comprador de Canelones, con su despachante, numera el DUA de importación",
          "Una exportación de TechParts",
          "Una venta interna sin trámite aduanero",
          "Un tránsito entre zonas francas",
        ],
        answer: 0,
        solution:
          "Ley 15.921 art. 22 y CAROU art. 164: lo que sale de zona franca al territorio no franco es importación. El importador es el comprador; la factura de TechParts no lleva IVA.",
      },
      {
        kind: "numeric",
        prompt: "¿Cuánto es el IVA de importación?",
        answer: 12100,
        tolerance: 1,
        unit: "US$",
        solution: "Arancel: 50.000 × 10 % = 5.000. Base del IVA: 50.000 + 5.000 = 55.000. IVA 22 %: 55.000 × 0,22 = US$ 12.100.",
      },
      {
        kind: "numeric",
        prompt: "Sumá arancel, tasa consular, IVA, anticipo de IVA y tasa de servicios aduaneros. ¿Cuánto paga en total (sin tasa de escáner ni honorarios)?",
        answer: 25150,
        tolerance: 1,
        unit: "US$",
        solution:
          "Arancel 5.000 + tasa consular (5 % de 50.000) 2.500 + IVA 12.100 + anticipo de IVA (10 % de 55.000) 5.500 + tasa de servicios aduaneros (0,2 % de 50.000 = 100, pero con tope) 50 = US$ 25.150. El IVA y su anticipo, como el comprador es contribuyente, después funcionan como crédito fiscal.",
      },
      {
        kind: "mcq",
        prompt: "TechParts quiere abrir un local en Ciudad Vieja para vender al público. ¿Puede?",
        options: [
          "Sí, si paga IVA en cada venta",
          "Sí, con autorización de la DNA",
          "Sí, porque desde la Ley 19.566 se permite todo fuera de la zona",
          "No: el comercio minorista está prohibido y las actividades comerciales sustantivas hacia el territorio no franco deben hacerse desde la zona",
        ],
        answer: 3,
        solution:
          "Ley 15.921 art. 37 (prohibición del comercio al por menor) y art. 14 (las actividades sustantivas de venta al territorio no franco no pueden hacerse fuera de la zona). La Ley 19.566 solo habilitó actividades no sustantivas fuera de la zona.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  {
    id: "c-p08-02",
    moduleId: "p08",
    title: "Mercadería MERCOSUR almacenada en Nueva Palmira",
    difficulty: 3,
    scenario:
      "Un trader guarda en la zona franca de Nueva Palmira un lote de mercadería originaria de Brasil, que llegó con su certificado de origen MERCOSUR. En la zona la fracciona en lotes más chicos, sin cambiar su clasificación NCM, y vende uno a un importador de Argentina. Al mismo tiempo, evalúa instalar en la misma zona una planta que transforme esa mercadería en otro producto para vender también a Argentina.",
    steps: [
      {
        kind: "mcq",
        prompt: "Como regla general (Decisión CMC 8/94), ¿qué paga en Argentina la mercadería que sale de una zona franca?",
        options: [
          "Arancel 0 % siempre",
          "El Arancel Externo Común (AEC) o el arancel nacional, sin preferencia intra-MERCOSUR",
          "El doble del AEC",
          "Solo la tasa consular",
        ],
        answer: 1,
        solution: "La Decisión CMC 8/94 es la regla de base: la zona franca no tiene preferencias MERCOSUR, y lo que sale de ella hacia otro Estado Parte paga AEC o arancel nacional.",
      },
      {
        kind: "mcq",
        prompt: "¿Puede el lote fraccionado conservar la preferencia MERCOSUR al entrar a Argentina?",
        options: [
          "No, nunca",
          "Solo si se paga el AEC primero y luego se pide devolución",
          "Sí, por la Decisión CMC 33/15 (vigente desde el 21/07/2019): es originaria, solo estuvo almacenada y el fraccionamiento no cambió origen ni clasificación; se usa un certificado de origen derivado",
          "Sí, pero solo si la zona franca es estatal",
        ],
        answer: 2,
        solution:
          "La Decisión CMC 33/15 creó la excepción para mercadería originaria solo almacenada, con operaciones como conservación o fraccionamiento en lotes que no cambian origen ni clasificación. En Uruguay el certificado derivado lo emite o gestiona la DNA.",
      },
      {
        kind: "mcq",
        prompt: "Con el Régimen de Origen MERCOSUR vigente desde el 18/07/2024, ¿qué pasa con la validez del certificado original mientras la mercadería está en la zona franca?",
        options: [
          "Vence a los 180 días igual",
          "Se suspende, con un máximo de 5 años",
          "Se renueva automáticamente cada año",
          "Queda anulado al entrar a la zona",
        ],
        answer: 1,
        solution: "El certificado vale 12 meses desde su emisión y ese plazo se suspende mientras la mercadería está en un régimen suspensivo o en zona franca, con un máximo de 5 años.",
      },
      {
        kind: "mcq",
        prompt: "¿Y el producto que fabricaría la planta en la zona franca a partir de esa mercadería?",
        options: [
          "Conserva la preferencia porque los insumos eran brasileños",
          "Tiene preferencia doble",
          "Entra a Argentina sin ningún arancel por ser producto uruguayo",
          "No tiene preferencia: lo producido o transformado en zona franca paga el AEC (Decisión CMC 8/94)",
        ],
        answer: 3,
        solution: "La excepción de la 33/15 solo cubre mercadería almacenada sin transformación. Lo producido en zona franca vuelve a la regla de la 8/94 y paga el AEC.",
      },
      {
        kind: "open",
        prompt: "¿Qué le recomendarías confirmar con la DNA antes de cerrar la primera operación?",
        solution:
          "La reglamentación nacional vigente de los certificados de origen derivados (procedimiento, plazos y documentación que pide la DNA) y, si se trabajara con mercadería de terceros países con acuerdo con el MERCOSUR, el estado de las listas que permiten aplicar la excepción. La investigación no pudo confirmar esos puntos, así que no hay que darlos por seguros.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  {
    id: "c-p08-03",
    moduleId: "p08",
    title: "¿Contrabando, diferencia o defraudación?",
    difficulty: 3,
    scenario:
      "En una semana de trabajo en un despachante aparecen cuatro situaciones distintas. Tu jefe te pide clasificar cada una según las infracciones del CAROU (art. 199) y estimar las multas de las dos más graves. Para los cálculos, los tributos son datos del caso.",
    data: [
      { label: "Situación A", value: "Camión que entra por un paso no habilitado con mercadería en un doble fondo, sin documentación" },
      { label: "Situación B", value: "En canal rojo, antes del libramiento, el vista detecta una NCM con arancel menor al que corresponde" },
      { label: "Situación C", value: "Una auditoría posterior descubre que la factura declarada tenía un valor menor al real" },
      { label: "Situación D", value: "Falta un documento formal en una carpeta, sin perjuicio fiscal" },
    ],
    steps: [
      {
        kind: "mcq",
        prompt: "¿Cómo se clasifica la situación A?",
        options: ["Contravención", "Diferencia", "Defraudación de valor", "Contrabando"],
        answer: 3,
        solution: "Ingreso clandestino, oculto y sin documentación: contrabando (CAROU arts. 209-210). El ocultamiento y el ingreso sin documentación están entre las presunciones de contrabando.",
      },
      {
        kind: "mcq",
        prompt: "¿Y la situación B?",
        options: ["Diferencia", "Contrabando", "Abandono infraccional", "Desvío de exoneraciones"],
        answer: 0,
        solution: "Se detectó en el control previo al libramiento que, de seguir lo declarado, el Fisco perdería renta: diferencia (CAROU art. 201). En esta figura no se admite la buena fe como excusa.",
      },
      {
        kind: "mcq",
        prompt: "¿Y la situación D?",
        options: ["Defraudación", "Contravención, multa de 400 a 4.000 UI", "Contrabando", "Diferencia"],
        answer: 1,
        solution: "Incumplimiento de una obligación formal sin otra infracción: contravención (CAROU art. 200).",
      },
      {
        kind: "numeric",
        prompt: "Situación C: la subvaluación hizo perder US$ 7.000 de tributos. Como defraudación de valor, ¿cuál es la multa (sin contar los tributos)?",
        answer: 14000,
        tolerance: 0,
        unit: "US$",
        solution: "CAROU art. 205: multa del doble de los tributos: 7.000 × 2 = US$ 14.000, más los US$ 7.000 de tributos.",
      },
      {
        kind: "numeric",
        prompt: "Si se demostrara que la subvaluación fue culposa (sin intención), ¿hasta cuánto podría bajar esa multa?",
        answer: 7000,
        tolerance: 0,
        unit: "US$",
        solution: "Art. 213: en la defraudación culposa la multa puede reducirse hasta un 50 %: 14.000 × 50 % = US$ 7.000.",
      },
      {
        kind: "numeric",
        prompt: "Situación A: la mercadería tiene un valor en aduana de US$ 30.000 y tributos de US$ 12.000. ¿Cuánto suman el doble de los tributos y la multa del 20 % del valor en aduana?",
        answer: 30000,
        tolerance: 0,
        unit: "US$",
        solution: "Doble de los tributos: 12.000 × 2 = 24.000. Multa del 20 %: 30.000 × 0,20 = 6.000. Total: US$ 30.000, además del comiso de la mercadería, las costas y, en ciertos casos, el comiso del vehículo. Puede además configurarse el delito de contrabando (art. 258).",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  {
    id: "c-p09-01",
    moduleId: "p09",
    title: "Mieles del Este recupera su IVA",
    difficulty: 1,
    scenario:
      "Mieles del Este exporta miel fraccionada a Alemania por US$ 200.000 FOB. En el mes pagó $ 1.100.000 de IVA en frascos, etiquetas, fletes internos y servicios. Está al día con DGI y BPS y tiene sus DUA de exportación cumplidos.",
    data: [
      { label: "Exportación", value: "US$ 200.000 FOB" },
      { label: "IVA compras del mes", value: "$ 1.100.000" },
    ],
    steps: [
      {
        kind: "mcq",
        prompt: "¿La factura de exportación lleva IVA?",
        options: [
          "Sí, 22 %",
          "Sí, 10 %",
          "No; es una e-factura de exportación sin IVA",
          "Solo si el cliente es de la Unión Europea",
        ],
        answer: 2,
        solution: "La exportación de bienes no lleva IVA.",
      },
      {
        kind: "numeric",
        prompt: "¿Cuánto IVA ventas declara Mieles del Este por esa exportación?",
        answer: 0,
        tolerance: 0,
        unit: "$",
        solution: "Cero: no hay IVA en la venta al exterior. Por eso el IVA compras no tiene contra qué compensarse.",
      },
      {
        kind: "numeric",
        prompt: "¿Qué crédito fiscal le queda a favor por el mes?",
        answer: 1100000,
        tolerance: 0,
        unit: "$",
        solution: "Deduce todo el IVA de compras que integra el costo de lo exportado (Dec. 220/998 art. 129): $ 1.100.000 de crédito.",
      },
      {
        kind: "mcq",
        prompt: "¿Cómo hace para usar ese crédito?",
        options: [
          "Lo cobra en efectivo en el BROU al embarcar",
          "Pide a la DGI certificados de crédito para pagar otros tributos (DGI y, en ciertos casos, BPS) o cederlos a otro contribuyente",
          "Se lo descuenta al cliente alemán",
          "No lo puede usar",
        ],
        answer: 1,
        solution: "La DGI autoriza el uso del crédito mediante certificados de crédito. El formulario exacto para exportadores conviene confirmarlo con el contador (la investigación menciona el 2/218, sin confirmar que sea el que corresponde).",
      },
      {
        kind: "open",
        prompt: "El proveedor de frascos pregunta si él también puede pedir la devolución del IVA porque “sus frascos se exportan”. ¿Qué le contestás?",
        solution: "Que no: la recuperación del IVA corresponde solo al exportador directo. Las etapas anteriores de la cadena facturan con IVA normalmente; es el exportador quien deduce ese IVA y lo recupera.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  {
    id: "c-p09-02",
    moduleId: "p09",
    title: "Autopartes: cuándo se cobra la devolución de tributos",
    difficulty: 2,
    scenario:
      "Una industria uruguaya exporta autopartes de la posición 8708.95.29.00 a México por US$ 150.000 FOB. El embarque sale el 20/08/2026. Esa posición fue incorporada al Anexo II del Decreto 48/022 con una tasa del 6 % por un decreto del MEF del 26/06/2026. Suponé que el tipo de cambio interbancario comprador del día anterior al embarque es de $ 40 por dólar. Tomá la base FOB como referencia.",
    data: [
      { label: "Valor exportado", value: "US$ 150.000 FOB" },
      { label: "Tasa de devolución", value: "6 % (Anexo II)" },
      { label: "Embarque", value: "20/08/2026" },
      { label: "Tipo de cambio supuesto", value: "$ 40" },
    ],
    steps: [
      {
        kind: "numeric",
        prompt: "¿Cuánto es la devolución en dólares?",
        answer: 9000,
        tolerance: 0,
        unit: "US$",
        solution: "150.000 × 6 % = US$ 9.000. (La base FOB es la histórica del Dec. 558/994; conviene confirmar que siga siéndolo en el Dec. 48/022.)",
      },
      {
        kind: "numeric",
        prompt: "¿Cuánto es el crédito en pesos?",
        answer: 360000,
        tolerance: 0,
        unit: "$",
        solution: "9.000 × 40 = $ 360.000, usando el tipo de cambio interbancario comprador del día anterior al embarque.",
      },
      {
        kind: "mcq",
        prompt: "¿Desde qué fecha es exigible el crédito?",
        options: ["20/08/2026", "01/12/2026", "01/01/2027", "20/01/2027"],
        answer: 2,
        solution: "Es exigible el primer día del quinto mes posterior al embarque (Dec. 435/002). Después de agosto: septiembre (1), octubre (2), noviembre (3), diciembre (4), enero (5). Fecha: 01/01/2027.",
      },
      {
        kind: "mcq",
        prompt: "La empresa necesita la plata en septiembre. ¿Qué puede hacer?",
        options: [
          "Endosar el certificado a un banco o cooperativa de intermediación financiera",
          "Endosarlo a su proveedor de acero",
          "Pedirle a la DNA que adelante la fecha",
          "Nada, tiene que esperar",
        ],
        answer: 0,
        solution: "Solo el beneficiario puede endosar el certificado, y solo a bancos o cooperativas de intermediación financiera. Así obtiene liquidez antes, con el costo financiero que le cobre el banco.",
      },
      {
        kind: "mcq",
        prompt: "Si esa misma venta se hubiera hecho a un usuario de zona franca uruguaya, ¿cuándo correspondería la devolución?",
        options: [
          "Igual, desde el embarque a la zona",
          "Nunca",
          "Al día siguiente de entrar a la zona",
          "Recién cuando se compruebe la salida de la mercadería al exterior",
        ],
        answer: 3,
        solution: "CAROU art. 163: el envío a zona franca es exportación, pero los beneficios se otorgan recién al comprobar la salida hacia otro país.",
      },
      {
        kind: "open",
        prompt: "¿Qué dato de vigencia controlarías para un embarque previsto en junio de 2027?",
        solution: "Que el Anexo II del Decreto 48/022 está prorrogado por el Decreto 120/026 solo hasta el 31/05/2027. Para un embarque de junio de 2027 habría que verificar si se aprobó una nueva prórroga; si no, la posición no tendría la tasa transitoria.",
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  {
    id: "c-p09-03",
    moduleId: "p09",
    title: "La rotativa que va a Alemania y el molde que viene de Argentina",
    difficulty: 2,
    scenario:
      "Una imprenta de Montevideo manda una rotativa a Alemania para que el fabricante la repare por garantía; vuelve 4 meses después. Al mismo tiempo, un cliente argentino le manda a la imprenta un molde para que lo use durante 6 meses en una producción y después se lo devuelva.",
    steps: [
      {
        kind: "mcq",
        prompt: "¿Bajo qué régimen sale la rotativa?",
        options: [
          "Exportación definitiva",
          "Exportación temporaria para perfeccionamiento pasivo (CAROU arts. 114-117)",
          "Admisión temporaria industrial",
          "Draw back",
        ],
        answer: 1,
        solution: "Es mercadería nacional que sale para repararse en el exterior y volver: exportación temporaria para perfeccionamiento pasivo. Si solo se la revisara sin transformarla, podría ir en exportación temporaria en el mismo estado.",
      },
      {
        kind: "mcq",
        prompt: "¿Cómo se cancela esa exportación temporaria?",
        options: [
          "Con la reimportación en plazo o pasando a exportación definitiva",
          "Con un aviso de cancelación del LATU",
          "Con el pago de una detracción",
          "No necesita cancelarse",
        ],
        answer: 0,
        solution: "La exportación temporaria se cancela con la reimportación o pasando a exportación definitiva (CAROU arts. 112 y 117). En el DUA, la reimportación con reparación en el exterior lleva el código de régimen 31.",
      },
      {
        kind: "mcq",
        prompt: "Si el molde argentino se usa solo temporalmente, sin transformarse y sin ligarse a una producción exportable, ¿qué régimen corresponde?",
        options: [
          "Importación definitiva",
          "Zona franca",
          "AT de régimen general (CAROU art. 81), tramitada por VUCE ante la APC del MEF",
          "Tránsito aduanero",
        ],
        answer: 2,
        solution: "Entra con un fin y un plazo determinados y sale en el mismo estado: AT para reexportación en el mismo estado, que se tramita en línea por VUCE ante la Asesoría de Política Comercial del MEF.",
      },
      {
        kind: "open",
        prompt: "¿Y si el molde se usara para fabricar productos que la imprenta exporta?",
        solution: "Podría ir por la AT industrial de la Ley 18.184 y el Dec. 505/009: los moldes están expresamente admitidos (art. 2) y pueden reexportarse sin la autorización especial que se exige para otros bienes (art. 10). En ese caso la solicitud va al LATU.",
      },
    ],
  },
]
