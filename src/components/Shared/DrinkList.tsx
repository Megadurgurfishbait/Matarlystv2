import React from 'react';
import Fade from 'react-reveal/Fade';
import { Drink } from 'Models';

import * as D from './FoodList.styled';

const GridArea = [
  { name: `Title`, start: [0, 0], end: [1, 0] },
  { name: `Price`, start: [1, 0], end: [1, 1] },
];

const DrinkListItem: React.FC<{ items: Drink }> = ({ items }): JSX.Element => (
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

export const DrinkList: React.FC<{ List: Drink[] }> = ({ List }) => (
  <D.StyledBox>
    {List.map(i => (
      <DrinkListItem items={i} />
    ))}
  </D.StyledBox>
);
