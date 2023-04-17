import { Stack } from '@mui/material'
import React, { useEffect } from 'react';
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
                backgroundColor: category.name === selectedCategory && '#28abfa', color: 'white', borderRadius:'20px' 
              }}>
                <span style={{color: category.name === selectedCategory? 'white' : '#28abfa', marginRight: '10px'}}>
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