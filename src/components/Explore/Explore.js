import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Banner from '../Home/Banner/Banner';
import ItemCard from '../Home/Items/ItemCard';

const Explore = ({ cars }) => {
  return (
    <Box>
      <Banner></Banner>
      <Box py={5}>
        <Container maxWidth="lg">
          <Box py={3}>
            <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
              <Box sx={{color: '#122136'}}>
                <Typography component="h4" variant="h4">Car models</Typography>
              </Box>
            </Box>
          </Box>
          <Box py={3}>
            <Grid container>
              {
                cars &&
                cars.map(data => <ItemCard data={data} key={data._id}></ItemCard>)
              }
            </Grid>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Explore;