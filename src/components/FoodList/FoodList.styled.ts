import styled from 'styled-components';
import { Box, Text, Grid } from 'grommet';
import { Colors, Font } from '@/Styles';

const StyledTitle = styled(Text)`
  color: ${Colors.secondaryColor};
  letter-spacing: 1.1px;
  ${Font({ fontsize: 26, fontfamily: 'Raleway', fontweight: 600 })}
`;
const StyledDescription = styled(Text)`
  line-height: 18px;
  color: ${Colors.secondaryFont};
  width: 80%;
  margin-top: 8px;
  ${Font({ fontsize: 16, fontfamily: 'Segoe UI', fontweight: 400 })}
`;

const StyledPrice = styled(Text)`
  font-family: 'roboto';
  color: ${Colors.thirdColor};
`;

const StyledGrid = styled(Grid)`
  padding: 0px 50px;
`;

const StyledBox = styled(Box)`
  min-height: 450px;
`;

export {
  Box,
  StyledBox,
  StyledPrice,
  StyledDescription,
  StyledTitle,
  StyledGrid,
};
