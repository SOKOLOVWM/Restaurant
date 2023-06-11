import styles from "./Delivery.module.scss";
import location from "./../../../../assets/images/icon_location.svg";
import magnifier from "./../../../../assets/images/icon_magnifier.svg";

export function Delivery() {
	return (
		<div className={styles.delivery}>
			<img className={styles.location} src={location} alt="location"></img>

			<input
				className={styles.address}
				type="text"
				placeholder="Введите адрес доставки"
			></input>

			<button className={styles.button} type="submit">
				<img src={magnifier} alt="magnifier"></img>
			</button>
		</div>
	);
}
