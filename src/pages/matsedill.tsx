/* eslint-disable no-confusing-arrow */
import React from 'react';

// Components
import { Carousel, Header, MenuTab } from '@/components';
import { Box } from 'grommet';
import { Layout } from '@/Layouts';

//  Harry Styles
import { GlobalStyle } from '@/Styles';

import * as FakeData from '@/FakeData';
import { useMediaQuery } from 'react-responsive';
import { MenuForPhones } from '@/components/MenuForPhones';

const Menu: React.FC<{}> = () => {
  const isTabletOrMobileDevice = useMediaQuery({
    query: `(max-device-width: 1000px)`,
  });

  const ShowCarousel = (): any =>
    // eslint-disable-next-line implicit-arrow-linebreak
    isTabletOrMobileDevice ? null : (
      <Carousel seconds={8} images={FakeData.images} />
    );

  return (
    <Box fill="vertical">
      <GlobalStyle />
      {isTabletOrMobileDevice ? (
        <>
          <Header />
          <MenuForPhones />
        </>
      ) : (
        <Layout
          PhotoContainer={<ShowCarousel />}
          TextContainer={
            <MenuTab
              Matsedill={FakeData.Matsedill}
              Matsedill2={FakeData.Matsedill2}
            />
          }
        />
      )}
    </Box>
  );
};

export default Menu;
