import React from 'react';
import { StrictMode } from 'react';  
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { ThemeProvider } from './common/ThemeContext.jsx';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<ThemeProvider>
  <App />
  
  </ThemeProvider>
  </React.StrictMode>,
)
