import { INCREASE_PRICE, DECREASE_PRICE } from "./types";

export function productReducer(state, action) {
	switch (action.type) {
		case INCREASE_PRICE: {
			const { id, category } = action;

			const newState = state.map((item) => {
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
			return newState;
		}
		case DECREASE_PRICE: {
			const { id, category } = action;

			const newState = state.map((item) => {
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
			return newState;
		}
		default:
			return { ...state };
	}
}
