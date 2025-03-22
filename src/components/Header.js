import React, { useState } from "react";
import {
  Box,
  Button,
  Grid,
  Typography,
  useTheme,
  useMediaQuery,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // Menu items
  const menuItems = ["Home", "About us", "Academics", "Admissions", "Contact us"];

  // Drawer content for mobile
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center", p: 2 }}>
      <Box sx={{ mb: 2 }}>
        <img
          src={logo}
          alt="Logo"
          style={{ height: "50px", cursor: "pointer" }}
        />
      </Box>
      <List>
        {menuItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton
              sx={{ textAlign: "center" }}
              component={["Home", "About us", "Academics", "Admissions"].includes(item) ? Link : "a"}
              {...(item === "Home" && { to: "/" })}
              {...(item === "About us" && { to: "/about" })}
              {...(item === "Academics" && { to: "/academics" })}
              {...(item === "Admissions" && { to: "/admissions" })}
              {...(
                item === "Contact us" && {
                  href: "https://www.getmycollege.com/contact-us",
                  target: "_blank",
                  rel: "noopener noreferrer",
                }
              )}
            >
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        sx={{
          backgroundColor: "whitesmoke",
          backgroundSize: "cover",
          backgroundPosition: "top 10px",
          p: 2,
          alignItems: "center",
        }}
      >
        <Grid item xs={6}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <img
              src={logo}
              alt="Logo"
              style={{
                height: isMobile ? "40px" : "100px",
                cursor: "pointer",
              }}
              onClick={() =>
                window.open(
                  "https://www.getmycollege.com/",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
            />
            {!isMobile && (
              <Typography variant="h6" sx={{ color: "blue", cursor: "pointer" }}>
                {/* Insert your title/text here */}
              </Typography>
            )}
          </Box>
        </Grid>
        <Grid item xs={6} sx={{ display: "flex", justifyContent: "flex-end" }}>
          {isMobile ? (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <Box sx={{ display: "flex", gap: 3 }}>
              {menuItems.map((item) => (
                <Button
                  key={item}
                  component={["Home", "About us", "Academics", "Admissions"].includes(item) ? Link : "a"}
                  {...(item === "Home" && { to: "/" })}
                  {...(item === "About us" && { to: "/about" })}
                  {...(item === "Academics" && { to: "/academics" })}
                  {...(item === "Admissions" && { to: "/admissions" })}
                  {...(
                    item === "Contact us" && {
                      href: "https://www.getmycollege.com/contact-us",
                      target: "_blank",
                      rel: "noopener noreferrer",
                    }
                  )}
                  sx={{
                    color: "#4B5320",
                    fontSize: "15px",
                    "&:hover": {
                      backgroundColor: "#A9A9A9",
                      transform: "scale(1.05)",
                    },
                  }}
                >
                  {item}
                </Button>
              ))}
            </Box>
          )}
        </Grid>
      </Grid>
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        PaperProps={{
          sx: {
            width: { xs: "60%", sm: "60%" },
            m: 0,
            borderRadius: 0,
            boxSizing: "border-box",
          },
        }}
      >
        {drawer}
      </Drawer>
    </Box>
  );
};

export default Header;
