import { defineStore } from "pinia";
import axios from "/src/axios.js";

export const useWeatherStore = defineStore("weather", {
	state: () => {
		return {
			currentWeather: Object,
		};
	},
	actions: {
		async fetchWeatherForNow() {
			await axios
				.get("/v1/forecast?latitude=51.25&longitude=22.57&current_weather=true")
				.then((res) => {
					this.currentWeather = res.data;
					console.log(res.data);
				})
				.catch((err) => {
					console.log(err);
				});
		},
	},
	getters: {
		getCurrentWeather() {
			return this.currentWeather;
		},
	},
});
