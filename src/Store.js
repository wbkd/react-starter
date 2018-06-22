import createStore from 'unistore';

const Store = createStore({
  isLoading: true,
  data: false
});

const changeHandler = (state) => {
  console.log('change', state);
};

Store.subscribe(changeHandler);

export default Store;
