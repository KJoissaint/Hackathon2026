import * as Icons from './Icons.jsx'
import {
  annotations,
  commentMarks,
  chapters,
  toolColors,
} from '../data/mock.js'

const TOTAL = 30 // minutes shown on the ruler
const pct = (t) => `${(t / TOTAL) * 100}%`

const ticks = [0, 5, 10, 15, 20, 25, 30]

export default function Timeline() {
  return (
    <div className="timeline">
      {/* ruler */}
      <div className="tl-ruler">
        <div className="tl-rowlabel" />
        <div className="tl-track ruler-track">
          {ticks.map((t) => (
            <span key={t} className="tick" style={{ left: pct(t) }}>
              {String(Math.floor(t)).padStart(2, '0')}:00
            </span>
          ))}
          <span className="playhead" style={{ left: pct(12) }} />
        </div>
      </div>

      <div className="tl-row">
        <div className="tl-rowlabel">ANNOTATIONS</div>
        <div className="tl-track">
          {annotations.map((a) => (
            <div key={a.id} className="cassette" style={{ left: pct(a.t) }}>
              <Icons.IconCassette size={34} color={a.color} />
            </div>
          ))}
        </div>
      </div>

      <div className="tl-row">
        <div className="tl-rowlabel">COMMENTAIRES</div>
        <div className="tl-track">
          {commentMarks.map((t, i) => (
            <div key={i} className="cmark" style={{ left: pct(t) }}>
              <Icons.IconComment size={18} />
            </div>
          ))}
        </div>
      </div>

      <div className="tl-row">
        <div className="tl-rowlabel">CHAPITRES</div>
        <div className="tl-track chapter-track">
          {chapters.map((c, i) => (
            <div
              key={i}
              className="chapter"
              style={{ width: `${(c.span / TOTAL) * 100}%` }}
            >
              <strong>{c.label}</strong>
              <span>{c.time}</span>
            </div>
          ))}
        </div>
      </div>

      {/* tool row */}
      <div className="tl-tools">
        <button className="tool-add">
          <Icons.IconPlus size={16} /> Ajouter une annotation
        </button>

        <div className="tool-group">
          <button className="tool active">
            <Icons.IconCursor size={16} />
          </button>
          <button className="tool">
            <Icons.IconPencil size={16} />
          </button>
          <button className="tool">
            <Icons.IconArrow size={16} />
          </button>
          <button className="tool">
            <Icons.IconSquare size={16} />
          </button>
          <button className="tool">
            <Icons.IconCircle size={16} />
          </button>
          <button className="tool">
            <Icons.IconText size={16} />
          </button>
        </div>

        <div className="tool-group">
          <button className="tool">
            <Icons.IconUndo size={16} />
          </button>
          <button className="tool">
            <Icons.IconRedo size={16} />
          </button>
          <button className="tool">
            <Icons.IconTrash size={16} />
          </button>
        </div>

        <div className="swatches">
          {toolColors.map((c) => (
            <span key={c} className="swatch" style={{ background: c }} />
          ))}
          <button className="swatch add">
            <Icons.IconPlus size={12} />
          </button>
        </div>
      </div>
    </div>
  )
}
