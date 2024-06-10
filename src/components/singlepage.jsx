import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  Grid,
  Rating,
  ToggleButtonGroup,
  ToggleButton,
  IconButton,
  TextField,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import styled from "@emotion/styled";

const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: 600,
  margin: "auto",
  borderRadius: "10px",
  boxShadow: "0px 10px 16px rgba(0, 0, 0, 0.2)",
  transition: "box-shadow 0.3s ease",
}));

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#FFC107",
  color: "#000",
  fontWeight: "bold",
  "&:hover": {
    backgroundColor: "#FFA000",
  },
}));

const QuantityButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: "#e0e0e0",
  color: "#000",
  "&:hover": {
    backgroundColor: "#1c4cea",
  },
}));

const Footer = styled(Box)(({ theme }) => ({
  backgroundColor: "#000",
  color: "#fff",
  padding: "20px 10px",
  textAlign: "center",
  position: "absolute",
  bottom: 0,
  left: 0,
  right: 0,
  width: "100%",
  boxSizing: "border-box",
}));

const Container = styled(Box)(({ theme }) => ({
  position: "relative",
  minHeight: "100vh",
  paddingBottom: "100px",
}));

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [rating, setRating] = useState(0);
  const [size, setSize] = useState(null);
  const [color, setColor] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`).then((response) => {
      setProduct(response.data);
    });
  }, [id]);

  if (!product) {
    return (
      <Grid className="d-flex">
        <StyledCard sx={{ width: "40rem", margin: "auto", mt: 5 }}>
          <CardMedia
            component="img"
            width="550"
            height="550"
            image="..."
            alt=""
          />
          <CardContent>
            <Typography variant="h5" component="div"></Typography>
            <Typography variant="body2" color="text.secondary"></Typography>
          </CardContent>
        </StyledCard>
        <StyledCard sx={{ width: "40rem", margin: "auto", mt: 5 }}>
          <CardMedia
            component="img"
            width="550"
            height="550"
            image="..."
            alt=""
          />
          <CardContent>
            <Typography
              width="500"
              height="10"
              variant="h5"
              bgcolor="grey"
              component="div"
            ></Typography>
            <Typography variant="body2" color="text.secondary"></Typography>
          </CardContent>
        </StyledCard>
      </Grid>
    );
  }

  const handleRatingChange = (event, newValue) => {
    setRating(newValue);
  };

  const handleSizeChange = (event, newSize) => {
    setSize(newSize);
  };

  const handleColorChange = (event, newColor) => {
    setColor(newColor);
  };

  const handleIncrement = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  return (
    <Container>
      <Box sx={{ p: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <StyledCard>
              <CardMedia
                component="img"
                height="600px"
                image={product.image}
                alt={product.title}
                sx={{ objectFit: "contain", p: 2 }}
              />
            </StyledCard>
          </Grid>
          <Grid item xs={12} md={6}>
            <StyledCard>
              <CardContent>
                <Typography
                  variant="h5"
                  component="div"
                  color="error"
                  gutterBottom
                >
                  {product.title}
                </Typography>
                <Typography variant="body2" color="primary" paragraph>
                  {product.description}
                </Typography>
                <Typography
                  variant="body1"
                  color="error"
                  sx={{ fontWeight: "bold" }}
                >
                  Price: {product.price.toLocaleString()} $
                </Typography>
                <Typography variant="body2" color="secondary" paragraph>
                  Category: {product.category}
                </Typography>
                <Box sx={{ mb: 2 }}>
                  <Typography variant="body2" color="secondary">
                    Rating:
                  </Typography>
                  <Rating
                    name="product-rating"
                    value={rating}
                    onChange={handleRatingChange}
                    precision={0.5}
                  />
                </Box>
                <Box sx={{ mb: 2 }}>
                  <Typography variant="body2" color="secondary">
                    Size:
                  </Typography>
                  <ToggleButtonGroup
                    value={size}
                    exclusive
                    onChange={handleSizeChange}
                    aria-label="product size"
                  >
                    <ToggleButton value="XS" aria-label="extra small">
                      XS
                    </ToggleButton>
                    <ToggleButton value="S" aria-label="small">
                      S
                    </ToggleButton>
                    <ToggleButton value="M" aria-label="medium">
                      M
                    </ToggleButton>
                    <ToggleButton value="L" aria-label="large">
                      L
                    </ToggleButton>
                    <ToggleButton value="XL" aria-label="extra large">
                      XL
                    </ToggleButton>
                  </ToggleButtonGroup>
                </Box>
                <Box sx={{ mb: 2 }}>
                  <Typography variant="body2" color="secondary">
                    Color:
                  </Typography>
                  <ToggleButtonGroup
                    value={color}
                    exclusive
                    onChange={handleColorChange}
                    aria-label="product color"
                  >
                    <ToggleButton value="blue" aria-label="blue">
                      Blue
                    </ToggleButton>
                    <ToggleButton value="red" aria-label="red">
                      Red
                    </ToggleButton>
                  </ToggleButtonGroup>
                </Box>
                <Box sx={{ mb: 2, display: "flex", alignItems: "center" }}>
                  <Typography variant="body2" color="secondary" sx={{ mr: 2 }}>
                    Quantity:
                  </Typography>
                  <QuantityButton
                    className="border"
                    onClick={handleDecrement}
                    aria-label="decrease quantity"
                  >
                    <RemoveIcon />
                  </QuantityButton>
                  <TextField
                    value={quantity}
                    inputProps={{ readOnly: true }}
                    sx={{ width: 40, height: 50, textAlign: "center" }}
                  />
                  <QuantityButton
                    onClick={handleIncrement}
                    aria-label="increase quantity"
                  >
                    <AddIcon />
                  </QuantityButton>
                </Box>
                <StyledButton
                  variant="contained"
                  startIcon={<ShoppingCartIcon />}
                  fullWidth
                  sx={{ mt: 2 }}
                >
                  Savatga
                </StyledButton>
              </CardContent>
            </StyledCard>
          </Grid>
        </Grid>
      </Box>
      <Footer className="py-0 px-1 my-0">
        <Typography variant="h6">Contact Us</Typography>
        <Typography variant="body1">
          Email: jumaboyevkamronbek05@gmail.com
        </Typography>
        <Typography variant="body1">Phone: +998 93 594 20 05</Typography>
        <Typography variant="body1">Address: UZB, Tashkent</Typography>
      </Footer>
    </Container>
  );
};

export default ProductDetails;
