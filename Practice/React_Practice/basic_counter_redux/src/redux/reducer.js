import { ADD, REDUCE } from "./actionTypes";

const initialState = {
  count: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD: {
      return { ...state, count: state.count + action.payload };
    }
    case REDUCE: {
      return { ...state, count: state.count - action.payload };
    }
  }
  return state;
};

export  { reducer };
