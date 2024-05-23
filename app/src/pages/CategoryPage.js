import React, { useState } from "react";
import { Container, Typography, Box } from "@mui/material";
import AppNavbar from "../components/Navbar";
import AppFooter from "../components/Footer";
import ProductGrid from "../components/ProductGrid";
import ProductFilter from "../components/ProductFilter";

function CategoryPage() {
  const [filters, setFilters] = useState({
    producers: {},
    priceFrom: '',
    priceTo: '',
    availability: '',
    hideUnavailable: false,
    status: {}
  });

  const products = [
    { id: 1, name: "Lenovo IdeaPad Gaming 3‑15 R5", price: "3300.00", producer: "Lenovo", availability: "available", status: "none", image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2023/12/pr_2023_12_27_6_33_36_325_00.jpg" },
    { id: 2, name: "Dell Vostro 3710 SFF", price: "2799.00", producer: "Dell", availability: "available", status: "none", image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2022/4/pr_2022_4_25_12_32_31_504_03.jpg" },
    { id: 3, name: "Acer Nitro 50", price: "3099.00", producer: "Acer", availability: "available", status: "none", image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2024/2/pr_2024_2_16_7_37_13_787_00.jpg" },
    { id: 4, name: "ASUS ZenBook 14 UM3402YA", price: "3999.00", producer: "ASUS", availability: "available", status: "none", image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2022/5/pr_2022_5_25_13_35_54_713_04.jpg" },
    { id: 5, name: "Dell Vostro 3020 MT", price: "4999.00", producer: "Dell", availability: "available", status: "none", image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2023/3/pr_2023_3_13_7_57_5_885_02.jpg" },
    { id: 6, name: "Apple MacBook Pro M3 Pro", price: "10499.00", producer: "Apple", availability: "available", status: "promotion", image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2023/10/pr_2023_10_31_6_57_5_276_00.jpg" },
    { id: 7, name: "Gigabyte AORUS Stealth 500", price: "4999.00", producer: "Gigabyte", availability: "available", status: "none", image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2023/11/pr_2023_11_8_13_20_43_644_01.jpg" },
    { id: 8, name: "HP Pro 290 G9 SFF", price: "2889.00", producer: "HP", availability: "available", status: "none", image: "https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2024/1/pr_2024_1_26_9_1_37_472_01.jpg" },
  ];

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
    console.log('Current Filters:', newFilters);
  };

  const filterProducts = () => {
    return products.filter(product => {
      const price = parseFloat(product.price.replace(/,/g, ''));
      const { producers, priceFrom, priceTo, availability, hideUnavailable, status } = filters;

      const producerMatch = Object.keys(producers).length === 0 || producers[product.producer];
      const priceFromMatch = !priceFrom || price >= parseFloat(priceFrom);
      const priceToMatch = !priceTo || price <= parseFloat(priceTo);
      const availabilityMatch = !availability || product.availability === availability;
      const statusMatch = Object.keys(status).length === 0 || status[product.status];
      const hideUnavailableMatch = !hideUnavailable || product.availability !== 'unavailable';

      return producerMatch && priceFromMatch && priceToMatch && availabilityMatch && statusMatch && hideUnavailableMatch;
    });
  };

  const filteredProducts = filterProducts();

  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <AppNavbar />
        <Container maxWidth="lg" sx={{ py: 3, marginTop: 3, marginBottom: 3, backgroundColor: "white", borderRadius: 7 }}>
          <Box sx={{ display: "flex", flexDirection: "row", mb: 2 }}>
            <Box sx={{ flex: 1 }}>
              <Typography variant="h3" paragraph>
                Category Name
              </Typography>
              <Typography sx={{ color: "gray" }} variant="h5" paragraph>
                ({filteredProducts.length} results)
              </Typography>
            </Box>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <Box sx={{ flex: 1, marginRight: 4 }}>
              <ProductFilter onFilterChange={handleFilterChange} />
            </Box>
            <Box sx={{ flex: 3 }}>
              <ProductGrid products={products} />
            </Box>
          </Box>
        </Container>
        <AppFooter />
      </Box>
    </>
  );
}

export default CategoryPage;
