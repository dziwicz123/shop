import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
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
    const [filters, setFilters] = useState({
        producers: [],
        priceFrom: '',
        priceTo: '',
    });

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

    const applyFilters = (products, filters) => {
        return products.filter(product => {
            const meetsPriceFrom = filters.priceFrom ? product.price >= filters.priceFrom : true;
            const meetsPriceTo = filters.priceTo ? product.price <= filters.priceTo : true;
            const meetsProducers = filters.producers.length > 0 ? filters.producers.some(producer => product.productName.toLowerCase().includes(producer.toLowerCase())) : true;

            return meetsPriceFrom && meetsPriceTo && meetsProducers;
        });
    };

    const handleFilterChange = (newFilters) => {
        console.log(newFilters);
        setFilters(newFilters);
    };

    const handleAddToBasket = (productId) => {
        // Handle add to basket logic here if needed
        console.log(`Product ${productId} added to basket`);
    };

    const filteredProducts = applyFilters(products, filters);

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
                        <ProductFilter onFilterChange={handleFilterChange} categoryId={categoryId} />
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
                                        ({filteredProducts.length} results)
                                    </Typography>
                                </Box>
                                <Box sx={{ textAlign: "justify" }}>
                                    <ProductGrid products={filteredProducts} onAddToBasket={handleAddToBasket} />
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
