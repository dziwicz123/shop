import React, { useState } from "react";
import { Form, Button, Container, Row, Col, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function RegisterPage() {
  const [validated, setValidated] = useState(false);
  const [formData, setFormData] = useState({
    formFirstName: "",
    formLastName: "",
    formEmail: "",
    formPhone: "",
    formPassword: "",
    formConfirmPassword: ""
  });

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      event.preventDefault();
      console.log(formData);
      setValidated(true);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <Container fluid>
      <Row className="justify-content-center align-items-center h-100">
        <Col xs={12}>
          <Card
            className="bg-dark text-white my-5 mx-auto"
            style={{ borderRadius: "1rem", maxWidth: "900px" }}
          >
            <Card.Body className="p-5 d-flex flex-column align-items-center mx-auto w-100">
              <h2 className="fw-bold mb-2 text-uppercase">Register</h2>
              <p className="text-white-50 mb-3">
                Please enter your details to create an account.
              </p>
              <Form
                noValidate
                validated={validated}
                onSubmit={handleSubmit}
                className="w-100"
              >
                <Row className="mb-3">
                  <Form.Group as={Col} md="6" controlId="formFirstName">
                    <Form.Label className="text-white">
                      First Name
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="First Name"
                      name="formFirstName"
                      value={formData.formFirstName}
                      onChange={handleChange}
                      required
                      size="lg"
                    />
                    <Form.Control.Feedback type="invalid">
                      First name is required
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} md="6" controlId="formLastName">
                    <Form.Label className="text-white">
                      Last Name
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Last Name"
                      name="formLastName"
                      value={formData.formLastName}
                      onChange={handleChange}
                      required
                      size="lg"
                    />
                    <Form.Control.Feedback type="invalid">
                      Last name is required
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>
                <Row className="mb-3">
                  <Form.Group as={Col} md="6" controlId="formEmail">
                    <Form.Label className="text-white">
                      Email Address
                    </Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Email Address"
                      name="formEmail"
                      value={formData.formEmail}
                      onChange={handleChange}
                      required
                      size="lg"
                    />
                    <Form.Control.Feedback type="invalid">
                      Please enter a valid email address.
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} md="6" controlId="formPhone">
                    <Form.Label className="text-white">
                      Phone Number
                    </Form.Label>
                    <Form.Control
                      type="tel"
                      placeholder="Phone Number"
                      name="formPhone"
                      value={formData.formPhone}
                      onChange={handleChange}
                      required
                      pattern="^\d{9}$"
                      size="lg"
                    />
                    <Form.Control.Feedback type="invalid">
                      Phone number must be 9 digits
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>
                <Row className="mb-3">
                  <Form.Group as={Col} md="6" controlId="formPassword">
                    <Form.Label className="text-white">Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      name="formPassword"
                      value={formData.formPassword}
                      onChange={handleChange}
                      required
                      size="lg"
                    />
                    <Form.Control.Feedback type="invalid">
                      Password is required
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group
                    as={Col}
                    md="6"
                    controlId="formConfirmPassword"
                  >
                    <Form.Label className="text-white">
                      Confirm Password
                    </Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Confirm Password"
                      name="formConfirmPassword"
                      value={formData.formConfirmPassword}
                      onChange={handleChange}
                      required
                      pattern={formData.formPassword}
                      size="lg"
                    />
                    <Form.Control.Feedback type="invalid">
                      Passwords must match
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>
                <Row className="d-grid gap-2 col-6 mx-auto" style={{ marginTop: "2rem" }}>
                <Button type="submit" className="mx-2 px-5" variant="outline-light" size="lg">
                  Register
                </Button>
                </Row>
              </Form>
              <div className="text-center pt-3">
                <p className="mb-0">
                  Already have an account?{" "}
                  <a href="/login" className="text-white-50 fw-bold">
                    Login
                  </a>
                </p>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default RegisterPage;
