import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';
import FrontPage from './../components/FrontPage/FrontPage'
import Forms from './../components/Forms/forms'

export default function Routes() {
  return(
    <Switch>
      <Route path="/" exact component={FrontPage} />
      <Route path="/register" component={SignUp} />


      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/profile" component={Profile} isPrivate />
      <Route path ="/forms" component ={Forms} isPrivate/>
    </Switch>
  );
}