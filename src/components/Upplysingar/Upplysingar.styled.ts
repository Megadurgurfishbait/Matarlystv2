import { Location } from 'grommet-icons';
import styled from 'styled-components';
import { Colors, device } from '@/Styles';
import { Horizontal, Vertical } from '@/Styles/GobalStyles';

const LocationIconColor = Colors.MAIN_COLOR;

const Container = styled(Vertical)`
  height: 100%;
  width: 100%;
  justify-content: flex-end;
  align-items: flex-start;

  @media ${device.large} {
    width: 80%;
    margin: 60px 60px 30px 30px;
  }

  @media ${device.tablet} {
    padding: 30px 0px;
    margin: 60px 100px;
  }

  @media ${device.largePhone} {
    padding: 0px;
    justify-content: center;
    margin: 0px;
    margin-top: 50px;
  }
`;

const StyledBox = styled(Vertical)`
  margin-bottom: 20px;
  min-height: 200px;
  padding-right: 20px;

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
    padding: 0px;
    & * label {
      font-size: 30px;
    }

    & * li {
      font-size: 20px;
    }
  }

  @media ${device.tablet} {
    & > label {
      font-size: 20px;
    }
    & * li {
      font-size: 16px;
    }

    & > ul {
      margin: 3px;
    }
  }

  @media ${device.largePhone} {
    margin-bottom: 0px;
    padding: 0px;
    justify-content: center;
    & > label {
      font-size: 18px;
    }
    & * li {
      font-size: 14px;
      line-height: 14px;
    }

    & > ul {
      height: max-content;
      margin-bottom: 10px;
    }
  }
`;

const MapBox = styled(Horizontal)`
  height: 40%;
  min-height: 200px;
  width: 80%;
  overflow: hidden;

  @media ${device.large} {
    justify-content: center;
    & > div {
      height: 300px !important;
      width: 100% !important;
    }
  }

  @media ${device.largePhone} {
    justify-content: center;
    & > div {
      width: 100% !important;
    }
  }
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
  Location,
  LocationIconColor,
  StyledBox,
  SPAN,
  FlexDiv,
  MapBox,
};
