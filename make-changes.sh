#!/bin/bash

# Script to make 30 small changes and push each separately
echo "🚀 Making 30 code changes with individual commits..."

# Configure git
git config --global user.email "pradeepkumawat132005@gmail.com"
git config --global user.name "pradeep-iitb"

# Change 1: Add comment to config.js
echo "📝 [1/30] Adding documentation to frontend config"
sed -i '1i// Sanitas Frontend Configuration - Auto-detects Codespaces/localhost' frontend/src/config.js
git add frontend/src/config.js
git commit -m "docs: Add configuration documentation to frontend config"
git push origin main
sleep 2

# Change 2: Add comment to backend server
echo "📝 [2/30] Adding server documentation"
sed -i '1i// Sanitas Backend API Server - Health Platform Backend' backend/server.js
git add backend/server.js
git commit -m "docs: Add backend server documentation"
git push origin main
sleep 2

# Change 3: Update README
echo "📝 [3/30] Updating README"
echo "" >> README.md
echo "## 🚀 Quick Start" >> README.md
git add README.md
git commit -m "docs: Add quick start section to README"
git push origin main
sleep 2

# Change 4: Add installation steps
echo "📝 [4/30] Adding installation steps"
echo "" >> README.md
echo "### Installation" >> README.md
echo "\`\`\`bash" >> README.md
echo "npm install" >> README.md
echo "\`\`\`" >> README.md
git add README.md
git commit -m "docs: Add installation steps to README"
git push origin main
sleep 2

# Change 5: Add backend setup
echo "📝 [5/30] Adding backend setup instructions"
echo "" >> README.md
echo "### Backend Setup" >> README.md
echo "\`\`\`bash" >> README.md
echo "cd backend && npm install" >> README.md
echo "\`\`\`" >> README.md
git add README.md
git commit -m "docs: Add backend setup instructions"
git push origin main
sleep 2

# Change 6: Add frontend setup
echo "📝 [6/30] Adding frontend setup instructions"
echo "" >> README.md
echo "### Frontend Setup" >> README.md
echo "\`\`\`bash" >> README.md
echo "cd frontend && npm install" >> README.md
echo "\`\`\`" >> README.md
git add README.md
git commit -m "docs: Add frontend setup instructions"
git push origin main
sleep 2

# Change 7: Add env configuration
echo "📝 [7/30] Adding environment configuration"
echo "" >> README.md
echo "### Environment Variables" >> README.md
echo "Create a \`.env\` file in the backend directory." >> README.md
git add README.md
git commit -m "docs: Add environment variables section"
git push origin main
sleep 2

# Change 8: Add features section
echo "📝 [8/30] Adding features section"
echo "" >> README.md
echo "## ✨ Features" >> README.md
echo "- 🤖 AI-powered health chatbot (Meru AI)" >> README.md
git add README.md
git commit -m "docs: Add features section with AI chatbot"
git push origin main
sleep 2

# Change 9: Add dashboard feature
echo "📝 [9/30] Adding dashboard feature"
echo "- 📊 Health dashboard with stats tracking" >> README.md
git add README.md
git commit -m "docs: Add dashboard feature to README"
git push origin main
sleep 2

# Change 10: Add appointment feature
echo "📝 [10/30] Adding appointment feature"
echo "- 📅 Online appointment booking system" >> README.md
git add README.md
git commit -m "docs: Add appointment booking feature"
git push origin main
sleep 2

# Change 11: Add meal tracking feature
echo "📝 [11/30] Adding meal tracking"
echo "- 🍱 Meal and calorie tracking" >> README.md
git add README.md
git commit -m "docs: Add meal tracking feature"
git push origin main
sleep 2

# Change 12: Add streak feature
echo "📝 [12/30] Adding streak feature"
echo "- 🔥 Daily health streak tracking" >> README.md
git add README.md
git commit -m "docs: Add streak tracking feature"
git push origin main
sleep 2

# Change 13: Add tech stack
echo "📝 [13/30] Adding tech stack"
echo "" >> README.md
echo "## 🛠️ Tech Stack" >> README.md
echo "### Frontend" >> README.md
git add README.md
git commit -m "docs: Add tech stack section"
git push origin main
sleep 2

# Change 14: Add React info
echo "📝 [14/30] Adding React to tech stack"
echo "- React 18" >> README.md
git add README.md
git commit -m "docs: Add React to tech stack"
git push origin main
sleep 2

# Change 15: Add Vite info
echo "📝 [15/30] Adding Vite to tech stack"
echo "- Vite" >> README.md
git add README.md
git commit -m "docs: Add Vite to tech stack"
git push origin main
sleep 2

