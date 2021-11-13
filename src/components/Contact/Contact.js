import { Button, Container, FormControl, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useContext } from 'react';
import { UserContext } from '../../App';
import OurLocation from '../Shared/OurLocation/OurLocation';

const Contact = () => {
  // Getting data from parent component
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  return (
    <Box sx={{bgcolor: '#f0f8ff', py: 5}}>
      <Container maxWidth="lg">
        <Box sx={{border: '1px solid #11b8ca', borderRadius: '10px', p: 3}}>
          <Typography component="h4" variant="h4" textAlign="center">Ask Anything!</Typography>
          <FormControl sx={{width: '100%', py: 1}}>
            <TextField id="name" label="Full Name" variant="standard" value={loggedInUser.displayName} name="name" required disabled />
          </FormControl>
          <FormControl sx={{width: '100%', py: 1}}>
            <TextField id="email" label="Email" variant="standard" name="email" value={loggedInUser.email} type="email" required disabled />
          </FormControl>
          <FormControl sx={{width: '100%', py: 1}}>
            <TextField id="subject" label="Subject" variant="standard" name="subject" required />
          </FormControl>
          <FormControl sx={{width: '100%', pt: 1, pb: 2}}>
            <TextField id="subject" label="Message" variant="standard" name="subject" multiline rows={4} />
          </FormControl>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ backgroundColor: '#11b8ca' }}
          >
            Login
          </Button>
        </Box>
        <Box sx={{py: 3}}>
          <OurLocation></OurLocation>
        </Box>
      </Container>      
    </Box>
  );
};

export default Contact;