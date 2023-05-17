import { Link } from "react-router-dom";
import styles from "./Delivery.module.css";

export function Delivery({ styleContainer, styleBack, styleTitle }) {
	return (
		<section className={`${styles.delivery} ${styleContainer}`}>
			<Link className={styleBack} to="/">
				&lt; к выбору блюд
			</Link>
			<h2 className={`${styles.title} ${styleTitle}`}>Условия доставки</h2>
		</section>
	);
}
