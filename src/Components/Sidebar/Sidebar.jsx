import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import WindowIcon from "@mui/icons-material/Window";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import CurrencyBitcoinOutlinedIcon from "@mui/icons-material/CurrencyBitcoinOutlined";
import ViewInArOutlinedIcon from "@mui/icons-material/ViewInArOutlined";
import WatchOutlinedIcon from "@mui/icons-material/WatchOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import Grid from "@mui/material/Grid";

function Sidebar() {
  return (
    <Grid
      container
      direction="column"
      justifyContent="space-between"
      height="1"
    >
      <Grid item height="75%">
        <Stack spacing={3}>
          <Button>
            <WindowIcon sx={{ color: "white" }} />
          </Button>
          <Button>
            <MailOutlinedIcon sx={{ color: "white" }} />
          </Button>
          <Button>
            <CurrencyBitcoinOutlinedIcon sx={{ color: "white" }} />
          </Button>
          <Button>
            <ViewInArOutlinedIcon sx={{ color: "white" }} />
          </Button>
          <Button>
            <WatchOutlinedIcon sx={{ color: "white" }} />
          </Button>
          <Button>
            <PersonOutlineOutlinedIcon sx={{ color: "white" }} />
          </Button>
        </Stack>
      </Grid>
      <Grid item>
        <Stack>
          <Button>
            <LogoutOutlinedIcon sx={{ color: "white" }} />
          </Button>
        </Stack>
      </Grid>
    </Grid>
  );
}

export default Sidebar;
