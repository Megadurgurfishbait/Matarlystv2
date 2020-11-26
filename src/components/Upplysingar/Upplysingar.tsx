/* eslint-disable dot-notation */
/* eslint-disable jsx-a11y/label-has-associated-control */

import getConfig from 'next/config';
import dynamic from 'next/dynamic';
import React from 'react';

import * as U from './Upplysingar.styled';

const ReactMapGL = dynamic(() => import(`react-map-gl`), {
  ssr: false,
});

const Marker = dynamic(
  () => import(`react-map-gl`).then(module => module.Marker),
  {
    ssr: false,
  },
);

const location = {
  latitude: 63.9373,
  longitude: -20.992,
  offsetLeft: -20,
  offsetTop: -20,
};

const { publicRuntimeConfig } = getConfig();

export const Upplysingar: React.FC<{}> = () => {
  const [viewport, setViewport] = React.useState({
    height: 400,
    width: 400,
    latitude: 63.9373,
    longitude: -20.992,
    zoom: 15,
  });

  return (
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
        <ReactMapGL
          mapboxApiAccessToken={publicRuntimeConfig.MAP_ID}
          width="100%"
          height="100%"
          {...viewport}
          onViewportChange={nextViewport => setViewport(nextViewport)}
          className="MAP"
        >
          <Marker {...location}>
            <U.Location color={U.LocationIconColor} size="medium" />
          </Marker>
        </ReactMapGL>
      </U.MapBox>
    </U.Container>
  );
};
