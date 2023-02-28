import { defineStore } from "pinia";
import axios from "/src/axios.js";

export const useWeatherStore = defineStore("weather", {
	state: () => {
		return {
			currentWeather: [],
			currentWeatherArr: [],
			hour: "",
		};
	},
	actions: {
		// async fetchCurrentWeather() {
		// 	await axios
		// 		.get(
		// 			"https://api.open-meteo.com/v1/forecast?latitude=51.25&longitude=22.57&current_weather=true&timezone=CET"
		// 		)
		// 		.then((res) => {
		// 			this.currentWeather = res.data;
		// 			console.log(res.data);
		// 		})
		// 		.catch((err) => {
		// 			console.log(err);
		// 		});
		// },
		async fetchCurrentWeatherFromLocation(latitude, longitude) {
			await axios
				.get(
					`https://api.open-meteo.com/v1/forecast?latitude=` +
						latitude +
						`&longitude=` +
						longitude +
						`&current_weather=true&timezone=CET`
				)
				.then((res) => {
					this.currentWeatherArr.push(res.data);
					console.log(res.data);
				})
				.catch((err) => {
					console.log(err);
				});
			console.log(this.currentWeatherArr);
		},
	},
	getters: {
		// getCurrentWeather() {
		// 	return this.currentWeather;
		// },
		getCurrentWeatherArray() {
			return this.currentWeatherArr;
		},
	},
});
