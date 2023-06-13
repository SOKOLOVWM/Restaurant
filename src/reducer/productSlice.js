import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";

const findProduct = (state, action) => {
	const { id, category } = action.payload;
	let product = null;

	state.productInitialState.forEach((item) => {
		if (item.url === category) {
			item.products.forEach((element) => {
				if (element.id === +id) {
					product = element;
				}
			});
		}
	});

	return product;
};

const productSlice = createSlice({
	name: "productSlice",
	initialState: {
		productInitialState: initialState,
	},
	reducers: {
		increasePrice: (state, action) => {
			const product = findProduct(state, action);
			product.cartPrice += product.price;
			product.cartCount++;
		},
		decreasePrice: (state, action) => {
			const product = findProduct(state, action);
			product.cartPrice -= product.price;
			product.cartCount--;
		},
		deleteProduct: (state, action) => {
			const product = findProduct(state, action);
			product.cartPrice = 0;
			product.cartCount = 0;
		},
	},
});

export const { increasePrice, decreasePrice, deleteProduct } =
	productSlice.actions;
export default productSlice.reducer;
