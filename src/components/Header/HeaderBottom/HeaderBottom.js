import styles from "./HeaderBottom.module.scss";
import { NavigationHeader } from "./NavigationHeader/NavigationHeader";

export function HeaderBottom() {
	return (
		<div className={styles.header_bottom}>
			<NavigationHeader />
		</div>
	);
}
