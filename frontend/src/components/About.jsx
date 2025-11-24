import { Mail, MapPin, Phone, Zap, Shield, Target, Smartphone, Sparkles, Heart } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated Aurora Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 right-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-slide-up">
            <div className="inline-flex items-center space-x-2 bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 px-4 py-2 rounded-full mb-6 backdrop-blur-xl">
              <Heart className="w-4 h-4" />
              <span className="text-sm font-semibold">About Us</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              About Sanitas
            </h2>
            <p className="text-lg text-slate-300 mb-6 leading-relaxed">
              Sanitas is a cutting-edge AI health assistant designed to provide instant,
              personalized health guidance. Powered by Google Gemini's advanced AI technology,
              we deliver accurate and compassionate responses to your health questions.
            </p>
            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              Our platform combines intelligent conversation with persistent chat history,
              allowing you to track your health journey over time. Whether you need quick
              answers or detailed health information, Sanitas is here 24/7.
            </p>

            {/* Contact Info */}
            <div className="space-y-4 bg-slate-800/40 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-6">
              <div className="flex items-center space-x-3 text-slate-300 hover:text-cyan-400 transition-colors group">
                <div className="p-2 bg-cyan-500/10 rounded-lg group-hover:bg-cyan-500/20 transition-colors">
                  <Mail className="w-5 h-5 text-cyan-400" />
                </div>
                <a href="mailto:ambition.sanitas@gmail.com" className="transition-colors">
                  ambition.sanitas@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3 text-slate-300 hover:text-purple-400 transition-colors group">
                <div className="p-2 bg-purple-500/10 rounded-lg group-hover:bg-purple-500/20 transition-colors">
                  <Phone className="w-5 h-5 text-purple-400" />
                </div>
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-300 hover:text-pink-400 transition-colors group">
                <div className="p-2 bg-pink-500/10 rounded-lg group-hover:bg-pink-500/20 transition-colors">
                  <MapPin className="w-5 h-5 text-pink-400" />
                </div>
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>

          {/* Feature Highlights */}
          <div className="bg-slate-800/40 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 animate-slide-up shadow-2xl shadow-purple-500/20">
            <div className="flex items-center space-x-2 mb-6">
              <Sparkles className="w-6 h-6 text-cyan-400" />
              <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Why Choose Sanitas?</h3>
            </div>
            <div className="space-y-4">
              {[
                {
                  icon: Zap,
                  title: 'Instant Responses',
                  description: 'Get answers in seconds, not hours',
                  gradient: 'from-yellow-500 to-orange-500',
                  bg: 'bg-yellow-500/10',
                },
                {
                  icon: Shield,
                  title: 'Privacy First',
                  description: 'Your conversations are secure and confidential',
                  gradient: 'from-cyan-500 to-blue-500',
                  bg: 'bg-cyan-500/10',
                },
                {
                  icon: Target,
                  title: 'Personalized Care',
                  description: 'Tailored guidance based on your needs',
                  gradient: 'from-purple-500 to-pink-500',
                  bg: 'bg-purple-500/10',
                },
                {
                  icon: Smartphone,
                  title: 'Always Available',
                  description: '24/7 access from any device',
                  gradient: 'from-green-500 to-emerald-500',
                  bg: 'bg-green-500/10',
                },
              ].map((item, index) => {
                const Icon = item.icon
                return (
                  <div
                    key={index}
                    className="group p-5 bg-slate-700/30 backdrop-blur-sm border-2 border-slate-600/40 rounded-xl hover:border-cyan-400/60 hover:bg-slate-700/60 transition-all duration-300 hover:scale-110 hover:-translate-y-2 hover:shadow-2xl animate-fade-in"
                    style={{animationDelay: `${index * 0.1}s`}}
                  >
                    <div className="flex items-start space-x-4">
                      <div className={`p-3 ${item.bg} rounded-lg group-hover:scale-125 group-hover:rotate-12 transition-transform shadow-lg`}>
                        <Icon className={`w-6 h-6 bg-gradient-to-br ${item.gradient} bg-clip-text text-transparent`} style={{WebkitTextFillColor: 'transparent', backgroundClip: 'text'}} />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-white mb-1 group-hover:text-cyan-300 transition-colors text-lg">{item.title}</h4>
                        <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors">{item.description}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      <style>{`
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
      `}</style>
    </section>
  )
}
