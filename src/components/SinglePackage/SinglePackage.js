import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useContext, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { UserContext } from '../../App';

const SinglePackage = ({ car, setCar, orderInfo, setOrderInfo }) => {
  // Get URL parameters
  const { carId } = useParams();
  console.log("Car ID Issue", carId);
  // Getting data from parent component
  useEffect(() => {
    fetch(`https://intense-spire-47939.herokuapp.com/cars/${carId}`)
      .then(res => res.json())
      .then(data => {
        setCar(data);
      });
  }, [carId, setOrderInfo, setCar]);
  console.log("Order Info", orderInfo);

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const { _id, carName, carDescription, carImage, carPrice } = car;

  // useHistory
  const history = useHistory();

  // Date Functions
  const handleChange = (event) => {
    event.target.name === 'ownerPhoneNumber' ?
    setOrderInfo({ ...orderInfo, ownerPhoneNumber: event.target.value }) :
    setOrderInfo({ ...orderInfo, ownerAddress: event.target.value });
  };


  const handleOrder = () => {
    orderInfo.carId = _id;
    orderInfo.carName = carName;
    orderInfo.carPrice = carPrice;
    orderInfo.ownerName = loggedInUser.displayName;
    orderInfo.ownerEmail = loggedInUser.email;
    console.log(orderInfo);

    // Send Orders
    fetch('https://intense-spire-47939.herokuapp.com/addOrder', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(orderInfo)
    })
    .then(res => res.json())
    .then(data => {data.acknowledged && alert("Your order placed successfully! Thank you"); history.push("/dashboard/myOrders")})
    .catch(error => console.log(error));
  }
  return (
    <Box>
      <Box sx={{bgcolor: 'rgba(0, 0, 0, .8)', py: 8}}>
        <Container maxWidth="lg">
          <Box sx={{mx: 'auto', maxWidth: '65%', '& img': {width: '100%', borderRadius: '10px'}}}>
            <img src={carImage} alt={carName} />
          </Box>
        </Container>
      </Box>
      <Box sx={{bgcolor: 'white', p: 3}}>
        <Box sx={{textAlign: 'center', py: 5}}>
          <Typography component="h1" variant="h2" sx={{color: '#122136'}}>{carName}</Typography>
          <Typography component="span" sx={{fontSize: '17px', color: '#122136', maxWidth: '65%'}}>{carDescription}</Typography>
        </Box>
        <Box p={2}>
          <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', textTransform: 'uppercase', fontSize: '24px', bgcolor: 'black', p: 3, borderRadius: '50rem 0', color: 'white'}}>
            <Box fontWeight={700}>Bill To:</Box>
            <Box>{loggedInUser.displayName}</Box>
          </Box>
          <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', textTransform: 'uppercase', fontSize: '20px', p: 3, borderRadius: '0 50rem 0 0', color: 'purple', border: '1px solid #ccc'}}>
            <Box fontWeight={700}>Email:</Box>
            <Box sx={{textTransform: 'none'}}>{loggedInUser.email}</Box>
          </Box>
          <Grid container sx={{justifyContent: 'space-between', alignItems: 'center', textTransform: 'uppercase', fontSize: '20px', p: 3, color: 'purple', border: '1px solid #ccc'}}>
            <Grid item xs={12} md={6} width="100%">
              <Box px={1}>
                <TextField onChange={handleChange} id="ownerPhoneNumber" name="ownerPhoneNumber" label="Owner Phone Number" variant="standard" sx={{width: '100%'}} value={orderInfo.ownerPhoneNumber} required />
              </Box>
            </Grid>
            <Grid item xs={12} md={6} width="100%">
              <Box px={1}>
                <TextField onChange={handleChange} id="ownerAddress" name="ownerAddress" label="Owner Address" variant="standard" sx={{width: '100%'}} value={orderInfo.ownerAddress} required />
              </Box>
            </Grid>
          </Grid>
          <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', textTransform: 'uppercase', fontSize: '20px', p: 3, color: 'purple', border: '1px solid #ccc'}}>
            <Box fontWeight={700}>Price:</Box>
            <Box>${carPrice}</Box>
          </Box>
          <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', textTransform: 'uppercase', p: 3, borderRadius: '0 0 0 50rem', color: 'purple', border: '1px solid #ccc'}}>
            {
              loggedInUser.isAdmin === 'true' ?
              <Box>You're an admin! Please log out and sign in as a user to buy this car!</Box> :
              <Button sx={{ fontSize: '20px' }} onClick={handleOrder} color="secondary">Checkout</Button>
            }
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SinglePackage;