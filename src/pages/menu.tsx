import React from 'react';

// Components
import { Box } from 'grommet';
import { Carousel, MenuTab } from '@/components';
import { Layout } from '@/Layouts';

//  Harry Styles
import { GlobalStyle } from '../Styles';

import * as FakeData from '../FakeData';

const Menu: React.FC<{}> = () => (
  <Box fill="vertical">
    <GlobalStyle />
    <Layout
      PhotoContainer={<Carousel seconds={8} images={FakeData.images} />}
      TextContainer={<MenuTab Matsedill={FakeData.Matsedill} />}
    />
  </Box>
);

export default Menu;
