import styles from "./BasketCounter.module.css";
import cart from "./../../../../assets/images/icon_cart.svg";
import { useState } from "react";
import { INCREASE_PRICE } from "../../../../reducer/types";
import { DECREASE_PRICE } from "../../../../reducer/types";
import { Button } from "../../../../common/Button/Button";

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

		console.log(currentTarget.id);
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

		console.log(currentTarget.id);
	};

	function handleCartClick() {
		setIsShowCount(!isShowCount);
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

			<Button title="В корзину" image={cart} handleClick={handleCartClick} />
		</>
	);
}
