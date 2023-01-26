import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import NotificationAddIcon from "@mui/icons-material/NotificationAdd";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { InputAdornment, Box, Typography } from "@mui/material";
import { btn, searchInput, switchBtn, navBar } from "./styles";
import { BsSearch } from "react-icons/bs";
import Input from "@mui/material/Input";

const NavbarComponent = () => {
  return (
    <Box style={navBar} sx={{ px: 8, pt: 2}}>
      <Typography
        textAlign="center"
        variant="h3"
        fontSize="1.5rem"
        fontWeight={600}
      >
        CakeSwap
      </Typography>
      <Stack direction="row" spacing="auto" style={{ width: "25%"}}>
        <Input
          startAdornment={
            <InputAdornment position="start">
              <BsSearch style={{ color: "white" }} fontSize="small" />
            </InputAdornment>
          }
          placeholder="Search"
          sx={{ color: "white" }}
          style={searchInput}
        />
      </Stack>

      <Stack>
        <Stack direction="row" spacing={2}>
          <Button style={switchBtn}>Switch to ETH</Button>
          <Button style={btn}>
            <NotificationAddIcon sx={{ color: "white" }} fontSize="small" />
          </Button>
          <Button style={btn}>
            <ArrowDropDownIcon sx={{ color: "white" }} fontSize="small" />
            <AccountCircleIcon sx={{ color: "white" }} fontSize="small" />
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
};

export default NavbarComponent;
