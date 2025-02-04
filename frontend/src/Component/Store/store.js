import { legacy_createStore } from "redux";
import { reducer } from "./reducer";

export const My_store=legacy_createStore(reducer)