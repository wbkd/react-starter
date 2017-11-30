import Axios from 'axios';

const LOAD_START = 'App/AppState/LOAD_START';
const LOAD_SUCCESS = 'App/AppState/LOAD_SUCCESS';
const LOAD_ERROR = 'App/AppState/LOAD_ERROR';

const initialState = {
  isLoading: true,
  data: false
};

export function loadData() {
  return (dispatch) => {
    dispatch({ type: LOAD_START });

    Axios.get('data/sample.json')
      .then((res) => {
        console.log('response', res);
        // here do sth with the data
        const data = res.data || {};
        dispatch({ type: LOAD_SUCCESS, data });
      })
      .catch((error) => {
        console.log(error);
        dispatch({ type: LOAD_ERROR });
      });
  };
}

export default function AppReducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD_START:
      return Object.assign({}, state, { isLoading: true });

    case LOAD_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        data: action.data
      });

    default:
      return Object.assign({}, state);
  }
}
