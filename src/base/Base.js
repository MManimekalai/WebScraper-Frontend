import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import CompareIcon from '@mui/icons-material/Compare';

const Base = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" color='success'>
        <Toolbar >
          <IconButton
            size="large"
            edge="start"
            color="warning"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <CompareIcon/>
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Web Scraper
          </Typography>
          <Button color="inherit">Welcome</Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Base