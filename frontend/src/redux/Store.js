import { legacy_createStore } from "redux";
import bookReducer from "./reducers/bookReducer";
export const Mystore=legacy_createStore(bookReducer)