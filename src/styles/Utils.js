import { css } from 'styled-components';

// https://github.com/styled-components/styled-components/blob/master/docs/tips-and-tricks.md
export function getMediaQuery(size) {
  return (...args) => css`
    @media (min-width: ${size}px) {
      ${css(...args)}
    }
  `;
}

export const breakpoints = {
  s: 460,
  m: 768,
  l: 1024
};

export const media = {
  s: getMediaQuery(breakpoints.s),
  m: getMediaQuery(breakpoints.m),
  l: getMediaQuery(breakpoints.l)
};

export default {
  getMediaQuery,
  breakpoints,
  media
};
