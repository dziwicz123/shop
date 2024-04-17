import React, { useState } from "react";
import { Form, Button} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";

const RegisterPage = () => {
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
    }
    setValidated(true);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <div className="container-fluid p-3">
      <div className="row justify-content-center align-items-center h-100">
        <div className="col-12">
          <div className="card bg-dark text-white my-5 mx-auto" style={{ borderRadius: "1rem", maxWidth: "900px" }}>
            <div className="card-body p-5 d-flex flex-column align-items-center mx-auto w-100">
              <h2 className="fw-bold mb-2 text-uppercase">Register</h2>
              <p className="text-white-50 mb-5">
                Please enter your details to create an account.
              </p>
              <Form noValidate validated={validated} onSubmit={handleSubmit} className="row g-3 w-100">
                <div className="col-md-6">
                  <label htmlFor="formFirstName" title="First Name">First Name</label>
                  <Form.Control
                    type="text"
                    placeholder="First Name"
                    name="formFirstName"
                    value={formData.formFirstName}
                    onChange={handleChange}
                    required
                    isInvalid={validated && !formData.formFirstName}
                  />
                  <Form.Control.Feedback type="invalid">First name is required</Form.Control.Feedback>
                </div>
                <div className="col-md-6">
                  <label htmlFor="formLastName" title="Last Name">Last Name</label>
                  <Form.Control
                    type="text"
                    placeholder="Last Name"
                    name="formLastName"
                    value={formData.formLastName}
                    onChange={handleChange}
                    required
                    isInvalid={validated && !formData.formLastName}
                  />
                  <Form.Control.Feedback type="invalid">Last name is required</Form.Control.Feedback>
                </div>
                <div className="col-md-6">
                  <label htmlFor="formEmail" title="Email Address">Email Address</label>
                  <Form.Control
                    type="email"
                    placeholder="Email Address"
                    name="formEmail"
                    value={formData.formEmail}
                    onChange={handleChange}
                    required
                    isInvalid={validated && !/^\S+@\S+\.\S+$/.test(formData.formEmail)}
                  />
                  <Form.Control.Feedback type="invalid">Please enter a valid email address.</Form.Control.Feedback>
                </div>
                <div className="col-md-6">
                  <label htmlFor="formPhone" title="Phone Number">Phone Number</label>
                  <Form.Control
                    type="tel"
                    placeholder="Phone Number"
                    name="formPhone"
                    value={formData.formPhone}
                    onChange={handleChange}
                    required
                    pattern="^\d{9}$"
                    isInvalid={validated && !/^\d{9}$/.test(formData.formPhone)}
                  />
                  <Form.Control.Feedback type="invalid">Phone number must be 9 digits</Form.Control.Feedback>
                </div>
                <div className="col-md-6">
                  <label htmlFor="formPassword" title="Password">Password</label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    name="formPassword"
                    value={formData.formPassword}
                    onChange={handleChange}
                    required
                    isInvalid={validated && !formData.formPassword}
                  />
                  <Form.Control.Feedback type="invalid">Password is required</Form.Control.Feedback>
                </div>
                <div className="col-md-6">
                  <label htmlFor="formConfirmPassword" title="Confirm Password">Confirm Password</label>
                  <Form.Control
                    type="password"
                    placeholder="Confirm Password"
                    name="formConfirmPassword"
                    value={formData.formConfirmPassword}
                    onChange={handleChange}
                    required
                    pattern={formData.formPassword}
                    isInvalid={validated && formData.formConfirmPassword !== formData.formPassword}
                  />
                  <Form.Control.Feedback type="invalid">Passwords must match</Form.Control.Feedback>
                </div>
                <div className="d-grid gap-2 col-6 mx-auto">
                  <Button type="submit" className="btn btn-primary">Register</Button>
                </div>
                <div className="text-center pt-3">
                  <p className="mb-0">
                    Already have an account?{" "}
                    <Link to="/login" className="text-white-50 fw-bold">
                      Login
                    </Link>
                  </p>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
