export default function ProgressBar({ value, max = 100, color = 'cyan', label }) {
  const percentage = (value / max) * 100
  
  const colors = {
    cyan: 'from-cyan-400 to-blue-500',
    purple: 'from-purple-400 to-pink-500',
    green: 'from-green-400 to-emerald-500',
    orange: 'from-orange-400 to-red-500'
  }
  
  return (
    <div className="w-full">
      {label && (
        <div className="flex justify-between mb-2">
          <span className="text-sm text-slate-400">{label}</span>
          <span className="text-sm font-semibold text-white">{value}/{max}</span>
        </div>
      )}
      <div className="w-full bg-slate-700 rounded-full h-3 overflow-hidden">
        <div
          className={`h-full bg-gradient-to-r ${colors[color]} rounded-full transition-all duration-500 shadow-lg`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  )
}
