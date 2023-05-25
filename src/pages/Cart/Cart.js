import styles from "./Cart.module.css";
import { Link } from "react-router-dom";
import { Title } from "../../common/Title/Title";

export function Cart({ styleContainer, styleBack }) {
	return (
		<section className={`${styles.cart} ${styleContainer}`}>
			<Link className={styleBack} to="/">
				&lt; к выбору блюд
			</Link>
			<Title title="Корзина" />
			<div className={styles.orderBox}>
				<Link className={styles.orderButton} to="/order" state="true">
					Оформить заказ
				</Link>
			</div>
		</section>
	);
}
