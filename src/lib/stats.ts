import { flashcards, lessons, modules, questions } from '../data'
import type { ModuleId } from '../data/types'
import { streak, type Progress } from './progress'

export interface ModuleStats {
  lessonsDone: number
  lessonsTotal: number
  answered: number
  correct: number
  /** Proporción de aciertos en el último intento de cada pregunta (0–1), o null si no respondió */
  accuracy: number | null
  questionsTotal: number
}

export function moduleStats(p: Progress, id: ModuleId): ModuleStats {
  const ls = lessons.filter((l) => l.moduleId === id)
  const qs = questions.filter((q) => q.moduleId === id)
  const answeredQs = qs.filter((q) => p.questions[q.id])
  const correctQs = answeredQs.filter((q) => p.questions[q.id].last)
  return {
    lessonsDone: ls.filter((l) => p.lessons[l.id]?.done).length,
    lessonsTotal: ls.length,
    answered: answeredQs.length,
    correct: correctQs.length,
    accuracy: answeredQs.length ? correctQs.length / answeredQs.length : null,
    questionsTotal: qs.length,
  }
}

export function globalStats(p: Progress) {
  const now = Date.now()
  const lessonsDone = lessons.filter((l) => p.lessons[l.id]?.done).length
  const answered = questions.filter((q) => p.questions[q.id])
  const correct = answered.filter((q) => p.questions[q.id].last)
  const cardsDue = flashcards.filter((c) => p.cards[c.id] && p.cards[c.id].due <= now).length
  const cardsNew = flashcards.filter((c) => !p.cards[c.id]).length
  return {
    lessonsDone,
    lessonsTotal: lessons.length,
    answered: answered.length,
    accuracy: answered.length ? correct.length / answered.length : null,
    cardsDue,
    cardsNew,
    cardsTotal: flashcards.length,
    streak: streak(p.activity),
    exams: Object.values(p.exams).sort((a, b) => b.at - a.at),
  }
}

/** Primera lección no terminada, en el orden del temario */
export function nextUnfinished(p: Progress) {
  return lessons.find((l) => !p.lessons[l.id]?.done) ?? null
}

/** Módulos con más errores (al menos 5 respondidas), del peor al mejor */
export function weakModules(p: Progress, limit = 3) {
  return modules
    .map((m) => ({ m, s: moduleStats(p, m.id) }))
    .filter((x) => x.s.answered >= 5 && x.s.accuracy !== null && x.s.accuracy < 0.75)
    .sort((a, b) => (a.s.accuracy ?? 1) - (b.s.accuracy ?? 1))
    .slice(0, limit)
}

export const pct = (x: number | null) => (x === null ? '—' : `${Math.round(x * 100)}%`)

export function shuffle<T>(arr: T[]): T[] {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}
