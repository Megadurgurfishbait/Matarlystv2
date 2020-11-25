import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { Carousel, Footer, Header, MenuForPhones, MenuTab } from '@/components';
import * as FakeData from '@/db.json';
import { Layout } from '@/Layouts';
import { images } from '@/FakeData';
import { Box } from 'grommet';
import { GlobalStyle } from '@/Styles';

const Drykkjarsedill: React.FC<{}> = () => {
  const [showPhone, setShowPhone] = React.useState<boolean>(false);

  const phoneSize = useMediaQuery({
    query: `(max-device-width: 600px)`,
  });
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
          <Footer />
        </>
      ) : (
        <Layout
          PhotoContainer={<Carousel seconds={8} images={images} />}
          TextContainer={<MenuTab MapType="Drykkir" Map={FakeData.drykkir} />}
        />
      )}
    </Box>
  );
};
export default Drykkjarsedill;
