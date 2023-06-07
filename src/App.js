import { useState, useEffect, useReducer, createContext } from "react";
import styles from "./App.module.css";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { Footer } from "./components/Footer/Footer";
import { initialState } from "./reducer/initialState";
import { productReducer } from "./reducer/productReducer";

export const AppContext = createContext();

export function App() {
	const [forecast, setForecast] = useState({});
	const [isShowMenu, setIsShowMenu] = useState(false);
	const [cartTotalCount, setCartTotalCount] = useState(0);
	const [state, dispatch] = useReducer(productReducer, initialState);

	useEffect(() => {
		fetch(
			"https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m"
		)
			.then((response) => response.json())
			.then((forecast) => {
				const forecastData = {
					date: forecast.current_weather.time,
					location: "Minsk",
					temperature: forecast.current_weather.temperature,
					temperature_unit: forecast.hourly_units.temperature_2m,
					windspeed: forecast.current_weather.windspeed,
					windspeed_unit: forecast.hourly_units.windspeed_10m,
				};
				setForecast(forecastData);
			});
	}, []);

	return (
		<AppContext.Provider
			value={{
				state,
				dispatch,
				cartTotalCount,
				setCartTotalCount,
			}}
		>
			<div className={styles.container}>
				<Header isShowMenu={isShowMenu} setIsShowMenu={setIsShowMenu} />
				<Main />
				<Footer
					isShowMenu={isShowMenu}
					setIsShowMenu={setIsShowMenu}
					forecast={forecast}
				/>
			</div>
		</AppContext.Provider>
	);
}