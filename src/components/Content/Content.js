import styles from "./Content.module.css";

export function Content({ title }) {
	return (
		<div className={styles.content}>
			<h2 className={styles.title}>{title}</h2>
		</div>
	);
}
