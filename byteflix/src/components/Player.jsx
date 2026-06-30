import SunsetScene from './SunsetScene.jsx'
import {
  IconPlay,
  IconStepFwd,
  IconFastForward,
  IconVolume,
  IconSettings,
  IconFullscreen,
  IconChevronDown,
} from './Icons.jsx'

export default function Player() {
  return (
    <div className="player">
      <div className="player-tabs">
        <button className="ptab active">LECTEUR</button>
        <button className="ptab">
          COMMENTAIRES <span className="tab-count">12</span>
        </button>
        <button className="ptab">FICHIERS</button>
        <button className="ptab">ACTIVITÉ</button>
      </div>

      <div className="screen">
        <SunsetScene />
        <div className="scanlines" />

        {/* on-frame annotations */}
        <div className="anno anno-orange" style={{ top: '22%', left: '23%' }}>
          <div className="anno-time">00:05:12</div>
          <div className="anno-text">
            Super plan mais couleur du van à ajuster ? <b>@Théo</b>
          </div>
          <span className="anno-arrow a-orange" />
        </div>

        <div className="anno anno-purple" style={{ top: '52%', left: '26%' }}>
          <div className="anno-time">00:08:47</div>
          <div className="anno-text">
            Transition trop rapide à mon avis <b>@Maya</b>
          </div>
          <span className="anno-arrow a-purple" />
        </div>

        <div className="anno anno-teal" style={{ top: '30%', right: '8%' }}>
          <div className="anno-time">00:12:03</div>
          <div className="anno-text">Ajouter le logo ici</div>
          <span className="anno-arrow a-teal" />
        </div>

        {/* dashed selection box around the logo region */}
        <div className="selection-box" />
        <div className="logo-stamp">
          <div className="logo-ring">☀</div>
          <div className="logo-word">Summer</div>
          <div className="logo-sub">VIBES</div>
        </div>

        {/* scrub bar */}
        <div className="scrub">
          <div className="scrub-track">
            <div className="scrub-fill" style={{ width: '40%' }}>
              <span className="scrub-knob" />
            </div>
          </div>
        </div>

        {/* controls overlaid at the bottom of the screen */}
        <div className="screen-controls">
          <div className="sc-left">
            <button className="sc-btn">
              <IconPlay size={18} />
            </button>
            <button className="sc-btn">
              <IconStepFwd size={18} />
            </button>
            <button className="sc-btn">
              <IconFastForward size={18} />
            </button>
            <span className="sc-time">00:12:03 / 00:30:45</span>
          </div>
          <div className="sc-right">
            <button className="sc-btn">
              <IconVolume size={18} />
            </button>
            <button className="sc-quality">
              1080p <IconChevronDown size={14} />
            </button>
            <button className="sc-btn">
              <IconSettings size={18} />
            </button>
            <span className="sc-divider" />
            <button className="sc-btn">
              <IconFullscreen size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
