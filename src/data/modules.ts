import type { Module } from './types'

// Las 11 partes del temario del curso de AHK Academy (Cámara de Comercio e Industria
// Uruguayo-Alemana, enero 2026) más un módulo 12 de logística y salida laboral.
export const modules: Module[] = [
  {
    id: 'p01',
    number: 1,
    title: 'Introducción al comercio exterior',
    short: 'Introducción',
    description:
      'El mapa completo: qué es comerciar con el exterior desde Uruguay, quién participa y cómo encajan Incoterms, documentos, regímenes y logística.',
    icon: 'compass',
  },
  {
    id: 'p02',
    number: 2,
    title: 'Incoterms 2020',
    short: 'Incoterms',
    description:
      'Las 11 reglas de la ICC: quién paga qué, dónde se traspasa el riesgo y cuál conviene en transporte marítimo, aéreo y terrestre.',
    icon: 'ship',
  },
  {
    id: 'p03',
    number: 3,
    title: 'Factura pro-forma y documentos comerciales',
    short: 'Pro-forma',
    description:
      'Los 22 elementos de una pro-forma, la factura comercial, los envíos courier y la introducción al DUA.',
    icon: 'file',
  },
  {
    id: 'p04',
    number: 4,
    title: 'Documentos de importación',
    short: 'Documentos',
    description:
      'Conocimiento de embarque y otros documentos de transporte, giro comercial y certificado de origen.',
    icon: 'stack',
  },
  {
    id: 'p05',
    number: 5,
    title: 'Secuencia de una importación',
    short: 'Secuencia',
    description:
      'Paso a paso desde la compra hasta el retiro de la mercadería, los agentes que intervienen y el DUA en LUCIA.',
    icon: 'route',
  },
  {
    id: 'p06',
    number: 6,
    title: 'Cálculo de una importación',
    short: 'Cálculo',
    description:
      'MERCOSUR, valor en aduana, NCM, AEC y todos los tributos para calcular el costo de importar, dentro y fuera del bloque.',
    icon: 'calculator',
  },
  {
    id: 'p07',
    number: 7,
    title: 'Admisión temporaria',
    short: 'Admisión temporaria',
    description:
      'Importar sin pagar tributos para transformar y exportar: Ley 18.184, Decreto 505/009 y el rol del LATU.',
    icon: 'cycle',
  },
  {
    id: 'p08',
    number: 8,
    title: 'Zonas francas y Código Aduanero',
    short: 'Zona franca',
    description:
      'El régimen de zonas francas (Ley 15.921 y reformas) y el Código Aduanero de la República Oriental del Uruguay (CAROU).',
    icon: 'gate',
  },
  {
    id: 'p09',
    number: 9,
    title: 'Régimen de exportaciones',
    short: 'Exportaciones',
    description:
      'Secuencia de una exportación, tributos, devolución de impuestos y recuperación del IVA.',
    icon: 'plane',
  },
  {
    id: 'p10',
    number: 10,
    title: 'Tratados internacionales',
    short: 'Tratados',
    description:
      'Cómo funcionan los tratados, el MERCOSUR, la ALADI y el acuerdo MERCOSUR–Unión Europea.',
    icon: 'globe',
  },
  {
    id: 'p11',
    number: 11,
    title: 'Formas de pago internacional',
    short: 'Pagos',
    description:
      'Carta de crédito (UCP 600), cobranza documentaria (URC 522) y giro o transferencia.',
    icon: 'bank',
  },
  {
    id: 'p12',
    number: 12,
    title: 'Logística y salida laboral',
    short: 'Logística y empleo',
    description:
      'Contenedores, fletes y pesos, y cómo conseguir trabajo en una oficina de comercio exterior en Uruguay.',
    icon: 'briefcase',
  },
]

export const moduleById = Object.fromEntries(modules.map((m) => [m.id, m])) as Record<
  Module['id'],
  Module
>
