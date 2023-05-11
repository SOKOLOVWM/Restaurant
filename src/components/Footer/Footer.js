import styles from "./Footer.module.css";
import { ArrowTop } from "../../common/ArrowTop/ArrowTop";
import { Logo } from "../../common/Logo/Logo";
import { NavigationFooter } from "./NavigationFooter/NavigationFooter";

export function Footer() {
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
			<NavigationFooter />
		</footer>
	);
}
