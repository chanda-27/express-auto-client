import { useMediaQuery } from '@mui/material';
import { Box } from '@mui/system';
import React, { useContext, useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import AddANewCar from '../Admin/AddANewCar/AddANewCar';
import DashboardAside from '../Shared/DashboardAside/DashboardAside';
import ManageAllOrders from '../Admin/ManageAllOrders/ManageAllOrders';
import MyOrders from '../Customar/MyOrders/MyOrders';
import { UserContext } from '../../../App';
import MakeAdmin from '../Admin/MakeAdmin/MakeAdmin';
import Review from '../Customar/Review/Review';
import Pay from '../Customar/Pay/Pay';
import ManageCars from '../Admin/ManageCars/ManageCars';

const Dashboard = () => {
  const matchesMediaQuery = useMediaQuery('(min-width:960px)');

  // For MyOrder Component
  const [orders, setOrders] = useState([]);
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [serverResponse, setServerResponse] = useState();

  useEffect(() => {
    fetch('https://intense-spire-47939.herokuapp.com/orders?email='+loggedInUser.email)
    .then(res => res.json())
    .then(data => setOrders(data));
  }, [loggedInUser.email, serverResponse]);

  // For Manage All Order Component
  const [allOrders, setAllOrders] = useState([]);

  useEffect(() => {
    fetch('https://intense-spire-47939.herokuapp.com/allOrders')
    .then(res => res.json())
    .then(data => setAllOrders(data));
  }, [serverResponse]);
  return (
    <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
      {/* Aside */}
      {
        matchesMediaQuery ?
        <Box sx={{bgcolor: 'black', minWidth: '20%'}}>
          <DashboardAside></DashboardAside>
        </Box>
        :
        <Box sx={{bgcolor: 'black'}}>
          <DashboardAside></DashboardAside>
        </Box>
      }

      {/* Main */}
      <Box minWidth="80%" minHeight="60vh" maxWidth="90%">
        {/* Admin */}
        <Route path="/dashboard/addANewCar">
          <AddANewCar setServerResponse={setServerResponse}></AddANewCar>
        </Route>
        <Route path="/dashboard/makeAdmin">
          <MakeAdmin setServerResponse={setServerResponse}></MakeAdmin>
        </Route>
        <Route path="/dashboard/manageAllOrders">
          <ManageAllOrders allOrders={allOrders} setServerResponse={setServerResponse}></ManageAllOrders>
        </Route>
        <Route path="/dashboard/manageCars">
          <ManageCars></ManageCars>
        </Route>

        {/* User */}
        <Route path="/dashboard/myOrders">
          <MyOrders orders={orders} setServerResponse={setServerResponse}></MyOrders>
        </Route>
        <Route path="/dashboard/review">
          <Review></Review>
        </Route>
        <Route path="/dashboard/pay">
          <Pay></Pay>
        </Route>
      </Box>
    </Box>
  );
};

export default Dashboard;