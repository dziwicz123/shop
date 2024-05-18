import React from 'react';
import {
  Grid,
  Typography,
  Divider,
  Select,
  MenuItem,
  TextField,
  Button,
} from '@mui/material';

export default function CartSummary({ itemCount, totalPrice, shipping, onShippingChange, onCouponChange, onRegister }) {
  return (
    <div style={{ padding: '40px' }}>
      <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 5, mt: 2, pt: 1 }}>
        Summary
      </Typography>

      <Divider sx={{ my: 4 }} />

      <Grid container justifyContent="space-between" sx={{ mb: 4 }}>
        <Typography variant="h5" sx={{ textTransform: 'uppercase' }}>
          items {itemCount}
        </Typography>
        <Typography variant="h5">€ {totalPrice}</Typography>
      </Grid>

      <Typography variant="h5" sx={{ textTransform: 'uppercase', mb: 3 }}>
        Shipping
      </Typography>

      <Select fullWidth variant="outlined" value={shipping} onChange={onShippingChange} sx={{ mb: 4, pb: 2 }}>
        <MenuItem value={5}>Standard-Delivery- €5.00</MenuItem>
        <MenuItem value={10}>Express-Delivery- €10.00</MenuItem>
      </Select>

      <Typography variant="h5" sx={{ textTransform: 'uppercase', mb: 3 }}>
        Give code
      </Typography>

      <TextField fullWidth label="Enter your code" variant="outlined" sx={{ mb: 5 }} onChange={onCouponChange} />

      <Divider sx={{ my: 4 }} />

      <Grid container justifyContent="space-between" sx={{ mb: 5 }}>
        <Typography variant="h5" sx={{ textTransform: 'uppercase' }}>
          Total price
        </Typography>
        <Typography variant="h5">€ {totalPrice + shipping}</Typography>
      </Grid>

      <Button variant="contained" color="primary" size="large" fullWidth onClick={onRegister}>
        Register
      </Button>
    </div>
  );
}
