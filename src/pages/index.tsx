import React from 'react';
// Components

import { Horizontal } from '../Styles';
import { Carousel } from '../components/Carousel/Carousel';

import { HomeImages } from '../FakeData';
// eslint-disable-next-line import/no-extraneous-dependencies

const Home: React.FC<{}> = () => (
  <Horizontal>
    {/* <Loading /> */}

    <Carousel homePage images={HomeImages} />
  </Horizontal>
);

export default Home;
