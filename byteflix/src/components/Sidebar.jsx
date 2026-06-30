import * as Icons from './Icons.jsx'
import { navItems } from '../data/mock.js'

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="brand">
        <div className="brand-logo">BYTEFLIX</div>
        <div className="brand-sub">UNDERGROUND STUDIO</div>
      </div>

      {/* little VHS deck readout */}
      <div className="deck-mini">
        <div className="deck-mini-top">
          <span className="deck-sp">SP</span>
          <span className="deck-tc">00:00:00</span>
        </div>
        <div className="deck-mini-bars">
          {Array.from({ length: 6 }).map((_, i) => (
            <span key={i} />
          ))}
        </div>
      </div>

      <nav className="nav">
        {navItems.map((item) => {
          const Icon = Icons[item.icon]
          return (
            <a
              key={item.id}
              className={'nav-item' + (item.active ? ' active' : '')}
              href="#"
            >
              <Icon size={18} />
              <span>{item.label}</span>
            </a>
          )
        })}
      </nav>

      <div className="active-project">
        <div className="ap-label">PROJET ACTIF</div>
        <button className="ap-select">
          Campagne Été 2026
          <Icons.IconChevronDown size={16} />
        </button>
        <div className="ap-thumb">
          <div className="ap-thumb-img" />
        </div>
        <div className="ap-meta">
          <strong>Version 3</strong>
          <span>Modifiée il y a 2h</span>
        </div>
      </div>

      <div className="storage">
        <div className="storage-head">
          <span>STOCKAGE</span>
          <span>68%</span>
        </div>
        <div className="storage-bar">
          <div className="storage-fill" style={{ width: '68%' }} />
        </div>
        <div className="storage-meta">332 Go / 500 Go</div>
      </div>

      <div className="profile">
        <div className="avatar" data-color="#7a6">AD</div>
        <div className="profile-meta">
          <strong>Ana Dupont</strong>
          <span>Administratrice</span>
        </div>
      </div>
    </aside>
  )
}
