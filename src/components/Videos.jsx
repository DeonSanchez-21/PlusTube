import { Box, Stack } from '@mui/material';
import React, { useEffect } from 'react';
import { ChannelCard, VideoCard } from './'

const Videos = ({videos, direction}) => {

  return (
    <Stack alignItems='center' justifyContent='center' flexWrap='wrap' direction={direction || "row"} gap={2}>
      {videos?.map((item, idx) => (
        <Box key={idx}>
          {item.id.videoId && <VideoCard video={item}/>}
          {item.id.channelId && <ChannelCard channelDetails={item}/>}
        </Box>
      ))}
    </Stack>
  )
}

export default Videos