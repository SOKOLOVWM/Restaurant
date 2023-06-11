import styles from "./About.module.scss";
import { MainContainer } from "../../common/MainContainer/MainContainer";
import { Title } from "../../common/Title/Title";
import { constants } from "../../constants/constants";

export function About() {
	return (
		<MainContainer addStyles={styles.about}>
			<Title title={constants.common.about} />
		</MainContainer>
	);
}
