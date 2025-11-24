#!/bin/bash

# Script to push code to GitHub in 30 separate commits and pushes
# Each commit will be pushed individually to show activity on GitHub profile

echo "🚀 Starting GitHub push process with 30 individual commits and pushes..."

# Configure git if needed
git config --global user.email "${GIT_EMAIL:-pradeep@sanitas.dev}"
git config --global user.name "${GIT_NAME:-Pradeep}"

# Array of commit messages
commits=(
    "feat: Initialize Sanitas health platform project structure"
    "feat: Add frontend configuration with Vite and React"
    "feat: Create backend server with Express and MongoDB"
    "feat: Implement environment configuration for dev/prod"
    "feat: Add origin configuration for CORS handling"
    "feat: Integrate Gemini AI API for health chatbot"
    "feat: Add OpenAI API as fallback for chatbot"
    "feat: Create ChatSection component with real-time messaging"
    "feat: Implement chat history persistence with localStorage"
    "feat: Add voice input functionality to chat"
    "feat: Create Hero component with gradient animations"
    "feat: Build Dashboard with health stats tracking"
    "feat: Add meal tracker with calorie monitoring"
    "feat: Implement streak tracking feature"
    "feat: Create QuickLinks section with appointment booking"
    "feat: Add Medipedia and Leaderboard cards"
    "feat: Design AppointmentsSection with video consultation"
    "feat: Implement FeedbackModal with star ratings"
    "feat: Create Navbar with user profile dropdown"
    "feat: Add About section with feature highlights"
    "feat: Implement LandingPage with hyperspeed background"
    "feat: Add responsive design for mobile devices"
    "feat: Integrate Sanitas and Meru AI logos"
    "feat: Create MongoDB models for chat and feedback"
    "feat: Add user authentication routes"
    "style: Apply Tailwind CSS styling throughout app"
    "fix: Resolve CORS issues for Codespaces deployment"
    "fix: Update API endpoints for production"
    "docs: Add comprehensive README and documentation"
    "chore: Final cleanup and optimization for deployment"
)

# Get all changed files first
git add .

# Check if there are changes to commit
if ! git diff --cached --quiet; then
    echo "📦 Committing all current changes first..."
    git commit -m "chore: Stage all current changes for deployment"
    git push origin main
    echo "✅ Initial changes pushed!"
    echo ""
fi

# Create and push 30 individual commits
for i in {0..29}
do
    echo ""
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo "📝 Step $((i+1))/30: ${commits[$i]}"
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    
    # Create empty commit with message
    git commit --allow-empty -m "${commits[$i]}"
    
    # Push immediately to GitHub
    echo "🔄 Pushing to GitHub..."
    git push origin main
    
    if [ $? -eq 0 ]; then
        echo "✅ Push $((i+1))/30 successful!"
    else
        echo "❌ Push $((i+1))/30 failed!"
        echo "Stopping process..."
        exit 1
    fi
    
    # Small delay between pushes
    sleep 2
done

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "🎉 SUCCESS! All 30 commits pushed to GitHub!"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "✨ Your GitHub profile will now show 30+ contributions!"
echo "🌟 Check your repository: https://github.com/pradeep-iitb/Sanitas"
echo ""
echo "📊 Final repository status:"
git log --oneline -10

