import { TrendingUp, Heart, Activity, Zap } from 'lucide-react'

export default function HealthStats() {
  const stats = [
    { icon: Heart, label: 'Heart Rate', value: '72 bpm', color: 'from-red-500 to-pink-500', status: 'Normal' },
    { icon: Activity, label: 'Steps Today', value: '8,547', color: 'from-green-500 to-emerald-500', status: '+12%' },
    { icon: TrendingUp, label: 'Calories Burned', value: '1,234', color: 'from-orange-500 to-yellow-500', status: 'Goal: 2000' },
    { icon: Zap, label: 'Active Minutes', value: '45 min', color: 'from-purple-500 to-indigo-500', status: '75% to goal' },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, idx) => (
        <div
          key={idx}
          className="group relative bg-slate-800/50 backdrop-blur-xl border border-slate-700 rounded-2xl p-6 hover:scale-105 hover:-translate-y-2 transition-all duration-300 animate-fade-in"
          style={{animationDelay: `${idx * 0.1}s`}}
        >
          <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity"></div>
          <stat.icon className={`w-12 h-12 mb-4 bg-gradient-to-br ${stat.color} bg-clip-text text-transparent group-hover:scale-110 transition-transform`} 
            style={{WebkitTextFillColor: 'transparent', backgroundClip: 'text'}} />
          <h3 className="text-sm font-semibold text-slate-400 mb-2">{stat.label}</h3>
          <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
          <div className="text-xs text-slate-500">{stat.status}</div>
        </div>
      ))}
    </div>
  )
}
