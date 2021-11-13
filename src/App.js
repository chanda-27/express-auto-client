import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import NotFound from './components/NotFound/NotFound';
import Header from './components/Shared/Header/Header';
import Home from './components/Home/Home/Home';
import SinglePackage from './components/SinglePackage/SinglePackage';
import { CircularProgress, useMediaQuery } from '@mui/material';
import ExtraHeader from './components/Shared/ExtraHeader/ExtraHeader';
import Login from './components/Login/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Footer from './components/Shared/Footer/Footer';
import Contact from './components/Contact/Contact';
import Dashboard from './components/Panels/Dashboard/Dashboard';
import { Box } from '@mui/system';
import { ThemeProvider, createMuiTheme } from '@mui/material';
import Explore from './components/Explore/Explore';

export const UserContext = createContext();


const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Quantico',
      'sans-serif',
    ].join(','),
  }
});

function App() {
  const accessToken = localStorage.getItem('accessToken');
  const displayName = localStorage.getItem('displayName');
  const email = localStorage.getItem('email');
  const photoURL = localStorage.getItem('photoURL');
  const isAdmin = localStorage.getItem('isAdmin');
  const [loggedInUser, setLoggedInUser] = useState( accessToken ? { accessToken, displayName, email, photoURL, isAdmin } : null );
  const matches960px = useMediaQuery('(min-width:960px)');
  console.log(loggedInUser);

  // Store Cars
  const [cars, setCars] = useState([]);
  const [car, setCar] = useState([]);

  const [orderInfo, setOrderInfo] = useState({
    ownerName: loggedInUser && loggedInUser.displayName,
    ownerEmail: loggedInUser && loggedInUser.email,
    ownerPhoneNumber: '',
    ownerAddress: '',
    carId: car._id,
    carName: car.carName,
    carPrice: car.carPrice,
    quantity: 1,
    date: new Date(),
    status: 'pending',
  });
  console.log("Single Package Issue", car);
  console.log("All Packages", cars);
  console.log("Order Info", orderInfo);

  const Spinner = () => {
    return (
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '70vh' }}>
        <CircularProgress />
        <Box sx={{fontSize: '37px'}}>&nbsp;Loading... Please wait...</Box>
      </Box>
    );
  }

  if (cars.length < 1) {
    const server = 'https://intense-spire-47939.herokuapp.com/cars';
    fetch(server)
      .then(res => res.json())
      .then(data => setCars(data));
  }
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <ThemeProvider theme={theme}>
        <Router>
          { matches960px && <ExtraHeader></ExtraHeader> }
          <Header></Header>
          <Switch>
            <Route exact path="/">
              {
                cars.length < 1 ?
                <Spinner></Spinner> :
                <Home cars={cars} setCars={setCars}></Home>
              }
            </Route>
            <PrivateRoute path="/car/:carId">
              <SinglePackage car={car} setCar={setCar} orderInfo={orderInfo} setOrderInfo={setOrderInfo}></SinglePackage>
            </PrivateRoute>
            <PrivateRoute path="/contact">
              <Contact></Contact>
            </PrivateRoute>
            <PrivateRoute path="/dashboard/:dynamic">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <Route path="/explore">
              <Explore cars={cars}></Explore>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Login></Login>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </ThemeProvider>
    </UserContext.Provider>
  );
}

export default App;
