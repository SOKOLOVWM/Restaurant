import styles from "./Sale.module.css";
import { MainContainer } from "../../common/MainContainer/MainContainer";
import { Title } from "../../common/Title/Title";

export function Sale() {
	return (
		<MainContainer addStyles={styles.sale}>
			<Title title="Акции" />
		</MainContainer>
	);
}
