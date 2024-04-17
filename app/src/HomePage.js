import React from 'react';
import { Link } from 'react-router-dom';
import { MDBBtn } from 'mdb-react-ui-kit';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./HomePage.css";
function HomePage() {
  return (
    <div className="home-page">
      <h1>Witaj na stronie głównej!</h1>
      <Link to="/login"><MDBBtn color="primary">Logowanie</MDBBtn></Link>
      <Link to="/register"><MDBBtn color="secondary">Rejestracja</MDBBtn></Link>
    </div>
  );
}

export default HomePage;
