import styles from "./BasketCounter.module.css";
import cart from "./../../../../assets/images/icon_cart.svg";
import { useState } from "react";
import { INCREASE_PRICE } from "../../../../reducer/types";
import { DECREASE_PRICE } from "../../../../reducer/types";

export function BasketCounter({
	productPrice,
	cartPrice,
	cartCount,
	dispatch,
	category,
	id,
}) {
	const [isShowCount, setIsShowCount] = useState(false);

	const handleCountAdd = ({ currentTarget }) => {
		dispatch({
			type: INCREASE_PRICE,
			id: currentTarget.id,
			category: category,
		});
	}; //currentTarget это объект на который повешен данный обработчик (кнопки + и -)

	const handleCountSub = ({ currentTarget }) => {
		if (cartCount === 1) {
			setIsShowCount(!isShowCount);
		} else {
			dispatch({
				type: DECREASE_PRICE,
				id: currentTarget.id,
				category: category,
			});
		}
	};

	function handleCartClick() {
		setIsShowCount(!isShowCount);
	}

	if (isShowCount) {
		return (
			<>
				<span className={styles.counter}>{cartCount}</span>
				<button
					className={styles.buttonCountChange}
					id={id}
					onClick={handleCountSub}
				>
					-
				</button>
				<span className={styles.price}>
					{cartPrice.toLocaleString()} &#x20bd;
				</span>
				<button
					className={styles.buttonCountChange}
					id={id}
					onClick={handleCountAdd}
				>
					+
				</button>
			</>
		);
	}

	return (
		<>
			<span className={styles.price}>
				{productPrice.toLocaleString()} &#x20bd;
			</span>

			<button className={styles.buttonAddToCart} onClick={handleCartClick}>
				В корзину
				<img src={cart}></img>
			</button>
		</>
	);
}
