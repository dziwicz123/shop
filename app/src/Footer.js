import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const AppFooter = () => {
  return (
    <footer className="footer" style={{ background: "#2c3e50", padding: "20px 0" }}>
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={4}>
            <Nav className="flex-column">
              <Nav.Link as={Link} to="/about" style={{ color: "white" }}>
                O nas
              </Nav.Link>
              <Nav.Link as={Link} to="/contact" style={{ color: "white" }}>
                Kontakt
              </Nav.Link>
            </Nav>
          </Col>
          <Col xs={12} md={4} className="text-center">
            <h5 style={{ color: "white" }}>Śledź nas</h5>
            <Nav className="justify-content-center">
              <Nav.Link href="http://facebook.com" style={{ color: "white" }}>
                <FontAwesomeIcon icon={faFacebookF} />
              </Nav.Link>
              <Nav.Link href="http://twitter.com" style={{ color: "white" }}>
                <FontAwesomeIcon icon={faTwitter} />
              </Nav.Link>
              <Nav.Link href="http://instagram.com" style={{ color: "white" }}>
                <FontAwesomeIcon icon={faInstagram} />
              </Nav.Link>
              <Nav.Link href="http://youtube.com" style={{ color: "white" }}>
                <FontAwesomeIcon icon={faYoutube} />
              </Nav.Link>
            </Nav>
          </Col>
          <Col xs={12} md={4} className="text-md-right">
            <p style={{ color: "white" }}>
              © 2024 + Kom. Wszelkie prawa zastrzeżone.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default AppFooter;
