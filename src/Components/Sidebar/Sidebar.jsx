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
import { iconsBtn } from "./styles.js";

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
            <WindowIcon style={iconsBtn} />
          </Button>
          <Button>
            <MailOutlinedIcon style={iconsBtn} />
          </Button>
          <Button>
            <CurrencyBitcoinOutlinedIcon style={iconsBtn} />
          </Button>
          <Button>
            <ViewInArOutlinedIcon style={iconsBtn} />
          </Button>
          <Button>
            <WatchOutlinedIcon style={iconsBtn} />
          </Button>
          <Button>
            <PersonOutlineOutlinedIcon style={iconsBtn} />
          </Button>
        </Stack>
      </Grid>
      <Grid item>
        <Stack>
          <Button>
            <LogoutOutlinedIcon style={iconsBtn} />
          </Button>
        </Stack>
      </Grid>
    </Grid>
  );
}

export default Sidebar;
