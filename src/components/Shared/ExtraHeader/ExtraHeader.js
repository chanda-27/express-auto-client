import { faEnvelope, faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';

const ExtraHeader = () => {
  return (
    <Box sx={{color: 'white', bgcolor: 'black', fontSize: 15, textAlign: 'center'}}>
      <Box>
        <Box sx={{padding: '5px 8px', display: "flex", alignItems: "center", justifyContent: "space-between"}}>
          <Box sx={{"& a": { color: "white"}, display: 'flex', alignItems: 'center'}}>
            <Box sx={{pr: 3, cursor: 'pointer'}}>Press {`&`} MediaCenter</Box>
            <Link to="/contact"><Box>Contact</Box></Link>
          </Box>
          <Box sx={{display: 'flex', alignItems: 'center', cursor: 'pointer'}}>
            <Box color="gray">DE</Box>&nbsp;| EN
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ExtraHeader;