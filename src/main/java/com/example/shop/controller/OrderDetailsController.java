package com.example.shop.controller;

import com.example.shop.DTO.AddressDTO;
import com.example.shop.DTO.OrderDetailsRequest;
import com.example.shop.model.*;
import com.example.shop.repo.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.Optional;

@RestController
@RequestMapping("/api/order")
public class OrderDetailsController {

    @Autowired
    private BasketRepository basketRepository;

    @Autowired
    private OrderDetailsRepository orderDetailsRepository;

    @Autowired
    private AddressRepository addressRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ProductRepository productRepository;

    @PostMapping
    public ResponseEntity<?> createOrderDetails(@RequestBody OrderDetailsRequest request) {
        User user = userRepository.findByEmail(request.getEmail());

        if (user == null) {
            return ResponseEntity.status(401).body("User not authenticated");
        }

        Optional<Basket> optionalBasket = basketRepository.findById(request.getBasketId());
        if (!optionalBasket.isPresent() || !optionalBasket.get().getUser().equals(user)) {
            return ResponseEntity.status(404).body("Basket not found or does not belong to the user");
        }
        Basket basket = optionalBasket.get();

        Address address = new Address();
        address.setCity(request.getAddress().getCity());
        address.setStreet(request.getAddress().getStreet());
        address.setPostalCode(request.getAddress().getPostalCode());
        address.setUser(user);
        addressRepository.save(address);

        OrderDetails orderDetails = new OrderDetails();
        orderDetails.setBasket(basket);
        orderDetails.setOrderDate(LocalDateTime.now());
        orderDetails.setShipDate(null); // or set the ship date based on your logic
        orderDetails.setState(OrderState.PENDING); // or set the appropriate state
        orderDetails.setType(PaymentType.CASH_ON_DELIVERY); // or set the appropriate payment type
        orderDetails.setAddress(address);

        // Save order details
        orderDetailsRepository.save(orderDetails);

        // Add products to the basket and update total price
        float totalPrice = 0.0f;
        for (OrderDetailsRequest.ProductDTO productDTO : request.getProducts()) {
            Optional<Product> optionalProduct = productRepository.findById(productDTO.getProductId());
            if (optionalProduct.isPresent()) {
                Product product = optionalProduct.get();
                int quantity = productDTO.getQuantity();

                // Check if the product already exists in the basket
                Optional<BasketProduct> optionalBasketProduct = basket.getBasketProducts().stream()
                        .filter(bp -> bp.getProduct().getId().equals(product.getId()))
                        .findFirst();

                BasketProduct basketProduct;
                if (optionalBasketProduct.isPresent()) {
                    basketProduct = optionalBasketProduct.get();
                    basketProduct.setQuantity(basketProduct.getQuantity() + quantity);
                } else {
                    basketProduct = new BasketProduct();
                    basketProduct.setBasket(basket);
                    basketProduct.setProduct(product);
                    basketProduct.setQuantity(quantity);
                    basket.getBasketProducts().add(basketProduct);
                }

                totalPrice += product.getPrice() * quantity;
            }
        }
        basket.setTotalPrice(totalPrice);
        basket.setState(true);
        basketRepository.save(basket);

        // Create a new basket for the user
        Basket newBasket = new Basket();
        newBasket.setUser(user);
        newBasket.setState(false);
        newBasket.setTotalPrice(0.0f);
        basketRepository.save(newBasket);

        return ResponseEntity.ok(orderDetails);
    }
}
