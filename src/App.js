import React from 'react';

import Routes from './routes';
//import history from './services/history';

import GlobalStyle from './styles/global';

import NavBar from "./components/NavBar";
import { useAuth0 } from "./react-auth0-spa";
import { Router, Route, Switch } from "react-router-dom";
import Profile from "./components/Profile";
import history from "./utils/history";
import DashBoard from './components/dashBoard/dashBoard';

function App(){
  
  const { loading } = useAuth0();

  if (loading) {
    return <div>Loading...</div>;
  }

  /*return (
    <Router history={history}>
      <Routes />
      <GlobalStyle/>
    </Router>
    );
    */
   return (
    <div className="App">
      <Router history={history}>
        <header>
          <NavBar />
        </header>
        <Switch>
          <Route path="/" exact />
          <Route path="/dashboard" component={DashBoard} />
          <Route path="/profile" component={Profile} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;