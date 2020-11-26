import React from 'react';
import { useMediaQuery } from 'react-responsive';
import * as FakeData from '@/db.json';
import { images } from '@/FakeData';

// Components
import { MenuTab, MenuForPhones } from '@/components';
import { Layout } from '@/Layouts';

//  Harry Styles

const Menu: React.FC<{}> = () => {
  const [ShowDesktop, setShowDesktop] = React.useState<boolean>(true);

  const phoneSize = useMediaQuery({
    query: `(max-device-width: 800px)`,
  });

  // Nauðsynlegt, ef að það er refreshað á /Matsedil í síma kemur layout inn.
  // Svona komumst við hjá því að render'a það því NextJS er serverside renderað fyrst
  // og runnar Layout Kóðan alltaf fyrst
  React.useEffect(() => {
    if (phoneSize) {
      setShowDesktop(false);
    }
  }, [ShowDesktop]);
  return (
    <>
      {!ShowDesktop ? (
        <>
          <MenuForPhones />
        </>
      ) : (
        <Layout images={images}>
          <MenuTab isFood Map={FakeData.matsedill} />
        </Layout>
      )}
    </>
  );
};

export default Menu;
