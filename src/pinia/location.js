import { defineStore } from "pinia";
import axios from "/src/axios.js";

export const useLocationStore = defineStore("location", {
	state: () => {
		return {
			locations: [],
			allLocations: [],
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
		async fetchAllLocations() {
			await axios
				.get(`http://localhost:3000/allLocations`)
				.then((res) => {
					this.allLocations = res.data;
					// console.log(res.data);
				})
				.catch((err) => {
					console.log(err);
				});
		},
		async addLocation(id) {
			await axios
				.post(`http://localhost:3000/locations`, this.allLocations[id])
				.then((res) => {
					console.log(res);
				})
				.catch((err) => {
					console.log(err);
				});
		},
		async createCustomLocation(object) {
			await axios
				.post(`http://localhost:3000/allLocations`, object)
				.then((res) => {
					console.log(res);
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
		getAllLocations() {
			return this.allLocations;
		},
	},
});
