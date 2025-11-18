import { useState, useEffect } from 'react'
import { Flame, Award, Calendar, TrendingUp, Utensils, BookOpen, CalendarCheck, Trophy } from 'lucide-react'

export default function Dashboard() {
  const [streak, setStreak] = useState(7)
  const [calories, setCalories] = useState(1850)
  const [targetCalories] = useState(2200)

  // Animated counter effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCalories(prev => Math.min(prev + 5, targetCalories))
    }, 50)
    return () => clearInterval(interval)
  }, [targetCalories])

  const meals = [
    { name: 'Breakfast', calories: 450, time: '8:00 AM', emoji: '🥗', color: 'from-orange-500 to-pink-500' },
    { name: 'Lunch', calories: 650, time: '1:00 PM', emoji: '🍱', color: 'from-purple-500 to-blue-500' },
    { name: 'Snack', calories: 200, time: '4:00 PM', emoji: '🍎', color: 'from-green-500 to-teal-500' },
    { name: 'Dinner', calories: 550, time: '7:00 PM', emoji: '🍜', color: 'from-red-500 to-orange-500' },
  ]

  const quickActions = [
    { name: 'Medipedia', icon: BookOpen, color: 'from-cyan-500 to-blue-600', description: 'Health Encyclopedia' },
    { name: 'Appointments', icon: CalendarCheck, color: 'from-purple-500 to-pink-600', description: 'Book Consultation' },
    { name: 'Leaderboard', icon: Trophy, color: 'from-yellow-500 to-orange-600', description: 'Global Rankings' },
  ]

  const streakDays = [
    { day: 'Mon', active: true },
    { day: 'Tue', active: true },
    { day: 'Wed', active: true },
    { day: 'Thu', active: true },
    { day: 'Fri', active: true },
    { day: 'Sat', active: true },
    { day: 'Sun', active: true },
  ]

  return (
    <section id="dashboard" className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated Aurora Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto z-10">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Your Health Dashboard
          </h2>
          <p className="text-xl text-slate-300">Track your wellness journey in real-time</p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Streak Card */}
          <div className="group relative bg-gradient-to-br from-orange-500/10 to-red-500/10 backdrop-blur-xl border border-orange-500/20 rounded-3xl p-6 hover:scale-105 hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/30 animate-fade-in">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-red-500 rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity"></div>
            <div className="flex items-center justify-between mb-4">
              <Flame className="w-12 h-12 text-orange-400 group-hover:scale-110 group-hover:rotate-12 transition-transform animate-pulse" />
              <span className="text-4xl font-bold text-orange-400 animate-pulse">{streak}</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Day Streak 🔥</h3>
            <div className="flex gap-1 mt-4">
              {streakDays.map((day, idx) => (
                <div
                  key={idx}
                  className={`flex-1 h-2 rounded-full transition-all duration-300 ${
                    day.active 
                      ? 'bg-gradient-to-r from-orange-400 to-red-400 shadow-lg shadow-orange-500/50 animate-pulse' 
                      : 'bg-slate-700'
                  }`}
                  title={day.day}
                  style={{animationDelay: `${idx * 0.1}s`}}
                ></div>
              ))}
            </div>
          </div>

          {/* Calories Card */}
          <div className="group relative bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-xl border border-purple-500/20 rounded-3xl p-6 hover:scale-105 hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/30 animate-fade-in" style={{animationDelay: '0.1s'}}>
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity"></div>
            <div className="flex items-center justify-between mb-4">
              <Utensils className="w-12 h-12 text-purple-400 group-hover:scale-110 group-hover:rotate-12 transition-transform" />
              <span className="text-4xl font-bold text-purple-400">{calories}</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Calories Today</h3>
            <div className="w-full bg-slate-700 rounded-full h-3 mt-4 overflow-hidden shadow-inner">
              <div
                className="h-full bg-gradient-to-r from-purple-400 via-pink-400 to-pink-500 rounded-full transition-all duration-500 shadow-lg shadow-purple-500/50"
                style={{ width: `${(calories / targetCalories) * 100}%` }}
              ></div>
            </div>
            <p className="text-slate-400 text-sm mt-2">Target: {targetCalories} kcal</p>
          </div>

          {/* Achievement Card */}
          <div className="group relative bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-xl border border-cyan-500/20 rounded-3xl p-6 hover:scale-105 hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/30 animate-fade-in" style={{animationDelay: '0.2s'}}>
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity"></div>
            <div className="flex items-center justify-between mb-4">
              <Award className="w-12 h-12 text-cyan-400 group-hover:scale-110 group-hover:rotate-12 transition-transform" />
              <span className="text-4xl font-bold text-cyan-400">12</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Achievements</h3>
            <p className="text-slate-400 text-sm">Keep going! 🏆</p>
          </div>
        </div>

        {/* Meal Tracker */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <Utensils className="w-8 h-8 text-purple-400" />
            Today's Meal Plan
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {meals.map((meal, idx) => (
              <div
                key={idx}
                className="group relative bg-slate-800/50 backdrop-blur-xl border-2 border-slate-700/50 rounded-2xl p-6 hover:scale-110 hover:-translate-y-2 transition-all duration-300 hover:border-purple-400 hover:shadow-2xl cursor-pointer animate-slide-up"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${meal.color} rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity`}></div>
                <div className="text-5xl mb-3 group-hover:scale-125 transition-transform">{meal.emoji}</div>
                <h4 className="text-xl font-bold text-white mb-2">{meal.name}</h4>
                <p className="text-slate-400 text-sm mb-2">{meal.time}</p>
                <p className={`text-2xl font-bold bg-gradient-to-r ${meal.color} bg-clip-text text-transparent`}>
                  {meal.calories} kcal
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div>
          <h3 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <TrendingUp className="w-8 h-8 text-cyan-400" />
            Quick Actions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {quickActions.map((action, idx) => (
              <button
                key={idx}
                className="group relative bg-slate-800/50 backdrop-blur-xl border-2 border-slate-700/50 rounded-3xl p-8 hover:scale-110 hover:-translate-y-3 transition-all duration-300 hover:shadow-2xl cursor-pointer text-left overflow-hidden animate-fade-in"
                style={{ animationDelay: `${idx * 150}ms` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${action.color} opacity-0 group-hover:opacity-20 transition-opacity`}></div>
                <action.icon className={`w-16 h-16 mb-4 bg-gradient-to-br ${action.color} bg-clip-text text-transparent group-hover:scale-110 group-hover:rotate-6 transition-transform`} />
                <h4 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">{action.name}</h4>
                <p className="text-slate-400 group-hover:text-slate-300 transition-colors">{action.description}</p>
                <div className={`mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r ${action.color} text-white font-semibold opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all shadow-lg`}>
                  Open
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Custom animations */}
      <style jsx>{`
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
