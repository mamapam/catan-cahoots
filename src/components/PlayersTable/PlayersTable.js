import React from 'react';
import { IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

const useStyles = makeStyles(() => ({
  table: {
    width: '80%',
    margin: 'auto'
  }
}));

const PlayersTable = (props) => {
  const classes = useStyles();

  return(
    <TableContainer component={Paper} className={classes.table} >
      <Table className={classes.table} >
        <TableHead>
          <TableRow>
            <TableCell>Player</TableCell>
            <TableCell align="right">Wins</TableCell>
            <TableCell align="right">Losses</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.playerData.map((row) => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">
                  <IconButton onClick={() => props.winsDecrease(row.id)}>
                    <RemoveIcon />
                  </IconButton>
                  {row.wins}
                  <IconButton onClick={() => props.winsIncrease(row.id)}>
                    <AddIcon />
                  </IconButton>
                </TableCell>
                <TableCell align="right">
                  <IconButton onClick={() => props.lossesDecrease(row.id)}>
                    <RemoveIcon />
                  </IconButton>
                  {row.losses}
                  <IconButton onClick={() => props.lossesIncrease(row.id)}>
                    <AddIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default PlayersTable;