import React from 'react';
import { Matsedill as M } from '@/Models/';
import { FoodList } from '@/components';

// Harry Styles
import * as MT from './MenuTab.styled';

export const MenuTab: React.FC<{ Matsedill: M }> = ({ Matsedill }) => (
  <MT.Container>
    <MT.Tabs>
      {Object.keys(Matsedill).map(v => (
        <MT.StyledTab title={`${v}`}>
          <FoodList List={Matsedill[`${v}`]} />
        </MT.StyledTab>
      ))}
    </MT.Tabs>
  </MT.Container>
);
