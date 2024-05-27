import React, { useState } from 'react';
import { Container, Grid, Card, CardContent, Typography, Button,Divider} from '@mui/material';
import CartItem from './CartItem';
import CartSummary from './CartSummary';
import { ArrowBack } from '@mui/icons-material';
const initialItems = [
  {
    id: 1,
    name: 'Cotton T-shirt',
    category: 'Shirt',
    image: 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img5.webp',
    price: 44.00,
    quantity: 1
  },
  {
    id: 2,
    name: 'Cotton T-shirt',
    category: 'Shirt',
    image: 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img6.webp',
    price: 44.00,
    quantity: 1
  },
  {
    id: 3,
    name: 'Cotton T-shirt',
    category: 'Shirt',
    image: 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img7.webp',
    price: 44.00,
    quantity: 1
  }
];

const CartZone = () =>{
  const [items, setItems] = useState(initialItems);

  const handleQuantityChange = (id, newQuantity) => {
    setItems(items.map(item =>
      item.id === id ? { ...item, quantity: newQuantity > 0 ? newQuantity : 0 } : item
    ));
  };

  const handleRemove = (id) => {
    setItems(items.filter(item => item.id !== id));
  };


  const handleRegister = () => {
    // Handle registration logic
    console.log('Register button clicked');
  };

  const itemCount = items.reduce((count, item) => count + item.quantity, 0);
  const totalPrice = items.reduce((total, item) => total + (item.price * item.quantity), 0);

  return (
    <section style={{minHeight: '100vh' }}>
      <Container sx={{ py: 5, height: '100%' }}>
        <Grid container justifyContent="center" alignItems="center" sx={{ height: '100%' }}>
          <Grid item xs={12}>
            <Card sx={{ borderRadius: 2 }}>
              <CardContent sx={{ p: 0 }}>
                <Grid container spacing={0}>
                  <Grid item lg={8}>
                    <div style={{ padding: '40px' }}>
                      <Grid container justifyContent="space-between" alignItems="center" sx={{ mb: 5 }}>
                        <Typography variant="h4" sx={{ fontWeight: 'bold', color: 'black' }}>
                          Shopping Cart
                        </Typography>
                        <Typography variant="subtitle1" sx={{ color: 'text.secondary' }}>
                          {itemCount} items
                        </Typography>
                      </Grid>

                      <Divider sx={{ my: 4 }} />

                      {items.map(item => (
                        <CartItem
                          key={item.id}
                          item={item}
                          onQuantityChange={handleQuantityChange}
                          onRemove={handleRemove}
                        />
                      ))}

                      <div style={{ paddingTop: '20px' }}>
                        <Button startIcon={<ArrowBack />} href="#" variant="text">
                          Back to shop
                        </Button>
                      </div>
                    </div>
                  </Grid>
                  <Grid item lg={4} sx={{ backgroundColor: '#f5f5f5' }}>
                    <CartSummary
                      itemCount={itemCount}
                      totalPrice={totalPrice}
                      onRegister={handleRegister}
                    />
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}
export default CartZone;