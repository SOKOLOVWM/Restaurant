import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getGeoLoction = () => {
	return new Promise((resolve, reject) =>
		navigator.geolocation.getCurrentPosition(resolve, reject)
	);
};

const getFetch = (latitude, longitude) =>
	fetch(
		`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&hourly=temperature_2m,relativehumidity_2m,windspeed_10m`
	);

export const getForecast = createAsyncThunk(
	"forecast/getForecast",
	async () => {
		try {
			const position = await getGeoLoction();
			const { latitude, longitude } = position.coords;
			const response = await getFetch(latitude, longitude);
			return await response.json();
		} catch (error) {
			const response = await getFetch(52.52, 13.41);
			return await response.json();
		}
	}
);

const forecastSlice = createSlice({
	name: "forecastSlice",
	initialState: {
		forecast: {},
		status: "idle",
		error: null,
	},
	reducers: {},
	extraReducers(builder) {
		builder.addCase(getForecast.pending, (state, action) => {
			state.status = "loading";
		});
		builder.addCase(getForecast.fulfilled, (state, action) => {
			const forecastData = {
				date: action.payload.current_weather.time,
				location: "Minsk",
				temperature: action.payload.current_weather.temperature,
				temperature_unit: action.payload.hourly_units.temperature_2m,
				windspeed: action.payload.current_weather.windspeed,
				windspeed_unit: action.payload.hourly_units.windspeed_10m,
			};
			state.status = "succeed";
			state.forecast = forecastData;
		});
		builder.addCase(getForecast.rejected, (state, action) => {
			state.status = "failed";
			state.error = action.error.message;
		});
	},
});

export default forecastSlice.reducer;
