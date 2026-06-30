import {
  IconCinema,
  IconUsers,
  IconBell,
  IconLock,
} from './Icons.jsx'

export default function TopBar() {
  return (
    <header className="topbar">
      <div className="topbar-left">
        <nav className="breadcrumb">
          <span>REVUES</span>
          <i>›</i>
          <span>CAMPAGNE ÉTÉ 2026</span>
          <i>›</i>
          <span className="crumb-current">VERSION 3</span>
        </nav>
        <div className="title-row">
          <h1>Campagne Été 2026 — Version 3</h1>
          <span className="badge-review">EN REVUE</span>
        </div>
      </div>

      <div className="topbar-right">
        <button className="btn ghost">
          <IconCinema size={18} />
          MODE CINÉMA
        </button>
        <button className="icon-pill">
          <IconUsers size={18} />
          <span>6</span>
        </button>
        <button className="icon-pill bell">
          <IconBell size={18} />
          <span className="dot-badge">3</span>
        </button>
        <button className="btn primary">
          <IconLock size={16} />
          PARTAGER
        </button>
      </div>
    </header>
  )
}
