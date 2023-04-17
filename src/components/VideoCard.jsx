import React from 'react'
import { Link } from "react-router-dom"; 
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelTitle } from "../utils/constants";

const VideoCard = ({ video }) => (
  <Card sx={{ width: { xs: '95%', sm: '358px', md: "320px", }, boxShadow: "none", borderRadius: 0, margin:'auto' }}>
    <Link to={`/video/${video?.id?.videoId}` }>
      <CardMedia image={video?.snippet?.thumbnails?.high?.url || demoThumbnailUrl} alt={video?.snippet?.title} 
        sx={{ width: { xs: '100%', sm: '358px'}, height: 180 }} 
      />
    </Link>
    <CardContent sx={{ backgroundColor: "#1E1E1E", height: '106px' }}>
      <Link to={`/video/${video?.id?.videoId}`  } >
        <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
          {video?.snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
        </Typography>
      </Link>
      <Link to={`/channel/${video?.snippet?.channelId}` } >
        <Typography variant="subtitle2" color="gray">
          {video?.snippet?.channelTitle || demoChannelTitle}
          <CheckCircleIcon sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
        </Typography>
      </Link>
    </CardContent>
  </Card>
);

export default VideoCard