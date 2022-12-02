import React from 'react'

import { Box, Stack, Typography, Button } from '@mui/material'
import Banner from '../assets/images/banner.png'

const HeroBanner = () => {
  return (
      <Box sx={ { mt: { lg: '150px', xs: '70px' }, ml: { md: '70px', sm: '50px' } } } position='relative' p='20px'>
          
          <Stack sx={{mt: {lg: '-60px'}}}>
          <Typography color='#0bb1d6' fontWeight='600' fontSize='26px'>
              Fitness club
          </Typography>
          <Typography fontWeight='700' sx={{ fontSize: {lg: '44px', xs: '35px', sm:'40px'}}}>
              Sweat, Smile <br /> and Repeat
          </Typography>
          <Typography fontSize='20px' lineHeight='35px' mb={2}>
              Check out the Most effective exercises
          </Typography>
          </Stack>
          <Button variant='contained' color='primary' href='#exercises' sx={{backgroundColor: '#0bb1d6'}}>Explore Exercises</Button>
              

          <Typography
              fontWeight='600'
              color='#0bb1d6'
              sx={ {
                  opacity: 0.1,
                  display: { lg: 'block', xs: 'none' },
                  mt: '-20px',
                  letterSpacing: '7px',
                  ml: '50px'
              } }
                fontSize='150px'>

              
              Exercise
          </Typography>
          <img src={Banner} alt="Banner" className='hero-banner-img' />
    </Box>
  )
}

export default HeroBanner