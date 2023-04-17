import {  Stack } from '@mui/material'
import React from 'react'
import { SearchBar } from './index'
import { Link } from 'react-router-dom'
import LiveTvIcon from '@mui/icons-material/LiveTv';

const Navbar = () => {

  return (
    <Stack
    direction='row'
    p={2}
    alignItems='center'
    sx={{ backgroundColor: "#000", position: 'sticky', top: 0,
    justifyContent: 'space-between', zIndex:'999'
     }} >
      <Link to="/" sx={{display: 'flex',
        alignItems:"center"}}>
        <LiveTvIcon sx={{ color: '#28abfa', fontSize: { xs: '40px', sm: '50px' }, mx:{ xs:1, sm: 2 }}}/>
      </Link>
      <SearchBar/>
    </Stack>
  )
}

export default Navbar