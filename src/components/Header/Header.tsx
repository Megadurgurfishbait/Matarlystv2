import React from 'react';

// Styles
import * as H from './Header.styled';
import { Routes } from '@/Routes';

export const Header: React.FC<{}> = () => (
  <H.StyledBoxOuter animation="fadeIn">
    <H.Menu styles={H.StyledBurgerMenu}>
      <H.StyledLink href="/">
        <H.StyledImage src={'/images/logo.png'} />
      </H.StyledLink>
      {HeaderList.map(li => ListItem(li))}
    </H.Menu>

    <H.StyledBoxInner
      flex
      justify="center"
      align="center"
      style={{ height: '100px' }}
    >
      <H.StyledText>Matarlyst</H.StyledText>
    </H.StyledBoxInner>
  </H.StyledBoxOuter>
);

const ListItem = ({ href, name }) => (
  <H.StyledLink href={href}>
    <H.StyledSpan>
      <H.StyledAnchor>{name}</H.StyledAnchor>
    </H.StyledSpan>
  </H.StyledLink>
);

const HeaderList = [
  { name: 'Matseðill', href: Routes.Matsedill },
  { name: 'Staðurinn', href: Routes.Stadurinn },
  { name: 'Upplýsingar', href: Routes.Upplysingar },
  { name: 'Facebook', href: Routes.Facebook },
  { name: 'Instagram', href: Routes.Instagram },
];
