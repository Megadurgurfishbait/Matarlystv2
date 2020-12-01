import styled from 'styled-components';
import { Colors, device, Horizontal, Vertical } from '@/Styles/';

const StyledBox = styled(Horizontal)`
  align-items: center;
  background-color: ${Colors.MAIN_COLOR};
  @media ${device.largePhone} {
    height: 100%;
  }
`;

export { Horizontal, Vertical, StyledBox };