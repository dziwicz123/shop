import React from "react";
import { Container, Typography, Box } from "@mui/material";
import AppNavbar from "../components/Navbar";
import AppFooter from "../components/Footer";
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
            <Typography variant="body1" paragraph>
              Risus tempus molestie iaculis lobortis cras euismod lectus proin
              scelerisque sodales. A primis...
            </Typography>
            <Typography variant="body1" paragraph>
              Interdum pharetra eu taciti felis gravida torquent hac ligula
              etiam netus. Dui venenatis nibh...
            </Typography>
            <Typography variant="body1" paragraph>
              Sodales leo habitasse commodo vel augue nullam, augue
              scelerisque...
            </Typography>
            <Typography variant="body1" paragraph>
              Eu lectus convallis lectus dis cursus consectetur proin risus.
              Turpis dui mi nunc conubia...
            </Typography>
            <Typography variant="body1" paragraph>
              Litora semper dictum netus porttitor odio nostra habitasse. Ad
              sapien gravida senectus...
            </Typography>
            <Typography variant="body1" paragraph>
              Risus tempus molestie iaculis lobortis cras euismod lectus proin
              scelerisque sodales. A primis...
            </Typography>
            <Typography variant="body1" paragraph>
              Interdum pharetra eu taciti felis gravida torquent hac ligula
              etiam netus. Dui venenatis nibh...
            </Typography>
            <Typography variant="body1" paragraph>
              Sodales leo habitasse commodo vel augue nullam, augue
              scelerisque...
            </Typography>
            <Typography variant="body1" paragraph>
              Eu lectus convallis lectus dis cursus consectetur proin risus.
              Turpis dui mi nunc conubia...
            </Typography>
            <Typography variant="body1" paragraph>
              Litora semper dictum netus porttitor odio nostra habitasse. Ad
              sapien gravida senectus...
            </Typography>
            <Typography variant="body1" paragraph>
              Risus tempus molestie iaculis lobortis cras euismod lectus proin
              scelerisque sodales. A primis...
            </Typography>
            <Typography variant="body1" paragraph>
              Interdum pharetra eu taciti felis gravida torquent hac ligula
              etiam netus. Dui venenatis nibh...
            </Typography>
            <Typography variant="body1" paragraph>
              Sodales leo habitasse commodo vel augue nullam, augue
              scelerisque...
            </Typography>
            <Typography variant="body1" paragraph>
              Eu lectus convallis lectus dis cursus consectetur proin risus.
              Turpis dui mi nunc conubia...
            </Typography>
            <Typography variant="body1" paragraph>
              Litora semper dictum netus porttitor odio nostra habitasse. Ad
              sapien gravida senectus...
            </Typography>
            <Typography variant="body1" paragraph>
              Risus tempus molestie iaculis lobortis cras euismod lectus proin
              scelerisque sodales. A primis...
            </Typography>
            <Typography variant="body1" paragraph>
              Interdum pharetra eu taciti felis gravida torquent hac ligula
              etiam netus. Dui venenatis nibh...
            </Typography>
            <Typography variant="body1" paragraph>
              Sodales leo habitasse commodo vel augue nullam, augue
              scelerisque...
            </Typography>
            <Typography variant="body1" paragraph>
              Eu lectus convallis lectus dis cursus consectetur proin risus.
              Turpis dui mi nunc conubia...
            </Typography>
            <Typography variant="body1" paragraph>
              Litora semper dictum netus porttitor odio nostra habitasse. Ad
              sapien gravida senectus...
            </Typography>
          </Box>
        </Container>
        <AppFooter />
      </Box>
    </>
  );
}

export default HomePage;
