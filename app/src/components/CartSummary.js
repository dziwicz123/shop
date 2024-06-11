import React from 'react';
import { Button, Typography, Box } from '@mui/material';

const CartSummary = ({ itemCount, totalPrice, onDelivery }) => {
    return (
        <Box p={4}>
            <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
                Order Summary
            </Typography>
            <Typography variant="subtitle1" sx={{ mb: 2 }}>
                Items: {itemCount}
            </Typography>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
                Total: {totalPrice} zł
            </Typography>
            <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={onDelivery}
            >
                Delivery
            </Button>
        </Box>
    );
};

export default CartSummary;
