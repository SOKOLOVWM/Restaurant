import styles from "./Navigation.module.css";
import { NavLink } from "react-router-dom";

export function Navigation() {
	return (
		<nav className={styles.navigation}>
			<NavLink to="/">Холодные закуски</NavLink>
			<NavLink to="/snackHot">Горячие закуски</NavLink>
			<NavLink to="/dishMeat">Мясные блюда</NavLink>
			<NavLink to="/soup">Супы</NavLink>
			<NavLink to="/dishFish">Рыбные блюда</NavLink>
			<NavLink to="/grill">Гриль меню</NavLink>
			<NavLink to="/specials">Фирменные блюда</NavLink>
			<NavLink to="/drinks">Напитки</NavLink>
		</nav>
	);
}
