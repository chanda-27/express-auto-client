import { faUserShield } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Grid, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';

const MakeAdmin = () => {
  const [email, setEmail] = useState('');
  const handleChange = (event) => {
    setEmail(event.target.value);
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const serverURL = 'https://intense-spire-47939.herokuapp.com/users/admin';
    fetch(serverURL, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({email})
    })
    .then(res => res.json())
    .then(data => {
      data.matchedCount || data.modifiedCount || data.upsertedCount ? alert('Made admin successfully!') :
      alert('Operation terminated!');
      // console.log(data);
      setEmail('');
    })
    .catch(err => alert('Operation terminated!'))
  }
  return (
    <Box p={3}>
      <Box>
        <form onSubmit={handleSubmit}>
          <Grid container sx={{alignItems: 'center'}}>
            <Grid item xs={12} md={6}>
              <Box p={1}>
                <TextField onChange={handleChange} id="email" name="email" label="Email" variant="standard" sx={{width: '100%'}} value={email} required />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{display: 'flex', justifyContent: 'center', py: 3}}>
                <Button variant="contained" type="submit" sx={{fontSize: '18px', py: 1, px: 5}}>
                  <FontAwesomeIcon icon={faUserShield} />&nbsp;
                  Make Admin
                </Button>
              </Box>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Box>
  );
};

export default MakeAdmin;