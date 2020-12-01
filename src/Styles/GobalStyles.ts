import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    padding: 0px;
    margin: 0px;
    overflow:hidden;
    height: 100vh;


    & > div {
      height: 100vh;
    }
  }
`;

export const Vertical = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  flex-direction: column;
`;

export const Horizontal = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
`;
