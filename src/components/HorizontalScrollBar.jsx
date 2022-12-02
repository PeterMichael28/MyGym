import { Box, Stack, Typography } from '@mui/material';
import React, { useState, useRef } from 'react'
import BodyParts from './BodyParts';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu'
import RightArrowIcon from '../assets/icons/right-arrow.png';
import LeftArrowIcon from '../assets/icons/left-arrow.png';
import ExerciseCard from './ExerciseCard';



const HorizontalScrollbar = ( { data, setBodyParts, bodyParts, rend } ) => {


  const rowRef = useRef(null)
  const [isMoved, setIsMoved] = useState(false)

  const handleClick = (direction) => {
    setIsMoved(true)
    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current

      const scrollTo =
        direction === 'left'
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth
      rowRef.current.scrollTo( { left: scrollTo, behavior: 'smooth' } )
    }
    // console.log(direction)
  }

  
  return (
    <Stack direction='row'>
      <Typography  onClick={() => handleClick("left")} className="right-arrow">
        <img src={ LeftArrowIcon } alt="right-arrow" />
      </Typography>

      <div className='slide-bar' ref={ rowRef }>
      {data.map( ( item ) => (
        <Box
          key={ item.id || item }
          itemID={ item.id}
          title={ item.id }
          m="0 40px"
        >
          { rend === 'arr' ? <BodyParts item={ item } setBodyParts={ setBodyParts } bodyParts={ bodyParts } /> : <ExerciseCard exercise={ item } /> }
          {/* <BodyParts item={ item } setBodyParts={ setBodyParts } bodyParts={ bodyParts } /> */}
        </Box>
      ) ) }
      </div>
      <Typography onClick={() => handleClick("right")} className="left-arrow">
        <img src={ RightArrowIcon } alt="right-arrow" />
      </Typography>
    </Stack>
  );
};

export default HorizontalScrollbar;