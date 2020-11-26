import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { MenuForPhones, MenuTab } from '@/components';
import * as FakeData from '@/db.json';
import { Layout } from '@/Layouts';
import { images } from '@/FakeData';

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
    <>
      {showPhone ? (
        <>
          <MenuForPhones />
        </>
      ) : (
        <Layout images={images}>
          <MenuTab isFood={false} Map={FakeData.drykkir} />
        </Layout>
      )}
    </>
  );
};
export default Drykkjarsedill;
