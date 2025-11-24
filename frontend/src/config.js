// Frontend configuration
// Using OR operator for dev and production environments

// For GitHub Codespaces, construct the backend URL from the current domain
const getBackendOrigin = () => {
  // Check if we're in Codespaces
  if (window.location.hostname.includes('github.dev') || window.location.hostname.includes('app.github.dev')) {
    // Replace the frontend port (5173) with backend port (5000)
    const backendUrl = window.location.origin.replace('-5173.', '-5000.');
    console.log('Codespaces backend URL:', backendUrl);
    return backendUrl;
  }
  // For local development
  return import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000';
};

export const BACKEND_ORIGIN = getBackendOrigin();

export const FRONTEND_ORIGIN = window.location.origin || 'http://localhost:5173';
