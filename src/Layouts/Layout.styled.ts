import styled from 'styled-components';
import { Box, Grid } from 'grommet';
import { device } from '@/Styles/BP';

const StyledBox = styled(Box)`
  align-items: center;
  @media ${device.largePhone} {
    height: 100%;
  }
`;

const StyledGrid = styled(Grid)`
  overflow: scroll;
  height: 100%;

  @media ${device.large} {
    align-items: center;
    grid-template-areas: '. textGrid textGrid .';
    justify-content: center;
  }
`;

export { StyledBox, StyledGrid };
