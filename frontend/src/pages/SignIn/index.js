import React, { Component } from 'react';
import acao from '../../assets/acao.png';
import avaliarLogo from '../../assets/avaliar.png';
import analiseLogo from '../../assets/analise.png';
import './styles.css';

// import React, { Component } from 'react';

// import TextField from '@material-ui/core/TextField';
// import './FrontPage.css';
// import BlackFooter from '../BlackFooter/BlackFooter';
// import {Redirect} from "react-router-dom";
// import firebase from '../../firebase';
// import { Container } from './styles';

function Signin() {
  return (
    <div>
      <div className="row1">
        <div className="box1">
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
        </div>

        <div className="box2">
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
        </div>
        <div className="box3">

        <div className="acao">
          <img src={acao} className="acaoLogo" alt='logo' />
          </div>
          <div className="acaoClass">
            Ação
          </div>
          <div className="acaoText">
            Trabalhe diretamente no painel Diferença criativa para alavancar ferramentas e métodos, aprimorar estratégias e capturar as próximas etapas em um espaço de equipe colaborativo.
          </div>
        </div> 
      </div>
    </div>  
  );
}

export default Signin;