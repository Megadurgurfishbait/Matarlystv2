import React from 'react';

// Components
import { Box } from 'grommet';
import { Layout } from '@/Layouts/';
import { Carousel } from '@/components';

// Harry Styles
import { GlobalStyle } from '../Styles';

const images = ['/images/land-pic1.jpg', '/images/land-pic2.jpg'];

const Home: React.FC<{}> = () => (
  <Box className="container" align="start" height="100vh">
    <GlobalStyle />
    <Layout PhotoContainer={<Carousel fill seconds={7} images={images} />} />
  </Box>
);

export default Home;