# Change 16: Add Tailwind info
echo "📝 [16/30] Adding Tailwind to tech stack"
echo "- Tailwind CSS" >> README.md
git add README.md
git commit -m "docs: Add Tailwind CSS to tech stack"
git push origin main
sleep 2

# Change 17: Add backend tech
echo "📝 [17/30] Adding backend technologies"
echo "" >> README.md
echo "### Backend" >> README.md
echo "- Node.js & Express" >> README.md
git add README.md
git commit -m "docs: Add Node.js and Express to tech stack"
git push origin main
sleep 2

# Change 18: Add MongoDB info
echo "📝 [18/30] Adding MongoDB to tech stack"
echo "- MongoDB" >> README.md
git add README.md
git commit -m "docs: Add MongoDB to tech stack"
git push origin main
sleep 2

# Change 19: Add Gemini API info
echo "📝 [19/30] Adding Gemini API"
echo "- Google Gemini AI API" >> README.md
git add README.md
git commit -m "docs: Add Gemini AI API to tech stack"
git push origin main
sleep 2

# Change 20: Add license
echo "📝 [20/30] Adding license section"
echo "" >> README.md
echo "## 📄 License" >> README.md
echo "MIT License" >> README.md
git add README.md
git commit -m "docs: Add MIT license"
git push origin main
sleep 2

# Change 21: Add deployment summary comment
echo "📝 [21/30] Updating deployment summary"
sed -i '1i# Sanitas Deployment Summary' DEPLOYMENT_SUMMARY.md
git add DEPLOYMENT_SUMMARY.md
git commit -m "docs: Add title to deployment summary"
git push origin main
sleep 2

# Change 22: Add package.json comment
echo "📝 [22/30] Documenting frontend package"
sed -i '2i  "description": "Sanitas - AI-Powered Health Platform Frontend",' frontend/package.json
git add frontend/package.json
git commit -m "chore: Add description to frontend package.json"
git push origin main
sleep 2

# Change 23: Add backend package comment
echo "📝 [23/30] Documenting backend package"
sed -i '2i  "description": "Sanitas - AI-Powered Health Platform Backend API",' backend/package.json
git add backend/package.json
git commit -m "chore: Add description to backend package.json"
git push origin main
sleep 2

# Change 24: Create .gitignore improvement
echo "📝 [24/30] Improving .gitignore"
echo "" >> .gitignore
echo "# Editor directories" >> .gitignore
echo ".vscode/" >> .gitignore
git add .gitignore
git commit -m "chore: Add editor directories to gitignore"
git push origin main
sleep 2

# Change 25: Add more gitignore rules
echo "📝 [25/30] Adding more gitignore rules"
echo ".idea/" >> .gitignore
git add .gitignore
git commit -m "chore: Add IDE directories to gitignore"
git push origin main
sleep 2

# Change 26: Add OS files to gitignore
echo "📝 [26/30] Adding OS files to gitignore"
echo "" >> .gitignore
echo "# OS files" >> .gitignore
echo ".DS_Store" >> .gitignore
git add .gitignore
git commit -m "chore: Add OS files to gitignore"
git push origin main
sleep 2

# Change 27: Update contributing
echo "📝 [27/30] Adding contributing guidelines"
echo "" >> README.md
echo "## 🤝 Contributing" >> README.md
echo "Contributions are welcome! Please feel free to submit a Pull Request." >> README.md
git add README.md
git commit -m "docs: Add contributing guidelines"
git push origin main
sleep 2

# Change 28: Add contact info
echo "📝 [28/30] Adding contact information"
echo "" >> README.md
echo "## 📧 Contact" >> README.md
echo "For questions or support, please open an issue." >> README.md
git add README.md
git commit -m "docs: Add contact information"
git push origin main
sleep 2

# Change 29: Add acknowledgments
echo "📝 [29/30] Adding acknowledgments"
echo "" >> README.md
echo "## 🙏 Acknowledgments" >> README.md
echo "- Google Gemini AI for powering the health chatbot" >> README.md
git add README.md
git commit -m "docs: Add acknowledgments section"
git push origin main
sleep 2

# Change 30: Final touch
echo "📝 [30/30] Final documentation update"
echo "- React and Tailwind CSS communities" >> README.md
git add README.md
git commit -m "docs: Complete acknowledgments section"
git push origin main

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "🎉 SUCCESS! All 30 changes committed and pushed!"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "✨ Check your GitHub profile:"
echo "   https://github.com/pradeep-iitb"
echo ""
echo "📊 Repository:"
echo "   https://github.com/pradeep-iitb/Sanitas"
echo ""
echo "🟢 You should see 30+ contributions today!"
