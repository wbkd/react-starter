import fetch from 'unfetch';

const loadData = Store => async () => {
  Store.setState({ isLoading: true });

  let data = null;
  try {
    const res = await fetch('public/data/sample.json');
    data = await res.json();
  } catch (err) {
    console.log(err);
  }
  return { data, isLoading: false };
};

export default Store => ({
  loadData: loadData(Store)
});
