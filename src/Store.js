import createStore from 'unistore';
import fetch from 'unfetch';

export const Store = createStore({
  isLoading: true,
  data: false
});

export const actions = () => ({
  loadData: async () => {
    let data = null;
    try {
      data = await fetch('public/data/sample.json').then(r => r.json());
    } catch (err) {
      console.log(err);
    }
    return { data, isLoading: false };
  }
});

export default {
  Store,
  actions
};
