import styles from "./Main.module.css";
import { Roater } from "../Routes/Router";

export function Main() {
	return (
		<main className={styles.main}>
			<Roater
				styleContainer={styles.styleContainer}
				styleBack={styles.styleBack}
				styleTitle={styles.styleTitle}
			/>
		</main>
	);
}
