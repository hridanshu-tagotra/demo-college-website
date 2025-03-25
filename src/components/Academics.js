import React from 'react';
import { Box, Typography, Grid, Card, CardContent, CardActionArea } from '@mui/material';
import Header from './Header';
import Footer from './Footer';
import Bomer from "../assets/bommer.jpg"; // Ensure the path is correct


const colleges = [
  { name: 'Christ PU College', location: 'Bangalore', details: 'A premier institution known for academic excellence and holistic development.', link: 'https://www.getmycollege.com/college/bangalore/christ-pu-college' },
  { name: 'SSMRV PU College', location: 'Bangalore', details: 'Offers innovative teaching methodologies and excellent faculty.', link: 'https://www.getmycollege.com/college/bangalore/ssmrv-pu-college' },
  { name: 'NMKRV PU College', location: 'Bangalore', details: 'Empowers students with a strong foundation in academics and extracurricular activities.', link: 'https://www.getmycollege.com/college/bangalore/nmkrv-pu-college' },
  { name: 'RV PU College', location: 'Bangalore', details: 'A reputed institution known for its exceptional academic standards.', link: 'https://www.getmycollege.com/college/bangalore/rv-pu-college' },
  { name: 'Mount Carmel PU College', location: 'Bangalore', details: 'A leading PU college with an emphasis on discipline and leadership.', link: 'https://www.getmycollege.com/college/bangalore/mount-carmel-pu-college' },
  { name: 'Presidency PU College', location: 'Bangalore', details: 'Known for its student-centric learning approach and strong curriculum.', link: 'https://www.getmycollege.com/college/bangalore/presidency-pu-college' },
  { name: 'Ramaiah Composite PU College', location: 'Bangalore', details: 'An institute that fosters excellence in science and commerce streams.', link: 'https://www.getmycollege.com/college/bangalore/ramaiah-composite-pu-college' },
  { name: 'Narayana PU College', location: 'Bangalore', details: 'Provides an extensive curriculum focused on competitive exam preparation.', link: 'https://www.getmycollege.com/college/bangalore/narayana-pu-college' },
];

const Academics = () => {
  return (
    <>
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
      <Box sx={{ pt: 8, pb: 0, px: { xs: 2, md: 4 }, backgroundColor: 'white'}}>
      <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#4B5320' }}>
            Colleges for PU in Bangalore
          </Typography>
          <Typography variant="body1" sx={{ color: '#4B5320', mt: 1 }}>
            Discover the leading Pre-University colleges that set the benchmark for academic excellence in Bangalore.
          </Typography>
        </Box>

        <Grid container spacing={3} sx={{ mx: 'auto', mb: 0, px: { xs: 2, md: 10 } }}>
        {colleges.map((college, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card sx={{
                backgroundColor: 'whitesmoke',
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.36)',
                borderRadius: 2,
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.05)',
                  boxShadow: '0 10px 20px rgba(0, 0, 0, 0.43)',
                }
              }}>
                <CardActionArea onClick={() => window.open(college.link, '_blank')}>
                  <CardContent sx={{ textAlign: 'center', p: 3 }}>
                    <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1, color: '#4B5320' }}>
                      {college.name}
                    </Typography>
                    <Typography variant="subtitle2" sx={{ color: '#4B5320', mb: 1 }}>
                      {college.location}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#4B5320' }}>
                      {college.details}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Footer />
    </>
  );
};

export default Academics;