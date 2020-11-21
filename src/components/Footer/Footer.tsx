import React from 'react';

// Harry Styles
import { Container, List, Li } from './Footer.styled';

export const Footer: React.FC<{}> = () => (
  <Container>
    <List>
      <Li>Austurvegur 35</Li>
      <Li>800 Selfoss</Li>
      <Li>7931952</Li>
      <Li>Matarlyst(at)matarlyst.is</Li>
    </List>
  </Container>
);
