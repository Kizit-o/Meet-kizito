import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './styles/App.css';  // Import global styles if needed

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);