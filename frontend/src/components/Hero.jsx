import { Sparkles, ArrowRight } from 'lucide-react'

export default function Hero({ setActiveSection }) {
  const scrollToChat = () => {
    const element = document.getElementById('chat')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setActiveSection('chat')
    }
  }

  return (
    <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/40 text-cyan-200 px-4 py-2 rounded-full mb-6 backdrop-blur-xl shadow-lg shadow-cyan-500/20 animate-pulse-slow">
            <Sparkles className="w-4 h-4 animate-pulse" />
            <span className="text-sm font-semibold">AI-Powered Health Assistant</span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-300 via-blue-400 via-purple-400 to-pink-500 bg-clip-text text-transparent leading-tight drop-shadow-2xl animate-fade-in" style={{textShadow: '0 0 80px rgba(6, 182, 212, 0.3)'}}>
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
              className="group px-8 py-4 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 text-white font-semibold rounded-xl shadow-2xl shadow-cyan-500/50 hover:shadow-cyan-400/70 hover:scale-110 hover:-translate-y-1 transition-all duration-300 flex items-center space-x-2 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10">Start Chat Now</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform relative z-10" />
            </button>
            <button className="px-8 py-4 bg-slate-800/50 backdrop-blur-xl border-2 border-slate-700 text-slate-200 font-semibold rounded-xl hover:border-cyan-400 hover:text-cyan-300 hover:bg-slate-800/80 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300">
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
      
      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  )
}
