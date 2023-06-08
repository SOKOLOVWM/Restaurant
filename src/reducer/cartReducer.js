import { ADD_CART_COUNT, SUB_CART_COUNT } from "./types";

export const addCartCount = (payload) => ({
	type: ADD_CART_COUNT,
	payload,
});
export const subCartCount = (payload) => ({
	type: SUB_CART_COUNT,
	payload,
});

const commonInitialstate = {
	cartInitialState: 0,
};

export function cartReducer(state = commonInitialstate, action) {
	switch (action.type) {
		case ADD_CART_COUNT: {
			return {
				...state,
				cartInitialState: state.cartInitialState + 1,
			};
		}
		case SUB_CART_COUNT: {
			if (action.payload) {
				return {
					...state,
					cartInitialState: state.cartInitialState - action.payload,
				};
			}
			return {
				...state,
				cartInitialState: state.cartInitialState - 1,
			};
		}
		default:
			return { ...state };
	}
}
