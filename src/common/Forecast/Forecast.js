import styles from "./Forecast.module.css";

export function Forecast({ forecast }) {
	return (
		<section className={styles.container}>
			<span className={styles.location}>{forecast.location}</span>
			<span className={styles.date}>
				{new Date(forecast.date).toDateString()}
			</span>
			<span className={styles.temperature}>
				{forecast.temperature} {forecast.temperature_unit}
			</span>
			<span className={styles.windspeed}>
				{forecast.windspeed} {forecast.windspeed_unit}
			</span>
		</section>
	);
}
