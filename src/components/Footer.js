import React from 'react';
import {
  Box,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemText,
  Link as MuiLink,
  Stack
} from '@mui/material';
import {
  Facebook,
  Instagram,
  Twitter,
  YouTube,
  LinkedIn,
  Email,
  Phone,
  LocationOn
} from '@mui/icons-material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "whitesmoke", 
        color: "black",
        width: "100%",
        overflowX: "hidden",
        boxSizing: "border-box",
        mt: 5,
        pt: 7,
        pb: 6,
        px: { xs: 2, md: 6 },
      }}
    >
      {/* Top Section */}
      <Grid
        container
        spacing={{ xs: 2, md: 4 }}
        justifyContent="space-between"
      >
        {/* Branding & Description */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              mb: 1,
              textAlign: { xs: "center", md: "left" },
            }}
          >
            Top PU Colleges in Bangalore
          </Typography>
          <Typography
            variant="body2"
            sx={{
              lineHeight: 1.6,
              textAlign: { xs: "center", md: "left" },
            }}
          >
            Fueling Ambitions, Empowering Futures: Navigate your life
            preparation journey with confidence, as our user-friendly platform
            bridges the gap between aspirations and achievements. Join our
            colleges today and embark on the path to academic success.
          </Typography>
        </Grid>

        {/* Top University Level Exams */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              mb: 1,
              textAlign: { xs: "center", md: "left" },
            }}
          >
            Top Universities in Bangalore
          </Typography>
          <List sx={{ p: 0 }}>
            {[
              "Indian Institure of Science",
              "Bangalore University",
              "Christ University",
              "Jain University",
            ].map((exam) => (
              <ListItem key={exam} sx={{ p: 0 }}>
                <ListItemText
                  primary={
                    <Typography
                      variant="body2"
                      sx={{
                        cursor: "pointer",
                        textAlign: { xs: "center", md: "left" },
                      }}
                    >
                      {exam}
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Grid>

        {/* Top PU Colleges */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              mb: 1,
              textAlign: { xs: "center", md: "left" },
            }}
          >
            Top PU Colleges in Bangalore
          </Typography>
          <List sx={{ p: 0 }}>
            {[
              "Christ PU College",
              "SSMRV PU College",
              "NMKRV PU College",
              "RV PU College",
            ].map((uni) => (
              <ListItem key={uni} sx={{ p: 0 }}>
                <ListItemText
                  primary={
                    <Typography
                      variant="body2"
                      sx={{
                        cursor: "pointer",
                        textAlign: { xs: "center", md: "left" },
                      }}
                    >
                      {uni}
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List>
        </Grid>

        {/* Contact Us (Updated) */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              mb: 2,
              textAlign: { xs: "center", md: "left" },
            }}
          >
            Contact Us
          </Typography>

          {/* EMAIL */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
            <Email />
            <Typography variant="body2" sx={{ fontWeight: "bold" }}>
              EMAIL:
            </Typography>
          </Box>
          <Typography variant="body2" sx={{ ml: 4, mb: 2 }}>
            INFO@GETMYCOLLEGE.COM
          </Typography>

          {/* PHONE */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
            <Phone />
            <Typography variant="body2" sx={{ fontWeight: "bold" }}>
              PHONE:
            </Typography>
          </Box>
          <Typography variant="body2" sx={{ ml: 4, mb: 2 }}>
            +91 8867325152
          </Typography>
        </Grid>
      </Grid>


      {/* Final Divider */}
      <Box sx={{ borderTop: "1px solid #999", my: 3 }} />
      {/* Copyright */}
      <Typography
        variant="body2"
        sx={{ textAlign: "center", fontSize: "14px" }}
      >
        © {new Date().getFullYear()} -{" "}
        <MuiLink href="#" color="inherit" underline="hover">
          SNInfoTech
        </MuiLink>
        . All Rights Reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
