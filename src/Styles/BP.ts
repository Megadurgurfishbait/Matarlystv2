/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable prettier/prettier */

export const breakpoints = {
  large: 1400,
  tablet: 1025,
  largePhone: 700,
  smallPhone: 500,
};

export const device = {
  large: `(max-width: ${breakpoints.large}px)`,
  smallPhone: `(max-width: ${breakpoints.smallPhone}px)`,
  largePhone: `(max-width: ${breakpoints.largePhone}px)`,
  tablet: `(max-width: ${breakpoints.tablet}px)`,
};
