import React from 'react';
import { FoodListProps, Food } from '@/Models/';

// Harry Styles
import * as FL from './FoodList.styled';

const GridArea = [
  { name: `Title`, start: [0, 0], end: [0, 0] },
  { name: `Food`, start: [0, 1], end: [0, 1] },
  { name: `Price`, start: [1, 0], end: [1, 1] },
];

const FoodListItem = (items: Food): JSX.Element => (
  <FL.StyledGrid
    rows={[`25px`, `40px`, `20px`]}
    columns={[`flex`, `xsmall`]}
    areas={GridArea}
    key={items.title}
  >
    <FL.Box gridArea="Title">
      <FL.StyledTitle>{items.title}</FL.StyledTitle>
    </FL.Box>
    <FL.Box gridArea="Food">
      <FL.StyledDescription>{items.foodDescription}</FL.StyledDescription>
    </FL.Box>
    <FL.Box gridArea="Price" align="center" justify="center">
      <FL.StyledPrice>{items.price}</FL.StyledPrice>
    </FL.Box>
  </FL.StyledGrid>
);

export const FoodList: React.FC<FoodListProps> = ({ List }) => (
  <FL.StyledBox pad={{ horizontal: `50px` }}>
    {List.map(items => FoodListItem(items))}
  </FL.StyledBox>
);
