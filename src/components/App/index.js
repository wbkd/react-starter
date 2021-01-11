import React from 'react';
import styled from '@emotion/styled';
import { useStoreActions, useStoreState } from 'easy-peasy';

import Spinner from 'components/Spinner';

const Wrapper = styled.div`
  padding: 20px;
`;

const App = () => {
  const data = useStoreState((state) => state.app.data);
  const dataLoading = useStoreState((state) => state.app.dataLoading);
  const loadData = useStoreActions((actions) => actions.app.loadData);

  return (
    <Wrapper>
      <h1>React Starterkit</h1>
      {dataLoading && <Spinner />}
      {data ? data.length : <button onClick={loadData}>load data</button>}
    </Wrapper>
  );
};

export default App;
