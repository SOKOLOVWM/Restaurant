import styles from "./Preloader.module.scss";
import preloader from "./../../assets/images/spinner_loader.svg";

export function Preloader() {
	return (
		<div className={styles.preloader}>
			<img src={preloader} alt="preloader" />
		</div>
	);
}
