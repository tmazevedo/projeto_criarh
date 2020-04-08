import React from 'react';
import logo from './../../../src/assets/login-screen.png';
import logoCriarh from './../../../src/assets/criarhLogo.png'
import searchLogo from '../../assets/search.png'
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import './FrontPage.css';

class FrontPage extends React.Component {
  render() {
    return (
      <div>
        <div className="logo">
          <img src={logoCriarh} className="logoCriaRh" alt="logo" />
          <div className="inicioButton">
            Início
          </div>
          <div className="metodoButton">
            Método
          </div>
          <div className="sobreButton">
            Sobre
          </div>
          <div className="precoButton">
            Preço
          </div>
          <div className="contateButton">
            Contate nos
          </div>
          <div className="searchButton">
            <img src={searchLogo} className="searchLogo" alt="logo" />
          </div>
        </div>
        <div className="firstImageDiv">
          <img src={logo} className="firstImage " alt='logo' />
          <div style={{ marginTop: '-600px', marginLeft: '26px' }} >
            <div className="loginBox">
              <i className="recourseBox"> Entendenda melhor os recursos criativos da sua organização!</i>
              <Input className="inputEmail" placeholder ="Email" type="email" ></Input>
              <Input className="inputPassword" placeholder ="Password" type="password" ></Input>
              <Button className="confirmButton"> Entre </Button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default FrontPage;
