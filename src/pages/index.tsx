import React from 'react';
// Components
import { Carousel, Header, Footer } from '@/components';
import { Loading } from '@/Layouts';
import { Box } from 'grommet';

// Harry Styles
import { GlobalStyle } from '@/Styles';

const { HomeImages } = require(`@/FakeData`);
// eslint-disable-next-line import/no-extraneous-dependencies

const Home: React.FC<{}> = () => (
  <Box
    style={{ position: `relative` }}
    className="container"
    align="start"
    height="100vh"
  >
    <GlobalStyle />
    <Loading />

    <link
      href="https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400&family=Roboto+Mono:wght@100;200;300;400&family=Roboto:wght@100;300;400&display=swap"
      rel="stylesheet"
    />
    <Header />
    <Carousel fill seconds={7} images={HomeImages} />
    <Footer />
  </Box>
);

export default Home;
