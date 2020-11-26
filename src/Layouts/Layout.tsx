import React from 'react';

// Components
import { Footer, Header } from '@/components';

import { Carousel } from '../components/Carousel/Carousel';

// Harry Styles
import * as L from './Layout.styled';

export const Layout: React.FC<{ images?: string[] }> = ({
  images,
  children,
}) => (
  <L.Vertical>
    <Header />
    <L.Horizontal>
      {children && <L.StyledBox>{children}</L.StyledBox>}
      <L.StyledBox>{images && <Carousel images={images} />}</L.StyledBox>
    </L.Horizontal>
    <Footer />
  </L.Vertical>
);
