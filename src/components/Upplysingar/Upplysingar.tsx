/* eslint-disable dot-notation */
/* eslint-disable jsx-a11y/label-has-associated-control */

import getConfig from 'next/config';
import dynamic from 'next/dynamic';
import React from 'react';
import { Colors } from '@/Styles';
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

const ExternalIconn = (): JSX.Element => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    fill={`${Colors.MAIN_COLOR}`}
    stroke={`${Colors.SECONDARY_COLOR}`}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M11 7h-5a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-5" />
    <line x1="10" y1="14" x2="20" y2="4" />
    <polyline points="15 4 20 4 20 9" />
  </svg>
);

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
          <span>
            S<U.SPAN>:</U.SPAN> 793 1952
          </span>
          <span>
            P<U.SPAN>:</U.SPAN> Best að senda skilaðboð á Facebook
          </span>
        </U.FlexDiv>
      </ul>
      <label>Opnunartími</label>
      <ul>
        <U.FlexDiv dir="row">
          <span>Mánudagur</span>
          <span>Lokað</span>
        </U.FlexDiv>
        <U.FlexDiv dir="row">
          <span>
            Þriðjudaga <U.SPAN>-</U.SPAN> Fimmtudags
          </span>
          <span>
            11:00 <U.SPAN>-</U.SPAN> 21:00
          </span>
        </U.FlexDiv>
        <U.FlexDiv dir="row">
          <span>
            Föstudagur <U.SPAN>-</U.SPAN> Sunnudags
          </span>
          <span>
            11:00 <U.SPAN>-</U.SPAN> 22:00
          </span>
        </U.FlexDiv>
      </ul>
      <label>Staðsetning</label>
      <ul>
        <li className="withExternal">
          <a href="https://www.google.com/maps/place/Austurvegur+35,+800+Selfoss/@63.9374362,-21.0005843,15z/data=!3m1!4b1!4m5!3m4!1s0x48d65fc8d6d55e01:0x26081c47f22eebcd!8m2!3d63.937427!4d-20.991851">
            Austurvegur 35
          </a>
          <ExternalIconn />
        </li>
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
