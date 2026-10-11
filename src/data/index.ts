// Punto único de acceso al contenido de estudio.
import type { CaseStudy, Flashcard, ModuleId, Question, Subtopic } from './types'
import { modules } from './modules'

import { p01Lessons } from './lessons/p01'
import { p02Lessons } from './lessons/p02'
import { p03Lessons } from './lessons/p03'
import { p04Lessons } from './lessons/p04'
import { p05Lessons } from './lessons/p05'
import { p06Lessons } from './lessons/p06'
import { p07Lessons } from './lessons/p07'
import { p08Lessons } from './lessons/p08'
import { p09Lessons } from './lessons/p09'
import { p10Lessons } from './lessons/p10'
import { p11Lessons } from './lessons/p11'
import { p12Lessons } from './lessons/p12'

import { p01Questions } from './questions/p01'
import { p02Questions } from './questions/p02'
import { p03Questions } from './questions/p03'
import { p04Questions } from './questions/p04'
import { p05Questions } from './questions/p05'
import { p06Questions } from './questions/p06'
import { p07Questions } from './questions/p07'
import { p08Questions } from './questions/p08'
import { p09Questions } from './questions/p09'
import { p10Questions } from './questions/p10'
import { p11Questions } from './questions/p11'
import { p12Questions } from './questions/p12'

import { p01Flashcards } from './flashcards/p01'
import { p02Flashcards } from './flashcards/p02'
import { p03Flashcards } from './flashcards/p03'
import { p04Flashcards } from './flashcards/p04'
import { p05Flashcards } from './flashcards/p05'
import { p06Flashcards } from './flashcards/p06'
import { p07Flashcards } from './flashcards/p07'
import { p08Flashcards } from './flashcards/p08'
import { p09Flashcards } from './flashcards/p09'
import { p10Flashcards } from './flashcards/p10'
import { p11Flashcards } from './flashcards/p11'
import { p12Flashcards } from './flashcards/p12'

import { p01p04Cases } from './cases/p01_p04'
import { p05p06Cases } from './cases/p05_p06'
import { p07p09Cases } from './cases/p07_p09'
import { p10p12Cases } from './cases/p10_p12'

export { modules, moduleById } from './modules'
export { documents } from './documents'
export { glossary } from './glossary'
export { interviewQuestions } from './interview'

export const lessons: Subtopic[] = [
  ...p01Lessons, ...p02Lessons, ...p03Lessons, ...p04Lessons,
  ...p05Lessons, ...p06Lessons, ...p07Lessons, ...p08Lessons,
  ...p09Lessons, ...p10Lessons, ...p11Lessons, ...p12Lessons,
]

export const questions: Question[] = [
  ...p01Questions, ...p02Questions, ...p03Questions, ...p04Questions,
  ...p05Questions, ...p06Questions, ...p07Questions, ...p08Questions,
  ...p09Questions, ...p10Questions, ...p11Questions, ...p12Questions,
]

export const flashcards: Flashcard[] = [
  ...p01Flashcards, ...p02Flashcards, ...p03Flashcards, ...p04Flashcards,
  ...p05Flashcards, ...p06Flashcards, ...p07Flashcards, ...p08Flashcards,
  ...p09Flashcards, ...p10Flashcards, ...p11Flashcards, ...p12Flashcards,
]

export const cases: CaseStudy[] = [...p01p04Cases, ...p05p06Cases, ...p07p09Cases, ...p10p12Cases]

export const lessonById: Record<string, Subtopic> = Object.fromEntries(lessons.map((l) => [l.id, l]))

export function lessonsOf(moduleId: ModuleId): Subtopic[] {
  return lessons.filter((l) => l.moduleId === moduleId)
}

export function questionsOf(moduleId: ModuleId): Question[] {
  return questions.filter((q) => q.moduleId === moduleId)
}

/** Lección siguiente en el orden del temario, o null si es la última */
export function nextLesson(id: string): Subtopic | null {
  const i = lessons.findIndex((l) => l.id === id)
  return i >= 0 && i < lessons.length - 1 ? lessons[i + 1] : null
}

export function prevLesson(id: string): Subtopic | null {
  const i = lessons.findIndex((l) => l.id === id)
  return i > 0 ? lessons[i - 1] : null
}

export const moduleOrder = modules.map((m) => m.id)
