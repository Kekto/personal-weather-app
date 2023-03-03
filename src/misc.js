import { Date } from "core-js";

function getWeatherIcon(weatherCode) {
	var cd = new Date();
	const hour = cd.getHours();
	var code = weatherCode;

	if (weatherCode === 2 || weatherCode === 3) {
		return code;
	}
	if (weatherCode === 48) {
		code = 45;
	}
	if (weatherCode === 53 || weatherCode === 55) {
		code = 51;
	}
	if (weatherCode === 57) {
		code = 56;
	}
	if (weatherCode === 63 || weatherCode === 65) {
		code = 61;
	}
	if (weatherCode === 67) {
		code = 66;
	}
	if (weatherCode === 73 || weatherCode === 75 || weatherCode === 77) {
		code = 71;
	}
	if (weatherCode === 81 || weatherCode === 82) {
		code = 80;
	}
	if (weatherCode === 86) {
		code = 85;
	}
	if (weatherCode === 99) {
		code = 96;
	}

	if (hour >= 7 && hour < 19) {
		return code + "d";
	} else {
		return code + "n";
	}
}

function zeroPadding(num, digit) {
	var zero = "";
	for (var i = 0; i < digit; i++) {
		zero += "0";
	}
	return (zero + num).slice(-digit);
}

function addDays(date, days) {
	var tempDate = new Date();
	tempDate.setDate(date.getDate() + days);
	return tempDate;
}

export { getWeatherIcon, zeroPadding, addDays };
