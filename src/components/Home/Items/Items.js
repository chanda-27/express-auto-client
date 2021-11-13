import { Button, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ItemCard from './ItemCard';

const Items = ({ cars, setCars }) => {
  useEffect(() => {
    const server = 'https://intense-spire-47939.herokuapp.com/cars';
    fetch(server)
      .then(res => res.json())
      .then(data => setCars(data));
  }, [setCars]);

  const firstSix = cars.slice(0, 6);
  console.log(firstSix);
  return (
    <Box py={5}>
      <Container maxWidth="lg">
        <Box py={3}>
          <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
            <Box sx={{color: '#122136'}}>
              <Typography component="h4" variant="h4">Car models</Typography>
            </Box>
            <Box>
              <Link to="/explore"><Button variant="outlined">More</Button></Link>
            </Box>
          </Box>
        </Box>
        <Box py={3}>
          <Grid container>
            {
              firstSix &&
              firstSix.map(data => <ItemCard data={data} key={data._id}></ItemCard>)
            }
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Items;