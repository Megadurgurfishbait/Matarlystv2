/* eslint-disable implicit-arrow-linebreak */
import React from 'react';
import { NextSeo } from 'next-seo';

import { SiteURL } from '@/Routes';
import { images } from '@/FakeData';
import { drykkir } from '../db.json';

import { Layout } from '../Layouts/Layout';
import { ShowDesktopContext } from '../Context/ShowDesktop';
import { MenuTab } from '../components/MenuTab/MenuTab';
import { MenuForPhones } from '../components/MenuForPhones/MenuForPhones';
import conf from '../../next-seo.config';

const Drykkjarsedill: React.FC<{}> = () => {
  const { isPhone } = React.useContext(ShowDesktopContext);
  const SEO = {
    title: `${conf.title} | Drykkir`,
    description: `Drykkir sem hægt er að kaupa á Kaffi Matarlyst`,
    canonical: `${SiteURL}/drykkjarsida`,
    openGraph: {
      title: `Drykkir`,
      description: `Drykkir sem hægt er að kaupa á Kaffi Matarlyst`,
    },
  };
  return (
    <>
      <NextSeo {...SEO} />
      {isPhone ? (
        <MenuForPhones />
      ) : (
        <Layout images={images}>
          <MenuTab isFood={false} Map={drykkir} />
        </Layout>
      )}
    </>
  );
};
export default Drykkjarsedill;
