import { Menu, X, Activity, User, ChevronDown } from 'lucide-react'
import { useState } from 'react'

export default function Navbar({ activeSection, setActiveSection }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isProfileOpen, setIsProfileOpen] = useState(false)
  const [username] = useState('Pradeep') // You can make this dynamic later

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'dashboard', label: 'Dashboard' },
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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-xl border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2 cursor-pointer group" onClick={() => scrollToSection('home')}>
            <Activity className="w-8 h-8 text-cyan-400 group-hover:text-cyan-300 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12" />
            <span className="text-2xl font-bold bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500 bg-clip-text text-transparent group-hover:from-cyan-200 group-hover:to-purple-400 transition-all duration-300">
              Sanitas
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeSection === link.id
                    ? 'text-cyan-300 bg-cyan-400/20 border border-cyan-400/40 shadow-lg shadow-cyan-500/20'
                    : 'text-slate-200 hover:text-cyan-300 hover:bg-slate-800 hover:scale-105'
                }`}
              >
                {link.label}
              </button>
            ))}
            
            {/* User Profile */}
            <div className="relative">
              <button
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="flex items-center space-x-2 px-3 py-2 rounded-lg text-slate-300 hover:text-cyan-400 hover:bg-slate-800 transition-all duration-200"
              >
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center">
                  <User className="w-5 h-5 text-white" />
                </div>
                <span className="text-sm font-medium">{username}</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isProfileOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown Menu */}
              {isProfileOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-slate-800/95 backdrop-blur-xl border border-slate-700 rounded-xl shadow-2xl overflow-hidden">
                  <button className="w-full text-left px-4 py-3 text-slate-300 hover:bg-slate-700 hover:text-cyan-400 transition-colors">
                    Profile Settings
                  </button>
                  <button className="w-full text-left px-4 py-3 text-slate-300 hover:bg-slate-700 hover:text-cyan-400 transition-colors">
                    My Health Data
                  </button>
                  <button className="w-full text-left px-4 py-3 text-slate-300 hover:bg-slate-700 hover:text-cyan-400 transition-colors border-t border-slate-700">
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:bg-slate-800"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-slate-800 bg-slate-900/95 backdrop-blur-md">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`block w-full text-left px-3 py-2 rounded-lg text-base font-medium ${
                  activeSection === link.id
                    ? 'text-cyan-400 bg-cyan-400/10 border border-cyan-400/20'
                    : 'text-slate-300 hover:text-cyan-400 hover:bg-slate-800'
                }`}
              >
                {link.label}
              </button>
            ))}
            
            {/* Mobile User Profile */}
            <div className="border-t border-slate-800 mt-2 pt-2">
              <div className="flex items-center space-x-3 px-3 py-2 text-slate-300">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center">
                  <User className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-white">{username}</p>
                  <p className="text-xs text-slate-400">View Profile</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
