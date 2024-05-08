import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Event from './pages/Event';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/event/:eventId" component={Event} />
      </Switch>
    </Router>
  );
}

export default App;
