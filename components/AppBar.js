import { useState } from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Avatar from "@mui/material/Avatar";

import { Title } from "components/OBDev";
import { Link } from "components/Link";
import { getTranslation } from "translations";

const pages = ["blog", "about"];

const Logo = ({ mobile }) => (
  <Link href="/">
    <Box
      sx={{
        display: { xs: mobile ? "flex" : "none", md: mobile ? "none" : "flex" },
        minWidth: "140px",
      }}
    >
      <Avatar alt="MiraStudioKids Logo" src="../icon.ico" />
      <Title> OB Game Dev </Title>
    </Box>
  </Link>
);

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Logo />
          <Box
            sx={{
              // width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
              flexDirection: { xs: "row", md: "row" },
              marginLeft: { xs: "0", md: "auto" },
            }}
          >
            <Logo mobile />
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                marginLeft: "auto",
                width: "auto",
              }}
            >
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  href={`/${page.toLocaleLowerCase()}`}
                  variant="h2"
                  sx={{ my: 2, ml: 5, color: "white", display: "block" }}
                >
                  {getTranslation(page)}
                </Button>
              ))}
            </Box>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" }, marginLeft: "auto" }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <Link href={`/${page.toLocaleLowerCase()}`} key={page}>
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography textAlign="center" color="white">
                      {getTranslation(page)}
                    </Typography>
                  </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
