package com.example.shop.controller;

import com.example.shop.model.Basket;
import com.example.shop.model.Product;
import com.example.shop.model.User;
import com.example.shop.repo.BasketRepository;
import com.example.shop.repo.ProductRepository;
import com.example.shop.repo.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/basket")
public class BasketController {

    @Autowired
    private BasketRepository basketRepository;

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/add")
    public ResponseEntity<?> createBasket(Principal principal) {
        String email = principal.getName();
        User user = userRepository.findByEmail(email);

        if (user == null) {
            return ResponseEntity.status(401).body("User not authenticated");
        }

        // Create a new basket and assign it to the user
        Basket basket = new Basket();
        basket.setUser(user);
        basket.setState(false);
        basket.setTotalPrice(0.0f);
        basketRepository.save(basket);

        return ResponseEntity.ok(basket);
    }

    @PostMapping("/addProduct")
    public ResponseEntity<?> addProductToBasket(@RequestParam Long basketId, @RequestParam Long productId, Principal principal) {
        String email = principal.getName();
        User user = userRepository.findByEmail(email);

        // Check if the user is authenticated
        if (user == null) {
            return ResponseEntity.status(401).body("User not authenticated");
        }

        // Fetch the basket and check if it belongs to the user
        Optional<Basket> optionalBasket = basketRepository.findById(basketId);
        if (!optionalBasket.isPresent() || !optionalBasket.get().getUser().equals(user)) {
            return ResponseEntity.status(404).body("Basket not found or does not belong to the user");
        }
        Basket basket = optionalBasket.get();

        // Fetch the product
        Optional<Product> optionalProduct = productRepository.findById(productId);
        if (!optionalProduct.isPresent()) {
            return ResponseEntity.status(404).body("Product not found");
        }
        Product product = optionalProduct.get();

        // Add product to the basket
        List<Product> products = basket.getProducts();
        if (!products.contains(product)) {
            products.add(product);
            basket.setProducts(products);
            basketRepository.save(basket);
        } else {
            return ResponseEntity.ok("Product already in the basket");
        }

        return ResponseEntity.ok(basket);
    }


}
