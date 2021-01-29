import React from 'react';
import { Layout } from '@/Layouts';
import styled from 'styled-components';
import { images } from '@/FakeData';
import { Colors, Vertical } from '@/Styles';
import { NextSeo } from 'next-seo';
import { SiteURL } from '@/Routes';
import conf from '../../next-seo.config';

const Stadurinn: React.FC<{}> = () => {
  const SEO = {
    title: `${conf.title} | Staðurinn`,
    description: `Um Kaffi Matarlyst`,
    canonical: `${SiteURL}/matsedill`,
    openGraph: {
      title: `Drykkir`,
      description: `Um Kaffi Matarlyst`,
    },
  };
  return (
    <Layout images={images}>
      <NextSeo {...SEO} />
      <Container>
        <div>
          <h1 style={{ marginBottom: `50px`, textAlign: `center` }}>
            Kaffi Matarlyst
          </h1>
          <p>
            Fallegur og notalegur staður við aðalgötuna á Selfossi. Leggjum
            mikinn metnað í mat okkar sem skilar sér í listrænum og fallegum
            diskum sem bragðast eins síðasta máltíð Jesú krists.
          </p>
          <p>
            Leggjum upp með að hafa samkeppnishæf verð sem að kemur ekki niður á
            gæði matarins sem að við framreiðum með ást og alúð.
          </p>
        </div>
      </Container>
    </Layout>
  );
};
export default Stadurinn;

const Container = styled(Vertical)`
  justify-content: center;
  align-items: center;
  align-content: center;
  height: 100%;
  width: 50%;
  padding: 40px;
  margin: 15px auto;
  color: ${Colors.SECONDARY_COLOR};

  & > div {
    height: 500px;
  }
`;
