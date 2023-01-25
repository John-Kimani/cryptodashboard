import React from 'react';
import './community.css';
import Box from "@mui/material/Box";
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';

function Community() {
  return (
    <Box>
        <Card className='box-card'>
            <Card.Body>
                <h4 className='heading'>Join Our Community</h4>
                <p className='content'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </Card.Body>
            <Button className='join_community-btn'>Join Now</Button>

        </Card>
    </Box>
  )
}

export default Community