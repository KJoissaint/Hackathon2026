// Lightweight inline SVG icon set. Each accepts standard svg props.
const S = ({ children, size = 18, ...p }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...p}
  >
    {children}
  </svg>
)

export const IconDashboard = (p) => (
  <S {...p}>
    <line x1="6" y1="20" x2="6" y2="12" />
    <line x1="12" y1="20" x2="12" y2="6" />
    <line x1="18" y1="20" x2="18" y2="14" />
  </S>
)
export const IconProjects = (p) => (
  <S {...p}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M3 9h18" />
  </S>
)
export const IconVideo = (p) => (
  <S {...p}>
    <rect x="2" y="6" width="14" height="12" rx="2" />
    <path d="m16 10 6-3v10l-6-3" />
  </S>
)
export const IconReviews = (p) => (
  <S {...p}>
    <rect x="3" y="4" width="18" height="16" rx="2" />
    <path d="M7 9h6M7 13h10" />
  </S>
)
export const IconShares = (p) => (
  <S {...p}>
    <circle cx="6" cy="6" r="2.4" />
    <circle cx="18" cy="6" r="2.4" />
    <circle cx="12" cy="18" r="2.4" />
    <path d="M7.6 7.6 11 16M16.4 7.6 13 16" />
  </S>
)
export const IconAnalytics = (p) => (
  <S {...p}>
    <path d="M4 19V5" />
    <path d="M4 19h16" />
    <path d="m7 14 3-4 3 2 4-6" />
  </S>
)
export const IconSettings = (p) => (
  <S {...p}>
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.6 1.6 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.6 1.6 0 0 0-2.7 1.1V21a2 2 0 1 1-4 0v-.1A1.6 1.6 0 0 0 8 19.4a1.6 1.6 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1A1.6 1.6 0 0 0 4 15H3.9a2 2 0 1 1 0-4H4a1.6 1.6 0 0 0 1.1-2.7l-.1-.1A2 2 0 1 1 7.8 5.4l.1.1A1.6 1.6 0 0 0 10 5.6V5a2 2 0 1 1 4 0v.1A1.6 1.6 0 0 0 16 6.6a1.6 1.6 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1A1.6 1.6 0 0 0 20 11h.1a2 2 0 1 1 0 4H20a1.6 1.6 0 0 0-.6.0Z" />
  </S>
)
export const IconBell = (p) => (
  <S {...p}>
    <path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
    <path d="M13.7 21a2 2 0 0 1-3.4 0" />
  </S>
)
export const IconUsers = (p) => (
  <S {...p}>
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.9" />
    <path d="M16 3.1a4 4 0 0 1 0 7.8" />
  </S>
)
export const IconLock = (p) => (
  <S {...p}>
    <rect x="4" y="11" width="16" height="9" rx="2" />
    <path d="M8 11V8a4 4 0 0 1 8 0v3" />
  </S>
)
export const IconCinema = (p) => (
  <S {...p}>
    <rect x="2" y="4" width="20" height="13" rx="2" />
    <path d="M8 21h8M12 17v4" />
  </S>
)
export const IconPlay = (p) => (
  <S {...p}>
    <polygon points="6 4 20 12 6 20 6 4" fill="currentColor" stroke="none" />
  </S>
)
export const IconSkip = (p) => (
  <S {...p}>
    <polygon points="5 4 14 12 5 20 5 4" fill="currentColor" stroke="none" />
    <line x1="18" y1="5" x2="18" y2="19" />
  </S>
)
export const IconFastForward = (p) => (
  <S {...p}>
    <polygon points="3 5 11 12 3 19 3 5" fill="currentColor" stroke="none" />
    <polygon points="12 5 20 12 12 19 12 5" fill="currentColor" stroke="none" />
  </S>
)
export const IconRewind = (p) => (
  <S {...p}>
    <polygon points="21 5 13 12 21 19 21 5" fill="currentColor" stroke="none" />
    <polygon points="12 5 4 12 12 19 12 5" fill="currentColor" stroke="none" />
  </S>
)
export const IconStepBack = (p) => (
  <S {...p}>
    <polygon points="19 4 10 12 19 20 19 4" fill="currentColor" stroke="none" />
    <line x1="6" y1="5" x2="6" y2="19" />
  </S>
)
export const IconStepFwd = (p) => (
  <S {...p}>
    <polygon points="5 4 14 12 5 20 5 4" fill="currentColor" stroke="none" />
    <line x1="18" y1="5" x2="18" y2="19" />
  </S>
)
export const IconVolume = (p) => (
  <S {...p}>
    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" fill="currentColor" stroke="none" />
    <path d="M15.5 8.5a5 5 0 0 1 0 7M18.5 6a8 8 0 0 1 0 12" />
  </S>
)
export const IconFullscreen = (p) => (
  <S {...p}>
    <path d="M8 3H5a2 2 0 0 0-2 2v3M16 3h3a2 2 0 0 1 2 2v3M21 16v3a2 2 0 0 1-2 2h-3M3 16v3a2 2 0 0 0 2 2h3" />
  </S>
)
export const IconChevronDown = (p) => (
  <S {...p}>
    <polyline points="6 9 12 15 18 9" />
  </S>
)
export const IconSend = (p) => (
  <S {...p}>
    <path d="M22 2 11 13" />
    <path d="M22 2 15 22l-4-9-9-4 20-7Z" />
  </S>
)
export const IconPlus = (p) => (
  <S {...p}>
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </S>
)
export const IconCursor = (p) => (
  <S {...p}>
    <path d="m4 3 7 17 2.5-6.5L20 11 4 3Z" fill="currentColor" />
  </S>
)
export const IconPencil = (p) => (
  <S {...p}>
    <path d="M17 3a2.8 2.8 0 0 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3Z" />
  </S>
)
export const IconArrow = (p) => (
  <S {...p}>
    <line x1="5" y1="19" x2="19" y2="5" />
    <polyline points="11 5 19 5 19 13" />
  </S>
)
export const IconSquare = (p) => (
  <S {...p}>
    <rect x="4" y="4" width="16" height="16" rx="1.5" />
  </S>
)
export const IconCircle = (p) => (
  <S {...p}>
    <circle cx="12" cy="12" r="8.5" />
  </S>
)
export const IconText = (p) => (
  <S {...p}>
    <path d="M5 6V5h14v1M12 5v14M9 19h6" />
  </S>
)
export const IconUndo = (p) => (
  <S {...p}>
    <path d="M3 7v6h6" />
    <path d="M3 13a9 9 0 1 0 3-7L3 9" />
  </S>
)
export const IconRedo = (p) => (
  <S {...p}>
    <path d="M21 7v6h-6" />
    <path d="M21 13a9 9 0 1 1-3-7l3 3" />
  </S>
)
export const IconTrash = (p) => (
  <S {...p}>
    <path d="M3 6h18M8 6V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
  </S>
)
export const IconComment = (p) => (
  <S {...p}>
    <path d="M21 11.5a8.4 8.4 0 0 1-8.5 8.5 9 9 0 0 1-4-.9L3 21l1.9-5.5a8.4 8.4 0 0 1-.9-4A8.4 8.4 0 0 1 12.5 3 8.4 8.4 0 0 1 21 11.5Z" />
  </S>
)
export const IconDots = (p) => (
  <S {...p}>
    <circle cx="12" cy="5" r="1.4" fill="currentColor" />
    <circle cx="12" cy="12" r="1.4" fill="currentColor" />
    <circle cx="12" cy="19" r="1.4" fill="currentColor" />
  </S>
)
export const IconCassette = ({ size = 28, color = '#e8742c' }) => (
  <svg width={size} height={size * 0.72} viewBox="0 0 40 29" fill="none">
    <rect x="1" y="1" width="38" height="27" rx="3" stroke={color} strokeWidth="1.6" />
    <rect x="5" y="5" width="30" height="9" rx="1.5" fill={color} opacity="0.18" stroke={color} strokeWidth="1" />
    <circle cx="14" cy="20" r="3.2" stroke={color} strokeWidth="1.4" />
    <circle cx="26" cy="20" r="3.2" stroke={color} strokeWidth="1.4" />
    <line x1="17" y1="20" x2="23" y2="20" stroke={color} strokeWidth="1.4" />
  </svg>
)
