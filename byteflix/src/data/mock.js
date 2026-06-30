export const navItems = [
  { id: 'dashboard', label: 'Tableau de bord', icon: 'IconDashboard' },
  { id: 'projects', label: 'Mes projets', icon: 'IconProjects' },
  { id: 'videos', label: 'Vidéos', icon: 'IconVideo' },
  { id: 'reviews', label: 'Revues', icon: 'IconReviews', active: true },
  { id: 'shares', label: 'Partages', icon: 'IconShares' },
  { id: 'analytics', label: 'Analytiques', icon: 'IconAnalytics' },
  { id: 'settings', label: 'Paramètres', icon: 'IconSettings' },
]

export const comments = [
  {
    id: 1,
    name: 'Théo Martin',
    color: '#e8742c',
    time: '00:05:12',
    ago: 'il y a 10 min',
    text: 'Super plan mais couleur du van à ajuster ?',
    replies: 2,
  },
  {
    id: 2,
    name: 'Maya Leroy',
    color: '#9b6cff',
    time: '00:08:47',
    ago: 'il y a 8 min',
    text: 'Transition trop rapide à mon avis',
    replies: 0,
  },
  {
    id: 3,
    name: 'Ana Dupont',
    color: '#3fb9a8',
    time: '00:12:03',
    ago: 'il y a 5 min',
    text: 'Ajouter le logo ici',
    replies: 1,
  },
]

export const participants = [
  { id: 1, name: 'Ana D.', rec: false },
  { id: 2, name: 'Théo M.', rec: true },
  { id: 3, name: 'Maya L.', rec: false },
  { id: 4, name: 'Lucas P.', rec: true },
  { id: 5, name: 'Sarah B.', rec: false },
  { id: 6, name: 'Thomas G.', rec: true },
]

export const annotations = [
  { id: 1, t: 5, color: '#e8742c' },
  { id: 2, t: 8, color: '#9b6cff' },
  { id: 3, t: 12, color: '#3fb9a8' },
  { id: 4, t: 18, color: '#f0b429' },
  { id: 5, t: 25, color: '#5fbf5f' },
]

export const commentMarks = [4, 9, 13, 18, 25]

export const chapters = [
  { label: 'Intro', time: '00:00', span: 4 },
  { label: 'Scène plage', time: '00:04', span: 7 },
  { label: 'Route côtière', time: '00:11', span: 7 },
  { label: 'Coucher de soleil', time: '00:18', span: 10 },
  { label: 'Fin', time: '00:28', span: 2 },
]

export const toolColors = ['#e8742c', '#9b6cff', '#3fb9a8', '#f0b429', '#5fbf5f']
