import { useState, useContext } from "react";
import { useLocation, useParams } from "react-router-dom";
import { AppContext } from "../../App";
import { BasketCounterCommon } from "./BasketCounterCommon/BasketCounterCommon";
import { BasketCounterCart } from "./BasketCounterCart/BasketCounterCart";
import { INCREASE_PRICE } from "../../reducer/types";
import { DECREASE_PRICE } from "../../reducer/types";

export function BasketCounterContainer({
	product,
	dispatch,
	category,
	addStyles,
}) {
	const { cartTotalCount, setCartTotalCount } = useContext(AppContext);
	const { cartCount } = product;
	const [isShowCount, setIsShowCount] = useState(!!cartCount);
	const { id: urlId } = useParams();
	const { pathname } = useLocation();
	const isCartPage = pathname === "/cart";

	const handleCountAdd = ({ currentTarget }) => {
		setCartTotalCount(cartTotalCount + 1);
		dispatch({
			type: INCREASE_PRICE,
			id: currentTarget.id,
			category: category,
		});
	};

	const handleCountSub = ({ currentTarget }) => {
		if (cartCount === 1) setIsShowCount(!isShowCount);
		setCartTotalCount(cartTotalCount - 1);
		dispatch({
			type: DECREASE_PRICE,
			id: currentTarget.id,
			category: category,
		});
	};

	const handleCartClick = ({ currentTarget }) => {
		setIsShowCount(!isShowCount);
		setCartTotalCount(cartTotalCount + 1);
		dispatch({
			type: INCREASE_PRICE,
			id: currentTarget.id,
			category: category,
		});
	};

	const render = () => {
		if (isCartPage) {
			return (
				<BasketCounterCart
					product={product}
					handleCountAdd={handleCountAdd}
					handleCountSub={handleCountSub}
				/>
			);
		} else {
			return (
				<BasketCounterCommon
					addStyles={addStyles}
					product={product}
					urlId={urlId}
					isShowCount={isShowCount}
					handleCountAdd={handleCountAdd}
					handleCountSub={handleCountSub}
					handleCartClick={handleCartClick}
				/>
			);
		}
	};

	return <>{render()}</>;
}
