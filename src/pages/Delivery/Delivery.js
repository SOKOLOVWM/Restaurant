import styles from "./Delivery.module.scss";
import { MainContainer } from "../../common/MainContainer/MainContainer";
import { Title } from "../../common/Title/Title";
import { constants } from "../../constants/constants";

export function Delivery() {
	return (
		<MainContainer addStyles={styles.delivery}>
			<Title title={constants.common.delivery} />
		</MainContainer>
	);
}
