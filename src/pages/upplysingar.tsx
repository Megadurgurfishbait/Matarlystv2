/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-confusing-arrow */
/* eslint-disable arrow-body-style */
import React from 'react';
import { useMediaQuery } from 'react-responsive';

import { Layout } from '@/Layouts';
import { Carousel, Upplysingar as Info } from '@/components';

import * as FakeData from '../FakeData';

const Upplysingar: React.FC<{}> = () => {
  const isTabletOrMobileDevice = useMediaQuery({
    query: `(max-device-width: 1000px)`,
  });

  const ShowCarousel = (): any =>
    isTabletOrMobileDevice ? null : (
      <Carousel seconds={8} images={FakeData.images} />
    );

  return <Layout PhotoContainer={<ShowCarousel />} TextContainer={<Info />} />;
};

export default Upplysingar;
