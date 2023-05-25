import styles from "./Cart.module.css";
import { Link } from "react-router-dom";
import { MainContainer } from "../../common/MainContainer/MainContainer";
import { Title } from "../../common/Title/Title";

export function Cart() {
	return (
		<MainContainer addStyles={styles.cart}>
			<Title title="Корзина" />
			<div className={styles.orderBox}>
				<Link className={styles.orderButton} to="/order" state="true">
					Оформить заказ
				</Link>
			</div>
		</MainContainer>
	);
}
