import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react'
import { fetchData, options } from '../Utils/FetchData';
import HorizontalScrollBar from './HorizontalScrollBar';

const SearchExercises = ({setSearchedLists, bodyParts, setBodyParts}) => {
    const [ search, setSearch ] = useState( '' )
   
    const [initialLists, setInitialLists ] = useState([])
    

    useEffect( () => {
        const fetchData2 = async () => {
            const exe = await fetchData( 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList', options );
            
            setInitialLists( [ 'all', ...exe ] )

        } 

        fetchData2()

        
     }, [])

    const handleSearch = async () => {

        if ( search ) {
            const exercises = await fetchData( 'https://exercisedb.p.rapidapi.com/exercises', options );
            
            const searchedExercises = exercises.filter( ( exercise ) => exercise.name.toLowerCase().includes( search )
                || exercise.equipment.toLowerCase().includes( search )
                || exercise.bodyPart.toLowerCase().includes( search )
                || exercise.target.toLowerCase().includes( search ) );
            
            setSearch('')
            setSearchedLists(searchedExercises)
        }
    }
  return (
      <Stack alignItems='center' mt='37px' justifyContent='center' p='20px'>
          <Typography fontWeight={700} sx={{fontSize: {lg: '38px', xs: '25px'}}} mb='40px' textAlign='center'>
              Awesome Exercises You <br /> Should Know
          </Typography>

          <Box position='relative' mb='70px'>
              <TextField
                  sx={ {
                      input: { fontWeight: '700'},
                    width: { lg: '1000px', xs: '350px', sm: '450px' },
                      backgroundColor: '#fff'
                  }}
                  label='Search Exercises'
                  value={search}
                  onChange={ ( e ) => setSearch(e.target.value.toLowerCase()) }
                  type='text'
              />
              <Button className='search-btn' sx={ {
                  bgcolor: '#0bb1d6',
                  color: '#fff',
                  width: { lg: '155px', xs: '80px' },
                  fontSize: { lg: '20px', xs: '14px' },
                  position: 'absolute',
                  height: '56px',
                  right: '0'

              } }
                  onClick={ handleSearch }
              >
                  Search
              </Button>
          </Box>

          <Box sx={{position: 'relative', width: '100%', p: '20px'}}>
              <HorizontalScrollBar
                  data={ initialLists }
                  bodyParts={ bodyParts }
                  setBodyParts={ setBodyParts }
                  rend='arr'
              />
          </Box>
    </Stack>
  )
}

export default SearchExercises