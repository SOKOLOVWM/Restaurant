import cart from "./../../../../assets/images/icon_cart.svg";
import bag from "./../../../../assets/images/icon_bag.svg";
import { useState, useContext } from "react";
import { INCREASE_PRICE } from "../../../../reducer/types";
import { DECREASE_PRICE } from "../../../../reducer/types";
import { Button } from "../../../../common/Button/Button";
import { AppContext } from "../../../App/App";
import { useParams } from "react-router-dom";
import styles from "./BasketCounter.module.css";

export function BasketCounter({ product, dispatch, category, addStyles }) {
	const { price: productPrice, cartPrice, cartCount, id } = product;
	const [isShowCount, setIsShowCount] = useState(!!cartCount);
	const { cartTotalCount, setCartTotalCount } = useContext(AppContext);
	const { id: urlId } = useParams();

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

	function handleCartClick({ currentTarget }) {
		setIsShowCount(!isShowCount);
		setCartTotalCount(cartTotalCount + 1);
		dispatch({
			type: INCREASE_PRICE,
			id: currentTarget.id,
			category: category,
		});
	}

	if (isShowCount) {
		return (
			<div
				className={
					addStyles
						? `${styles.container} ${addStyles.addStylesContainer}`
						: styles.container
				}
			>
				<Button
					title="-"
					id={id}
					handleClick={handleCountSub}
					addStyles={addStyles}
				/>
				<span
					className={
						addStyles
							? `${styles.counter} ${addStyles.addStylesCounter}`
							: styles.counter
					}
				>
					{cartCount}
				</span>
				<span
					className={
						addStyles
							? `${styles.price} ${addStyles.addStylesPrice}`
							: styles.price
					}
				>
					{cartPrice.toLocaleString()} &#x20bd;
				</span>
				<Button
					title="+"
					id={id}
					handleClick={handleCountAdd}
					addStyles={addStyles}
					// addStyles={styles.buttonCountChange}
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
				addStyles={addStyles}
				title={urlId ? "Корзина" : "В корзину"}
				image={urlId ? bag : cart}
				id={id}
				handleClick={handleCartClick}
			/>
		</div>
	);
}
