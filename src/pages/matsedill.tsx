import React from 'react';
import { useMediaQuery } from 'react-responsive';

// Components
import { Carousel, Header, MenuTab, MenuForPhones } from '@/components';
import { Box } from 'grommet';
import { Layout } from '@/Layouts';

//  Harry Styles
import { GlobalStyle } from '@/Styles';

import * as FakeData from '@/db.json';
import { images } from '@/FakeData';

const Menu: React.FC<{}> = () => {
  const [showPhone, setShowPhone] = React.useState<boolean>(false);

  const phoneSize = useMediaQuery({
    query: `(max-device-width: 600px)`,
  });

  // Nauðsynlegt, ef að það er refreshað á /Matsedil í síma kemur layout inn.
  // Svona komumst við hjá því að render'a það því NextJS er serverside renderað fyrst
  // og runnar Layout Kóðan alltaf fyrst
  React.useEffect(() => {
    if (phoneSize) {
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
          PhotoContainer={<Carousel seconds={8} images={images} />}
          TextContainer={<MenuTab Matsedill={FakeData.matsedill} />}
        />
      )}
    </Box>
  );
};

export default Menu;
