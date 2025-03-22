import React from "react";
import {
  Box,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
} from "@mui/material";
import Christ from "../assets/christ.jpg";
import united from "../assets/united.jpg";
import Ssm from "../assets/ssmrv.jpg";
import Rv from "../assets/rv.png";
import Carmel from "../assets/carmel.jpg";
import Nmk from "../assets/nmk.jpg";
import Nara from "../assets/nara.jpg";
import Presi from "../assets/presi.png";
import Rama from "../assets/rama.png";
import AMC from "../assets/amc.png";
import Jnana from "../assets/jnana.jpg";
import Vin from "../assets/vincent.jpg";

const colleges = [
  {
    id: 1,
    name: "Christ PU College",
    image: Christ,
    board: "State Board",
    gender: "Co-ed",
    link: "https://www.getmycollege.com/college/bangalore/christ-pu-college"
  },
  {
    id: 2,
    name: "SSMRV PU College",
    image: Ssm,
    board: "State Board",
    gender: "Co-ed",
    link: "https://www.getmycollege.com/college/bangalore/ssmrv-pu-college"
  },
  {
    id: 3,
    name: "United PU College",
    image: united,
    board: "State Board",
    gender: "Co-ed",
    link: "https://www.getmycollege.com/college/bangalore/united-pu-college%20/courses-and-fees"
  },
  {
    id: 4,
    name: "RV PU College",
    image: Rv,
    board: "State Board",
    gender: "Co-ed",
    link: "https://www.getmycollege.com/college/bangalore/rv-pu-college"
  },
  {
    id: 5,
    name: "Mount Carmel PU College",
    image: Carmel,
    board: "State Board",
    gender: "Girls",
    link: "https://www.getmycollege.com/college/bangalore/mount-carmel-pu-college"
  },
  {
    id: 6,
    name: "Presidency PU College",
    image: Presi,
    board: "State Board",
    gender: "Co-ed",
    link: "https://www.getmycollege.com/college/bangalore/presidency-pu-college"
  },
  {
    id: 7,
    name: "Ramaiah Composite Pre-University College",
    image: Rama,
    board: "State Board",
    gender: "Co-ed",
    link: "https://www.getmycollege.com/college/bangalore/ramaiah-composite-pre-university-college"
  },
  {
    id: 8,
    name: "Narayana PU College",
    image: Nara,
    board: "State Board",
    gender: "Co-ed",
    link: "https://www.getmycollege.com/college/bangalore/narayana-pu-college"
  },
  {
    id: 9,
    name: "Jnana Jyothi PU College",
    image: Jnana,
    board: "State Board",
    gender: "Co-ed",
    link: "https://www.getmycollege.com/college/bangalore/jnana-jyothi-pu-college"
  },
  {
    id: 10,
    name: "St Vincent Pallotti PU College",
    image: Vin,
    board: "State Board",
    gender: "Co-ed",
    link: "https://www.getmycollege.com/college/bangalore/st-vincent-palloti-pu-college"
  },
  {
    id: 11,
    name: "AMC American PU College",
    image: AMC,
    board: "State Board",
    gender: "Co-ed",
    link: "https://www.getmycollege.com/college/bangalore/amc-american-pu-college"
  },
  {
    id: 12,
    name: "NMKRV PU College",
    image: Nmk,
    board: "State Board",
    gender: "Co-ed",
    link: "https://www.getmycollege.com/college/bangalore/nmkrv-pu-college"
  }
];

const CardSection = () => {
  return (
    <Box sx={{ textAlign: "center", py: 5, px: 2 }}>
      <Typography variant="h3" sx={{ mb: 4,fontWeight:'bolder' }}>
        Explore Top PU Colleges in Bangalore for Science
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {colleges.map((college) => (
          <Grid item xs={12} sm={6} md={3} key={college.id}>
            <Card
              sx={{
                borderRadius: 2,
                boxShadow: 3,
                transition: "transform 0.3s, box-shadow 0.3s",
                "&:hover": {
                  transform: "scale(1.03)",
                  boxShadow: 6,
                },
              }}
            >
              <CardMedia
                component="img"
                image={college.image}
                alt={college.name}
                sx={{
                  height: 180,
                  objectFit: "cover",
                }}
              />
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
                  {college.name}
                </Typography>
                <Grid container spacing={2} sx={{ mb: 2 }}>
                  <Grid item xs={6}>
                    <Box
                      sx={{
                        backgroundColor: "#F5F5F5",
                        p: 1,
                        borderRadius: 1,
                      }}
                    >
                      <Typography
                        variant="subtitle2"
                        sx={{ fontWeight: "bold" }}
                      >
                        Board
                      </Typography>
                      <Typography variant="caption">
                        {college.board}
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={6}>
                    <Box
                      sx={{
                        backgroundColor: "#F5F5F5",
                        p: 1,
                        borderRadius: 1,
                      }}
                    >
                      <Typography
                        variant="subtitle2"
                        sx={{ fontWeight: "bold" }}
                      >
                        Gender
                      </Typography>
                      <Typography variant="caption">
                        {college.gender}
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
                <Button
                  variant="contained"
                  fullWidth
                  sx={{
                    backgroundColor: "#4B5320",
                    color: "#FFF",
                    borderRadius: "4px",
                    "&:hover": {
                      backgroundColor: "#3E471B",
                    },
                  }}
                  onClick={() => window.open(college.link, "_blank", "noopener,noreferrer")}
                >
                  View College
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
        <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "#4B5320",
                      color: "#FFF",
                      borderRadius: "20px",
                      px: 3,
                      py: 1,
                      boxShadow: "none",
                      marginTop:'50px',
                      "&:hover": {
                        backgroundColor: "#3E471B",
                      },
                    }}
                    onClick={() => window.open("https://www.getmycollege.com/colleges/top-pu-colleges-in-bangalore", "_blank", "noopener,noreferrer")}>
                    Explore More
                  </Button>
      </Grid>
    </Box>
  );
};

export default CardSection;