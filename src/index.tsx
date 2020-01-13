import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import * as Sentry from '@sentry/browser';
import config from 'config';

import ProviderWrapper from './ProvidersWrapper';
import App from './App';
import './index.css';

Sentry.init({ dsn: config.sentry });

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
