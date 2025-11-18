import { FileText, Download, Eye } from 'lucide-react'

export default function MedicalRecords() {
  const records = [
    { name: 'Blood Test Report', date: '2025-11-15', type: 'Lab Report', size: '2.4 MB' },
    { name: 'X-Ray Results', date: '2025-11-10', type: 'Imaging', size: '5.1 MB' },
    { name: 'Prescription', date: '2025-11-08', type: 'Document', size: '156 KB' },
    { name: 'Vaccination Record', date: '2025-10-20', type: 'Certificate', size: '892 KB' },
  ]

  return (
    <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700 rounded-3xl p-8">
      <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
        <FileText className="w-6 h-6 text-cyan-400" />
        Medical Records
      </h3>
      
      <div className="space-y-3">
        {records.map((record, idx) => (
          <div
            key={idx}
            className="group flex items-center justify-between p-4 bg-slate-700/30 border border-slate-600/30 rounded-xl hover:bg-slate-700/50 hover:border-cyan-500/50 transition-all duration-200"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center">
                <FileText className="w-6 h-6 text-cyan-400" />
              </div>
              <div>
                <h4 className="font-semibold text-white group-hover:text-cyan-400 transition-colors">{record.name}</h4>
                <p className="text-sm text-slate-400">{record.date} • {record.type} • {record.size}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button className="p-2 hover:bg-slate-600 rounded-lg transition-colors">
                <Eye className="w-5 h-5 text-slate-400 hover:text-cyan-400" />
              </button>
              <button className="p-2 hover:bg-slate-600 rounded-lg transition-colors">
                <Download className="w-5 h-5 text-slate-400 hover:text-cyan-400" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
