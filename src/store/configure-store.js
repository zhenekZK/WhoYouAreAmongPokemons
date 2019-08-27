import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import titleInformant from "../middlewares/title-informant";
import rootReducer from "../reducers";

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore(initialState = {}) {
  return createStore(
    rootReducer,
    initialState,
    storeEnhancers(applyMiddleware(thunkMiddleware, titleInformant))
  );
}
