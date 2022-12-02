import React from 'react'
import { Stack, Typography } from '@mui/material'
import Icon from '../assets/icons/gym.png'

const BodyParts = ( { item, setBodyParts, bodyParts } ) => {
  return (
      <Stack
          type='button'
          alignItems='center'
          justifyContent='center'
          className='bodyPart-card'
          sx={ {
            borderTop: bodyParts === item ? '4px solid #0bb1d6' : '',
            backgroundColor: '#fff',
            borderBottomLeftRadius: '20px',
            width: '200px',
            height: '200px',
            gap: '47px',
            cursor: 'pointer'
      } }
      onClick={() => {
        setBodyParts(item);
        window.scrollTo({ top: 1400, behavior: 'smooth' });
      }}
      >
      <img src={ Icon } alt="dumbbell" style={ { width: '40px', height: '40px' } } />
      <Typography fontSize="20px" fontWeight="bold" fontFamily="Alegreya" color="#3A1212" textTransform="capitalize"> {item}</Typography>
    </Stack>
  )
}

export default BodyParts