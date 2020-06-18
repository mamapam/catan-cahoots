import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(() => ({
  table: {
    width: '80%',
    margin: 'auto'
  }
}));

const PlayersTable = () => {
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
          <TableRow>
            <TableCell component="th" scope="row">mario</TableCell>
            <TableCell align="right">2</TableCell>
            <TableCell align="right">3</TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">OUF</TableCell>
            <TableCell align="right">2</TableCell>
            <TableCell align="right">3</TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">Pascal</TableCell>
            <TableCell align="right">2</TableCell>
            <TableCell align="right">3</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default PlayersTable;