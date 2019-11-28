import React from 'react';
import { useStoreActions, useStoreState } from 'easy-peasy';
import { Button, Box } from 'rebass/styled-components';

const App = () => {
  const loadData = useStoreActions(actions => actions.data.loadData);
  const isLoading = useStoreState(state => state.data.isLoading);
  const data = useStoreState(state => state.data.data);

  return (
    <Box>
      <Button onClick={loadData}>Load Data</Button>
      {isLoading ? 'loading...' : `data.length: ${data.length}`}
    </Box>
  );
};

export default App;
