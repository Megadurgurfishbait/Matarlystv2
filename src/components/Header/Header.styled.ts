import Link from 'next/link';
import Image from 'next/image';
import Slide from 'react-burger-menu/lib/menus/slide';
import styled from 'styled-components';

// Styles
import { Font, Colors, Vertical } from '@/Styles';
import { device } from '@/Styles/BP';

const StyledLink = styled(Link)``;
const StyledSpan = styled.span`
  background-color: ${Colors.SECONDARY_COLOR_DARKER};
  padding: 5px;
  margin: 5px 0px;

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
  ${Font({
    fontsize: 24,
    fontweight: 400,
    letterspacing: 0.3,
    fontfamily: `Raleway`,
  })}
  color: white;
  margin: 10px 0px;
  text-transform: uppercase;

  &:hover {
    cursor: pointer;
  }
`;

const StyledText = styled.h1`
  margin: 0px;
  padding-left: 50px;
  width: 100%;
  text-align: center;
  align-self: center;
  text-transform: uppercase;
  color: ${Colors.SECONDARY_COLOR};
  ${Font({
    fontsize: 34,
    fontfamily: `Raleway`,
    letterspacing: 1,
  })};
`;

const StyledBoxInner = styled(Vertical)`
  padding: 0px 30px;
  justify-content: center;
  align-items: center;
  height: 100px;

  @media ${device.large} {
    padding: 0px 30px;
    display: none;
  }
`;

const StyledBoxOuter = styled(Vertical)`
  background-color: ${Colors.MAIN_COLOR};
  width: 400px;
  height: max-content;
  position: fixed;
  z-index: 50;

  @media ${device.large} {
    background-color: transparent;
    width: 100px;
  }
`;

const BottomRow = styled.div`
  display: flex;

  & * svg {
    margin: 0px 10px 10px 10px;
  }
`;

const Links = styled.div`
  display: flex;
  flex-direction: column;
  outline: none;

  &:focus {
    outline: none;
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
    background: `${Colors.SECONDARY_COLOR}`,
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
    background: `${Colors.SECONDARY_COLOR}`,
  },
  bmMenuWrap: {
    position: `fixed`,
    height: `calc(100% - 50px)`,
  },
  bmMenu: {
    background: `${Colors.MAIN_COLOR}`,
    padding: `1.0em 1.0em 0`,
    fontSize: `1.15em`,
    overflow: `hidden`,
    width: `100%`,
  },
  bmMorphShape: {
    fill: `${Colors.MAIN_COLOR}`,
  },
  bmItemList: {
    display: `flex`,
    flexDirection: `column`,
    alignItems: `center`,
    justifyContent: `space-between`,
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
  Slide,
  BottomRow,
  Links,
};
