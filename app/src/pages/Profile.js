import React, { useState } from "react";
import { Container, CssBaseline, Typography, Box, Paper } from "@mui/material";
import Sidebar from "../components/Sidebar";
import OrderSection from "../components/OrderSection";
import UserInfo from "../components/UserInfo";
import UserOrders from "../components/UserOrders";
import AppNavbar from "../components/Navbar";
import Footer from "../components/Footer";

const Profile = () => {
  const [activeSection, setActiveSection] = useState("orders");

  const renderSection = () => {
    switch (activeSection) {
      case "orders":
        return <OrderSection />;
      case "userInfo":
        return <UserInfo />;
      case "orderHistory":
        return <UserOrders />;
      default:
        return <OrderSection />;
    }
  };

  return (
    <>
      <AppNavbar />
      <CssBaseline />
      <Container maxWidth="lg" sx={{ display: "flex", flexDirection: "row", mt: 4, mb: 4 }}>
        <Box sx={{ width: "240px", mr: 4 }}>
          <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
        </Box>
        <Box sx={{ flexGrow: 1}}>
          <Paper elevation={3} sx={{ padding: 3, backgroundColor: "#F5F5F5",height:"50vh" }}>
            <Box mb={4}>
              <Typography variant="h4" gutterBottom>
                Cześć, Jan
              </Typography>
            </Box>
            {renderSection()}
          </Paper>
        </Box>
      </Container>
      <Footer />
    </>
  );
};

export default Profile;
