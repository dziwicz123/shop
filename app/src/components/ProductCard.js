import { useState } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Box,
  Modal,
  Fade,
  Backdrop,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { keyframes } from "@mui/system";

const ProductCard = ({ product }) => {
  const [hover, setHover] = useState(false);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const bounce = keyframes`
    0% { transform: scale(0.8); }
    50% { transform: scale(1.2); }
    100% { transform: scale(1); }
  `;

  return (
    <>
      <Card
        elevation={hover ? 8 : 1}
        sx={{
          position: "relative",
          overflow: "hidden",
          transition: "elevation 0.3s",
        }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <CardMedia
          component="img"
          sx={{
            height: 150,
            width: 1,
            objectFit: "contain",
          }}
          image={product.image}
          alt={product.productName}
        />
        <CardContent
          sx={{
            height: 150,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Typography
            gutterBottom
            variant="h7"
            component="div"
            sx={{
              textAlign: "left",
              hyphens: "auto",
              wordBreak: "break-word",
              overflowWrap: "break-word",
            }}
          >
            {product.productName}
          </Typography>
          <Box>
            <Typography
              variant="h6"
              component="div"
              sx={{
                fontWeight: "bold",
                mt: 1,
              }}
            >
              {product.price} zł
            </Typography>
            {product.cutPrice && (
              <Typography
                variant="body2"
                component="div"
                sx={{
                  textDecoration: "line-through",
                  mt: 1,
                }}
              >
                {product.cutPrice} zł
            </Typography>
            )}
          </Box>
        </CardContent>
        {hover && (
          <Box
            sx={{
              position: "absolute",
              bottom: 16,
              right: 16,
              zIndex: 1000,
            }}
          >
            <Button
              variant="outlined"
              sx={{
                borderColor: "green",
                borderWidth: 2,
                color: "green",
                "&:hover": {
                  backgroundColor: "green",
                  color: "white",
                  borderColor: "green",
                },
              }}
              size="small"
              onClick={handleOpen}
            >
              <ShoppingCartIcon />
            </Button>
          </Box>
        )}
      </Card>
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 350,
              bgcolor: "background.paper",
              border: "1px solid #ddd",
              boxShadow: 24,
              p: 4,
              textAlign: "center",
              borderRadius: 2,
              background: "linear-gradient(135deg, #f5f5f5 0%, #fafafa 100%)",
            }}
          >
            <CheckCircleIcon
              sx={{
                color: "green",
                fontSize: 50,
                mb: 2,
                animation: `${bounce} 1s ease-in-out`,
              }}
            />
            <Typography
              variant="h6"
              component="h2"
              sx={{ mb: 3, color: "#333" }}
            >
              Added to Cart!
            </Typography>
            <Box
              sx={{ display: "flex", justifyContent: "center", gap: 2, mt: 2 }}
            >
              <Button
                variant="outlined"
                sx={{
                  borderColor: "green",
                  color: "green",
                  "&:hover": {
                    backgroundColor: "green",
                    color: "white",
                    borderColor: "green",
                  },
                  flex: 1,
                  padding: "10px 20px",
                }}
                onClick={handleClose}
              >
                Continue Shopping
              </Button>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "green",
                  "&:hover": {
                    backgroundColor: "darkgreen",
                  },
                  flex: 1,
                  padding: "10px 20px",
                }}
                onClick={() => {
                  // Redirect to cart page
                  window.location.href = "/cart";
                }}
              >
                Go to Cart
              </Button>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </>
  );
};

export default ProductCard;
