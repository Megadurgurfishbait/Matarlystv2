import styled from 'styled-components';
import { Box, Grid } from 'grommet';
import { device } from '@/Styles/BP';

const LAYOUT_TEXT_AND_PHOTO = [
  { name: `photoGrid`, start: [2, 0], end: [2, 0] },
  { name: `textGrid`, start: [1, 0], end: [1, 0] },
];

const LAYOUT_PHOTO_ONLY = [{ name: `photoGrid`, start: [1, 0], end: [2, 0] }];
const LAYOUT_PHONE_ONLY = [{ name: `textGrid`, start: [1, 0], end: [2, 0] }];

const StyledBox = styled(Box)`
  align-items: center;
  @media ${device.largePhone} {
    height: 100%;
  }
`;

const StyledGrid = styled(Grid)`
  overflow: scroll;
  height: 100%;
  grid-template-areas: '. textGrid photoGrid .'; // Þetta gæti böggast, en fylgast bara með

  @media ${device.large} {
    align-items: center;
    grid-template-areas: '. textGrid photoGrid .';
    justify-content: center;
  }

  @media ${device.tablet} {
    grid-template-areas: '. textGrid textGrid .';
  }
`;

export {
  StyledBox,
  StyledGrid,
  LAYOUT_PHONE_ONLY,
  LAYOUT_TEXT_AND_PHOTO,
  LAYOUT_PHOTO_ONLY,
};
