import React from "react";
import { Box } from "@mui/material";
import AppNavbar from "../components/Navbar";
import AppFooter from "../components/Footer";
import CartZone from "../components/CartZone";
function Cart() {
  return (
    <>
      <Box
        sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        <AppNavbar />
        <CartZone />
        <AppFooter />
      </Box>
    </>
  );
}

export default Cart;
