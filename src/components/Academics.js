import React from 'react';
import { Box, Typography, Grid, Card, CardContent, CardActionArea, Button } from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Header from './Header';
import Footer from './Footer';

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

const courses = [
  { title: 'Engineering', description: 'Innovative courses in mechanical, electrical, and computer science.' },
  { title: 'Medicine', description: 'Cutting-edge programs for aspiring doctors and healthcare professionals.' },
  { title: 'Management', description: 'Comprehensive business management, marketing, and entrepreneurship courses.' },
  { title: 'Law', description: 'Programs for future legal experts with a focus on practical training.' },
  { title: 'Arts', description: 'Creative courses in fine arts, literature, and design.' },
  { title: 'Science', description: 'Robust courses in physics, chemistry, biology, and environmental studies.' },
];

const Academics = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: true,
    responsive: [
      { breakpoint: 960, settings: { slidesToShow: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 1 } }
    ]
  };

  return (
    <>
      <Header />
      <Box sx={{ pt: 8, pb: 0, px: { xs: 2, md: 4 }, backgroundColor: 'white', minHeight: '100vh' }}>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#4B5320' }}>
            Colleges for PU in Bangalore
          </Typography>
          <Typography variant="body1" sx={{ color: '#4B5320', mt: 1 }}>
            Discover the leading Pre-University colleges that set the benchmark for academic excellence in Bangalore.
          </Typography>
        </Box>

        <Grid container spacing={3} sx={{ mx: 'auto', mb: 9, px: { xs: 2, md: 10 } }}>
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
                  <CardContent sx={{ textAlign: 'center', p: 6 }}>
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
        <Box sx={{ maxWidth: 1000, mx: 'auto', mb: 6 }}>
          <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#4B5320', textAlign: 'center', mb: 2 }}>
            Featured Courses
          </Typography>
          <Slider {...sliderSettings}>
            {courses.map((course, index) => (
              <Box key={index} sx={{ px: 1 }}>
                <Box sx={{
                  backgroundColor: 'whitesmoke',
                  color: '#4B5320',
                  p: 4,
                  borderRadius: 2,
                  minHeight: 130,
                  textAlign: 'center',
                  boxShadow: 3,
                  '&:hover': { transform: 'scale(1.1)', boxShadow: '0 10px 20px rgba(0, 0, 0, 0.5)' }
                }}>
                  <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                    {course.title}
                  </Typography>
                  <Typography variant="body2">{course.description}</Typography>
                </Box>
              </Box>
            ))}
          </Slider>

        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default Academics;
