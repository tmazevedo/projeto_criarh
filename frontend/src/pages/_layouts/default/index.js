import React, { useState, useRef } from 'react';
import propTypes from 'prop-types';
import { useOnClickOutside } from '../../../hooks';
import FocusLock from 'react-focus-lock';

import Header from '../../../components/Header'
  
import { Burger, Menu } from '../../../components';

import { Wrapper } from './styles';

export default function DefaultLayout({children}){
  
  const [open, setOpen] = useState(false);
  const node = useRef();
  const menuId = "main-menu";

  useOnClickOutside(node, () => setOpen(false));

  return (
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
  );
}

DefaultLayout.propTypes = {
  children: propTypes.element.isRequired,
};