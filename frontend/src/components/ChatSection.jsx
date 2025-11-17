import { useState, useRef, useEffect } from 'react'
import { Send, Loader2, Bot, User as UserIcon } from 'lucide-react'

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
    <section id="chat" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">
            Chat with Sanitas
          </h2>
          <p className="text-lg text-slate-600">
            Ask anything about health and wellness
          </p>
        </div>

        {/* Chat Container */}
        <div className="glass-effect rounded-3xl overflow-hidden shadow-2xl">
          {/* Messages Area */}
          <div className="h-[500px] overflow-y-auto p-6 space-y-4 bg-gradient-to-b from-white/50 to-slate-50/50">
            {messages.length === 0 && (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <Bot className="w-16 h-16 text-primary-600 mb-4" />
                <p className="text-xl font-semibold text-slate-700 mb-2">
                  Start a conversation
                </p>
                <p className="text-slate-500">
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
                  className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${
                    message.role === 'user'
                      ? 'bg-gradient-to-br from-purple-500 to-pink-500'
                      : 'bg-gradient-to-br from-primary-500 to-teal-500'
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
                      ? 'bg-gradient-to-br from-primary-600 to-teal-600 text-white'
                      : 'bg-white text-slate-800 shadow-md'
                  }`}
                >
                  <p className="leading-relaxed whitespace-pre-wrap">{message.content}</p>
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex items-start space-x-3 animate-slide-up">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-primary-500 to-teal-500 flex items-center justify-center">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div className="bg-white rounded-2xl px-4 py-3 shadow-md">
                  <Loader2 className="w-5 h-5 text-primary-600 animate-spin" />
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <form onSubmit={handleSubmit} className="p-4 bg-white border-t border-slate-200">
            <div className="flex space-x-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                disabled={isLoading}
                className="flex-1 px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-primary-500 focus:outline-none disabled:bg-slate-50 disabled:cursor-not-allowed transition-colors"
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="px-6 py-3 bg-gradient-to-r from-primary-600 to-teal-600 text-white rounded-xl hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center space-x-2"
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
    </section>
  )
}
