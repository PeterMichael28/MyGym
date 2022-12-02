import React from 'react';
import { Typography, Box, Stack } from '@mui/material';

import HorizontalScrollbar from './HorizontalScrollbar';
import Loader from './Loader';

const SimilarExercises = ( { targetMuscleExercises, equipmentExercises } ) => {

   return ( 
    <Box sx={ { mt: { lg: '20px', xs: '0px' } } }>
        <Typography sx={ { fontSize: { lg: '44px', xs: '25px' }, ml: '20px' } } fontWeight={ 700 } color="#000" mb="33px">
            Similar <span style={ { color: '#FF2625', textTransform: 'capitalize' } }>Target Muscle</span> exercises
        </Typography>
        <Box sx={{ p: 2, position: 'relative' }}>
      {targetMuscleExercises.length !== 0 ? <HorizontalScrollbar data={targetMuscleExercises} rend='' /> : <Loader />}
    </Box>
        <Typography sx={ { fontSize: { lg: '44px', xs: '25px' }, ml: '20px', mt: { lg: '30px', xs: '60px' } } } fontWeight={ 700 } color="#000" mb="33px">
            Similar <span style={ { color: '#FF2625', textTransform: 'capitalize' } }>Equipment</span> exercises
        </Typography>
        <Box sx={{ p: 2, position: 'relative' }}>
      {equipmentExercises.length !== 0 ? <HorizontalScrollbar data={equipmentExercises} rend='' /> : <Loader />}
    </Box>
    </Box>
   )
};

export default SimilarExercises;