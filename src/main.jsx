import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './components/App.jsx'; // Ensure this path correctly points to the App.jsx file

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
