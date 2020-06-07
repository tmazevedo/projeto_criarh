import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from "../../react-auth0-spa";

import logo from '../../assets/criarhLogo.png'

import { Container, Content, Profile, Logar } from './styles';


function FrontPageHeader() {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
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
            <Link to="/dashboard" onClick={() => loginWithRedirect({})}>Entre</Link>
            
            </div>
          </Logar>
        </aside>

        {/* <aside>
          <Profile>
            <div>
              <strong>Bianca Guerra</strong>
              <Link to="/profile">Meu Perfil</Link>
            </div>
            <img
              src="https://api.adorable.io/avatars/50/abott@adorable.png"
              alt="Bianca Guerra"
              />
          </Profile>
        </aside> */}

      </Content>
    </Container>
  );
}

export default FrontPageHeader;