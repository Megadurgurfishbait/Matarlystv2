/* eslint-disable object-curly-newline */
import { Colors, Font, Vertical } from '@/Styles';
import dynamic from 'next/dynamic';
import styled from 'styled-components';

const List = styled.ul`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;

  padding: 40px;
  list-style: none;
  color: ${Colors.SECONDARY_COLOR};
`;

const StyledBox = styled(Vertical)`
  background-color: ${Colors.MAIN_COLOR};
`;

const StyledLayer = styled.div`
  position: absolute;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100%;
  z-index: 50000000;
`;

const StyledButton = styled.button`
  color: ${Colors.SECONDARY_COLOR};
  box-shadow: none;
  margin-top: 15px;
  font-size: 16px;
  ${Font({ fontsize: 14, fontweight: 400, fontfamily: `Roboto` })}
  padding: 5px 15px;
  border-radius: 15px;
  width: max-content;
  background-color: ${Colors.MAIN_COLOR};
  border: 1px solid ${Colors.SECONDARY_COLOR};

  &:hover,
  &:focus {
    box-shadow: none;
    outline: none;
  }
`;

const StyledTitle = styled.h3`
  color: ${Colors.SECONDARY_COLOR};
`;

const StyledContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledRow = styled.ul`
  display: flex;
  flex-flow: row nowrap;
  width: 100%;
  padding: 0px;
  justify-content: space-between;
  margin-top: 0px;
`;
const StyledItemTitle = styled.h4`
  margin: 0px;
  color: ${Colors.SECONDARY_COLOR};
  opacity: 0.85;
  font-weight: 100;
  padding-right: 10px;
`;

const StyledItemIngred = styled.p`
  margin: 0px;
  font-size: 12px;
  line-height: 14px;
  color: ${Colors.THIRD_COLOR};
  opacity: 0.7;
`;

const StyledColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export {
  List,
  StyledLayer,
  StyledBox,
  StyledButton,
  StyledTitle,
  StyledRow,
  StyledContainer,
  StyledItemTitle,
  StyledItemIngred,
  StyledColumn,
};
