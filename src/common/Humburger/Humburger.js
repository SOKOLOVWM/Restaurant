import styles from "./Humburger.module.scss";

export function Humburger({ isShowMenu, setIsShowMenu }) {
	return (
		<nav
			className={styles.container}
			onClick={() => setIsShowMenu(!isShowMenu)}
		>
			<div className={styles.humburger}>
				<div className={styles.line}></div>
				<span className={styles.title}>Menu</span>
			</div>
		</nav>
	);
}
