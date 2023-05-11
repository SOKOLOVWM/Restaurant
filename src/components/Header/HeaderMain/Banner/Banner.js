import styles from "./Banner.module.css";

export function Banner() {
	return (
		<div className={styles.banner}>
			<div className={styles.content}>
				<h1 className={styles.title}>Доставка вкуснейших блюд за 60 минут</h1>
				<span className={styles.question}>Ещё не пробовал?</span>
			</div>
		</div>
	);
}
