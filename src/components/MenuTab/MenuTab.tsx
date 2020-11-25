import React from 'react';
import { DrinkList, FoodList } from '@/components/Shared';

import { Drink, Food, MenuTabProps } from '@/Models/';

// Harry Styles
import * as MT from './MenuTab.styled';

export const MenuTab: React.FC<MenuTabProps> = ({ Map, MapType }) => (
  <MT.Container>
    <MT.StyledTabs>
      {Object.keys(Map).map(v => (
        <MT.StyledTab key={v} title={`${v}`}>
          {MapType === `Drykkir` ? (
            <DrinkList List={Map[`${v}`] as Drink[]} />
          ) : (
            <FoodList List={Map[`${v}`] as Food[]} />
          )}
        </MT.StyledTab>
      ))}
    </MT.StyledTabs>
  </MT.Container>
);
