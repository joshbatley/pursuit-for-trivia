import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Header from './components/Header';

const App: React.FC = () => (
  <>
    <Header />
    <main>
      <Switch>
        <Route path="/" component={Home} />
      </Switch>
    </main>
  </>
);

export default App;
