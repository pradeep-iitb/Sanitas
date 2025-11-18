import { Sparkles, ArrowRight } from 'lucide-react'
import Hyperspeed from './Hyperspeed'

export default function Hero({ setActiveSection }) {
  const scrollToChat = () => {
    const element = document.getElementById('chat')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setActiveSection('chat')
    }
  }

  return (
    <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden min-h-screen">
      {/* Hyperspeed Background */}
      <div className="fixed inset-0 w-full h-full opacity-60 z-0">
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
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 px-4 py-2 rounded-full mb-6 backdrop-blur-xl">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-semibold">AI-Powered Health Assistant</span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight">
            Your Personal Health
            <br />
            Companion
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            Get instant, personalized health guidance powered by advanced AI.
            Fast answers, compassionate care, available 24/7.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={scrollToChat}
              className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-cyan-500/50 hover:scale-105 transition-all duration-300 flex items-center space-x-2"
            >
              <span>Start Chat Now</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 bg-slate-800/50 backdrop-blur-xl border border-slate-700 text-slate-200 font-semibold rounded-xl hover:border-cyan-500/50 hover:text-cyan-400 transition-all duration-300">
              Learn More
            </button>
          </div>

          {/* Decorative elements */}
          <div className="mt-16 relative">
            <div className="absolute inset-0 flex items-center justify-center opacity-20">
              <div className="w-96 h-96 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full blur-3xl animate-pulse-slow"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
