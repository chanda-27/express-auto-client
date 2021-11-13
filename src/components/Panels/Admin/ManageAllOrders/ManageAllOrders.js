import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import OrderCard from '../ManageAllOrders/OrderCard';

const ManageAllOrders = ({allOrders, setServerResponse}) => {
  return (
    <Box sx={{py: 5, px: 1, boxSizing: 'border-box'}}>
      {
        allOrders &&
        allOrders.map(order => <OrderCard order={order} key={order._id} setServerResponse={setServerResponse}></OrderCard>)
      }
    </Box>
  );
};

export default ManageAllOrders;