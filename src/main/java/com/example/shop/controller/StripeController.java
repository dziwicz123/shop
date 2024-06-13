package com.example.shop.controller;

import com.example.shop.service.StripeService;
import com.stripe.model.checkout.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/stripe")
public class StripeController {
    @Autowired
    private StripeService stripeService;

    @GetMapping("/create-checkout-session")
    public Session createCheckoutSession() throws Exception {
        return stripeService.createCheckoutSession();
    }
}
