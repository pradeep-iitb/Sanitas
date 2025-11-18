#!/bin/bash

# Navigate to project
cd /workspaces/Sanitas || exit

echo "🚀 Starting enhanced commit process..."

# Add all modified files
git add -A

# Show what's being committed
echo "📝 Files to be committed:"
git status --short

# Create the main commit
git commit -m "feat: add comprehensive UI enhancements with 20+ improvements

- Enhanced navbar with better color contrast and animations
- Added scroll-triggered animation hook
- Improved hero section gradients with glow effects
- Implemented chat history persistence with localStorage
- Added message timestamps and time formatting
- Implemented copy message functionality
- Added clear chat history with confirmation
- Integrated voice input using Web Speech API
- Added suggested prompts for quick questions
- Enhanced typing indicator with animated dots
- Added chat header with online status
- Implemented pulse animations on streak counter
- Enhanced calorie progress bar styling
- Added lift and translate effects to cards
- Improved meal card hover animations
- Enhanced quick action button effects
- Improved about section with stagger animations
- Created toast notification component
- Added loading skeleton component
- Implemented particle background animation
- Created theme toggle component
- Added chat export functionality

This commit represents 20+ distinct UI/UX improvements across
all major components of the application."

echo "✅ Commit created successfully!"

# Push to remote
echo "📤 Pushing to GitHub..."
git push

echo "🎉 All changes pushed successfully!"
echo ""
echo "To see your commits on GitHub:"
echo "https://github.com/pradeep-iitb/Sanitas/commits/main"
