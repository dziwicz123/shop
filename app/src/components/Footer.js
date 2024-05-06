import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import HomeIcon from '@mui/icons-material/Home';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import InstagramIcon from '@mui/icons-material/Instagram';
import "../styles/Footer.css"
const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#45526e', color: 'white', textAlign: 'center' }} >
      <Container className="p-4 pb-0">
        <Row>
          <Col md={3} lg={3} xl={3} className="mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">Company name</h6>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </Col>

          <Col md={3} lg={3} xl={3} className="mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">Products</h6>
            <p>placeholder</p>
            <p>placeholder</p>
            <p>placeholder</p>
            <p>placeholder</p>
          </Col>

          <Col md={3} lg={3} xl={3} className="mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">Useful links</h6>
            <p>placeholder</p>
            <p>placeholder</p>
            <p>placeholder</p>
            <p>placeholder</p>
          </Col>

          <Col md={3} lg={3} xl={3} className="mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
            <p><HomeIcon /> Łódź, Polska</p>
            <p><EmailIcon /> info@gmail.com</p>
            <p><PhoneIcon /> + 01 234 567 88</p>
          </Col>
        </Row>

        <hr className="my-3" />

        <Row className="d-flex align-items-center">
          <Col md={7} lg={8} className="text-center text-md-start">
            <div className="p-3">
              © 2024 Copyright: +Kom
            </div>
          </Col>
          <Col md={5} lg={4} className="text-center text-md-end">
            <Button variant="outline-light" className="btn-floating m-1"><FacebookIcon /></Button>
            <Button variant="outline-light" className="btn-floating m-1"><TwitterIcon /></Button>
            <Button variant="outline-light" className="btn-floating m-1"><GoogleIcon /></Button>
            <Button variant="outline-light" className="btn-floating m-1"><InstagramIcon /></Button>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
