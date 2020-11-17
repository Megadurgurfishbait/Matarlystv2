import { Box, Text, Grid } from 'grommet';
import styled from 'styled-components';
import { Colors, Font } from '@/Styles';
import { device } from '@/Styles/BP';

const StyledTitle = styled(Text)`
  color: ${Colors.SECONDARY_COLOR};
  letter-spacing: 1.1px;
  ${Font({ fontsize: 26, fontfamily: `Raleway`, fontweight: 600 })}

  @media ${device.large} {
    font-size: 22px;
  }

  @media ${device.largePhone} {
    font-size: 12px; 
  }
`;
const StyledDescription = styled(Text)`
  line-height: 18px;
  color: ${Colors.SECONDARY_FONT_COLOR};
  width: 80%;
  margin-top: 8px;
  ${Font({ fontsize: 16, fontfamily: `Segoe UI`, fontweight: 400 })}


  @media ${device.large} {
    font-size: 14px;
  }

  @media ${device.largePhone} {
    font-size: 12px;
    width: 100%;
    line-height: 14px;
  }
`;

const StyledPrice = styled(Text)`
  font-family: 'roboto';
  color: ${Colors.THIRD_COLOR};

  @media ${device.largePhone} {
    font-size: 12px;
    align-self: flex-end;
  }
`;

const StyledGrid = styled(Grid)`
  padding: 0px 50px;
  margin-top: 10px;

  @media ${device.large} {
    padding: 0px 20px;
  }

  @media ${device.largePhone} {
    padding: 0px 20px;
    grid-template-rows: 15px 55px;
  }
`;

const StyledBox = styled(Box)`
  min-height: 450px;

  @media ${device.largePhone} {
    padding: 0px 0px;
    min-height: 0px;
    max-height: max-content;
    align-items: flex-end;
  }
`;

export {
  Box,
  StyledBox,
  StyledPrice,
  StyledDescription,
  StyledTitle,
  StyledGrid,
};
