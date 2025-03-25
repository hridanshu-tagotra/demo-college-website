import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Grid, Box, Typography, Card } from "@mui/material";
import Bomer from "../assets/bommer.jpg"; // Ensure the path is correct

const courses = [
  { name: "PCMB" },
  { name: "PCMC" },
  { name: "PCME" },
  { name: "HEPS" },
  { name: "HEPP" },
  { name: "HESP" },
];

const App = () => {
  // Unified description for both types of courses
  const unifiedDescription = `❝ Discover top PU colleges in Bangalore for both Science and Arts. 
Experience exceptional education, expert faculty, and modern facilities. These colleges provide 
a strong academic foundation while fostering creativity, critical thinking, and holistic growth-opening 
doors to prestigious universities and fulfilling career paths. ❞`;

  return (
    <Grid>
      <Header />
      <Box
        sx={{
          position: "relative",
          backgroundImage: `url(${Bomer})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "500px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* Dark overlay */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.6)", // Adjust darkness (0 = fully transparent, 1 = fully black)
          }}
        />
        {/* Text Content */}
        <Typography
          variant="h4"
          sx={{
            position: "relative",
            color: "#f0f1e7",
            fontWeight: "bolder",
            textTransform: "uppercase",
            backgroundColor: "rgba(245, 237, 237, 0.44)", // Slight background for readability
            padding: 5,
            borderRadius: "20px",
            fontSize: "40px",
            WebkitTextStroke: '1px black '
          }}
        >
          Colleges For PUC in Bangalore
        </Typography>
      </Box>

      <Box
        sx={{
          py: 8, // Reduced vertical padding
          px: { xs: 2, md: 4 },
          background: "white",
        }}
      >
        {/* Title & Description */}
        <Box sx={{ textAlign: "center", mb: 10, px: { xs: 2, md: 0 } }}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
              color: "#333",
              fontSize: { xs: "24px", md: "32px" },
            }}
          >
            Get Admission in Top PU Colleges in Bangalore for Science and Arts
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#666",
              mt: 2,
              maxWidth: "800px",
              mx: "auto",
              fontSize: { xs: "14px", md: "16px" },
            }}
          >
            {unifiedDescription}
          </Typography>
        </Box>

        {/* Course Options */}
        <Grid
          container
          spacing={2}
          sx={{ maxWidth: 900, mx: "auto", px: { xs: 2, md: 0 } }}
        >
          {courses.map((course, index) => (
            <Grid item xs={12} sm={4} key={index}>
              <Card
                sx={{
                  backgroundColor: "#EDEDED",
                  textAlign: "center",
                  py:5,
                  fontSize: { xs: "16px", md: "18px" },
                  fontWeight: "bold",
                  borderRadius: 2,
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                  "&:hover": { backgroundColor: "#DCDCDC", cursor: "pointer" },
                }}
              >
                {course.name}
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Footer />
    </Grid>
  );
};

export default App;