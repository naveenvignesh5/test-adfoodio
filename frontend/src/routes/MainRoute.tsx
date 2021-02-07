import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// pages
import { Home, Menu } from '@pages';

export default function MainRoute(): JSX.Element {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/menu" component={Menu} />
      </Switch>
    </Router>
  );
}
