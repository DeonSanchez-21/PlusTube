import { Box, CardContent, CardMedia, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { demoChannelUrl } from '../utils/constants';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const ChannelCard = ({ channelDetails, marginTop }) => {

  return (
    <Box sx={{width: { xs: '100%', sm: '358px', md: "320px"}, mt:{marginTop}}}>
      <Link to={channelDetails?.snippet?.channelId ? `/channel/${channelDetails?.snippet?.channelId}` : demoChannelUrl}>
        <CardContent  sx={{ display: 'flex', aligntItems: 'center', justifyContent: 'center', flexDirection:' column'}}>
          <CardMedia component='img' sx={{width: 200, height: 200, m:'10px auto', borderRadius: '50%'}} image={channelDetails?.snippet?.thumbnails?.high?.url} alt={channelDetails?.snippet?.title}/>
          <Typography variant='h6' textAlign='center' color='white'> 
            {channelDetails?.snippet?.title}
            <CheckCircleIcon sx={{ fontSize: '16px', color:'gray', ml:1}}/> 
          </Typography>{channelDetails?.statistics?.subscriberCount && (
          <Typography textAlign='center' color='gray'>{parseInt(channelDetails?.statistics?.subscriberCount).toLocaleString()} Subscribers</Typography>
        )}
        </CardContent>
      </Link>
    </Box>
  )
}

export default ChannelCard