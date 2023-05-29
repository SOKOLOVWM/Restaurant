import styles from "./BasketCounter.module.css";
import cart from "./../../../../assets/images/icon_cart.svg";
import { useState, useContext } from "react";
import { INCREASE_PRICE } from "../../../../reducer/types";
import { DECREASE_PRICE } from "../../../../reducer/types";
import { Button } from "../../../../common/Button/Button";
import { CartContext } from "../../../App/App";

export function BasketCounter({
	productPrice,
	cartPrice,
	cartCount,
	dispatch,
	category,
	id,
	addStyles,
}) {
	const [isShowCount, setIsShowCount] = useState(!!cartCount);
	const { cartTotalCount, setCartTotalCount } = useContext(CartContext);

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

		dispatch({
			type: DECREASE_PRICE,
			id: currentTarget.id,
			category: category,
		});
	};

	function handleCartClick({ currentTarget }) {
		setCartTotalCount(cartTotalCount + 1);
		setIsShowCount(!isShowCount);
		dispatch({
			type: INCREASE_PRICE,
			id: currentTarget.id,
			category: category,
		});
	}

	if (isShowCount) {
		return (
			<>
				<span className={styles.counter}>{cartCount}</span>
				<Button
					title="-"
					id={id}
					handleClick={handleCountSub}
					addStyles={styles.buttonCountChange}
				/>
				<span className={styles.price}>
					{cartPrice.toLocaleString()} &#x20bd;
				</span>
				<Button
					title="+"
					id={id}
					handleClick={handleCountAdd}
					addStyles={styles.buttonCountChange}
				/>
			</>
		);
	}

	return (
		<>
			<span className={styles.price}>
				{productPrice.toLocaleString()} &#x20bd;
			</span>

			<Button
				addStyles={addStyles}
				title="В корзину"
				image={cart}
				id={id}
				handleClick={handleCartClick}
			/>
		</>
	);
}
