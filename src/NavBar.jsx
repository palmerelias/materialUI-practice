import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import GolfCourseIcon from '@mui/icons-material/GolfCourse';
import LoginIcon from '@mui/icons-material/Login';
import PGAimg from './IMG/PGA.png'

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <img src={PGAimg} height="45px" />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            PGA Tour
          </Typography>
          <Button variant='outlined' color="inherit" endIcon={<LoginIcon />}>Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}