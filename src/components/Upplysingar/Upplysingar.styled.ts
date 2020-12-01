import styled from 'styled-components';
import { Colors, device } from '@/Styles';
import { Vertical } from '@/Styles/GobalStyles';

const LocationIconColor = Colors.MAIN_COLOR;

const Container = styled(Vertical)`
  height: 100%;
  width: 80%;
  justify-content: center;
  align-items: center;
  padding-left: 100px;
  @media ${device.large} {
    width: 80%;
    margin: 60px 60px 30px 30px;
  }

  @media ${device.tablet} {
    padding: 30px 0px;
    margin: 60px 100px;
  }

  @media ${device.largePhone} {
    padding: 0px 20px;
    justify-content: center;
    margin: 0px;
    margin-top: 50px;
    width: 100%;
  }
`;

const StyledBox = styled(Vertical)`
  min-height: 200px;
  justify-content: center;
  align-items: flex-start;
  height: 100%;
  color: ${Colors.THIRD_COLOR};
  & > label {
    width: max-content;
    padding-bottom: 3px;
    border-bottom: ${`1px solid ${Colors.SECONDARY_COLOR}`};
    font-size: 30px;
    font-family: 'roboto';
    line-height: 18px;
  }
  & > ul {
    list-style: none;
    padding: 0px;
    height: max-content;
    margin: 5px 0px 15px 0px;
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
      font-size: 30px;
    }
    & * li {
      font-size: 24px;
    }

    & > ul {
      margin: 5px 0px 30px 0px;
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
      width: 100%;
    }
  }
`;

const MapBox = styled(Vertical)`
  height: 80%;
  min-height: 200px;
  overflow: hidden;
  justify-content: center;
  align-items: center;
  & > div {
    height: 100%;
    width: 100%;
  }

  @media ${device.large} {
    justify-content: center;
    & > div {
      height: 300px !important;
      width: 100% !important;
    }
  }

  @media ${device.tablet} {
    & > div {
      height: 100% !important;
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
  width: 400px;
  justify-content: space-between;
  flex-direction: ${props => props.dir};
  @media ${device.largePhone} {
    width: 100%;
  }
`;

export { Container, LocationIconColor, StyledBox, SPAN, FlexDiv, MapBox };
