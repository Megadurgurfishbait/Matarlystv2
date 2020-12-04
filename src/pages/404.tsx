import { Routes } from '@/Routes';
import { Colors, Vertical, Font } from '@/Styles';
import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

const Container = styled(Vertical)`
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  background-color: ${Colors.MAIN_COLOR};
  color: ${Colors.THIRD_COLOR};

  & > h3 {
    width: 30%;
    text-align: center;
    margin: 5px;
  }

  & > a {
    color: ${Colors.MAIN_COLOR};
    text-decoration: none;
    background-color: ${Colors.SECONDARY_COLOR};
    padding: 5px 25px;
    border-radius: 10px;
    margin-top: 10px;

    ${Font({ fontfamily: `Roboto`, fontsize: 18, fontweight: 800 })}
  }
`;
export default function Custom404(): JSX.Element {
  return (
    <Container>
      <img src="/static/logo.png" alt="Kaffi Matarlyst Logo" />
      <h3>Úps! Við klúðruðum einhverju. </h3>
      <h3>Ef þú vilt komast aftur á upphafsíðu getur þú ýtt:</h3>
      <Link href={`${Routes.Home}`}>
        <a href={`${Routes.Home}`}>Hér</a>
      </Link>
    </Container>
  );
}
