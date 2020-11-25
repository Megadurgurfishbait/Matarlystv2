import React from 'react';
import { Facebook, Instagram } from 'grommet-icons';
import { Routes } from '@/Routes';

// Harry Styles
import { Colors } from '@/Styles';
import * as H from './Header.styled';

const HeaderList = [
  { name: `Matseðill`, href: Routes.Matsedill },
  { name: `Drykkjarseðill`, href: Routes.Drykkjarsida },
  { name: `Staðurinn`, href: Routes.Stadurinn },
  { name: `Upplýsingar`, href: Routes.Upplysingar },
];
const ListItem: React.FC<{ href: string; name: string }> = ({
  href,
  name,
}): JSX.Element => (
  <H.StyledLink key={name} href={href}>
    <H.StyledSpan>
      <H.StyledAnchor>{name}</H.StyledAnchor>
    </H.StyledSpan>
  </H.StyledLink>
);

export const Header: React.FC<{}> = () => (
  <H.StyledBoxOuter animation="fadeIn">
    <H.Slide styles={H.StyledBurgerMenu}>
      <H.StyledLink href="/">
        <H.StyledImage src="/logo.png" />
      </H.StyledLink>
      <H.Links>
        {HeaderList.map(li => (
          <ListItem {...li} />
        ))}
      </H.Links>
      <H.BottomRow>
        <H.StyledAnchor href={`${Routes.Facebook}`}>
          <Facebook color={`${Colors.SECONDARY_COLOR_DARKER}`} />
        </H.StyledAnchor>
        <H.StyledAnchor href={`${Routes.Instagram}`}>
          <Instagram
            color={`${Colors.SECONDARY_COLOR_DARKER}`}
            style={{ borderRadius: `5px` }}
          />
        </H.StyledAnchor>
      </H.BottomRow>
    </H.Slide>

    <H.StyledBoxInner>
      <H.StyledText>Matarlyst</H.StyledText>
    </H.StyledBoxInner>
  </H.StyledBoxOuter>
);
