import React from "react";
import "./FrontPage.scss";
import { Navbar, Nav, FormControl, Button, Form } from "react-bootstrap";

//Import de pages
import Login from "../Login/Login";
import Feedback from "../Feedback/Feedback";
import Footer from "../Footer/Footer";

//Import de imgs
import BackgroundLogin from "../../assets/login-screen.png";
import Logo from "../../assets/criarhLogo.png";

class FrontPage extends React.Component {
  render() {
    return (
      <>
        <Navbar bg="light" variant="light">
          <Navbar.Brand href="#home">
            <img className="logo" src={Logo} alt="#" />
          </Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#methods">Métodos</Nav.Link>
            <Nav.Link href="#about">Sobre</Nav.Link>
            <Nav.Link href="#price">Preço</Nav.Link>
            <Nav.Link href="#contact">Contate-nos</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Busca" className="mr-sm-2" />
            <Button variant="outline-primary">Buscar</Button>
          </Form>
        </Navbar>
        <div className="container">
          <img src={BackgroundLogin} alt="#" />
          <div className="login-container">
            <Login />
          </div>
        </div>
        <Feedback />
        <div className="footer">
          <Footer />
        </div>
      </>
    );
  }
}

export default FrontPage;
