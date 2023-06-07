// import styles from "BasketCounterCommon.module.css";
import styles from "./BasketCounterCommon.module.css";
import cart from "./../../../assets/images/icon_cart.svg";
import bag from "./../../../assets/images/icon_bag.svg";
import { Button } from "../../Button/Button";

export function BasketCounterCommon({
	product,
	urlId,
	isShowCount,
	handleCountAdd,
	handleCountSub,
	handleCartClick,
}) {
	const { price: productPrice, cartPrice, cartCount, id } = product;

	if (isShowCount) {
		return (
			<div className={styles.container}>
				<span className={styles.counter}>{cartCount}</span>
				<Button
					title="-"
					id={id}
					handleClick={handleCountSub}
					addStyles={styles.addStylesButton}
				/>
				<span className={styles.price}>
					{cartPrice.toLocaleString()} &#x20bd;
				</span>
				<Button
					title="+"
					id={id}
					handleClick={handleCountAdd}
					addStyles={styles.addStylesButton}
				/>
			</div>
		);
	}

	return (
		<div className={styles.container}>
			<span className={styles.price}>
				{productPrice.toLocaleString()} &#x20bd;
			</span>

			<Button
				title={urlId ? "Корзина" : "В корзину"}
				image={urlId ? bag : cart}
				id={id}
				handleClick={handleCartClick}
			/>
		</div>
	);
}
