import { Carousel } from 'grommet';
import styled from 'styled-components';
import Image from 'next/image';
import { device } from '@/Styles';

const StyledCarousel = styled(Carousel)`
  height: 100%;
  width: 100%;
  overflow: hidden;
`;

const StyledImage = styled(Image)`
  height: 100%;
  width: 100%;

  @media ${device.largePhone} {
    object-fit: cover;
  }
`;

export { StyledCarousel, StyledImage };
