import {
  IconRewind,
  IconStepBack,
  IconPlay,
  IconStepFwd,
  IconFastForward,
} from './Icons.jsx'

const levels = [
  '#5fbf5f', '#5fbf5f', '#5fbf5f', '#7fcf4f', '#a8d24a',
  '#cdd246', '#f0b429', '#f0b429', '#ef8b2c', '#e0552c',
]

function Meter() {
  return (
    <div className="meter">
      <div className="meter-row">
        <span className="meter-label">L</span>
        <div className="meter-leds">
          {levels.map((c, i) => (
            <span
              key={i}
              style={{ background: c, opacity: i < 7 ? 1 : 0.35 }}
            />
          ))}
        </div>
      </div>
      <div className="meter-row">
        <span className="meter-label">R</span>
        <div className="meter-leds">
          {levels.map((c, i) => (
            <span
              key={i}
              style={{ background: c, opacity: i < 5 ? 1 : 0.35 }}
            />
          ))}
        </div>
      </div>
      <div className="meter-scale">
        <span>-30</span>
        <span>-20</span>
        <span>-10</span>
        <span>-6</span>
        <span>-3</span>
        <span>0</span>
      </div>
    </div>
  )
}

export default function VhsDeck() {
  return (
    <div className="vhsdeck">
      <div className="deck-brand">
        <div className="deck-brand-name">BYTEFLIX</div>
        <div className="deck-brand-sub">UNDERGROUND STUDIO</div>
        <div className="deck-grille">
          {Array.from({ length: 24 }).map((_, i) => (
            <span key={i} />
          ))}
        </div>
        <div className="deck-brand-line">VIDEO REVIEW SYSTEM</div>
      </div>

      <div className="deck-transport">
        <button className="tbtn">
          <IconRewind size={20} />
        </button>
        <button className="tbtn">
          <IconStepBack size={20} />
        </button>
        <button className="tbtn play">
          <IconPlay size={22} />
          <span>PLAY</span>
        </button>
        <button className="tbtn">
          <IconStepFwd size={20} />
        </button>
        <button className="tbtn">
          <IconFastForward size={20} />
        </button>
        <button className="tbtn rec">
          <span className="rec-dot" /> REC
        </button>
      </div>

      <div className="deck-vhs">
        <div className="vhs-badge">VHS</div>
        <div className="vhs-hq">HQ</div>
      </div>

      <div className="deck-timecode">
        <div className="tc-label">TIME CODE</div>
        <div className="tc-value">00:12:03</div>
      </div>

      <Meter />
    </div>
  )
}
