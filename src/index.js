import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Themecontextprovider } from './context/Themecontext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Themecontextprovider>
    <App />
  </Themecontextprovider>
);

