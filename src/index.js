import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './component/default css/Default.css';
import '../src/component/color/color.css';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

