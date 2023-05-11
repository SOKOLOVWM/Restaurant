import styles from "./HeaderBottom.module.css";
import { NavigationHeader } from "./NavigationHeader/NavigationHeader";

export function HeaderBottom() {
	return (
		<div className={styles.header_bottom}>
			<NavigationHeader />
		</div>
	);
}
