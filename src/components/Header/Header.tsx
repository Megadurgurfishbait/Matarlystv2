import React from 'react';

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
  <H.StyledLink key={name} href={href} prefetch={false}>
    <H.StyledSpan>
      <H.StyledAnchor>{name}</H.StyledAnchor>
    </H.StyledSpan>
  </H.StyledLink>
);

export const Header: React.FC<{}> = () => (
  <H.StyledBoxOuter>
    <H.Slide styles={H.StyledBurgerMenu}>
      <H.StyledLink href="/" prefetch={false}>
        <H.StyledImage height={200} width={200} src="/logo.png" />
      </H.StyledLink>
      <H.Links>
        {HeaderList.map(li => (
          <ListItem key={li.name} {...li} />
        ))}
      </H.Links>
      <H.BottomRow />
    </H.Slide>

    <H.StyledBoxInner>
      <H.StyledText>Matarlyst</H.StyledText>
    </H.StyledBoxInner>
  </H.StyledBoxOuter>
);

/*
        <H.StyledAnchor href={`${Routes.Facebook}`}>
          <Facebook color={`${Colors.SECONDARY_COLOR_DARKER}`} />
        </H.StyledAnchor>
        <H.StyledAnchor href={`${Routes.Instagram}`}>
          <Instagram
            color={`${Colors.SECONDARY_COLOR_DARKER}`}
            style={{ borderRadius: `5px` }}
          />
        </H.StyledAnchor>
        */
