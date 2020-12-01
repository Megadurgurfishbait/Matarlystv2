// /* eslint-disable @typescript-eslint/quotes */
import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import dynamic from 'next/dynamic';

// eslint-disable-next-line @typescript-eslint/quotes
const C = dynamic(
  () => import(`grommet/components/Carousel`).then(module => module.Carousel),
  {
    ssr: false,
  },
);

export const Carousel: React.FC<{ images: string[] }> = ({ images }) => (
  <StyledCarousel fill controls={false} play={8000}>
    {images.map(v => (
      <Image layout="fill" src={v} key={v} />
    ))}
  </StyledCarousel>
);

const StyledCarousel = styled(C)`
  height: 100%;
  width: 100%;
  overflow: hidden;
`;
