import { createStore, thunk, action } from 'easy-peasy';
import { fetchJson } from 'utils/data-utils';

const model = {
  app: {
    data: null,
    dataLoading: false,
    loadData: thunk(async (actions) => {
      actions.loadDataStart();
      const data = await fetchJson('static/data/data.json');
      if (data) {
        actions.loadDataSuccess(data);
      } else {
        actions.loadDataFail();
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
