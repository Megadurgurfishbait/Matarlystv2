import React from 'react';
// Components
import { Carousel, Header, Footer } from '@/components';
import { Box } from 'grommet';
import { Layout } from '@/Layouts/';

// Harry Styles
import { GlobalStyle } from '@/Styles';

const { HomeImages } = require(`@/FakeData`);
// eslint-disable-next-line import/no-extraneous-dependencies

const Home: React.FC<{}> = () => (
  <Box className="container" align="start" height="100vh">
    <GlobalStyle />
    <Header />
    <Carousel fill seconds={7} images={HomeImages} />
    <Footer />
  </Box>
);

export default Home;
