import styles from "./OrderComponent.module.css";

export function OrderComponent({ children, title }) {
	return (
		<div className={styles.container}>
			<h4 className={styles.title}>{title}</h4>
			{children}
		</div>
	);
}
