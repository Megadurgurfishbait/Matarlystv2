import React from 'react';
import config from 'react-reveal/globals';
import { DefaultSeo, SocialProfileJsonLd, LocalBusinessJsonLd } from 'next-seo';
import { GlobalStyle } from '../Styles';
import { Header, Footer } from '../components';
import ShowDesktopContextProvider from '../Context/ShowDesktop';
import { SiteURL } from '../Routes';
import SEO from '../../next-seo.config';

config({ ssrFadeout: true });

export default function MyApp({ Component, pageProps }) {
  // eslint-disable-next-line react/react-in-jsx-scope
  return (
    <ShowDesktopContextProvider>
      <DefaultSeo
        {...SEO}
        languageAlternates={[{ href: `${SiteURL}`, hrefLang: 'is' }]}
      />
      <SocialProfileJsonLd
        type="Organization"
        name="Kaffi Matarlyst"
        url={`${SiteURL}`}
        sameAs={[
          'https://www.instagram.com/matarlyst.cafe.bar.restaurant/',
          'https://www.facebook.com/Matarlyst-Caf%C3%A9-Bar-Restaurant-107006814510537',
        ]}
      />
      <LocalBusinessJsonLd
        type="Restaurant"
        id={`${SiteURL}`}
        name="Kaffi Matarlyst"
        description="Veitingastaður við aðalgötu Selfossbæjar"
        url={`${SiteURL}/upplysingar`}
        telephone="+3547931952"
        address={{
          streetAddress: 'Austurvegur 35',
          addressCountry: 'IS',
          postalCode: '800',
          addressRegion: 'Árborg',
          addressLocality: 'Selfoss',
        }}
        geo={{
          latitude: '63.9374',
          longitude: '-20.9925',
        }}
        images={[`${SiteURL}/static/logo.png`]}
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Raleway:wght@100;400&family=Roboto:wght@100;400&display=swap"
        rel="dns-prefetch"
        async
      />

      <GlobalStyle />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </ShowDesktopContextProvider>
  );
}
