import type { CaseStudy } from '../types'

// Casos prácticos de los módulos 1 a 4. Cifras verificadas con node.
// Base: docs/research/01, 02 (valor en aduana, tasa consular), 04 (giro) y 05 (logística).

export const p01p04Cases: CaseStudy[] = [
  {
    id: "c-p02-01",
    moduleId: "p02",
    title: "Un importador de Montevideo compra un contenedor en China",
    difficulty: 2,
    scenario:
      "Bazar del Sur S.A., de Montevideo, va a importar un contenedor de 40′ de artículos de bazar desde Ningbo, China. Tiene un forwarder de confianza con buena tarifa marítima. El proveedor chino le mandó una pro-forma que dice “FOB” a secas. El dueño te pide que revises la condición de compra y le digas cuánto va a ser el valor en aduana.",
    data: [
      { label: "Mercadería", value: "Artículos de bazar en contenedor de 40′" },
      { label: "Precio de la mercadería", value: "US$ 18.000" },
      { label: "Flete marítimo Ningbo – Montevideo (cotización del forwarder)", value: "US$ 2.200" },
      { label: "Seguro", value: "No contrató póliza" },
      { label: "Origen", value: "China (sin acuerdo preferencial)" },
    ],
    steps: [
      {
        kind: "mcq",
        prompt: "¿Qué Incoterm le recomendás pactar, sabiendo que el importador controla el flete y la carga va en contenedor?",
        options: [
          "FOB Ningbo, Incoterms® 2020",
          "FCA terminal o depósito de Ningbo, Incoterms® 2020",
          "CIF Montevideo, Incoterms® 2020",
          "EXW fábrica del proveedor, Incoterms® 2020",
        ],
        answer: 1,
        solution:
          "Si el comprador controla el flete, conviene una regla F. Pero como es un contenedor, FCA es la correcta: el riesgo pasa cuando el contenedor se entrega en la terminal, que es cuando el vendedor pierde el control físico. FOB dejaría al vendedor con un riesgo que no controla; EXW obligaría al importador a hacer la exportación en China; CIF le quitaría el control del flete.",
      },
      {
        kind: "open",
        prompt: "¿Qué le falta a la pro-forma en cuanto a la condición de entrega? Redactá cómo debería quedar.",
        solution:
          "Le falta el lugar convenido y la versión de los Incoterms. Debería quedar, por ejemplo: “FCA [nombre y dirección de la terminal o depósito], Ningbo, China, Incoterms® 2020”. Un Incoterm sin lugar no dice dónde se entrega, y sin versión puede discutirse qué edición rige.",
      },
      {
        kind: "numeric",
        prompt: "Sin póliza de seguro, la DNA aplica un seguro ficto del 1 % del FOB. ¿Cuál es el valor en aduana (CIF) en dólares?",
        answer: 20380,
        tolerance: 0.5,
        unit: "US$",
        solution:
          "Seguro ficto: 18.000 × 1 % = 180. CIF = 18.000 + 2.200 + 180 = US$ 20.380. Sobre ese valor se calculan la TGA y la tasa consular, y después el IVA y los anticipos.",
      },
      {
        kind: "mcq",
        prompt: "Si en vez de FCA el importador hubiera comprado CFR Montevideo, ¿qué tendría que agregar el despachante al precio para llegar al valor en aduana?",
        options: ["Flete y seguro", "Nada, CFR ya es CIF", "Solo el seguro", "La descarga en Montevideo"],
        answer: 2,
        solution:
          "En CFR el flete hasta destino ya está en el precio. Para llegar al CIF solo falta el seguro (o el seguro ficto). Los gastos de descarga y portuarios en Uruguay no integran el valor en aduana.",
      },
    ],
  },
  {
    id: "c-p02-02",
    moduleId: "p02",
    title: "Un exportador de celulosa que quiere seguir vendiendo FOB",
    difficulty: 2,
    scenario:
      "Una empresa uruguaya exporta celulosa en contenedores a Europa. Los entrega en la terminal de Montevideo unos cinco días antes de que los carguen al buque. Siempre vendió “FOB Montevideo” porque el banco del comprador abre una carta de crédito que exige un B/L con anotación a bordo. Una semana atrás, un contenedor se dañó en el patio de la terminal antes de la carga y el comprador le reclama al exportador.",
    steps: [
      {
        kind: "mcq",
        prompt: "Con la venta pactada FOB, ¿quién corría el riesgo cuando el contenedor se dañó en el patio de la terminal?",
        options: [
          "El comprador, porque el contenedor ya estaba en la terminal",
          "La DNA",
          "El exportador, porque bajo FOB el riesgo pasa recién cuando está a bordo",
          "La naviera, siempre",
        ],
        answer: 2,
        solution:
          "En FOB la entrega y el traspaso del riesgo ocurren a bordo del buque. Mientras el contenedor espera en el patio, el riesgo sigue en el vendedor, aunque no tenga control sobre él. Por eso el reclamo del comprador tiene sustento.",
      },
      {
        kind: "mcq",
        prompt: "¿Qué cambio le proponés para próximas ventas sin perder la posibilidad de cobrar con carta de crédito?",
        options: [
          "Pasar a FCA terminal de Montevideo y pactar que el transportista del comprador emita al vendedor un B/L a bordo",
          "Pasar a EXW planta",
          "Mantener FOB y contratar un seguro ICC (C)",
          "Pasar a DDP Rotterdam",
        ],
        answer: 0,
        solution:
          "FCA hace pasar el riesgo al entregar en la terminal. Desde Incoterms 2020, las partes pueden pactar que el comprador instruya a su transportista a emitir al vendedor un B/L con anotación on board, que es lo que pide la carta de crédito.",
      },
      {
        kind: "open",
        prompt: "Explicale al gerente comercial, en dos o tres oraciones, por qué FOB no es adecuado para contenedores.",
        solution:
          "FOB nació para carga que se sube directamente al buque. Con contenedores, la entrega real es en la terminal días antes de la carga, y bajo FOB el exportador sigue corriendo el riesgo en ese tramo, que no controla. FCA alinea el riesgo con la entrega real y es la regla que la ICC recomienda para contenedores.",
      },
    ],
  },
  {
    id: "c-p03-01",
    moduleId: "p03",
    title: "Detectar los errores de una pro-forma",
    difficulty: 1,
    scenario:
      "Una importadora de Montevideo te reenvía la pro-forma que le mandó un proveedor de Ningbo por 24.000 vasos de vidrio y te pide el visto bueno para pagar el anticipo. La pro-forma tiene: título “PROFORMA INVOICE”, número y fecha, datos del vendedor y del comprador, descripción “glassware”, cantidad 24.000 unidades, precio unitario y total en dólares, condición “FOB”, pago 30 % anticipado y saldo contra copia del B/L, datos bancarios completos y firma del vendedor.",
    data: [
      { label: "Descripción", value: "“glassware”" },
      { label: "Condición", value: "“FOB”" },
      { label: "País de origen", value: "No figura" },
      { label: "Validez de la oferta", value: "No figura" },
      { label: "Pesos y volumen", value: "No figuran" },
    ],
    steps: [
      {
        kind: "mcq",
        prompt: "¿Cuál de estos problemas impide al despachante clasificar bien la mercadería en la NCM y saber qué permisos hacen falta?",
        options: [
          "La descripción vaga “glassware”",
          "La forma de pago",
          "Los datos bancarios",
          "El título del documento",
        ],
        answer: 0,
        solution:
          "La descripción tiene que ser detallada, comercial y técnica (tipo de vidrio, capacidad, uso, marca, modelo). Con “glassware” no se puede clasificar ni estimar tributos ni intervenciones.",
      },
      {
        kind: "open",
        prompt: "Listá los datos que le pedirías al proveedor que agregue o corrija antes de pagar el anticipo.",
        solution:
          "Descripción detallada (por ejemplo, vasos de vidrio templado de 300 ml) y NCM sugerida; Incoterm con lugar y versión (“FOB Ningbo, China, Incoterms® 2020”, o mejor FCA si va en contenedor); país de origen; validez de la oferta; embalaje, cantidad de bultos, pesos bruto y neto y volumen estimados para cotizar el flete; plazo o fecha estimada de embarque y puertos.",
      },
      {
        kind: "mcq",
        prompt: "Una vez corregida y firmada por la importadora, ¿para qué NO sirve esta pro-forma?",
        options: [
          "Para pagar el anticipo con transferencia",
          "Para que el despachante estime los tributos",
          "Para despachar la importación definitiva en el DUA",
          "Para funcionar como contrato de compraventa",
        ],
        answer: 2,
        solution:
          "La pro-forma no tiene efecto fiscal y no sirve para despachar una importación definitiva: para el DUA se necesita la factura comercial. Sí sirve para pagar, estimar tributos y, aceptada, puede funcionar como contrato.",
      },
    ],
  },
  {
    id: "c-p03-02",
    moduleId: "p03",
    title: "Compras por courier con el régimen 2026",
    difficulty: 2,
    scenario:
      "Es noviembre de 2026. Tres personas consultan a la oficina de un courier en Montevideo. Lucía es persona física con cédula uruguaya, registrada ante la DNA; este año ya usó dos envíos por franquicia por un total de USD 300. Ahora compró una campera de USD 450 a una tienda con residencia fiscal en China, pagada con su tarjeta. Una pyme con RUT recibe un repuesto de USD 30. Un tercer cliente quiere traer una máquina de USD 1.200.",
    data: [
      { label: "Prestación Única", value: "60 % del valor, mínimo USD 20 por envío; hasta USD 800 y 20 kg" },
      { label: "Franquicia anual", value: "USD 800 por año civil, máximo 3 envíos; sin arancel, con IVA salvo excepciones" },
    ],
    steps: [
      {
        kind: "mcq",
        prompt: "¿Puede Lucía usar la franquicia para la campera?",
        options: [
          "No, porque ya usó dos envíos",
          "Sí: es su tercer envío y acumula USD 750, dentro de los USD 800; no paga arancel pero sí IVA",
          "Sí, y además está exonerada de IVA",
          "No, porque las camperas están excluidas",
        ],
        answer: 1,
        solution:
          "Tiene un envío disponible (máximo 3) y 300 + 450 = USD 750 no supera los USD 800. Paga IVA porque la exoneración solo aplica a vendedores con residencia fiscal en un país con acuerdo (hoy, EE. UU.) registrados ante la DNA.",
      },
      {
        kind: "numeric",
        prompt: "Si Lucía no cumpliera los requisitos de la franquicia, ¿cuánto pagaría por Prestación Única por la campera de USD 450?",
        answer: 270,
        tolerance: 0.5,
        unit: "USD",
        solution: "450 × 60 % = USD 270, que supera el mínimo de USD 20.",
      },
      {
        kind: "numeric",
        prompt: "¿Cuánto paga la pyme por el repuesto de USD 30 por Prestación Única?",
        answer: 20,
        tolerance: 0.01,
        unit: "USD",
        solution:
          "30 × 60 % = USD 18, pero el mínimo es USD 20 por envío. Las empresas no pueden usar la franquicia, que es solo para personas físicas.",
      },
      {
        kind: "mcq",
        prompt: "¿Cómo ingresa la máquina de USD 1.200?",
        options: [
          "Por franquicia",
          "Por Prestación Única con un recargo",
          "Por importación formal con despachante y DUA",
          "No puede ingresar",
        ],
        answer: 2,
        solution: "Supera el tope de USD 800 de los regímenes simplificados, así que corresponde la importación formal con despachante y DUA.",
      },
    ],
  },
  {
    id: "c-p04-01",
    moduleId: "p04",
    title: "El B/L a la orden que no estaba endosado",
    difficulty: 2,
    scenario:
      "Una distribuidora de Montevideo importó un contenedor de electrodomésticos pagado con carta de crédito abierta en un banco uruguayo. El contenedor llegó a TCP. El despachante tiene una copia del B/L, cuyo consignatario dice “To the order of Banco X”, y el notify es la distribuidora. La distribuidora ya pagó al banco, pero los originales siguen en el banco. Mientras tanto, corren los días libres del contenedor.",
    steps: [
      {
        kind: "mcq",
        prompt: "¿Qué tipo de B/L es y cómo se transmite?",
        options: [
          "Nominativo, se transmite por cesión",
          "A la orden, se transmite por endoso",
          "Al portador, lo retira quien lo tenga",
          "Sea Waybill, no hace falta original",
        ],
        answer: 1,
        solution: "“To the order of Banco X” es un B/L a la orden: la carga se entrega a quien el banco le endose el documento.",
      },
      {
        kind: "open",
        prompt: "¿Qué tiene que pasar para que la distribuidora pueda retirar la carga? Describí los pasos.",
        solution:
          "El banco tiene que endosar el B/L a favor de la distribuidora y entregarle los originales. Con el B/L endosado y el flete o los gastos pagos, la agencia marítima libera la carga. En paralelo, el despachante asocia el DUA al manifiesto y la línea del conocimiento, se pagan los tributos y, con el levante de la DNA y los gastos de terminal pagos, se retira el contenedor. El CAROU (art. 65) exige acreditar la disponibilidad jurídica con el conocimiento de embarque.",
      },
      {
        kind: "mcq",
        prompt: "Si la distribuidora no consigue el endoso a tiempo y el contenedor lleno sigue en la terminal después de los días libres, ¿qué cargo empieza a correr?",
        options: ["Detention", "BAF", "Demurrage", "THC de origen"],
        answer: 2,
        solution:
          "Demurrage es el cargo por el contenedor lleno que permanece dentro de la terminal más allá de los días libres. Detention es cuando está fuera de la terminal sin devolverse.",
      },
    ],
  },
  {
    id: "c-p04-02",
    moduleId: "p04",
    title: "Muestras urgentes por Carrasco",
    difficulty: 1,
    scenario:
      "Una empresa uruguaya manda por avión muestras de cuero a un cliente en Italia. Son 5 cajas de 80 × 60 × 50 cm, de 15 kg cada una. La tarifa aérea es de US$ 3,20 por kilo facturable (sin recargos). El forwarder emite una HAWB y la aerolínea una MAWB al consolidador.",
    data: [
      { label: "Cajas", value: "5 de 80 × 60 × 50 cm" },
      { label: "Peso real por caja", value: "15 kg" },
      { label: "Divisor", value: "6000 (IATA)" },
      { label: "Tarifa", value: "US$ 3,20 por kg facturable" },
    ],
    steps: [
      {
        kind: "numeric",
        prompt: "¿Cuál es el peso facturable total en kilos?",
        answer: 200,
        tolerance: 0.5,
        unit: "kg",
        solution:
          "Por caja: 80 × 60 × 50 = 240.000 cm³ ÷ 6000 = 40 kg volumétricos; total 200 kg. Peso real: 5 × 15 = 75 kg. Se factura el mayor: 200 kg.",
      },
      {
        kind: "numeric",
        prompt: "¿Cuánto cuesta el flete aéreo básico?",
        answer: 640,
        tolerance: 0.5,
        unit: "US$",
        solution: "200 kg × US$ 3,20 = US$ 640, antes de recargos de combustible o seguridad.",
      },
      {
        kind: "mcq",
        prompt: "El cliente italiano pregunta si puede endosar la guía aérea a un tercero para que retire las muestras. ¿Qué le respondés?",
        options: [
          "Sí, como un B/L a la orden",
          "No: la AWB no es negociable; la carga se entrega al consignatario indicado",
          "Sí, si lo autoriza la DNA",
          "Solo si es una MAWB",
        ],
        answer: 1,
        solution:
          "La guía aérea es siempre “not negotiable”: es recibo, prueba del contrato y factura del flete, pero no título. Si se quiere que retire otro, hay que consignarla a ese otro desde el inicio.",
      },
    ],
  },
  {
    id: "c-p04-03",
    moduleId: "p04",
    title: "Un error en el certificado de origen de una importación desde Brasil",
    difficulty: 3,
    scenario:
      "Una importadora de Montevideo trae vajilla de vidrio desde San Pablo por camión, CPT Montevideo. El exportador brasileño mandó un COD del ACE 18, pero la NCM del certificado no coincide con la de la factura comercial. La mercadería ya está en el depósito.",
    data: [
      { label: "Valor en aduana (CIF)", value: "US$ 10.860" },
      { label: "Tasa consular con origen ACE 18", value: "3 %" },
      { label: "Tasa consular general", value: "5 %" },
      { label: "Código de acuerdo ACE 18 en el DUA", value: "310" },
    ],
    steps: [
      {
        kind: "mcq",
        prompt: "El programa del curso menciona el “AEC 18”. ¿Qué es realmente lo que figura en este certificado?",
        options: [
          "El Arancel Externo Común número 18",
          "El ACE 18, Acuerdo de Complementación Económica de ALADI que registra el programa de liberación del MERCOSUR",
          "El artículo 18 del Código Aduanero",
          "La Resolución 18 del Grupo Mercado Común",
        ],
        answer: 1,
        solution: "“AEC 18” es una errata por ACE 18. El AEC es el Arancel Externo Común; el ACE 18 es el acuerdo que da cobertura al MERCOSUR en ALADI y por eso figura en el certificado.",
      },
      {
        kind: "numeric",
        prompt: "Si se perdiera la preferencia por el error, ¿cuánto más se pagaría solo de tasa consular (5 % en vez de 3 %) en dólares?",
        answer: 217.2,
        tolerance: 0.05,
        unit: "US$",
        solution: "10.860 × 5 % = 543,00; 10.860 × 3 % = 325,80. Diferencia: US$ 217,20, sin contar que además se pagaría la TGA extrazona en lugar del 0 %.",
      },
      {
        kind: "open",
        prompt: "¿Qué hacés para resolver el problema?",
        solution:
          "Hablar con el exportador para que pida a la entidad emisora un certificado sustitutivo o la rectificación. Con el Régimen de Origen MERCOSUR vigente desde el 18/07/2024, un error formal no invalida automáticamente el origen: la aduana puede aceptarlo o pedir uno sustitutivo. Verificar además que el certificado esté dentro de su validez de 12 meses y que se haya emitido dentro de los 180 días de la factura. Coordinar con el despachante cómo seguir con el despacho mientras tanto, según el procedimiento de la DNA.",
      },
    ],
  },
  {
    id: "c-p04-04",
    moduleId: "p04",
    title: "La transferencia que llegó incompleta",
    difficulty: 1,
    scenario:
      "Una destilería uruguaya vendió con pago anticipado a un importador alemán por EUR 20.000. En su cuenta del BROU se acreditaron EUR 19.935 y el cliente asegura que mandó el monto completo. La pro-forma decía solo “pago anticipado por transferencia”.",
    steps: [
      {
        kind: "numeric",
        prompt: "¿Cuántos euros faltan?",
        answer: 65,
        tolerance: 0.01,
        unit: "EUR",
        solution: "20.000 − 19.935 = EUR 65.",
      },
      {
        kind: "mcq",
        prompt: "¿Cuál es la explicación más probable?",
        options: [
          "La transferencia salió con opción SHA o BEN y un banco intermediario descontó su comisión",
          "La DNA retuvo un tributo a la exportación",
          "El BCU aplicó un control de cambios",
          "El importador pagó con OUR",
        ],
        answer: 0,
        solution:
          "Con SHA cada parte paga los gastos de su banco y los intermediarios suelen descontar del monto; con BEN, todos los gastos son del beneficiario. Uruguay no tiene controles de cambio y con OUR el monto llegaría íntegro.",
      },
      {
        kind: "open",
        prompt: "¿Cómo lo evitás en la próxima pro-forma?",
        solution:
          "Indicar que todos los gastos bancarios fuera de Uruguay son por cuenta del comprador e instruir la opción OUR. Incluir los datos bancarios completos (beneficiario, cuenta, BIC/SWIFT, intermediario si aplica) y pedir el comprobante de la transferencia (pacs.008, que muchos siguen llamando MT103) o el UETR para rastrearla.",
      },
    ],
  },
]
