import { combineReducers } from "redux";
import { loadingBarReducer } from "react-redux-loading";

import foods from "./foods";
import orders from "./orders";

export default combineReducers({
  foods,
  orders,
  loadingBar: loadingBarReducer
});
