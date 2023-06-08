import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import styles from "./CartButton.module.css";
import cart from "./../../../../assets/images/icon_cart.svg";
import { constants } from "../../../../constants/constants";

export function CartButton() {
	const cartTotalCount = useSelector(
		(state) => state.cartReducer.cartInitialState
	);

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
