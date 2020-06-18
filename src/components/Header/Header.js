import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const useStyles = makeStyles(() => ({
  typographyStyle: {
    flex: 1
  }
}));

const Header = () => {
  const classes = useStyles();

  return(
    <AppBar position="static">
      <Toolbar>
        <Grid item md={1} />
        <Typography className={classes.typographyStyle}>Catan Cahoots!</Typography>
        <IconButton>
          <AccountCircleIcon />
        </IconButton>
        <Grid item md={1} />
      </Toolbar>
    </AppBar>
  );
}

export default Header;