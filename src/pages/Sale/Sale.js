import styles from "./Sale.module.css";
import { Link } from "react-router-dom";
import { Title } from "../../common/Title/Title";

export function Sale({ styleContainer, styleBack }) {
	return (
		<section className={`${styles.sale} ${styleContainer}`}>
			<Link className={styleBack} to="/">
				&lt; к выбору блюд
			</Link>
			<Title title="Акции" />
		</section>
	);
}
