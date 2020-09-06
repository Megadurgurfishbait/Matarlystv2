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
  @media ${device.largePhone} {
    align-items: center;
    grid-template-areas: '. textGrid textGrid .';
    gridgrid-template-columns: 0% 50% 50% 0%;
  }
`;

export { StyledBox, StyledGrid };
