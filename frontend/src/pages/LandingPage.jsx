import { useState } from 'react'
import { ArrowRight, Calendar, MessageSquare, Activity, Zap, Shield, Users, Star } from 'lucide-react'
import Hyperspeed from '../components/Hyperspeed'

export default function LandingPage({ onEnterApp }) {
  const [hoveredFeature, setHoveredFeature] = useState(null)

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
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Hero Section */}
        <div className="flex-1 flex items-center justify-center px-4 py-20">
          <div className="max-w-7xl mx-auto text-center">
            {/* Logo */}
            <div className="mb-8 animate-fade-in">
              <Activity className="w-24 h-24 mx-auto text-cyan-400 mb-6 animate-pulse" />
              <h1 className="text-7xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-cyan-300 via-blue-400 via-purple-400 to-pink-500 bg-clip-text text-transparent leading-tight">
                Sanitas
              </h1>
              <p className="text-2xl md:text-3xl text-slate-300 mb-12 font-light">
                Your AI-Powered Health Companion
              </p>
            </div>

            {/* Main CTA */}
            <button
              onClick={onEnterApp}
              className="group relative inline-flex items-center space-x-3 px-12 py-6 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 text-white text-xl font-bold rounded-2xl shadow-2xl shadow-cyan-500/50 hover:shadow-cyan-400/70 hover:scale-110 hover:-translate-y-2 transition-all duration-300 overflow-hidden animate-slide-up"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10">Get Started</span>
              <ArrowRight className="w-6 h-6 relative z-10 group-hover:translate-x-2 transition-transform" />
            </button>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 max-w-5xl mx-auto">
              {/* Feature 1 */}
              <div 
                className="group relative bg-slate-900/60 backdrop-blur-xl border-2 border-cyan-500/30 rounded-2xl p-8 hover:border-cyan-400 hover:scale-105 hover:-translate-y-3 transition-all duration-300 cursor-pointer animate-fade-in"
                onMouseEnter={() => setHoveredFeature(1)}
                onMouseLeave={() => setHoveredFeature(null)}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <Calendar className="w-16 h-16 text-cyan-400 mx-auto mb-4 group-hover:scale-110 group-hover:rotate-12 transition-transform" />
                <h3 className="text-2xl font-bold text-white mb-2">Get Quick</h3>
                <h3 className="text-2xl font-bold text-cyan-400 mb-3">Appointments</h3>
                <p className="text-slate-400 group-hover:text-slate-300 transition-colors">
                  Book instant health consultations with verified doctors
                </p>
              </div>

              {/* Feature 2 */}
              <div 
                className="group relative bg-slate-900/60 backdrop-blur-xl border-2 border-purple-500/30 rounded-2xl p-8 hover:border-purple-400 hover:scale-105 hover:-translate-y-3 transition-all duration-300 cursor-pointer animate-fade-in"
                style={{animationDelay: '0.1s'}}
                onMouseEnter={() => setHoveredFeature(2)}
                onMouseLeave={() => setHoveredFeature(null)}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <MessageSquare className="w-16 h-16 text-purple-400 mx-auto mb-4 group-hover:scale-110 group-hover:rotate-12 transition-transform" />
                <h3 className="text-2xl font-bold text-white mb-2">AI Chat</h3>
                <h3 className="text-2xl font-bold text-purple-400 mb-3">Assistant</h3>
                <p className="text-slate-400 group-hover:text-slate-300 transition-colors">
                  24/7 intelligent health guidance powered by advanced AI
                </p>
              </div>

              {/* Feature 3 */}
              <div 
                className="group relative bg-slate-900/60 backdrop-blur-xl border-2 border-pink-500/30 rounded-2xl p-8 hover:border-pink-400 hover:scale-105 hover:-translate-y-3 transition-all duration-300 cursor-pointer animate-fade-in"
                style={{animationDelay: '0.2s'}}
                onMouseEnter={() => setHoveredFeature(3)}
                onMouseLeave={() => setHoveredFeature(null)}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-red-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <Activity className="w-16 h-16 text-pink-400 mx-auto mb-4 group-hover:scale-110 group-hover:rotate-12 transition-transform" />
                <h3 className="text-2xl font-bold text-white mb-2">Health</h3>
                <h3 className="text-2xl font-bold text-pink-400 mb-3">Tracking</h3>
                <p className="text-slate-400 group-hover:text-slate-300 transition-colors">
                  Monitor your wellness journey with smart analytics
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="py-16 border-t border-slate-800/50 backdrop-blur-xl">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { icon: Users, value: '50K+', label: 'Active Users' },
                { icon: Star, value: '4.9', label: 'Rating' },
                { icon: Zap, value: '24/7', label: 'Support' },
                { icon: Shield, value: '100%', label: 'Secure' }
              ].map((stat, idx) => (
                <div key={idx} className="animate-fade-in" style={{animationDelay: `${idx * 0.1}s`}}>
                  <stat.icon className="w-12 h-12 mx-auto mb-3 text-cyan-400" />
                  <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-slate-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
