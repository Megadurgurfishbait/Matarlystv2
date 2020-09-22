import React from 'react';
import { Food } from '@/Models/';
import { FoodList } from '@/components';

// Harry Styles
import * as MT from './MenuTab.styled';

export const MenuTab: React.FC<{ Matsedill: Food[]; Matsedill2: Food[] }> = ({
  Matsedill,
  Matsedill2,
}) => (
  <MT.Container>
    <MT.Tabs>
      <MT.StyledTab title="Smáréttir">
        <FoodList List={Matsedill} />
      </MT.StyledTab>
      <MT.StyledTab title="Rúgbrauð">
        <FoodList List={Matsedill2} />
      </MT.StyledTab>
    </MT.Tabs>
  </MT.Container>
);
