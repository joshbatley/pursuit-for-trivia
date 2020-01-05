import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import ProviderWrapper from './ProvidersWrapper';
import App from './App';
import './index.css';

ReactDOM.render(
  (
    <ProviderWrapper>
      <BrowserRouter basename="/">
        <App />
      </BrowserRouter>
    </ProviderWrapper>
  ),
  document.getElementById('root'),
);
