import React from 'react'
import {AppBar, Box, IconButton, Toolbar, Typography} from "@mui/material";
import FastfoodIcon from '@mui/icons-material/Fastfood';
import MenuIcon from '@mui/icons-material/Menu';
import {Link} from 'react-router-dom';
import "../../styles/HeaderStyles.css"

const Header = () => {
  return (
    <>
      <Box>
        <AppBar component={"nav"} sx={{bgcolor:"black"}}>
          <Toolbar>
            <IconButton color='inherit' aria-label='open drawer' edge='start' sx={{mr:2, display:{sm:"none"}}}>
              <MenuIcon />
            </IconButton>
          <Typography color={"goldenrod"} variant='h6' component="div" sx={{flexGrow: 1}}>
            <FastfoodIcon/>
            My Restaurant
            </Typography>
            <Box sx={{display: {xs:"none", sm:"block"}}}>
              <ul className='navigation-menu'>
                <li>
                  <Link to={"/"}>Home</Link>
                </li>
                <li>
                  <Link to={"/menu"}>Menu</Link>
                </li>
                <li>
                  <Link to={"/about"}>About</Link>
                </li>
                <li>
                  <Link to={"/contact"}>Contact</Link>
                </li>
              </ul>
            </Box>
          </Toolbar>
        </AppBar>
      </Box> 
    </>
  )
}

export default Header