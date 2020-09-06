import React from 'react';
import { Food } from '@/Models/';
import { FoodList } from '@/components';

// Harry Styles
import * as MT from './MenuTab.styled';

export const MenuTab: React.FC<{ Matsedill: Food[] }> = ({ Matsedill }) => (
  <MT.Box>
    <MT.Tabs>
      <MT.StyledTab title="Brunch">
        <FoodList List={Matsedill} />
      </MT.StyledTab>
      <MT.StyledTab title="Lunch">
        <FoodList List={Matsedill} />
      </MT.StyledTab>
    </MT.Tabs>
  </MT.Box>
);
