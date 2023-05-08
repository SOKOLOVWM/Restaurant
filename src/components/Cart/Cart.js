import styles from "./Cart.module.css";
import { Link } from "react-router-dom";

export function Cart() {
	return (
		<Link to="cart" className={styles.cart}>
			<div className={styles.title}>Корзина</div>
			<div className={styles.count}>
				<span>4</span>
			</div>
		</Link>
	);
}
