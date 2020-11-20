import React from 'react';
import Fade from 'react-reveal';
import { Drink, Type } from 'Models';

import * as D from './FoodList.styled';

const GridArea = [
  { name: `Title`, start: [0, 0], end: [1, 0] },
  { name: `Price`, start: [1, 0], end: [1, 1] },
];

const DrinkListItem = (items: Drink): JSX.Element => (
  <D.StyledGrid
    fill
    rows={[`25px`, `10px`]}
    columns={[`Flex`, `xsmall`]}
    areas={GridArea}
    key={items.title}
  >
    <Fade>
      <D.StyledTitle gridArea="Title">{items.title}</D.StyledTitle>
      <D.Box gridArea="Price">
        <D.StyledPrice>{items.price}</D.StyledPrice>
      </D.Box>
    </Fade>
  </D.StyledGrid>
);

export const DrinkList: React.FC<{ List: Type }> = ({ List }) => (
  <D.StyledBox>
    {(List as Drink[]).map(items => DrinkListItem(items))}
  </D.StyledBox>
);
