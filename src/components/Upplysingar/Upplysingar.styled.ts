import { Box } from 'grommet';
import { Location } from 'grommet-icons';
import styled from 'styled-components';
import { Colors, device } from '@/Styles';

const LocationIconColor = Colors.MAIN_COLOR;

const Container = styled(Box)`
  padding: 30px 120px 30px 60px;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;

  @media ${device.large} {
    padding: 60px 30px 30px 30px;
  }

  @media ${device.tablet} {
    justify-content: space-evenly;
    align-items: center;
  }

  @media ${device.largePhone} {
    margin-top: 50px;
    padding: 0px;
    justify-content: center;
  }
`;

const StyledBox = styled(Box)`
  width: 80%;
  margin-bottom: 20px;
  min-height: 200px;

  & > label {
    width: max-content;
    padding-bottom: 3px;
    border-bottom: ${`1px solid ${Colors.SECONDARY_COLOR}`};
    font-size: 30px;
  }
  & > ul {
    list-style: none;
    padding: 0px;
    height: 100%;
    margin: 5px 0px 30px 0px;
  }

  @media ${device.large} {
    & * label {
      font-size: 30px;
    }

    & * li {
      font-size: 20px;
    }
  }

  @media ${device.tablet} {
    & * li {
      font-size: 24px;
    }
  }

  @media ${device.largePhone} {
    margin-bottom: 0px;

    & > label {
      font-size: 18px;
    }
    & * li {
      font-size: 14px;
      line-height: 14px;
    }

    & > ul {
      margin: 5px 0px 15px 0px;
    }
  }
`;

const MapBox = styled(Box)`
  height: 40%;
  min-height: 200px;
  width: 80%;
  overflow: hidden;
`;
const SPAN = styled.span`
  color: ${Colors.SECONDARY_COLOR};
`;

const FlexDiv = styled.div<{ dir: string }>`
  display: flex;
  justify-content: space-between;

  flex-direction: ${props => props.dir};
`;

export {
  Container,
  Box,
  Location,
  LocationIconColor,
  StyledBox,
  SPAN,
  FlexDiv,
  MapBox,
};
