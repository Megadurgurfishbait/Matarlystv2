import React from 'react';

// Components
import { Box, Grommet } from 'grommet';
import { Footer, Header } from '@/components';

// Harry Styles
import { Colors, themeCustom } from '@/Styles';
import { LayoutProps } from '@/Models';
import { Min, Max, breakpoints as bp } from '@/Styles/BP';
import * as L from './Layout.styled';

export const Layout: React.FC<LayoutProps> = ({
  PhotoContainer,
  TextContainer,
}) => {
  let WhatToShow;

  if (Min(bp.large)) WhatToShow = L.LAYOUT_TEXT_AND_PHOTO;
  if (Max(bp.smallPhone - 1)) WhatToShow = L.LAYOUT_PHONE_ONLY;
  if (!TextContainer) WhatToShow = L.LAYOUT_PHOTO_ONLY;

  return (
    <Grommet full theme={themeCustom}>
      <Box height="100%" justify="between" background={Colors.MAIN_COLOR}>
        <Header />
        <L.StyledGrid
          fill
          rows={[`flex`]}
          columns={[`5%`, `45%`, `45%`, `5%`]}
          areas={WhatToShow}
        >
          <Box gridArea="photoGrid" fill background={Colors.MAIN_COLOR}>
            {PhotoContainer}
          </Box>
          {TextContainer && (
            <L.StyledBox
              justify="center"
              align="center"
              gridArea="textGrid"
              background={Colors.MAIN_COLOR}
            >
              {TextContainer}
            </L.StyledBox>
          )}

          <Footer />
        </L.StyledGrid>
      </Box>
    </Grommet>
  );
};
