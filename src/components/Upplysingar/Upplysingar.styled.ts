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
  font-family: Raleway;
  letter-spacing: 1.3px;
  @media ${device.large} {
    width: 80%;
    margin: 60px 60px 30px 30px;
    padding-left: 0px;
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
    border-bottom: ${`2px solid ${Colors.SECONDARY_COLOR}`};
    font-size: 26px;
    font-family: 'roboto';
    line-height: 20px;
  }
  & > ul {
    list-style: none;
    padding: 0px;
    height: max-content;
    margin: 5px 0px 20px 0px;
  }

  & * .withExternal {
    text-align: left;
    display: flex;
    align-items: center;
    & > a {
      text-decoration: none;
      color: inherit;
    }
    & > svg {
      margin-left: 0.2rem;
    }
  }

  @media ${device.large} {
    padding: 0px;
    justify-content: flex-end;
    & * label {
      font-size: 24px;
    }
    & * li {
      font-size: 20px;
    }
    & > ul {
      width: 100%;
    }
  }

  @media ${device.tablet} {
    justify-content: flex-end;

    & > label {
      font-size: 24px;
    }
    & * li {
      font-size: 20px;
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
      font-size: 16px;
    }
    & * li {
      font-size: 14px;
      line-height: 14px;
    }

    & > ul {
      height: max-content;
      margin-bottom: 8px;

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

const FlexDiv = styled.li<{ dir: string }>`
  display: flex;
  width: 450px;
  justify-content: space-between;
  flex-direction: ${props => props.dir};

  & > span {
    @media ${device.largePhone} {
      font-size: 12px;
      letter-spacing: 0.5;
    }
  }

  @media ${device.large} {
    width: 100%;
  }
`;

export { Container, LocationIconColor, StyledBox, SPAN, FlexDiv, MapBox };
