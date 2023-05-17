import styles from "./About.module.css";
import { Link } from "react-router-dom";

export function About({ styleContainer, styleBack, styleTitle }) {
	return (
		<section className={`${styles.about} ${styleContainer}`}>
			<Link className={styleBack} to="/">
				&lt; к выбору блюд
			</Link>

			<h2 className={`${styles.title} ${styleTitle}`}>О ресторане</h2>
		</section>
	);
}
