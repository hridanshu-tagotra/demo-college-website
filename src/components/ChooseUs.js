import React from 'react';
import { Box, Grid, Typography, Paper } from '@mui/material';
import VerifiedIcon from '@mui/icons-material/Verified';
import StarIcon from '@mui/icons-material/Star';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';

const features = [
  {
    title: "Expert Guidance",
    description:
      "Receive personalized advice from industry experts to help you choose the best college for your future.",
    icon: <VerifiedIcon sx={{ fontSize: 40, color: '#4B5320' }} />,
  },
  {
    title: "Comprehensive Information",
    description:
      "Access in-depth profiles, reviews, and insights on top PU colleges to make an informed decision.",
    icon: <StarIcon sx={{ fontSize: 40, color: '#4B5320' }} />,
  },
  {
    title: "Ongoing Support",
    description:
      "Join a supportive community that offers guidance throughout your academic journey.",
    icon: <SupportAgentIcon sx={{ fontSize: 40, color: '#4B5320' }} />,
  },
];

const ChooseUs = () => {
  return (
    <Box sx={{ backgroundColor: '#f0f0f0', paddingTop: 7,paddingBottom:15, px: 2 }}>
      <Typography
        variant="h4"
        align="center"
        sx={{ mb: 4, fontWeight: 'bold', color: '#4B5320' }}
      >
        Why Choose Us
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {features.map((feature, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Paper
              elevation={3}
              sx={{
                p: 3,
                textAlign: 'center',
                borderRadius: 2,
                height: '100%',
                transition: 'transform 0.3s, box-shadow 0.3s',
                "&:hover": {
                  transform: "scale(1.03)",
                  boxShadow: 6,
                },
              }}
            >
              <Box sx={{ mb: 2 }}>{feature.icon}</Box>
              <Typography
                variant="h6"
                sx={{ mb: 1, fontWeight: 'bold', color: '#4B5320' }}
              >
                {feature.title}
              </Typography>
              <Typography variant="body2" sx={{ color: '#555' }}>
                {feature.description}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ChooseUs;
