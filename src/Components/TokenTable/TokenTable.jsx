import React from 'react';
import "./tokenTable.css";
import Box from "@mui/material/Box";
import Card from "react-bootstrap/Card";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';

function TokenTable() {
    function createData(name, balance, totalValue, trade) {
        return { name, balance, totalValue, trade};
      }

const rows = [
    createData('BitCoin', 0.04321, 2340.32, "Trade"),
    createData('Ethereum', 32234, 5340.32, "Trade"),
    ];
  return (
    <Box>
        <Card className='box-card'>
            <Card.Header>
                <h3 className='table_heading'>Tokens</h3>
            </Card.Header>
            <Card.Body>
                <TableContainer>
                    <Table aria-label='simple table' className='trading_table' sx={{ [ `& .${tableCellClasses.root}`]: {borderBottom: "none"}}}>
                        <TableHead sx={{ outline: "none",border:"none"}}>
                            <TableRow sx={{ outline: "none",border:"none"}}>
                                <TableCell sx={{ color:"#878787"}}>Name</TableCell>
                                <TableCell sx={{ color:"#878787"}} align='center'>Balance</TableCell>
                                <TableCell sx={{ color:"#878787"}} align='center'>Total Value</TableCell>
                                <TableCell sx={{ color:"#878787"}} align='center'>Trade</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody sx={{ outline: "none",border:"none"}}>
                            {rows.map((row) => (
                                <TableRow key={row.name}  sx={{ '&:last-child td, &:last-child th': { border:"none", outline:"none"} }}>
                                    <TableCell component='th' scope='row' sx={{ color:"white"}}>{row.name} </TableCell>
                                    <TableCell align='center' sx={{ color:"white"}}>{row.balance}</TableCell>
                                    <TableCell align='center' sx={{ color:"white"}}>{row.totalValue}</TableCell>
                                    <TableCell align='center' sx={{ color:"white"}}><Button className='trade_button' size="sm">{row.trade}</Button></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Card.Body>
        </Card>
    </Box>
  )
}

export default TokenTable