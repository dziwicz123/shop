import React from "react";
import { Container, Typography, Box } from "@mui/material";
import AppNavbar from "../components/Navbar";
import AppFooter from "../components/Footer";
import ProductGrid from "../components/ProductGrid";

function CategoryPage() {
  const products = [
              
    { id: 1, name: "Lenovo IdeaPad Gaming 3‑15 R5", price: "3 300,00 zł", image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2023/12/pr_2023_12_27_6_33_36_325_00.jpg" },
    { id: 2, name: "Dell Vostro 3710 SFF", price: "2 799,00 zł", image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2022/4/pr_2022_4_25_12_32_31_504_03.jpg" },
    { id: 3, name: "Acer Nitro 50", price: "3 099,00 zł", image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2024/2/pr_2024_2_16_7_37_13_787_00.jpg" },
    { id: 4, name: "ASUS ZenBook 14 UM3402YA", price: "3 999,00 zł", image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2022/5/pr_2022_5_25_13_35_54_713_04.jpg" },
    { id: 5, name: "Dell Vostro 3020 MT", price: "4 999,00 zł", image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2023/3/pr_2023_3_13_7_57_5_885_02.jpg" },
    { id: 6, name: "Apple MacBook Pro M3 Pro", price: "10 499,00 zł", image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2023/10/pr_2023_10_31_6_57_5_276_00.jpg" },
    { id: 7, name: "Gigabyte AORUS Stealth 500", price: "4 999,00 zł", image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2023/11/pr_2023_11_8_13_20_43_644_01.jpg" },
    { id: 8, name: "HP Pro 290 G9 SFF", price: "2 889,00 zł", image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2024/1/pr_2024_1_26_9_1_37_472_01.jpg" },

  ];

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
            marginTop: 3,
            marginBottom: 3,
            borderRadius: 7,
            backgroundColor: "white",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", mb: 2 }}>
            <Typography variant="h3" paragraph>
              Category Name
            </Typography>
            <Typography sx={{ color: "gray", ml: 2 }} variant="h5" paragraph>
              (X results)
            </Typography>
          </Box>

          <Box sx={{ textAlign: "justify" }}>
            
          <ProductGrid products={products} />
            
          </Box>
        </Container>
        <AppFooter />
      </Box>
    </>
  );
}

export default CategoryPage;
