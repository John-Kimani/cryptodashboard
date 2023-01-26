import React from "react";
import { dashboard } from "./styles";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import NavbarComponent from "../Components/Nav/Navbar";
import Sidebar from "../Components/Sidebar/Sidebar";
import ConnectWallet from "../Components/ConnectWallet/ConnectWallet";
import Community from "../Components/Community/Community";
import Chart from "../Components/Chart/Chart";
import TokenTable from "../Components/TokenTable/TokenTable";

function Dashboard() {
  return (
    <Stack style={dashboard}>
      <NavbarComponent />
      <Stack direction="row" py={4} px={2}>
        <Sidebar />
        <Grid container justifyContent="space-between">
          <Grid item xs={12} md={4.5}>
            <Stack mx={2} spacing={2}>
              <Grid container gap={6} justifyContent="space-between">
                <Grid item xs={12} sm={6.5} md={12}>
                  <ConnectWallet />
                </Grid>
                <Grid item xs={12} sm={4.5} md={12}>
                  <Community />
                </Grid>
              </Grid>
            </Stack>
          </Grid>
          <Grid item xs={12} md={7} mt={2}>
            <Stack spacing={2} sx={{ px: 2 }}>
              <Box>
                <Chart />
              </Box>
              <TokenTable />
            </Stack>
          </Grid>
        </Grid>
        <Stack></Stack>
      </Stack>
    </Stack>
  );
}

export default Dashboard;
