import React from 'react';
import { DrinkList, FoodList } from '@/components/Shared';

import { MenuTabProps } from '@/Models/';

// Harry Styles
import * as MT from './MenuTab.styled';

export const MenuTab: React.FC<MenuTabProps> = ({ Map, MapType }) => (
  <MT.Container>
    <MT.StyledTabs>
      {Object.keys(Map).map(v => (
        <MT.StyledTab title={`${v}`}>
          {MapType === `Drykkir` ? (
            <DrinkList List={Map[`${v}`]} />
          ) : (
            <FoodList List={Map[`${v}`]} />
          )}
        </MT.StyledTab>
      ))}
    </MT.StyledTabs>
  </MT.Container>
);
