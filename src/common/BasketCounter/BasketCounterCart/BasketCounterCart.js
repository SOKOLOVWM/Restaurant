import styles from "./BasketCounterCart.module.scss";
import { Button } from "../../Button/Button";

export function BasketCounterCart({ product, handleCountAdd, handleCountSub }) {
	const { cartPrice, cartCount, id } = product;

	return (
		<div className={styles.container}>
			<Button
				title="-"
				id={id}
				handleClick={handleCountSub}
				addStyles={styles.addStylesButton}
			/>
			<span className={styles.counter}>{cartCount}</span>
			<Button
				title="+"
				id={id}
				handleClick={handleCountAdd}
				addStyles={styles.addStylesButton}
			/>
			<span className={styles.price}>
				{cartPrice.toLocaleString()} &#x20bd;
			</span>
		</div>
	);
}
