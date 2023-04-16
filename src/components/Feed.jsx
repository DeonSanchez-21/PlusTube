import React, { useEffect, useState } from 'react'
import { Box, Stack, Typography } from '@mui/material'
import { SideBar, Videos } from './'
import { fetchFromAPI } from '../utils/fetchFromApi';

const Feed = () => {

  const [selectedCategory, setSelectedCategory] = useState('New');
  const [videos, setVideos] = useState([]);
  
  useEffect(() =>{

    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
    .then((data) => setVideos(data.items))
  }, [selectedCategory])
  return (
    <Stack sx={{ flexDirection: {xs: 'column', md: 'row'} }} >
      <Box sx={{ 
        height: { xs: 'auto', md: '92vh'}, 
        px: { xs: 0, md: 2 },
        borderRight: '1px solid #3d3d3d'
      }}>
        <SideBar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
        <Typography className='copyright' variant='body2' sx={{
          mt: 1.5,
          color: '#fff'}} >
          All Rights Reserved
        </Typography>
      </Box>
      <Box p={2} sx={{ height: '90vh', overflowY: 'auto'}}>
        <Typography variant='h4' mb={2} sx={{ fontWeight: 'bold', color: 'white'}} >
          {selectedCategory} <span style={{color: 'red'}}>Videos</span>
        </Typography>
        <Videos videos={videos}/>
      </Box>
    </Stack>
  )
}

export default Feed