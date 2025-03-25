import React from "react";
import { Grid, Box, Typography, Button } from "@mui/material";
import sampleImage from "../assets/studentstudy.jpg"; // Replace with your own image

const AboutSection = () => {
  return (
    <Grid
      container
      spacing={2}
      alignItems="center"
      justifyContent="center"
      sx={{ 
        px: { xs: 2, md: 15 }, // Responsive horizontal padding
        pt: 6,
        pb: 3 
      }}
    >
      {/* Left side: Rounded image (no hover effect) */}
      <Grid item xs={12} md={5}>
        <Box
          component="img"
          src={sampleImage}
          alt="Students studying"
          sx={{
            width: "100%",
            borderRadius: 2,
            boxShadow: 2,
            display: "block",
            objectFit: "cover",
          }}
        />
      </Grid>

      {/* Right side: Overlapping text "card" with hover effect */}
      <Grid item xs={12} md={5}>
        <Box
          sx={{
            backgroundColor: "#9EA2A6",
            borderRadius: 2,
            boxShadow: 2,
            p: { xs: 2, md: 3 }, // Responsive padding for mobile & desktop\n            position: "relative",
            zIndex: 2,
            ml: { xs: 0, md: "-50px" },
            mt: { xs: 2, md: 0 },
            transition: "transform 0.3s, box-shadow 0.3s",
            "&:hover": {
              transform: "scale(1.03)",
              boxShadow: 6,
            },
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              color: "#2C2C2C",
              mb: 3,
            }}
          >
            About Our Top PU Colleges
          </Typography>

          <Typography variant="body1" sx={{ color: "#2C2C2C", mb: 5 }}>
            Our Top PU Colleges are among the leading institutions offering a robust
            pre-university education. Focused on academic excellence, these colleges
            provide modern facilities, experienced faculty, and comprehensive support
            systems to ensure every student is well-prepared for higher education.
            Explore our tailored programs designed to bridge the gap between school
            and university, setting you on the path to success.
          </Typography>

          <Box sx={{ textAlign: "center" }}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#4B5320",
                color: "#FFF",
                borderRadius: "20px",
                px: 3,
                py: 1,
                boxShadow: "none",
                "&:hover": {
                  backgroundColor: "#3E471B",
                },
              }}
              onClick={() =>
                window.open(
                  "https://www.getmycollege.com/colleges/top-pu-colleges-in-bangalore",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
            >
              Know More
            </Button>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default AboutSection;
