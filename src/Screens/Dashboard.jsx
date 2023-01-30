import React from "react";
import { dashboard } from "./styles";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import NavbarComponent from "../Components/Nav/Navbar";
import Sidebar from "../Components/Sidebar/Sidebar";
import ConnectWallet from "../Components/ConnectWallet/ConnectWallet";
import Community from "../Components/Community/Community";
import Chart from "../Components/Chart/Chart";
import TokenTable from "../Components/TokenTable/TokenTable";

function Dashboard() {
  return (
    <Stack style={dashboard} py={1}>
      <NavbarComponent />
      <Grid container gap={1} py={3}>
        <Grid item xs={12} sm={12} md={1}>
          <Sidebar />
        </Grid>
        <Grid item xs={12} sm={12} md={3} px="auto">
          <Grid
            container
            spacing={3}
            justifyContent="center"
            direction="column"
            alignContent="center"
          >
            <Grid item xs={12} sm={6.5} md={12}>
              <ConnectWallet />
            </Grid>
            <Grid item xs={12} sm={4.5} md={12}>
              <Community />
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={12} sm={12} md={6.5} px="auto">
          <Grid
            container
            spacing={1}
            justifyContent="center"
            direction="column"
            alignContent="center"
          >
            <Grid item xs={12} sm={4} md={12}>
              <Chart style={{ overflow: "hidden" }} />
            </Grid>
            <Grid item xs={12} sm={6} md={12}>
              <TokenTable />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Stack>
  );
}

export default Dashboard;
