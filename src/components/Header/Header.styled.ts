import { Text, Box, Image } from 'grommet';
import Link from 'next/link';
import { slide as Menu } from 'react-burger-menu';
import styled from 'styled-components';

// Styles
import { Font, Colors } from '@/Styles';
import { device } from '@/Styles/BP';

const StyledLink = styled(Link)``;
const StyledSpan = styled.span`
  background-color: ${Colors.secondaryColor};
  padding: 5px;
  margin: 5px 0px;
  transform: skewX(-8deg);
  border-radius: 5px;
`;
const StyledImage = styled(Image)`
  height: 150px;
  width: 150px;
  margin-bottom: 20px;

  &:hover {
    cursor: pointer;
  }
`;
const StyledAnchor = styled.a`
  ${Font({ fontsize: 24, fontweight: 800, letterspacing: 1.1 })}
  color: ${Colors.mainColor};
  margin: 10px 0px;

  &:hover {
    cursor: pointer;
  }
`;

const StyledText = styled(Text)`
  margin: 0px;
  padding-left: 50px;
  width: 100%;
  text-align: center;
  align-self: center;
  text-transform: uppercase;
  color: ${Colors.secondaryColor};
  ${Font({ fontsize: 34, fontfamily: `Raleway`, letterspacing: 2 })};
`;

const StyledBoxInner = styled(Box)`
  padding: 0px 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;

  @media ${device.large} {
    padding: 0px 30px;
    display: none;
  }
`;

const StyledBoxOuter = styled(Box)`
  background-color: ${Colors.mainColor};
  width: 400px;
  min-height: 100px;
  position: fixed;
  z-index: 50;

  @media ${device.large} {
    background-color: transparent;
  }
`;

const StyledBurgerMenu = {
  bmBurgerButton: {
    position: `fixed`,
    width: `36px`,
    height: `30px`,
    left: `36px`,
    top: `36px`,
  },
  bmBurgerBars: {
    background: `${Colors.secondaryColor}`,
    height: `8%`,
  },
  bmBurgerBarsHover: {
    background: `#a90000`,
  },
  bmCrossButton: {
    height: `40px`,
    width: `40px`,
  },
  bmCross: {
    background: `${Colors.secondaryColor}`,
  },
  bmMenuWrap: {
    position: `fixed`,
  },
  bmMenu: {
    background: `${Colors.mainColor}`,
    padding: `1.0em 1.0em 0`,
    fontSize: `1.15em`,
    overflow: `hidden`,
    width: `100%`,
  },
  bmMorphShape: {
    fill: `${Colors.mainColor}`,
  },
  bmItemList: {
    padding: `0.8em`,
    display: `flex`,
    flexDirection: `column`,
    alignItems: `center`,
  },
  bmItem: {
    display: `flex`,
    marginTop: `20px`,
  },
  bmOverlay: {
    background: `rgba(0, 0, 0, 0.3)`,
  },
};

export {
  StyledAnchor,
  StyledText,
  StyledBoxInner,
  StyledBurgerMenu,
  StyledBoxOuter,
  StyledLink,
  StyledImage,
  StyledSpan,
  Menu,
};
