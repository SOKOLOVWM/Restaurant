import styles from "./Refund.module.css";
import { Link } from "react-router-dom";
import { Title } from "../../common/Title/Title";

export function Refund({ styleContainer, styleBack }) {
	return (
		<section className={`${styles.refund} ${styleContainer}`}>
			<Link className={styleBack} to="/">
				&lt; к выбору блюд
			</Link>
			<Title title="Возврат товара" />
		</section>
	);
}
