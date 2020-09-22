import React from 'react';
import { CarouselProps } from '@/Models/';

// Harry Styles
import * as C from './Carousel.styled';

export const Carousel: React.FC<CarouselProps> = ({ images, seconds }) => (
  <C.StyledCarousel fill controls={false} play={seconds * 1000}>
    {images.map(v => (
      <C.StyledImage src={v} key={v} />
    ))}
  </C.StyledCarousel>
);
