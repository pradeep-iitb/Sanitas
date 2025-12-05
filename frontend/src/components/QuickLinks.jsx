import { BookOpen, Trophy, Calendar } from 'lucide-react'

export default function QuickLinks() {
  return (
    <section id="quick-links" className="relative py-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
      <div className="relative max-w-7xl mx-auto z-10">
        {/* Full Width Appointment Card */}
        <div className="bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 backdrop-blur-xl border border-cyan-500/30 rounded-3xl p-10 md:p-16 mb-8 animate-fade-in relative overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
            <div className="absolute top-0 right-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          </div>
          
          <div className="relative z-10 text-center">
            <div className="inline-flex items-center space-x-2 bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 px-4 py-2 rounded-full mb-6 backdrop-blur-xl">
              <Calendar className="w-5 h-5" />
              <span className="text-sm font-semibold">Quick Booking</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              📅 Get Instant Online Appointments
            </h2>
            
            <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              Get instant online appointments with trusted and verified health professionals.
            </p>
            
            <button className="group px-12 py-5 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 text-white font-bold text-lg rounded-2xl hover:shadow-2xl hover:shadow-cyan-500/50 hover:scale-110 transition-all duration-300 inline-flex items-center gap-3">
              <Calendar className="w-6 h-6 group-hover:rotate-12 transition-transform" />
              Book Now
              <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Two Half-Width Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Medipedia Card */}
          <div className="group bg-slate-800/50 backdrop-blur-xl border border-slate-700 rounded-3xl p-8 hover:border-cyan-500/50 hover:scale-105 transition-all duration-300 cursor-pointer animate-fade-in relative overflow-hidden">
            {/* Hover Effect Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/10 group-hover:to-blue-500/10 transition-all duration-300"></div>
            
            <div className="relative z-10 text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform shadow-lg shadow-cyan-500/50">
                <BookOpen className="w-10 h-10 text-white" />
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                📚 Medipedia
              </h3>
              
              <p className="text-slate-400 group-hover:text-slate-300 transition-colors mb-6 text-base md:text-lg">
                Explore comprehensive health encyclopedia with verified medical information
              </p>
              
              <button className="w-full px-6 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 group-hover:scale-105">
                Explore Now
              </button>
            </div>
          </div>

          {/* Leaderboard Card */}
          <div className="group bg-slate-800/50 backdrop-blur-xl border border-slate-700 rounded-3xl p-8 hover:border-yellow-500/50 hover:scale-105 transition-all duration-300 cursor-pointer animate-fade-in relative overflow-hidden" style={{ animationDelay: '150ms' }}>
            {/* Hover Effect Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/0 to-orange-500/0 group-hover:from-yellow-500/10 group-hover:to-orange-500/10 transition-all duration-300"></div>
            
            <div className="relative z-10 text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-yellow-500 to-orange-600 mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform shadow-lg shadow-yellow-500/50">
                <Trophy className="w-10 h-10 text-white" />
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-yellow-400 transition-colors">
                🏆 Leaderboard
              </h3>
              
              <p className="text-slate-400 group-hover:text-slate-300 transition-colors mb-6 text-base md:text-lg">
                Track your wellness journey and compete with global health enthusiasts
              </p>
              
              <button className="w-full px-6 py-4 bg-gradient-to-r from-yellow-500 to-orange-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-yellow-500/50 transition-all duration-300 group-hover:scale-105">
                View Rankings
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Animations */}
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
      `}</style>
    </section>
  )
}
