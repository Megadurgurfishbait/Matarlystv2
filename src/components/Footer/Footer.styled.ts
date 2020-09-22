import styled from 'styled-components';
import { Colors } from '@/Styles';
import { device } from '@/Styles/BP';

const Container = styled.footer`
  display: flex;
  height: 50px;
  z-index: 100;
  background-color: ${Colors.mainColor};
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
  color: ${Colors.thirdColor};
  &:not(:first-child) {
    border-left: 2px solid ${Colors.secondaryColor};
  }

  @media ${device.largePhone} {
    font-size: 10px;
    letter-spacing: 0px;
    padding: 0px 6px;
  }

  @media ${device.smallPhone} {
    padding: 0px 2px;
  }
`;

export { Container, List, Li };
