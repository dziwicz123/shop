import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Grid, FormHelperText } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const DeliveryForm = () => {
  const [form, setForm] = useState({
    address: '',
    city: '',
    postalCode: ''
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateField = (name, value) => {
    let error = '';
    switch (name) {
      case 'address':
        error = value ? '' : 'Adres jest wymagany';
        break;
      case 'city':
        error = value ? '' : 'Miasto jest wymagane';
        break;
      case 'postalCode':
        error = /^[0-9]{2}-[0-9]{3}$/.test(value) ? '' : 'Podaj poprawny kod pocztowy';
        break;
      default:
        break;
    }
    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: validateField(name, value),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form fields
    const newErrors = Object.keys(form).reduce((acc, key) => {
      const error = validateField(key, form[key]);
      if (error) acc[key] = error;
      return acc;
    }, {});

    setErrors(newErrors);

    // Check if there are no validation errors
    if (Object.values(newErrors).every(x => x === '')) {
      try {
        // Retrieve basket, cart, and user from session storage
        const basket = JSON.parse(sessionStorage.getItem('basket'));
        const cart = JSON.parse(sessionStorage.getItem('cart')); // Assuming cart contains product IDs and quantities
        const user = JSON.parse(sessionStorage.getItem('user'));

        if (basket && basket.id && cart && cart.length > 0 && user && user.email) {
          // Create payload
          const payload = {
            basketId: basket.id,
            address: form,
            products: cart.map(item => ({
              productId: item.id,
              quantity: item.quantity
            })),
            email: user.email
          };

          // Send request to create order details
          const response = await axios.post('http://localhost:8081/api/order', payload, { withCredentials: true });

          console.log('Order Details created:', response.data);

          // Clear cart
          sessionStorage.removeItem('cart');

          // Fetch the new basket for the user from session storage
          const newBasketResponse = JSON.parse(sessionStorage.getItem('user')).baskets.find(basket => basket.state === false);
          if (newBasketResponse) {
            sessionStorage.setItem('basket', JSON.stringify(newBasketResponse));
          } else {
            console.error('No new basket found for the user');
          }

          // Redirect to home page
          navigate('/');
        } else {
          console.error('No basket, products, or user email found in session storage');
        }
      } catch (error) {
        console.error('Error creating order details:', error);
      }
    }
  };

  return (
      <Container maxWidth="sm" sx={{ py: 3, marginTop: 3, marginBottom: 3, borderRadius: 7, backgroundColor: 'white' }}>
        <Typography variant="h4" gutterBottom>
          Adres Zamówienia
        </Typography>
        <form onSubmit={handleSubmit} noValidate>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                  fullWidth
                  label="Ulica i Numer domu / mieszkania"
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                  error={!!errors.address}
                  helperText={errors.address}
                  required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                  fullWidth
                  label="Miasto"
                  name="city"
                  value={form.city}
                  onChange={handleChange}
                  error={!!errors.city}
                  helperText={errors.city}
                  required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                  fullWidth
                  label="Kod Pocztowy"
                  name="postalCode"
                  value={form.postalCode}
                  onChange={handleChange}
                  error={!!errors.postalCode}
                  helperText={errors.postalCode}
                  required
              />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary">
                Dalej
              </Button>
            </Grid>
          </Grid>
        </form>
        <FormHelperText sx={{ mt: 2 }}>* Pola wymagane</FormHelperText>
      </Container>
  );
};

export default DeliveryForm;
