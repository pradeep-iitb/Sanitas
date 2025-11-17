import { useState } from 'react'
import { Star, Send, CheckCircle } from 'lucide-react'

export default function FeedbackModal({ onClose }) {
  const [rating, setRating] = useState(0)
  const [hoveredRating, setHoveredRating] = useState(0)
  const [comment, setComment] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (rating === 0) return

    setIsSubmitting(true)
    try {
      const response = await fetch('/api/feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ rating, comment }),
      })

      if (response.ok) {
        setIsSubmitted(true)
        setTimeout(() => {
          onClose()
        }, 2000)
      }
    } catch (error) {
      console.error('Failed to submit feedback:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
        <div className="glass-effect rounded-3xl p-8 max-w-md w-full text-center animate-slide-up">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-slate-900 mb-2">Thank You!</h3>
          <p className="text-slate-600">Your feedback helps us improve Sanitas.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="glass-effect rounded-3xl p-8 max-w-md w-full animate-slide-up">
        <h3 className="text-2xl font-bold text-slate-900 mb-6">Rate Your Experience</h3>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Star Rating */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-3">
              How would you rate Sanitas?
            </label>
            <div className="flex justify-center space-x-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setRating(star)}
                  onMouseEnter={() => setHoveredRating(star)}
                  onMouseLeave={() => setHoveredRating(0)}
                  className="transition-transform hover:scale-110"
                >
                  <Star
                    className={`w-10 h-10 ${
                      star <= (hoveredRating || rating)
                        ? 'fill-yellow-400 text-yellow-400'
                        : 'text-slate-300'
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Comment */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Additional Comments (Optional)
            </label>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Tell us more about your experience..."
              rows={4}
              className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-primary-500 focus:outline-none resize-none"
            />
          </div>

          {/* Buttons */}
          <div className="flex space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-6 py-3 bg-slate-100 text-slate-700 font-semibold rounded-xl hover:bg-slate-200 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={rating === 0 || isSubmitting}
              className="flex-1 btn-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
            >
              {isSubmitting ? (
                <span>Sending...</span>
              ) : (
                <>
                  <span>Submit</span>
                  <Send className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
