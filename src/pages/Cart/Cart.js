import styles from "./Cart.module.css";
import { Link } from "react-router-dom";
import { MainContainer } from "../../common/MainContainer/MainContainer";
import { Title } from "../../common/Title/Title";
import { constants } from "../../constants/constants";

export function Cart() {
	return (
		<MainContainer addStyles={styles.cart}>
			<Title title={constants.common.cart} />
			<div className={styles.orderBox}>
				<Link
					className={styles.orderButton}
					to={constants.routs.order}
					state="true"
				>
					{constants.common.place_order}
				</Link>
			</div>
		</MainContainer>
	);
}
