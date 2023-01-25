import "./navbar.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import Stack from "@mui/material/Stack";
import Button from "react-bootstrap/Button";
import Box from "@mui/material/Box";
import NotificationAddIcon from "@mui/icons-material/NotificationAdd";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const NavbarComponent = () => {
  return (
    <Navbar expand="lg" className='tool-bar'>
      <Navbar.Brand className="ms-5 cakeSwap" href="#home">
        CakeSwap
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto">
          <Form>
            <Form.Control className='search_input' size="sm" type="text" placeholder="Search" />
          </Form>
        </Nav>

        <Nav className="ml-auto me-5">
          <Stack direction="row" spacing={5}>
            <Button className='switch_btn'>Switch to ETH</Button>
            <Button className="notification-btn">
              <NotificationAddIcon sx={{ color: "AAABBB"}}/>
            </Button>
            <Button className="account">
              <ArrowDropDownIcon />
              <AccountCircleIcon />
            </Button>
          </Stack>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComponent;
