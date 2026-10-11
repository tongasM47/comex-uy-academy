import { useEffect, useMemo, useState } from 'react'
import { interviewQuestions } from '../data'
import type { InterviewQuestion } from '../data/types'
import { useProgress } from '../lib/ProgressContext'
import { shuffle } from '../lib/stats'
import { RichText } from '../components/RichText'
import { Icon } from '../components/Icon'

type Cat = InterviewQuestion['category'] | 'todas'
const catLabel = { tecnica: 'Técnica', situacional: 'Situacional', conductual: 'Sobre vos' } as const
const ratingLabel = { 1: 'Me trabé', 2: 'Más o menos', 3: 'La respondí bien' } as const

export function Interview() {
  const { progress, rateInterview } = useProgress()
  const [cat, setCat] = useState<Cat>('todas')
  const [onlyWeak, setOnlyWeak] = useState(false)
  const [order, setOrder] = useState<InterviewQuestion[]>([])
  const [i, setI] = useState(0)
  const [answer, setAnswer] = useState('')
  const [revealed, setRevealed] = useState(false)
  const [timer, setTimer] = useState(false)
  const [secs, setSecs] = useState(120)

  const pool = useMemo(
    () =>
      interviewQuestions.filter(
        (q) => (cat === 'todas' || q.category === cat) && (!onlyWeak || (progress.interview[q.id]?.rating ?? 0) < 3),
      ),
    [cat, onlyWeak, progress.interview],
  )

  useEffect(() => {
    setOrder(shuffle(pool))
    setI(0)
    setAnswer('')
    setRevealed(false)
    // Solo al cambiar los filtros, no cada vez que se califica una respuesta
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cat, onlyWeak])

  const q = order[i]

  useEffect(() => {
    setSecs(120)
  }, [q?.id])
  useEffect(() => {
    if (!timer || revealed || !q) return
    const t = window.setInterval(() => setSecs((s) => Math.max(0, s - 1)), 1000)
    return () => window.clearInterval(t)
  }, [timer, revealed, q])

  const next = () => {
    setI((i + 1) % Math.max(1, order.length))
    setAnswer('')
    setRevealed(false)
  }

  const practiced = Object.keys(progress.interview).length
  const good = Object.values(progress.interview).filter((r) => r.rating === 3).length

  return (
    <div className="page-narrow">
      <h1>Simulador de entrevista</h1>
      <p className="lede" style={{ marginTop: 8 }}>
        Respondé como si tuvieras al entrevistador enfrente: en voz alta o por escrito. Después compará con la respuesta modelo y calificate con honestidad.
      </p>
      <p className="small muted">{practiced} de {interviewQuestions.length} preguntas practicadas · {good} bien resueltas</p>

      <div className="row" style={{ margin: '14px 0' }} role="group" aria-label="Tipo de pregunta">
        {(['todas', 'tecnica', 'situacional', 'conductual'] as const).map((c) => (
          <button key={c} className="chip" aria-pressed={cat === c} onClick={() => setCat(c)}>
            {c === 'todas' ? 'Todas' : catLabel[c]}
          </button>
        ))}
        <span className="spacer" />
        <label className="small row" style={{ gap: 6 }}>
          <input type="checkbox" checked={onlyWeak} onChange={(e) => setOnlyWeak(e.target.checked)} /> Solo las que no tengo firmes
        </label>
        <label className="small row" style={{ gap: 6 }}>
          <input type="checkbox" checked={timer} onChange={(e) => setTimer(e.target.checked)} /> 2 minutos por respuesta
        </label>
      </div>

      {!q ? (
        <div className="sheet pad empty">
          <span className="stamp verde">LISTO</span>
          <p style={{ marginTop: 12 }}>Ya respondiste bien todas las preguntas de este tipo. Desmarcá el filtro para repasarlas.</p>
        </div>
      ) : (
        <div className="sheet pad stack" style={{ gap: 14 }}>
          <div className="row">
            <span className="badge badge-stamp">{catLabel[q.category]}</span>
            <span className="small muted">Pregunta {i + 1} de {order.length}</span>
            <span className="spacer" />
            {timer && !revealed && (
              <span className={`timer ${secs <= 20 ? 'low' : ''}`}><Icon name="timer" size={16} /> {Math.floor(secs / 60)}:{String(secs % 60).padStart(2, '0')}</span>
            )}
          </div>
          <h2 style={{ fontSize: '1.4rem' }}>“{q.question}”</h2>
          {!revealed ? (
            <>
              <label className="field">
                Tu respuesta (opcional, queda solo en esta pantalla)
                <textarea value={answer} onChange={(e) => setAnswer(e.target.value)} placeholder="Escribí los puntos clave o respondé en voz alta." />
              </label>
              <div className="row">
                <button className="btn btn-primary" onClick={() => setRevealed(true)}>Ver respuesta modelo</button>
                <button className="btn btn-ghost" onClick={next}>Saltear</button>
              </div>
            </>
          ) : (
            <>
              <div className="callout tip" style={{ margin: 0 }}>
                <div className="callout-title"><Icon name="mic" size={18} />Respuesta modelo</div>
                <p style={{ whiteSpace: 'pre-line' }}><RichText text={q.modelAnswer} /></p>
              </div>
              {q.tips.length > 0 && (
                <ul className="keypoints">
                  {q.tips.map((t, k) => (
                    <li key={k}><Icon name="bulb" size={16} /><span><RichText text={t} /></span></li>
                  ))}
                </ul>
              )}
              <div className="row" role="group" aria-label="¿Cómo te fue?">
                <span className="small">¿Cómo te fue?</span>
                {([1, 2, 3] as const).map((r) => (
                  <button
                    key={r}
                    className={`btn btn-sm ${r === 3 ? 'btn-primary' : ''}`}
                    onClick={() => {
                      rateInterview(q.id, r)
                      next()
                    }}
                  >
                    {ratingLabel[r]}
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      )}
    </div>
  )
}
