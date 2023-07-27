import React from 'react'
import { Box, Typography } from '@mui/material'

const Footer = () => {
  return (
    <>
    <Box sx={{textAlign:'center', bgcolor:'#1A1A19', color:'white', p:3}}>
        <Typography variant='h5' sx={{"@media(max-width:600)":{fontSize:'1rem',},}}>
            All Rights Reserved &copy; AnmolB
        </Typography>
    </Box>
    </>
  )
}

export default Footer