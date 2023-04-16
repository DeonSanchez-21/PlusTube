import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { fetchFromAPI } from '../utils/fetchFromApi';
import { Box } from '@mui/material';
import {ChannelCard, Videos} from './';

const ChannelDetails = () => {
  const [ channelDetail, setChannelDetail ] = useState(null)
  const [ channelVideos, setChannelVideos ] = useState([])

  const { id } = useParams();

  useEffect(()=>{
    fetchFromAPI(`channels?part=snippet&id=${id}`)
    .then((data) => setChannelDetail(data?.items[0]))
  },[id])
  useEffect(()=>{
    fetchFromAPI(`search?part=snippet&channelId=${id}&order=date`)
    .then((data) => setChannelVideos(data?.items))
  },[id])
  const banner = channelDetail?.brandingSettings?.image?.bannerExternalUrl;
  return (
    <Box minHeight='95vh' pb={2}>
      <Box className='center' flexDirection='column' mb={2}>
        { <div style={{height: '300px', width: '100%', background: 'radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(70,196,252,1) 100%)'}}></div> ||<img src={banner} style={{ objectFit: 'cover', height: '300px', width: '100%'}}></img> }
          
          <ChannelCard channelDetails={channelDetail} marginTop='-100px'/>
      </Box>

      <Videos videos={channelVideos}/>   
    </Box>
  )
}

export default ChannelDetails