import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Typography, Box } from "@mui/material";
import AppNavbar from "../components/Navbar";
import AppFooter from "../components/Footer";
import ProductGrid from "../components/ProductGrid";
import axios from 'axios';

function CategoryPage() {
    const { categoryId } = useParams();
    const [products, setProducts] = useState([]);
    const [categoryName, setCategoryName] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchCategoryData = async () => {
            try {
                const response = await axios.get(`http://localhost:8081/api/categories/${categoryId}/products`);
                console.log('Fetched category data:', response.data); // Log the response data
                setProducts(response.data.products);
                setCategoryName(response.data.categoryName);
                setIsLoading(false);
            } catch (error) {
                console.error('Failed to fetch category data:', error);
            }
        };

        fetchCategoryData();
    }, [categoryId]);

    return (
        <>
            <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
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
                                <ProductGrid products={products} />
                            </Box>
                        </>
                    )}
                </Container>
                <AppFooter />
            </Box>
        </>
    );
}

export default CategoryPage;
