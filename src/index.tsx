import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import * as Sentry from '@sentry/browser';
import config, { isDev } from 'config';
import ProviderWrapper from './ProvidersWrapper';
import { register } from './serviceWorker';
import App from './App';
import './index.css';

if (!isDev) {
  Sentry.init({ dsn: config.sentry });
  register();
}

ReactDOM.render(
  <ProviderWrapper>
    <BrowserRouter basename="/">
      <App />
    </BrowserRouter>
  </ProviderWrapper>,
  document.getElementById('root'),
);
