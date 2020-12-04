import React from 'react';
import { NextSeo } from 'next-seo';
import { matsedill } from '@/db.json';
import { ShowDesktopContext } from '@/Context/ShowDesktop';
// Components
import { Layout } from '@/Layouts/Layout';
import { SiteURL } from '@/Routes';
import { MenuTab } from '../components/MenuTab/MenuTab';
import { MenuForPhones } from '../components/MenuForPhones/MenuForPhones';
import conf from '../../next-seo.config';
//  Harry Styles

const Menu: React.FC<{}> = () => {
  const { isPhone } = React.useContext(ShowDesktopContext);

  const SEO = {
    title: `${conf.title} | Matseðill`,
    description: `Matseðill okkar á Kaffi Matarlyst`,
    canonical: `${SiteURL}/matsedill`,
    openGraph: {
      title: `${conf.title} | Matseðill`,
      description: `Matseðili okkar á Kaffi Matarlyst`,
    },
  };
  return (
    <>
      <NextSeo {...SEO} />
      {isPhone ? (
        <MenuForPhones />
      ) : (
        <Layout images={[`/static/Restaurant2.jpg`, `/static/haed-matur.jpg`]}>
          <MenuTab isFood Map={matsedill} />
        </Layout>
      )}
    </>
  );
};

export default Menu;
