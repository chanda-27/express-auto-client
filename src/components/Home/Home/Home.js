import { Box } from '@mui/system';
import React from 'react';
import Banner from '../Banner/Banner';
import OurLocation from '../../Shared/OurLocation/OurLocation';
import Items from '../Items/Items';
import Reviews from '../Reviews/Reviews';

const Home = ({ cars, setCars }) => {
  return (
    <Box>
      <Banner></Banner>
      <Items cars={cars} setCars={setCars}></Items>
      <OurLocation></OurLocation>
      <Reviews></Reviews>
    </Box>
  );
};

export default Home;