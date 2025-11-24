import { useState } from 'react'
import { MessageCircle } from 'lucide-react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Dashboard from '../components/Dashboard'
import ChatSection from '../components/ChatSection'
import QuickLinks from '../components/QuickLinks'
import About from '../components/About'
import FeedbackModal from '../components/FeedbackModal'

export default function MainApp({ onLogout }) {
  const [activeSection, setActiveSection] = useState('home')
  const [showFeedback, setShowFeedback] = useState(false)

  const handleLogout = () => {
    localStorage.removeItem('hasVisitedSanitas')
    if (onLogout) onLogout()
  }

  return (
    <div className="min-h-screen bg-slate-900">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} onLogout={handleLogout} />
      <main>
        <Hero setActiveSection={setActiveSection} />
        <ChatSection />
        <QuickLinks />
        <Dashboard />
        <About />
      </main>
      <footer className="bg-slate-900 text-white py-8 text-center border-t border-slate-800">
        <p className="text-sm text-slate-400">© 2025 Sanitas. All rights reserved.</p>
      </footer>

      {/* Floating Feedback Button */}
      <button
        onClick={() => setShowFeedback(true)}
        className="fixed bottom-8 right-8 bg-gradient-to-r from-cyan-500 to-purple-600 text-white p-4 rounded-full shadow-2xl hover:shadow-cyan-500/50 hover:scale-110 transition-all duration-300 z-40"
        aria-label="Give Feedback"
      >
        <MessageCircle className="w-6 h-6" />
      </button>

      {/* Feedback Modal */}
      {showFeedback && <FeedbackModal onClose={() => setShowFeedback(false)} />}
    </div>
  )
}
