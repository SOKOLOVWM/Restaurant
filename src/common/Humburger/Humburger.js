import styles from "./Humburger.module.css";

export function Humburger({ showMenu, setShowMenu }) {
	return (
		<nav className={styles.container} onClick={() => setShowMenu(!showMenu)}>
			<div className={styles.humburger}>
				<div className={styles.humburger__line}></div>
				<span className={styles.title}>Menu</span>
			</div>
		</nav>
	);
}
