import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <BrowserRouter basename="/car-rent-app">
    <GlobalStyle />
    <App />
  </BrowserRouter>
  // </React.StrictMode>
);
