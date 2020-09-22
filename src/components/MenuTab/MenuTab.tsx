import React from 'react';
import { Food } from '@/Models/';
import { FoodList } from '@/components';
import { Matsedill2 } from '@/FakeData';

// Harry Styles
import * as MT from './MenuTab.styled';

export const MenuTab: React.FC<{ Matsedill: Food[] }> = ({ Matsedill }) => (
  <MT.Container>
    <MT.Tabs>
      <MT.StyledTab title="Brunch">
        <FoodList List={Matsedill} />
      </MT.StyledTab>
      <MT.StyledTab title="Lunch">
        <FoodList List={Matsedill2} />
      </MT.StyledTab>
    </MT.Tabs>
  </MT.Container>
);
