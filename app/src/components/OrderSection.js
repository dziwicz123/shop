import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Paper, Typography, IconButton, Button } from '@mui/material';
import { MoreVert as MoreVertIcon } from '@mui/icons-material';

const OrderSection = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await axios.get('http://localhost:8081/api/order/all', { withCredentials: true });
                setOrders(response.data);
            } catch (error) {
                console.error('Error fetching orders:', error);
            }
        };

        fetchOrders();
    }, []);

    return (
        <Box mb={4} style={{ color: '#000' }}>
            <Typography variant="h6" style={{ color: '#000' }}>Zamówienia</Typography>
            {orders.map((order) => (
                <Paper key={order.id} elevation={3} style={{ padding: '16px', marginTop: '16px', backgroundColor: '#fff' }}>
                    <Typography variant="body1"><strong>{order.state === 'DELIVERED' ? 'Zakończone' : 'W toku'}</strong></Typography>
                    <Typography variant="body2" style={{ color: '#888888' }}>{new Date(order.orderDate).toLocaleDateString()}</Typography>
                    <Typography variant="body2" style={{ color: '#888888' }}>nr {order.id}</Typography>
                    <Typography variant="h6" style={{ marginTop: '8px' }}>{order.basket.totalPrice.toFixed(2)} zł</Typography>
                    <Box display="flex" justifyContent="space-between" alignItems="center" mt={2}>
                        <Box display="flex" alignItems="center">
                            {order.basket.basketProducts.map((product) => (
                                <img
                                    key={product.id}
                                    src={product.product.image || 'https://via.placeholder.com/50'}
                                    alt={`Product ${product.product.productName}`}
                                    style={{ width: '50px', height: '50px', marginRight: '8px' }}
                                />
                            ))}
                        </Box>
                        <IconButton>
                            <MoreVertIcon />
                        </IconButton>
                    </Box>
                </Paper>
            ))}
            <Button style={{ marginTop: '16px', color: '#000' }}>Zobacz wszystkie</Button>
        </Box>
    );
};

export default OrderSection;
