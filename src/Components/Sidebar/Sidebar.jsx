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
            <Button>
                <WindowIcon />
            </Button>
            <Button>
              <MailOutlinedIcon />
            </Button>
            <Button>
              <CurrencyBitcoinOutlinedIcon />
            </Button>
            <Button>
              <ViewInArOutlinedIcon />
            </Button>
            <Button>
              <WatchOutlinedIcon />
            </Button>
            <Button>
              <PersonOutlineOutlinedIcon />
            </Button>
        </Stack>

        <Stack spacing={2}>
          <Button>
            <LogoutOutlinedIcon />
          </Button>
        </Stack>
      </Stack>
    </Box>
  )
}

export default Sidebar