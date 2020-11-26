// /* eslint-disable @typescript-eslint/quotes */
import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Slider from 'infinite-react-carousel';
import { Horizontal } from '@/Styles';

// Virkar ekki að setja inn layout="fill".
// Ekki spyrja mig

export const Carousel: React.FC<{ images: string[] }> = ({ images }) => (
  <StyledCarousel fill controls={false} play={8000}>
    {images.map(v => (
      <Horizontal>
        <Image layout="fill" src={v} key={v} />
      </Horizontal>
    ))}
  </StyledCarousel>
);

const StyledCarousel = styled(Slider)`
  height: 100%;
  width: 100%;
  overflow: hidden;
`;
