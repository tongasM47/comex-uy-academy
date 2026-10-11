// Genera public/fuentes/<modulo>.html: versión estática y legible de cada módulo.
// Sirve como fuente para NotebookLM (podcasts) y como versión imprimible.
import { writeFileSync, mkdirSync } from 'node:fs'
import { lessons, modules } from '../src/data/index'
import type { Block } from '../src/data/types'

const out = 'public/fuentes'
mkdirSync(out, { recursive: true })
const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
const md = (s: string) => esc(s).replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>').replace(/`([^`]+)`/g, '<code>$1</code>').replace(/\*([^*\s][^*]*)\*/g, '<em>$1</em>').replace(/\n/g, '<br>')
const block = (b: Block): string => {
  switch (b.type) {
    case 'p': return `<p>${md(b.text)}</p>`
    case 'list': return `<${b.ordered ? 'ol' : 'ul'}>${b.items.map((i) => `<li>${md(i)}</li>`).join('')}</${b.ordered ? 'ol' : 'ul'}>`
    case 'table': return `<table><thead><tr>${b.headers.map((h) => `<th>${md(h)}</th>`).join('')}</tr></thead><tbody>${b.rows.map((r) => `<tr>${r.map((c) => `<td>${md(c)}</td>`).join('')}</tr>`).join('')}</tbody></table>${b.caption ? `<p><small>${md(b.caption)}</small></p>` : ''}`
    case 'callout': return `<blockquote><p><strong>${md(b.title ?? 'Nota')}:</strong> ${md(b.text)}</p></blockquote>`
    case 'steps': return `<ol>${b.items.map((s) => `<li><strong>${md(s.title)}.</strong> ${md(s.text)}</li>`).join('')}</ol>`
    case 'eli5': return `<p><strong>Explicado fácil:</strong> ${md(b.text)}</p>`
    case 'example': return `<h4>Ejemplo: ${md(b.title)}</h4><p>${md(b.text)}</p>`
    default: return ''
  }
}
for (const m of modules) {
  const body: string[] = [`<h1>Módulo ${m.number}: ${esc(m.title)}</h1><p>${esc(m.description)}</p>`]
  for (const l of lessons.filter((x) => x.moduleId === m.id)) {
    body.push(`<article id="${l.id}"><h2>Lección ${l.id.toUpperCase()}: ${md(l.title)}</h2><p><em>${md(l.summary)}</em></p>`)
    for (const s of l.sections) body.push(`<h3>${md(s.heading)}</h3>` + s.blocks.map(block).join('\n'))
    body.push(`<h3>Explicado fácil</h3>` + l.eli5.map((e) => `<p><strong>${md(e.concept)}:</strong> ${md(e.text)}</p>`).join(''))
    body.push(`<h3>Puntos clave</h3><ul>${l.keyPoints.map((k) => `<li>${md(k)}</li>`).join('')}</ul>`)
    body.push(`<h3>Preguntas probables</h3>` + l.probableQuestions.map((q) => `<p><strong>${md(q.question)}</strong><br>${md(q.answer)}</p>`).join(''))
    body.push(`<h3>Fuentes</h3><ul>${l.sources.map((s) => `<li><a href="${esc(s.url)}">${esc(s.title)}</a></li>`).join('')}</ul></article>`)
  }
  writeFileSync(`${out}/${m.id}.html`, `<!doctype html><html lang="es-UY"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Módulo ${m.number}: ${esc(m.title)} · Comex UY</title><style>body{font-family:system-ui,sans-serif;max-width:46rem;margin:2rem auto;padding:0 1rem;line-height:1.55;color:#142238}table{border-collapse:collapse;width:100%;font-size:.9rem}td,th{border:1px solid #ccc;padding:4px 6px;text-align:left;vertical-align:top}blockquote{border-left:4px solid #5a3e9e;margin:1rem 0;padding:.2rem 1rem;background:#f3f0fa}</style></head><body>${body.join('\n')}<hr><p><small>Comex UY · contenido relevado al 10/10/2026 a partir de fuentes oficiales uruguayas.</small></p></body></html>`)
}
console.log('ok')
