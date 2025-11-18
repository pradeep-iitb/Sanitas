import { Award, Trophy, Target, Star } from 'lucide-react'

export default function Achievements() {
  const achievements = [
    { icon: Trophy, title: '7-Day Streak', description: 'Logged health data for 7 consecutive days', unlocked: true, color: 'from-yellow-500 to-orange-500' },
    { icon: Target, title: 'Fitness Goal', description: 'Reached daily step goal 5 times', unlocked: true, color: 'from-green-500 to-emerald-500' },
    { icon: Star, title: 'Early Bird', description: 'Logged morning workout 10 times', unlocked: false, color: 'from-blue-500 to-cyan-500' },
    { icon: Award, title: 'Health Champion', description: 'Maintained healthy habits for 30 days', unlocked: false, color: 'from-purple-500 to-pink-500' },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {achievements.map((achievement, idx) => (
        <div
          key={idx}
          className={`group relative bg-slate-800/50 backdrop-blur-xl border rounded-2xl p-6 transition-all duration-300 ${
            achievement.unlocked 
              ? 'border-slate-600 hover:border-cyan-500 hover:scale-105' 
              : 'border-slate-800 opacity-60'
          }`}
        >
          <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${achievement.color} flex items-center justify-center ${
            achievement.unlocked ? 'animate-pulse' : 'grayscale'
          }`}>
            <achievement.icon className="w-8 h-8 text-white" />
          </div>
          <h4 className="text-lg font-bold text-white text-center mb-2">{achievement.title}</h4>
          <p className="text-sm text-slate-400 text-center">{achievement.description}</p>
          {achievement.unlocked && (
            <div className="mt-4 text-center">
              <span className="px-3 py-1 bg-green-500/20 text-green-400 text-xs font-semibold rounded-full">
                Unlocked ✓
              </span>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
