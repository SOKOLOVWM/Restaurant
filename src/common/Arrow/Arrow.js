import styles from "./Arrow.module.scss";

export function Arrow() {
	const scrollUp = () => {
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: "smooth",
		});
	};

	return (
		<div className={styles.container} onClick={scrollUp}>
			<div className={styles.arrow}></div>
		</div>
	);
}
