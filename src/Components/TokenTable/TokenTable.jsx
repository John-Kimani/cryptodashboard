import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import {Paper} from "@mui/material";
import  { heading, tablePaper, tradeBtn } from './styles'

function TokenTable() {
    function createData(name, balance, totalValue, trade) {
        return { name, balance, totalValue, trade};
      }

const rows = [
    createData('BitCoin', 0.04321, 2340.32, "Trade"),
    createData('Ethereum', 32234, 5340.32, "Trade"),
    ];
  return (
        <Paper elevation={3} style={tablePaper} sx={{p:4}}>
            <h3 style={heading}>Tokens</h3>
                <TableContainer >
                    <Table aria-label='simple table' sx={{ [ `& .${tableCellClasses.root}`]: {borderBottom: "none"}}}>
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
                                    <TableCell align='center' sx={{ color:"white"}}><Button style={tradeBtn} size="sm">{row.trade}</Button></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>

        </Paper>
  )
}

export default TokenTable