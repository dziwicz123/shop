import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import CategoryPage from './pages/CategoryPage';
import Profile from "./pages/Profile";
import Cart from "./pages/Cart";
import SearchResults from './pages/SearchResults';
import Delivery from "./pages/DeliveryPage";
import OrderSummaryPage from "./pages/Summary";
import AdminPage from "./pages/AdminPage";

function App() {
  return (
      <Router>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/product/:productId" element={<ProductPage />} />
            <Route path="/category/:categoryId" element={<CategoryPage />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/search" element={<SearchResults />} />
            <Route path="/delivery" element={<Delivery />} />
            <Route path="/summary" element={<OrderSummaryPage />} />
            <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </Router>
  );
}

export default App;
