import React from 'react';
import { Routes } from '@/Routes';

// Harry Styles
import * as H from './Header.styled';

const HeaderList = [
  { name: `Matseðill`, href: Routes.Matsedill },
  { name: `Staðurinn`, href: Routes.Stadurinn },
  { name: `Upplýsingar`, href: Routes.Upplysingar },
  { name: `Facebook`, href: Routes.Facebook },
  { name: `Instagram`, href: Routes.Instagram },
];
const ListItem = ({ href, name }): JSX.Element => (
  <H.StyledLink key={name} href={href}>
    <H.StyledSpan>
      <H.StyledAnchor>{name}</H.StyledAnchor>
    </H.StyledSpan>
  </H.StyledLink>
);

export const Header: React.FC<{}> = () => (
  <H.StyledBoxOuter animation="fadeIn">
    <H.Menu styles={H.StyledBurgerMenu}>
      <H.StyledLink href="/">
        <H.StyledImage src="/images/logo.png" />
      </H.StyledLink>
      {HeaderList.map(li => ListItem(li))}
    </H.Menu>

    <H.StyledBoxInner>
      <H.StyledText>Matarlyst</H.StyledText>
    </H.StyledBoxInner>
  </H.StyledBoxOuter>
);
