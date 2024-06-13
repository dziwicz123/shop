import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import axios from 'axios';
import { Container, Typography, Button, CircularProgress, Box } from '@mui/material';
import { styled } from '@mui/system';
import AppNavbar from "../components/Navbar";
import AppFooter from "../components/Footer";
const stripePromise = loadStripe('pk_test_51PQtgQ03dG9DcKmUHYPxw5W8tRpSdhpIuHvWH5KRsSi7WXxvD32zFrpWTM43eBLZJfWWh7vbzrJi9rrO2BviI6pK00bBqaArZu');

const StyledContainer = styled(Container)({
    marginTop: '3rem',
    marginBottom:'3rem',
    padding: '2rem',
    background: 'white',
    borderRadius: '8px',
});

const StyledButton = styled(Button)({
    marginTop: '1rem',
});

const StyledCardElement = styled(Box)({
    padding: '1rem',
    border: '1px solid #ccc',
    borderRadius: '4px',
    backgroundColor: 'white',
});

const StyledErrorMessage = styled(Typography)({
    color: 'red',
    marginTop: '1rem',
});

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        setLoading(true);
        setErrorMessage('');

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
                    console.log('Płatność zakończona sukcesem');
                } else {
                    setErrorMessage('Płatność nie powiodła się');
                }
            } catch (error) {
                setErrorMessage('Wystąpił błąd podczas płatności');
                console.error('Error:', error);
            }
        } else {
            setErrorMessage(error.message);
            console.error('Error:', error);
        }

        setLoading(false);
    };

    return (
        <StyledContainer maxWidth="sm">
            <Typography variant="h4" gutterBottom>
                Zapłać
            </Typography>
            <form onSubmit={handleSubmit}>
                <StyledCardElement>
                    <CardElement />
                </StyledCardElement>
                <StyledButton
                    type="submit"
                    variant="contained"
                    color="primary"
                    disabled={!stripe || loading}
                    fullWidth
                >
                    {loading ? <CircularProgress size={24} /> : 'Zapłać'}
                </StyledButton>
                {errorMessage && <StyledErrorMessage>{errorMessage}</StyledErrorMessage>}
            </form>
        </StyledContainer>
    );
};

const StripeCheckout = () => (
    <>
    <AppNavbar/>
    <Elements stripe={stripePromise}>
        <CheckoutForm />
    </Elements>
    <AppFooter/>
    </>
);

export default StripeCheckout;
