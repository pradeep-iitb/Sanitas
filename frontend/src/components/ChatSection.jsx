import { useState, useRef, useEffect } from 'react'
import { Send, Loader2, Bot, User as UserIcon, Sparkles } from 'lucide-react'

export default function ChatSection() {
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!input.trim() || isLoading) return

    const userMessage = input.trim()
    setInput('')

    // Add user message
    setMessages((prev) => [...prev, { role: 'user', content: userMessage }])
    setIsLoading(true)

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMessage }),
      })

      if (!response.ok) {
        throw new Error('Failed to get response')
      }

      const data = await response.json()
      setMessages((prev) => [...prev, { role: 'assistant', content: data.reply }])
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: 'Sorry, I encountered an error. Please try again.',
        },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section id="chat" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br scrollbar-hidden from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated Aurora Background */}
      <div className="absolute inset-0 opacity-30 scrollbar-hidden">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-full mx-auto relative scrollbar-hidden z-10">
        {/* Section Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center space-x-2 bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 px-4 py-2 rounded-full mb-4 backdrop-blur-xl">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-semibold">AI Health Assistant</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Chat with Meru ...
          </h2>
          <p className="text-lg text-slate-300">
            Ask anything about health and wellness
          </p>
        </div>

        {/* Chat Container */}
        <div className="bg-slate-800/40 backdrop-blur-xl border border-slate-700/50 rounded-3xl overflow-hidden shadow-2xl shadow-purple-500/20">
          {/* Messages Area */}
          <div className="h-[500px] overflow-y-auto p-6 space-y-4 scrollbar-hidden">
            {messages.length === 0 && (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-400 blur-2xl opacity-50 animate-pulse"></div>
                  <Bot className="w-20 h-20 text-cyan-400 mb-4 relative" />
                </div>
                <p className="text-2xl font-semibold text-white mb-2">
                  Start a conversation
                </p>
                <p className="text-slate-400">
                  Ask me anything about health, wellness, or medical topics
                </p>
              </div>
            )}

            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex items-start space-x-3 animate-slide-up ${
                  message.role === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                }`}
              >
                {/* Avatar */}
                <div
                  className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center shadow-lg ${
                    message.role === 'user'
                      ? 'bg-gradient-to-br from-purple-500 to-pink-500 shadow-purple-500/50'
                      : 'bg-gradient-to-br from-cyan-500 to-purple-500 shadow-cyan-500/50'
                  }`}
                >
                  {message.role === 'user' ? (
                    <UserIcon className="w-5 h-5 text-white" />
                  ) : (
                    <Bot className="w-5 h-5 text-white" />
                  )}
                </div>

                {/* Message Bubble */}
                <div
                  className={`max-w-[75%] rounded-2xl px-4 py-3 ${
                    message.role === 'user'
                      ? 'bg-gradient-to-br from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/30'
                      : 'bg-slate-700/50 backdrop-blur-xl border border-slate-600/50 text-slate-100 shadow-lg'
                  }`}
                >
                  <p className="leading-relaxed whitespace-pre-wrap">{message.content}</p>
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex items-start space-x-3 animate-slide-up">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center shadow-lg shadow-cyan-500/50">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div className="bg-slate-700/50 backdrop-blur-xl border border-slate-600/50 rounded-2xl px-4 py-3 shadow-lg">
                  <Loader2 className="w-5 h-5 text-cyan-400 animate-spin" />
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <form onSubmit={handleSubmit} className="p-4 bg-slate-800/60 backdrop-blur-xl border-t border-slate-700/50">
            <div className="flex space-x-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                disabled={isLoading}
                className="flex-1 px-4 py-3 rounded-xl bg-slate-700/50 border-2 border-slate-600/50 text-white placeholder-slate-400 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-xl hover:shadow-lg hover:shadow-cyan-500/50 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center space-x-2"
              >
                {isLoading ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <Send className="w-5 h-5" />
                )}
              </button>
            </div>
          </form>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .scrollbar-hidden::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hidden {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  )
}
