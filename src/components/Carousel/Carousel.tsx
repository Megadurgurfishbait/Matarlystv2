/* eslint-disable @typescript-eslint/quotes */
// /* eslint-disable @typescript-eslint/quotes */
import React from 'react';
import styled from 'styled-components';
import Image, { ImageProps } from 'next/image';

import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel as C } from 'react-responsive-carousel';

// Sizes: (Condition): Stærð á mynd

const SmallSizeScreen = {
  sizes: `(max-width: 1440px) 15vw, 40vw`,
  layout: `responsive`,
  height: `1280`,
  width: `1920`,
  objectFit: 'fill',
} as ImageProps;

const FrontPageScreen = {
  sizes: `(max-width: 600px) 15w, (max-width: 1441px) 40vw, 70vw`,
  layout: `fill`,
  objectFit: 'fill',
} as ImageProps;

export const Carousel: React.FC<{ images: string[]; homePage: boolean }> = ({
  images,
  homePage,
}) => {
  const props = homePage ? FrontPageScreen : SmallSizeScreen;

  return (
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
        <MyDiv key={v}>
          <Image {...props} priority src={v} alt="Myndir af mat og staðnum" />
        </MyDiv>
      ))}
    </StyledCarousel>
  );
};

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
    max-width: 100vw;
    max-height: 100vh;
    width: 100vw;
  }
`;
