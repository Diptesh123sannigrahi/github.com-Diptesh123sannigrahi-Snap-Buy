import React from "react";
import { AppBar, Toolbar, Typography, Box, Button } from "@mui/material";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const Navbar = (props) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ bgcolor: "#41c7f0" }}>
        <Toolbar>
          <ShoppingCartOutlinedIcon sx={{ color: "#ffffff", mr: 1 }} />
          <Typography
            variant="h6"
            align="left"
            component="h1"
            sx={{ flexGrow: 1, color: "#222625" }}
          >
            Snap-Buy
          </Typography>
          <Button
            variant="contained"
            size="small"
            sx={{ bgcolor: "#41c7f0", color: "#ffff" }}
            onClick={() => {
              props.clickOnBtn();
            }}
          >
            About
          </Button>
          <Button href="" variant="icon" size="small">
            <ShoppingBagIcon sx={{ color: "#ffffff" }} />
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
