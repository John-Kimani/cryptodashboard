import React from 'react';
import { joinBtn, heading, content } from './styles.js';
import Box from "@mui/material/Box";
import Button from '@mui/material/Button';
import Stack from "@mui/material/Stack";
import {Paper} from "@mui/material";

function Community() {
  return (
    <Paper elevation={3} style={{backgroundColor: "#332E59",color:"#fefefe"}} sx={{p:2, }}>
    <Stack >
        <Box>
            <h4 style={heading}>Join Our Community</h4>
            <p style={content}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </Box>
        <Button style={joinBtn}>Join Now</Button>
    </Stack>
  </Paper>
  )
}

export default Community