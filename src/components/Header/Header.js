import styles from "./Header.module.scss";
import { HeaderTop } from "./HeaderTop/HeaderTop";
import { HeaderMain } from "./HeaderMain/HeaderMain";
import { HeaderBottom } from "./HeaderBottom/HeaderBottom";
import { useLocation } from "react-router-dom";

export function Header({ isShowMenu, setIsShowMenu }) {
	let { state } = useLocation();

	return (
		<header className={styles.header}>
			<HeaderTop isShowMenu={isShowMenu} setIsShowMenu={setIsShowMenu} />
			{!state && (
				<>
					<HeaderMain />
					<HeaderBottom />
				</>
			)}
		</header>
	);
}
