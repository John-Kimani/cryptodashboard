import "./connect.css";
import React from "react";
import Box from "@mui/material/Box";
import Card from "react-bootstrap/Card";
import Form from 'react-bootstrap/Form';
import ImportExportOutlinedIcon from '@mui/icons-material/ImportExportOutlined';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Stack from '@mui/material/Stack';
import TuneIcon from '@mui/icons-material/Tune';

function ConnectWallet() {
  return (
    <Box className="mt-2">
      <Card className="box-card">
        <Card.Header className="header">
          <Stack direction='row' sx={{ justifyContent:"space-between"}}>
          <ButtonGroup size="small" aria-label="small button group" className='group-btn'>
                <Button className="swap-btn">Swap</Button>
                <Button className='group-btn'>Limit</Button>
                <Button className='group-btn'>Liquidity</Button>
            </ButtonGroup>

            <Button className="music__icon">
              <TuneIcon />
            </Button>
          </Stack>
        </Card.Header>
        <Card.Body>
          <div className="row">
            <Form>
                <Form.Group>
                    <Form.Label>From</Form.Label>
                    <Form.Control className="input"  placeholder="0.0"/>
                </Form.Group>
            </Form>
          </div>
          <div className="import_export-arrow">
          <ImportExportOutlinedIcon sx={{ color: "white"}} />
          </div>
          <div className="row">
            <Form>
                <Form.Group>
                    <Form.Label>To</Form.Label>
                    <Form.Control className="input" placeholder="0.0" />
                </Form.Group>
            </Form>
          </div>
        </Card.Body>
        <Card.Footer className="footer">
          <Button className="connect_wallet-btn mt-4">Connect to Wallet</Button>
        </Card.Footer>
      </Card>
    </Box>
  );
}

export default ConnectWallet;
