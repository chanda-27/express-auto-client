import { Container, Grid, Paper, Rating, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    const serverURL = 'https://intense-spire-47939.herokuapp.com/reviews';
    fetch(serverURL)
      .then(res => res.json())
      .then(data => setReviews(data));
  }, []);
  console.log(reviews);
  return (
    <Box>
      <Container maxWidth="lg">
        <Box px={3} pt={8}>
          <Box px={2}>
            <Typography component="h2" variant="h4">Client Reviews {'&'} Ratings</Typography>
          </Box>
        </Box>
        <Box p={3}>
          <Grid container>
            {
              reviews &&
              reviews.map(review => {
                return (
                  <Grid item xs={12} sm={6} lg={4}>
                    <Box p={2}>
                      <Paper elevation={3}>
                        <Box p={1} textAlign="center">
                          <Typography component="h3" variant="h4">{review.buyerName}</Typography>
                          <Typography component="p" variant="p" py={2}>{review.review}</Typography>
                          <Rating readOnly value={review.rating} />
                        </Box>
                      </Paper>
                    </Box>
                  </Grid>
                );
              })
            }
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Reviews;