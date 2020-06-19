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

  winsIncreaseHandler = (playerId) => {
    // create object of state for that playerId to increase in wins
    const updatedPlayers = this.state.players;
    let indexOfUpdatedPlayer = null;
    for(let i=0; i<this.state.players.length; i++) {
      if(this.state.players[i].id === playerId) {
        updatedPlayers[i] = {...this.state.players[i], wins: this.state.players[i].wins + 1}
        indexOfUpdatedPlayer = i;
      }
    }
    // setstate
    this.setState({players: updatedPlayers});
    // put request to db
    axios.put(`/players/${playerId}.json`, this.state.players[indexOfUpdatedPlayer])
      .then(res => {
        console.log(res);
      });
  }
  
  winsDecreaseHandler = (playerId) => {
    // create object of state for that playerId to increase in wins
    const updatedPlayers = this.state.players;
    let indexOfUpdatedPlayer = null;
    for(let i=0; i<this.state.players.length; i++) {
      if(this.state.players[i].id === playerId) {
        if(this.state.players[i].wins === 0) 
          return; 
        updatedPlayers[i] = {...this.state.players[i], wins: this.state.players[i].wins - 1}
        indexOfUpdatedPlayer = i;
      }
    }
    // setstate
    this.setState({players: updatedPlayers});
    // put request to db
    axios.put(`/players/${playerId}.json`, this.state.players[indexOfUpdatedPlayer])
      .then(res => {
        console.log(res);
      });
  }

  lossesIncreaseHandler = (playerId) => {
    // create object of state for that playerId to increase in wins
    const updatedPlayers = this.state.players;
    let indexOfUpdatedPlayer = null;
    for(let i=0; i<this.state.players.length; i++) {
      if(this.state.players[i].id === playerId) {
        updatedPlayers[i] = {...this.state.players[i], losses: this.state.players[i].losses + 1}
        indexOfUpdatedPlayer = i;
      }
    }
    // setstate
    this.setState({players: updatedPlayers});
    // put request to db
    axios.put(`/players/${playerId}.json`, this.state.players[indexOfUpdatedPlayer])
      .then(res => {
        console.log(res);
      });
  }
  
  lossesDecreaseHandler = (playerId) => {
    // create object of state for that playerId to increase in wins
    const updatedPlayers = this.state.players;
    let indexOfUpdatedPlayer = null;
    for(let i=0; i<this.state.players.length; i++) { 
      if(this.state.players[i].id === playerId) {
        if(this.state.players[i].losses === 0) 
          return;
        updatedPlayers[i] = {...this.state.players[i], losses: this.state.players[i].losses - 1}
        indexOfUpdatedPlayer = i;
      }
    }
    // setstate
    this.setState({players: updatedPlayers});
    // put request to db
    axios.put(`/players/${playerId}.json`, this.state.players[indexOfUpdatedPlayer])
      .then(res => {
        console.log(res);
      });
  }

  render() {
    return(
      <main>
        <Grid container direction="row">
          <Grid item sm={12} md={6}>
            <PlayersTable 
              playerData={this.state.players} 
              winsIncrease={this.winsIncreaseHandler} 
              winsDecrease={this.winsDecreaseHandler}
              lossesIncrease={this.lossesIncreaseHandler}
              lossesDecrease={this.lossesDecreaseHandler} />
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