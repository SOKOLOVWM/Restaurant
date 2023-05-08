import styles from "./Header.module.css";
import { HeaderTop } from "../HeaderTop/HeaderTop";
import { HeaderMain } from "../HeaderMain/HeaderMain";
import { HeaderBottom } from "../HeaderBottom/HeaderBottom";

export function Header() {
	return (
		<header className={styles.header}>
			<HeaderTop />
			<HeaderMain />
			<HeaderBottom />
		</header>
	);
}
