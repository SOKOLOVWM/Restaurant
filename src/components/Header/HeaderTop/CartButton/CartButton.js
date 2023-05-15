import styles from "./CartButton.module.css";
import cart from "./../../../../assets/images/icon_cart.svg";
import { Link } from "react-router-dom";

export function CartButton() {
	return (
		<Link to="/cart" state="true" className={styles.cartButton}>
			<img className={styles.cart} src={cart}></img>
			<div className={styles.title}>Корзина</div>
			<div className={styles.count}>
				<span>4</span>
			</div>
		</Link>
	);
}
