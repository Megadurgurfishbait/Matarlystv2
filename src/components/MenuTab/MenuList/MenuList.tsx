import React from 'react';
import Fade from 'react-reveal/Fade';
import { Drink, Food } from 'Models';

import * as Styled from './MenuList.Styled';

const ListItem: React.FC<{ items: Food }> = ({ items }): JSX.Element => (
  <Styled.ListRow>
    <Styled.ListColumn>
      <Fade>
        <Styled.TitleContainer>{items.title}</Styled.TitleContainer>
        <Styled.IngredContainer>{items.Ingred}</Styled.IngredContainer>
      </Fade>
    </Styled.ListColumn>
    <Fade>
      <Styled.ListPrice>{items.price}</Styled.ListPrice>
    </Fade>
  </Styled.ListRow>
);

export const MenuList: React.FC<{ List: Food[] & Drink[] }> = ({ List }) => (
  <Styled.Container>
    {List.map(i => (
      <ListItem items={i} key={i.title} />
    ))}
  </Styled.Container>
);
