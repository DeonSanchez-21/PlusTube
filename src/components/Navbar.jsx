import {  Stack } from '@mui/material'
import React from 'react'
import { logo } from '../utils/constants'
import { SearchBar } from './index'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <Stack
    direction='row'
    p={2}
    alignItems='center'
    sx={{ backgroundColor: "#000", position: 'sticky', top: 0,
    justifyContent: 'space-between'
     }} >
      <Link to="/" sx={{display: 'flex',
        alignItems:"center"}}>
        <img src={logo} alt="logo" height={45}/>
      </Link>
      <SearchBar/>
    </Stack>
  )
}

export default Navbar