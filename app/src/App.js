import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from './LoginPage'; // Zaimportuj komponent strony logowania
import RegisterPage from './RegisterPage'; // Zaimportuj komponent strony rejestracji
import HomePage from './HomePage'; // Główna strona z linkami

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </Router>
  );
}

export default App;
