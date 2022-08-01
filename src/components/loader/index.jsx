import React from 'react';
import { Stack } from '@mui/material';
import { Circles, InfinitySpin } from 'react-loader-spinner';

const Loader = () => (
  <Stack direction="row" justifyContent="center" alignItems="center" width="100%">
    <Circles
    height="100"
    width="100"
    color='grey'
    ariaLabel='loading'
  />
  </Stack>
);

export default Loader;
