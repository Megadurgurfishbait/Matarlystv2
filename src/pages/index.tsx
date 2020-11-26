import React from 'react';
// Components

import { Horizontal } from '@/Styles';
import { Carousel } from '@/components/Carousel/Carousel';

const { HomeImages } = require(`@/FakeData`);
// eslint-disable-next-line import/no-extraneous-dependencies

const Home: React.FC<{}> = () => (
  <Horizontal>
    {/* <Loading /> */}

    <Carousel images={HomeImages} />
  </Horizontal>
);

export default Home;
