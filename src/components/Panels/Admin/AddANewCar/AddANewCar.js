import { faSave } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, CircularProgress, Grid, TextField } from '@mui/material';
import { Box, styled } from '@mui/system';
import axios from 'axios';
import React, { useState } from 'react';

const AddANewCar = ({ setServerResponse }) => {
  // State for storing all car data
  const [carDetails, setCarDetails] = useState({
    carName: "",
    carDescription: "",
    carPrice: 0,
    carImage: "",
  });

  const [uploadImageDetail, setUploadImageDetail] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const carData = await {
      carName: carDetails.carName,
      carDescription: carDetails.carDescription,
      carPrice: (carDetails.carPrice * 1).toFixed(2),
      carImage: carDetails.carImage,
    }
    console.log("Inside handleSubmit", carData);
    const serverURL = await 'https://intense-spire-47939.herokuapp.com/cars';
    await fetch(serverURL, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(carData)
    })
    .then(res => res.json())
    .then(data => {
      alert("Car added successfully!");
      setCarDetails({
        carName: "",
        carDescription: "",
        carPrice: 0,
        carImage: "",
      });
      setServerResponse({response: data});
    });
  }

  const handleChange = (event) => {
    event.preventDefault();
    event.target.name === 'name' &&
    setCarDetails({ ...carDetails, carName: event.target.value });
    event.target.name === 'price' &&
    setCarDetails({ ...carDetails, carPrice: event.target.value });
    event.target.name === 'description' &&
    setCarDetails({ ...carDetails, carDescription: event.target.value });
  }

  // On Change Image Upload Handler
  const handleImageUpload = (event) => {
    event.preventDefault();
    event.target.files.length && setUploadImageDetail(true);

    console.log("Inside handleImageUpload", event.target.files);
    const imageData = new FormData();
    imageData.set('key', 'b373b317b63fb4939f325af937793ecc');
    imageData.append('image', event.target.files[0]);

    // Axios Fetching
    axios.post('https://api.imgbb.com/1/upload', imageData)
    .then(function (response) {
      setCarDetails({ ...carDetails, carImage: response.data.data.display_url });
      console.log(response.data.data.display_url);
      response.data.data.display_url.length > 0 && setUploadImageDetail(false);
    })
    .catch(function (error) {
      console.log(error);
      setUploadImageDetail(false);
    });
  }

  console.log("carDetails state", carDetails);

  const ImageFileInput = () => {
    return (
      <Box p={1}>
        <label htmlFor="contained-button-file">
          <Input accept="image/*" id="contained-button-file" multiple type="file" onChange={handleImageUpload} />
          <Button variant="outlined" component="span" sx={{width: '100%'}}>
            Add Photo
          </Button>
        </label>
      </Box>
    );
  }
  
  const Spinner = () => {
    return (
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <CircularProgress />
        <Box pl={2}>File is uploading... Please wait...</Box>
      </Box>
    );
  }

  const Input = styled('input')({
    display: 'none',
  });

  return (
    <Box p={3}>
      <Box>
        <form onSubmit={handleSubmit}>
          <Grid container sx={{alignItems: 'center'}}>
            <Grid item xs={12} md={6}>
              <Box p={1}>
                <TextField onChange={handleChange} id="name" name="name" label="Car Name" variant="standard" sx={{width: '100%'}} value={carDetails.carName} required />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box p={1}>
                <TextField onChange={handleChange} id="price" name="price" label="Car Price" variant="standard" sx={{width: '100%'}} value={carDetails.carPrice} required />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box p={1}>
                <TextField onChange={handleChange} id="description" name="description" label="Description" variant="standard" sx={{width: '100%'}} multiline rows={4} value={carDetails.carDescription} required />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              {/* Spinner with toggler */}
              {
                !uploadImageDetail && <ImageFileInput></ImageFileInput>
              }
              {
                uploadImageDetail && <Spinner></Spinner>
              }
              {/* Spinner with toggler */}
            </Grid>
          </Grid>
          <Box sx={{display: 'flex', justifyContent: 'center', py: 3}}>
            <Button variant="contained" type="submit" sx={{fontSize: '18px', py: 1, px: 5, display: 'flex', alignItems: 'center'}}>
              <Box fontSize="24px">
                <FontAwesomeIcon icon={faSave} />
              </Box>&nbsp;
              Save
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default AddANewCar;