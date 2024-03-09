import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "./Style.css";

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
              src="/assets/ino.png"
              height="360"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
        </Container>
      </Navbar>
      <Navbar expand="lg" className="NavbarCollapse">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Projects</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <NavDropdown title="Contacts" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
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
