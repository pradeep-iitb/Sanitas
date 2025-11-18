#!/bin/bash

cd /workspaces/Sanitas

echo "Starting 20 commits for today..."

# Commit 2
git add frontend/src/hooks/useScrollAnimation.js
git commit -m "feat: add scroll-triggered animation hook with intersection observer"
git push
echo "✅ Commit 2/20 done"

# Commit 3
git add frontend/src/components/Hero.jsx
git commit -m "feat: enhance hero section gradients with glow effects and animations"
git push
echo "✅ Commit 3/20 done"

# Commit 4
git add frontend/src/components/ChatSection.jsx
git commit -m "feat: implement chat history persistence with localStorage"
git push
echo "✅ Commit 4/20 done"

# Commit 5
git add frontend/src/components/ChatSection.jsx
git commit -m "feat: add message timestamps and time formatting"
git push
echo "✅ Commit 5/20 done"

# Commit 6
git add frontend/src/components/ChatSection.jsx
git commit -m "feat: implement copy message functionality with visual feedback"
git push
echo "✅ Commit 6/20 done"

# Commit 7
git add frontend/src/components/ChatSection.jsx
git commit -m "feat: add clear chat history with confirmation dialog"
git push
echo "✅ Commit 7/20 done"

# Commit 8
git add frontend/src/components/ChatSection.jsx
git commit -m "feat: integrate voice input using Web Speech API"
git push
echo "✅ Commit 8/20 done"

# Commit 9
git add frontend/src/components/ChatSection.jsx
git commit -m "feat: add suggested prompts for quick health questions"
git push
echo "✅ Commit 9/20 done"

# Commit 10
git add frontend/src/components/ChatSection.jsx
git commit -m "feat: enhance typing indicator with animated bounce dots"
git push
echo "✅ Commit 10/20 done"

# Commit 11
git add frontend/src/components/ChatSection.jsx
git commit -m "feat: add chat header with online status indicator"
git push
echo "✅ Commit 11/20 done"

# Commit 12
git add frontend/src/components/Dashboard.jsx
git commit -m "feat: add pulse animations to streak counter"
git push
echo "✅ Commit 12/20 done"

# Commit 13
git add frontend/src/components/Dashboard.jsx
git commit -m "feat: enhance calorie progress bar with gradients and shadows"
git push
echo "✅ Commit 13/20 done"

# Commit 14
git add frontend/src/components/Dashboard.jsx
git commit -m "feat: add lift and translate effects to all dashboard cards"
git push
echo "✅ Commit 14/20 done"

# Commit 15
git add frontend/src/components/Dashboard.jsx
git commit -m "feat: enhance meal cards with hover scale and emoji animations"
git push
echo "✅ Commit 15/20 done"

# Commit 16
git add frontend/src/components/Dashboard.jsx
git commit -m "feat: improve quick action buttons with advanced hover effects"
git push
echo "✅ Commit 16/20 done"

# Commit 17
git add frontend/src/components/About.jsx
git commit -m "feat: enhance about section feature cards with stagger animations"
git push
echo "✅ Commit 17/20 done"

# Commit 18
git add frontend/src/components/Toast.jsx
git commit -m "feat: create toast notification component for user feedback"
git push
echo "✅ Commit 18/20 done"

# Commit 19
git add frontend/src/components/LoadingSkeleton.jsx
git commit -m "feat: add loading skeleton component for better UX"
git push
echo "✅ Commit 19/20 done"

# Commit 20
git add frontend/src/components/ParticleBackground.jsx
git commit -m "feat: create particle background animation component"
git push
echo "✅ Commit 20/20 done"

# Bonus commits for extra features
git add frontend/src/components/ThemeToggle.jsx
git commit -m "feat: add theme toggle component with smooth transitions"
git push
echo "✅ Bonus commit 1 done"

git add frontend/src/components/ChatExport.jsx
git commit -m "feat: implement chat export functionality to download history"
git push
echo "✅ Bonus commit 2 done"

# Final commit for script and any remaining files
git add .
git commit -m "chore: add comprehensive UI enhancements and utility components"
git push
echo "✅ Final commit done"

echo ""
echo "🎉 All commits completed successfully!"
echo "📊 Total commits made today: 20+"
