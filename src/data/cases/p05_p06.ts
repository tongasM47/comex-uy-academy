import type { CaseStudy } from '../types'

// Casos prácticos de los módulos 5 y 6.
// Base: docs/research/02_importacion_calculo_dua.md (secuencia, DUA, tributos, RGI) y 05 (demoras).
// Todas las cuentas se verificaron con computeImport (src/data/calc.ts), que reproduce los ejemplos de
// la investigación. Supuestos comunes: US$ 1 = $ 40 (ilustrativo); UI de octubre de 2026 = $ 6,65,
// por lo que 85 UI ≈ US$ 14,13; tasas vigentes a octubre de 2026; TSE según la escala de 2018 [a verificar];
// cada renglón redondeado a centavos.

const SUPUESTOS = { label: "Supuestos", value: "US$ 1 = $ 40; escáner 85 UI ≈ US$ 14,13; TSE escala 2018 (a verificar); tasas a octubre de 2026" }

export const p05p06Cases: CaseStudy[] = [
  // ---------------------------------------------------------------------------
  {
    id: "c-p06-01",
    moduleId: "p06",
    title: "Vajilla desde Buenos Aires con certificado de origen",
    difficulty: 2,
    scenario:
      "Un importador de Montevideo, contribuyente de IVA e IRAE, compra vajilla de vidrio fabricada en Argentina. Viaja en camión con CRT y MIC/DTA. El proveedor emite certificado de origen MERCOSUR válido, así que el despachante declara el código de acuerdo 310 (ACE 18). La TGA extrazona de la NCM sería 14%. Calculá la liquidación completa del DUA.",
    data: [
      { label: "FOB", value: "US$ 14.000" },
      { label: "Flete terrestre", value: "US$ 900" },
      { label: "Seguro (póliza)", value: "US$ 70" },
      { label: "Origen", value: "Argentina, con certificado ACE 18" },
      { label: "TGA extrazona", value: "14%" },
      { label: "IVA", value: "Tasa básica 22%; bien del Anexo de IRAE" },
      SUPUESTOS,
    ],
    steps: [
      { kind: "numeric", prompt: "¿Cuál es el valor en aduana (CIF)?", answer: 14970, tolerance: 0.5, unit: "US$", solution: "CIF = FOB + flete + seguro = 14.000 + 900 + 70 = US$ 14.970. Hay póliza, así que no se usa el seguro ficto." },
      { kind: "mcq", prompt: "¿Qué TGA y qué Tasa Consular corresponden?", options: ["TGA 14% y Tasa Consular 5%", "TGA 0% y Tasa Consular 3%", "TGA 0% y Tasa Consular 0%", "TGA 14% y Tasa Consular 3%"], answer: 1, solution: "Con prueba de origen ACE 18 (código 310), la TGA es 0% y la Tasa Consular 3% (Ley 19.535 art. 265). La TGA del 14% solo aplicaría sin certificado válido." },
      { kind: "numeric", prompt: "¿Cuánto es la Tasa Consular?", answer: 449.1, tolerance: 0.02, unit: "US$", solution: "14.970 × 3% = US$ 449,10." },
      { kind: "numeric", prompt: "¿Cuánto es la TSA (0,2% con tope de US$ 50)?", answer: 29.94, tolerance: 0.02, unit: "US$", solution: "14.970 × 0,2% = 29,94, menor que el tope de 50." },
      { kind: "numeric", prompt: "¿Cuánto es el IVA al 22%?", answer: 3293.4, tolerance: 0.02, unit: "US$", solution: "Base interna = VA + TGA = 14.970 + 0 = 14.970. IVA = 14.970 × 22% = US$ 3.293,40. La Tasa Consular no integra la base." },
      { kind: "numeric", prompt: "¿Cuál es el total a pagar en el DUA? (TSE del tramo 8.001–30.000 = US$ 108)", answer: 5990.37, tolerance: 0.05, unit: "US$", solution: "TC 449,10 + TSA 29,94 + TSE 108 + escáner 14,13 + IVA 3.293,40 + anticipo IVA 10% 1.497 + anticipo IRAE 4% 598,80 = US$ 5.990,37." },
      { kind: "numeric", prompt: "¿Cuánto de ese total es costo no recuperable?", answer: 601.17, tolerance: 0.05, unit: "US$", solution: "Tasa Consular 449,10 + TSA 29,94 + TSE 108 + escáner 14,13 = US$ 601,17 (≈ 4% del CIF). El IVA y los anticipos (5.389,20) son crédito para un contribuyente." },
    ],
  },

  // ---------------------------------------------------------------------------
  {
    id: "c-p06-02",
    moduleId: "p06",
    title: "Contenedor de electrodomésticos chicos desde China, sin póliza",
    difficulty: 2,
    scenario:
      "Una empresa contribuyente importa desde Shenzhen un contenedor de pequeños electrodomésticos. Compró FOB y no contrató seguro. El despachante confirmó una TGA del 16% para la NCM (dato ilustrativo). El bien está en el Anexo del anticipo de IRAE. Calculá la liquidación.",
    data: [
      { label: "FOB Shenzhen", value: "US$ 18.000" },
      { label: "Flete marítimo", value: "US$ 2.200" },
      { label: "Seguro", value: "No hay póliza" },
      { label: "TGA", value: "16% (ilustrativa)" },
      { label: "Origen", value: "China (extrazona)" },
      SUPUESTOS,
    ],
    steps: [
      { kind: "numeric", prompt: "¿Cuánto es el seguro ficto?", answer: 180, tolerance: 0.01, unit: "US$", solution: "1% del FOB: 18.000 × 1% = US$ 180. No se calcula sobre el CFR (que daría 202)." },
      { kind: "numeric", prompt: "¿Cuál es el valor en aduana?", answer: 20380, tolerance: 0.5, unit: "US$", solution: "18.000 + 2.200 + 180 = US$ 20.380." },
      { kind: "numeric", prompt: "¿Cuánto es la TGA?", answer: 3260.8, tolerance: 0.02, unit: "US$", solution: "20.380 × 16% = US$ 3.260,80." },
      { kind: "numeric", prompt: "¿Cuál es la base interna (base del IVA y los anticipos)?", answer: 23640.8, tolerance: 0.02, unit: "US$", solution: "VA + TGA = 20.380 + 3.260,80 = US$ 23.640,80." },
      { kind: "numeric", prompt: "¿Cuál es el total del DUA? (TSE US$ 108)", answer: 12953.38, tolerance: 0.05, unit: "US$", solution: "TGA 3.260,80 + TC 5% 1.019 + TSA 40,76 + TSE 108 + escáner 14,13 + IVA 5.200,98 + anticipo IVA 2.364,08 + anticipo IRAE 945,63 = US$ 12.953,38." },
      { kind: "numeric", prompt: "¿Cuánto es el costo no recuperable?", answer: 4442.69, tolerance: 0.05, unit: "US$", solution: "3.260,80 + 1.019 + 40,76 + 108 + 14,13 = US$ 4.442,69 (≈ 21,8% del CIF)." },
      { kind: "open", prompt: "El cliente pregunta por qué el seguro aparece en la liquidación si él no lo contrató. ¿Qué le contestás?", solution: "Que Uruguay valora en base CIF y, cuando no se declara póliza, la DNA suma un seguro ficto del 1% del FOB. No es un seguro que lo cubra: es solo un valor para calcular tributos. Si quiere estar cubierto ante un siniestro, conviene contratar una póliza, y entonces se declara su costo real." },
    ],
  },

  // ---------------------------------------------------------------------------
  {
    id: "c-p06-03",
    moduleId: "p06",
    title: "Perfumes desde Miami: IMESI para un distribuidor",
    difficulty: 3,
    scenario:
      "Un distribuidor de perfumería, contribuyente de IVA, IRAE e IMESI, importa perfumes desde Miami por vía aérea. Los productos tienen registro en el MSP gestionado por la VUCE. TGA ilustrativa del 18% e IMESI de cosmética y perfumería al 10% (tasa fijada por decreto, a verificar). Calculá la liquidación.",
    data: [
      { label: "FOB Miami", value: "US$ 9.000" },
      { label: "Flete aéreo", value: "US$ 650" },
      { label: "Seguro (póliza)", value: "US$ 90" },
      { label: "TGA", value: "18% (ilustrativa)" },
      { label: "IMESI", value: "10% (numeral 8, a verificar)" },
      SUPUESTOS,
    ],
    steps: [
      { kind: "numeric", prompt: "¿Cuál es la base interna?", answer: 11493.2, tolerance: 0.02, unit: "US$", solution: "VA = 9.000 + 650 + 90 = 9.740. TGA = 9.740 × 18% = 1.753,20. Base = 9.740 + 1.753,20 = US$ 11.493,20." },
      { kind: "numeric", prompt: "¿Cuánto es el anticipo de IMESI?", answer: 1149.32, tolerance: 0.02, unit: "US$", solution: "11.493,20 × 10% = US$ 1.149,32. Como el importador es contribuyente de IMESI, es un anticipo (Dec. 335/996 art. 4) que descuenta del IMESI de sus ventas." },
      { kind: "numeric", prompt: "¿Cuál es el total del DUA? (TSE US$ 108)", answer: 7668.68, tolerance: 0.05, unit: "US$", solution: "TGA 1.753,20 + TC 487 + TSA 19,48 + TSE 108 + escáner 14,13 + anticipo IMESI 1.149,32 + IVA 2.528,50 + anticipo IVA 1.149,32 + anticipo IRAE 459,73 = US$ 7.668,68." },
      { kind: "numeric", prompt: "¿Cuánto es el costo no recuperable?", answer: 2381.81, tolerance: 0.05, unit: "US$", solution: "TGA 1.753,20 + TC 487 + TSA 19,48 + TSE 108 + escáner 14,13 = US$ 2.381,81. El anticipo de IMESI, el IVA y los anticipos de IVA e IRAE se recuperan." },
      { kind: "mcq", prompt: "¿Qué control previo necesita esta importación?", options: ["Ninguno", "Certificado de origen MERCOSUR", "Registro del producto en el MSP vía VUCE", "Control del LATU con precio del 0,5%"], answer: 2, solution: "Los cosméticos y perfumes requieren registro previo del producto en el MSP, que se tramita en la VUCE y se vincula electrónicamente al DUA. El precio LATU es para alimentos controlados." },
    ],
  },

  // ---------------------------------------------------------------------------
  {
    id: "c-p06-04",
    moduleId: "p06",
    title: "Una persona física importa cosméticos por la vía formal",
    difficulty: 3,
    scenario:
      "Lucía, que no es contribuyente de IVA ni de IMESI, quiere traer cosméticos para uso propio y de su familia. Como son bienes gravados por IMESI, no puede usar la prestación única del régimen de compras por internet, así que importa por la vía formal con despachante. Compró FOB y no hay póliza. TGA ilustrativa del 18% e IMESI del 10% (a verificar).",
    data: [
      { label: "FOB", value: "US$ 1.800" },
      { label: "Flete", value: "US$ 150" },
      { label: "Seguro", value: "No hay póliza" },
      { label: "TGA", value: "18% (ilustrativa)" },
      { label: "IMESI", value: "10% (a verificar)" },
      { label: "Importadora", value: "Persona física, no contribuyente" },
      SUPUESTOS,
    ],
    steps: [
      { kind: "numeric", prompt: "¿Cuál es el valor en aduana?", answer: 1968, tolerance: 0.5, unit: "US$", solution: "Seguro ficto = 1% × 1.800 = 18. VA = 1.800 + 150 + 18 = US$ 1.968." },
      { kind: "numeric", prompt: "¿Cuál es la base para el IVA y el IMESI?", answer: 3483.36, tolerance: 0.02, unit: "US$", solution: "TGA = 1.968 × 18% = 354,24. Como es no contribuyente, la base se incrementa 50%: (1.968 + 354,24) × 1,5 = US$ 3.483,36." },
      { kind: "numeric", prompt: "¿Cuánto paga de IVA?", answer: 766.34, tolerance: 0.02, unit: "US$", solution: "3.483,36 × 22% = US$ 766,34. Para ella es costo definitivo, sin anticipos." },
      { kind: "numeric", prompt: "¿Cuál es el total del DUA? (TSE del tramo 1.000–2.000 = US$ 30)", answer: 1615.39, tolerance: 0.05, unit: "US$", solution: "TGA 354,24 + TC 5% 98,40 + TSA 3,94 + TSE 30 + escáner 14,13 + IMESI 348,34 + IVA 766,34 = US$ 1.615,39, el 82% del valor en aduana. Todo es costo. A eso se suman los honorarios del despachante." },
      { kind: "mcq", prompt: "¿Por qué no hay anticipo de IVA ni de IRAE?", options: ["Porque el valor es bajo", "Porque los cosméticos están exentos", "Porque viene de EE. UU.", "Porque la importadora no es contribuyente: paga el IVA completo y definitivo"], answer: 3, solution: "Para un no contribuyente, el IVA se paga completo sobre la base incrementada y no hay anticipos (Dec. 220/998; TO DGI Título 10 art. 13). El IMESI también es definitivo." },
    ],
  },

  // ---------------------------------------------------------------------------
  {
    id: "c-p06-05",
    moduleId: "p06",
    title: "Galletitas desde Brasil: IVA mínimo y control del LATU",
    difficulty: 2,
    scenario:
      "Un mayorista contribuyente importa galletitas de origen brasileño con declaración de origen ACE 18. El producto está gravado a la tasa mínima de IVA, sujeto a control del LATU y no figura en el Anexo del anticipo de IRAE.",
    data: [
      { label: "FOB", value: "US$ 7.500" },
      { label: "Flete", value: "US$ 420" },
      { label: "Seguro (póliza)", value: "US$ 40" },
      { label: "Origen", value: "Brasil, declaración de origen ACE 18" },
      { label: "IVA", value: "Tasa mínima 10%" },
      { label: "LATU", value: "Sí, alimento controlado" },
      SUPUESTOS,
    ],
    steps: [
      { kind: "numeric", prompt: "¿Cuánto es el precio LATU?", answer: 39.8, tolerance: 0.02, unit: "US$", solution: "VA = 7.500 + 420 + 40 = 7.960. LATU = 7.960 × 0,5% = US$ 39,80 (Dec. 194/022)." },
      { kind: "mcq", prompt: "¿Qué anticipo de IVA corresponde?", options: ["3% de la base", "10% de la base", "22% de la base", "No corresponde anticipo"], answer: 0, solution: "Para bienes gravados a la tasa mínima, el anticipo de IVA es del 3% (Dec. 220/998 art. 115): 7.960 × 3% = 238,80." },
      { kind: "numeric", prompt: "¿Cuál es el total del DUA? (TSE del tramo 2.000–8.000 = US$ 48)", answer: 1391.45, tolerance: 0.05, unit: "US$", solution: "TC 3% 238,80 + TSA 15,92 + TSE 48 + escáner 14,13 + LATU 39,80 + IVA 10% 796 + anticipo IVA 3% 238,80 = US$ 1.391,45." },
      { kind: "numeric", prompt: "¿Cuánto es el costo no recuperable?", answer: 356.65, tolerance: 0.05, unit: "US$", solution: "238,80 + 15,92 + 48 + 14,13 + 39,80 = US$ 356,65." },
    ],
  },

  // ---------------------------------------------------------------------------
  {
    id: "c-p06-06",
    moduleId: "p06",
    title: "El certificado de origen que no llegó",
    difficulty: 3,
    scenario:
      "Un importador trae desde Brasil maquinaria liviana de consumo de origen brasileño. El cliente asumió que “de Brasil es 0%”, pero el proveedor no emitió prueba de origen. La TGA extrazona es 16% (ilustrativa). Compará la liquidación con y sin prueba de origen para un contribuyente con anticipo de IRAE.",
    data: [
      { label: "FOB", value: "US$ 25.000" },
      { label: "Flete", value: "US$ 1.300" },
      { label: "Seguro (póliza)", value: "US$ 120" },
      { label: "TGA extrazona", value: "16% (ilustrativa)" },
      SUPUESTOS,
    ],
    steps: [
      { kind: "numeric", prompt: "¿Cuánto es la TSA? (valor en aduana US$ 26.420)", answer: 50, tolerance: 0.01, unit: "US$", solution: "26.420 × 0,2% = 52,84, que supera el tope. Se paga US$ 50." },
      { kind: "numeric", prompt: "Con prueba de origen ACE 18, ¿cuál es el costo no recuperable?", answer: 964.73, tolerance: 0.05, unit: "US$", solution: "TGA 0 + TC 3% 792,60 + TSA 50 + TSE 108 + escáner 14,13 = US$ 964,73." },
      { kind: "numeric", prompt: "Sin prueba de origen, ¿cuál es el costo no recuperable?", answer: 5720.33, tolerance: 0.05, unit: "US$", solution: "TGA 16% 4.227,20 + TC 5% 1.321 + TSA 50 + TSE 108 + escáner 14,13 = US$ 5.720,33." },
      { kind: "numeric", prompt: "¿Cuánto costo real le cuesta al cliente no tener la prueba de origen?", answer: 4755.6, tolerance: 0.05, unit: "US$", solution: "5.720,33 − 964,73 = US$ 4.755,60 (4.227,20 de TGA + 528,40 de diferencia de Tasa Consular). Además el DUA es US$ 6.277,39 más caro, porque IVA y anticipos crecen con la TGA, aunque esa parte es recuperable." },
      { kind: "open", prompt: "¿Qué le recomendás al cliente para las próximas compras?", solution: "Pedir al proveedor, antes de embarcar, el certificado de origen MERCOSUR, el COD o la declaración de origen en el formato de la RG 06/2025, y que el despachante lo revise antes del arribo. Verificar que la mercadería sea realmente originaria (régimen de origen, no solo que venga de Brasil) y que no sea azúcar ni automotor. En el DUA, declarar el código 310 en la casilla 61 solo con la prueba en regla." },
    ],
  },

  // ---------------------------------------------------------------------------
  {
    id: "c-p06-07",
    moduleId: "p06",
    title: "Compra EXW en China y costo unitario puesto en depósito",
    difficulty: 3,
    scenario:
      "Un importador contribuyente compra 12.000 unidades de un artículo de bazar EXW fábrica en China. Paga aparte el traslado a puerto y la carga, y el flete marítimo. No contrata seguro. TGA ilustrativa del 14%, bien del Anexo del anticipo de IRAE. El cliente quiere saber el costo por unidad para fijar su precio (lo que algunos docentes llaman “amortizar” los gastos en las unidades).",
    data: [
      { label: "Precio EXW", value: "US$ 26.600" },
      { label: "Traslado y carga en origen", value: "US$ 1.200" },
      { label: "Flete marítimo", value: "US$ 2.100" },
      { label: "Seguro", value: "No hay póliza" },
      { label: "Unidades", value: "12.000" },
      { label: "Honorarios del despachante", value: "1% del CIF + IVA (orientativo, a verificar)" },
      SUPUESTOS,
    ],
    steps: [
      { kind: "numeric", prompt: "¿Cuál es el valor FOB?", answer: 27800, tolerance: 0.5, unit: "US$", solution: "EXW + traslado y carga en origen = 26.600 + 1.200 = US$ 27.800." },
      { kind: "numeric", prompt: "¿Cuál es el valor en aduana?", answer: 30178, tolerance: 0.5, unit: "US$", solution: "Seguro ficto = 1% × 27.800 = 278. CIF = 27.800 + 2.100 + 278 = US$ 30.178." },
      { kind: "mcq", prompt: "¿Qué TSE corresponde según la escala de 2018?", options: ["US$ 108", "US$ 48", "US$ 240", "US$ 600"], answer: 2, solution: "El CIF supera los US$ 30.000, así que cae en el tramo 30.000–100.000: US$ 240 (monto a verificar en LUCIA)." },
      { kind: "numeric", prompt: "¿Cuál es el total del DUA?", answer: 18423, tolerance: 0.05, unit: "US$", solution: "TGA 4.224,92 + TC 1.508,90 + TSA 50 (tope) + TSE 240 + escáner 14,13 + IVA 7.568,64 + anticipo IVA 3.440,29 + anticipo IRAE 1.376,12 = US$ 18.423,00." },
      { kind: "numeric", prompt: "¿Cuál es el costo real (CIF + tributos no recuperables), sin honorarios?", answer: 36215.95, tolerance: 0.05, unit: "US$", solution: "No recuperable = 4.224,92 + 1.508,90 + 50 + 240 + 14,13 = 6.037,95. Costo real = 30.178 + 6.037,95 = US$ 36.215,95." },
      { kind: "numeric", prompt: "Sumando los honorarios del despachante sin IVA (1% del CIF), ¿cuál es el costo por unidad?", answer: 3.04, tolerance: 0.01, unit: "US$ por unidad", solution: "Honorarios = 1% × 30.178 = 301,78 (su IVA es recuperable). (36.215,95 + 301,78) / 12.000 = 36.517,73 / 12.000 ≈ US$ 3,04 por unidad. Faltarían todavía los gastos de terminal, ANP y flete interno, que se facturan fuera del DUA." },
    ],
  },

  // ---------------------------------------------------------------------------
  {
    id: "c-p05-01",
    moduleId: "p05",
    title: "Al contenedor le tocó canal rojo",
    difficulty: 3,
    scenario:
      "El DUA de un contenedor de vasos de vidrio desde Ningbo (CIF US$ 22.700) se transmitió con una NCM de TGA 10%. Se pagaron los tributos, se pidió canal y salió **rojo**. En la verificación, el Vista concluye que la posición correcta tiene TGA 18%. El importador es contribuyente de IVA e IRAE y el bien está en el Anexo. Mientras tanto, el contenedor sigue en la terminal de TCP.",
    data: [
      { label: "CIF", value: "US$ 22.700" },
      { label: "TGA declarada", value: "10%" },
      { label: "TGA según el Vista", value: "18%" },
      { label: "Canal", value: "Rojo" },
      SUPUESTOS,
    ],
    steps: [
      { kind: "mcq", prompt: "¿Qué implica el canal rojo?", options: ["Levante automático", "Solo revisión de documentos", "Control a posteriori en laboratorio", "Análisis documental y verificación física de la mercadería"], answer: 3, solution: "Rojo es análisis documental y verificación física. El declarante entrega un sobre auxiliar con la documentación." },
      { kind: "mcq", prompt: "¿Qué plazo tiene el despachante para presentarse a la verificación?", options: ["5 días hábiles", "30 días corridos", "8 días hábiles", "24 horas"], answer: 0, solution: "5 días hábiles. Los 30 días corridos son el plazo para pedir canal después de numerar; los 8 días hábiles son para justificar diferencias con el manifiesto." },
      { kind: "numeric", prompt: "¿Cuánta TGA adicional resulta de la reclasificación?", answer: 1816, tolerance: 0.02, unit: "US$", solution: "22.700 × (18% − 10%) = 4.086 − 2.270 = US$ 1.816." },
      { kind: "numeric", prompt: "¿Cuánto suma la liquidación complementaria completa (TGA más el aumento de IVA y anticipos)?", answer: 2469.76, tolerance: 0.05, unit: "US$", solution: "TGA +1.816; la base interna sube 1.816, así que IVA 22% +399,52, anticipo de IVA 10% +181,60 y anticipo de IRAE 4% +72,64. Total: 1.816 + 399,52 + 181,60 + 72,64 = US$ 2.469,76. Las tasas (TC, TSA, TSE, escáner) no cambian porque se calculan sobre el VA. El costo real adicional es US$ 1.816; el resto es recuperable." },
      { kind: "open", prompt: "¿Qué hacés como auxiliar del estudio y qué le explicás al cliente?", solution: "Revisar la clasificación con las RGI y las notas: si el Vista tiene razón, la diferencia se paga; si hay argumentos, se responde la hoja de observaciones dentro de los 5 días hábiles. Avisar al cliente que la diferencia de tributos se suma a su costo y que, mientras no haya cumplido, corren los días libres y después la demora (demurrage) del contenedor en la terminal. Recordar que puede haber una infracción (la investigación no tiene los artículos ni montos confirmados) y que el despachante responde solidariamente por los tributos (CAROU art. 27). Para la próxima: clasificar antes de comprar y confirmar en el arancel integrado." },
    ],
  },

  // ---------------------------------------------------------------------------
  {
    id: "c-p05-02",
    moduleId: "p05",
    title: "Revisá el DUA antes de transmitir",
    difficulty: 2,
    scenario:
      "Sos auxiliar en un estudio de despachante. Un compañero armó el DUA de una importación de 850 cartones de vasos de vidrio templado de origen chino, embarcados en Ningbo. Factura FOB US$ 20.000 en dólares, flete US$ 2.500, póliza US$ 200. El B/L indica 850 cartones y 12.500 kg brutos (sin la tara del contenedor). Te pide que lo revises antes de transmitirlo.",
    data: [
      { label: "A1 Régimen", value: "10" },
      { label: "1A / 1B", value: "4 / 21000000019" },
      { label: "13 Monto de facturas", value: "20000" },
      { label: "14 Moneda", value: "USD en la factura 1 y EUR en la factura 2" },
      { label: "57A / 57B", value: "CT / 850" },
      { label: "59 Peso bruto", value: "16300,000 (incluye el contenedor)" },
      { label: "61 Código de acuerdo", value: "310" },
      { label: "72 / 73 / 74", value: "156 / 156 / 156" },
      { label: "92A Descripción", value: "Mercadería varia" },
    ],
    steps: [
      { kind: "mcq", prompt: "¿Qué está mal en la casilla 1B?", options: ["Nada", "Debería ir la cédula del despachante", "Debería ir el código del declarante", "El RUT debe tener 12 dígitos con ceros a la izquierda"], answer: 3, solution: "La 1B lleva el número de documento del importador con 12 dígitos, completando con ceros a la izquierda. Con 11 dígitos, el mensaje se rechaza." },
      { kind: "mcq", prompt: "¿Qué problema tiene la casilla 61?", options: ["310 es el ACE 18 y solo corresponde a origen MERCOSUR con prueba de origen", "Debería ir 10", "Está bien porque la casilla es opcional", "Debería ir 1117"], answer: 0, solution: "310 activa la preferencia del ACE 18. Los vasos son chinos: va el código del régimen general (a confirmar en la tabla de LUCIA). Declarar 310 sin prueba de origen MERCOSUR genera una diferencia de tributos." },
      { kind: "mcq", prompt: "¿Qué hay que corregir en la casilla 59?", options: ["Nada", "El peso bruto va sin contenedor: 12500,000", "Debe ir en toneladas", "Debe ir el peso neto"], answer: 1, solution: "La casilla 59 pide el peso bruto sin contenedor, que tiene que coincidir con el documento de carga: 12.500 kg." },
      { kind: "mcq", prompt: "¿Qué pasa con la moneda?", options: ["Se pueden declarar dos monedas si hay dos facturas", "Se declara la moneda del flete", "La moneda es única por DUA; la otra divisa se convierte a dólares con el arbitraje BCU del día hábil anterior", "Se declara en pesos"], answer: 2, solution: "La casilla 14 admite una sola moneda por DUA. Las divisas que no están en la tabla se convierten a USD con el arbitraje del BCU del día hábil anterior al registro." },
      { kind: "open", prompt: "¿Qué cambiarías en la descripción (92A) y dónde va el Incoterm?", solution: "La 92A debe ser genérica pero precisa y en español, por ejemplo “Vasos de vidrio templado 300 ml”; “mercadería varia” es motivo de observación del Vista. El Incoterm (FOB) no va en una casilla del cabezal: se declara en la factura asociada, segmento VALFAC01. El flete y el seguro integran el valor en aduana de la casilla 85 (22.700)." },
    ],
  },

  // ---------------------------------------------------------------------------
  {
    id: "c-p06-08",
    moduleId: "p06",
    title: "Clasificar con las Reglas Generales Interpretativas",
    difficulty: 2,
    scenario:
      "Un cliente quiere importar tres productos y te pide que le adelantes cómo se clasificarían antes de pedir la cotización al despachante: (1) un kit de regalo para venta al por menor con una botella de gin, dos vasos y un abridor; (2) guitarras eléctricas con su estuche rígido hecho a medida; (3) bicicletas que llegan desarmadas en cajas, con todas sus partes.",
    steps: [
      { kind: "mcq", prompt: "¿Qué regla decide la clasificación del kit de regalo?", options: ["RGI 3b: carácter esencial del surtido", "RGI 1: el título del capítulo", "RGI 5b: envases", "RGI 3c: la última partida"], answer: 0, solution: "Es un surtido para la venta al por menor, que se resuelve por la RGI 3b: el componente que le da el carácter esencial. La 3c solo se usa si ni la 3a ni la 3b resuelven." },
      { kind: "mcq", prompt: "¿Cómo se clasifica el estuche de la guitarra?", options: ["Aparte, como manufactura de plástico", "Por la RGI 4", "Como envase, por la RGI 2b", "Con la guitarra, por la RGI 5a"], answer: 3, solution: "La RGI 5a: los estuches hechos para un artículo y aptos para uso prolongado, presentados con él, se clasifican con ese artículo." },
      { kind: "mcq", prompt: "¿Y las bicicletas desarmadas?", options: ["Cada parte en su partida", "Como bicicletas completas, por la RGI 2a", "Por la RGI 6", "Como chatarra"], answer: 1, solution: "La RGI 2a: un artículo desarmado o sin montar se clasifica como el completo si tiene sus características esenciales." },
      { kind: "open", prompt: "Describí el método práctico que seguirías para llegar al código de 10 dígitos.", solution: "Entender el producto (materia, función, elaboración); ubicar sección y capítulo; leer las notas legales; elegir la partida con la RGI 1 y, si hace falta, las RGI 2 a 5; bajar a subpartida, ítem y subítem con la RGI 6 comparando solo códigos del mismo nivel; consultar las Notas Explicativas del SA, los dictámenes MERCOSUR y las clasificaciones de la DNA; y verificar en el arancel integrado de LUCIA la TGA, las MNNT, el IMESI y los anticipos. El gin, además, tiene IMESI." },
    ],
  },

  // ---------------------------------------------------------------------------
  {
    id: "c-p05-03",
    moduleId: "p05",
    title: "Del arribo al retiro: ordená la secuencia",
    difficulty: 1,
    scenario:
      "Llega a Montevideo un contenedor de un cliente nuevo que nunca importó. Te pide que le expliques qué va a pasar desde que el buque atraca hasta que el camión se lleva la mercadería, y qué plazos tiene que tener en cuenta.",
    steps: [
      { kind: "mcq", prompt: "¿Quién presenta el manifiesto cuando llega el buque?", options: ["El despachante", "El importador", "El agente de transporte (agencia marítima)", "La terminal"], answer: 2, solution: "El agente de transporte presenta la declaración de llegada o manifiesto (DAL), que queda registrada en LUCIA." },
      { kind: "mcq", prompt: "Después de numerado el DUA, ¿cuál es el orden correcto?", options: ["Canal → pago → cumplido → retiro", "Pago de tributos → canal → verificación si corresponde → cumplido → retiro", "Cumplido → pago → canal → retiro", "Retiro → pago → canal"], answer: 1, solution: "Se pagan los tributos en un solo acto, se pide canal, se verifica si toca naranja o rojo, la DNA registra el cumplido y recién entonces se retira con la vía 4, previo pago de terminal y ANP y libre deuda de la agencia marítima." },
      { kind: "numeric", prompt: "¿Cuántos días corridos hay para pedir canal desde la numeración antes de que el DUA venza?", answer: 30, tolerance: 0, unit: "días corridos", solution: "30 días corridos." },
      { kind: "open", prompt: "El cliente pregunta: “Si ya tengo el cumplido, ¿por qué no me dejan sacar el contenedor?”. ¿Qué le contestás?", solution: "Porque el cumplido es la autorización aduanera (libramiento), pero la salida física de la terminal exige además pagar los servicios de la terminal y los proventos de la ANP, y que la agencia marítima libere el contenedor (libre deuda o entrega del B/L). Con eso y la vía 4 del DUA, el transportista retira. Mientras tanto corren los días libres de la naviera." },
    ],
  },
]
