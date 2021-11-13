import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import ManageCarsCard from './ManageCarsCard';

const ManageCars = () => {
  const [allCars, setAllCars] = useState([]);
  useEffect(() => {
    fetch('https://intense-spire-47939.herokuapp.com/cars')
      .then(res => res.json())
      .then(data => setAllCars(data));
  }, []);
  console.log("All Cars", allCars);
  return (
    <Box sx={{py: 5, px: 1, boxSizing: 'border-box'}}>
      {
        allCars &&
        allCars.map(car => <ManageCarsCard car={car} setAllCars={setAllCars} key={car._id}></ManageCarsCard>)
      }
    </Box>
  );
};

export default ManageCars;