// Backend origin configuration
// Using OR operator for dev and production environments

const FRONTEND_ORIGIN = process.env.FRONTEND_ORIGIN || process.env.FRONTEND_URL || '*'

const BACKEND_ORIGIN = process.env.BACKEND_ORIGIN || process.env.BACKEND_URL || 'https://your-production-backend.com' || 'http://localhost:5000'

module.exports = {
  FRONTEND_ORIGIN,
  BACKEND_ORIGIN
}
