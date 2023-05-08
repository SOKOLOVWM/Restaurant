import styles from "./HeaderBottom.module.css";
import { Navigation } from "../Navigation/Navigation";

export function HeaderBottom() {
	return (
		<div className={styles.header_bottom}>
			<Navigation />
		</div>
	);
}
