import { useMemo, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { documents, glossary, lessons, lessonsOf, modules, moduleById } from '../data'
import type { DocId, ToolId } from '../data/types'
import { podcasts, podcastUrl } from '../data/podcasts'
import { useProgress } from '../lib/ProgressContext'
import { globalStats, moduleStats, pct } from '../lib/stats'
import { DocumentViewer } from '../components/DocumentViewer'
import { RichText } from '../components/RichText'
import { Icon } from '../components/Icon'
import { ToolEmbed, toolTitles } from '../tools'
import { NotFound } from './Study'

const docGroups: { title: string; ids: DocId[] }[] = [
  { title: 'Comerciales', ids: ['proforma', 'factura-comercial', 'packing-list'] },
  { title: 'De transporte', ids: ['bl', 'awb', 'crt', 'mic-dta'] },
  { title: 'Aduaneros y de origen', ids: ['dua', 'certificado-origen'] },
  { title: 'De pago', ids: ['carta-credito', 'letra-cambio'] },
]

export function DocumentsList() {
  return (
    <div className="page">
      <h1>Documentos ilustrados</h1>
      <p className="lede" style={{ marginTop: 8 }}>
        Modelos completos con datos ficticios de una misma operación. Tocá cada casilla para ver qué va y quién la completa, o ponete a prueba completándolos vos.
      </p>
      {docGroups.map((g) => (
        <section key={g.title}>
          <div className="section-head"><h2>{g.title}</h2></div>
          <div className="grid-3">
            {g.ids.map((id) => {
              const d = documents[id]
              const nFields = d.sections.reduce((a, s) => a + s.fields.length, 0)
              return (
                <Link key={id} to={`/documentos/${id}`} className="sheet pad stack" style={{ color: 'inherit', textDecoration: 'none', gap: 6 }}>
                  <Icon name="doc" size={22} />
                  <h3>{d.title}</h3>
                  <span className="small muted">{d.subtitle}</span>
                  <span className="small">{nFields} casillas explicadas</span>
                </Link>
              )
            })}
          </div>
        </section>
      ))}
    </div>
  )
}

export function DocumentPage() {
  const { id } = useParams()
  const d = documents[id as DocId]
  if (!d) return <NotFound />
  const usedIn = lessons.filter((l) => l.sections.some((s) => s.blocks.some((b) => b.type === 'doc' && b.docId === d.id)))
  return (
    <div className="page" style={{ maxWidth: 1240 }}>
      <div className="crumbs"><Link to="/documentos">Documentos</Link> / <span>{d.title}</span></div>
      <h1>{d.title}</h1>
      <p className="lede" style={{ margin: '8px 0 18px' }}>{d.subtitle}</p>
      <DocumentViewer doc={d} />
      {usedIn.length > 0 && (
        <p className="small" style={{ marginTop: 18 }}>
          Se explica en: {usedIn.map((l, i) => (
            <span key={l.id}>{i > 0 && ', '}<Link to={`/leccion/${l.id}`}>{l.title}</Link></span>
          ))}
        </p>
      )}
      <h3 style={{ marginTop: 18 }}>Fuentes</h3>
      <ul className="sources">
        {d.sources.map((s, i) => <li key={i}><a href={s.url} target="_blank" rel="noreferrer">{s.title}</a></li>)}
      </ul>
    </div>
  )
}

export function Tools() {
  const [tool, setTool] = useState<ToolId>('import-calculator')
  return (
    <div className="page">
      <h1>Herramientas</h1>
      <p className="lede" style={{ marginTop: 8 }}>Para hacer las cuentas y ver los procesos en movimiento.</p>
      <div className="row" role="tablist" style={{ margin: '16px 0' }}>
        {(Object.keys(toolTitles) as ToolId[]).map((t) => (
          <button key={t} role="tab" aria-selected={tool === t} className="chip" aria-pressed={tool === t} onClick={() => setTool(t)}>
            {toolTitles[t]}
          </button>
        ))}
      </div>
      <ToolEmbed id={tool} />
    </div>
  )
}

export function Podcasts() {
  const { progress, markPodcast } = useProgress()
  const available = Object.keys(podcasts).length
  return (
    <div className="page-narrow">
      <h1>Podcasts</h1>
      <p className="lede" style={{ marginTop: 8 }}>
        Un episodio por lección, con dos voces que conversan el tema. Sirven para repasar caminando o en el ómnibus.
      </p>
      <p className="small muted">
        {available} de {lessons.length} episodios disponibles. Se generan con NotebookLM a partir de las fuentes oficiales y se van sumando.
      </p>
      {modules.map((m) => (
        <section key={m.id} style={{ marginTop: 22 }}>
          <h2 style={{ fontSize: '1.2rem' }}>{m.number}. {m.title}</h2>
          <ul className="lesson-list">
            {lessonsOf(m.id).map((l) => {
              const p = podcasts[l.id]
              const listened = progress.podcasts[l.id]?.listened
              return (
                <li key={l.id} style={{ padding: '12px 0', borderBottom: '1px solid var(--rule)' }}>
                  <div className="row">
                    <Link to={`/leccion/${l.id}`} style={{ fontWeight: 600 }}>{l.title}</Link>
                    <span className="spacer" />
                    {p ? (
                      <button className="btn btn-ghost btn-sm" onClick={() => markPodcast(l.id, !listened)}>
                        <Icon name={listened ? 'checkCircle' : 'headphones'} size={16} /> {listened ? 'Escuchado' : 'Marcar escuchado'}
                      </button>
                    ) : (
                      <span className="badge">En preparación</span>
                    )}
                  </div>
                  {p && <audio className="audio" controls preload="none" src={podcastUrl(p)} style={{ marginTop: 8 }} onEnded={() => markPodcast(l.id, true)} />}
                </li>
              )
            })}
          </ul>
        </section>
      ))}
    </div>
  )
}

export function Glossary() {
  const [q, setQ] = useState('')
  const norm = (s: string) => s.normalize('NFD').replace(/\p{Diacritic}/gu, '').toLowerCase()
  const list = useMemo(() => {
    const n = norm(q.trim())
    if (!n) return glossary
    return glossary.filter((g) => norm(`${g.term} ${g.expansion ?? ''} ${g.definition}`).includes(n))
  }, [q])
  const letters = [...new Set(list.map((g) => norm(g.term)[0].toUpperCase()))]

  return (
    <div className="page-narrow">
      <h1>Glosario</h1>
      <p className="lede" style={{ marginTop: 8 }}>{glossary.length} términos y siglas como se usan en Uruguay.</p>
      <input
        type="search"
        placeholder="Buscar: DUA, cumplido, flete, ACE 18…"
        value={q}
        onChange={(e) => setQ(e.target.value)}
        aria-label="Buscar en el glosario"
        style={{ margin: '14px 0' }}
      />
      {list.length === 0 && <p className="muted">No hay términos que coincidan con "{q}".</p>}
      {letters.map((L) => (
        <section key={L}>
          <h2 style={{ margin: '22px 0 6px', color: 'var(--stamp)' }}>{L}</h2>
          <dl style={{ margin: 0 }}>
            {list.filter((g) => norm(g.term)[0].toUpperCase() === L).map((g) => (
              <div key={g.term} style={{ padding: '10px 0', borderBottom: '1px solid var(--rule)' }}>
                <dt style={{ fontWeight: 700 }}>
                  {g.term}
                  {g.expansion && <span className="muted" style={{ fontWeight: 400 }}> · {g.expansion}</span>}
                  {g.moduleId && (
                    <Link to={`/modulo/${g.moduleId}`} className="badge" style={{ marginLeft: 8, textDecoration: 'none' }}>
                      Módulo {moduleById[g.moduleId].number}
                    </Link>
                  )}
                </dt>
                <dd style={{ margin: '4px 0 0' }}><RichText text={g.definition} /></dd>
              </div>
            ))}
          </dl>
        </section>
      ))}
    </div>
  )
}

export function ProgressPage() {
  const { progress, user, sync, signIn, signOut, importProgress, resetProgress } = useProgress()
  const g = globalStats(progress)
  const fileRef = useRef<HTMLInputElement>(null)
  const [msg, setMsg] = useState('')
  const [confirmReset, setConfirmReset] = useState(false)
  const [theme, setTheme] = useState(() => {
    try { return localStorage.getItem('comex:theme') ?? 'auto' } catch { return 'auto' }
  })

  const applyTheme = (t: string) => {
    setTheme(t)
    try { localStorage.setItem('comex:theme', t) } catch { /* sin almacenamiento */ }
    if (t === 'auto') document.documentElement.removeAttribute('data-theme')
    else document.documentElement.setAttribute('data-theme', t)
  }

  const exportJson = () => {
    const blob = new Blob([JSON.stringify(progress, null, 2)], { type: 'application/json' })
    const a = document.createElement('a')
    a.href = URL.createObjectURL(blob)
    a.download = `comex-uy-progreso-${new Date().toISOString().slice(0, 10)}.json`
    a.click()
    URL.revokeObjectURL(a.href)
  }

  // Actividad de las últimas 12 semanas
  const days = Array.from({ length: 84 }, (_, k) => {
    const d = new Date()
    d.setDate(d.getDate() - (83 - k))
    const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
    return { key, n: progress.activity[key] ?? 0 }
  })

  return (
    <div className="page-narrow">
      <h1>Mi progreso</h1>

      <section className="sheet pad stack" style={{ marginTop: 18, gap: 10 }}>
        <h3>Cuenta</h3>
        {user ? (
          <>
            <p style={{ margin: 0 }}>Entraste como <strong>{user.email}</strong>. Tu avance se guarda en la nube y en este dispositivo.</p>
            <p className="small muted" style={{ margin: 0 }}>Estado: {sync === 'synced' ? 'sincronizado' : sync === 'offline' ? 'sin conexión (se sube al volver la red)' : sync === 'error' ? 'error de sincronización' : 'sincronizando'}</p>
            <button className="btn" style={{ alignSelf: 'flex-start' }} onClick={() => void signOut()}>Cerrar sesión</button>
          </>
        ) : (
          <>
            <p style={{ margin: 0 }}>Estás usando la app sin cuenta: el avance queda solo en este navegador. Entrá con Google para tenerlo en cualquier dispositivo; lo que ya hiciste se suma a tu cuenta.</p>
            <button className="btn btn-primary" style={{ alignSelf: 'flex-start' }} onClick={() => signIn().catch(() => setMsg('No se pudo iniciar sesión.'))}>
              <Icon name="user" size={16} /> Entrar con Google
            </button>
          </>
        )}
      </section>

      <div className="stat-row" style={{ marginTop: 18 }}>
        <div className="sheet stat"><b>{g.lessonsDone}/{g.lessonsTotal}</b><span>Lecciones</span></div>
        <div className="sheet stat"><b>{g.answered}</b><span>Preguntas respondidas</span></div>
        <div className="sheet stat"><b>{pct(g.accuracy)}</b><span>Aciertos</span></div>
        <div className="sheet stat"><b>{g.cardsTotal - g.cardsNew}/{g.cardsTotal}</b><span>Tarjetas vistas</span></div>
      </div>

      <div className="section-head"><h2>Actividad</h2><span className="small muted">últimas 12 semanas · racha de {g.streak} {g.streak === 1 ? 'día' : 'días'}</span></div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gridAutoFlow: 'column', gridTemplateRows: 'repeat(7, 1fr)', gap: 3, maxWidth: 420 }} aria-label="Días con actividad">
        {days.map((d) => (
          <span
            key={d.key}
            title={`${d.key}: ${d.n} acciones`}
            style={{
              aspectRatio: '1',
              borderRadius: 3,
              background: d.n === 0 ? 'var(--sheet-2)' : d.n < 10 ? 'color-mix(in srgb, var(--harbor) 35%, var(--sheet))' : d.n < 30 ? 'color-mix(in srgb, var(--harbor) 65%, var(--sheet))' : 'var(--harbor)',
            }}
          />
        ))}
      </div>

      <div className="section-head"><h2>Por módulo</h2></div>
      <div className="table-wrap">
        <table className="calc-table">
          <thead><tr><th>Módulo</th><th className="num">Lecciones</th><th className="num">Preguntas</th><th className="num">Aciertos</th></tr></thead>
          <tbody>
            {modules.map((m) => {
              const s = moduleStats(progress, m.id)
              return (
                <tr key={m.id}>
                  <td><Link to={`/modulo/${m.id}`}>{m.number}. {m.short}</Link></td>
                  <td className="num">{s.lessonsDone}/{s.lessonsTotal}</td>
                  <td className="num">{s.answered}/{s.questionsTotal}</td>
                  <td className="num">{pct(s.accuracy)}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

      <div className="section-head"><h2>Ajustes</h2></div>
      <div className="sheet pad stack" style={{ gap: 16 }}>
        <div>
          <div className="small muted" style={{ marginBottom: 6 }}>Apariencia</div>
          <div className="row" role="group" aria-label="Tema">
            {([['auto', 'Automático'], ['light', 'Claro'], ['dark', 'Oscuro']] as const).map(([t, label]) => (
              <button key={t} className="chip" aria-pressed={theme === t} onClick={() => applyTheme(t)}>{label}</button>
            ))}
          </div>
        </div>
        <div>
          <div className="small muted" style={{ marginBottom: 6 }}>Copia de seguridad</div>
          <div className="row">
            <button className="btn" onClick={exportJson}><Icon name="download" size={16} /> Descargar mi progreso</button>
            <button className="btn" onClick={() => fileRef.current?.click()}><Icon name="upload" size={16} /> Importar una copia</button>
            <input
              ref={fileRef}
              type="file"
              accept="application/json,.json"
              hidden
              onChange={async (e) => {
                const f = e.target.files?.[0]
                if (!f) return
                try {
                  importProgress(JSON.parse(await f.text()))
                  setMsg('Copia importada: se sumó a tu progreso actual.')
                } catch {
                  setMsg('El archivo no es una copia válida de Comex UY.')
                }
                e.target.value = ''
              }}
            />
          </div>
        </div>
        <div>
          <div className="small muted" style={{ marginBottom: 6 }}>Empezar de nuevo</div>
          {confirmReset ? (
            <div className="row">
              <span className="small">Se borra todo tu avance{user ? ', también en la nube' : ''}. No se puede deshacer.</span>
              <button className="btn btn-sm" style={{ color: 'var(--rojo)', borderColor: 'var(--rojo)' }} onClick={() => { resetProgress(); setConfirmReset(false); setMsg('Progreso borrado.') }}>Borrar todo</button>
              <button className="btn btn-sm" onClick={() => setConfirmReset(false)}>Cancelar</button>
            </div>
          ) : (
            <button className="btn btn-sm" onClick={() => setConfirmReset(true)}>Borrar mi progreso</button>
          )}
        </div>
        {msg && <p className="small" role="status" style={{ margin: 0 }}>{msg}</p>}
      </div>

      <p className="small muted" style={{ marginTop: 24 }}>
        El contenido se armó con fuentes oficiales (DNA, IMPO, MEF, Uruguay XXI, LATU, ICC, MERCOSUR, ALADI) relevadas al 10 de octubre de 2026. Las normas cambian: ante una operación real, confirmá con el despachante o la fuente oficial.
      </p>
    </div>
  )
}
