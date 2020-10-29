import styled from '@emotion/styled';
import { keyframes } from '@emotion/core';
import { Box } from 'rebass';

const Bounce = keyframes`
  0%, 100% { -webkit-transform: scale(0.0) }
  50% { -webkit-transform: scale(1.0) }
`;

const Loader = styled(Box)`
  width: ${(p) => p.size || 50}px;
  height: ${(p) => p.size || 50}px;
  position: relative;

  &:before,
  &:after {
    content: '';
    width: 100%;
    height: 100%;
    border-radius: 50%;
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;
    animation: ${Bounce} ${(p) => p.duration || 2000}ms infinite ease-in-out;
    background: ${(p) => p.theme.colors.primary};
  }

  &:after {
    animation-delay: -${(p) => (p.duration ? p.duration / 2 : 1000)}ms;
  }
`;

export default Loader;
