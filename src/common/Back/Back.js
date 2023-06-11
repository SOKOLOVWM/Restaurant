import styles from "./Back.module.scss";
import { useNavigate } from "react-router-dom";

export function Back() {
	const navigate = useNavigate();

	const goBack = () => {
		navigate(-1);
	};

	return (
		<div className={styles.goBack} onClick={goBack}>
			<div className={styles.arrowBox}>
				<div className={styles.arrow}></div>
			</div>
			<span className={styles.goBackTitle}>Вернуться назад</span>
		</div>
	);
}
