import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import axios from '../../axios-players';

import PlayersTable from '../../components/PlayersTable/PlayersTable';

class Content extends Component {
  state= {
    players: []
  }

  componentDidMount() {
    axios.get('/players.json').then(response => {
      const fetchedPlayers = [];
      for(let key in response.data) {
        fetchedPlayers.push({
          ...response.data[key],
          id: key
        });
      }
      this.setState({players: fetchedPlayers});
      console.log(this.state.players);
    }).catch(err => {
      console.log(`An error occurred: ${err}`);
    });
  }

  render() {
    return(
      <main>
        <Grid container direction="row">
          <Grid item sm={12} md={6}>
            <PlayersTable playerData={this.state.players} />
          </Grid>
          <Grid item sm={12} md={6}>
            this is the stacked bar graph 
            this is the stacked bar graph 
            this is the stacked bar graph 
            this is the stacked bar graph 
            this is the stacked bar graph 
            this is the stacked bar graph 
          </Grid>
        </Grid>
        <Grid container direction="row">
          <Grid item sm={12} md={4}>
            this is p1s pie graph
            this is p1s pie graph
            this is p1s pie graph
            this is p1s pie graph
            this is p1s pie graph
            this is p1s pie graph
            this is p1s pie graph
            this is p1s pie graph
            this is p1s pie graph
            this is p1s pie graph
            this is p1s pie graph
          </Grid>
          <Grid item sm={12} md={4}>
            this is p2s pie graph
            this is p2s pie graph
            this is p2s pie graph
            this is p2s pie graph
            this is p2s pie graph
            this is p2s pie graph
            this is p2s pie graph
            this is p2s pie graph
            this is p2s pie graph
            this is p2s pie graph
            this is p2s pie graph
          </Grid>
          <Grid item sm={12} md={4}>
            this is p3s pie graph
            this is p3s pie graph
            this is p3s pie graph
            this is p3s pie graph
            this is p3s pie graph
            this is p3s pie graph
            this is p3s pie graph
            this is p3s pie graph
            this is p3s pie graph
            this is p3s pie graph
            this is p3s pie graph
          </Grid>
        </Grid>
      </main>
    );
  }
}

export default Content;