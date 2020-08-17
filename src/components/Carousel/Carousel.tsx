import React from 'react';
import * as C from './Carousel.styled';

export const Carousel: React.FC<Carousel> = ({ images, seconds }) => (
  <C.Car fill controls={false} play={seconds * 1000}>
    {images.map(v => (
      <C.Img src={v} />
    ))}
  </C.Car>
);
