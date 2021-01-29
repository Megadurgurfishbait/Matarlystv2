import styled from 'styled-components';
import { Colors, device } from '@/Styles';

const Container = styled.footer`
  display: flex;
  height: 50px;
  z-index: 100;
  background-color: ${Colors.MAIN_COLOR};
  margin: 0px;
  font-family: 'roboto';
  font-size: 12px;
  font-weight: 100;
  text-transform: uppercase;
  letter-spacing: 1px;
  position: fixed;
  bottom: 0;
  width: 100%;
  margin: 0;
  padding: 0;
  justify-content: center;

  @media ${device.largePhone} {
    width: 100vw;
    justify-content: center;
  }
`;

const List = styled.ul`
  display: flex;
  list-style: none;
  margin: 0px;
  align-items: center;

  @media ${device.largePhone} {
    padding: 0px;
  }
`;

const Li = styled.li`
  padding: 0px 12px;
  margin: 0px;
  line-height: 12px;
  color: ${Colors.THIRD_COLOR};

  & > a {
    text-decoration: none;
    color: inherit;
  }

  &:not(:first-child) {
    border-left: 2px solid ${Colors.SECONDARY_COLOR};
  }

  @media ${device.largePhone} {
    font-size: 12px;
    letter-spacing: 0px;
    padding: 0px 6px;
  }

  @media ${device.smallPhone} {
    padding: 0px 0.8rem;
    font-size: 11px;
  }
`;

const H1 = styled.h1`
  display: flex;
  font-family: 'raleway';
  font-weight: 400;
  align-items: center;
  color: ${Colors.SECONDARY_COLOR};
`;

export { Container, List, Li, H1 };
