import { Menu, X, Activity } from 'lucide-react'
import { useState } from 'react'

export default function Navbar({ activeSection, setActiveSection }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'features', label: 'Features' },
    { id: 'chat', label: 'Chat' },
    { id: 'about', label: 'About' },
  ]

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setActiveSection(id)
      setIsMenuOpen(false)
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-effect">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => scrollToSection('home')}>
            <Activity className="w-8 h-8 text-primary-600" />
            <span className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-teal-600 bg-clip-text text-transparent">
              Sanitas
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeSection === link.id
                    ? 'text-primary-600 bg-primary-50'
                    : 'text-slate-700 hover:text-primary-600 hover:bg-slate-50'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white/95 backdrop-blur-md">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`block w-full text-left px-3 py-2 rounded-lg text-base font-medium ${
                  activeSection === link.id
                    ? 'text-primary-600 bg-primary-50'
                    : 'text-slate-700 hover:text-primary-600 hover:bg-slate-50'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
