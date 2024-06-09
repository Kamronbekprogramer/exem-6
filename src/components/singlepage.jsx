// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "./singlepage"
// import { useParams } from "react-router-dom";
// import {
//   Box,
//   Typography,
//   Card,
//   CardContent,
//   CardMedia,
//   Button,
// } from "@mui/material";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// import styled from "@emotion/styled";

// const StyledCard = styled(Card)(({ theme }) => ({
//   maxWidth: 600,
//   margin: "auto",
//   borderRadius: "10px",
//   boxShadow: "0px 10px 16px rgba(0, 0, 0, 0.2)",
//   transition: "box-shadow 0.3s ease",
//   "&:hover": {
//     boxShadow: "0px 12px 20px rgba(0, 0, 0, 0.6)",
//     scale: "1.01",
//     transition: "ease-in-out"
//   },
// }));

// const StyledButton = styled(Button)(({ theme }) => ({
//   backgroundColor: "#FFC107",
//   color: "#000",
//   fontWeight: "bold",
//   "&:hover": {
//     backgroundColor: "#FFA000",
//   },
// }));

// const ProductDetails = () => {
//   const { id } = useParams();
//   const [product, setProduct] = useState(null);

//   useEffect(() => {
//     axios.get(`https://fakestoreapi.com/products/${id}`).then((response) => {
//       setProduct(response.data);
//     });
//   }, [id]);

//   if (!product) {
//     return <Typography>Loading...</Typography>;
//   }

//   return (
//     <Box className="hover:scale-0.5" sx={{ p: 3 }}>
//       <StyledCard>
//         <CardMedia
//           component="img"
//           height="500"
//           width="250"
          
//           className="px-1 w-2 py-1 p-3 rounded"
//           image={product.image}
//           alt={product.title}
//         />
//         <CardContent>
//           <Typography variant="h5" component="div" gutterBottom>
//             {product.title}
//           </Typography>
//           <Typography variant="body2" color="text.secondary" paragraph>
//             {product.description}
//           </Typography>
//           <Typography
//             variant="body1"
//             color="text.primary"
//             sx={{ fontWeight: "bold" }}
//           >
//             {product.price.toLocaleString()} $
//           </Typography>
//           <Typography variant="body2" color="text.secondary">
//             Category: {product.category}
//           </Typography>
//           <Typography variant="body2" color="text.secondary">
//             Rating: {product.rating.rate} ({product.rating.count} reviews)
//           </Typography>
//           <StyledButton
//             variant="contained"
//             startIcon={<ShoppingCartIcon />}
//             fullWidth
//             sx={{ mt: 2 }}
//           >
//             Savatga
//           </StyledButton>
//         </CardContent>
//       </StyledCard>
//     </Box>
//   );
// };

// export default ProductDetails;


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
  maxWidth: 900,
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

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [rating, setRating] = useState(0);
  const [size, setSize] = useState(null);
  const [color, setColor] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
         .then((response) => {setProduct(response.data) });
  }, [id]);

  if (!product) {
    return <Typography>Loading...</Typography>;
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
    <Box sx={{ p: 3 }}>
      <StyledCard>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <CardMedia
              component="img"
              height="100%"
              image={product.image}
              alt={product.title}
              sx={{ objectFit: "contain", p: 2 }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <CardContent>
              <Typography variant="h5" component="div" gutterBottom>
                {product.title}
              </Typography>
              <Typography variant="body2" color="text.secondary" paragraph>
                {product.description}
              </Typography>
              <Typography
                variant="body1"
                color="text.primary"
                sx={{ fontWeight: "bold" }}
              >
                {product.price.toLocaleString()} $
              </Typography>
              <Typography variant="body2" color="text.secondary" paragraph>
                Category: {product.category}
              </Typography>
              <Box sx={{ mb: 2 }}>
                <Typography variant="body2" color="text.secondary">
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
                <Typography variant="body2" color="text.secondary">
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
                <Typography variant="body2" color="text.secondary">
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
              <Box sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
                <Typography variant="body2" color="text.secondary" sx={{ mr: 2 }}>
                  Quantity:
                </Typography>
                <QuantityButton onClick={handleDecrement} aria-label="decrease quantity">
                  <RemoveIcon />
                </QuantityButton>
                <TextField
                  value={quantity}
                  inputProps={{ readOnly: true }}
                  sx={{ width: 50, textAlign: 'center' }}
                />
                <QuantityButton onClick={handleIncrement} aria-label="increase quantity">
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
          </Grid>
        </Grid>
      </StyledCard>
    </Box>
  );
};

export default ProductDetails;
