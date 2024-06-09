import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./product.css"
import {
  Card, CardContent, CardMedia, Typography, Box, Button, Grid, Select, MenuItem, FormControl, InputLabel, IconButton
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: 305,
  margin: 'auto',
  borderRadius: '10px',
  padding: "10px",
  boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.2)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '100%',
  "&:hover": {
    boxShadow: "0px 12px 20px rgba(0, 0, 0, 0.6)",
    scale: "1.01",
    transition: "ease-in-out"
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#FFC107',
  color: '#000',
  fontWeight: 'bold',
  '&:hover': {
    backgroundColor: '#FFA000',
  },
}));

const Cars = () => {
  const [users, setUsers] = useState([]);
  const [limit, setLimit] = useState(2);

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products?limit=${limit}`).then(response => {
      setUsers(response.data);
    })
    .catch(error => {
      console.error('There was an error making the request', error);
    });
  }, [limit]);

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Products
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
        <FormControl sx={{ minWidth: 120 }}>
          <InputLabel id="select-limit-label">Select limit</InputLabel>
          <Select
            labelId="select-limit-label"
            value={limit}
            onChange={(e) => setLimit(e.target.value)}
            label="Select limit"
          >
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={6}>6</MenuItem>
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={20}>20</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Grid container spacing={3}>
        {users.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <StyledCard>
              <Link to={`/main/index/${item.id}`}>
                <CardMedia
                  component="img"
                  // height="200"
                  width="50"
                  className='card-img px-1 w-2 py-1 '
                  image={item.image}  
                  alt={item.title}
                  sx={{ cursor: 'pointer' }}
                />
              </Link>
              <CardContent sx={{ flexGrow: 1 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography variant="h6" component="div">
                    {item.title}
                  </Typography>
                  <IconButton aria-label="add to favorites">
                    <FavoriteBorderIcon />
                  </IconButton>
                </Box>
                {/* <Typography variant="body2" color="text.secondary" paragraph>
                  {item.description}
                </Typography> */}
                <Typography variant="body1" color="text.primary" sx={{ fontWeight: 'bold' }}>
                  {item.price.toLocaleString()} $
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Category: {item.category}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Rating: {item.rating.rate} ({item.rating.count} reviews)
                </Typography>
              </CardContent>
              <StyledButton
                variant="contained"
                startIcon={<ShoppingCartIcon />}
                fullWidth
                sx={{ mt: 2 }}
              >
                Savatga
              </StyledButton>
            </StyledCard>
          </Grid>
        ))}
      </Grid>
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
        <Button variant="contained" color="primary" sx={{ mx: 2 }}>
          Prev
        </Button>
        <Typography variant="body1" sx={{ my: 'auto' }}>1</Typography>
        <Button variant="contained" color="primary" sx={{ mx: 2 }}>
          Next
        </Button>
      </Box>
    </Box>
  );
}

export default Cars;
