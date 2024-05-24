import React from 'react';
import { Card, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material';

const ProductCard = ({ product }) => {
    return (
        <Card>
            <CardMedia
                component="img"
                height="200"
                image={product.image}
                alt={product.productName}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {product.productName}
                </Typography>
                <Typography variant="body1" component="p">
                    {product.price} zł
                </Typography>
                {product.cutPrice && (
                    <Typography variant="body2" color="textSecondary" component="p">
                        Cut Price: {product.cutPrice} zł
                    </Typography>
                )}
            </CardContent>
            <CardActions>
                <Button size="small" color="primary">
                    Add to Cart
                </Button>
            </CardActions>
        </Card>
    );
};

export default ProductCard;
