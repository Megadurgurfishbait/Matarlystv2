import React from 'react';

import { Drink, Type } from 'Models';

import * as D from '../MenuTab/MenuTab.styled';

const DrinkListItem = (items: Drink): JSX.Element => <li>{items.title}</li>;
export const DrinkList: React.FC<{ List: Type }> = ({ List }) => (
  <D.Box> {(List as Drink[]).map(items => DrinkListItem(items))} </D.Box>
);
