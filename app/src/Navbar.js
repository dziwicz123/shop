import React from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faShoppingCart,faSearch} from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
const AppNavbar = () => {
  return (
    <Navbar style={{ background: '#2c3e50', borderRadius: '8px', padding: '10px 20px' }} expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/" style={{ color: 'white' }}>Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" style={{ color: 'white' }}>Laptopy i komputery</Nav.Link>
            <Nav.Link as={Link} to="/" style={{ color: 'white' }}>Smartfony i smartwatche</Nav.Link>
            <Nav.Link as={Link} to="/" style={{ color: 'white' }}>Gaming i streaming</Nav.Link>
          </Nav>
          <Form inline className="d-flex">
            <FormControl
              type="search"
              placeholder="Czego szukasz?"
              aria-label="Search"
              className="mr-sm-2"
              style={{ borderRadius: '20px' }}
            />
            <Button variant="primary" style={{ borderRadius: '20px' }}><FontAwesomeIcon icon={faSearch} /></Button>
          </Form>
          <Nav>
            <NavDropdown 
              title={<span style={{ color: 'white' }}><FontAwesomeIcon icon={faUser} /> Profil</span>} 
              id="basic-nav-dropdown"
              alignRight
              style={{ borderRadius: '8px' }}
            >
              <NavDropdown.Item as={Link} to="/login">Zaloguj się</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/register">Zarejestruj się</NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
            <Nav.Link as={Link} to="/" style={{ color: 'white' }}>
              <FontAwesomeIcon icon={faShoppingCart} /> Koszyk
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;
