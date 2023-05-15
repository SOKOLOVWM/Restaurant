import styles from "./Header.module.css";
import { HeaderTop } from "./HeaderTop/HeaderTop";
import { HeaderMain } from "./HeaderMain/HeaderMain";
import { HeaderBottom } from "./HeaderBottom/HeaderBottom";
import { useLocation } from "react-router-dom";

export function Header() {
	let { state } = useLocation();

	return (
		<header className={styles.header}>
			<HeaderTop />
			{!state && (
				<>
					<HeaderMain />
					<HeaderBottom />
				</>
			)}
		</header>
	);
}
