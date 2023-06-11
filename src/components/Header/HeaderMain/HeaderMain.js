import styles from "./HeaderMain.module.scss";
import { Banner } from "./Banner/Banner";

export function HeaderMain() {
	return (
		<div className={styles.header_main}>
			<Banner />
		</div>
	);
}
