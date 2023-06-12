import { useState } from "react";
import styles from "./App.module.scss";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { Footer } from "./components/Footer/Footer";

export function App() {
	const [isShowMenu, setIsShowMenu] = useState(false);

	return (
		<div className={styles.container}>
			<Header isShowMenu={isShowMenu} setIsShowMenu={setIsShowMenu} />
			<Main />
			<Footer isShowMenu={isShowMenu} setIsShowMenu={setIsShowMenu} />
		</div>
	);
}
