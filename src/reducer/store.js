import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import productSlice from "./productSlice";
import forecastSlice from "./forecastSlice";

const rootReducer = combineReducers({
	cartSlice: cartSlice,
	productSlice: productSlice,
	forecastSlice: forecastSlice,
});

export const store = configureStore({
	reducer: rootReducer,
});
