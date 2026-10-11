// Exporta cada módulo como texto plano (fuente para NotebookLM).
import { writeFileSync, mkdirSync } from 'node:fs'
import { lessons, modules } from '../src/data/index'
import type { Block } from '../src/data/types'

const out = process.argv[2] ?? 'export'
mkdirSync(out, { recursive: true })
const clean = (s: string) => s.replace(/\*\*|`/g, '').replace(/\*([^*]+)\*/g, '$1')
const block = (b: Block): string => {
  switch (b.type) {
    case 'p': return clean(b.text)
    case 'list': return b.items.map((i, k) => `${b.ordered ? k + 1 + '.' : '-'} ${clean(i)}`).join('\n')
    case 'table': return [b.headers.map(clean).join(' | '), ...b.rows.map((r) => r.map(clean).join(' | '))].join('\n') + (b.caption ? `\n(${clean(b.caption)})` : '')
    case 'callout': return `${b.title ? clean(b.title) + ': ' : ''}${clean(b.text)}`
    case 'steps': return b.items.map((s, k) => `Paso ${k + 1}. ${clean(s.title)}: ${clean(s.text)}`).join('\n')
    case 'eli5': return `Explicado fácil: ${clean(b.text)}`
    case 'example': return `Ejemplo, ${clean(b.title)}:\n${clean(b.text)}`
    default: return ''
  }
}
for (const m of modules) {
  const parts = [`MÓDULO ${m.number}: ${m.title}\n${m.description}\n`]
  for (const l of lessons.filter((x) => x.moduleId === m.id)) {
    parts.push(`\n=== LECCIÓN ${l.id.toUpperCase()}: ${l.title} ===\n${clean(l.summary)}`)
    for (const s of l.sections) parts.push(`\n## ${s.heading}\n` + s.blocks.map(block).filter(Boolean).join('\n\n'))
    parts.push('\n## Explicado fácil\n' + l.eli5.map((e) => `${e.concept}: ${clean(e.text)}`).join('\n\n'))
    parts.push('\n## Puntos clave\n' + l.keyPoints.map((k) => '- ' + clean(k)).join('\n'))
    parts.push('\n## Preguntas probables\n' + l.probableQuestions.map((q) => `P: ${clean(q.question)}\nR: ${clean(q.answer)}`).join('\n\n'))
    parts.push('\n## Fuentes\n' + l.sources.map((s) => `- ${s.title}: ${s.url}`).join('\n'))
  }
  writeFileSync(`${out}/${m.id}.txt`, parts.join('\n'))
}
console.log('ok')
