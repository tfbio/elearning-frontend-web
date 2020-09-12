import React, { FC } from 'react';
import { Route, Switch } from 'react-router-dom';

import Landing from '../pages/Landing';
import Dashboard from '../pages/Dashboard';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Landing} />
      <Route path="/dashboard" component={Dashboard} />
    </Switch>
  );
};

export default Routes;
