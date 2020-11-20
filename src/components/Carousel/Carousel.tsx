/* eslint-disable @typescript-eslint/quotes */
import React from 'react';
import { CarouselProps } from '@/Models/';

// Harry Styles
import * as C from './Carousel.styled';

// Virkar ekki að setja inn layout="fill".
// Ekki spyrja mig
const layoutFill = {
  layout: 'fill',
};

export const Carousel: React.FC<CarouselProps> = ({ images, seconds }) => (
  <C.StyledCarousel fill controls={false} play={seconds * 1000}>
    {images.map(v => (
      <C.StyledImage {...layoutFill} src={v} key={v} />
    ))}
  </C.StyledCarousel>
);
