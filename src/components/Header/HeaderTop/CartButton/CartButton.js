import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./CartButton.module.scss";
import cart from "./../../../../assets/images/icon_cart.svg";
import { constants } from "../../../../constants/constants";
import { setCookies } from "../../../../reducer/cartSlice";

export function CartButton() {
	const cartTotalCount = useSelector(
		(state) => state.cartSlice.cartInitialState
	);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(setCookies(cartTotalCount));
	}, [cartTotalCount]);

	return (
		<Link to="/cart" state="true" className={styles.cartButton}>
			<img className={styles.cart} src={cart} alt="cart"></img>
			<div className={styles.title}>{constants.common.cart}</div>
			<div className={styles.count}>
				<span>{cartTotalCount}</span>
			</div>
		</Link>
	);
}
