import React from 'react';
import { useStoreActions, useStoreState } from 'easy-peasy';
import { Button, Box } from 'rebass/styled-components';

import DataDisplay from '~/components/DataDisplay';

const App = () => {
  const loadData = useStoreActions(actions => actions.data.loadData);
  const isLoading = useStoreState(state => state.data.isLoading);
  const data = useStoreState(state => state.data.data);

  return (
    <Box>
      <Button onClick={loadData}>Load Data</Button>
      <DataDisplay isLoading={isLoading} data={data} />
    </Box>
  );
};

export default App;
