// /* eslint-disable @typescript-eslint/quotes */
import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel as C } from 'react-responsive-carousel';

export const Carousel: React.FC<{ images: string[] }> = ({ images }) => (
  <StyledCarousel
    showThumbs={false}
    autoPlay
    infiniteLoop
    transitionTime={1000}
    showArrows={false}
    showIndicators={false}
    showStatus={false}
    interval={5000}
  >
    {images.map(v => (
      <MyDiv>
        <Image layout="fill" src={v} key={v} />
      </MyDiv>
    ))}
  </StyledCarousel>
);

const StyledCarousel = styled(C)`
  height: 100%;
  width: 100%;
  overflow: hidden;
`;

const MyDiv = styled.div`
  min-height: 100vh;
  width: 100%;
  object-fit: cover;
  display: flex;

  & > div {
    height: 100%;
    width: 100%;
  }
`;
