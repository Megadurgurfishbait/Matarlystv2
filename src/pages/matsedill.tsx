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
  const [showPhone, setShowPhone] = React.useState<boolean>(false);

  const isTabletOrMobileDevice = useMediaQuery({
    query: `(max-device-width: 600px)`,
  });

  const ShowCarousel = (): any =>
    // eslint-disable-next-line implicit-arrow-linebreak
    isTabletOrMobileDevice ? null : (
      <Carousel seconds={8} images={FakeData.images} />
    );
  // Nauðsynlegt, ef að það er refreshað á /Matsedil í síma kemur layout inn.
  // Svona komumst við hjá því að render'a það því NextJS er serverside renderað fyrst
  // og runnar Layout Kóðan alltaf fyrst
  React.useEffect(() => {
    if (isTabletOrMobileDevice) {
      setShowPhone(true);
    }
  }, [showPhone]);
  return (
    <Box fill="vertical">
      <GlobalStyle />
      {showPhone ? (
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
