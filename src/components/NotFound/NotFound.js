import { useMediaQuery } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const NotFound = () => {
  const matches960px = useMediaQuery('(min-width:960px)');
  return (
    <Box
      sx={{
        textTransform: 'uppercase',
        color: 'red',
        bgcolor: '#f0f8ff',
        textAlign: 'center',
        height: `${matches960px ? 'calc(100vh - 106px)' : 'calc(100vh - 72px)'}`,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
      }}
    >
      <Box sx={{fontSize: 77}}>404</Box>
      <Box sx={{fontSize: 27}}>Page Not Found</Box>
    </Box>
  );
};

export default NotFound;