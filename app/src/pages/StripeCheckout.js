import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import axios from 'axios';

const stripePromise = loadStripe('pk_test_51PQtgQ03dG9DcKmUHYPxw5W8tRpSdhpIuHvWH5KRsSi7WXxvD32zFrpWTM43eBLZJfWWh7vbzrJi9rrO2BviI6pK00bBqaArZu');

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();

        setLoading(true);
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement),
        });

        if (!error) {
            try {
                const { id } = paymentMethod;
                const response = await axios.post('http://localhost:8081/api/stripe/charge', {
                    amount: 1000, // $10.00
                    id,
                });

                if (response.data.success) {
                    console.log('Payment successful');
                } else {
                    console.log('Payment failed');
                }
            } catch (error) {
                console.error('Error:', error);
            }
        } else {
            console.error('Error:', error);
        }

        setLoading(false);
    };

    return (
        <form onSubmit={handleSubmit}>
            <CardElement />
            <button type="submit" disabled={!stripe || loading}>
                {loading ? 'Processing...' : 'Pay'}
            </button>
        </form>
    );
};

const StripeCheckout = () => (
    <Elements stripe={stripePromise}>
        <CheckoutForm />
    </Elements>
);

export default StripeCheckout;
