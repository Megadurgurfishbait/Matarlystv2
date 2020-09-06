/* eslint-disable no-confusing-arrow */
import React from 'react';

// Components
import { Carousel, MenuTab } from '@/components';
import { Box } from 'grommet';
import { Layout } from '@/Layouts';

//  Harry Styles
import { GlobalStyle } from '@/Styles';

import * as FakeData from '@/FakeData';
import { useMediaQuery } from 'react-responsive';

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
      <Layout
        PhotoContainer={<ShowCarousel />}
        TextContainer={<MenuTab Matsedill={FakeData.Matsedill} />}
      />
    </Box>
  );
};

export default Menu;
