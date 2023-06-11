import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import productSlice from "./productSlice";

const rootReducer = combineReducers({
	cartSlice: cartSlice,
	productSlice: productSlice,
});

export const store = configureStore({
	reducer: rootReducer,
});
