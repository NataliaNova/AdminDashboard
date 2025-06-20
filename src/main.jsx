import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import { AuthProvider } from './context/AuthContext';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <BrowserRouter>
         <App /> 
      </BrowserRouter>
    </AuthProvider>
  </StrictMode>
);
