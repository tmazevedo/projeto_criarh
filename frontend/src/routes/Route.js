import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

import AuthLayout from '../pages/_layouts/auth';
import DefaultLayout from '../pages/_layouts/default';

export default function RouteWrapper({
  component: Component,
  isPrivate,
  ...rest 
}) {

  const signed = true;

  if(!signed && isPrivate){
    console.log("Aqui1:" + signed);
    return <Redirect to="/" />;
  }

  if (signed && !isPrivate) {
    console.log("Aqui2:" + signed);
    return <Redirect to="/dashboard" />;
  }

  const Layout = signed ? AuthLayout : DefaultLayout;

  return <Route {...rest} render={props =>(
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