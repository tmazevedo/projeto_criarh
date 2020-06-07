// src/components/NavBar.js

import React from "react";
import { useAuth0 } from "../react-auth0-spa";
import Routes from '../routes';
import { Router } from 'react-router-dom';
import history from '../services/history';
import GlobalStyle from '../styles/global';
import { Link } from "react-router-dom";

//NESTA CLASSE TEMOS A NAVEGAÇÃO DA TELA DE DASHBOARD, PROFILE E LOGOUT
const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <div>
      {!isAuthenticated && (
        //<button onClick={() => loginWithRedirect({})}>Log in</button>
        <Router history={history}>
            <Routes />
            <GlobalStyle/>
        </Router>
      )}

    {isAuthenticated && <button onClick={() => logout()}>Log out</button>}
    
    {isAuthenticated && (
      <span>
        <Link to="/dashboard">Dashboard</Link>&nbsp;
        <Link to="/profile">Profile</Link>
      </span>
    )}    
    

    </div>
  );
};

export default NavBar;