export default function Input({ label, error, icon: Icon, ...props }) {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-semibold text-slate-300 mb-2">
          {label}
        </label>
      )}
      <div className="relative">
        {Icon && (
          <Icon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
        )}
        <input
          className={`w-full ${Icon ? 'pl-11' : 'px-4'} py-3 bg-slate-700 border-2 ${
            error ? 'border-red-500' : 'border-slate-600'
          } rounded-xl text-white placeholder-slate-400 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all`}
          {...props}
        />
      </div>
      {error && (
        <p className="mt-1 text-sm text-red-400">{error}</p>
      )}
    </div>
  )
}
