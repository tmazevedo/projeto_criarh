import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/criarhLogo.png'

import { Container, Content, Profile, Logar } from './styles';


function FrontPageHeader() {
  
  const saveLocalStorage = () =>{
    localStorage.setItem("signed",true);
  }
  
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="CRIARH" />
          <Link to="/dashboard">Início</Link>
          <Link to="/dashboard">Sobre</Link>
          <Link to="/dashboard">Precos</Link>
          <Link to="/dashboard">Contato</Link>  
        </nav>

        <aside>
          <Logar>
            <div>
            <Link to="/dashboard" onClick={saveLocalStorage}>Entre</Link>
            <Link to="/dashboard">Cadastre-se</Link>
            </div>
          </Logar>
        </aside>
      </Content>
    </Container>
  );
}

export default FrontPageHeader;