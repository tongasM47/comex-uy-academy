import { useEffect, useState, type ReactNode } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { Icon } from './Icon'
import { useProgress } from '../lib/ProgressContext'
import { flashcards } from '../data'

function BrandMark() {
  return (
    <svg className="brand-mark" width="36" height="36" viewBox="0 0 36 36" aria-hidden="true">
      <rect x="3" y="3" width="30" height="30" rx="5" fill="none" stroke="var(--stamp)" strokeWidth="2.5" transform="rotate(-6 18 18)" />
      <path d="M10 22h16l-2 4H12l-2-4Zm2-2v-5h12v5M15 15v-4h6v4" fill="none" stroke="var(--harbor)" strokeWidth="1.8" strokeLinejoin="round" transform="rotate(-6 18 18)" />
    </svg>
  )
}

const syncText = {
  local: 'Guardado en este dispositivo',
  syncing: 'Sincronizando…',
  synced: 'Sincronizado',
  offline: 'Sin conexión: se sube al volver la red',
  error: 'No se pudo sincronizar',
} as const

function Account() {
  const { user, sync, signIn } = useProgress()
  const [err, setErr] = useState('')
  if (!user) {
    return (
      <div className="stack" style={{ gap: 8 }}>
        <button
          className="btn btn-primary"
          onClick={() => signIn().catch(() => setErr('No se pudo iniciar sesión. Probá de nuevo.'))}
        >
          <Icon name="user" size={16} /> Entrar con Google
        </button>
        <span className="small muted">Para seguir tu avance en cualquier dispositivo.</span>
        {err && <span className="small" style={{ color: 'var(--rojo)' }}>{err}</span>}
      </div>
    )
  }
  return (
    <Link to="/progreso" className="row" style={{ gap: 10, textDecoration: 'none', color: 'inherit', flexWrap: 'nowrap' }}>
      {user.photoURL ? (
        <img src={user.photoURL} alt="" width={32} height={32} style={{ borderRadius: '50%' }} referrerPolicy="no-referrer" />
      ) : (
        <Icon name="user" size={28} />
      )}
      <span style={{ minWidth: 0 }}>
        <span style={{ display: 'block', fontWeight: 600, fontSize: '0.92rem', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
          {user.displayName ?? user.email}
        </span>
        <span className="small muted row" style={{ gap: 4, flexWrap: 'nowrap' }}>
          <Icon name={sync === 'offline' || sync === 'error' ? 'cloudOff' : 'cloud'} size={14} />
          {syncText[sync]}
        </span>
      </span>
    </Link>
  )
}

function useDueCount() {
  const { progress } = useProgress()
  const now = Date.now()
  return flashcards.filter((c) => progress.cards[c.id] && progress.cards[c.id].due <= now).length
}

export function Layout({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false)
  const loc = useLocation()
  const due = useDueCount()

  useEffect(() => {
    setOpen(false)
    window.scrollTo(0, 0)
  }, [loc.pathname])

  const link = (to: string, icon: string, label: string, extra?: ReactNode) => (
    <NavLink to={to} end={to === '/'}>
      <Icon name={icon} size={19} />
      {label}
      {extra}
    </NavLink>
  )

  return (
    <div className="app">
      <a href="#main" className="visually-hidden">Ir al contenido</a>
      <aside className={`sidebar ${open ? 'open' : ''}`} aria-label="Navegación principal">
        <Link to="/" className="brand">
          <BrandMark />
          <span>
            <span className="brand-name">Comex UY</span>
            <br />
            <span className="brand-sub">Comercio exterior en Uruguay</span>
          </span>
        </Link>
        <nav className="nav">
          {link('/', 'home', 'Inicio')}
          <div className="nav-group">Estudiar</div>
          {link('/temario', 'book', 'Temario')}
          {link('/documentos', 'doc', 'Documentos ilustrados')}
          {link('/herramientas', 'tool', 'Herramientas')}
          {link('/podcasts', 'headphones', 'Podcasts')}
          <div className="nav-group">Practicar</div>
          {link('/flashcards', 'cards', 'Flashcards', due > 0 ? <span className="badge badge-stamp">{due}</span> : null)}
          {link('/practica', 'quiz', 'Tests por tema')}
          {link('/examen', 'timer', 'Examen')}
          {link('/casos', 'case', 'Casos prácticos')}
          {link('/entrevista', 'mic', 'Simulador de entrevista')}
          <div className="nav-group">Consultar</div>
          {link('/glosario', 'search', 'Glosario')}
          {link('/progreso', 'star', 'Mi progreso')}
        </nav>
        <div className="sidebar-foot"><Account /></div>
      </aside>

      <div style={{ flex: 1, minWidth: 0 }}>
        <header className="topbar">
          <button className="btn btn-ghost btn-sm" onClick={() => setOpen(true)} aria-label="Abrir menú">
            <Icon name="menu" size={22} />
          </button>
          <Link to="/" className="row" style={{ gap: 8, textDecoration: 'none', color: 'inherit' }}>
            <BrandMark />
            <span className="brand-name">Comex UY</span>
          </Link>
        </header>
        {open && <button className="visually-hidden" onClick={() => setOpen(false)}>Cerrar menú</button>}
        {open && (
          <div
            onClick={() => setOpen(false)}
            style={{ position: 'fixed', inset: 0, zIndex: 35 }}
            aria-hidden="true"
          />
        )}
        <main id="main" className="main">{children}</main>
      </div>

      <nav className="bottombar" aria-label="Accesos rápidos">
        <NavLink to="/" end><Icon name="home" size={22} />Inicio</NavLink>
        <NavLink to="/temario"><Icon name="book" size={22} />Temario</NavLink>
        <NavLink to="/flashcards"><Icon name="cards" size={22} />Repaso</NavLink>
        <NavLink to="/practica"><Icon name="quiz" size={22} />Tests</NavLink>
        <NavLink to="/progreso"><Icon name="star" size={22} />Progreso</NavLink>
      </nav>
    </div>
  )
}
