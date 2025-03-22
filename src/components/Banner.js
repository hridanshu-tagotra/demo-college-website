import { Grid, Typography, Box, TextField, Button } from "@mui/material";
import React from "react";
import Bomer from "../assets/bomer.jpg";

const Banner = () => {
  return (
    <Grid
      container
      sx={{
        backgroundImage: `url(${Bomer})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: { xs: "auto", md: "80vh" },
        minHeight: "80vh",
        position: "relative",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: { xs: "center", md: "space-around" },
        gap: { xs: "20px", md: "90px" },
        p: { xs: 2, md: 0 },
      }}
    >
      {/* Dark Overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.6)",
        }}
      />

      {/* Left Side Text Content */}
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          color: "#fff",
          zIndex: 1,
          textAlign: { xs: "center", md: "left" },
          maxWidth: "600px",
          p: 2,
        }}
      >
        <Typography variant="h2" fontWeight={700} sx={{ fontSize: { xs: "2.5rem", md: "3.5rem" } }}>
          Colleges for PU in Bangalore
        </Typography>
        <Typography variant="h5" sx={{ my: 2, opacity: 0.8, fontSize: { xs: "1.2rem", md: "1.5rem" } }}>
          Unlock a world of opportunities with the top PU colleges in Bangalore - where knowledge meets excellence!
        </Typography>
        <Typography variant="h6" sx={{ fontSize: { xs: "1rem", md: "1.2rem" } }}>1. St. Joseph's Pre-University College</Typography>
        <Typography variant="h6" sx={{ fontSize: { xs: "1rem", md: "1.2rem" } }}>2. Mount Carmel PU College</Typography>
        <Typography variant="h6" sx={{ fontSize: { xs: "1rem", md: "1.2rem" } }}>3. Presidency PU College</Typography>
        <Typography variant="h6" sx={{ fontSize: { xs: "1rem", md: "1.2rem" } }}>4. BIT PU College</Typography>
        <Typography variant="h6" sx={{ fontSize: { xs: "1rem", md: "1.2rem" } }}>5. Mallya Aditi International School PU College</Typography>
      </Grid>

      {/* Right Side Form */}
      <Grid
        item
        xs={12}
        md={4}
        sx={{
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          p: 3,
          borderRadius: "10px",
          zIndex: 1,
          width: { xs: "90%", md: "350px" },
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
        }}
      >
        <Typography variant="h6" fontWeight={700} textAlign="center" mb={2}>
          Ready to Start Your Journey? Fill out your application now!
        </Typography>
        <TextField fullWidth label="Full Name" variant="outlined" margin="dense" />
        <TextField fullWidth label="Phone Number" variant="outlined" margin="dense" />
        <TextField
          fullWidth
          label="Message"
          variant="outlined"
          multiline
          rows={3}
          margin="dense"
        />
        <Button fullWidth variant="contained" sx={{ mt: 2, backgroundColor: "#4B5320" }}>
          Submit
        </Button>
      </Grid>
    </Grid>
  );
};

export default Banner;
