import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

// import Swiper core and required modules
import SwiperCore, { Autoplay, Pagination } from "swiper/core";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import homeMainBannerPicture1 from '../../../images/header-bg-1.jpg';
import { Link } from 'react-router-dom';

// install Swiper modules
SwiperCore.use([Autoplay, Pagination]);

const Banner = () => {
  return (
    <Box sx={{color: 'white', background: `url(${homeMainBannerPicture1}) no-repeat center`, backgroundSize: 'cover', py: 4}}>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          "clickable": true,
        }}
        autoplay={{
          "delay": 6000,
          "disableOnInteraction": false
        }}
        navigation={true}
        className="mySwiper"
      >
        {/* Slider Number 01 */}
        <SwiperSlide>
          <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: 'rgba(0, 0, 0, 0.4)', clipPath: 'polygon(15% 0%, 100% 0%, 85% 100%, 0% 100%)'}}>
            <Box>
              <Box sx={{p: 6, textAlign: 'center'}}>
                <Box sx={{textTransform: 'uppercase'}}>Magical London Bridge with Neil Stay</Box>
                <Typography component="h1" fontSize="47px" fontWeight="700">The Audi Premium Cars</Typography>
                <Typography component="span" sx={{textTransform: 'uppercase', fontSize: '17', fontWeight: 300}}>The AUDI AG stands for sporty vehicles, high build quality and progressive design – for “Vorsprung durch Technik.”</Typography>
                <Box py={3}>
                  <Link to='/dashboard/myOrders'>
                    <Button variant="contained" color="secondary" size="large">Your Orders</Button>
                  </Link>
                </Box>
              </Box>
            </Box>
          </Box>
        </SwiperSlide>
        {/* Slider Number 01 */}
        {/* Slider Number 02 */}
        <SwiperSlide>
          <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: 'rgba(0, 0, 0, 0.4)', clipPath: 'polygon(15% 0%, 100% 0%, 85% 100%, 0% 100%)'}}>
            <Box>
              <Box sx={{p: 6, textAlign: 'center'}}>
                <Box sx={{textTransform: 'uppercase'}}>Port Blair, Havelock in  5 Nights with Flights</Box>
                <Typography component="h1" fontSize="47px" fontWeight="700">Audi e-tron Sportback</Typography>
                <Typography component="span" sx={{textTransform: 'uppercase', fontSize: '17', fontWeight: 300}}>The AUDI AG stands for sporty vehicles, high build quality and progressive design – for “Vorsprung durch Technik.”</Typography>
                <Box py={3}>
                  <Link to='/dashboard/myOrders'>
                    <Button variant="contained" color="secondary" size="large">Your Orders</Button>
                  </Link>
                </Box>
              </Box>
            </Box>
          </Box>
        </SwiperSlide>
        {/* Slider Number 02 */}
        {/* Slider Number 03 */}
        <SwiperSlide>
          <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', bgcolor: 'rgba(0, 0, 0, 0.4)', clipPath: 'polygon(15% 0%, 100% 0%, 85% 100%, 0% 100%)'}}>
            <Box>
              <Box sx={{p: 6, textAlign: 'center'}}>
                <Box sx={{textTransform: 'uppercase'}}>A Trip to Villa De Cosa</Box>
                <Typography component="h1" fontSize="47px" fontWeight="700">Find your next adventure with Audi</Typography>
                <Typography component="span" sx={{textTransform: 'uppercase', fontSize: '17', fontWeight: 300}}>The AUDI AG stands for sporty vehicles, high build quality and progressive design – for “Vorsprung durch Technik.”</Typography>
                <Box py={3}>
                  <Link to='/dashboard/myOrders'>
                    <Button variant="contained" color="secondary" size="large">Your Orders</Button>
                  </Link>
                </Box>
              </Box>
            </Box>
          </Box>
        </SwiperSlide>
        {/* Slider Number 03 */}
      </Swiper>
    </Box>
  );
};

export default Banner;