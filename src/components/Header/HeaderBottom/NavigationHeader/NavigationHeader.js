import styles from "./NavigationHeader.module.scss";
import { NavLink, useLocation } from "react-router-dom";
import { initialState } from "../../../../reducer/initialState";

export function NavigationHeader() {
	const { pathname } = useLocation();

	return (
		<nav className={styles.navigation}>
			{initialState.map((dish) => (
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
