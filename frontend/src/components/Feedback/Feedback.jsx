import React from "react";
import avaliarLogo from "../../assets/avaliar.png";
import action from "../../assets/acao.png";
import analise from "../../assets/analise.png";

import "./Feedback.scss";

class Feedback extends React.Component {
  render() {
    return (
      <>
        <div className="ajuste-central">
          <div className="container-feedback" />
          <div className="rating">
            <img src={avaliarLogo} alt="#" />
          </div>
          <div className="rating-class">Avaliar</div>
          <div className="rating-text">
            <br />
            Sua equipe responde a uma série de perguntas para entender melhor os
            recursos criativos da sua organização.
          </div>
          <div className="analise">
            <img src={analise} alt="#" />
          </div>
          <div className="analise-class">Análise</div>
          <div className="analise-text">
            <br />
            Acesse um painel personalizado com recomendações baseadas nos
            resultados de sua equipe, bem como métodos, estudos de caso e
            ferramentas comprovados.
          </div>
          <div className="action">
            <img src={action} alt="#" />
          </div>
          <div className="action-class">Ação</div>
          <div className="action-text">
            Trabalhe diretamente no painel Diferença criativa para alavancar
            ferramentas e métodos, aprimorar estratégias e capturar as próximas
            etapas em um espaço de equipe colaborativo.
          </div>
        </div>
      </>
    );
  }
}

export default Feedback;
