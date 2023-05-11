import styles from "./Basket.module.css";
import cart from "./../../../../assets/images/icon_cart.svg";
import { useState } from "react";

export function Basket() {
	const [count, setCount] = useState(1);
	const [showCount, setShowCount] = useState(false);

	const countAdd = () => setCount(count + 1);

	const countSub = () =>
		count === 1 ? setShowCount(!showCount) : setCount(count - 1);

	function handleCartClick() {
		setShowCount(!showCount);
	}

	function Counter() {
		return (
			<>
				<span className={styles.counter}>{count}</span>
				<button className={styles.buttonCountChange} onClick={countSub}>
					-
				</button>
				<button className={styles.buttonCountChange} onClick={countAdd}>
					+
				</button>
			</>
		);
	}

	return (
		<>
			{!showCount && (
				<button className={styles.buttonAddToCart} onClick={handleCartClick}>
					В корзину
					<img src={cart}></img>
				</button>
			)}

			{showCount && Counter()}
		</>
	);
}
