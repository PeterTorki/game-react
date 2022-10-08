import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { HashRouter  } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter base='/'>
      <App />
    </HashRouter>
  </React.StrictMode>
);


reportWebVitals();
