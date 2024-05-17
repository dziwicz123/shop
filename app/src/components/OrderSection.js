import React from 'react';
import { Box, Paper, Typography, IconButton, Button } from '@mui/material';
import { MoreVert as MoreVertIcon } from '@mui/icons-material';

const OrderSection = () => (
  <Box mb={4} style={{ color: '#000' }}>
    <Typography variant="h6" style={{ color: '#000' }}>Zamówienia</Typography>
    <Paper elevation={3} style={{ padding: '16px', marginTop: '16px', backgroundColor: '#fff' }}>
      <Typography variant="body1"><strong>Zakończone</strong></Typography>
      <Typography variant="body2" style={{ color: '#888888' }}>21 kwietnia 2024</Typography>
      <Typography variant="body2" style={{ color: '#888888' }}>nr 700009259313</Typography>
      <Typography variant="h6" style={{ marginTop: '8px' }}>105,97 zł</Typography>
      <Box display="flex" justifyContent="space-between" alignItems="center" mt={2}>
        <Box display="flex" alignItems="center">
          <img src="https://via.placeholder.com/50" alt="Product 1" style={{ marginRight: '8px' }} />
          <img src="https://via.placeholder.com/50" alt="Product 2" style={{ marginRight: '8px' }} />
        </Box>
        <IconButton>
          <MoreVertIcon />
        </IconButton>
      </Box>
    </Paper>
    <Button style={{ marginTop: '16px', color: '#000' }}>Zobacz wszystkie</Button>
  </Box>
);

export default OrderSection;
