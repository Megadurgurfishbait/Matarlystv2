import React from 'react';

import { Routes } from '@/Routes';

// Harry Styles

import Image from 'next/image';
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
        <Image layout="fixed" height={200} width={200} src="/static/logo.png" />
      </H.StyledLink>
      <H.Links>
        {HeaderList.map(li => (
          <ListItem key={li.name} {...li} />
        ))}
      </H.Links>
      <H.BottomRow>
        <H.StyledAnchor href={`${Routes.Facebook}`}>
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
          >
            <title>facebook2</title>
            <path
              fill="#ad6945"
              d="M29 0h-26c-1.65 0-3 1.35-3 3v26c0 1.65 1.35 3 3 3h13v-14h-4v-4h4v-2c0-3.306 2.694-6 6-6h4v4h-4c-1.1 0-2 0.9-2 2v2h6l-1 4h-5v14h9c1.65 0 3-1.35 3-3v-26c0-1.65-1.35-3-3-3z"
            />
          </svg>
        </H.StyledAnchor>
        <H.StyledAnchor href={`${Routes.Instagram}`}>
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
          >
            <title>instagram</title>
            <path
              fill="#ad6945"
              d="M16 2.881c4.275 0 4.781 0.019 6.462 0.094 1.563 0.069 2.406 0.331 2.969 0.55 0.744 0.288 1.281 0.638 1.837 1.194 0.563 0.563 0.906 1.094 1.2 1.838 0.219 0.563 0.481 1.412 0.55 2.969 0.075 1.688 0.094 2.194 0.094 6.463s-0.019 4.781-0.094 6.463c-0.069 1.563-0.331 2.406-0.55 2.969-0.288 0.744-0.637 1.281-1.194 1.837-0.563 0.563-1.094 0.906-1.837 1.2-0.563 0.219-1.413 0.481-2.969 0.55-1.688 0.075-2.194 0.094-6.463 0.094s-4.781-0.019-6.463-0.094c-1.563-0.069-2.406-0.331-2.969-0.55-0.744-0.288-1.281-0.637-1.838-1.194-0.563-0.563-0.906-1.094-1.2-1.837-0.219-0.563-0.481-1.413-0.55-2.969-0.075-1.688-0.094-2.194-0.094-6.463s0.019-4.781 0.094-6.463c0.069-1.563 0.331-2.406 0.55-2.969 0.288-0.744 0.638-1.281 1.194-1.838 0.563-0.563 1.094-0.906 1.838-1.2 0.563-0.219 1.412-0.481 2.969-0.55 1.681-0.075 2.188-0.094 6.463-0.094zM16 0c-4.344 0-4.887 0.019-6.594 0.094-1.7 0.075-2.869 0.35-3.881 0.744-1.056 0.412-1.95 0.956-2.837 1.85-0.894 0.888-1.438 1.781-1.85 2.831-0.394 1.019-0.669 2.181-0.744 3.881-0.075 1.713-0.094 2.256-0.094 6.6s0.019 4.887 0.094 6.594c0.075 1.7 0.35 2.869 0.744 3.881 0.413 1.056 0.956 1.95 1.85 2.837 0.887 0.887 1.781 1.438 2.831 1.844 1.019 0.394 2.181 0.669 3.881 0.744 1.706 0.075 2.25 0.094 6.594 0.094s4.888-0.019 6.594-0.094c1.7-0.075 2.869-0.35 3.881-0.744 1.050-0.406 1.944-0.956 2.831-1.844s1.438-1.781 1.844-2.831c0.394-1.019 0.669-2.181 0.744-3.881 0.075-1.706 0.094-2.25 0.094-6.594s-0.019-4.887-0.094-6.594c-0.075-1.7-0.35-2.869-0.744-3.881-0.394-1.063-0.938-1.956-1.831-2.844-0.887-0.887-1.781-1.438-2.831-1.844-1.019-0.394-2.181-0.669-3.881-0.744-1.712-0.081-2.256-0.1-6.6-0.1v0z"
            />
            <path
              fill="#ad6945"
              d="M16 7.781c-4.537 0-8.219 3.681-8.219 8.219s3.681 8.219 8.219 8.219 8.219-3.681 8.219-8.219c0-4.537-3.681-8.219-8.219-8.219zM16 21.331c-2.944 0-5.331-2.387-5.331-5.331s2.387-5.331 5.331-5.331c2.944 0 5.331 2.387 5.331 5.331s-2.387 5.331-5.331 5.331z"
            />
            <path
              fill="#ad6945"
              d="M26.462 7.456c0 1.060-0.859 1.919-1.919 1.919s-1.919-0.859-1.919-1.919c0-1.060 0.859-1.919 1.919-1.919s1.919 0.859 1.919 1.919z"
            />
          </svg>
        </H.StyledAnchor>
      </H.BottomRow>
    </H.Slide>

    <H.StyledBoxInner>
      <H.StyledText>Matarlyst</H.StyledText>
    </H.StyledBoxInner>
  </H.StyledBoxOuter>
);

/*

        */
