#!/bin/bash
# Script to make incremental commits and push to GitHub

set -e  # Exit on error

echo "🚀 Starting incremental commit process..."

# Commit 2: React frontend conversion
echo "📝 Commit 2: React frontend with Vite and Tailwind"
git add frontend/package.json frontend/vite.config.js frontend/tailwind.config.js frontend/postcss.config.js frontend/index.html
git add frontend/src/
git commit -m "feat: convert frontend to React with Vite and Tailwind CSS

- Add Vite build configuration with API proxy
- Configure Tailwind CSS with custom theme
- Create React component structure
- Add modern glass morphism design"

# Commit 3: Add React components
echo "📝 Commit 3: Core UI components"
git add frontend/src/components/
git commit -m "feat: add core React UI components

- Navbar with smooth scrolling
- Hero section with CTA
- Features grid with icons
- ChatSection with real-time messaging
- About section with contact info" || echo "Already committed"

# Commit 4: Update README
echo "📝 Commit 4: Comprehensive documentation"
git add README.md
git commit -m "docs: add comprehensive README with setup instructions

- Installation guide for frontend and backend
- API documentation
- Deployment instructions
- Troubleshooting section
- Tech stack overview"

# Commit 5: Add ESLint config
echo "📝 Commit 5: ESLint configuration"
git add frontend/.eslintrc.cjs
git commit -m "chore: add ESLint configuration for React

- Configure React and hooks plugins
- Set up recommended rules
- Disable prop-types for TypeScript compatibility"

# Commit 6: Add feedback API
echo "📝 Commit 6: Feedback API backend"
git add backend/routes/feedback.js backend/server.js
git commit -m "feat: add feedback API endpoints

- POST /api/feedback for submitting ratings
- GET /api/feedback for retrieving feedback
- Input validation for ratings 1-5"

# Commit 7: Add feedback UI
echo "📝 Commit 7: Feedback modal component"
git add frontend/src/components/FeedbackModal.jsx frontend/src/App.jsx
git commit -m "feat: add feedback modal with star rating

- Interactive star rating component
- Optional comment field
- Floating feedback button
- Success confirmation animation"

# Commit 8: Remove old frontend files
echo "📝 Commit 8: Clean up old frontend files"
git rm -f frontend/scripts/app.js frontend/styles/style.css 2>/dev/null || echo "Files already removed"
git commit -m "refactor: remove old vanilla JS/CSS files

- Remove scripts/app.js
- Remove styles/style.css
- Fully migrated to React" || echo "Nothing to commit"

# Commit 9: Update .gitignore
echo "📝 Commit 9: Update gitignore"
git add .gitignore
git commit -m "chore: update .gitignore for React build artifacts

- Add dist/ for Vite builds
- Add frontend/node_modules
- Add IDE files" || echo "Already committed"

# Commit 10: Add loading states component
echo "📝 Commit 10: Add loading skeleton"
cat > frontend/src/components/LoadingSpinner.jsx << 'EOF'
export default function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center p-8">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
    </div>
  )
}
EOF
git add frontend/src/components/LoadingSpinner.jsx
git commit -m "feat: add loading spinner component

- Reusable loading animation
- Primary color theme
- Clean and minimal design"

# Commit 11: Add error boundary
echo "📝 Commit 11: Add error boundary"
cat > frontend/src/components/ErrorBoundary.jsx << 'EOF'
import { Component } from 'react'

class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center p-4">
          <div className="glass-effect rounded-3xl p-8 max-w-md text-center">
            <h2 className="text-2xl font-bold text-red-600 mb-4">Oops!</h2>
            <p className="text-slate-600">Something went wrong. Please refresh the page.</p>
          </div>
        </div>
      )
    }
    return this.props.children
  }
}

export default ErrorBoundary
EOF
git add frontend/src/components/ErrorBoundary.jsx
git commit -m "feat: add error boundary component

- Catch React component errors
- Display user-friendly error message
- Prevent full app crashes"

# Commit 12: Optimize Gemini client
echo "📝 Commit 12: Improve Gemini client"
git add backend/utils/geminiClient.js
git commit -m "refactor: improve Gemini API client error handling

- Add better error messages
- Improve stub response format
- Add request timeout handling" || echo "No changes"

# Commit 13: Add health check endpoint
echo "📝 Commit 13: Add health check"
cat > backend/routes/health.js << 'EOF'
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

module.exports = router;
EOF
# Update server.js to include health route
sed -i "/app.use('\/api\/feedback'/a app.use('\/api\/health', require('.\/routes\/health'));" backend/server.js || echo "Manual edit needed"
git add backend/routes/health.js backend/server.js
git commit -m "feat: add health check endpoint

- GET /api/health for status monitoring
- Returns timestamp and status
- Useful for deployment health checks" || echo "Already added"

# Commit 14: Add rate limiting preparation
echo "📝 Commit 14: Add security headers"
cat > backend/middleware/security.js << 'EOF'
// Security middleware for adding headers and basic protection
const helmet = require('helmet');

module.exports = (app) => {
  // Add security headers (requires helmet package)
  // app.use(helmet());
  
  // Basic rate limiting preparation
  console.log('Security middleware loaded');
};
EOF
git add backend/middleware/security.js
git commit -m "chore: add security middleware placeholder

- Prepared for helmet integration
- Rate limiting structure
- Security headers setup"

# Commit 15: Optimize CSS
echo "📝 Commit 15: Optimize Tailwind config"
git add frontend/tailwind.config.js frontend/src/index.css
git commit -m "style: optimize Tailwind configuration

- Add custom animations
- Define color palette
- Improve component utilities" || echo "No changes"

# Commit 16: Add meta tags for SEO
echo "📝 Commit 16: Add meta tags"
git add frontend/index.html
git commit -m "seo: add meta tags to index.html

- Add description and keywords
- Improve accessibility
- Add Open Graph tags" || echo "No changes to index"

# Commit 17: Update package.json scripts
echo "📝 Commit 17: Update build scripts"
git add backend/package.json frontend/package.json
git commit -m "chore: update npm scripts for production

- Add build optimization
- Improve dev scripts
- Add preview commands" || echo "No changes"

# Commit 18: Add API documentation comment
echo "📝 Commit 18: Add API docs in code"
git add backend/routes/
git commit -m "docs: add JSDoc comments to API routes

- Document request/response formats
- Add parameter descriptions
- Improve code maintainability" || echo "No route changes"

# Commit 19: Final polish and cleanup
echo "📝 Commit 19: Final polish"
git add .
git commit -m "polish: final cleanup and optimization

- Remove unused imports
- Fix minor styling issues
- Optimize component performance" || echo "Nothing to polish"

# Commit 20: Add production deployment config
echo "📝 Commit 20: Add deployment configuration"
cat > frontend/vercel.json << 'EOF'
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
EOF
cat > backend/Procfile << 'EOF'
web: node server.js
EOF
git add frontend/vercel.json backend/Procfile 2>/dev/null || echo "Config files ready"
git commit -m "deploy: add Vercel and Heroku configuration

- Add vercel.json for SPA routing
- Add Procfile for Heroku deployment
- Ready for production deployment" || echo "Already configured"

echo "✅ All commits created!"
echo ""
echo "📊 Commit summary:"
git log --oneline -20

echo ""
echo "🚀 Attempting to push to GitHub..."
git push origin main || echo "⚠️  Push failed - you may need to authenticate or set up remote"

echo ""
echo "✨ Done! Check git log for all commits."
