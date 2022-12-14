import { Stack } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';

import Logo from '../assets/images/Logo.png'


const Navbar = () => {
  return (
    <Stack direction='row' justifyContent='space-around' sx={{gap: {sm: '112px', xs: '40px'}, mt: { sm: '32px', xs: '20px'}, justifyContent: 'none'}} px='20px'>
          <Link to='/MyGym'>
              <img src={ Logo } alt="logo" style={ {width: '40px', height:'38px', margin: '0 20px'} } />
          </Link>

          <Stack
                direction='row'
                gap='40px'
                fontSize='22px'
                alignItems='flex-end'
            >
                
              <Link to='/MyGym' style={{textDecoration: 'none', color: '#3A1212', borderBottom: '3px solid #0bb1d6'}}>
                  Home
              </Link>
              <a href="#exercises" style={{textDecoration: 'none', color: '#3A1212'}}>Exercises</a>
          </Stack>
    </Stack>
  )
}

export default Navbar