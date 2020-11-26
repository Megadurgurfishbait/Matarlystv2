/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-confusing-arrow */
/* eslint-disable arrow-body-style */
import React from 'react';

import { Layout } from '@/Layouts';
import { Upplysingar as Info } from '@/components';

import { images } from '../FakeData';

const Upplysingar: React.FC = () => (
  <Layout images={images}>
    <Info />
  </Layout>
);

export default Upplysingar;
