import { Link } from 'react-router-dom'
import type { Block } from '../data/types'
import { documents } from '../data'
import { RichText } from './RichText'
import { Icon } from './Icon'
import { DocumentViewer } from './DocumentViewer'
import { ToolEmbed, toolTitles } from '../tools'

const calloutIcon = { info: 'info', warn: 'warn', tip: 'bulb', uy: 'flag' } as const
const calloutDefault = { info: 'Para tener en cuenta', warn: 'Conviene confirmarlo', tip: 'Consejo', uy: 'En Uruguay' }

export function BlockView({ block }: { block: Block }) {
  switch (block.type) {
    case 'p':
      return <p><RichText text={block.text} /></p>
    case 'list': {
      const items = block.items.map((it, i) => <li key={i}><RichText text={it} /></li>)
      return block.ordered ? <ol>{items}</ol> : <ul>{items}</ul>
    }
    case 'table':
      return (
        <div className="table-wrap" tabIndex={0}>
          <table>
            {block.caption && <caption><RichText text={block.caption} /></caption>}
            <thead>
              <tr>{block.headers.map((h, i) => <th key={i} scope="col"><RichText text={h} /></th>)}</tr>
            </thead>
            <tbody>
              {block.rows.map((r, i) => (
                <tr key={i}>{r.map((c, j) => <td key={j}><RichText text={c} /></td>)}</tr>
              ))}
            </tbody>
          </table>
        </div>
      )
    case 'callout':
      return (
        <aside className={`callout ${block.tone}`}>
          <div className="callout-title">
            <Icon name={calloutIcon[block.tone]} size={18} />
            {block.title ?? calloutDefault[block.tone]}
          </div>
          <p><RichText text={block.text} /></p>
        </aside>
      )
    case 'steps':
      return (
        <ol className="steps">
          {block.items.map((s, i) => (
            <li key={i}>
              <b><RichText text={s.title} /></b>
              <RichText text={s.text} />
            </li>
          ))}
        </ol>
      )
    case 'eli5':
      return (
        <div className="eli5">
          <span className="eli5-tag" aria-label="Explicado fácil">ELI5</span>
          <p><RichText text={block.text} /></p>
        </div>
      )
    case 'example':
      return (
        <div className="example">
          <div className="example-head"><RichText text={block.title} /></div>
          <div className="example-body"><RichText text={block.text} /></div>
        </div>
      )
    case 'doc': {
      const d = documents[block.docId]
      if (!d) return null
      return (
        <div className="embed">
          <div className="embed-label">
            <Icon name="doc" size={16} /> Documento ilustrado: {d.title}
            <span className="spacer" />
            <Link to={`/documentos/${d.id}`}>Abrir en pantalla completa</Link>
          </div>
          <DocumentViewer doc={d} compact />
        </div>
      )
    }
    case 'tool':
      return (
        <div className="embed">
          <div className="embed-label">
            <Icon name="tool" size={16} /> Herramienta: {toolTitles[block.toolId]}
          </div>
          <ToolEmbed id={block.toolId} />
        </div>
      )
  }
}

export function Blocks({ blocks }: { blocks: Block[] }) {
  return <>{blocks.map((b, i) => <BlockView key={i} block={b} />)}</>
}
