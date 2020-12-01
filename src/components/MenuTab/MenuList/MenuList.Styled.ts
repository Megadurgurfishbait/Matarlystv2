import styled from 'styled-components';
import { Colors, Font, device, Horizontal, Vertical } from '@/Styles';

const Container = styled(Vertical)`
  margin-top: 50px;
  align-items: center;
  min-height: 50vh;
`;

const TextContainer = styled(Horizontal)`
  flex-grow: 2;
`;

const IngredContainer = styled(Horizontal)`
  line-height: 18px;
  height: max-content;
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

const TitleContainer = styled(Horizontal)`
  color: ${Colors.SECONDARY_COLOR};
  line-height: 20px;
  white-space: pre-wrap;
  letter-spacing: 1.1px;
  ${Font({ fontsize: 26, fontfamily: `Raleway` })}

  @media ${device.large} {
    font-size: 22px;
  }

  @media ${device.largePhone} {
    font-size: 12px; 
  }

`;

const ListPrice = styled(Vertical)`
  width: max-content;
  height: max-max-content;
  font-family: 'roboto';
  color: ${Colors.THIRD_COLOR};
  align-self: flex-start;

  @media ${device.largePhone} {
    font-size: 12px;
    align-self: flex-end;
  }
`;
const ListColumn = styled(Vertical)``;
const ListRow = styled(Horizontal)`
  width: 80%;
  margin-bottom: 25px;
  height: max-content;
`;

export {
  Container,
  TextContainer,
  TitleContainer,
  IngredContainer,
  ListRow,
  ListColumn,
  ListPrice,
};
