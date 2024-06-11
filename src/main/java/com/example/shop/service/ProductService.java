package com.example.shop.service;

import com.example.shop.model.Product;
import com.example.shop.repo.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;

@Service
public class ProductService {

    private static final Logger LOGGER = Logger.getLogger(ProductService.class.getName());

    @Autowired
    private ProductRepository productRepository;

    public List<Product> getProductsByCategory(Long categoryId) {
        try {
            LOGGER.info("Fetching products for category ID: " + categoryId);
            List<Product> products = productRepository.findByCategoryId(categoryId);
            LOGGER.info("Found products: " + products);
            return products;
        } catch (Exception e) {
            LOGGER.log(Level.SEVERE, "Error fetching products for category ID: " + categoryId, e);
            throw e;
        }
    }

    public List<Product> searchProducts(String query) {
        return productRepository.findByProductNameContainingIgnoreCase(query);
    }

    public Product getProductById(Long id) {
        return productRepository.findById(id).orElseThrow(() -> new RuntimeException("Product not found"));
    }

}
