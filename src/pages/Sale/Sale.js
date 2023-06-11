import styles from "./Sale.module.scss";
import { MainContainer } from "../../common/MainContainer/MainContainer";
import { Title } from "../../common/Title/Title";
import { constants } from "../../constants/constants";

export function Sale() {
	return (
		<MainContainer addStyles={styles.sale}>
			<Title title={constants.common.sale} />
		</MainContainer>
	);
}
