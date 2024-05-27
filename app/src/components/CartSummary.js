import React from 'react';
import {
  Grid,
  Typography,
  Divider,
  Button,
} from '@mui/material';

export default function CartSummary({ itemCount, totalPrice, onRegister }) {
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

      <Divider sx={{ my: 4 }} />

      <Grid container justifyContent="space-between" sx={{ mb: 5 }}>
        <Typography variant="h5" sx={{ textTransform: 'uppercase' }}>
          Total price
        </Typography>
        <Typography variant="h5">€ {totalPrice}</Typography>
      </Grid>

      <Button variant="contained" color="primary" size="large" fullWidth onClick={onRegister}>
        Register
      </Button>
    </div>
  );
}
