/* eslint-disable prettier/prettier */
import { Colors } from '@/Styles';
import styled, { keyframes } from 'styled-components';

const time = `2s`;
const ImageSize = `300px`;
const Rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(-359deg);
  }
`;

const float = keyframes`
0% {
transform: translatey(0px);
}
50% {
transform: translatey(-20px);
}
100% {
transform: translatey(0px);
}
`;

const fade = keyframes`
    from {
        Opacity: 1;
    }
    to {
        Opacity: 0;
    }

`;

const Container = styled.div<{ show: boolean }>`
  height: 100vh;
  width: 100vw;
  display: ${props => (props.show ? `flex` : `none`)};
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 3;
`;

const BlackBg = styled.div`
  background-color: ${Colors.MAIN_COLOR};
  position: absolute;
  height: 100vh;
  width: 100vw;
  left: 0;
  top: 0;
  z-index: 4;
  animation: ${fade} 2s linear forwards;
  animation-delay: ${time};
`;

const ImageFloat = styled.div`
  width: ${ImageSize}; /* Need a specific value to work */
  height: ${ImageSize};
  animation: ${float} ${time} infinite ease-in-out;
  z-index: 5;
`;

interface Props {
  zIndex: number;
}

const Image = styled.img<{
  zIndex: number;
}>`
  z-index: ${props => props.zIndex};
  position: absolute;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  width: ${ImageSize}; /* Need a specific value to work */
  height: ${ImageSize};
`;

const ImageRotate = styled.img<Props>`
  animation: ${Rotate} ${time} infinite linear;
  z-index: ${props => props.zIndex};
  width: ${ImageSize}; /* Need a specific value to work */
  height: ${ImageSize};
`;

export { Image, Container, ImageRotate, ImageFloat, BlackBg };
