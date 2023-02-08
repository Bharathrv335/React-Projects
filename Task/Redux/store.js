import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const initialState = {
  data: [],
  loading: false,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_DATA_START":
      return { ...state, loading: true };
    case "FETCH_DATA_SUCCESS":
      return { ...state, data: action.payload, loading: false };
    case "FETCH_DATA_ERROR":
      return { ...state, error: action.payload, loading: false };
    default:
      return state;
  }
};

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
