import styles from "./App.module.css";
import { Header } from "../Header/Header";
import { Main } from "../Main/Main";

export function App() {
	return (
		<div className={styles.container}>
			<Header />
			<Main />
		</div>
	);
}
