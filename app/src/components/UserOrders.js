import React from "react";
import { Paper, Typography, Box, Button } from "@mui/material";

const UserOrders = () => (
  <>
    <Typography variant="h6">Historia zamówień</Typography>
    <Paper style={{ padding: "16px", marginBottom: "16px" }}>
      <Box mt={2}>
        <Box mb={2} borderBottom="1px solid #ddd" pb={1}>
          <Typography>
            <strong>Order #:</strong> 12345
          </Typography>
          <Typography>
            <strong>Date:</strong> 2024-05-01
          </Typography>
          <Typography>
            <strong>Status:</strong> Delivered
          </Typography>
          <Typography>
            <strong>Total:</strong> $100.00
          </Typography>
          <Button
            variant="contained"
            style={{ marginTop: "16px", backgroundColor: "#3f51b5", color: "#fff" }}
          >
            View Details
          </Button>
        </Box>
      </Box>
    </Paper>
  </>
);

export default UserOrders;
