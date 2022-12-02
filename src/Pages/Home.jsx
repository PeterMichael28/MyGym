import { useState } from 'react'
import { Box } from '@mui/material'
import HeroBanner from '../components/HeroBanner';
import SearchExercises from '../components/SearchExercises';
import Exercises from '../components/Exercises';

const Home = () => {
  const [ searchedLists, setSearchedLists ] = useState( [] )
  const [ bodyParts, setBodyParts ] = useState( 'all' )

  return (
    <Box>
      <HeroBanner />
      <SearchExercises
        setSearchedLists={ setSearchedLists }
        bodyParts={ bodyParts }
        setBodyParts={ setBodyParts } />
      <Exercises
        setSearchedLists={ setSearchedLists }
        bodyParts={ bodyParts }
        searchedLists={ searchedLists }
        />
    </Box>
  )
}

export default Home