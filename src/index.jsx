import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { UserProfileProvider } from './contexts/UserContext';
import './sass/style.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <UserProfileProvider>
    <App />
  </UserProfileProvider>
</React.StrictMode>
);

