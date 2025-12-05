import { useState, useEffect } from 'react'
import LandingPage from './pages/LandingPage'
import MainApp from './pages/MainApp'

function App() {
  const [showLanding, setShowLanding] = useState(true)

  useEffect(() => {
    const hasVisited = localStorage.getItem('hasVisitedSanitas')
    if (hasVisited) {
      setShowLanding(false)
    }
  }, [])

  const handleEnterApp = () => {
    localStorage.setItem('hasVisitedSanitas', 'true')
    setShowLanding(false)
  }

  const handleLogout = () => {
    setShowLanding(true)
  }

  return (
    <>
      {showLanding ? (
        <LandingPage onEnterApp={handleEnterApp} />
      ) : (
        <MainApp onLogout={handleLogout} />
      )}
    </>
  )
}

export default App
