import styles from "./BasketCounter.module.css";
import cart from "./../../../../assets/images/icon_cart.svg";
import { useState } from "react";

export function BasketCounter({ productPrice }) {
	const [count, setCount] = useState(1);
	const [price, setPrice] = useState(productPrice);
	const [isShowCount, setIsShowCount] = useState(false);

	const handleCountAdd = () => {
		setCount(count + 1);
		setPrice(price + productPrice);
	};

	const handleCountSub = () => {
		if (count === 1) {
			setIsShowCount(!isShowCount);
		} else {
			setCount(count - 1);
			setPrice(price - productPrice);
		}
	};

	function handleCartClick() {
		setIsShowCount(!isShowCount);
	}

	if (isShowCount) {
		return (
			<>
				<span className={styles.counter}>{count}</span>
				<button className={styles.buttonCountChange} onClick={handleCountSub}>
					-
				</button>
				<span className={styles.price}>{price.toLocaleString()} &#x20bd;</span>
				<button className={styles.buttonCountChange} onClick={handleCountAdd}>
					+
				</button>
			</>
		);
	}

	return (
		<>
			<span className={styles.price}>{price.toLocaleString()} &#x20bd;</span>

			<button className={styles.buttonAddToCart} onClick={handleCartClick}>
				В корзину
				<img src={cart}></img>
			</button>
		</>
	);
}
