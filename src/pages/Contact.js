import React from 'react'
import Layout from '../components/Layout/Layout'
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';

const Contact = () => {
  return (
    <Layout>
        <Box sx={{my:10, ml:10, "& h4":{fontWeight:"bold", mb:2}}}>
          <Typography variant='h4'>Contact My Restaurant</Typography>
          <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
        </Box>
        <Box sx={{m:3, width:'600px', ml:10, '@media(max-width:600px)':{width:'300px'},}}>
          <TableContainer component={Paper}>
            <Table aria-label='contact table'>
              <TableHead>
                <TableRow>
                  <TableCell sx={{bgcolor:'black', color:'white'}} align='center'>Contact Details</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <SupportAgentIcon sx={{color:'red', pt:1}} /> 1800 00 7890(tollfree)
                  </TableCell>
                </TableRow>
                <TableRow>
                <TableCell>
                    <EmailIcon sx={{color:'blue', pt:1}} /> help@myrest.com
                </TableCell>
                </TableRow>
                <TableRow>
                <TableCell>
                    <CallIcon sx={{color:'green', pt:1}} /> 1234567890
                </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
    </Layout>
  )
}

export default Contact