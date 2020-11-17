/* eslint-disable object-curly-newline */
import { Colors } from '@/Styles';
import { Layer, Box, Button } from 'grommet';
import styled from 'styled-components';

const List = styled.ul`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  padding: 0px;
  list-style: none;
  color: ${Colors.secondaryColor};
`;

const StyledBox = styled(Box)`
  background-color: ${Colors.mainColor};
`;

const StyledLayer = styled(Layer)`
  background-color: ${Colors.mainColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100%;
`;

const StyledButton = styled(Button)`
  border: none;
  color: ${Colors.secondaryColor};
  box-shadow: none;
  &:hover,
  &:active {
    box-shadow: none;
  }
`;

export { List, StyledLayer, StyledBox, StyledButton };
