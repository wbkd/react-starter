import React, { memo } from 'react';
import { Global, css } from '@emotion/react';
import emotionNormalize from 'emotion-normalize';

const NormalizeStyle = memo(() => {
  const globalStyles = css`
    ${emotionNormalize}
  `;

  return <Global styles={globalStyles} />;
});

export default NormalizeStyle;
