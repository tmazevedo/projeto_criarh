import React from 'react';
import logo from './../../../src/assets/login-screen.png';
import logoCriarh from './../../../src/assets/criarhLogo.png';
import searchLogo from '../../assets/search.png';
import avaliarLogo from '../../assets/avaliar.png';
import analiseLogo from '../../assets/analise.png';
import acao from '../../assets/acao.png';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import './FrontPage.css';
import BlackFooter from './../BlackFooter/blackFooter';
import {useHistory, Redirect} from "react-router-dom";

class FrontPage extends React.Component {
  
  chamaLogin = () => {
    let history = useHistory();
      history.push("/dashboard");
   }
  
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
          <div style={{ marginTop: '-600px', marginLeft: '26px',marginRight:'100%' }} >
            <div className="loginBox">
              <form noValidate>
                <i className="recourseBox"> Entendenda melhor os recursos criativos da sua organização!</i>
                <TextField className="inputEmail"
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  type="email"
                  variant="outlined"
                  margin="normal"
                  // required 
                  />
                <TextField className="inputPassword" variant="outlined"
                  margin="normal"
                  // required
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
                <Button className="confirmButton" type="submit" variant="contained" onClick = {this.chamaLogin} > Entre </Button>
                <div className="orClass">
                  ou
                </div>
                <Button className="signinButton" variant="contained"> Cadastre-se </Button>
              </form>
            </div>
          </div>
        </div>
        <div style={{ width: '1440px', height: '225px', backgroundColor: '#FFFFFF' }} />
        <div className="avaliar">
          <img src={avaliarLogo} className="avaliarLogo" alt='logo' />
        </div>
        <div className="avaliarClass">
          Avaliar
        </div>
        <div className="avaliarText">
          <br />
          Sua equipe responde a uma série de perguntas para entender melhor os recursos criativos da sua organização.
        </div>
        <div className="analise">
          <img src={analiseLogo} className="analiseLogo" alt='logo' />
        </div>
        <div className="analiseClass">
          Análise
        </div>
        <div className="analiseText">
          <br />
          Acesse um painel personalizado com recomendações baseadas nos resultados de sua equipe, bem como métodos, estudos de caso e ferramentas comprovados.
        </div>
        <div className="acao">
          <img src={acao} className="acaoLogo" alt='logo' />
        </div>
        <div className="acaoClass">
          Ação
        </div>
        <div className="acaoText">
          Trabalhe diretamente no painel Diferença criativa para alavancar ferramentas e métodos, aprimorar estratégias e capturar as próximas etapas em um espaço de equipe colaborativo.
        </div>
        <div>
          <BlackFooter/>
        </div>
      </div>
    )
  }
}
export default FrontPage;