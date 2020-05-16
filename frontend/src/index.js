import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import FrontPage from './components/FrontPage/FrontPage';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import DashBoard from './components/dashBoard/DashBoard';

ReactDOM.render(
  (
    <Router>
      <Switch>
        <Route exact path="/" component={FrontPage} />
        <Route path="/dashboard" component={DashBoard} />
      </Switch>
    </Router>
  ),
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();