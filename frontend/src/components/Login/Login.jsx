import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import ReactModal from "react-modal";
import "./Login.scss";


const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        height: '380px',
        weidth: '500px',
        borderRadius: '50px',
        position: 'absolute'
        }
  };
  
export default class Login extends Component {
  constructor() {
    super();

    this.state = {
      showModal: false,
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }
  

  render() {
    return (
      <div className="login-semimodal">
        <div className="login-box">
          <form noValidate>
            <i className="recourse-box">
              Entenda melhor os recursos criativos da sua organização!
            </i>
            <TextField
              className="input-email"
              id="email"
              label="E-mail"
              name="email"
              autoComplete="email"
              autoFocus
              variant="outlined"
              margin="normal"
              required
            />
            <TextField
              className="input-password"
              variant="outlined"
              margin="normal"
              required
              name="password"
              label="Senha"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              className="confirm-button"
              type="submit"
              variant="contained"
            >
              {" "}
              Entre{" "}
            </Button>
            <div className="or-class">ou</div>
            <Button
              onClick={this.handleOpenModal}
              className="sign-in-button"
              variant="contained"
            >
              Cadastre-se
            </Button>
            
            <div className="modal-class">
            {this.handleOpenModal && (
              <ReactModal
                isOpen={this.state.showModal}
                contentLabel="Minimal Modal Example"
                style = {customStyles}
              >
                <Button
                onClick={this.handleCloseModal}
                className = "close-modal-button"
                >
                x
                </Button>
                <div className = "modal-sign-in">Cadastre sua empresa!</div>
                <TextField
                  className="input-modal-enterprise"
                  id="enterprise"
                  label="Empresa"
                  name="enterprise"
                  autoComplete="enterprise"
                  autoFocus
                  variant="outlined"
                  margin="normal"
                  required
                />
                <TextField
                  className="input-modal-email"
                  label="E-mail"
                  autoComplete="email"
                  autoFocus
                  variant="outlined"
                  margin="normal"
                  required
                />
                <TextField
                  className="input-modal-password"
                  variant="outlined"
                  margin="normal"
                  required
                  name="password"
                  label="Senha"
                  type="password"
                  id="outlined-password-input"
                  autoComplete="current-password"
                />
                <Button
                onClick={this.handleCloseModal}
                variant = "contained"
                className = "confirm-modal-button"
                >
                Confirmar
                </Button>
              </ReactModal>
              
            )}
            </div>
          </form>
        </div>
      </div>
    );
  }
}
