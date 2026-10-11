import { useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { lessonById, moduleById, lessonsOf, nextLesson, prevLesson, questions } from '../data'
import { podcasts, podcastUrl } from '../data/podcasts'
import { useProgress } from '../lib/ProgressContext'
import { Blocks } from '../components/Blocks'
import { RichText } from '../components/RichText'
import { Icon } from '../components/Icon'
import { QuestionCard } from '../components/QuestionCard'
import { NotFound } from './Study'
import { shuffle } from '../lib/stats'

export function LessonPage() {
  const { id = '' } = useParams()
  const l = lessonById[id]
  const { progress, markLesson, answerQuestion, markPodcast } = useProgress()
  const checkQs = useMemo(() => shuffle(questions.filter((q) => q.subtopicId === id)).slice(0, 3), [id])
  const [stamped, setStamped] = useState(false)

  if (!l) return <NotFound />
  const m = moduleById[l.moduleId]
  const idx = lessonsOf(l.moduleId).findIndex((x) => x.id === l.id)
  const done = !!progress.lessons[l.id]?.done
  const next = nextLesson(l.id)
  const prev = prevLesson(l.id)
  const pod = podcasts[l.id]

  return (
    <article className="lesson">
      <header>
        <div className="crumbs">
          <Link to="/temario">Temario</Link> / <Link to={`/modulo/${m.id}`}>Módulo {m.number}: {m.short}</Link>
        </div>
        <div className="small muted">Lección {m.number}.{idx + 1} · {l.minutes} min</div>
        <h1>{l.title}</h1>
        <p className="lede"><RichText text={l.summary} /></p>
        {pod ? (
          <div className="sheet pad stack" style={{ gap: 8, marginTop: 14 }}>
            <div className="row small">
              <Icon name="headphones" size={18} /> <strong>Podcast de esta lección</strong>
              {pod.duration && <span className="muted">{pod.duration}</span>}
            </div>
            <audio
              className="audio"
              controls
              preload="none"
              src={podcastUrl(pod)}
              onEnded={() => markPodcast(l.id, true)}
            />
          </div>
        ) : null}
      </header>

      <div className="prose">
        {l.sections.map((s, i) => (
          <section key={i}>
            <h2>{s.heading}</h2>
            <Blocks blocks={s.blocks} />
          </section>
        ))}

        {l.eli5.length > 0 && (
          <section>
            <h2>Explicado fácil</h2>
            <p className="muted">Lo mismo, sin tecnicismos y con ejemplos de todos los días.</p>
            {l.eli5.map((e, i) => (
              <div className="eli5" key={i}>
                <span className="eli5-tag" aria-hidden="true">ELI5</span>
                <div>
                  <b className="eli5-concept">{e.concept}</b>
                  <p><RichText text={e.text} /></p>
                </div>
              </div>
            ))}
          </section>
        )}

        <section>
          <h2>Lo que tenés que llevarte</h2>
          <ul className="keypoints">
            {l.keyPoints.map((k, i) => (
              <li key={i}><Icon name="check" size={16} /><span><RichText text={k} /></span></li>
            ))}
          </ul>
        </section>

        {checkQs.length > 0 && (
          <section>
            <h2>Comprobá lo que entendiste</h2>
            <div className="stack" style={{ gap: 18 }}>
              {checkQs.map((q) => (
                <div key={q.id} className="sheet pad">
                  <QuestionCard q={q} onAnswer={(_, ok) => answerQuestion(q.id, ok)} />
                </div>
              ))}
            </div>
          </section>
        )}

        {l.probableQuestions.length > 0 && (
          <section>
            <h2>Preguntas probables</h2>
            <p className="muted">Las que pueden aparecer en un examen o en una entrevista. Pensá tu respuesta antes de abrirlas.</p>
            {l.probableQuestions.map((pq, i) => (
              <details className="qa" key={i}>
                <summary><RichText text={pq.question} /></summary>
                <div className="qa-a"><RichText text={pq.answer} /></div>
              </details>
            ))}
          </section>
        )}

        {l.sources.length > 0 && (
          <section>
            <h2>Fuentes</h2>
            <ul className="sources">
              {l.sources.map((s, i) => (
                <li key={i}>
                  <a href={s.url} target="_blank" rel="noreferrer">{s.title}</a>
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>

      <footer className="lesson-foot">
        {done ? (
          <>
            <span className={`stamp verde ${stamped ? 'stamp-in' : ''}`}>LEÍDA</span>
            <button className="btn btn-ghost btn-sm" onClick={() => markLesson(l.id, false)}>Marcar como pendiente</button>
          </>
        ) : (
          <button
            className="btn btn-stamp"
            onClick={() => {
              markLesson(l.id, true)
              setStamped(true)
            }}
          >
            <Icon name="check" size={16} /> Marcar como leída
          </button>
        )}
        <span className="spacer" />
        {prev && (
          <Link to={`/leccion/${prev.id}`} className="btn">
            <Icon name="chevronLeft" size={16} /> Anterior
          </Link>
        )}
        {next && (
          <Link
            to={`/leccion/${next.id}`}
            className="btn btn-primary"
            onClick={() => {
              if (!done) markLesson(l.id, true)
            }}
          >
            Siguiente lección <Icon name="chevronRight" size={16} />
          </Link>
        )}
      </footer>
    </article>
  )
}
