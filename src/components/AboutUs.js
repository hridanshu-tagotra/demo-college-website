import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Grid, Box, Typography, Card } from "@mui/material";
import Bomer from "../assets/bommer.jpg"; // Ensure the path is correct

const courses = [
 
];

const App = () => {
  // Unified description for both types of courses
  const unifiedDescription = `❝ Welcome to our website – your trusted platform dedicated to helping students discover the top Pre-University colleges in Bangalore. In today’s competitive academic landscape, choosing the right institution is crucial to shaping your future. We understand that the journey from school to higher education is filled with decisions that can define your career and personal growth.

We believe that the right educational environment can unlock your true potential. Our in-depth profiles, expert insights, and up-to-date information empower you to make informed decisions about your education. We are here to bridge the gap between aspirations and achievements, ensuring that you have the guidance needed to excel in your academic journey.

Join us and explore the opportunities that these top PU colleges offer. Your future starts with the right decision today – let us help you take that first step towards academic excellence. ❞`;

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
          TOP PU COLLEGES IN BANGALORE
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
        <Box sx={{ textAlign: "center", mb: 4, px: { xs: 2, md: 0 } }}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
              color: "#333",
              fontSize: { xs: "24px", md: "32px" },
            }}
          >
            Get to know about Top PU Colleges in Bangalore for Science and Arts
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