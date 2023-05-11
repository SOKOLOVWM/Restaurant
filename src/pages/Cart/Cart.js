import styles from "./Cart.module.css";
import { Link } from "react-router-dom";

export function Cart() {
	return (
		<section className={styles.cart}>
			<Link className={styles.back} to="/">
				&lt; к выбору блюда
			</Link>
			<header className={styles.cart__title}>Корзина</header>
		</section>
	);
}
