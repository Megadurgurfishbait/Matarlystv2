/* eslint-disable dot-notation */
/* eslint-disable jsx-a11y/label-has-associated-control */

import getConfig from 'next/config';
import dynamic from 'next/dynamic';
import React from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
import * as U from './Upplysingar.styled';

const MapGL = dynamic(() => import(`@urbica/react-map-gl`), {
  ssr: false,
});

const Marker = dynamic(
  () => import(`@urbica/react-map-gl`).then(module => module.Marker),
  {
    ssr: false,
  },
);

const location = {
  latitude: 63.9374,
  longitude: -20.9925,
};
const { publicRuntimeConfig } = getConfig();

const settings = {
  mapStyle: `mapbox://styles/mapbox/light-v9`,
  accessToken: publicRuntimeConfig.MAP_ID,
  latitude: 63.9373,
  longitude: -20.992,
  zoom: 15,
};

export const Info: React.FC<{}> = () => (
  <U.Container>
    <U.StyledBox>
      <label>Sími og Póstur</label>
      <ul>
        <U.FlexDiv dir="column">
          <li>
            S<U.SPAN>:</U.SPAN> 846 1151
          </li>
          <li>
            P<U.SPAN>:</U.SPAN> Matarlyst@Matarlyst.is
          </li>
        </U.FlexDiv>
      </ul>
      <label>Opnunartími</label>
      <ul>
        <U.FlexDiv dir="row">
          <li>Mánudagur</li>
          <li>Lokað</li>
        </U.FlexDiv>
        <U.FlexDiv dir="row">
          <li>
            Þriðjudaga <U.SPAN>-</U.SPAN> Fimmtudags
          </li>
          <li>
            11:00 <U.SPAN>-</U.SPAN> 21:00
          </li>
        </U.FlexDiv>
        <U.FlexDiv dir="row">
          <li>
            Föstudagur <U.SPAN>-</U.SPAN> Sunnudags
          </li>
          <li>
            11:00 <U.SPAN>-</U.SPAN> 22:00
          </li>
        </U.FlexDiv>
      </ul>
      <label>Staðsetning</label>
      <ul>
        <li>Austurvegur 35</li>
        <li>800 Selfoss</li>
      </ul>
    </U.StyledBox>
    <U.MapBox>
      <MapGL {...settings}>
        <Marker {...location}>
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
          >
            <title>location</title>
            <path
              fill="#F89663"
              d="M16 0c-5.523 0-10 4.477-10 10 0 10 10 22 10 22s10-12 10-22c0-5.523-4.477-10-10-10zM16 16c-3.314 0-6-2.686-6-6s2.686-6 6-6 6 2.686 6 6-2.686 6-6 6z"
            />
          </svg>
        </Marker>
      </MapGL>
    </U.MapBox>
  </U.Container>
);
