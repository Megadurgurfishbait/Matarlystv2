/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-confusing-arrow */
/* eslint-disable arrow-body-style */
import React from 'react';
import { NextSeo } from 'next-seo';
import { images } from '@/ImageData';
import { Layout } from '@/Layouts';
import { Info } from '@/components';
import { SiteURL } from '@/Routes';
import conf from '../../next-seo.config';

const Upplysingar: React.FC = () => {
  const SEO = {
    title: `${conf.title} | Upplýsingar`,
    description: `Opnunartími og staðsetning Kaffi Matarlyst`,
    canonical: `${SiteURL}/matsedill`,
    openGraph: {
      title: `${conf.title} | Upplýsingar`,
      description: `Opnunartími og staðsetning Kaffi Matarlyst`,
    },
  };
  return (
    <Layout images={images}>
      <NextSeo {...SEO} />
      <Info />
    </Layout>
  );
};

export default Upplysingar;
