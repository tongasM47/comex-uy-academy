// Verifica la integridad del contenido: IDs únicos, referencias válidas y respuestas en rango.
import { cases, documents, flashcards, glossary, interviewQuestions, lessons, modules, questions } from '../src/data/index'

const errors: string[] = []
const lessonIds = new Set(lessons.map((l) => l.id))
const modIds = new Set(modules.map((m) => m.id))
const dup = (arr: string[], what: string) => {
  const seen = new Set<string>()
  for (const x of arr) { if (seen.has(x)) errors.push(`${what} duplicado: ${x}`); seen.add(x) }
}
dup(lessons.map((l) => l.id), 'lección')
dup(questions.map((q) => q.id), 'pregunta')
dup(flashcards.map((c) => c.id), 'flashcard')
dup(cases.map((c) => c.id), 'caso')
dup(interviewQuestions.map((q) => q.id), 'entrevista')
for (const q of questions) {
  if (!lessonIds.has(q.subtopicId)) errors.push(`pregunta ${q.id}: subtema ${q.subtopicId} no existe`)
  if (q.answer < 0 || q.answer >= q.options.length) errors.push(`pregunta ${q.id}: respuesta fuera de rango`)
  if (new Set(q.options).size !== q.options.length) errors.push(`pregunta ${q.id}: opciones repetidas`)
}
for (const c of flashcards) if (!lessonIds.has(c.subtopicId)) errors.push(`flashcard ${c.id}: subtema inexistente`)
for (const c of cases) {
  if (!modIds.has(c.moduleId)) errors.push(`caso ${c.id}: módulo inexistente`)
  for (const s of c.steps) if (s.kind === 'mcq' && (s.answer < 0 || s.answer >= s.options.length)) errors.push(`caso ${c.id}: respuesta fuera de rango`)
}
for (const l of lessons) for (const s of l.sections) for (const b of s.blocks) {
  if (b.type === 'doc' && !documents[b.docId]) errors.push(`lección ${l.id}: documento ${b.docId} no existe`)
  if (b.type === 'table' && b.rows.some((r) => r.length !== b.headers.length)) errors.push(`lección ${l.id}: tabla con filas desparejas en "${s.heading}"`)
}
for (const d of Object.values(documents)) for (const s of d.sections) for (const f of s.fields)
  if (f.practice && f.practice.options[f.practice.answer] !== f.value) errors.push(`documento ${d.id} casilla ${f.n}: la opción correcta no coincide con el valor`)
for (const m of modules) if (!lessons.some((l) => l.moduleId === m.id)) errors.push(`módulo ${m.id} sin lecciones`)

const words = lessons.reduce((a, l) => a + JSON.stringify(l).split(/\s+/).length, 0)
console.log(`Lecciones ${lessons.length} (~${words} palabras) · preguntas ${questions.length} · flashcards ${flashcards.length} · casos ${cases.length} · entrevista ${interviewQuestions.length} · glosario ${glossary.length} · documentos ${Object.keys(documents).length}`)
const pos = [0, 0, 0, 0]; for (const q of questions) pos[q.answer]++
console.log('Posición de la respuesta correcta (A/B/C/D):', pos.join(' / '))
if (errors.length) { console.error(errors.join('\n')); process.exit(1) }
console.log('Contenido OK')
