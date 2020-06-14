import React, { useState, useRef } from 'react';
import propTypes from 'prop-types';
import { useOnClickOutside } from '../../../hooks';
import FocusLock from 'react-focus-lock';

import Header from '../../../components/Header'
import { useAuth0 } from "./../../../react-auth0-spa";
import { Link } from "react-router-dom";

import { Burger, Menu } from '../../../components';

import history from '../../../services/history';

import { Wrapper } from './styles';

export default function DefaultLayout({ children }) {

  const [open, setOpen] = useState(false);
  const node = useRef();
  const menuId = "main-menu";
  const { loading } = useAuth0();
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  useOnClickOutside(node, () => setOpen(false));
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      {isAuthenticated && (
        <Wrapper>
          <div ref={node}>
            <Header />
            <FocusLock disabled={!open}>
              <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
              <Menu open={open} setOpen={setOpen} id={menuId} />
            </FocusLock>
          </div>
          {children}
        </Wrapper>
      )}
    </div>
  );
}

DefaultLayout.propTypes = {
  children: propTypes.element.isRequired,
};