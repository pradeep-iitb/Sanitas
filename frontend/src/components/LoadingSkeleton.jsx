export default function LoadingSkeleton() {
  return (
    <div className="animate-pulse space-y-6">
      {/* Streak Card Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-slate-800/50 rounded-3xl p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-slate-700 rounded-lg"></div>
              <div className="w-16 h-10 bg-slate-700 rounded"></div>
            </div>
            <div className="w-32 h-6 bg-slate-700 rounded mb-4"></div>
            <div className="w-full h-2 bg-slate-700 rounded"></div>
          </div>
        ))}
      </div>

      {/* Meal Cards Skeleton */}
      <div>
        <div className="w-48 h-8 bg-slate-700 rounded mb-6"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="bg-slate-800/50 rounded-2xl p-6">
              <div className="w-16 h-16 bg-slate-700 rounded-full mb-3"></div>
              <div className="w-24 h-6 bg-slate-700 rounded mb-2"></div>
              <div className="w-20 h-4 bg-slate-700 rounded mb-2"></div>
              <div className="w-28 h-8 bg-slate-700 rounded"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions Skeleton */}
      <div>
        <div className="w-40 h-8 bg-slate-700 rounded mb-6"></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-slate-800/50 rounded-3xl p-8">
              <div className="w-16 h-16 bg-slate-700 rounded-lg mb-4"></div>
              <div className="w-32 h-8 bg-slate-700 rounded mb-2"></div>
              <div className="w-full h-4 bg-slate-700 rounded"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
