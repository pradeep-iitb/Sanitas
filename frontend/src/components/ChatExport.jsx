import { Download } from 'lucide-react'

export default function ChatExport({ messages }) {
  const exportChat = () => {
    if (messages.length === 0) {
      alert('No messages to export')
      return
    }

    const chatText = messages
      .map((msg) => {
        const timestamp = msg.timestamp
          ? new Date(msg.timestamp).toLocaleString()
          : 'No timestamp'
        const role = msg.role === 'user' ? 'You' : 'Meru AI'
        return `[${timestamp}] ${role}:\n${msg.content}\n`
      })
      .join('\n---\n\n')

    const blob = new Blob([chatText], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `sanitas-chat-${new Date().toISOString().slice(0, 10)}.txt`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  return (
    <button
      onClick={exportChat}
      className="text-slate-400 hover:text-cyan-400 transition-colors p-2 rounded-lg hover:bg-slate-700/50 group"
      title="Export chat history"
    >
      <Download className="w-4 h-4 group-hover:scale-110 transition-transform" />
    </button>
  )
}
