import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Typography, Box } from "@mui/material";
import AppNavbar from "../components/Navbar";
import AppFooter from "../components/Footer";
import ProductGrid from "../components/ProductGrid";
import ProductFilter from "../components/ProductFilter";
import axios from 'axios';

function CategoryPage() {
    const { categoryId } = useParams();
    const [products, setProducts] = useState([]);
    const [categoryName, setCategoryName] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [filters, setFilters] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        const fetchCategoryData = async () => {
            try {
                const response = await axios.get(`http://localhost:8081/api/categories/${categoryId}/products`);
                console.log('Fetched category data:', response.data);
                setProducts(response.data.products);
                setCategoryName(response.data.categoryName);
                setIsLoading(false);
            } catch (error) {
                console.error('Failed to fetch category data:', error);
            }
        };

        fetchCategoryData();
    }, [categoryId]);

    const handleFilterChange = (newFilters) => {
        console.log(newFilters);
        setFilters(newFilters);
        // Apply filtering logic if needed
    };

    const handleAddToBasket = (productId) => {
        // Handle add to basket logic here if needed
        console.log(`Product ${productId} added to basket`);
    };

    return (
        <>
            <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
                <AppNavbar />
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        py: 3,
                        marginTop: 3,
                        marginBottom: 3,
                        borderRadius: 7,
                        width: '100%',
                    }}
                >
                    <Box sx={{ mr: 1, minWidth: '250px' }}>
                        <ProductFilter onFilterChange={handleFilterChange} />
                    </Box>
                    <Container
                        maxWidth="lg"
                        sx={{
                            flex: 1,
                            py: 3,
                            borderRadius: 7,
                            backgroundColor: "white",
                            marginLeft: 4, // Remove left margin
                            marginRight: 0, // Remove right margin
                            paddingLeft: '8px', // Add slight padding to the left
                            paddingRight: '8px', // Add slight padding to the right
                        }}
                    >
                        {isLoading ? (
                            <Typography variant="h4" align="center">
                                Loading...
                            </Typography>
                        ) : (
                            <>
                                <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", mb: 2 }}>
                                    <Typography variant="h3" paragraph>
                                        {categoryName}
                                    </Typography>
                                    <Typography sx={{ color: "gray", ml: 2 }} variant="h5" paragraph>
                                        ({products.length} results)
                                    </Typography>
                                </Box>
                                <Box sx={{ textAlign: "justify" }}>
                                    <ProductGrid products={products} onAddToBasket={handleAddToBasket} />
                                </Box>
                            </>
                        )}
                    </Container>
                </Box>
                <AppFooter />
            </Box>
        </>
    );
}

export default CategoryPage;
