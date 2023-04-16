import { IconButton, Paper } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate(`/search/${searchTerm}`)

    setSearchTerm('')
  }
 
  return (
    <Paper 
    component="form"
    onSubmit={handleSubmit}
    sx={{
        border: '1px solid #e3e3e3',
        boxShadow: 'none',
        borderRadius: 20,
        pl: 2,
        mr: { sm: 5}
    }}
    >
        <input 
        className='search-bar'
        onChange={(e)=>setSearchTerm(e.target.value)}
        placeholder= "Search"
        value={searchTerm}/>
        <IconButton sx={{p:'10px',color:'red'}} type='submit'>
            <SearchIcon/>
        </IconButton>
    </Paper>
  )
}

export default SearchBar