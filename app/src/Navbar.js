import React, { useState, useEffect } from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Container,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faUser,
  faShoppingCart,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";

const categories = [
  { name: "Laptopy i Komputery", path: "/" },
  { name: "Smartfony i Smartwatche", path: "/" },
  { name: "Gaming i Streaming", path: "/" },
  { name: "Podzespoły komputerowe", path: "/" },
  { name: "Tv i Audio", path: "/" },
];

const AppNavbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Navbar style={{ background: "#2c3e50", padding: "10px 20px" }} expand="lg" sticky="top">
      <Nav className="me-auto">
              {scrolled && (
                <NavDropdown
                  title={<FontAwesomeIcon icon={faBars} style={{ color: "white" }} />}
                  id="basic-nav-dropdown"
                >
                  {categories.map(category => (
                    <NavDropdown.Item key={category.name} as={Link} to={category.path}>
                      {category.name}
                    </NavDropdown.Item>
                  ))}
                </NavDropdown>
              )}
            </Nav>
        <Container>
        <Navbar.Brand as={Link} to="/" style={{ color: "white", fontWeight: "bold", display: 'flex', alignItems: 'center' }}>
          <img src="/plus_kom_logo_light.svg" alt="Logo" style={{ maxHeight: '60px', width: 'auto' }} />
        </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Form
              className="d-flex"
              style={{ flexGrow: 1, justifyContent: "center" }}
            >
              <FormControl
                type="search"
                placeholder="Czego szukasz?"
                aria-label="Search"
                className="mr-sm-2"
                style={{ borderRadius: "20px", width: "50%", color: "black" }}
              />
              <Button
                variant="outline-primary"
                style={{ borderRadius: "20px", marginLeft: "10px" }}
                size="lg"
              >
                <FontAwesomeIcon icon={faSearch} style={{ color: "white" }} />
              </Button>
            </Form>
            <Nav>
              <NavDropdown
                title={
                  <span>
                    <FontAwesomeIcon icon={faUser} style={{ color: "white" }} />
                    <span style={{ color: "white" }}> Profil</span>
                  </span>
                }
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item as={Link} to="/login">
                  Zaloguj się
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/register">
                  Zarejestruj się
                </NavDropdown.Item>
              </NavDropdown>

              <Nav.Link as={Link} to="/" style={{ color: "white" }}>
                <FontAwesomeIcon icon={faShoppingCart} /> Koszyk
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Navbar style={{ background: "grey", padding: "5px 20px" }}>
        <Container>
          <Nav className="mx-auto">
            {categories.map(category => (
              <Nav.Link
                key={category.name}
                as={Link}
                to={category.path}
                style={{ color: "white", fontSize: "16px" }}
              >
                {category.name}
              </Nav.Link>
            ))}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default AppNavbar;
