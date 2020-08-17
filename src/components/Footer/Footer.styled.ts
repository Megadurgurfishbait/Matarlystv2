import styled from 'styled-components';

import { Colors } from '@/Styles';

const Container = styled.footer`
  display: flex;
  height: 100%;
  z-index: 100;
  background-color: ${Colors.mainColor};
  margin: 0px;
  font-family: 'roboto';
  font-size: 12px;
  font-weight: 100;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const List = styled.ul`
  display: flex;
  list-style: none;
  margin: 0px;
  align-items: center;

  & > li {
    padding: 0px 12px;
    margin: 0px;
    line-height: 12px;
    color: ${Colors.thirdColor};
    &:not(:first-child) {
      border-left: 2px solid ${Colors.secondaryColor};
    }
  }
`;

export { Container, List };
