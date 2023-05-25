import styles from "./Main.module.css";
import { Roater } from "../Routes/Router";

export function Main() {
	return (
		<main className={styles.main}>
			<Roater />
		</main>
	);
}
