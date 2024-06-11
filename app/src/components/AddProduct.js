import React, { useState } from 'react';
import { TextField, Button, Grid, Typography, Container } from '@mui/material';

function AddProduct() {
  const [productName, setProductName] = useState('');
  const [description, setDescription] = useState('');
  const [imagePath, setImagePath] = useState('');
  const [price, setPrice] = useState('');
  const [salePrice, setSalePrice] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle the form submission logic here
    console.log({
      productName,
      description,
      imagePath,
      price,
      salePrice,
    });
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        Dodaj produkt
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Nazwa produktu"
              fullWidth
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Opis"
              fullWidth
              multiline
              rows={4}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Ścieżka do zdjęcia"
              fullWidth
              value={imagePath}
              onChange={(e) => setImagePath(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Cena"
              fullWidth
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Cena na promocji"
              fullWidth
              type="number"
              value={salePrice}
              onChange={(e) => setSalePrice(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" type="submit" fullWidth>
              Dodaj produkt
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}

export default AddProduct;
