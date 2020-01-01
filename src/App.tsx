import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './Pages/Home';

import Header from './Components/Header';

const App: React.FC<{}> = () => (
  <>
    <Header />
    <main>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </main>
  </>
);

export default App;
