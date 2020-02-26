import React from 'react';
import { Route } from 'react-router-dom';

import Start from 'pages/Start';
import ModeSelector from 'pages/ModeSelector';
import GameScene from 'pages/GameScene';
import GameOver from 'pages/GameOver';


import AnimateSwitch from 'components/AnimationSwitch';

const App: React.FC = () => (
  <AnimateSwitch>
    <Route path="/" exact component={Start} />
    <Route path="/mode-selector" component={ModeSelector} />
    <Route path="/game/:mode" component={GameScene} />
    <Route path="/game-over" component={GameOver} />
  </AnimateSwitch>
);

export default App;
