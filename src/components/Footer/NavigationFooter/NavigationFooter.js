import styles from "./NavigationFooter.module.css";
import { Link } from "react-router-dom";
import { pages } from "../../../data/pages";

export function NavigationFooter() {
	return (
		<nav className={styles.navigation}>
			{pages.map((page) => (
				<Link key={page.id} to={page.url}>
					{page.title}
				</Link>
			))}
		</nav>
	);
}
