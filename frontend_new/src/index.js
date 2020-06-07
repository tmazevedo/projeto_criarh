import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from "./serviceWorker";
import { Auth0Provider } from "./react-auth0-spa";
import config from "./auth_config.json";
import history from "./utils/history";

const onRedirectCallback = appState => {
    history.push(
      appState && appState.targetUrl
        ? appState.targetUrl
        : window.location.pathname
    );
  };

ReactDOM.render(
    <Auth0Provider
      domain={config.domain}
      client_id={config.clientId}
      redirect_uri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
    >
    <App />
    </Auth0Provider>,
    document.getElementById("root")
  );
  
  serviceWorker.unregister();

/*ReactDOM.render(
    <App />, 
    document.getElementById('root')
);*/

// import './index.css';
// import FrontPage from './components/FrontPage/FrontPage';
// import * as serviceWorker from './serviceWorker';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import DashBoard from './components/dashBoard/DashBoard';

// import AuthLayout from './pages/_layouts/auth';
// import DefaultLayout from './pages/_layouts/default';

// ReactDOM.render(
//   (
//     <Router>
//       <Switch>
//         <Route exact path="/" component={FrontPage} />
//         <Route path="/dashboard" component={DashBoard} />
//   <Route path="/auth" render={props => (<AuthLayout>components</AuthLayout>)}/>
//       </Switch>
//     </Router>
//   ),
//   document.getElementById('root')
// );

// serviceWorker.unregister();