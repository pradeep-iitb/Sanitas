import { useState } from 'react'
import { ArrowRight, Calendar, MessageSquare, Activity, Stethoscope, Heart, Shield, Users, Star, Menu, X, Phone, Mail, MapPin } from 'lucide-react'
import Hyperspeed from '../components/Hyperspeed'

export default function LandingPage({ onEnterApp }) {
  const [hoveredFeature, setHoveredFeature] = useState(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setMobileMenuOpen(false)
    }
  }

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Hyperspeed Background */}
      <div className="fixed inset-0 w-full h-full opacity-50 z-0">
        <Hyperspeed
          effectOptions={{
            onSpeedUp: () => {},
            onSlowDown: () => {},
            distortion: 'turbulentDistortion',
            length: 400,
            roadWidth: 10,
            islandWidth: 2,
            lanesPerRoad: 4,
            fov: 90,
            fovSpeedUp: 150,
            speedUp: 2,
            carLightsFade: 0.4,
            totalSideLightSticks: 20,
            lightPairsPerRoadWay: 40,
            shoulderLinesWidthPercentage: 0.05,
            brokenLinesWidthPercentage: 0.1,
            brokenLinesLengthPercentage: 0.5,
            lightStickWidth: [0.12, 0.5],
            lightStickHeight: [1.3, 1.7],
            movingAwaySpeed: [60, 80],
            movingCloserSpeed: [-120, -160],
            carLightsLength: [400 * 0.03, 400 * 0.2],
            carLightsRadius: [0.05, 0.14],
            carWidthPercentage: [0.3, 0.5],
            carShiftX: [-0.8, 0.8],
            carFloorSeparation: [0, 5],
            colors: {
              roadColor: 0x080808,
              islandColor: 0x0a0a0a,
              background: 0x000000,
              shoulderLines: 0xFFFFFF,
              brokenLines: 0xFFFFFF,
              leftCars: [0xD856BF, 0x6750A2, 0xC247AC],
              rightCars: [0x03B3C3, 0x0E5EA5, 0x324555],
              sticks: 0x03B3C3,
            }
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Navbar */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-xl border-b border-slate-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              {/* Logo */}
              <div className="flex items-center space-x-3 cursor-pointer group">
                <img 
                  src="/sanitas.jpeg" 
                  alt="Sanitas Logo" 
                  className="w-10 h-10 rounded-full object-cover group-hover:scale-110 transition-all duration-300 shadow-lg shadow-cyan-500/30"
                />
                <span className="text-2xl font-bold bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Sanitas
                </span>
              </div>

              {/* Desktop Menu */}
              <div className="hidden md:flex items-center space-x-8">
                <button 
                  onClick={() => scrollToSection('home')}
                  className="text-slate-300 hover:text-cyan-400 font-medium transition-colors"
                >
                  Home
                </button>
                <button 
                  onClick={() => scrollToSection('features')}
                  className="text-slate-300 hover:text-cyan-400 font-medium transition-colors"
                >
                  Features
                </button>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-slate-300 hover:text-cyan-400 font-medium transition-colors"
                >
                  About
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-slate-300 hover:text-cyan-400 font-medium transition-colors"
                >
                  Contact
                </button>
                <button
                  onClick={onEnterApp}
                  className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-cyan-500/50 hover:scale-105 transition-all duration-300"
                >
                  Get Started
                </button>
              </div>

              {/* Mobile Menu Button */}
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-lg text-slate-300 hover:bg-slate-800"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden border-t border-slate-800 bg-slate-900/95 backdrop-blur-xl">
              <div className="px-4 py-4 space-y-3">
                <button 
                  onClick={() => scrollToSection('home')}
                  className="block w-full text-left px-3 py-2 text-slate-300 hover:text-cyan-400 hover:bg-slate-800 rounded-lg transition-colors"
                >
                  Home
                </button>
                <button 
                  onClick={() => scrollToSection('features')}
                  className="block w-full text-left px-3 py-2 text-slate-300 hover:text-cyan-400 hover:bg-slate-800 rounded-lg transition-colors"
                >
                  Features
                </button>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="block w-full text-left px-3 py-2 text-slate-300 hover:text-cyan-400 hover:bg-slate-800 rounded-lg transition-colors"
                >
                  About
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="block w-full text-left px-3 py-2 text-slate-300 hover:text-cyan-400 hover:bg-slate-800 rounded-lg transition-colors"
                >
                  Contact
                </button>
                <button
                  onClick={onEnterApp}
                  className="w-full px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
                >
                  Get Started
                </button>
              </div>
            </div>
          )}
        </nav>

        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-24 pb-20">
          <div className="max-w-7xl mx-auto text-center">
            <div className="mb-12 animate-fade-in">
              <Activity className="w-20 h-20 mx-auto text-cyan-400 mb-6 animate-pulse" />
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-300 via-blue-400 via-purple-400 to-pink-500 bg-clip-text text-transparent leading-tight">
                Sanitas
              </h1>
              <p className="text-xl md:text-2xl lg:text-3xl text-slate-300 mb-4 font-light">
                Your AI-Powered Health Companion
              </p>
              <p className="text-base md:text-lg text-slate-400 max-w-2xl mx-auto mb-10">
                Experience the future of healthcare with intelligent diagnostics, quick online appointments and treatments, personalized wellness tracking, and 24/7 AI-powered medical assistance.
              </p>
            </div>

            <button
              onClick={onEnterApp}
              className="group relative inline-flex items-center space-x-3 px-12 py-6 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 text-white text-xl font-bold rounded-2xl shadow-2xl shadow-cyan-500/50 hover:shadow-cyan-400/70 hover:scale-110 hover:-translate-y-2 transition-all duration-300 overflow-hidden animate-slide-up"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10">Launch App</span>
              <ArrowRight className="w-6 h-6 relative z-10 group-hover:translate-x-2 transition-transform" />
            </button>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
              {[
                { icon: Users, value: '50K+', label: 'Active Users' },
                { icon: Star, value: '4.9/5', label: 'Rating' },
                { icon: Stethoscope, value: '24/7', label: 'Support' },
                { icon: Shield, value: '100%', label: 'Secure' }
              ].map((stat, idx) => (
                <div key={idx} className="bg-slate-900/60 backdrop-blur-xl border border-cyan-500/20 rounded-xl p-4 hover:border-cyan-400/40 transition-all animate-fade-in" style={{animationDelay: `${idx * 0.1}s`}}>
                  <stat.icon className="w-10 h-10 mx-auto mb-2 text-cyan-400" />
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-slate-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 px-4 border-t border-slate-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Powerful <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Features</span>
              </h2>
              <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                Everything you need to manage your health in one intelligent platform
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Feature 1 */}
              <div 
                className="group relative bg-slate-900/60 backdrop-blur-xl border-2 border-cyan-500/30 rounded-2xl p-8 hover:border-cyan-400 hover:scale-105 hover:-translate-y-3 transition-all duration-300 cursor-pointer"
                onMouseEnter={() => setHoveredFeature(1)}
                onMouseLeave={() => setHoveredFeature(null)}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <Calendar className="w-16 h-16 text-cyan-400 mb-6 group-hover:scale-110 group-hover:rotate-12 transition-transform" />
                <h3 className="text-2xl font-bold text-white mb-3">Quick Appointments</h3>
                <p className="text-slate-400 group-hover:text-slate-300 transition-colors">
                  Book instant health consultations with verified doctors and specialists at your convenience.
                </p>
              </div>

              {/* Feature 2 */}
              <div 
                className="group relative bg-slate-900/60 backdrop-blur-xl border-2 border-purple-500/30 rounded-2xl p-8 hover:border-purple-400 hover:scale-105 hover:-translate-y-3 transition-all duration-300 cursor-pointer"
                onMouseEnter={() => setHoveredFeature(2)}
                onMouseLeave={() => setHoveredFeature(null)}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <MessageSquare className="w-16 h-16 text-purple-400 mb-6 group-hover:scale-110 group-hover:rotate-12 transition-transform" />
                <h3 className="text-2xl font-bold text-white mb-3">AI Chat Assistant</h3>
                <p className="text-slate-400 group-hover:text-slate-300 transition-colors">
                  24/7 intelligent health guidance powered by advanced AI technology for instant medical insights.
                </p>
              </div>

              {/* Feature 3 */}
              <div 
                className="group relative bg-slate-900/60 backdrop-blur-xl border-2 border-pink-500/30 rounded-2xl p-8 hover:border-pink-400 hover:scale-105 hover:-translate-y-3 transition-all duration-300 cursor-pointer"
                onMouseEnter={() => setHoveredFeature(3)}
                onMouseLeave={() => setHoveredFeature(null)}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-red-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <Heart className="w-16 h-16 text-pink-400 mb-6 group-hover:scale-110 group-hover:rotate-12 transition-transform" />
                <h3 className="text-2xl font-bold text-white mb-3">Health Tracking</h3>
                <p className="text-slate-400 group-hover:text-slate-300 transition-colors">
                  Monitor your wellness journey with smart analytics, insights, and personalized recommendations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 px-4 border-t border-slate-800/50">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  About <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Sanitas</span>
                </h2>
                <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                  Sanitas is revolutionizing healthcare accessibility through cutting-edge AI technology and user-centric design. Our platform combines artificial intelligence with medical expertise to provide personalized health solutions.
                </p>
                <p className="text-base text-slate-400 mb-8 leading-relaxed">
                  We believe healthcare should be accessible, intelligent, and personalized. Our mission is to empower individuals to take control of their health journey with data-driven insights and expert guidance available anytime, anywhere.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Shield className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-white font-semibold mb-1">HIPAA Compliant & Secure</h4>
                      <p className="text-slate-400 text-sm">Your health data is encrypted and protected with enterprise-grade security.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Stethoscope className="w-6 h-6 text-purple-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-white font-semibold mb-1">Verified Medical Professionals</h4>
                      <p className="text-slate-400 text-sm">All doctors and specialists are thoroughly vetted and certified.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Activity className="w-6 h-6 text-pink-400 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-white font-semibold mb-1">AI-Powered Insights</h4>
                      <p className="text-slate-400 text-sm">Advanced machine learning analyzes your health patterns for personalized recommendations.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-3xl blur-3xl"></div>
                <div className="relative bg-slate-900/60 backdrop-blur-xl border border-slate-700 rounded-3xl p-8">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center p-6 bg-slate-800/50 rounded-2xl">
                      <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">50K+</div>
                      <div className="text-slate-400 text-sm">Happy Patients</div>
                    </div>
                    <div className="text-center p-6 bg-slate-800/50 rounded-2xl">
                      <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">500+</div>
                      <div className="text-slate-400 text-sm">Medical Experts</div>
                    </div>
                    <div className="text-center p-6 bg-slate-800/50 rounded-2xl">
                      <div className="text-4xl font-bold bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent mb-2">24/7</div>
                      <div className="text-slate-400 text-sm">Availability</div>
                    </div>
                    <div className="text-center p-6 bg-slate-800/50 rounded-2xl">
                      <div className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent mb-2">4.9★</div>
                      <div className="text-slate-400 text-sm">User Rating</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-4 border-t border-slate-800/50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Get In <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Touch</span>
            </h2>
            <p className="text-lg text-slate-400 mb-12">
              Have questions? We're here to help you on your health journey.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-slate-900/60 backdrop-blur-xl border border-slate-700 rounded-2xl p-6 hover:border-cyan-400/50 transition-all">
                <Phone className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-white font-semibold mb-2">Call Us</h3>
                <p className="text-slate-400">+1 (800) 123-4567</p>
              </div>
              <div className="bg-slate-900/60 backdrop-blur-xl border border-slate-700 rounded-2xl p-6 hover:border-purple-400/50 transition-all">
                <Mail className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-white font-semibold mb-2">Email Us</h3>
                <p className="text-slate-400">support@sanitas.health</p>
              </div>
              <div className="bg-slate-900/60 backdrop-blur-xl border border-slate-700 rounded-2xl p-6 hover:border-pink-400/50 transition-all">
                <MapPin className="w-12 h-12 text-pink-400 mx-auto mb-4" />
                <h3 className="text-white font-semibold mb-2">Visit Us</h3>
                <p className="text-slate-400">San Francisco, CA</p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-4 border-t border-slate-800/50 bg-slate-900/80 backdrop-blur-xl">
          <div className="max-w-7xl mx-auto text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Activity className="w-6 h-6 text-cyan-400" />
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-300 to-purple-400 bg-clip-text text-transparent">
                Sanitas
              </span>
            </div>
            <p className="text-slate-400 text-sm mb-4">
              © 2025 Sanitas Health Technologies. All rights reserved.
            </p>
            <p className="text-slate-500 text-xs">
              Your trusted AI-powered health companion for a better tomorrow.
            </p>
          </div>
        </footer>
      </div>
    </div>
  )
}
