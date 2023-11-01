import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Viktor Hovland', "$32.11M", "Titleist", "1st", "NOR"),
  createData('Scottie Scheffler', "$23.01M", "Titleist", "2nd", "USA"),
  createData('Rory McIlroy', "$17.92M", "Nike", "3rd", "GBR"),
  createData('Jon Rahm', "$17.19M", "Callaway", "4th", "ESP"),
  createData('Wyndham Clark', "$15.75M", "Titleist", "5th", "USA"),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Players</TableCell>
            <TableCell align="right">Earnings</TableCell>
            <TableCell align="right">Sponsor</TableCell>
            <TableCell align="right">Place</TableCell>
            <TableCell align="right">Country</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}