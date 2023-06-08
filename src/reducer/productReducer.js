import { INCREASE_PRICE, DECREASE_PRICE, DELETE_PRODUCT } from "./types";
import { initialState } from "./initialState";

export const increasePrice = (payload) => ({
	type: INCREASE_PRICE,
	payload,
});
export const decreasePrice = (payload) => ({
	type: DECREASE_PRICE,
	payload,
});
export const deleteProduct = (payload) => ({
	type: DELETE_PRODUCT,
	payload,
});

const commonInitialState = {
	productInitialState: initialState,
};

export function productReducer(state = commonInitialState, action) {
	const { productInitialState } = state;

	switch (action.type) {
		case INCREASE_PRICE: {
			const { id, category } = action.payload;

			const newState = productInitialState.map((item) => {
				if (item.url === category) {
					const products = item.products.map((element) => {
						if (element.id === +id) {
							return {
								...element,
								cartPrice: element.cartPrice + element.price,
								cartCount: element.cartCount + 1,
							};
						}
						return element;
					});
					return { ...item, products: products };
				}
				return item;
			});
			return { ...state, productInitialState: newState };
		}
		case DECREASE_PRICE: {
			const { id, category } = action.payload;

			const newState = productInitialState.map((item) => {
				if (item.url === category) {
					const products = item.products.map((element) => {
						if (element.id === +id) {
							return {
								...element,
								cartPrice: element.cartPrice - element.price,
								cartCount: element.cartCount - 1,
							};
						}
						return element;
					});
					return { ...item, products: products };
				}
				return item;
			});
			return { ...state, productInitialState: newState };
		}
		case DELETE_PRODUCT: {
			const { id, category } = action.payload;

			const newState = productInitialState.map((item) => {
				if (item.url === category) {
					const products = item.products.map((element) => {
						if (element.id === +id) {
							return {
								...element,
								cartPrice: 0,
								cartCount: 0,
							};
						}
						return element;
					});
					return { ...item, products: products };
				}
				return item;
			});
			return { ...state, productInitialState: newState };
		}
		default:
			return { ...state };
	}
}
