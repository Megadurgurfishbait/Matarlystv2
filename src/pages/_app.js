// pages/_app.js

import React from 'react';
import config from 'react-reveal/globals';
import 'mapbox-gl/dist/mapbox-gl.css';
import 'infinite-react-carousel/lib/carousel/style.css';
import { GlobalStyle } from '../Styles';
import { Header, Footer } from '../components';

config({ ssrFadeout: true });

export default function MyApp({ Component, pageProps }) {
  // eslint-disable-next-line react/react-in-jsx-scope
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400&family=Roboto+Mono:wght@100;200;300;400&family=Roboto:wght@100;300;400&display=swap"
        rel="stylesheet"
      />
      <GlobalStyle />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
