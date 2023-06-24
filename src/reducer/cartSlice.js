import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

export const setCookies = createAsyncThunk(
	"cartCount/setcartCount",
	async (action) => {
		Cookies.set("cartCount", action, { expires: 7, path: "" });
	}
);

const cartSlice = createSlice({
	name: "cartSlice",
	initialState: {
		cartInitialState: 0,
	},
	reducers: {
		addCartCount: (state) => {
			state.cartInitialState += 1;
		},
		subCartCount: (state, action) => {
			action.payload
				? (state.cartInitialState -= action.payload)
				: (state.cartInitialState -= 1);
		},
	},
});

export const { addCartCount, subCartCount } = cartSlice.actions;
export default cartSlice.reducer;
