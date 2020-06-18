import React from 'react';
import { Grid } from '@material-ui/core';

import Header from './components/Header/Header';
import Content from './containers/Content/Content';

function App() {
  return (
    <Grid container direction="column" spacing={2}>

      <Grid item>
        <Header />
      </Grid>

      <Grid item container >
        <Grid item xs={false} md={1} />
        <Grid item sm={12} md={10} >
          <Content />
        </Grid>
        <Grid item xs={false} md={1} />
      </Grid>

    </Grid>
  );
}

export default App;
