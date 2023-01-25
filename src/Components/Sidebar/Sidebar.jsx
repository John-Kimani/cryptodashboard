import React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import WindowIcon from '@mui/icons-material/Window';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import CurrencyBitcoinOutlinedIcon from '@mui/icons-material/CurrencyBitcoinOutlined';
import ViewInArOutlinedIcon from '@mui/icons-material/ViewInArOutlined';
import WatchOutlinedIcon from '@mui/icons-material/WatchOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

function Sidebar() {
  return (
    <Box className="mt-3" sx={{ width:'100%', height:"90vh"}}>
      <Stack justifyContent="space-between" sx={{height:"90vh"}}>
        <Stack spacing={5}>
            <Button >
                <WindowIcon sx={{ color: "white"}}/>
            </Button>
            <Button>
              <MailOutlinedIcon sx={{ color: "white"}}/>
            </Button>
            <Button>
              <CurrencyBitcoinOutlinedIcon sx={{ color: "white"}}/>
            </Button>
            <Button>
              <ViewInArOutlinedIcon sx={{ color: "white"}}/>
            </Button>
            <Button>
              <WatchOutlinedIcon sx={{ color: "white"}}/>
            </Button>
            <Button>
              <PersonOutlineOutlinedIcon sx={{ color: "white"}}/>
            </Button>
        </Stack>

        <Stack spacing={2} className="mb-3">
          <Button>
            <LogoutOutlinedIcon sx={{ color: "white"}}/>
          </Button>
        </Stack>
      </Stack>
    </Box>
  )
}

export default Sidebar