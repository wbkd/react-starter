import { px, breakpoints } from 'utils/css-utils';

const space = [0, 4, 8, 16, 32, 48, 64, 96, 128];
const spacePx = space.map(px);

const fontSizes = [12, 16, 20, 24, 36, 48, 54];
const fontSizesPx = fontSizes.map(px);
const breakpointsPx = Object.values(breakpoints).map(px);

const theme = {
  fonts: {
    sans:
      "-apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Ubuntu, Arial, sans-serif",
    mono: 'monospace',
  },
  space,
  spacePx,
  fontSizes,
  fontSizesPx,
  breakpoints: breakpointsPx,
  boxShadow: '0px 16px 64px rgba(26, 25, 43, 0.32);',
  colors: {
    primary: '#0041D0',
    orange: '#FF6700',
    blue: '#0041D0',
    red: '#FF0072',
    purple: '#784BE8',
    green: '#00D7CA',
    text: '#1A192B',
    textLight: '#808080',
    lightGrey: '#D9D9D9',
  },
};

export default theme;
