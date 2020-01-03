import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Start from './pages/Start';
import Header from './components/Header';

const App: React.FC = () => (
  <>
    <Header />
    <main>
      <Switch>
        <Route path="/" component={Start} />
      </Switch>
    </main>
  </>
);

export default App;
