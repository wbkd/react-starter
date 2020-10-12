import { createStore, thunk, action } from 'easy-peasy';
import fetch from 'unfetch';

const model = {
  app: {
    data: null,
    dataLoading: false,
    loadData: thunk(async (actions) => {
      try {
        actions.loadDataStart();
        const response = await fetch('static/data/data.json');
        const data = await response.json();
        actions.loadDataSuccess(data);
      } catch (_) {
        actions.loadDataFail(_);
      }
    }),
    loadDataStart: action((state) => {
      state.dataLoading = true;
    }),
    loadDataSuccess: action((state, payload) => {
      state.data = payload;
      state.dataLoading = false;
    }),
    loadDataFail: action((state) => {
      state.data = null;
      state.dataLoading = false;
    }),
  },
};

export default createStore(model);
