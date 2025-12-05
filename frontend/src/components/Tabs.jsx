import { useState } from 'react'

export default function Tabs({ tabs, defaultTab = 0 }) {
  const [activeTab, setActiveTab] = useState(defaultTab)
  
  return (
    <div className="w-full">
      <div className="flex space-x-1 bg-slate-900/50 p-1 rounded-xl mb-6">
        {tabs.map((tab, idx) => (
          <button
            key={idx}
            onClick={() => setActiveTab(idx)}
            className={`flex-1 px-4 py-3 rounded-lg font-semibold transition-all duration-200 ${
              activeTab === idx
                ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg'
                : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="animate-fade-in">
        {tabs[activeTab]?.content}
      </div>
    </div>
  )
}
