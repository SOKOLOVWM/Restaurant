import { constants } from "../../../../constants/constants";
import styles from "./Banner.module.scss";

export function Banner() {
	return (
		<div className={styles.banner}>
			<div className={styles.content}>
				<h1 className={styles.title}>{constants.banner.tagline}</h1>
				<span className={styles.question}>{constants.banner.question}</span>
			</div>
		</div>
	);
}
