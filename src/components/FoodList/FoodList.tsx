import React from 'react';

// Harry Styles
import * as FL from './FoodList.styled';

export const FoodList: React.FC<FoodList> = ({ List }) => (
  <FL.StyledBox pad={{ horizontal: '50px' }}>
    {List.map(({ title, food_description, price }) => (
      <FL.StyledGrid
        rows={['25px', '40px', '20px']}
        columns={['flex', 'xsmall']}
        areas={GridArea}
      >
        <FL.Box gridArea="Title">
          <FL.StyledTitle>{title}</FL.StyledTitle>
        </FL.Box>
        <FL.Box gridArea="Food">
          <FL.StyledDescription>{food_description}</FL.StyledDescription>
        </FL.Box>
        <FL.Box gridArea="Price" align="center" justify="center">
          <FL.StyledPrice>{price}</FL.StyledPrice>
        </FL.Box>
      </FL.StyledGrid>
    ))}
  </FL.StyledBox>
);

const GridArea = [
  { name: 'Title', start: [0, 0], end: [0, 0] },
  { name: 'Food', start: [0, 1], end: [0, 1] },
  { name: 'Price', start: [1, 0], end: [1, 1] },
];
