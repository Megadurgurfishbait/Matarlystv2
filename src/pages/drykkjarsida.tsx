/* eslint-disable implicit-arrow-linebreak */
import React from 'react';

import { drykkir } from '../db.json';
import { images } from '../FakeData';
import { Layout } from '../Layouts/Layout';
import { ShowDesktopContext } from '../Context/ShowDesktop';
import { MenuTab } from '../components/MenuTab/MenuTab';
import { MenuForPhones } from '../components/MenuForPhones/MenuForPhones';

const Drykkjarsedill: React.FC<{}> = () => {
  const { isPhone } = React.useContext(ShowDesktopContext);

  return (
    <>
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
