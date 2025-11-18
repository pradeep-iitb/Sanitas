export default function Card({ children, hover = false, className = '' }) {
  return (
    <div className={`bg-slate-800/50 backdrop-blur-xl border border-slate-700 rounded-2xl p-6 ${
      hover ? 'hover:border-cyan-500/50 hover:scale-105 transition-all duration-300 cursor-pointer' : ''
    } ${className}`}>
      {children}
    </div>
  )
}
