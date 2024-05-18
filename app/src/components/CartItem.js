import React from 'react';
import {
  Grid,
  CardMedia,
  Typography,
  IconButton,
  Input,
  Divider,
} from '@mui/material';
import { Add, Remove, Close } from '@mui/icons-material';

export default function CartItem({ item, onQuantityChange, onRemove }) {
  const handleQuantityChange = (newQuantity) => {
    if (newQuantity >= 1) {
      onQuantityChange(item.id, newQuantity);
    }
  };

  return (
    <React.Fragment>
      <Grid container spacing={2} alignItems="center" sx={{ mb: 4 }}>
        <Grid item md={2}>
          <CardMedia
            component="img"
            image={item.image}
            alt={item.name}
            sx={{ borderRadius: 2 }}
          />
        </Grid>
        <Grid item md={3}>
          <Typography variant="subtitle2" sx={{ color: 'text.secondary' }}>
            {item.category}
          </Typography>
          <Typography variant="h6" sx={{ color: 'black', mb: 0 }}>
            {item.name}
          </Typography>
        </Grid>
        <Grid item md={3} sx={{ display: 'flex', alignItems: 'center' }}>
          <IconButton onClick={() => handleQuantityChange(item.quantity - 1)}>
            <Remove />
          </IconButton>

          <Input type="number" value={item.quantity} min={1} size="small" readOnly />

          <IconButton onClick={() => handleQuantityChange(item.quantity + 1)}>
            <Add />
          </IconButton>
        </Grid>
        <Grid item md={2} sx={{ textAlign: 'end' }}>
          <Typography variant="h6">€ {item.price}</Typography>
        </Grid>
        <Grid item md={1} sx={{ textAlign: 'end' }}>
          <IconButton onClick={() => onRemove(item.id)}>
            <Close />
          </IconButton>
        </Grid>
      </Grid>

      <Divider sx={{ my: 4 }} />
    </React.Fragment>
  );
}
