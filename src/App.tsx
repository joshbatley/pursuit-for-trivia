import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Start from 'pages/Start';
import ModeSelector from 'pages/ModeSelector';
import GameScene from 'pages/GameScene';

const App: React.FC = () => (
  <>
    <main>
      <Switch>
        <Route path="/" exact component={Start} />
        <Route path="/mode-selector" component={ModeSelector} />
        <Route path="/game/:mode" component={GameScene} />
      </Switch>
    </main>
  </>
);

export default App;
