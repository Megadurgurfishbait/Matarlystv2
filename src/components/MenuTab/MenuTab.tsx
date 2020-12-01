import React from 'react';
import { Drink, Food, MenuTabProps } from '@/Models/';
import { MenuList } from './MenuList';

// Harry Styles
import * as Styled from './MenuTab.styled';

export const MenuTab: React.FC<MenuTabProps> = ({ Map, isFood }) => {
  const [whichTab, setWhichTab] = React.useState(isFood ? `Smáréttir` : `Bjór`);

  return (
    <Styled.Container>
      <Styled.Tab>
        {Object.keys(Map).map(v => (
          <Styled.Button onClick={() => setWhichTab(v)}>{v}</Styled.Button>
        ))}
      </Styled.Tab>
      <Styled.Plain>
        <MenuList List={Map[`${whichTab}`] as Drink[] & Food[]} />
      </Styled.Plain>
    </Styled.Container>
  );
};
