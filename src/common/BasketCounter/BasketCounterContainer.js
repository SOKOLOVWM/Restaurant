import { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { BasketCounterCommon } from "./BasketCounterCommon/BasketCounterCommon";
import { BasketCounterCart } from "./BasketCounterCart/BasketCounterCart";
import { addCartCount, subCartCount } from "../../reducer/cartSlice";
import { increasePrice, decreasePrice } from "../../reducer/productSlice";

export function BasketCounterContainer({
	product,
	dispatch,
	category,
	addStyles,
}) {
	const { cartCount } = product;
	const [isShowCount, setIsShowCount] = useState(!!cartCount);
	const { id: urlId } = useParams();
	const { pathname } = useLocation();
	const isCartPage = pathname === "/cart";

	const handleCountAdd = ({ currentTarget }) => {
		dispatch(addCartCount());
		dispatch(increasePrice({ id: currentTarget.id, category: category }));
	};

	const handleCountSub = ({ currentTarget }) => {
		if (cartCount === 1) setIsShowCount(!isShowCount);
		dispatch(subCartCount());
		dispatch(decreasePrice({ id: currentTarget.id, category: category }));
	};

	const handleCartClick = ({ currentTarget }) => {
		setIsShowCount(!isShowCount);
		dispatch(addCartCount());
		dispatch(increasePrice({ id: currentTarget.id, category: category }));
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
