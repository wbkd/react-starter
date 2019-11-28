import baseTheme from '@rebass/preset';

const defaultTheme = {
  ...baseTheme,
  // https://rebassjs.org/theming
  // add custom theme options here
};

const bodyFontSize = defaultTheme.fontSizes[0];
defaultTheme.fontSizes.body = bodyFontSize;

export default defaultTheme;
