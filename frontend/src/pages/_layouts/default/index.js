

import React from 'react';
import propTypes from 'prop-types';

import FrontPageHeader from '../../../components/FrontPageHeader';
import BlackFooter from '../../../components/BlackFooter';

import { Wrapper } from './styles';

export default function AuthLayout({children}){
  return <Wrapper>
    <FrontPageHeader />
    {children}
    <BlackFooter />
    </Wrapper>;
}

AuthLayout.propTypes = {
  children: propTypes.element.isRequired,
};