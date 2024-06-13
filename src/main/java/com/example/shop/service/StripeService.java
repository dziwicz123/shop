package com.example.shop.service;

import com.stripe.Stripe;
import com.stripe.exception.StripeException;
import com.stripe.model.checkout.Session;
import com.stripe.param.checkout.SessionCreateParams;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
public class StripeService {

    @Value("${sk_test_51PQtgQ03dG9DcKmUMxFhdgmZL5Sisr6LDVdIJ6Ommmsa2jnQoo8GsRbqQjBolgi5Lzy3KSUSQee3ocFs5rI5Xl4A001wi47t6e}")
    private String secretKey;

    public StripeService() {
        Stripe.apiKey = secretKey;
    }

    public Session createCheckoutSession() throws StripeException {
        SessionCreateParams params = SessionCreateParams.builder()
                .addPaymentMethodType(SessionCreateParams.PaymentMethodType.CARD)
                .setMode(SessionCreateParams.Mode.PAYMENT)
                .setSuccessUrl("http://localhost:3000/success")
                .setCancelUrl("http://localhost:3000/cancel")
                .addLineItem(SessionCreateParams.LineItem.builder()
                        .setQuantity(1L)
                        .setPriceData(SessionCreateParams.LineItem.PriceData.builder()
                                .setCurrency("usd")
                                .setUnitAmount(1L) // $0.01
                                .setProductData(SessionCreateParams.LineItem.PriceData.ProductData.builder()
                                        .setName("Test Product")
                                        .build())
                                .build())
                        .build())
                .build();

        return Session.create(params);
    }
}
