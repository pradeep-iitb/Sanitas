import { Bell } from 'lucide-react'

export default function Notifications() {
  const notifications = [
    { id: 1, type: 'appointment', title: 'Upcoming Appointment', message: 'Dr. Sarah Johnson tomorrow at 10:00 AM', time: '5 min ago', unread: true },
    { id: 2, type: 'health', title: 'Daily Goal Achieved', message: 'You reached your step goal of 10,000 steps!', time: '2 hours ago', unread: true },
    { id: 3, type: 'reminder', title: 'Medication Reminder', message: 'Time to take your evening medication', time: '1 day ago', unread: false },
  ]

  return (
    <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700 rounded-3xl p-6 max-w-md">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-white flex items-center gap-2">
          <Bell className="w-5 h-5 text-cyan-400" />
          Notifications
        </h3>
        <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs font-semibold rounded-full">
          2 New
        </span>
      </div>
      
      <div className="space-y-3">
        {notifications.map((notif) => (
          <div
            key={notif.id}
            className={`p-4 rounded-xl border transition-all duration-200 hover:scale-102 cursor-pointer ${
              notif.unread
                ? 'bg-cyan-500/5 border-cyan-500/30 hover:border-cyan-500/50'
                : 'bg-slate-700/30 border-slate-600/30 hover:border-slate-600/50'
            }`}
          >
            <div className="flex items-start justify-between mb-1">
              <h4 className="font-semibold text-white text-sm">{notif.title}</h4>
              <span className="text-xs text-slate-500">{notif.time}</span>
            </div>
            <p className="text-sm text-slate-400">{notif.message}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
