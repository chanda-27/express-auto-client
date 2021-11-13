import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const OurLocation = () => {
  const position = [26.675200, 85.166800]
  return (
    <Box sx={{bgcolor: '#f2f2f2', '& .leaflet-container': {height: '300px', width: '100%'}}}>
      <Box sx={{p: 3, textAlign: 'center', fontSize: '37px'}}>About us</Box>
      <Container maxWidth="lg">
        <Typography pb={5}>
          <Typography fontSize="20px" pb={2} component="p">
            No matter where you are in the world – our Customer Service will help you with any questions or requests relating to Audi. Simply select the relevant country or sales region from the menu below. Our employees will be happy to assist you.
          </Typography>
          <Typography fontSize="20px" pb={2} component="p">
            The AUDI AG stands for sporty vehicles, high build quality and progressive design – for “Vorsprung durch Technik.” The Audi Group is among the world’s leading producers of premium cars.
          </Typography>
          <Typography fontSize="20px" pb={2} component="p">
            To play an instrumental role in shaping the transformation as we head into a new age of mobility the Company is implementing its strategy step by step.
          </Typography>
        </Typography>
      </Container>
      <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </Box>
  );
};

export default OurLocation;