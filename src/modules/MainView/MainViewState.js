const INCREMENT = 'App/MainViewState/INCREMENT';

const initialState = {
  counter: 0
};

export function increment() {
  return { type: INCREMENT };
}

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case INCREMENT:
      return Object.assign({}, state, { counter: state.counter + 1 });

    default:
      return Object.assign({}, state);
  }
}
