import React from 'react';
import { Box, Stack } from '@mui/material';
import Logo from '../assets/images/Logo-1.png';

const Footer = () => (
  <Box  bgcolor="#FFF5EE" >
    <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" py="20px">
      <img src={Logo} alt="logo" style={{ width: '200px', height: '41px' }} />
    </Stack>
  </Box>
);

export default Footer;
