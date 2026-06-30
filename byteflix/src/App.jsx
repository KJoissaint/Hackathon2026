import Sidebar from './components/Sidebar.jsx'
import TopBar from './components/TopBar.jsx'
import Player from './components/Player.jsx'
import Timeline from './components/Timeline.jsx'
import RightPanel from './components/RightPanel.jsx'
import VhsDeck from './components/VhsDeck.jsx'

export default function App() {
  return (
    <div className="app-shell">
      <Sidebar />

      <main className="main">
        <TopBar />
        <div className="workspace">
          <div className="center-col">
            <Player />
            <Timeline />
          </div>
          <RightPanel />
        </div>
      </main>

      <VhsDeck />
    </div>
  )
}
