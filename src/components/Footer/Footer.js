import styles from "./Footer.module.scss";
import { Arrow } from "../../common/Arrow/Arrow";
import { Logo } from "../../common/Logo/Logo";
import { NavigationFooter } from "./NavigationFooter/NavigationFooter";
import { Forecast } from "../../common/Forecast/Forecast";

export function Footer({ isShowMenu, setIsShowMenu }) {
	return (
		<footer className={styles.footer}>
			<Arrow />
			<div className={styles.container}>
				<Logo />
				<span>&copy; ООО СК «АПШЕРОН» Все права защищены. 2010-2020</span>
				<span>Пользовательское соглашение</span>
				<span>Карта сайта</span>
				<span>Политика конфиденциальности</span>
			</div>
			<NavigationFooter isShowMenu={isShowMenu} setIsShowMenu={setIsShowMenu} />
			<Forecast />
		</footer>
	);
}
