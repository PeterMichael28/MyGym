import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/Logo-1.png';

const Footer = () => (
  <Box mt="80px" bgcolor="#e2eee5">
    <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="20px">
      <img src={Logo} alt="logo" style={{ width: '170px', height: '41px' }} />
    </Stack>
    <Typography variant="h5" sx={{ fontSize: { lg: '18px', xs: '15px' }, color: '#0bb1d6' }} mt="41px" textAlign="center" pb="20px">Made by Michael</Typography>
  </Box>
);

export default Footer;