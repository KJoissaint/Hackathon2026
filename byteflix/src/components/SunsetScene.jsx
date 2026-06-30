// Self-contained SVG of the coastal-sunset van shot used as the video frame.
export default function SunsetScene() {
  return (
    <svg
      className="scene"
      viewBox="0 0 1000 560"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#5a3d6b" />
          <stop offset="35%" stopColor="#b8546a" />
          <stop offset="62%" stopColor="#e8894a" />
          <stop offset="100%" stopColor="#f6c66b" />
        </linearGradient>
        <radialGradient id="sun" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#fff3c4" />
          <stop offset="55%" stopColor="#ffd97a" />
          <stop offset="100%" stopColor="#ffb347" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="sea" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f3b65f" />
          <stop offset="100%" stopColor="#9a5b54" />
        </linearGradient>
        <linearGradient id="road" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#8a6f63" />
          <stop offset="100%" stopColor="#3a2a26" />
        </linearGradient>
      </defs>

      {/* sky + sun */}
      <rect width="1000" height="380" fill="url(#sky)" />
      <circle cx="780" cy="250" r="190" fill="url(#sun)" />
      <circle cx="780" cy="250" r="78" fill="#fff0bf" opacity="0.9" />

      {/* ocean on the right */}
      <rect x="560" y="300" width="440" height="120" fill="url(#sea)" opacity="0.95" />
      <g stroke="#ffe6a6" strokeWidth="2" opacity="0.5">
        <line x1="700" y1="330" x2="860" y2="330" />
        <line x1="660" y1="350" x2="900" y2="350" />
        <line x1="620" y1="372" x2="940" y2="372" />
      </g>

      {/* ground / road area */}
      <rect y="360" width="1000" height="200" fill="#6e4a3a" />
      <polygon points="0,420 560,400 380,560 0,560" fill="url(#road)" />
      <g stroke="#f4d98a" strokeWidth="6" strokeDasharray="26 22" opacity="0.8">
        <line x1="120" y1="560" x2="300" y2="430" />
      </g>

      {/* palm trees silhouettes on the left */}
      <g fill="#2c1d20">
        <Palm x={70} y={360} s={1.15} />
        <Palm x={150} y={360} s={0.85} />
        <Palm x={235} y={362} s={1.0} />
        <Palm x={20} y={360} s={0.7} />
      </g>

      {/* the van */}
      <g transform="translate(360 250)">
        <Van />
      </g>
    </svg>
  )
}

function Palm({ x, y, s }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${s})`}>
      <rect x="-4" y="-150" width="8" height="150" rx="3" />
      <g>
        {[-70, -40, -10, 20, 50].map((a, i) => (
          <path
            key={i}
            d="M0,-150 C30,-180 70,-175 95,-150 C65,-160 30,-158 0,-150 Z"
            transform={`rotate(${a} 0 -150)`}
          />
        ))}
      </g>
    </g>
  )
}

function Van() {
  return (
    <g>
      {/* body */}
      <rect x="0" y="40" width="320" height="120" rx="26" fill="#c9622a" />
      <rect x="0" y="92" width="320" height="20" fill="#e8e2d4" opacity="0.85" />
      {/* roof rack + cargo */}
      <rect x="40" y="22" width="240" height="20" rx="6" fill="#3a2a24" />
      <rect x="60" y="6" width="80" height="18" rx="4" fill="#7a5a3a" />
      <rect x="150" y="10" width="60" height="14" rx="3" fill="#9a6a3a" />
      {/* front cab */}
      <path d="M300 60 q34 6 40 44 l0 36 q0 12 -12 12 l-28 0 Z" fill="#b9551f" />
      {/* windshield + windows */}
      <rect x="20" y="56" width="120" height="34" rx="8" fill="#f7d28a" opacity="0.85" />
      <rect x="150" y="56" width="120" height="34" rx="8" fill="#f7d28a" opacity="0.85" />
      <path d="M306 64 q22 4 28 36 l-28 0 Z" fill="#f7d28a" opacity="0.85" />
      {/* split-window emblem circle */}
      <circle cx="312" cy="118" r="20" fill="#eadcc4" />
      <circle cx="312" cy="118" r="13" fill="#b9551f" />
      {/* wheels */}
      <circle cx="78" cy="162" r="30" fill="#1c1512" />
      <circle cx="78" cy="162" r="13" fill="#5b4a40" />
      <circle cx="262" cy="162" r="30" fill="#1c1512" />
      <circle cx="262" cy="162" r="13" fill="#5b4a40" />
    </g>
  )
}
