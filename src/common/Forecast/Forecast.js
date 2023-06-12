import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Forecast.module.scss";
import { getForecast } from "../../reducer/forecastSlice";
import { Preloader } from "../Preloader/Preloader";

export function Forecast() {
	const { forecast, status, error } = useSelector(
		(state) => state.forecastSlice
	);
	const dispatch = useDispatch();

	useEffect(() => {
		if (status === "idle") {
			dispatch(getForecast());
		}
	}, [status, dispatch]);

	const render = () => {
		switch (status) {
			case "loading": {
				return (
					<section className={styles.container}>
						<div className={styles.loading}>
							<Preloader />
						</div>
					</section>
				);
			}
			case "succeed": {
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
			case "failed": {
				return (
					<section className={styles.container}>
						<div className={styles.error}>{error}</div>
					</section>
				);
			}
			default: {
				return <div className={styles.error}>Something went wrong...</div>;
			}
		}
	};

	return render();
}
