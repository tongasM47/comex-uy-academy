// Tipos del contenido de estudio. Todo el contenido vive en src/data como datos,
// separado de la lógica, para poder ampliarlo sin tocar componentes.
//
// Texto enriquecido: los campos de texto admiten un mini-markdown en línea:
//   **negrita**, *cursiva*, `código` y [[termino]] (enlace al glosario).

export type ModuleId =
  | 'p01' | 'p02' | 'p03' | 'p04' | 'p05' | 'p06'
  | 'p07' | 'p08' | 'p09' | 'p10' | 'p11' | 'p12'

export type DocId =
  | 'proforma'
  | 'factura-comercial'
  | 'packing-list'
  | 'bl'
  | 'awb'
  | 'crt'
  | 'mic-dta'
  | 'certificado-origen'
  | 'dua'
  | 'carta-credito'
  | 'letra-cambio'

export type ToolId =
  | 'incoterms-visualizer'
  | 'import-calculator'
  | 'volumetric-calculator'
  | 'payment-flows'
  | 'import-sequence'
  | 'export-sequence'

export interface Source {
  title: string
  url: string
}

export type Block =
  | { type: 'p'; text: string }
  | { type: 'list'; items: string[]; ordered?: boolean }
  | { type: 'table'; headers: string[]; rows: string[][]; caption?: string }
  | { type: 'callout'; tone: 'info' | 'warn' | 'tip' | 'uy'; title?: string; text: string }
  | { type: 'steps'; items: { title: string; text: string }[] }
  | { type: 'eli5'; text: string }
  | { type: 'example'; title: string; text: string }
  | { type: 'doc'; docId: DocId }
  | { type: 'tool'; toolId: ToolId }

export interface LessonSection {
  heading: string
  blocks: Block[]
}

export interface Eli5 {
  /** Concepto que se explica */
  concept: string
  /** Explicación "como si tuviera 5 años", con una analogía cotidiana */
  text: string
}

export interface ProbableQuestion {
  question: string
  answer: string
}

export interface Subtopic {
  /** Formato: "p02-s3" */
  id: string
  moduleId: ModuleId
  title: string
  /** Una o dos oraciones: de qué trata y por qué importa en el trabajo */
  summary: string
  /** Minutos estimados de lectura */
  minutes: number
  sections: LessonSection[]
  eli5: Eli5[]
  keyPoints: string[]
  /** Preguntas probables de examen o de entrevista, con respuesta corta */
  probableQuestions: ProbableQuestion[]
  sources: Source[]
}

export interface Module {
  id: ModuleId
  number: number
  title: string
  short: string
  description: string
  /** Nombre de ícono (ver components/Icon.tsx) */
  icon: string
}

export interface Question {
  id: string
  moduleId: ModuleId
  subtopicId: string
  /** 1 básico · 2 intermedio · 3 avanzado */
  difficulty: 1 | 2 | 3
  prompt: string
  options: string[]
  /** Índice de la opción correcta */
  answer: number
  explanation: string
}

export interface Flashcard {
  id: string
  moduleId: ModuleId
  subtopicId: string
  front: string
  back: string
}

export type CaseStep =
  | {
      kind: 'mcq'
      prompt: string
      options: string[]
      answer: number
      solution: string
    }
  | {
      kind: 'numeric'
      prompt: string
      /** Respuesta correcta */
      answer: number
      /** Tolerancia absoluta aceptada */
      tolerance: number
      unit?: string
      solution: string
    }
  | {
      kind: 'open'
      prompt: string
      /** Respuesta modelo, el usuario se autoevalúa */
      solution: string
    }

export interface CaseStudy {
  id: string
  moduleId: ModuleId
  title: string
  difficulty: 1 | 2 | 3
  /** Planteo del caso */
  scenario: string
  /** Datos del caso en formato tabla (opcional) */
  data?: { label: string; value: string }[]
  steps: CaseStep[]
}

export interface InterviewQuestion {
  id: string
  category: 'tecnica' | 'situacional' | 'conductual'
  question: string
  modelAnswer: string
  tips: string[]
  moduleIds: ModuleId[]
}

export interface GlossaryTerm {
  term: string
  /** Sigla expandida, si aplica */
  expansion?: string
  definition: string
  moduleId?: ModuleId
}

/** Campo de un documento ilustrado */
export interface DocField {
  /** Número de casilla que se muestra en el modelo */
  n: number | string
  label: string
  /** Valor de ejemplo con que se completa */
  value: string
  /** Qué va, quién lo completa, errores comunes */
  explanation: string
  /** Ancho en columnas de una grilla de 12 */
  span?: number
  /** Para el modo práctica: opciones entre las que elegir el valor correcto */
  practice?: { options: string[]; answer: number }
}

export interface DocSpecimen {
  id: DocId
  title: string
  subtitle: string
  /** Para qué sirve, quién lo emite, cuándo se usa */
  description: string
  /** Escenario de la operación ficticia que da los valores de ejemplo */
  scenario: string
  /** Bloques del documento, de arriba a abajo */
  sections: { title?: string; fields: DocField[] }[]
  notes: string[]
  sources: Source[]
}
