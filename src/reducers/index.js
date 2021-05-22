import { combineReducers } from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import docReducer from "./docReducer";
import loadingReducer from "./loadingReducer";
import extractReducer from "./extractReducer";

export default combineReducers({
  auth: authReducer,
  error: errorReducer,
  loading: loadingReducer,
  doc: docReducer,
  content: extractReducer,
});
