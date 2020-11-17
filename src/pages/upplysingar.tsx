/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-confusing-arrow */
/* eslint-disable arrow-body-style */
import React from 'react';

import { Layout } from '@/Layouts';
import { Carousel, Upplysingar as Info } from '@/components';

import * as FakeData from '../FakeData';

const Upplysingar: React.FC<{}> = () => (
  <Layout
    PhotoContainer={<Carousel seconds={8} images={FakeData.images} />}
    TextContainer={<Info />}
  />
);

export default Upplysingar;
