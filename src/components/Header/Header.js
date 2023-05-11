import styles from "./Header.module.css";
import { HeaderTop } from "./HeaderTop/HeaderTop";
import { HeaderMain } from "./HeaderMain/HeaderMain";
import { HeaderBottom } from "./HeaderBottom/HeaderBottom";
import { useLocation } from "react-router-dom";

export function Header() {
	let { state } = useLocation(); //huck с именем useLocation возвращает объект, своством которого йавлйетсйа state

	return (
		<header className={styles.header}>
			<HeaderTop />
			{!state && (
				<>
					<HeaderMain />
					<HeaderBottom />
				</>
			)}
			{/* state выступает в роли флага длйа отображенийа/сокрытие Baner и Navigation (значение передаетсйа в CartButton) */}
		</header>
	);
}
