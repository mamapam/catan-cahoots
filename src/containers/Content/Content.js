import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import axios from '../../axios-players';

import PlayersTable from '../../components/PlayersTable/PlayersTable';
import StackedBarChart from '../../components/StackedBarChart/StackedBarChart';
import PlayerPieChart from '../../components/PlayerPieChart/PlayerPieChart';

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
            <StackedBarChart data={this.state.players} /> 
          </Grid>
        </Grid>
        <Grid container direction="row">
          {this.state.players.map(player => {
            return(
              <Grid key={player.id} item sm={12} md={4}>
                <PlayerPieChart data={player} />
              </Grid>
            );
          })}
        </Grid>
      </main>
    );
  }
}

export default Content;