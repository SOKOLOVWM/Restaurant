import styles from "./Contacts.module.scss";
import calling from "./../../../../assets/images/icon_calling.svg";

export function Contacts() {
	return (
		<div className={styles.container}>
			<div className={styles.calling}>
				<img src={calling} alt="calling"></img>
			</div>
			<div className={styles.contacts}>
				<span>Контакты:</span>
				<span>+7 (917) 510-57-59</span>
			</div>
		</div>
	);
}
