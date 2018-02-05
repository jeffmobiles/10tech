import React from 'react';
import { Route } from 'react-router';

import LogList from './pages/LogList';
import Login from './pages/Login';

export default (
  <Route component={'cp'}>
    <Route path="/" component={Login} />
    <Route path="/login" component={Login} />
    <Route path="/loglist" component={LogList} />
  </Route>
);
