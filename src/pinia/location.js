import { defineStore } from "pinia";
import axios from "/src/axios.js";

export const useLocationStore = defineStore("location", {
	state: () => {
		return {
			locations: [],
		};
	},
	actions: {
		async fetchCurrentLocations() {
			await axios
				.get(`http://localhost:3000/locations`)
				.then((res) => {
					this.locations = res.data;
					// console.log(res.data);
				})
				.catch((err) => {
					console.log(err);
				});
		},
	},
	getters: {
		getCurrentLocations() {
			return this.locations;
		},
	},
});
