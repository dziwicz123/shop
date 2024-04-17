import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
} from "mdb-react-ui-kit";
import "./RegisterPage.css";
import { Link } from "react-router-dom";
function RegisterPage() {
  return (
    <MDBContainer fluid className="p-3">
      <MDBRow className="d-flex justify-content-center align-items-center h-100">
        <MDBCol col="12">
          <MDBCard
            className="bg-dark text-white my-5 mx-auto"
            style={{ borderRadius: "1rem", maxWidth: "900px" }} // Adjusted the width to accommodate two columns
          >
            <MDBCardBody className="p-5 d-flex flex-column align-items-center mx-auto w-100">
              <h2 className="fw-bold mb-2 text-uppercase">Register</h2>
              <p className="text-white-50 mb-5">
                Please enter your details to create an account.
              </p>

              <MDBRow
                style={{ maxWidth: "1200px", width: "100%" }}
                className="d-flex justify-content-center align-items-center h-100"
              >
                {/* First column */}
                <MDBCol md="6">
                  <MDBInput
                    wrapperClass="mb-4"
                    labelClass="text-white"
                    label="First Name"
                    id="formFirstName"
                    type="text"
                    size="lg"
                  />
                  <MDBInput
                    wrapperClass="mb-4"
                    labelClass="text-white"
                    label="Email Address"
                    id="formEmail"
                    type="email"
                    size="lg"
                  />
                  <MDBInput
                    wrapperClass="mb-4"
                    labelClass="text-white"
                    label="Password"
                    id="formPassword"
                    type="password"
                    size="lg"
                  />
                </MDBCol>

                {/* Second column */}
                <MDBCol md="6">
                  <MDBInput
                    wrapperClass="mb-4"
                    labelClass="text-white"
                    label="Last Name"
                    id="formLastName"
                    type="text"
                    size="lg"
                  />

                  <MDBInput
                    wrapperClass="mb-4"
                    labelClass="text-white"
                    label="Phone Number"
                    id="formPhone"
                    type="tel"
                    size="lg"
                  />
                  <MDBInput
                    wrapperClass="mb-4"
                    labelClass="text-white"
                    label="Confirm Password"
                    id="formConfirmPassword"
                    type="password"
                    size="lg"
                  />
                </MDBCol>
              </MDBRow>
              <div className="d-grid gap-2 col-6 mx-auto">
                <button className="btn-register">Register</button>
              </div>
              <div className="text-center pt-3">
                <p className="mb-0">
                  Already have an account?{" "}
                  <Link to="/login" className="text-white-50 fw-bold">
                    Login
                  </Link>
                </p>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default RegisterPage;
