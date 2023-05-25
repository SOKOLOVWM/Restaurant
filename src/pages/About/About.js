import styles from "./About.module.css";
import { MainContainer } from "../../common/MainContainer/MainContainer";
import { Title } from "../../common/Title/Title";

export function About() {
	return (
		<MainContainer addStyles={styles.about}>
			<Title title="О ресторане" />
		</MainContainer>
	);
}
