import styles from "./MainContainer.module.css";
import { Link } from "react-router-dom";

export function MainContainer({ children, backward = true, addStyles }) {
	return (
		<section className={`${styles.container} ${addStyles}`}>
			{backward && (
				<Link className={styles.backward} to="/">
					&lt; к выбору блюд
				</Link>
			)}
			{children}
		</section>
	);
}
