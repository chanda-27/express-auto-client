import React from 'react';
import { Button, Grid, Modal, Typography } from '@mui/material';
import { Box } from '@mui/system';
import OrderCard from './OrderCard';

const MyOrders = ({ orders, setServerResponse }) => {
  

  orders && console.log(orders);
  return (
    <Box sx={{py: 5, px: 1, boxSizing: 'border-box'}}>
      {
        orders &&
        orders.map(order => <OrderCard order={order} key={order._id} setServerResponse={setServerResponse}></OrderCard>)
      }
    </Box>
  );
};

export default MyOrders;