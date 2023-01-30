import Button from "@mui/material/Button";
import NotificationAddIcon from "@mui/icons-material/NotificationAdd";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { InputAdornment, Typography } from "@mui/material";
import { searchInput, switchBtn } from "./styles";
import { BsSearch } from "react-icons/bs";
import Input from "@mui/material/Input";
import Grid from "@mui/material/Grid";

const NavbarComponent = () => {
  return (
    <Grid container  direction="row" md={12} alignContent="center" justifyContent="center" py={2}>
    <Grid item xs={12} md={4} style={{textAlign: "center"}}>
      <Typography variant="h3" fontSize="1rem" fontWeight={600}>
        CakeSwap
      </Typography>
    </Grid>
    <Grid item xs={4} md={4}>
    <Input
        startAdornment={
          <InputAdornment position="start">
            <BsSearch style={{ color: "white" }} fontSize="10px" />
          </InputAdornment>
        }
        placeholder="Search"
        sx={{ color: "white" }}
        style={searchInput}
      />
    </Grid>
    <Grid item xs={7} md={4}>
      <Grid container direction="row">
        <Grid item md={4}>      
            <Button style={switchBtn} size="small">
              Switch to ETH
            </Button>
        </Grid>
        <Grid item md={1}> 
          <NotificationAddIcon sx={{ color: "white", fontSize: "15px" }} />
        </Grid>
        <Grid item md={4}> 
          <ArrowDropDownIcon sx={{ color: "white", fontSize: "15px" }} />
          <AccountCircleIcon sx={{ color: "white", fontSize: "15px" }} /></Grid>
       </Grid>
    </Grid>
  </Grid>


  );
};

export default NavbarComponent;


{/* <Box style={navBar}>
      <Typography variant="h3" fontSize="1rem" fontWeight={600}>
        CakeSwap
      </Typography>
      <Input
        startAdornment={
          <InputAdornment position="start">
            <BsSearch style={{ color: "white" }} fontSize="10px" />
          </InputAdornment>
        }
        placeholder="Search"
        sx={{ color: "white" }}
        style={searchInput}
      />
      <Box style={list}>
      <Button style={switchBtn} size="small">
        Switch to ETH
      </Button>
      <NotificationAddIcon sx={{ color: "white", fontSize: "15px" }} />
      <ArrowDropDownIcon sx={{ color: "white", fontSize: "15px" }} />
      <AccountCircleIcon sx={{ color: "white", fontSize: "15px" }} />
      </Box>
    </Box> */}