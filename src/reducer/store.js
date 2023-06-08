import { combineReducers, createStore } from "redux";
import { cartReducer } from "./cartReducer";
import { productReducer } from "./productReducer";

const rootReducer = combineReducers({
	cartReducer: cartReducer,
	productReducer: productReducer,
});

export const store = createStore(rootReducer);
