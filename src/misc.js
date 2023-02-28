import { Date } from "core-js";

function getWeatherIcon(weatherCode) {
	var cd = new Date();
	const hour = cd.getHours();
	if (weatherCode === 2 || weatherCode === 3) {
		return weatherCode;
	}

	if (hour >= 7 && hour < 19) {
		return weatherCode + "d";
	} else {
		return weatherCode + "n";
	}
}

export { getWeatherIcon };
