import { Stack } from '@mui/material'
import React from 'react';
import { categories } from '../utils/constants';

const SideBar = ({selectedCategory, setSelectedCategory}) => {

  return (
    <Stack spacing={1} direction='row' sx={{ overflow: 'auto', height: { xs: 'auto', md: '95%'},flexDirection: { md: "column" }}}>
        {categories.map(category =>(
            <button 
              className="category-btn" 
              key={category.name}
              onClick={() => setSelectedCategory(category.name)}
              style={{  
                margin: '10px 0',
                justifyContent: 'start',
                backgroundColor: category.name === selectedCategory && '#fc1503', color: 'white', borderRadius:'20px' 
              }}>
                <span style={{color: category.name === selectedCategory? 'white' : '#fc1503', marginRight: '10px'}}>
                  {category.icon}
                </span>
                <span style={{opacity: category.name === selectedCategory? 1 : 0.8}}>
                  {category.name}
                </span>
            </button>
        ))}
    </Stack>
  )
}

export default SideBar