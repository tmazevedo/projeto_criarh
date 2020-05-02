/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "@fortawesome/fontawesome-free";
import "@fortawesome/free-solid-svg-icons";
import "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-svg-core";
import "./Footer.scss";
import LogoCriarRH from "../../assets/criarhLogo-white.png";
import { InputGroup, FormControl, Button } from "react-bootstrap";

class Footer extends React.Component {
  render() {
    return (
      <footer id="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 footer-info">
                <img src={LogoCriarRH} alt="#" />
              </div>
              <div className="col-lg-3 col-md-6 footer-links">
                <h4>Links Úteis</h4>
                <ul>
                  <li>
                    <i className="fa fa-angle-right"></i> <a href="#">Início</a>
                  </li>
                  <li>
                    <i className="fa fa-angle-right"></i>{" "}
                    <a href="#">Sobre Nós</a>
                  </li>
                  <li>
                    <i className="fa fa-angle-right"></i>{" "}
                    <a href="#">Serviços</a>
                  </li>
                  <li>
                    <i className="fa fa-angle-right"></i>{" "}
                    <a href="#">Termos de Serviço</a>
                  </li>
                  <li>
                    <i className="fa fa-angle-right"></i>{" "}
                    <a href="#">Política de Privacidade</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 footer-contact">
                <h4>Get out newsletter</h4>
                <InputGroup className="mb-3">
                  <FormControl
                    placeholder="Enter your e-mail"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                  />
                  <InputGroup.Append>
                    <Button variant="outline-secondary">Subscribe</Button>
                  </InputGroup.Append>
                </InputGroup>
                <div className="social-links">
                  <a href="#" className="twitter">
                    <i className="fa fa-twitter"></i>
                  </a>
                  <a href="#" className="facebook">
                    <i className="fa fa-facebook"></i>
                  </a>
                  <a href="#" className="instagram">
                    <i className="fa fa-instagram"></i>
                  </a>
                  <a href="#" className="google-plus">
                    <i className="fa fa-google-plus"></i>
                  </a>
                  <a href="#" className="linkedin">
                    <i className="fa fa-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
export default Footer;
