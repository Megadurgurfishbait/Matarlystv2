/* eslint-disable object-curly-newline */
import { Box, Tabs, Tab } from 'grommet';
import styled from 'styled-components';
import { Colors, device } from '@/Styles';

const StyledTab = styled(Tab)`
  margin-bottom: 100px;

  & * span {
    font-size: 14px;
  }

  & > div {
    margin: 0px 6px;
  }

  &:active,
  &[aria-expanded='true'],
  &[aria-selected='true'] {
    box-shadow: 0px 0px 2px 2px ${Colors.MAIN_COLOR};
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

export { Box, Tabs, StyledTab, Container };
