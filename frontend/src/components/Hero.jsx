import { Sparkles, ArrowRight } from 'lucide-react'

export default function Hero({ setActiveSection }) {
  const scrollToChat = () => {
    const element = document.getElementById('chat')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setActiveSection('chat')
    }
  }

  return (
    <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-primary-50 text-primary-700 px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-semibold">AI-Powered Health Assistant</span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-slate-900 via-primary-800 to-teal-800 bg-clip-text text-transparent leading-tight">
            Your Personal Health
            <br />
            Companion
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-slate-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            Get instant, personalized health guidance powered by advanced AI.
            Fast answers, compassionate care, available 24/7.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={scrollToChat}
              className="btn-primary group flex items-center space-x-2"
            >
              <span>Start Chat Now</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-6 py-3 bg-white border-2 border-slate-300 text-slate-700 font-semibold rounded-xl hover:border-primary-600 hover:text-primary-600 transition-all duration-300">
              Learn More
            </button>
          </div>

          {/* Decorative elements */}
          <div className="mt-16 relative">
            <div className="absolute inset-0 flex items-center justify-center opacity-20">
              <div className="w-96 h-96 bg-gradient-to-r from-primary-400 to-teal-400 rounded-full blur-3xl animate-pulse-slow"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
