import React from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const Header = () => {
  return(
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h1">Catan Cahoots!</Typography>
        <IconButton>
          <AccountCircleIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default Header;