import React from 'react'
import Layout from '../components/Layout/Layout'
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import EmailIcon from '@mui/icons-material/Email';


const Contact = () => {
  return (
    <Layout>
        <Box sx={{my:10, ml:10, "& h4":{fontWeight:"bold", mb:2}}}>
          <Typography variant='h4'>Contact My Restaurant</Typography>
          <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
        </Box>
        <Box>
          <TableContainer component={Paper}>
            <Table aria-label='contact table'>
              <TableHead>
                <TableRow>
                  <TableCell>Contact Details</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <SupportAgentIcon sx={{color:'red', pt:1}} /> 1234567890(tollfree)
                  </TableCell>
                </TableRow>
                <TableRow>
                <TableCell>
                    <EmailIcon sx={{color:'skyblue', pt:1}} /> help@myrest.com
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