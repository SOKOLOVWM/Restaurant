import styles from "./Sale.module.css";
import { Link } from "react-router-dom";

export function Sale({ styleContainer, styleBack, styleTitle }) {
	return (
		<section className={`${styles.sale} ${styleContainer}`}>
			<Link className={styleBack} to="/">
				&lt; к выбору блюд
			</Link>
			<h2 className={`${styles.title} ${styleTitle}`}>Акции</h2>
		</section>
	);
}
