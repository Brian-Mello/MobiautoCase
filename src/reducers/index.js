import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import tabelafipe from './tabelafipe';

export const generateReducers = history =>
  combineReducers({
    router: connectRouter(history),
    tabelafipe
  });
