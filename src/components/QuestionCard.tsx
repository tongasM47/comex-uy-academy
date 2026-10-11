import { useEffect, useMemo, useState } from 'react'
import type { Question } from '../data/types'
import { RichText } from './RichText'
import { Icon } from './Icon'

/** Baraja las opciones manteniendo el rastro de la correcta */
export function shuffledOptions(q: Question, seed: number) {
  const idx = q.options.map((_, i) => i)
  let s = seed || 1
  for (let i = idx.length - 1; i > 0; i--) {
    s = (s * 9301 + 49297) % 233280
    const j = Math.floor((s / 233280) * (i + 1))
    ;[idx[i], idx[j]] = [idx[j], idx[i]]
  }
  return idx
}

interface Props {
  q: Question
  /** Modo examen: no muestra la corrección al responder */
  examMode?: boolean
  selected?: number | null
  onAnswer: (optionIndex: number, correct: boolean) => void
  /** Semilla para barajar opciones (estable por pregunta y sesión) */
  seed?: number
}

export function QuestionCard({ q, examMode = false, selected = null, onAnswer, seed = 7 }: Props) {
  const order = useMemo(() => shuffledOptions(q, seed + q.id.length * 31), [q, seed])
  const [picked, setPicked] = useState<number | null>(selected)
  useEffect(() => setPicked(selected), [q.id, selected])

  const answered = picked !== null && !examMode
  const correct = picked === q.answer

  return (
    <div>
      <div className="q-prompt"><RichText text={q.prompt} /></div>
      <div className="options" role="radiogroup" aria-label="Opciones">
        {order.map((oi, pos) => {
          let cls = ''
          if (examMode && picked === oi) cls = 'selected'
          if (answered) {
            if (oi === q.answer) cls = 'correct'
            else if (oi === picked) cls = 'wrong'
          }
          return (
            <button
              key={oi}
              role="radio"
              aria-checked={picked === oi}
              className={`option ${cls}`}
              disabled={answered}
              onClick={() => {
                setPicked(oi)
                onAnswer(oi, oi === q.answer)
              }}
            >
              <span className="opt-letter">{'ABCD'[pos]}</span>
              <span><RichText text={q.options[oi]} /></span>
              {answered && oi === q.answer ? <Icon name="checkCircle" size={18} /> : answered && oi === picked ? <Icon name="xCircle" size={18} /> : <span />}
            </button>
          )
        })}
      </div>
      {answered && (
        <div className={`feedback ${correct ? 'ok' : 'ko'}`} aria-live="polite">
          <div className="feedback-title">
            <Icon name={correct ? 'checkCircle' : 'xCircle'} size={18} />
            {correct ? 'Correcto' : 'Incorrecto'}
          </div>
          <RichText text={q.explanation} />
        </div>
      )}
    </div>
  )
}
