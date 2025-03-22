import React from 'react';
import { Box, Typography, Grid, Button } from '@mui/material';
import Header from './Header';
import Footer from './Footer';

const AboutUs = () => {
  return (
      <Grid>
        <Header/>
          <Box sx={{ p: { xs: 2, md: 6 }, mt: 4 }}>
          <Typography variant="h3" sx={{ fontWeight: 'bold', mb: 3, textAlign: 'center' }}>
            TOP PU COLLEGES IN BANGALORE
          </Typography>
          <Typography variant="body1" sx={{ mb: 2, textAlign: 'center' }}>
            Welcome to our website – your trusted platform dedicated to helping students discover the top
            Pre-University colleges in Bangalore. In today’s competitive academic landscape, choosing the
            right institution is crucial to shaping your future. We understand that the journey from school
            to higher education is filled with decisions that can define your career and personal growth.
          </Typography>
          <Typography variant="body1" sx={{ mb: 2, textAlign: 'center' }}>
            Our platform highlights some of the most esteemed PU colleges including Christ PU College, SSMRV
            PU College, NMKRV PU College, RV PU College, Mount Carmel PU College, Presidency PU College, Ramaiah
            Composite Pre-University College, Narayana PU College, Jnana Jyothi PU College, and St Vincent Pallotti
            PU College. These institutions are renowned for their robust state board curriculum, modern facilities,
            and dedicated faculty – all of which play a vital role in nurturing the academic potential and
            holistic development of students.
          </Typography>
          <Typography variant="body1" sx={{ mb: 2, textAlign: 'center' }}>
            We believe that the right educational environment can unlock your true potential.
            Our in-depth profiles, expert insights, and up-to-date information empower you to make informed
            decisions about your education. We are here to bridge the gap between aspirations and achievements,
            ensuring that you have the guidance needed to excel in your academic journey.
          </Typography>
          <Typography variant="body1" sx={{ mb: 2, textAlign: 'center' }}>
            Join us and explore the opportunities that these top PU colleges offer. Your future starts with the
            right decision today – let us help you take that first step towards academic excellence.
          </Typography>
          <Grid container justifyContent="center" sx={{ mt: 4 }}>
            <Button variant="contained" color="primary" size="large" href="https://www.getmycollege.com/about-us" target="_blank">
              Know More
            </Button>
          </Grid>
              </Box>
        <Footer/>
      </Grid>
  );
};

export default AboutUs;
