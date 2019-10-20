import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom'

import home from './pages/home'
import survey from './pages/survey'
import thanks from './pages/thanks'
import list from './pages/list'

function App() {
  return (
    <HashRouter>
      <div style={{ height:"100%" }}>
        <Switch>
          <Route path="/" exact component={home} />
          <Route path="/survey" component={survey} />
          <Route path="/done" component={thanks} />
          <Route path="/list" component={list} />
        </Switch>
      </div>
    </HashRouter>
  );
}

export default App;
