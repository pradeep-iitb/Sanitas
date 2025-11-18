import { Search, TrendingUp, Heart, Brain, Bone } from 'lucide-react'

export default function HealthEncyclopedia() {
  const categories = [
    { icon: Heart, name: 'Cardiology', articles: 245, color: 'from-red-500 to-pink-500' },
    { icon: Brain, name: 'Neurology', articles: 189, color: 'from-purple-500 to-indigo-500' },
    { icon: Bone, name: 'Orthopedics', articles: 156, color: 'from-cyan-500 to-blue-500' },
    { icon: TrendingUp, name: 'Wellness', articles: 312, color: 'from-green-500 to-emerald-500' },
  ]

  return (
    <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700 rounded-3xl p-8">
      <h3 className="text-3xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
        Health Encyclopedia
      </h3>
      
      {/* Search Bar */}
      <div className="relative mb-8">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
        <input
          type="text"
          placeholder="Search health topics..."
          className="w-full pl-12 pr-4 py-4 bg-slate-700 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all"
        />
      </div>

      {/* Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {categories.map((category, idx) => (
          <div
            key={idx}
            className="group p-6 bg-slate-700/30 border border-slate-600/30 rounded-xl hover:border-cyan-500/50 hover:bg-slate-700/50 transition-all duration-300 cursor-pointer hover:scale-105"
          >
            <div className={`w-14 h-14 mb-4 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
              <category.icon className="w-7 h-7 text-white" />
            </div>
            <h4 className="text-lg font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">
              {category.name}
            </h4>
            <p className="text-sm text-slate-400">{category.articles} articles</p>
          </div>
        ))}
      </div>
    </div>
  )
}
