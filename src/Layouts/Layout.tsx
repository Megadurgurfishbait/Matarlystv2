import React from 'react';
import {} from 'styled-components';
// Components
import { Box, Grommet } from 'grommet';
import { Footer, Header } from '@/components';

// Harry Styles
import { Colors, themeCustom } from '@/Styles';
import { LayoutProps } from '@/Models';
import { Min, Max, breakpoints as bp } from '@/Styles/BP';
import { StyledBox, StyledGrid } from './Layout.styled';

const TextAndPhoto = [
  { name: `photoGrid`, start: [2, 0], end: [2, 0] },
  { name: `textGrid`, start: [1, 0], end: [1, 0] },
];

const OnlyPhoto = [{ name: `photoGrid`, start: [1, 0], end: [2, 0] }];

const Phone = [{ name: `textGrid`, start: [1, 0], end: [2, 0] }];

export const Layout: React.FC<LayoutProps> = ({
  PhotoContainer,
  TextContainer,
}) => {
  let WhatToShow;

  if (Min(bp.tablet)) WhatToShow = TextAndPhoto;
  if (Max(bp.tablet - 1)) WhatToShow = Phone;
  if (!TextContainer) WhatToShow = OnlyPhoto;

  return (
    <Grommet full theme={themeCustom}>
      <Box height="100%" justify="between" background={Colors.mainColor}>
        <Header />
        <StyledGrid
          rows={[`flex`]}
          columns={[`5%`, `45%`, `45%`, `5%`]}
          areas={WhatToShow}
        >
          <Box gridArea="photoGrid" fill background={Colors.mainColor}>
            {PhotoContainer}
          </Box>
          {TextContainer && (
            <StyledBox
              justify="center"
              align="center"
              gridArea="textGrid"
              background={Colors.mainColor}
            >
              {TextContainer}
            </StyledBox>
          )}

          <Footer />
        </StyledGrid>
      </Box>
    </Grommet>
  );
};
