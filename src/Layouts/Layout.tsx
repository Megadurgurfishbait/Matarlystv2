import React from 'react';

// Components

import { ShowDesktopContext } from '@/Context/ShowDesktop';
import { Carousel } from '../components/Carousel/Carousel';

// Harry Styles
import * as L from './Layout.styled';

export const Layout: React.FC<{ images?: string[] | undefined }> = ({
  images,
  children,
}) => {
  const { isDesktop } = React.useContext(ShowDesktopContext);

  return (
    <L.Vertical>
      <L.Horizontal>
        {children && <L.StyledBox>{children}</L.StyledBox>}

        {isDesktop && (
          <L.StyledBox style={{ maxWidth: `50vw` }}>
            <Carousel homePage={false} images={images} />
          </L.StyledBox>
        )}
      </L.Horizontal>
    </L.Vertical>
  );
};
