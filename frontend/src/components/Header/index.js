import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/criarhLogo.png'
import { useAuth0 } from '../../react-auth0-spa';
import { Container, Content, Profile } from './styles';




function Header() {
  const { loading, user } = useAuth0();

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
              <strong>{user.name}</strong>
              <Link to="/profile">Meu Perfil</Link>
            </div>
            <img
              src={user.picture}
              alt="Thiago Azevedo"
            />
          </Profile>
        </aside>

      </Content>
    </Container>
  );
}

export default Header;