import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

import AuthLayout from '../pages/_layouts/auth';
import DefaultLayout from '../pages/_layouts/default';
import { useAuth0 } from '../react-auth0-spa';

export default function RouteWrapper({
  component: Component,
  isPrivate,
  ...rest
}) {

  const { isAuthenticated, loginWithRedirect, logout, loading } = useAuth0();

  if (!isAuthenticated && isPrivate) {
    return <Redirect to="/" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (isAuthenticated && !isPrivate) {
    return <Redirect to="/dashboard" />;
  }

  const Layout = isAuthenticated ? AuthLayout : DefaultLayout;

  return <Route {...rest} render={props => (
    <Layout>
      <Component {...props} />
    </Layout>
  )} />;
}

RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};

RouteWrapper.defaultProps = {
  isPrivate: false,
};