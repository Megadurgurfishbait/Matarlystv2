import { createGlobalStyle } from 'styled-components';
import { grommet } from 'grommet/themes';
import { deepMerge } from 'grommet/utils';
import { Colors } from '.';

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

export const LayoutPadding = `padding: 0px 200px`;

export const themeCustom = deepMerge(grommet, {
  tab: {
    color: `${Colors.thirdColor}`,
    active: {
      color: `${Colors.thirdColor}`,
    },
    hover: {
      color: `${Colors.thirdColor}`,
    },
    border: {
      color: `${Colors.mainColor}`,
      size: `xsmall`,
      active: {
        color: `${Colors.secondaryColor}`,
      },
      hover: {
        color: `${Colors.secondaryColor}`,
      },
    },
  },
  menu: {
    background: `${Colors.mainColor}`,
  },
});
