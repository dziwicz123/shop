package com.example.shop.controller;

import com.example.shop.model.Product;
import com.example.shop.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/products")
public class ProductController {

    @Autowired
    private ProductService productService;

    // Endpoint to search products based on a query string
    @GetMapping("/search")
    public List<Product> searchProducts(@RequestParam String query) {
        return productService.searchProducts(query);
    }

    // Endpoint to get a single product by ID
    @GetMapping("/{id}")
    public ResponseEntity<Product> getProductById(@PathVariable Long id) {
        Product product = productService.getProductById(id);
        return ResponseEntity.ok(product);
    }

    // Endpoint to get all products
    @GetMapping
    public List<Product> getAllProducts() {
        return productService.getAllProducts();
    }
}
