import styles from "./HeaderMain.module.css";
import { Banner } from "./Banner/Banner";

export function HeaderMain() {
	return (
		<div className={styles.header_main}>
			<Banner />
		</div>
	);
}
