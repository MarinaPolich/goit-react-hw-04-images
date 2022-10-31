import React from 'react';
import ReactDOM from 'react-dom/client';
import 'modern-normalize/modern-normalize.css';
import { App } from 'components/App';
import './index.styled.js';
import { GlobalStyle } from './index.styled.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
);
