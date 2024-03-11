import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "./Style.css";
import Cart from "../Cart";

function NavbarFromBootstrap() {
  return (
    <div>
      <Navbar
        className="NavbarFromBootsTrap"
        expand="lg"
        style={{
          height: "350px",
          //  backgroundColor: "hsl(197, 78%, 50%)"
        }}
      >
        <Container>
          <Navbar.Brand href="#home">
            <img
              id="logo"
              src="/assets/ino.png"
              height="460"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
        </Container>

        {/* <Cart /> */}
        <Container className="nav-cont">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="NavbarCollapse">
              <Nav.Link href="#home">Home</Nav.Link>
              <NavDropdown title="Projects" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  La Bibliothèque Humaine{" "}
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Awledna Zen (Awzen){" "}
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Euromed </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Fina Mena{" "}
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Generation P
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  InnoGov Academy
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">7 </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#about">About</Nav.Link>
              <NavDropdown title="Contacts" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  Work with us
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Partner with us
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Contact us
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavbarFromBootstrap;
