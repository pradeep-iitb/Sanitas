import { useState } from 'react'
import { Calendar, Clock, User, CheckCircle, XCircle } from 'lucide-react'

export default function AppointmentsSection() {
  const [selectedSlot, setSelectedSlot] = useState(null)
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0])

  const timeSlots = [
    { time: '09:00 AM', available: true },
    { time: '10:00 AM', available: true },
    { time: '11:00 AM', available: false },
    { time: '12:00 PM', available: true },
    { time: '02:00 PM', available: true },
    { time: '03:00 PM', available: false },
    { time: '04:00 PM', available: true },
    { time: '05:00 PM', available: true },
  ]

  const doctors = [
    { name: 'Dr. Sarah Johnson', specialty: 'General Physician', rating: 4.9 },
    { name: 'Dr. Michael Chen', specialty: 'Cardiologist', rating: 4.8 },
    { name: 'Dr. Emily Davis', specialty: 'Dermatologist', rating: 4.9 },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
            Book an Appointment
          </h2>
          <p className="text-xl text-slate-300">Choose your preferred time slot</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Calendar & Time Slots */}
          <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <Calendar className="w-6 h-6 text-cyan-400" />
              Select Date & Time
            </h3>
            
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              min={new Date().toISOString().split('T')[0]}
              className="w-full px-4 py-3 mb-6 bg-slate-700 border border-slate-600 rounded-xl text-white focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20"
            />

            <div className="grid grid-cols-2 gap-3">
              {timeSlots.map((slot, idx) => (
                <button
                  key={idx}
                  onClick={() => slot.available && setSelectedSlot(slot.time)}
                  disabled={!slot.available}
                  className={`p-4 rounded-xl font-semibold transition-all duration-200 ${
                    selectedSlot === slot.time
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white scale-105 shadow-lg shadow-cyan-500/50'
                      : slot.available
                      ? 'bg-slate-700 text-slate-300 hover:bg-slate-600 hover:scale-105'
                      : 'bg-slate-700/30 text-slate-600 cursor-not-allowed'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span>{slot.time}</span>
                    {slot.available ? (
                      <CheckCircle className="w-4 h-4 text-green-400" />
                    ) : (
                      <XCircle className="w-4 h-4 text-red-400" />
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Doctors List */}
          <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <User className="w-6 h-6 text-purple-400" />
              Available Doctors
            </h3>
            
            <div className="space-y-4">
              {doctors.map((doctor, idx) => (
                <div
                  key={idx}
                  className="p-6 bg-slate-700/50 border border-slate-600/50 rounded-xl hover:border-cyan-500/50 hover:bg-slate-700 transition-all duration-200 cursor-pointer group"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                        {doctor.name}
                      </h4>
                      <p className="text-slate-400 text-sm">{doctor.specialty}</p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-1 text-yellow-400">
                        <span className="text-lg font-bold">{doctor.rating}</span>
                        <span>★</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {selectedSlot && (
              <button className="w-full mt-6 px-6 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-cyan-500/50 hover:scale-105 transition-all duration-300">
                Confirm Appointment for {selectedSlot}
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
