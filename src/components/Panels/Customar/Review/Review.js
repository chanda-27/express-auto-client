import { Button, FormControl, Grid, Rating, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React, { useContext, useState } from 'react';
import { UserContext } from '../../../../App';

const Review = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [reviewData, setReviewData] = useState({
    buyerName: loggedInUser.displayName,
    buyerEmail: loggedInUser.email,
    review: '',
    rating: 4,
  });
  const handleChange = (event) => {
    event.target.name === 'rating' ?
    setReviewData({ ...reviewData, rating: parseInt(event.target.value) }) :
    setReviewData({ ...reviewData, review: event.target.value });
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const serverURL = 'https://intense-spire-47939.herokuapp.com/reviews';
    fetch(serverURL, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(reviewData)
    })
    .then(res => res.json())
    .then(data => {
      alert("Review added successfully!");
      console.log(data);
      setReviewData({ ...reviewData, review: '', rating: 4 });
    })
  }
  return (
    <Box>
      <Box>
        <Box sx={{p: 5}}>
          <form onSubmit={handleSubmit} className="formStyle">
            <Grid container justifyContent="center">
              <Grid item xs={12} md={6}>
                <Box p={1}>
                  <FormControl sx={{width: '100%', py: 1}}>
                    <TextField id="buyerName" label="Full Name" variant="standard" name="buyerName" value={reviewData.buyerName} onChange={handleChange} required disabled />
                  </FormControl>
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box p={1}>
                  <FormControl sx={{width: '100%', py: 1}}>
                    <TextField id="buyerEmail" label="Email" variant="standard" name="buyerEmail" value={reviewData.buyerEmail} onChange={handleChange} required disabled />
                  </FormControl>
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box p={1}>
                  <FormControl sx={{width: '100%', py: 1}}>
                    <TextField id="review" label="Review" variant="standard" name="review" value={reviewData.review} onChange={handleChange} multiline rows={4} required />
                  </FormControl>
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box p={1}>
                  <FormControl sx={{width: '100%', py: 1}}>
                    <Box>Rating</Box>
                    <Rating
                      id="rating"
                      name="rating"
                      value={reviewData.rating}
                      onChange={handleChange}
                    />
                  </FormControl>
                </Box>
              </Grid>
              <Box py={3}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  sx={{ backgroundColor: '#11b8ca', width: '180px' }}
                >
                  Submit
                </Button>
              </Box>
            </Grid>
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export default Review;