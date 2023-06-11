import { createSlice } from "@reduxjs/toolkit";

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
