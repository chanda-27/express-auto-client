import { faAutoprefixer, faFacebook, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <Box sx={{bgcolor: 'black', color: 'white'}}>
      <Container maxWidth="lg">
        <Grid container sx={{alignItems: 'center'}}>
          <Grid item xs={12} md={4}>
            <Box sx={{p: 3, '& div': {lineHeight: 2.5}}}>
              <Typography component="h6" variant="h6" sx={{py: 2, textTransform: 'uppercase'}}>Services</Typography>
              <Box>My Cars</Box>
              <Box>Press</Box>
              <Box>Contact</Box>
              <Box>Career</Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={{p: 3, '& div': {lineHeight: 2.5}}}>
              <Typography component="h6" variant="h6" sx={{py: 2, textTransform: 'uppercase'}}>Experience</Typography>
              <Box>Models {'&'} Technology</Box>
              <Box>Mobility {'&'} Trends</Box>
              <Box>Inspiration {'&'} Lifestyle</Box>
              <Box>Investor Relations</Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={{py: 3}}>
              <Link to="/">
                <Box sx={{py: 1, fontSize: 24, bgcolor: 'black', color: 'white'}}>
                  <Box sx={{display: 'flex', alignItems: 'center'}}>
                    <Box sx={{fontSize: '37px'}}>
                      <FontAwesomeIcon icon={faAutoprefixer} />
                    </Box>
                    <Box>
                      <Box sx={{fontSize: '15px', letterSpacing: '2.4px'}}>EXPRESS</Box>
                      <Box sx={{fontSize: '20px', letterSpacing: '9px'}}>AUTO</Box>
                    </Box>
                  </Box>
                </Box>
              </Link>
              <Box fontSize="18px" lineHeight="1.5">The specified fuel consumption and emission data have been determined according to the measurement procedures prescribed by law. Since 1st September 2017, certain new vehicles are already being type-approved according to the Worldwide Harmonized Light Vehicles Test Procedure (WLTP), a more realistic test procedure for measuring fuel consumption and CO2 emissions.</Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Box sx={{width: '100%', height: '1px', bgcolor: 'white'}}></Box>
      <Container maxWidth="lg">
        <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 3}}>
          <Box>Chanda Biswas © {new Date().getFullYear()} All Rights Reserved</Box>
          <Box sx={{fontSize: '30px', '& svg': {paddingLeft: '10px'}, display: 'flex', alignItems: 'center'}}>
            <Typography component="span" variant="h5">Follow Us:&nbsp;</Typography>
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faTwitter} />
            <FontAwesomeIcon icon={faYoutube} />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;