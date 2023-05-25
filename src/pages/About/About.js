import styles from "./About.module.css";
import { Link } from "react-router-dom";
import { Title } from "../../common/Title/Title";

export function About({ styleContainer, styleBack }) {
	return (
		<section className={`${styles.about} ${styleContainer}`}>
			<Link className={styleBack} to="/">
				&lt; к выбору блюд
			</Link>
			<Title title="О ресторане" />
		</section>
	);
}
