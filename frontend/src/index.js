import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));

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