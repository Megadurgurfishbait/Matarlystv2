/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-confusing-arrow */
/* eslint-disable arrow-body-style */
import React from 'react';

import { Layout } from '@/Layouts';
import { Info } from '@/components';

const Upplysingar: React.FC = () => (
  <Layout images={[`/Restaurant2.jpg`, `/haed-matur.jpg`]}>
    <Info />
  </Layout>
);

export default Upplysingar;
