import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import GameManagerProvider from 'providers/GameManager/GameManager';
import App from './App';
import './index.css';

ReactDOM.render(
  (
    <GameManagerProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </GameManagerProvider>
  ),
  document.getElementById('root'),
);
