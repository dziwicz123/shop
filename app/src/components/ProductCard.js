import { useState } from 'react';
import { Card, CardMedia, CardContent, Typography, Button, Box } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
function ProductCard({ product }) {
    const [hover, setHover] = useState(false);
  return (
    <Card 
    elevation={hover ? 8 : 1}
    sx={{
        position: 'relative',
        overflow: 'hidden',
        transition: 'elevation 0.3s',
      }} onMouseEnter={() => setHover(true)}
    onMouseLeave={() => setHover(false)}>
      <CardMedia
        component="img"
        sx={{
            height: 140,
            width: 1,
            objectFit: 'contain'
          }}
        image={product.image}
        alt={product.name}
      />
       <CardContent sx={{ height: 100 }}>
       <Typography 
          gutterBottom 
          variant="h7"
          component="div"
          sx={{
            textAlign: 'left',
            hyphens: 'auto',
            wordBreak: 'break-word',
            overflowWrap: 'break-word'
          }}
        >
          {product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary" noWrap>
          {product.price}
        </Typography>
      </CardContent>
      {hover && (
        <Box sx={{
          position: 'absolute',
          bottom: 16,
          right: 16,
          zIndex: 1000
        }}>
         <Button 
            variant="outlined"
            sx={{
              borderColor: 'green',
              borderWidth: 2,
              color: 'green',
              '&:hover': {
                backgroundColor: 'green',
                color: 'white',
                borderColor: 'green'
              }
            }}
            size="small">
            <ShoppingCartIcon />
          </Button>
        </Box>
      )}
    </Card>
  );
}
export default ProductCard;
