import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";

const productSlice = createSlice({
	name: "productSlice",
	initialState: {
		productInitialState: initialState,
	},
	reducers: {
		increasePrice: (state, action) => {
			const { id, category } = action.payload;

			state.productInitialState.forEach((item) => {
				if (item.url === category) {
					item.products.forEach((element) => {
						if (element.id === +id) {
							element.cartPrice += element.price;
							element.cartCount++;
						}
					});
				}
			});
		},
		decreasePrice: (state, action) => {
			const { id, category } = action.payload;

			state.productInitialState.forEach((item) => {
				if (item.url === category) {
					item.products.forEach((element) => {
						if (element.id === +id) {
							element.cartPrice -= element.price;
							element.cartCount--;
						}
					});
				}
			});
		},
		deleteProduct: (state, action) => {
			const { id, category } = action.payload;

			state.productInitialState.forEach((item) => {
				if (item.url === category) {
					item.products.forEach((element) => {
						if (element.id === +id) {
							element.cartPrice = 0;
							element.cartCount = 0;
						}
					});
				}
			});
		},
	},
});

export const { increasePrice, decreasePrice, deleteProduct } =
	productSlice.actions;
export default productSlice.reducer;
