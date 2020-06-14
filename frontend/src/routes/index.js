import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';
import { useAuth0 } from "../react-auth0-spa";

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';
import Forms from './../components/Forms/forms'
import Chart from './../components/Chart/chart'


export default function Routes() {

  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" component={SignUp} />

      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/profile" component={Profile} isPrivate />
      <Route path="/forms" component={Forms} isPrivate />
      <Route path="/charts" component={Chart} isPrivate/>
    </Switch>
  );
}