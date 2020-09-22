/* eslint-disable object-curly-newline */
import { Box, Tabs, Tab } from 'grommet';
import styled from 'styled-components';
import { Colors } from '@/Styles';
import { device } from '@/Styles/BP';

const StyledBox = styled(Box)`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${Colors.mainColor};

  @media ${device.largePhone} {
    height: max-content;
    align-items: flex-end;
  }
`;

const StyledTab = styled(Tab)`
  margin-bottom: 100px;

  &:active,
  &[aria-expanded='true'],
  &[aria-selected='true'] {
    box-shadow: 0px 0px 2px 2px ${Colors.mainColor};
  }

  @media ${device.largePhone} {
    margin-bottom: 0px;
  }
`;
const Container = styled(Box)`
  @media ${device.largePhone} {
    min-height: 70vh;
  }
`;

export { StyledBox, Box, Tabs, StyledTab, Container };
