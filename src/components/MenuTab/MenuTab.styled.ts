/* eslint-disable object-curly-newline */
import { Box, Tabs, Tab } from 'grommet';
import styled from 'styled-components';
import { Colors, device } from '@/Styles';

const StyledTab = styled(Tab)`
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

  @media ${device.large} {
    margin-bottom: 100px;
  }

  @media ${device.largePhone} {
    margin-bottom: 0px;
  }
`;
const Container = styled(Box)`
  width: 100%;
  min-height: 80vh;

  display: flex;
  justify-content: center;
  @media ${device.largePhone} {
    min-height: 70vh;
  }

  @media ${device.large} {
    justify-content: flex-start;
  }
`;

const TortillaContainer = styled(Box)`
  display: flex;
  margin: 0px;
  justify-content: center;
  align-self: center;
  width: 100%;
  color: ${Colors.SECONDARY_COLOR};
  padding: 0px 70px;
  & > h6 {
    font-size: 14px;
    font-weight: 400;
    margin: 0px;
    text-align: left;
  }
`;

const StyledTabs = styled(Tabs)`
  min-height: 80%;
  display: flex;
  justify-content: space-between;
`;

export { Box, StyledTabs, StyledTab, Container, TortillaContainer };
