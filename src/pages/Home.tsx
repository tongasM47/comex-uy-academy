import { Link } from 'react-router-dom'
import { modules, moduleById } from '../data'
import { useProgress } from '../lib/ProgressContext'
import { globalStats, moduleStats, nextUnfinished, pct, weakModules } from '../lib/stats'
import { Icon } from '../components/Icon'

export function Home() {
  const { progress, user } = useProgress()
  const g = globalStats(progress)
  const next = nextUnfinished(progress)
  const weak = weakModules(progress)
  const first = user?.displayName?.split(' ')[0]
  const fresh = g.lessonsDone === 0 && g.answered === 0

  return (
    <div className="page">
      <section className="hero">
        <div>
          <h1>{first ? `Hola, ${first}.` : 'Comercio exterior en Uruguay, de cero a la oficina.'}</h1>
          <p className="lede">
            {fresh
              ? 'Doce módulos con el temario completo, documentos que podés completar, calculadoras, tests y un simulador de entrevista. Empezá por la primera lección: está pensada para arrancar sin saber nada.'
              : `Llevás ${g.lessonsDone} de ${g.lessonsTotal} lecciones y ${g.answered} preguntas respondidas.`}
          </p>
        </div>
        {g.lessonsDone === g.lessonsTotal && (
          <span className="stamp big">LIBRADO<small>temario completo</small></span>
        )}
      </section>

      {next && (
        <section className="sheet pad next-up" aria-label="Seguir estudiando">
          <div style={{ flex: 1, minWidth: 220 }}>
            <div className="small muted">
              {fresh ? 'Primera lección' : 'Seguí donde quedaste'} · Módulo {moduleById[next.moduleId].number}: {moduleById[next.moduleId].short}
            </div>
            <h3 style={{ margin: '4px 0' }}>{next.title}</h3>
            <div className="small muted">{next.minutes} min de lectura</div>
          </div>
          <Link to={`/leccion/${next.id}`} className="btn btn-primary">
            {fresh ? 'Empezar' : 'Continuar'} <Icon name="chevronRight" size={16} />
          </Link>
        </section>
      )}

      {!fresh && (
        <>
          <div className="section-head"><h2>Tu avance</h2></div>
          <div className="stat-row">
            <div className="sheet stat"><b>{g.lessonsDone}/{g.lessonsTotal}</b><span>Lecciones terminadas</span></div>
            <div className="sheet stat"><b>{pct(g.accuracy)}</b><span>Aciertos en tests</span></div>
            <Link to="/flashcards" className="sheet stat" style={{ color: 'inherit', textDecoration: 'none' }}>
              <b>{g.cardsDue}</b><span>Tarjetas para repasar hoy</span>
            </Link>
            <div className="sheet stat"><b>{g.streak}</b><span>{g.streak === 1 ? 'Día seguido estudiando' : 'Días seguidos estudiando'}</span></div>
          </div>
        </>
      )}

      {weak.length > 0 && (
        <>
          <div className="section-head"><h2>Para reforzar</h2></div>
          <div className="grid-3">
            {weak.map(({ m, s }) => (
              <Link key={m.id} to={`/practica?modulo=${m.id}&solo=errores`} className="sheet pad" style={{ color: 'inherit', textDecoration: 'none' }}>
                <span className="stamp naranja" style={{ float: 'right', fontSize: '0.65rem' }}>A REVISAR</span>
                <div className="small muted">Módulo {m.number}</div>
                <h3>{m.short}</h3>
                <div className="small" style={{ marginTop: 6 }}>{pct(s.accuracy)} de aciertos · repasá tus errores</div>
              </Link>
            ))}
          </div>
        </>
      )}

      <div className="section-head"><h2>El temario</h2><span className="muted small">las 11 partes del curso más logística y empleo</span></div>
      <nav className="route" aria-label="Módulos">
        <ol>
          {modules.map((m) => {
            const s = moduleStats(progress, m.id)
            const done = s.lessonsDone === s.lessonsTotal && s.lessonsTotal > 0
            return (
              <li key={m.id}>
                <Link to={`/modulo/${m.id}`} className="leg">
                  <span className="leg-num">{m.number}</span>
                  <span style={{ flex: 1, minWidth: 0 }}>
                    <span className="leg-title">{m.title}</span>
                    <span className="small muted" style={{ display: 'block', marginTop: 2 }}>
                      {s.lessonsDone}/{s.lessonsTotal} lecciones{s.accuracy !== null ? ` · ${pct(s.accuracy)} aciertos` : ''}
                    </span>
                    <span className="bar"><span style={{ width: `${(s.lessonsDone / Math.max(1, s.lessonsTotal)) * 100}%` }} /></span>
                  </span>
                  {done && <span className="stamp verde">LIBRADO</span>}
                </Link>
              </li>
            )
          })}
        </ol>
      </nav>

      <div className="section-head"><h2>Para practicar</h2></div>
      <div className="grid-3">
        {[
          ['/documentos', 'doc', 'Documentos ilustrados', 'DUA, B/L, certificado de origen y ocho más, casilla por casilla. Podés completarlos vos.'],
          ['/herramientas', 'calculator', 'Calculadora de importación', 'Armá la liquidación de un DUA con las tasas vigentes en 2026.'],
          ['/casos', 'case', 'Casos prácticos', 'Situaciones de oficina resueltas paso a paso, con números.'],
          ['/entrevista', 'mic', 'Simulador de entrevista', 'Preguntas técnicas, situacionales y de trayectoria, con respuesta modelo.'],
        ].map(([to, icon, title, text]) => (
          <Link key={to} to={to} className="sheet pad stack" style={{ color: 'inherit', textDecoration: 'none', gap: 6 }}>
            <Icon name={icon} size={24} />
            <h3>{title}</h3>
            <span className="small muted">{text}</span>
          </Link>
        ))}
      </div>
    </div>
  )
}
