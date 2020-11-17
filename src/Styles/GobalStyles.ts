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
    color: `${Colors.THIRD_COLOR}`,
    active: {
      color: `${Colors.THIRD_COLOR}`,
    },
    hover: {
      color: `${Colors.THIRD_COLOR}`,
    },
    border: {
      color: `${Colors.MAIN_COLOR}`,
      size: `xsmall`,
      active: {
        color: `${Colors.SECONDARY_COLOR}`,
      },
      hover: {
        color: `${Colors.SECONDARY_COLOR}`,
      },
    },
  },
  menu: {
    background: `${Colors.MAIN_COLOR}`,
  },
});
