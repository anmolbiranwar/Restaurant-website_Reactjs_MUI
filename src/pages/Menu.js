import React from 'react';
import Layout from '../components/Layout/Layout';
import {MenuList} from '../data/data'
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';

const Menu = () => {
  return (
    <Layout>
        <Box>
          {
            MenuList.map(menu =>(
              <Card>
                <CardActionArea>
                  <CardMedia sx={{minHeight:'400px'}} component={'img'} src={menu.image} alt={menu.name} />
                  <CardContent>
                    <Typography variant='h5' gutterBottom component={'div'}>
                      {menu.name}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            ))
          }
        </Box>
    </Layout>
  )
}

export default Menu