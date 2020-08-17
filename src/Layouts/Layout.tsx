import React from 'react';

// Components
import { Grid, Box, Grommet } from 'grommet';
import { Footer, Header } from '@/components';

// Harry Styles
import { Colors, themeCustom } from '@/Styles';

const TextAndPhoto = [
  { name: 'footer', start: [1, 1], end: [2, 1] },
  { name: 'photoGrid', start: [2, 0], end: [2, 0] },
  { name: 'textGrid', start: [1, 0], end: [1, 0] },
];

const OnlyPhoto = [
  { name: 'footer', start: [1, 1], end: [2, 1] },
  { name: 'photoGrid', start: [1, 0], end: [2, 0] },
];

export const Layout: React.FC<Layout> = ({ PhotoContainer, TextContainer }) => (
  <Grommet full theme={themeCustom}>
    <Box fill justify="between" background={Colors.mainColor}>
      <Header />
      <Grid
        fill={true}
        rows={['flex', '40px']}
        columns={['5%', '45%', '45%', '5%']}
        areas={TextContainer ? TextAndPhoto : OnlyPhoto}
      >
        <Box gridArea="photoGrid" background={Colors.mainColor}>
          {PhotoContainer}
        </Box>

        {TextContainer && (
          <Box gridArea="textGrid" background={Colors.mainColor}>
            {TextContainer}
          </Box>
        )}
        <Box gridArea="footer" overflow="hidden">
          <Footer />
        </Box>
      </Grid>
    </Box>
  </Grommet>
);
