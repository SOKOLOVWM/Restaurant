import styles from "./Refund.module.scss";
import { MainContainer } from "../../common/MainContainer/MainContainer";
import { Title } from "../../common/Title/Title";
import { constants } from "../../constants/constants";

export function Refund() {
	return (
		<MainContainer addStyles={styles.refund}>
			<Title title={constants.common.refund} />
		</MainContainer>
	);
}
