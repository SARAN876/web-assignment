import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.gray,
    color: theme.palette.common.black,
    fontSize: '15px',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(customer, orderNo, amount, status) {
  return { customer, orderNo, amount, status };
}

const rows = [
  createData({ icon: 'person', name: 'John Doe' }, 12345, 159.0, 'Completed'),
  createData({ icon: 'person', name: 'Jane Smith' }, 12346, 237.0, 'Pending'),
  createData({ icon: 'person', name: 'Alice Johnson' }, 12347, 262.0, 'Cancelled'),
  createData({ icon: 'person', name: 'Robert Brown' }, 12348, 305.0, 'Processing'),
  createData({ icon: 'person', name: 'Michael Davis' }, 12349, 356.0, 'Completed'),
];

const getStatusColor = (status) => {
  switch (status) {
    case 'Completed':
      return 'success';
    case 'Pending':
      return 'warning';
    case 'Cancelled':
      return 'error';
    case 'Processing':
      return 'info';
    default:
      return 'default';
  }
};

export default function Tables() {
  return (
    <div>
      <Typography variant="h6" gutterBottom padding={2}>
        Recent Orders
      </Typography>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Customer</StyledTableCell>
              <StyledTableCell align="right">Order No</StyledTableCell>
              <StyledTableCell align="right">Amount</StyledTableCell>
              <StyledTableCell align="right">Status</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.orderNo}>
                <StyledTableCell component="th" scope="row">
                  <Box display="flex" alignItems="center">
                    <Avatar alt={row.customer.name} src={`../../image.jpg`} />
                    <Box ml={1}>{row.customer.name}</Box>
                  </Box>
                </StyledTableCell>
                <StyledTableCell align="right">{row.orderNo}</StyledTableCell>
                <StyledTableCell align="right">{row.amount}</StyledTableCell>
                <StyledTableCell align="right">
                  <Chip label={row.status} color={getStatusColor(row.status)} />
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
