import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Grid, FormHelperText } from '@mui/material';

const DeliveryForm = () => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: ''
  });

  const [errors, setErrors] = useState({});

  const validateField = (name, value) => {
    let error = '';
    switch (name) {
      case 'firstName':
        error = value ? '' : 'Imię jest wymagane';
        break;
      case 'lastName':
        error = value ? '' : 'Nazwisko jest wymagane';
        break;
      case 'email':
        error = /^\S+@\S+\.\S+$/.test(value) ? '' : 'Podaj poprawny adres email';
        break;
      case 'phone':
        error = /^[0-9]{9}$/.test(value) ? '' : 'Podaj poprawny numer telefonu';
        break;
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

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = Object.keys(form).reduce((acc, key) => {
      const error = validateField(key, form[key]);
      if (error) acc[key] = error;
      return acc;
    }, {});
    setErrors(newErrors);
    if (Object.values(newErrors).every(x => x === '')) {
      console.log(form);
    }
  };

  return (
    <Container maxWidth="sm" sx={{ py: 3, marginTop: 3, marginBottom: 3, borderRadius: 7, backgroundColor: 'white' }}>
      <Typography variant="h4" gutterBottom>
        Adres Zamówienia
      </Typography>
      <form onSubmit={handleSubmit} noValidate>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Imię"
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
              error={!!errors.firstName}
              helperText={errors.firstName}
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Nazwisko"
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
              error={!!errors.lastName}
              helperText={errors.lastName}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              error={!!errors.email}
              helperText={errors.email}
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Numer Telefonu"
              name="phone"
              type="tel"
              value={form.phone}
              onChange={handleChange}
              error={!!errors.phone}
              helperText={errors.phone}
              required
            />
          </Grid>
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
