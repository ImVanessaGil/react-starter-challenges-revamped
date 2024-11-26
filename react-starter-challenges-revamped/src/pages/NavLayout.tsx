import React from "react";
import { Link, Outlet } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
const NavLayout = () => {
  return (
    <div>
      <AppBar
        position="static"
        elevation={0}
        sx={{
          backgroundColor: "#23272f",
          width: "100%",
          marginBottom: "15px",
          boxShadow: "0 2px #444950",
        }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, color: "#eee" }}
          >
            Challenges
          </Typography>

          <Box sx={{ display: "flex", gap: 2 }}>
            <Button sx={{ color: "#eee" }} component={Link} to="/">
              Home
            </Button>

            <Button sx={{ color: "#eee" }} component={Link} to="/tic_tac_toe">
              Tic Tac Toe
            </Button>

            <Button sx={{ color: "#eee" }} component={Link} to="/video">
              Video
            </Button>

            <Button sx={{ color: "#eee" }} component={Link} to="/github_clone">
              GitHub Clone
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Outlet />
    </div>
  );
};

export default NavLayout;
