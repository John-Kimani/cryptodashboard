import React from 'react';
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
    <Stack justifyContent="space-between">
    <Stack spacing={3}>
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

    <Stack>
      <Button>
        <LogoutOutlinedIcon sx={{ color: "white"}}/>
      </Button>
    </Stack>
  </Stack>
  )
}

export default Sidebar