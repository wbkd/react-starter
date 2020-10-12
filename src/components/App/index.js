import React from 'react';
import { useStoreActions, useStoreState } from 'easy-peasy';

import { Box } from 'rebass';
import Button from 'components/Button';
import Spinner from 'components/Spinner';

const App = () => {
  const data = useStoreState((state) => state.app.data);
  const dataLoading = useStoreState((state) => state.app.dataLoading);
  const loadData = useStoreActions((actions) => actions.app.loadData);

  return (
    <Box p={2}>
      <h1>React Starterkit</h1>
      {dataLoading && <Spinner />}
      {data ? data.length : <Button onClick={loadData}>load data</Button>}
    </Box>
  );
};

export default App;
