import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "./Style.css";
// import Cart from "../Cart";
import { Link } from "react-router-dom";

function Header() {
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
          <Navbar.Brand>
            <Link to="/">
              <img
                id="logo"
                src="/assets/ino.png"
                height="460"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
            </Link>
          </Navbar.Brand>
        </Container>

        {/* <Cart /> */}
        <Container className="nav-cont">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="NavbarCollapse">
              <Nav.Link>
                <Link to="/">Home</Link>
              </Nav.Link>

              <NavDropdown title="Projects" id="basic-nav-dropdown">
                <NavDropdown.Item>
                  <Link to="/labibliothequehumaine">
                    La Bibliothèque Humaine
                  </Link>
                </NavDropdown.Item>

                <NavDropdown.Item>
                  <Link to="/awlednaZen">Awledna Zen (Awzen)</Link>
                </NavDropdown.Item>

                <NavDropdown.Item>
                  <Link to="/euromed">Euromed</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/finamena">Fina Mena</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/generationp">Generation P</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/innoGovacademy">InnoGov Academy</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>7 </NavDropdown.Item>
              </NavDropdown>

              <Nav.Link>
                <Link to="/about">About </Link>
              </Nav.Link>

              <NavDropdown title="Contacts" id="basic-nav-dropdown">
                <NavDropdown.Item>
                  <Link to="/workwithus">Work with us</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/Contacts">Contact us</Link>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
