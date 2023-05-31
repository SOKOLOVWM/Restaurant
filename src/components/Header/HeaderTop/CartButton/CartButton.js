import styles from "./CartButton.module.css";
import cart from "./../../../../assets/images/icon_cart.svg";
import { Link } from "react-router-dom";
import { constants } from "../../../../constants/constants";
import { useContext } from "react";
import { AppContext } from "../../../App/App";

export function CartButton() {
	const { cartTotalCount } = useContext(AppContext);

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
