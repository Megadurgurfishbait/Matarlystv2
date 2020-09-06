// pages/_app.js
import 'mapbox-gl/dist/mapbox-gl.css';

export default function MyApp({ Component, pageProps }) {
  // eslint-disable-next-line react/react-in-jsx-scope
  return <Component {...pageProps} />;
}
