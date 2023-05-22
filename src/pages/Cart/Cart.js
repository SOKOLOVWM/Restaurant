import styles from "./Cart.module.css";
import { Link } from "react-router-dom";

export function Cart({ styleContainer, styleBack, styleTitle }) {
	return (
		<section className={`${styles.cart} ${styleContainer}`}>
			<Link className={styleBack} to="/">
				&lt; к выбору блюд
			</Link>
			<h2 className={`${styles.title} ${styleTitle}`}>Корзина</h2>
			<div className={styles.orderBox}>
				<Link className={styles.orderButton} to="/order" state="true">
					Оформить заказ
				</Link>
			</div>
		</section>
	);
}
