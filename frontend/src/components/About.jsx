import { Mail, MapPin, Phone } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
              About Sanitas
            </h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              Sanitas is a cutting-edge AI health assistant designed to provide instant,
              personalized health guidance. Powered by Google Gemini's advanced AI technology,
              we deliver accurate and compassionate responses to your health questions.
            </p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Our platform combines intelligent conversation with persistent chat history,
              allowing you to track your health journey over time. Whether you need quick
              answers or detailed health information, Sanitas is here 24/7.
            </p>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-slate-700">
                <Mail className="w-5 h-5 text-primary-600" />
                <a href="mailto:hello@sanitas.example" className="hover:text-primary-600 transition-colors">
                  hello@sanitas.example
                </a>
              </div>
              <div className="flex items-center space-x-3 text-slate-700">
                <Phone className="w-5 h-5 text-primary-600" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-700">
                <MapPin className="w-5 h-5 text-primary-600" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>

          {/* Feature Highlights */}
          <div className="glass-effect rounded-3xl p-8 animate-slide-up">
            <h3 className="text-2xl font-bold mb-6 text-slate-900">Why Choose Sanitas?</h3>
            <div className="space-y-4">
              {[
                {
                  title: '🚀 Instant Responses',
                  description: 'Get answers in seconds, not hours',
                },
                {
                  title: '🔒 Privacy First',
                  description: 'Your conversations are secure and confidential',
                },
                {
                  title: '🎯 Personalized Care',
                  description: 'Tailored guidance based on your needs',
                },
                {
                  title: '📱 Always Available',
                  description: '24/7 access from any device',
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="p-4 bg-white rounded-xl hover:shadow-md transition-shadow"
                >
                  <h4 className="font-semibold text-slate-900 mb-1">{item.title}</h4>
                  <p className="text-slate-600 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
