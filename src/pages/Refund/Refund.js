import { Link } from "react-router-dom";
import styles from "./Refund.module.css";

export function Refund({ styleContainer, styleBack, styleTitle }) {
	return (
		<section className={`${styles.refund} ${styleContainer}`}>
			<Link className={styleBack} to="/">
				&lt; к выбору блюд
			</Link>
			<h2 className={`${styles.title} ${styleTitle}`}>Возврат товара</h2>
		</section>
	);
}
