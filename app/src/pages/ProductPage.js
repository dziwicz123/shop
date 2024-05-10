import React from "react";
import {
  Box,
  Button,
  Typography,
  Card,
  CardMedia,
  Grid,
  Container,
  Paper,
  FormControl,
  MenuItem,
  Select,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AppNavbar from "../components/Navbar";
import AppFooter from "../components/Footer";

const ProductPage = () => {
  const [quantity, setQuantity] = React.useState(1);
  const [color, setColor] = React.useState("Niebieski");
  const handleChange = (event) => {
    setQuantity(event.target.value);
  };
  const handleColorChange = (event, newColor) => {
    if (newColor !== null) {
      setColor(newColor);
    }
  };

  return (
    <>
      <AppNavbar />
      <Box
        sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        <Container maxWidth="lg" sx={{ py: 3, backgroundColor: "white",height:"100%" }}>
          <Grid container spacing={4} alignItems="flex-start">
            <Grid item xs={12} md={4}>
              <Card elevation={0}>
                <CardMedia
                  component="img"
                  image="https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2024/1/pr_2024_1_16_8_33_54_541_00.jpg"
                  alt="Xiaomi Redmi Note 13 6/128GB Ice Blue"
                  sx={{ width: "100%", height: "auto" }}
                />
              </Card>
            </Grid>
            <Grid item xs={12} md={8}>
              <Typography
                variant="h4"
                gutterBottom
                component="div"
                sx={{ mt: 2, mb: 2 }}
              >
                Xiaomi Redmi Note 13 6/128GB Ice Blue
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={8}>
                  <Paper elevation={2} sx={{ p: 2 }}>
                    <Typography variant="body1" gutterBottom>
                      Ekran: 6.67"
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                      Procesor: Qualcomm Snapdragon 685
                    </Typography>
                    <Typography variant="body1">Pamięć RAM: 6 GB</Typography>
                    <Typography variant="body1">
                      Pamięć wbudowana: 128 GB
                    </Typography>
                    <Typography variant="body2" sx={{ mt: 2, mb: 1 }}>
                      Kolor:
                    </Typography>
                    <ToggleButtonGroup
                      value={color}
                      exclusive
                      onChange={handleColorChange}
                      aria-label="device color"
                      sx={{ mb: 2 }}
                    >
                      <ToggleButton value="Czarny" aria-label="Czarny">
                        Czarny
                      </ToggleButton>
                      <ToggleButton value="Niebieski" aria-label="Niebieski">
                        Niebieski
                      </ToggleButton>
                      <ToggleButton value="Zielony" aria-label="Zielony">
                        Zielony
                      </ToggleButton>
                    </ToggleButtonGroup>
                  </Paper>
                </Grid>
                <Grid item xs={4}>
                  <Paper elevation={2} sx={{ p: 2, height: "100%" }}>
                    <Typography
                      sx={{ color: "green", fontWeight: "bold" }}
                      gutterBottom
                    >
                      Oszczędź 122,00 zł
                    </Typography>
                    <Typography
                      variant="h5"
                      sx={{ fontWeight: "bold" }}
                      gutterBottom
                    >
                      777,00 zł
                    </Typography>
                    <Box sx={{ mt: 2, display: "flex", alignItems: "center" }}>
                      <FormControl size="small" sx={{ width: "70px", mr: 1 }}>
                        <Select
                          labelId="quantity-label"
                          id="quantity"
                          value={quantity}
                          onChange={handleChange}
                        >
                          <MenuItem value={1}>1</MenuItem>
                          <MenuItem value={2}>2</MenuItem>
                          <MenuItem value={3}>3</MenuItem>
                          <MenuItem value={4}>4</MenuItem>
                        </Select>
                      </FormControl>
                      <Button
                        variant="contained"
                        color="success"
                        sx={{ flexGrow: 1 }}
                        startIcon={<ShoppingCartIcon />}
                      >
                        Dodaj do koszyka
                      </Button>
                    </Box>
                    <Box sx={{ mt: 2, display: "flex", alignItems: "center" }}>
                      <CheckCircleOutlineIcon sx={{ color: "green", mr: 1 }} />
                      <Typography variant="body2" sx={{ color: "green" }}>
                        Dostępny
                      </Typography>
                    </Box>
                  </Paper>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Typography
              variant="h5"
              gutterBottom
              component="div"
              sx={{ mt: 2, mb: 1 }}
            >
              Opis Produktu:
            </Typography>
            <Paper elevation={2} sx={{ p: 2 }}>
              <Typography variant="body1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                vel risus consequat, efficitur nunc sit amet, molestie leo.
                Proin at libero vel mi elementum varius non eget arcu. Vivamus
                pulvinar metus ut leo convallis, nec cursus mi tincidunt. Sed
                auctor, dolor vel varius lacinia, sapien arcu cursus tellus, a
                fringilla quam nisi sit amet nisl. Phasellus quis elit ut nisl
                scelerisque lobortis. Duis ut urna quis turpis finibus feugiat.
                Duis in nibh sit amet sapien semper blandit. Ut tincidunt eros
                at interdum iaculis. Proin varius dapibus libero, vel congue
                velit cursus eu. Curabitur sed ligula arcu. Vestibulum vel
                mauris vel risus venenatis accumsan. Suspendisse ac convallis
                est, sit amet scelerisque dolor. Vivamus pulvinar feugiat
                ligula, nec molestie nulla luctus eget.
              </Typography>
              <Typography variant="body1" sx={{ mt: 2 }}>
                Ut dictum purus et lacus dictum, non tincidunt risus convallis.
                In hac habitasse platea dictumst. Nullam tempus eu nisi eget
                tincidunt. Aenean non elit sed sapien ullamcorper rhoncus.
                Maecenas dictum feugiat fringilla. Duis tincidunt erat nisi,
                eget lacinia ligula interdum at. Vivamus tristique orci at
                tellus aliquet, et congue nisi lacinia. In hac habitasse platea
                dictumst. Nunc tincidunt metus ut libero fringilla, vitae
                lacinia purus varius. Vivamus fermentum magna nec tellus
                egestas, nec elementum nunc malesuada. Aliquam consequat
                bibendum lacinia. Donec semper urna at ligula varius sodales.
              </Typography>
            </Paper>
          </Grid>
        </Container>
      </Box>
      <AppFooter />
    </>
  );
};

export default ProductPage;
