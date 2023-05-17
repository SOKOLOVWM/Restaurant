import styles from "./Footer.module.css";
import { ArrowTop } from "../../common/ArrowTop/ArrowTop";
import { Logo } from "../../common/Logo/Logo";
import { NavigationFooter } from "./NavigationFooter/NavigationFooter";
import { Forecast } from "../../common/Forecast/Forecast";

export function Footer({ isShowMenu, setIsShowMenu, forecast }) {
	return (
		<footer className={styles.footer}>
			<ArrowTop />
			<div className={styles.container}>
				<Logo />
				<span>&copy; ООО СК «АПШЕРОН» Все права защищены. 2010-2020</span>
				<span>Пользовательское соглашение</span>
				<span>Карта сайта</span>
				<span>Политика конфиденциальности</span>
			</div>
			<NavigationFooter isShowMenu={isShowMenu} setIsShowMenu={setIsShowMenu} />
			<Forecast forecast={forecast} />
		</footer>
	);
}
