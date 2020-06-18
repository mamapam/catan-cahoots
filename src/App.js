import React from 'react';
import { Grid } from '@material-ui/core';

import Header from './components/Header/Header';

function App() {
  return (
    <Grid container direction="column">

      <Grid item>
        <Header />
      </Grid>

      <Grid item container>
        <Grid item xs={false} md={2} />
        <Grid item sm={12} md={8} >
          content will go here
        </Grid>
        <Grid item xs={false} md={2} />
      </Grid>

    </Grid>
  );
}

export default App;
