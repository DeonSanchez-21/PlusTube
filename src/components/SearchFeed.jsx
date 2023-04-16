import React, { useEffect, useState } from 'react'
import { Box, Stack, Typography } from '@mui/material'
import { Videos } from './'
import { fetchFromAPI } from '../utils/fetchFromApi';
import { useParams } from 'react-router-dom';

const SearchFeed = () => {

  
  const [videos, setVideos] = useState([]);

  const { searchTerm } = useParams();
   
  useEffect(() =>{

    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
    .then((data) => setVideos(data.items))
  }, [searchTerm])
  return (
    <Stack sx={{ flexDirection: {xs: 'column', md: 'row'} }} >
      <Box p={2} sx={{ height: '90vh', overflowY: 'auto'}}>
        <Typography variant='h4' mb={2} sx={{ fontWeight: 'bold', color: 'white'}} >
          Search Results for 
          <span style={{color: 'red'}}> {searchTerm} </span>Videos
        </Typography>
        <Videos videos={videos}/>
      </Box>
    </Stack>
  )
}

export default SearchFeed

