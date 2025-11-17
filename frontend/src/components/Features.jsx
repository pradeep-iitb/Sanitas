import { MessageCircle, User, History, ThumbsUp } from 'lucide-react'

export default function Features() {
  const features = [
    {
      icon: MessageCircle,
      title: 'AI Chatbot',
      description: 'Intelligent conversations powered by Google Gemini for accurate health information.',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: User,
      title: 'User Profiles',
      description: 'Personalized experience with secure user accounts and preferences.',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: History,
      title: 'Chat History',
      description: 'Access your previous conversations anytime, anywhere.',
      gradient: 'from-orange-500 to-red-500',
    },
    {
      icon: ThumbsUp,
      title: 'Feedback System',
      description: 'Help us improve by rating responses and sharing your experience.',
      gradient: 'from-green-500 to-teal-500',
    },
  ]

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">
            Powerful Features
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Everything you need for intelligent health conversations in one place
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="glass-effect rounded-2xl p-6 card-hover animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 shadow-lg`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-2 text-slate-900">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
