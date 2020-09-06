/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import { useMediaQuery } from 'react-responsive';

import { device, breakpoints } from '@/Styles/BP';
import * as U from './Upplysingar.styled';

const MAPBOX_TOKEN = `pk.eyJ1IjoibWVnYWR1cmd1cmZpc2hiYWl0IiwiYSI6ImNrZWlvYTRpazBtd3UyeHBkYzR4bjNoYjAifQ.UpAA-r5OSTVIPUMxwqCHHw`;

export const Upplysingar: React.FC<{}> = () => {
  const isTabletOrMobileDevice = useMediaQuery({
    query: `(max-device-width: ${breakpoints.tablet}px)`,
  });

  const isLaptop = useMediaQuery({
    query: `(max-device-width: ${breakpoints.large}px)`,
  });

  const isPhone = useMediaQuery({
    query: `(max-device-width: ${breakpoints.largePhone}px)`,
  });
  const [viewport, setViewport] = React.useState({
    latitude: 63.9373,
    longitude: -20.992,
    zoom: 15,
  });

  useEffect(() => {
    setViewport({
      ...viewport,
    });
  }, []);

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
            <li>
              Mánudagur <U.SPAN>-</U.SPAN> Fimmtudags
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
          mapboxApiAccessToken={MAPBOX_TOKEN}
          {...viewport}
          onViewportChange={nextViewport => setViewport(nextViewport)}
          width="100%"
          height="100%"
        >
          <Marker
            latitude={63.9373}
            longitude={-20.992}
            offsetLeft={-20}
            offsetTop={-20}
          >
            <U.Location color={U.LocationIconColor} size="medium" />
          </Marker>
        </ReactMapGL>
      </U.MapBox>
    </U.Container>
  );
};
