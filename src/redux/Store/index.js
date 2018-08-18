import { createStore, applyMiddleware } from 'redux';
import logger from "redux-logger";
import thunkMiddleware from "redux-thunk";

import AllReducer from '../Reducer';
import { RequestFetchApi } from '../Action/action_fetchapi';
const Store = createStore(AllReducer,
  applyMiddleware(thunkMiddleware,
    logger
  )
);

Store.dispatch(RequestFetchApi());
export default Store;