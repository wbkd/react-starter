const INCREMENT = 'App/AppState/INCREMENT';

const initialState = {
  counter: 0
}

export function increment() {
  return { type: INCREMENT };
}

export default function AppReducer(state = initialState, action = {}) {
  switch(action.type) {

    case INCREMENT:
      return Object.assign({}, state, { counter: ++state.counter });

    default:
      return Object.assign({}, state)
  }
};
