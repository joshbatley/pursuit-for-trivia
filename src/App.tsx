import React from 'react';
import { Route } from 'react-router-dom';

import Start from 'pages/Start';
import ModeSelector from 'pages/ModeSelector';
import GameScene from 'pages/GameScene';

import AnimateSwitch from 'components/AnimationSwitch';

const App: React.FC = () => (
  <AnimateSwitch>
    <Route path="/" exact component={Start} />
    <Route path="/mode-selector" component={ModeSelector} />
    <Route path="/game/:mode" component={GameScene} />
  </AnimateSwitch>
);

export default App;
