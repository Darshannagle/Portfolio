import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Tooltip from "@mui/material/Tooltip";
import { NavLink } from "react-router-dom";
import { Avatar, Menu, MenuItem, useTheme } from "@mui/material";
import pic from "../assets/1715914840086-removebg-preview.png";

import { LinkedIn, Instagram, Twitter, Email } from "@mui/icons-material";
import type { IconType } from "react-icons/lib";
// ✅ Memoized social media data
const SOCIAL_LINKS = [
  {
    icon: LinkedIn,
    label: "LinkedIn",
    color: "#0077B5",
    link: "https://linkedin.com/in/darshan-nagle-3321b2209",
  },
  { icon: Instagram, label: "Instagram", color: "#E4405F", link: "" },
  {
    icon: Twitter,
    label: "Twitter",
    color: "#1DA1F2",
    link: "https://github.com/Darshannagle",
  },
  {
    icon: Email,
    label: "Email",
    color: "#EA4335",
    link: "mailto:nagledarshan12@gmail.com",
  },
];

// ✅ SocialIcon receives IconComponent as prop
const SocialIcon = React.memo(
  ({
    IconComponent,
    label,
    color,
    link,
  }: {
    IconComponent: IconType;
    label: string;
    color: string;
    link: string;
  }) => {
    return (
      <NavLink to={link}>
        <IconButton
          aria-label={label}
          sx={{
            color: "white",
            fontSize: "30px",
            transition: "all 0.3s ease-in-out",
            "&:hover": {
              color: color,
              transform: "translateY(-3px) scale(1.1)",
              backgroundColor: `${color}20`,
            },
          }}
        >
          <IconComponent />
        </IconButton>
      </NavLink>
    );
  }
);

SocialIcon.displayName = "SocialIcon";

// ✅ Sidebar component
const Sidebar = React.memo(() => {
  const theme = useTheme();

  const socialIcons = React.useMemo(
    () =>
      SOCIAL_LINKS.map(({ icon: IconComponent, label, color, link }) => (
        <SocialIcon
          key={label}
          IconComponent={IconComponent}
          label={label}
          color={color}
          link={link}
        />
      )),
    []
  );
  return (
    <>
      <Avatar
        src={pic}
        alt="Darshan Nagle"
        sx={{
          margin: "20px auto",
          width: { xs: "20vw", sm: "15vw", md: "12vw" },
          height: { xs: "20vw", sm: "15vw", md: "12vw" },
          maxWidth: "150px",
          maxHeight: "150px",
          border: "2px solid",
          borderColor: "grey.300",
          boxShadow: theme.shadows[4],
          transition: "all 0.3s ease-in-out",
          "&:hover": {
            transform: "scale(1.05)",
            boxShadow: theme.shadows[8],
          },
        }}
      />

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          width: { xs: "90%", sm: "80%" },
          maxWidth: "300px",
          margin: "20px auto 0",
          px: 2,
        }}
      >
        {socialIcons}
      </Box>
    </>
  );
});

Sidebar.displayName = "Sidebar";

const pages = ["Home", "About Me", "Tech Stack", "Projects", "Contact Me"];

const settings = localStorage?.getItem("token")
  ? [
      {
        path: "Profile",
        handler: () => {
          console.log("Profile");
        },
      },
      {
        path: "Account",
        handler: () => {
          console.log("Account");
        },
      },
      {
        path: "Dashboard",
        handler: () => {
          console.log("Account");
        },
      },
      {
        path: "Logout",
        handler: () => {
          console.log("Logout");
          localStorage.removeItem("token");
          window.location.reload();
        },
      },
    ]
  : [
      {
        path: "Login",
        handler: () => {
          console.log("Login");
        },
      },
    ];

function ResponsiveAppBar() {
  React.useState<null | HTMLElement>(null);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      <AppBar
        position="static"
        color="transparent"
        style={{
          boxShadow: "none",
          color: "whitesmoke",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {/* Mobile Menu Button */}
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{
                display: { md: "none" },
                mr: 2,
                padding: 0.5,
                border: "1px solid black",
                borderRadius: "5px",
              }}
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>

            {/* Title */}
            <Typography
              variant="h6"
              component="a"
              href="/"
              sx={{
                marginRight: 2,
                flexGrow: 1,
                fontFamily: "Poppins",
                fontWeight: 300,
                letterSpacing: ".0rem",
                color: "white",
                marginX: "10px",
                textDecoration: "none",
              }}
            >
              Darshan Nagle
            </Typography>

            {/* Desktop Menu */}
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <NavLink
                  key={page}
                  to={`/${page.toLowerCase().replace(" ", "-")}`}
                  style={({ isActive }) => ({
                    textDecoration: "none",
                    textTransform: "none",
                    color: isActive ? "white" : "whitesmoke",
                    borderColor: isActive ? "white" : "transparent",
                    borderRadius: "5px",
                    borderWidth: "1px",
                    borderStyle: "solid",
                    fontWeight: isActive ? "normal" : "lighter",
                    margin: "0 5px",
                    padding: "5px 10px",
                  })}
                >
                  {/* <Button style={{ textTransform: "none" }}> */}
                  {page}
                  {/* </Button> */}
                </NavLink>
              ))}
            </Box>

            {/* User Profile / Auth Menu */}
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu}></IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map(({ path, handler }) => (
                  <MenuItem key={path} onClick={handler}>
                    <NavLink
                      to={`/${String(path).toLowerCase()}`}
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      {path}
                    </NavLink>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <hr style={{ height: "0.2px" }} />

      {/* Sidebar Drawer for Mobile */}
      <Drawer anchor="left" open={mobileOpen} onClose={handleDrawerToggle}>
        <Box
          sx={{
            width: 250,
            height: "100%",
            backgroundColor: "black",
            color: "whitesmoke",
          }}
        >
          <Sidebar />
          <List>
            {pages.map((page) => (
              <NavLink
                key={page}
                to={`/${page.toLowerCase().replace(" ", "-")}`}
                style={({ isActive }) => ({
                  textDecoration: "none",
                  color: isActive ? "black" : "silver",
                  backgroundColor: isActive ? "white" : "transparent",
                  display: "block",
                  borderRadius: "5px",
                  margin: "2px",
                })}
              >
                <ListItem disablePadding>
                  <ListItemButton onClick={handleDrawerToggle}>
                    <ListItemText primary={page} />
                  </ListItemButton>
                </ListItem>
              </NavLink>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}

export default ResponsiveAppBar;
