import Axios from 'axios';

const loadData = async () => {
  let res = null;
  try {
    res = await Axios.get('public/data/sample.json');
  } catch (err) {
    console.log(err);
  }

  const data = res.data || {};
  return { data, isLoading: false };
};

export default {
  loadData
};
