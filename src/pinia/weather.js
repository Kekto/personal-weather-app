import { defineStore } from "pinia";
import axios from "/src/axios.js";
import { stylizeDate, addDays } from "/src/misc.js";

export const useWeatherStore = defineStore("weather", {
	state: () => {
		return {
			currentWeatherOrder: [],
			currentWeatherArr: [],
			locationHours: [],
			longTermWeatherDaily: [],
			longTermWeatherHourly: [],
			hour: "",
		};
	},
	actions: {
		async fetchCurrentWeatherFromLocation(latitude, longitude, locationId) {
			await axios
				.get(
					`https://api.open-meteo.com/v1/forecast?latitude=` +
						latitude +
						`&longitude=` +
						longitude +
						`&current_weather=true&timezone=CET`
				)
				.then((res) => {
					if (!this.currentWeatherOrder.includes(locationId)) {
						this.currentWeatherArr.push(res.data);
						this.currentWeatherOrder.push(locationId);
					} else {
						this.currentWeatherArr[
							this.currentWeatherOrder.indexOf(locationId)
						] = res.data;
					}
				})
				.catch((err) => {
					console.log(err);
				});
			// console.log(this.currentWeatherOrder);
			// console.log(this.currentWeatherArr);
		},
		async fetchLongTermReport(latitude, longitude) {
			let cd = new Date();
			await axios
				.get(
					`https://api.open-meteo.com/v1/forecast?latitude=` +
						latitude +
						`&longitude=` +
						longitude +
						`&hourly=temperature_2m,weathercode,windspeed_10m,winddirection_10m&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=Europe%2FBerlin&start_date=` +
						stylizeDate(cd) +
						`&end_date=` +
						stylizeDate(addDays(cd, 14))
				)
				.then((res) => {
					this.longTermWeatherDaily = this.adjustDailyJSON(res.data.daily);
					// console.log(this.longTermWeatherDaily);
					this.longTermWeatherHourly = this.adjustHourlyJSON(res.data.hourly);
					// console.log(this.longTermWeatherHourly);
				})
				.catch((err) => {
					console.log(err);
				});
		},
		adjustDailyJSON(dailyData) {
			var json = [];
			for (let i = 0; i < 15; i++) {
				let daily = {
					temperature_2m_max: dailyData.temperature_2m_max[i],
					temperature_2m_min: dailyData.temperature_2m_min[i],
					time: dailyData.time[i],
					weathercode: dailyData.weathercode[i],
				};
				json.push(daily);
			}
			return json;
		},
		adjustHourlyJSON(hourlyData) {
			var jsonDaily = [];
			let counter = 0;
			for (let i = 0; i < 15; i++) {
				var jsonHourly = [];
				for (let j = 0; j < 24; j++) {
					let hourly = {
						time: hourlyData.time[counter],
						temperature_2m: hourlyData.temperature_2m[counter],
						weathercode: hourlyData.weathercode[counter],
						windspeed_10m: hourlyData.windspeed_10m[counter],
						winddirection_10m: hourlyData.winddirection_10m[counter],
					};
					counter++;
					jsonHourly.push(hourly);
				}
				jsonDaily.push(jsonHourly);
			}
			return jsonDaily;
		},
	},
	getters: {
		// getCurrentWeather() {
		// 	return this.currentWeather;
		// },
		getCurrentWeatherArray() {
			return this.currentWeatherArr;
		},
		getCurrentWeatherIdByOrder() {
			return this.currentWeatherOrder;
		},
		getLongTermWeatherDaily() {
			return this.longTermWeatherDaily;
		},
		getLongTermWeatherHourly() {
			return this.longTermWeatherHourly;
		},
	},
});
