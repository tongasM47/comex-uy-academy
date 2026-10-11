import { Link, useParams } from 'react-router-dom'
import { lessonsOf, modules, moduleById, questionsOf, flashcards, cases } from '../data'
import type { ModuleId } from '../data/types'
import { useProgress } from '../lib/ProgressContext'
import { moduleStats, pct } from '../lib/stats'
import { Icon } from '../components/Icon'
import { podcasts } from '../data/podcasts'

export function Temario() {
  const { progress } = useProgress()
  return (
    <div className="page-narrow">
      <h1>Temario</h1>
      <p className="lede" style={{ marginTop: 8 }}>
        Sigue el programa del curso de comercio exterior de la AHK Academy, parte por parte, completado con la normativa uruguaya vigente a octubre de 2026.
      </p>
      {modules.map((m) => {
        const s = moduleStats(progress, m.id)
        return (
          <section key={m.id} style={{ marginTop: 30 }}>
            <Link to={`/modulo/${m.id}`} className="row" style={{ textDecoration: 'none', color: 'inherit', alignItems: 'baseline' }}>
              <span className="leg-num">{m.number}</span>
              <h2 style={{ fontSize: '1.35rem' }}>{m.title}</h2>
              <span className="spacer" />
              <span className="small muted">{s.lessonsDone}/{s.lessonsTotal}</span>
            </Link>
            <ul className="lesson-list">
              {lessonsOf(m.id).map((l, i) => (
                <li key={l.id}>
                  <Link to={`/leccion/${l.id}`} className="lesson-item" style={{ gridTemplateColumns: '52px 1fr auto', padding: '10px 4px' }}>
                    <span className="lesson-item-num" style={{ fontSize: '1rem' }}>{m.number}.{i + 1}</span>
                    <span>{l.title}</span>
                    {progress.lessons[l.id]?.done ? <Icon name="checkCircle" size={18} title="Terminada" /> : <span className="small muted">{l.minutes} min</span>}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )
      })}
    </div>
  )
}

export function ModulePage() {
  const { id } = useParams()
  const { progress } = useProgress()
  const m = moduleById[id as ModuleId]
  if (!m) return <NotFound />
  const ls = lessonsOf(m.id)
  const s = moduleStats(progress, m.id)
  const nCards = flashcards.filter((c) => c.moduleId === m.id).length
  const nCases = cases.filter((c) => c.moduleId === m.id).length
  const nQ = questionsOf(m.id).length

  return (
    <div className="page-narrow">
      <div className="crumbs"><Link to="/temario">Temario</Link> / <span>Módulo {m.number}</span></div>
      <div className="row" style={{ alignItems: 'flex-start' }}>
        <div style={{ flex: 1, minWidth: 240 }}>
          <h1>{m.title}</h1>
          <p className="lede" style={{ marginTop: 8 }}>{m.description}</p>
        </div>
        {s.lessonsDone === s.lessonsTotal && <span className="stamp big verde stamp-in">LIBRADO</span>}
      </div>

      <div className="stat-row" style={{ margin: '18px 0' }}>
        <div className="sheet stat"><b>{s.lessonsDone}/{s.lessonsTotal}</b><span>Lecciones</span></div>
        <div className="sheet stat"><b>{s.answered}/{nQ}</b><span>Preguntas respondidas</span></div>
        <div className="sheet stat"><b>{pct(s.accuracy)}</b><span>Aciertos</span></div>
      </div>

      <ul className="lesson-list">
        {ls.map((l, i) => {
          const done = progress.lessons[l.id]?.done
          return (
            <li key={l.id}>
              <Link to={`/leccion/${l.id}`} className="lesson-item">
                <span className="lesson-item-num">{m.number}.{i + 1}</span>
                <span>
                  <span className="lesson-item-title">{l.title}</span>
                  <span className="small muted" style={{ display: 'block' }}>
                    {l.summary}
                  </span>
                  <span className="small muted">
                    {l.minutes} min · {l.eli5.length} explicaciones fáciles{podcasts[l.id] ? ' · con podcast' : ''}
                  </span>
                </span>
                {done ? <span className="stamp verde" style={{ fontSize: '0.7rem' }}>LEÍDA</span> : <Icon name="chevronRight" size={18} />}
              </Link>
            </li>
          )
        })}
      </ul>

      <div className="section-head"><h2>Practicá este módulo</h2></div>
      <div className="grid-3">
        <Link to={`/practica?modulo=${m.id}`} className="sheet pad" style={{ color: 'inherit', textDecoration: 'none' }}>
          <Icon name="quiz" size={22} />
          <h3 style={{ marginTop: 6 }}>Test del módulo</h3>
          <span className="small muted">{nQ} preguntas de opción múltiple</span>
        </Link>
        <Link to={`/flashcards?modulo=${m.id}`} className="sheet pad" style={{ color: 'inherit', textDecoration: 'none' }}>
          <Icon name="cards" size={22} />
          <h3 style={{ marginTop: 6 }}>Flashcards</h3>
          <span className="small muted">{nCards} tarjetas con repaso espaciado</span>
        </Link>
        {nCases > 0 && (
          <Link to={`/casos?modulo=${m.id}`} className="sheet pad" style={{ color: 'inherit', textDecoration: 'none' }}>
            <Icon name="case" size={22} />
            <h3 style={{ marginTop: 6 }}>Casos prácticos</h3>
            <span className="small muted">{nCases} {nCases === 1 ? 'caso' : 'casos'} para resolver</span>
          </Link>
        )}
      </div>
    </div>
  )
}

export function NotFound() {
  return (
    <div className="empty">
      <h1>No encontramos esa página</h1>
      <p>Puede que el enlace esté mal escrito o que la lección haya cambiado de lugar.</p>
      <Link to="/" className="btn btn-primary">Volver al inicio</Link>
    </div>
  )
}
