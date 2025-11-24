// Sanitas Frontend Configuration - Auto-detects Codespaces/localhost
// Using OR operator for dev and production environments

// Backend URL configuration
const getBackendOrigin = () => {
  // Production Vercel backend (hardcoded)
  if (window.location.hostname.includes('vercel.app')) {
    return 'https://sanitas-backend.vercel.app';
  }
  
  // Environment variable
  if (import.meta.env.VITE_BACKEND_URL) {
    return import.meta.env.VITE_BACKEND_URL;
  }
  
  // Check if we're in Codespaces
  if (window.location.hostname.includes('github.dev') || window.location.hostname.includes('app.github.dev')) {
    // Replace the frontend port (5173) with backend port (5000)
    const backendUrl = window.location.origin.replace('-5173.', '-5000.');
    console.log('Codespaces backend URL:', backendUrl);
    return backendUrl;
  }
  
  // For local development
  return 'http://localhost:5000';
};

export const BACKEND_ORIGIN = getBackendOrigin();

export const FRONTEND_ORIGIN = window.location.origin || 'http://localhost:5173';
