import React from "react";
import { Container, Box } from "@mui/material";
import AppNavbar from "../components/Navbar";
import AppFooter from "../components/Footer";
import ProductZone from "../components/ProductZone";
import Slider from "../components/Slider";
function HomePage() {
  return (
    <>
      <Box
        sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        <AppNavbar />
        <Container
          maxWidth="lg"
          sx={{
            py: 3,
            backgroundColor: "white",
          }}
        >
          <Box sx={{ textAlign: "justify" }}>
            <Slider />
            <ProductZone/>
          </Box>
        </Container>
        <AppFooter />
      </Box>
    </>
  );
}

export default HomePage;
