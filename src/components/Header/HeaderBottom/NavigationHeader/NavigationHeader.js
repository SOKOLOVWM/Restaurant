import styles from "./NavigationHeader.module.css";
import { NavLink, useLocation } from "react-router-dom";
import { menu } from "../../../../data/menu";

export function NavigationHeader() {
	const { pathname } = useLocation();

	return (
		<nav className={styles.navigation}>
			{menu.map((dish) => (
				<NavLink
					key={dish.id}
					to={dish.url}
					className={dish.id === 1 && !pathname.slice(1) ? "active" : ""}
				>
					{dish.title}
				</NavLink>
			))}
		</nav>
	);
}
