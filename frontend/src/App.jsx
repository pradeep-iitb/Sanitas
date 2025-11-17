import { useState } from 'react'
import { MessageCircle } from 'lucide-react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import ChatSection from './components/ChatSection'
import About from './components/About'
import FeedbackModal from './components/FeedbackModal'
import Aurora from './Aurora'

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const [showFeedback, setShowFeedback] = useState(false)

  return (
    <div className="min-h-screen">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      <main>
        <Aurora
            colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
            blend={0.5}
            amplitude={1.0}
            speed={0.5}
        />
        <Hero setActiveSection={setActiveSection} />
        <Features />
        <ChatSection />
        <About />
      </main>
      <footer className="bg-slate-900 text-white py-8 text-center">
        <p className="text-sm">© 2025 Sanitas. All rights reserved.</p>
      </footer>

      {/* Floating Feedback Button */}
      <button
        onClick={() => setShowFeedback(true)}
        className="fixed bottom-8 right-8 bg-gradient-to-r from-primary-600 to-teal-600 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl hover:scale-110 transition-all duration-300 z-40"
        aria-label="Give Feedback"
      >
        <MessageCircle className="w-6 h-6" />
      </button>

      {/* Feedback Modal */}
      {showFeedback && <FeedbackModal onClose={() => setShowFeedback(false)} />}
    </div>
  )
}

export default App
