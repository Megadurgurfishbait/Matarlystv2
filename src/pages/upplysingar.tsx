/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-confusing-arrow */
/* eslint-disable arrow-body-style */
import React from 'react';
import { NextSeo } from 'next-seo';

import { Layout } from '@/Layouts';
import { Info } from '@/components';
import conf from '../../next-seo.config';

const Upplysingar: React.FC = () => {
  const SEO = {
    title: `${conf.title} | Upplýsingar`,
    description: `Opnunartími og staðsetning`,
    openGraph: {
      title: `${conf.title} | Upplýsingar`,
      description: `Opnunartími og staðsetning`,
    },
  };
  return (
    <Layout images={[`/Restaurant2.jpg`, `/haed-matur.jpg`]}>
      <NextSeo {...SEO} />
      <Info />
    </Layout>
  );
};

export default Upplysingar;
