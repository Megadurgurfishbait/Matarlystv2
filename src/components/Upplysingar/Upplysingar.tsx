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
  latitude: 63.9373,
  longitude: -20.992,
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
          <div />
        </Marker>
      </MapGL>
    </U.MapBox>
  </U.Container>
);
