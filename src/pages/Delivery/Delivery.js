import styles from "./Delivery.module.css";
import { MainContainer } from "../../common/MainContainer/MainContainer";
import { Title } from "../../common/Title/Title";

export function Delivery() {
	return (
		<MainContainer addStyles={styles.delivery}>
			<Title title="Условия доставки" />
		</MainContainer>
	);
}
