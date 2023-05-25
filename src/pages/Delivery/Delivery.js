import { Link } from "react-router-dom";
import styles from "./Delivery.module.css";
import { Title } from "../../common/Title/Title";

export function Delivery({ styleContainer, styleBack }) {
	return (
		<section className={`${styles.delivery} ${styleContainer}`}>
			<Link className={styleBack} to="/">
				&lt; к выбору блюд
			</Link>
			<Title title="Условия доставки" />
		</section>
	);
}
