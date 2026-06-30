import {
  IconChevronDown,
  IconSend,
  IconDots,
  IconPlus,
} from './Icons.jsx'
import { comments, participants } from '../data/mock.js'

function initials(name) {
  return name
    .split(' ')
    .map((w) => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
}

export default function RightPanel() {
  return (
    <aside className="rightpanel">
      <section className="panel comments-panel">
        <div className="panel-head">
          <h2>COMMENTAIRES</h2>
          <button className="filter">
            Tous <IconChevronDown size={14} />
          </button>
        </div>

        <div className="comments-list">
          {comments.map((c) => (
            <div key={c.id} className="comment">
              <div className="avatar sm" style={{ '--c': c.color }}>
                {initials(c.name)}
              </div>
              <div className="comment-body">
                <div className="comment-top">
                  <strong style={{ color: c.color }}>{c.name}</strong>
                  <span className="comment-time">{c.time}</span>
                  <span className="comment-ago">{c.ago}</span>
                </div>
                <p>{c.text}</p>
                <div className="comment-actions">
                  <button>Répondre</button>
                  {c.replies > 0 && (
                    <span className="reply-count">{c.replies}</span>
                  )}
                  <button className="comment-more">
                    <IconDots size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="comment-input">
          <input placeholder="Ajouter un commentaire..." />
          <button className="send">
            <IconSend size={16} />
          </button>
        </div>
      </section>

      <section className="panel participants-panel">
        <div className="panel-head">
          <h2>PARTICIPANTS (6)</h2>
          <span className="online">
            <i className="online-dot" /> En ligne
          </span>
        </div>

        <div className="participants-grid">
          {participants.map((p) => (
            <div key={p.id} className="participant">
              <div className="participant-thumb">
                {p.rec && (
                  <span className="rec-tag">
                    <i /> REC
                  </span>
                )}
              </div>
              <span className="participant-name">{p.name}</span>
            </div>
          ))}
        </div>

        <button className="invite">
          <IconPlus size={16} /> Inviter des participants
        </button>
      </section>
    </aside>
  )
}
