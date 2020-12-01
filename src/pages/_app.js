// pages/_app.js

import React from 'react';
import config from 'react-reveal/globals';

import { GlobalStyle } from '../Styles';
import { Header, Footer } from '../components';
import ShowDesktopContextProvider from '../Context/ShowDesktop';

config({ ssrFadeout: true });

export default function MyApp({ Component, pageProps }) {
  // eslint-disable-next-line react/react-in-jsx-scope
  return (
    <ShowDesktopContextProvider>
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
