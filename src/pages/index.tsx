import React from 'react';
// Components
import { Carousel } from '@/components';
import { Box } from 'grommet';
import { Layout } from '@/Layouts/';

// Harry Styles
import { GlobalStyle } from '@/Styles';

const { HomeImages } = require(`@/FakeData`);
// eslint-disable-next-line import/no-extraneous-dependencies

const Home: React.FC<{}> = () => (
  <Box className="container" align="start" height="100vh">
    <GlobalStyle />
    <Layout
      PhotoContainer={<Carousel fill seconds={7} images={HomeImages} />}
    />
  </Box>
);

export default Home;
