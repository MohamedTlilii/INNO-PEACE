import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import "./Style.css";

function Header() {
  return (
    <div style={{backgroundColor:"hsl(210, 16%, 98%)"}}>
      <div>
      <Navbar.Brand>
          <Link to="/">
            <img
              className="logo"
              src="/assets/ino.png"
              height="460"
              alt="logo"
            />
          </Link>
        </Navbar.Brand>
      </div>
    <Navbar expand="lg" className="bg-body-tertiary">
      
      <Container fluid>
       
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav  id="navbarsection"
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
            
          >
            <Nav.Link>
              <Link className="link-hedaer" to="/">
                Home
              </Link>
            </Nav.Link>
            {/* <Nav.Link >Link</Nav.Link> */}
            <NavDropdown title="Projects" id="navbarScrollingDropdown">
              <NavDropdown.Item>
                <Link className="link-hedaer" to="/labibliothequehumaine">
                  La Bibliothèque Humaine
                </Link>
              </NavDropdown.Item>

              <NavDropdown.Item>
                <Link className="link-hedaer" to="/awlednaZen">
                  Awledna Zen (Awzen)
                </Link>
              </NavDropdown.Item>

              <NavDropdown.Item>
                <Link className="link-hedaer" to="/euromed">
                  Euromed
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link className="link-hedaer" to="/finamena">
                  Fina Mena
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link className="link-hedaer" to="/generationp">
                  Generation P
                </Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link className="link-hedaer" to="/innoGovacademy">
                  InnoGov Academy
                </Link>
              </NavDropdown.Item>
              {/* <NavDropdown.Item>
                  <Link className="link-hedaer" to="/7">7</Link>
                </NavDropdown.Item> */}
            </NavDropdown>
            <Nav.Link>
              <Link className="link-hedaer" to="/about">
                About{" "}
              </Link>
            </Nav.Link>

            <NavDropdown title="Contacts" id="basic-nav-dropdown">
              {/* <NavDropdown.Item>
                <Link className="link-hedaer" to="/workwithus">
                  Work with us
                </Link>
              </NavDropdown.Item> */}
              <NavDropdown.Item>
                <Link className="link-hedaer" to="/Contacts">
                  Contact us
                </Link>
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
