import { compose, applyMiddleware, legacy_createStore } from "redux";
import rootReducer from "../reducers";
import thunk from "redux-thunk";

const store = legacy_createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
