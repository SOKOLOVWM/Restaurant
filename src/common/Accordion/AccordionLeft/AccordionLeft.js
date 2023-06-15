import styles from "./AccordionLeft.module.scss";

export function AccordionLeft({ title, content }) {
	return (
		<details className={styles.accordionItem}>
			<summary className={styles.accordionTitle}>{title}</summary>
			<p className={styles.accordionContent}>{content}</p>
		</details>
	);
}
