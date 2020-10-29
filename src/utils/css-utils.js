export const breakpoints = {
  s: 460,
  m: 768,
  l: 1024,
};

export const device = {
  phone: `(min-width: ${breakpoints.s}px)`,
  tablet: `(min-width: ${breakpoints.m}px)`,
  desktop: `(min-width: ${breakpoints.l}px)`,
};

export const rgba = (hex, alpha) => {
  const [r, g, b] = hex.match(/\w\w/g).map((x) => parseInt(x, 16));
  return `rgba(${r},${g},${b},${alpha})`;
};

export const px = (val) => `${val}px`;

export default {
  breakpoints,
  device,
  rgba,
  px,
};
