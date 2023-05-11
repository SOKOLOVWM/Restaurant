import styles from "./ArrowTop.module.css";

export function ArrowTop() {
	return (
		<a className={styles.container} href="#">
			<div className={styles.arrow}></div>
		</a>
	);
}
