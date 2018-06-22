import createStore from 'unistore';
import Axios from 'axios';

export const Store = createStore({
  isLoading: true,
  data: false
});

export const actions = () => ({
  loadData: async () => {
    let res = null;
    try {
      res = await Axios.get('public/data/sample.json');
    } catch (err) {
      console.log(err);
    }

    const data = res.data || {};
    return { data, isLoading: false };
  }
});

export default {
  Store,
  actions
};
