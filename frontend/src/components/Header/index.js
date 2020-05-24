import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/criarhLogo.png'

import { Container, Content, Profile } from './styles';


function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <Link to="/dashboard">DASHBOARD</Link>
          <img src={logo} alt="CRIARH" />
        </nav>

        <aside>
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
        </aside>

      </Content>
    </Container>
  );
}

export default Header;