import React from 'react';
import Fade from 'react-reveal/Fade';
import { Food } from '@/Models/';
// Harry Styles
import * as FL from './FoodList.styled';

const GridArea = [
  { name: `Title`, start: [0, 0], end: [0, 0] },
  { name: `Food`, start: [0, 1], end: [0, 1] },
  { name: `Price`, start: [1, 0], end: [1, 1] },
];

const FoodListItem: React.FC<{ items: Food }> = ({ items }): JSX.Element => (
  <FL.StyledGrid
    fill
    rows={[`25px`, `50px`]}
    columns={[`flex`, `xsmall`]}
    areas={GridArea}
    key={items.title}
  >
    <FL.Box gridArea="Title">
      <Fade>
        {items.numero ? (
          <FL.StyledTitle>{`${`${items.numero}. ${items.title}`}`}</FL.StyledTitle>
        ) : (
          <FL.StyledTitle>{items.title}</FL.StyledTitle>
        )}
      </Fade>
    </FL.Box>
    <FL.Box gridArea="Food">
      <Fade>
        <FL.StyledDescription>{items.Ingred}</FL.StyledDescription>
      </Fade>
    </FL.Box>
    <FL.Box gridArea="Price">
      <Fade>
        <FL.StyledPrice>{items.price}</FL.StyledPrice>
      </Fade>
    </FL.Box>
  </FL.StyledGrid>
);

export const FoodList: React.FC<{ List: Food[] }> = ({ List }) => (
  <FL.StyledBox pad={{ horizontal: `50px` }}>
    {List.map(i => (
      <FoodListItem items={i} />
    ))}
  </FL.StyledBox>
);
