import styles from "./NavigationHeader.module.css";
import { NavLink } from "react-router-dom";
import { menu } from "../../../../data/menu";

export function NavigationHeader() {
	return (
		<nav className={styles.navigation}>
			{menu.map((dish) => (
				<NavLink key={dish.id} to={dish.url}>
					{dish.title}
				</NavLink>
			))}
		</nav>
	);
}
