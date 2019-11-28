import React from 'react';

export default ({ isLoading, data }) => {
  return <div>{isLoading ? 'loading...' : `data length: ${data.length}`}</div>;
};
