import { Button, Grid, Paper, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';

const ItemCard = ({ data }) => {
  const { _id, carName, carDescription, carImage, carPrice } = data;
  const homeItemsStyles = makeStyles({
    cardImageStyles: {
      background: `url(${carImage}) no-repeat center`,
      backgroundSize: 'cover',
      height: 184,
      transition: 'all 2s',
      width: '100%',
    },
    paperCard: {
      height: '100%',
      transition: 'all 2s',
      '&:hover > div > button > div': {
        transform: 'scale(1.2)',
      },
    }
  });

  const { cardImageStyles, paperCard } = homeItemsStyles();
  return (
    <Grid item xs={12} sm={6} lg={4} key={_id} sx={{width: '100%'}}>
      <Box sx={{display: 'flex', alignItems: 'stretch', height: '100%', width: '100%'}}>
        <Box sx={{p: 1, width: '100%'}}>
          <Paper elevation={24} className={paperCard}>
            <Box>
              <Button sx={{p: 0, width: '100%', overflow: 'hidden', borderRadius: '4px 4px 0 0'}}>
                <Box className={cardImageStyles}></Box>
              </Button>
              <Box sx={{px: 1, py: 2, height: '200px'}}>
                <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%'}}>
                  <Box sx={{maxHeight: '177px', overflow: 'hidden'}}>
                    <Box sx={{textTransform: 'uppercase', fontSize: '14px', opacity: '0.6'}}>Production Models</Box>
                    <Typography variant="h6">
                      {carName}
                    </Typography>
                    <Box>{carDescription}</Box>
                  </Box>
                  <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                    <Box sx={{fontSize: '20px'}}>
                      ${carPrice}
                    </Box>
                    <Link to={`/car/${_id}`}>
                      <Button size="small" color="primary">
                        Order Now
                      </Button>
                    </Link>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Paper>
        </Box>
      </Box>
    </Grid>
  );
};

export default ItemCard;