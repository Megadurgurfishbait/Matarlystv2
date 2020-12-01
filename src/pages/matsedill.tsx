import React from 'react';
import { matsedill } from '@/db.json';
import { images } from '@/FakeData';
import { ShowDesktopContext } from '@/Context/ShowDesktop';
// Components
import { Layout } from '@/Layouts/Layout';
import { MenuTab } from '../components/MenuTab/MenuTab';
import { MenuForPhones } from '../components/MenuForPhones/MenuForPhones';

//  Harry Styles

const Menu: React.FC<{}> = () => {
  const { isPhone } = React.useContext(ShowDesktopContext);
  return (
    <>
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
