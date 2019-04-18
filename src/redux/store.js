import cartReducer from "./cart_ducks";
import { createStore, combineReducers } from "redux";

const reducers = {
  cart: cartReducer
};

const combinedReducers = combineReducers(reducers);
const store = createStore(combinedReducers);

export default store;
