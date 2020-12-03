/* eslint-disable object-curly-newline */
import styled from 'styled-components';
import { Vertical, Horizontal, Colors, device } from '@/Styles';

const Container = styled(Vertical)`
  align-items: center;
  justify-content: center;
`;

const Tab = styled(Horizontal)`
  height: max-content;
  width: max-content;
`;
const Button = styled.button`
  padding: 0px;
  background-color: transparent;
  border: 0px;
  outline: 0px;
  margin-right: 10px;
  border-bottom: 1px solid transparent;
  color: ${Colors.SECONDARY_COLOR};
  font-size: 14px;

  &:hover,
  &:focus,
  &:active {
    outline: 0px;
    border-bottom: 1px solid ${Colors.SECONDARY_COLOR};
    cursor: pointer;
  }

  @media ${device.large} {
    margin-right: 7px;
  }
`;
const Plain = styled(Vertical)`
  height: 50vh;
`;

export { Container, Tab, Plain, Button };
