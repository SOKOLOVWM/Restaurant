import styles from "./Refund.module.css";
import { MainContainer } from "../../common/MainContainer/MainContainer";
import { Title } from "../../common/Title/Title";

export function Refund() {
	return (
		<MainContainer addStyles={styles.refund}>
			<Title title="Возврат товара" />
		</MainContainer>
	);
}
