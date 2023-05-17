import styles from "./ArrowTop.module.css";

export function ArrowTop() {
	const scrollUp = () => {
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: "smooth",
		});
	};

	return (
		<a className={styles.container} onClick={scrollUp}>
			<div className={styles.arrow}></div>
		</a>
	);
}
