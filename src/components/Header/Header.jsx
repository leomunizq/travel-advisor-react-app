import React from 'react'
import { Autocomplete } from '@react-google-maps/api'
import { AppBar, Toolbar, Typography, InputBase, Box } from '@mui/material'

const Header = () => {
  return (
    <Appbar position="static">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h5" className={classes.title}>
          Travel Advisor
        </Typography>
        <Box display="flex">
          <Typography variant="h6" className={classes.title}>
            Explore new places
          </Typography>
        </Box>
      </Toolbar>
    </Appbar>
  )
}

export default Header
