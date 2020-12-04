import React from 'react';
import { NextSeo } from 'next-seo';
import { matsedill } from '@/db.json';
import { images } from '@/FakeData';
import { ShowDesktopContext } from '@/Context/ShowDesktop';
// Components
import { Layout } from '@/Layouts/Layout';
import { MenuTab } from '../components/MenuTab/MenuTab';
import { MenuForPhones } from '../components/MenuForPhones/MenuForPhones';
import conf from '../../next-seo.config';
//  Harry Styles

const Menu: React.FC<{}> = () => {
  const { isPhone } = React.useContext(ShowDesktopContext);

  const SEO = {
    title: `${conf.title} | Matseðill`,
    description: `Matseðillinn okkar`,
    openGraph: {
      title: `${conf.title} | Matseðill`,
      description: `Matseðilinn okkar`,
    },
  };
  return (
    <>
      <NextSeo {...SEO} />
      {isPhone ? (
        <MenuForPhones />
      ) : (
        <Layout images={images}>
          <MenuTab isFood Map={matsedill} />
        </Layout>
      )}
    </>
  );
};

export default Menu;
