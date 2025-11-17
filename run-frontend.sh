#!/bin/bash
# Script to install and run the frontend

echo "🔧 Installing frontend dependencies..."
cd /workspaces/Sanitas/frontend
npm install

echo ""
echo "🚀 Starting Vite dev server..."
echo "Frontend will be available at http://localhost:5173"
echo ""
npm run dev
